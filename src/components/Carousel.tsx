import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo({ images }: { images: string[] }) {
  return (
    <Carousel className="w-full h-full">
      <CarouselContent className="w-full ml-0 h-full relative">
        {images?.map((image, index) => (
          <CarouselItem key={index} className="w-full pl-0">
            <div className="w-full h-full flex justify-center items-center">
              <Card className="w-full h-full">
                <img
                  src={image}
                  className="w-full object-cover rounded-md h-[100%]"
                  alt={`Image ${index}`}
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-7 right-16">
        <CarouselPrevious className="text-black font-bold rounded-none h-6 w-6 left-[-15px]" />
        <CarouselNext className="text-black font-bold rounded-none h-6 w-6" />
      </div>
    </Carousel>
  );
}
