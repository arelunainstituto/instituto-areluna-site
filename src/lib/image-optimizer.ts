/**
 * Optimizes a Cloudinary URL by adding transformation parameters.
 * 
 * @param url The original Cloudinary URL
 * @param width Optional width to resize the image to
 * @param height Optional height to resize the image to
 * @returns The optimized URL with f_auto, q_auto, and optional resizing
 */
export const getOptimizedImageUrl = (url: string, width?: number, height?: number): string => {
    if (!url || !url.includes('cloudinary.com')) {
        return url;
    }

    // Check if the URL already has transformation parameters
    // Cloudinary URLs usually look like: https://res.cloudinary.com/cloud_name/image/upload/v1234567890/public_id
    // We want to inject parameters after /upload/

    const uploadIndex = url.indexOf('/upload/');
    if (uploadIndex === -1) {
        return url;
    }

    const baseUrl = url.slice(0, uploadIndex + 8); // include '/upload/'
    const restUrl = url.slice(uploadIndex + 8);

    const params: string[] = ['f_auto', 'q_auto'];

    if (width) {
        params.push(`w_${width}`);
    }

    if (height) {
        params.push(`h_${height}`);
    }

    // Add c_limit to ensure we don't upscale if the original is smaller, 
    // or c_fill if we want to force dimensions (usually safer to use limit or scale for general use)
    // For this implementation, we'll stick to basic resizing which defaults to scale/limit behavior in many contexts,
    // but adding c_limit is a safe default to prevent upscaling artifacts.
    if (width || height) {
        params.push('c_limit');
    }

    const paramsString = params.join(',');

    return `${baseUrl}${paramsString}/${restUrl}`;
};
