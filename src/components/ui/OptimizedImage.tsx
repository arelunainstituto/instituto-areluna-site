import React from 'react';
import { getOptimizedImageUrl } from '@/lib/image-optimizer';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean; // If true, sets loading="eager", otherwise "lazy"
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    width,
    height,
    className,
    priority = false,
    ...props
}) => {
    const optimizedSrc = getOptimizedImageUrl(src, width, height);

    return (
        <img
            src={optimizedSrc}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            className={cn("", className)}
            {...props}
        />
    );
};

export default OptimizedImage;
