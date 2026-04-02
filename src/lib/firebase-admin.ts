import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as path from 'path';

// Initialize Firebase Admin lazily to avoid issues during build / hot-reload
export function getAdminDb() {
  if (admin.apps.length === 0) {
    try {
      const serviceAccountStr = process.env.FIREBASE_SERVICE_ACCOUNT;
      if (!serviceAccountStr) {
        throw new Error('FIREBASE_SERVICE_ACCOUNT environment variable is not defined.');
      }

      // Check if it's a file path or stringified JSON
      let serviceAccount;
      if (serviceAccountStr.startsWith('./') || serviceAccountStr.startsWith('../') || serviceAccountStr.startsWith('/')) {
        // Local path
        const fileContent = fs.readFileSync(path.resolve(process.cwd(), serviceAccountStr.replace('./', '')), 'utf8');
        serviceAccount = JSON.parse(fileContent);
      } else {
        // Stringified JSON
        serviceAccount = JSON.parse(serviceAccountStr);
      }

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
      console.log('[Firebase] Admin initialized successfully.');
      
      // Fix the "Cannot use undefined as a Firestore value" error globally
      admin.firestore().settings({ ignoreUndefinedProperties: true });
    } catch (error) {
      console.error('[Firebase] Admin initialization failed:', error);
      throw error;
    }
  }
  return admin.firestore();
}
