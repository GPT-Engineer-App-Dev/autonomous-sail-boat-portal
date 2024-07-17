import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const images = [
  { src: "/placeholder.svg", alt: "AutoSail in action" },
  { src: "/placeholder.svg", alt: "AutoSail prototype" },
  { src: "/placeholder.svg", alt: "AutoSail team" },
  { src: "/placeholder.svg", alt: "AutoSail technology" },
  { src: "/placeholder.svg", alt: "Ocean research with AutoSail" },
  { src: "/placeholder.svg", alt: "AutoSail navigation system" },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">AutoSail Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              />
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <img
                src={selectedImage?.src}
                alt={selectedImage?.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;