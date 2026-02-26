import React, { useState } from "react";
import Header from "@/components/Header";

const CelebrityImpact: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Array of image paths with metadata
  const images = [
    // Original JPG files
    { path: "IMG_1107.JPG", featured: true },
    { path: "IMG_1108.JPG", featured: true },
    { path: "IMG_1109.JPG", featured: false },
    { path: "IMG_1651.JPG", featured: true },
    { path: "IMG_8848.JPG", featured: false },
    { path: "IMG_9288.JPG", featured: false },
    { path: "IMG_9705.JPG", featured: true },
    { path: "IMG_9287.JPG", featured: true },
    { path: "IMG_1110.JPG", featured: true },
    { path: "IMG_1111.JPG", featured: false },
    { path: "IMG_1113.JPG", featured: true },
    { path: "IMG_1114.JPG", featured: false },
    { path: "IMG_1927.JPG", featured: false },
    { path: "IMG_2031.JPG", featured: true },
    { path: "IMG_5294.JPG", featured: false },
    { path: "IMG_5711.JPG", featured: true },
    // Converted jpeg files
    { path: "IMG_1001.jpeg", featured: false },
    { path: "IMG_1168.jpeg", featured: true },
    { path: "IMG_1655.jpeg", featured: false },
    { path: "IMG_1972.jpeg", featured: true },
    { path: "IMG_2007.jpeg", featured: false },
    { path: "IMG_2392.jpeg", featured: true },
    { path: "IMG_2591.jpeg", featured: false },
    { path: "IMG_3088.jpeg", featured: true },
    { path: "IMG_5567.jpeg", featured: false },
    { path: "IMG_6818.jpeg", featured: true },
    { path: "IMG_7421.jpeg", featured: false },
    { path: "IMG_8589.jpeg", featured: true },
    { path: "IMG_8591.jpeg", featured: false },
    { path: "IMG_9737.jpeg", featured: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16 pt-36">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent tracking-tight">Celebrity Impact</h1>
          
          {/* Hero Text Section */}
          <div className="prose prose-lg dark:prose-invert mb-12">
            <p className="text-2xl font-medium text-foreground/80 mb-6 italic leading-relaxed">
              Training, mentoring, and meeting inspiring stars who continue to shape culture and performance.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed tracking-wide">
              Over the years, I've had the privilege of training, guiding, and connecting with some of the most inspiring celebrities and public figures. Each interaction reflects the power of health, wellness, and fitness in shaping lives—on and off the stage.
            </p>
          </div>

          {/* Featured Images Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent tracking-tight">Featured Moments</h2>
            <div className="grid gap-6">
              <div 
                className="aspect-[21/9] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer relative group"
                onClick={() => setSelectedImage(images[0].path)}
              >
                <img
                  src={images[0].path}
                  alt="Main Featured Impact"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay for celebrity name - uncomment when names are ready
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-3xl font-semibold text-center px-4">{images[0].celebrity}</p>
                </div>
                */}
              </div>
              <div className="grid grid-cols-2 gap-6">
                {images.slice(1, 5).map((image, index) => (
                  <div 
                    key={index}
                    className="aspect-square rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer relative group"
                    onClick={() => setSelectedImage(image.path)}
                  >
                    <img
                      src={image.path}
                      alt={`Featured Celebrity Impact ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay for celebrity name - uncomment when names are ready
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-xl font-semibold text-center px-4">{image.celebrity}</p>
                    </div>
                    */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Collection */}
          <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent tracking-tight">Star-Studded Journey</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.slice(5).map((image, index) => (
              <div 
                key={index}
                className="aspect-square rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer relative group"
                onClick={() => setSelectedImage(image.path)}
              >
                <img
                  src={image.path}
                  alt={`Celebrity Impact ${index + 4}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {/* Overlay for celebrity name - uncomment when names are ready
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold text-center px-4">{image.celebrity}</p>
                </div>
                */}
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-7xl mx-auto">
                <img
                  src={selectedImage}
                  alt="Selected celebrity impact"
                  className="max-h-[90vh] w-auto mx-auto rounded-lg"
                />
                <button
                  className="absolute top-4 right-4 text-white hover:text-primary bg-black/50 rounded-full p-2"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CelebrityImpact;