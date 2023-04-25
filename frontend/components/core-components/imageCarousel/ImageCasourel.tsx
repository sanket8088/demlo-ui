import React, { useState, useCallback } from "react";
import Image from "next/image";
// import { sampleData } from "./SampleData";
import {
  SelectImage,
  SelectedImage,
  ImagePreview,
} from "./ImageCarousel.style";

interface ITypesPreviewedImage {
  id: number;
  src: string;
}
export interface ITypesImageCarousel {
  imageArray?: ITypesPreviewedImage[];
}

const ImageCarousel = ({ imageArray }: ITypesImageCarousel) => {
  const [open, setOpen] = useState<boolean>(false);
  const [previewedImage, setPreviewedImage] = useState<ITypesPreviewedImage>({
    id: 678,
    src: "https://picsum.photos/id/556/780.webp",
  });

  const imageGallery = [
    { id: 1, src: "https://picsum.photos/id/58/780.webp" },
    { id: 2, src: "https://picsum.photos/id/56/780.webp" },
    { id: 3, src: "https://picsum.photos/id/278/780.webp" },
    { id: 4, src: "https://picsum.photos/id/458/780.webp" },
    { id: 5, src: "https://picsum.photos/id/23/780.webp" },
    { id: 6, src: "https://picsum.photos/id/76/780.webp" },
    { id: 7, src: "https://picsum.photos/id/70/780.webp" },
  ];

  const handleImageSelection = useCallback(
    (imageData: ITypesPreviewedImage) => {
      setPreviewedImage(imageData);
    },
    []
  );

  return (
    <div>
      <SelectedImage>
        <img src={previewedImage?.src} alt="testImage" />
      </SelectedImage>
      <SelectImage>
        {imageGallery.map((imageData, index) => (
          <ImagePreview onClick={() => handleImageSelection(imageData)}>
            <img
              key={imageData?.src}
              src={imageData?.src}
              alt="test"
              width={200}
              height={120}
            />
          </ImagePreview>
        ))}
      </SelectImage>
    </div>
  );
};

export default ImageCarousel;

interface ITypeSmallImageContainer {
  src: string;
}
