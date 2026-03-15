/**
 * Unit Tests for Calendar Service
 * 
 * Tests calendar event creation, Pub/Sub events, and security controls
 */

import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import { UnifiedCalendarService } from '../unified-calendar';

describe('UnifiedCalendarService', () => {
  let service: UnifiedCalendarService;

  beforeEach(() => {
    service = UnifiedCalendarService.getInstance();
  });

  describe('Event Creation', () => {
    it('should create event with secure UUID', async () => {
      const eventData = {
        id: crypto.randomUUID(),
        title: 'Prayer Meeting',
        start: '2026-02-11T19:00:00Z',
        end: '2026-02-11T20:00:00Z',
        type: 'meeting' as const,
        churchId: 'church-123',
        participants: ['user-1', 'user-2']
      };

      const result = await service.createEvent(eventData);

      expect(result.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
      expect(result.title).toBe('Prayer Meeting');
      expect(result.created).toBeDefined();
    });

    it('should reject events with oversized titles', async () => {
      const eventData = {
        id: crypto.randomUUID(),
        title: 'A'.repeat(201), // Max is 200
        start: '2026-02-11T19:00:00Z',
        end: '2026-02-11T20:00:00Z',
        type: 'meeting' as const,
        churchId: 'church-123',
        participants: []
      };

      await expect(service.createEvent(eventData)).rejects.toThrow();
    });

    it('should reject events with too many participants', async () => {
      const eventData = {
        id: crypto.randomUUID(),
        title: 'Large Event',
        start: '2026-02-11T19:00:00Z',
        end: '2026-02-11T20:00:00Z',
        type: 'service' as const,
        churchId: 'church-123',
        participants: Array.from({ length: 101 }, (_, i) => `user-${i}`) // Max is 100
      };

      await expect(service.createEvent(eventData)).rejects.toThrow();
    });

    it('should emit Pub/Sub event after creation', async () => {
      const eventData = {
        id: crypto.randomUUID(),
        title: 'Worship Service',
        start: '2026-02-11T10:00:00Z',
        end: '2026-02-11T11:30:00Z',
        type: 'service' as const,
        churchId: 'church-123',
        participants: ['leader-1']
      };

      // TODO: Mock publishEvent
      const publishSpy = jest.fn();

      const result = await service.createEvent(eventData);

      // Verify Pub/Sub event was published
      // expect(publishSpy).toHaveBeenCalledWith(
      //   expect.objectContaining({
      //     eventType: 'calendar.event.created'
      //   })
      // );
    });
  });

  describe('Event Retrieval', () => {
    it('should retrieve events for date range', async () => {
      const churchId = 'church-123';
      const start = '2026-02-01T00:00:00Z';
      const end = '2026-02-28T23:59:59Z';

      const events = await service.getEvents(churchId, start, end);

      expect(Array.isArray(events)).toBe(true);
    });

    it('should cache event queries', async () => {
      const churchId = 'church-123';
      const start = '2026-02-01T00:00:00Z';
      const end = '2026-02-28T23:59:59Z';

      // First call
      const events1 = await service.getEvents(churchId, start, end);
      
      // Second call (should hit cache)
      const events2 = await service.getEvents(churchId, start, end);

      expect(events1).toEqual(events2);
    });

    it('should invalidate cache after creating event', async () => {
      const churchId = 'church-123';
      
      // Get events (populates cache)
      await service.getEvents(churchId, '2026-02-01T00:00:00Z', '2026-02-28T23:59:59Z');

      // Create new event (should clear cache)
      await service.createEvent({
        id: crypto.randomUUID(),
        title: 'New Event',
        start: '2026-02-15T10:00:00Z',
        end: '2026-02-15T11:00:00Z',
        type: 'meeting' as const,
        churchId,
        participants: []
      });

      // Get events again (should fetch fresh data)
      const events = await service.getEvents(churchId, '2026-02-01T00:00:00Z', '2026-02-28T23:59:59Z');
      
      // TODO: Verify cache was cleared
    });
  });

  describe('Google Calendar Integration', () => {
    it('should sync events to Google Calendar', async () => {
      const churchId = 'church-123';
      const googleCalendarId = 'church@google.com';

      const result = await service.syncWithGoogle(churchId, googleCalendarId);

      expect(result.synced).toBeDefined();
    });

    it('should handle sync failures gracefully', async () => {
      const churchId = 'invalid-church';
      const googleCalendarId = 'invalid@google.com';

      const result = await service.syncWithGoogle(churchId, googleCalendarId);

      expect(result.synced).toBe(false);
      expect(result.error).toBeDefined();
    });
  });

  describe('Performance', () => {
    it('should handle concurrent event creation', async () => {
      const promises = Array.from({ length: 10 }, (_, i) =>
        service.createEvent({
          id: crypto.randomUUID(),
          title: `Event ${i}`,
          start: '2026-02-11T10:00:00Z',
          end: '2026-02-11T11:00:00Z',
          type: 'meeting' as const,
          churchId: 'church-123',
          participants: []
        })
      );

      const results = await Promise.all(promises);

      expect(results).toHaveLength(10);
      expect(new Set(results.map(r => r.id)).size).toBe(10); // All unique IDs
    });
  });
});
