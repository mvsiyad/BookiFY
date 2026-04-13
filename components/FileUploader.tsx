import React, { useRef, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import { FormItem, FormLabel, FormMessage, FormControl } from './ui/form';
import { LucideIcon, FileText, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileUploaderProps {
    control: Control<any>;
    name: string;
    label: string;
    acceptTypes: string[];
    icon: LucideIcon;
    placeholder: string;
    hint: string;
    disabled?: boolean;
}

const FileUploader = ({
    control,
    name,
    label,
    acceptTypes,
    icon: Icon,
    placeholder,
    hint,
    disabled
}: FileUploaderProps) => {
    const {
        field: { onChange, value },
    } = useController({ name, control });

    const inputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            onChange(file);
        }
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        setFileName(null);
        onChange(undefined);
        if (inputRef.current) inputRef.current.value = '';
    };

    return (
        <FormItem className="w-full">
            <FormLabel className="form-label">{label}</FormLabel>
            <FormControl>
                <div
                    onClick={() => !disabled && inputRef.current?.click()}
                    className={cn(
                        "relative flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl cursor-pointer transition-all bg-slate-50/50",
                        fileName ? "border-[#212a3b] bg-[#212a3b]/5" : "border-slate-300 hover:border-[#212a3b]/50 hover:bg-slate-50",
                        disabled && "opacity-50 cursor-not-allowed"
                    )}
                >
                    <input
                        type="file"
                        className="hidden"
                        accept={acceptTypes.join(',')}
                        onChange={handleFileChange}
                        disabled={disabled}
                        ref={inputRef}
                    />

                    {fileName ? (
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[#212a3b] rounded-lg">
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-[#212a3b]">{fileName}</span>
                                <button
                                    type="button"
                                    onClick={handleRemove}
                                    className="text-xs text-red-500 hover:underline flex items-center gap-1"
                                >
                                    <X className="w-3 h-3" /> Remove File
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                                <Icon className="w-8 h-8 text-[#212a3b]" />
                            </div>
                            <span className="font-semibold text-[#212a3b]">{placeholder}</span>
                            <span className="text-sm text-slate-500 mt-1">{hint}</span>
                        </>
                    )}
                </div>
            </FormControl>
            <FormMessage />
        </FormItem>
    );
};

export default FileUploader;
