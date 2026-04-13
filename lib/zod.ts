import { z } from 'zod';
import { MAX_FILE_SIZE, ACCEPTED_PDF_TYPES, MAX_IMAGE_SIZE, ACCEPTED_IMAGE_TYPES } from './constants';

export const UploadSchema = z.object({
    title: z.string().min(2, 'Title must be at least 2 characters').max(100),
    author: z.string().min(2, 'Author must be at least 2 characters').max(100),
    persona: z.string().min(1, 'Please select a voice assistant persona'),
    pdfFile: z
        .custom<File>()
        .refine((file) => file !== undefined, 'PDF file is required')
        .refine((file) => file?.size <= MAX_FILE_SIZE, `File size must be less than 50MB`)
        .refine(
            (file) => ACCEPTED_PDF_TYPES.includes(file?.type),
            'Only .pdf files are accepted'
        ),
    coverImage: z
        .custom<File>()
        .optional()
        .refine(
            (file) => !file || file.size <= MAX_IMAGE_SIZE,
            `Image size must be less than 10MB`
        )
        .refine(
            (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type),
            'Only .jpg, .jpeg, .png and .webp formats are supported'
        ),
});
