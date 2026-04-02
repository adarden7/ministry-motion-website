'use client';

import * as React from 'react';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export interface TagInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
}

export const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
    ({ className, value, onChange, placeholder, ...props }, ref) => {
        const [pendingDataPoint, setPendingDataPoint] = React.useState('');

        const addPendingDataPoint = () => {
            if (pendingDataPoint.trim()) {
                const newDataPoints = new Set([...value, pendingDataPoint.trim()]);
                onChange(Array.from(newDataPoints));
                setPendingDataPoint('');
            }
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' || e.key === ',') {
                e.preventDefault();
                addPendingDataPoint();
            } else if (e.key === 'Backspace' && pendingDataPoint.length === 0 && value.length > 0) {
                e.preventDefault();
                const newValue = [...value];
                newValue.pop();
                onChange(newValue);
            }
        };

        const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
            e.preventDefault();
            const pastedText = e.clipboardData.getData('text');
            if (pastedText) {
                // Split by comma or newline
                const parts = pastedText.split(/,|\n/).map(p => p.trim()).filter(Boolean);
                if (parts.length > 0) {
                    const newDataPoints = new Set([...value, ...parts]);
                    onChange(Array.from(newDataPoints));
                }
            }
        };

        return (
            <div
                className={cn(
                    'flex min-h-[40px] w-full flex-wrap items-center gap-2 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                    className
                )}
            >
                {value.map((item) => (
                    <Badge key={item} variant="secondary" className="gap-1 rounded-sm px-1 font-normal">
                        <span className="text-xs">{item}</span>
                        <button
                            type="button"
                            className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            onClick={() => {
                                onChange(value.filter((i) => i !== item));
                            }}
                        >
                            <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                        </button>
                    </Badge>
                ))}
                <Input
                    ref={ref}
                    className="flex-1 border-0 bg-transparent p-0 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 h-7 min-w-[120px]"
                    value={pendingDataPoint}
                    onChange={(e) => setPendingDataPoint(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onPaste={handlePaste}
                    onBlur={addPendingDataPoint}
                    placeholder={value.length === 0 ? placeholder : ''}
                    {...props}
                />
            </div>
        );
    }
);

TagInput.displayName = 'TagInput';
