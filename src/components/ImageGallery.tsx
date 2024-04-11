import { CarouselDemo } from "./Carousel";

const ImageGallery = ({ images }: { images: string[] }) => {
  return (
    <div className="w-full h-auto">
      <div className="hidden lg:block">
        {images && (
          <div
            className={`grid 
           ${images?.length !== 1 ? "grid-cols-2" : "grid-cols-1"} gap-2 `}
          >
            {/* Large images */}
            <div
              className={`col-span-2 md:col-span-1 h-full w-full rounded-md object-cover ${
                images?.length === 1 ? "col-span-4" : ""
              }`}
            >
              <img
                className="w-full h-[424px] object-cover rounded-lg"
                src={images[0]}
                alt=""
              />
            </div>

            {/* Small images */}
            <div className="md:col-span-2 lg:col-span-1 hidden lg:block">
              <div
                className={`grid ${
                  images.length > 2 ? "grid-cols-2" : "grid-cols-1"
                }  gap-2 h-full `}
              >
                {images?.map((image, index) =>
                  index !== 0 ? (
                    <div key={index} className="">
                      <img
                        className="w-full h-full rounded-lg object-cover"
                        src={image}
                        alt=""
                      />
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="lg:hidden block">
        <CarouselDemo images={images} />
      </div>
    </div>
  );
};

export default ImageGallery;
