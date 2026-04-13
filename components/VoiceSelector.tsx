import React from 'react';
import { voiceOptions, voiceCategories } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface VoiceSelectorProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

const VoiceSelector = ({ value, onChange, disabled }: VoiceSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {Object.entries(voiceOptions).map(([key, option]) => {
                const isSelected = value === key;
                return (
                    <button
                        key={key}
                        type="button"
                        disabled={disabled}
                        onClick={() => onChange(key)}
                        className={cn(
                            "flex flex-col items-start p-4 rounded-xl border-2 transition-all text-left",
                            isSelected
                                ? "border-[#212a3b] bg-[#212a3b]/5 ring-1 ring-[#212a3b]"
                                : "border-slate-200 hover:border-slate-300 bg-white",
                            disabled && "opacity-50 cursor-not-allowed"
                        )}
                    >
                        <div className="flex items-center justify-between w-full mb-1">
                            <span className="font-bold text-[#212a3b]">{option.name}</span>
                            {isSelected && <Check className="w-5 h-5 text-[#212a3b]" />}
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            {option.description}
                        </p>
                    </button>
                );
            })}
        </div>
    );
};

export default VoiceSelector;
