import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function parsePDFFile(file: File): Promise<{ content: string; cover: string }> {
  // This is a placeholder for PDF parsing logic.
  // In a real app, you might use 'pdf-parse' on the server or a library like 'pdfjs-dist' on the client.
  console.log('Parsing PDF file:', file.name);

  // Return mock data for now
  return {
    content: "This is a mock parsed content of the PDF file. In a real implementation, this would contain the actual text extracted from the document.",
    cover: "https://placehold.co/400x600/212a3b/ffffff?text=Book+Cover"
  };
}
