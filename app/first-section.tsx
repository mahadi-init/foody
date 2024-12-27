"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, ChefHat, ThumbsUp, Heart } from "lucide-react";
import { Food } from "@prisma/client";

const FoodCard = ({ item }: { item: Food[][0] }) => (
  <Card className="w-full">
    <CardContent className="p-4">
      <Image
        src={item.image}
        alt={item.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
      <div className="flex justify-between items-center">
        <span className="text-primary font-bold">{item.price}</span>
        <span className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          {item.rating}
        </span>
      </div>
      <Button className="w-full mt-4">Add to Cart</Button>
    </CardContent>
  </Card>
);

export default function FirstSection({ foodItems }: { foodItems: Food[] }) {
  const [trending, setTrending] = useState(foodItems.slice(0, 4));
  const [favorite, setFavorite] = useState(foodItems.slice(2, 6));
  const [customerChoice, setCustomerChoice] = useState(foodItems.slice(4, 8));

  useEffect(() => {
    setTrending([...foodItems].sort(() => 0.5 - Math.random()).slice(0, 4));
    setFavorite([...foodItems].sort(() => 0.5 - Math.random()).slice(0, 4));
    setCustomerChoice(
      [...foodItems].sort(() => 0.5 - Math.random()).slice(0, 4),
    );
  }, [foodItems]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-12">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {foodItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <ChefHat className="w-6 h-6 mr-2 text-primary" />
          Trending Now
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trending.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Heart className="w-6 h-6 mr-2 text-primary" />
          Most Favorite
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {favorite.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <ThumbsUp className="w-6 h-6 mr-2 text-primary" />
          Customer&apos;s Choice
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerChoice.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
