export interface BookCardProps {
    title: string;
    author: string;
    coverURL: string;
    slug: string;
}

export interface BookUploadFormValues {
    title: string;
    author: string;
    persona: string;
    pdfFile: File;
    coverImage?: File;
}
