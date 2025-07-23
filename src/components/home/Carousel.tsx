"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselDemo() {
  return (
    <div className="my-20 flex w-full items-center justify-center">
      <Carousel className="w-2/3 max-w-7xl md:w-3/4">
        <CarouselContent className="">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-aisc-lightgray">
                  <CardContent className="flex aspect-7/3 items-center justify-center"></CardContent>
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
