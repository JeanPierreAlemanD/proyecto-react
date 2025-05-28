import React, { useState, useEffect, useRef } from "react";

interface ImageGalleryProps {
    images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const thumbsRef = useRef<HTMLDivElement>(null);
    const [galleryHeight, setGalleryHeight] = useState<number>(0);

    useEffect(() => {
        if (thumbsRef.current) {
            setGalleryHeight(thumbsRef.current.clientHeight);
        }
    }, [images]);

    return (
        <div className="flex gap-4">
            {/* Column of thumbnails */}
            <div ref={thumbsRef} className="flex flex-col gap-2">
                {images.slice(0, 3).map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Thumbnail ${idx}`}
                        onClick={() => setSelectedImage(img)}
                        className={`w-20 h-20 object-cover cursor-pointer rounded border ${selectedImage === img ? "border-blue-500" : "border-transparent"
                            }`}
                    />
                ))}
            </div>

            {/* Large image */}
            <div>
                <img
                    src={selectedImage}
                    alt="Selected"
                    className="object-cover rounded"
                    style={{ height: galleryHeight || 240, width: "auto" }}
                />
            </div>
        </div>
    );
};

export default ImageGallery;
