import React from 'react';

const LoadingOverlay = () => {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative flex h-24 w-24 items-center justify-center">
                <div className="absolute h-full w-full animate-spin rounded-full border-4 border-[#212a3b] border-t-transparent"></div>
                <div className="absolute h-16 w-16 animate-ping rounded-full bg-[#212a3b]/20"></div>
                <div className="h-8 w-8 animate-pulse rounded-full bg-[#212a3b]"></div>
            </div>
            <h2 className="mt-8 text-2xl font-bold text-white">Synthesizing Book...</h2>
            <p className="mt-2 text-white/70">Our AI is reading and organizing the contents for you.</p>
        </div>
    );
};

export default LoadingOverlay;
