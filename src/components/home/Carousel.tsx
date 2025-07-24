"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselData } from "@/data/CarouselData";
import Image from "next/image";

export default function CarouselDemo() {
  return (
    <div className="my-20 flex w-full items-center justify-center">
      <Carousel className="w-2/3 max-w-7xl md:w-3/4">
        <CarouselContent className="">
          {CarouselData.map(({ Picture, Alt }, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="relative flex aspect-7/3 h-fit items-center justify-center overflow-hidden p-0">
                  <Image
                    src={Picture}
                    alt={Alt}
                    fill
                    className="object-cover"
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
