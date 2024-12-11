import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock } from "lucide-react";

// This would typically come from an API or database
const restaurants = [
  {
    id: 1,
    name: "Pasta Paradise",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "25-35",
    priceRange: "$$",
    image: "/placeholder.svg?height=200&width=300&text=Pasta+Paradise",
  },
  {
    id: 2,
    name: "Sushi Sensation",
    cuisine: "Japanese",
    rating: 4.7,
    deliveryTime: "30-40",
    priceRange: "$$$",
    image: "/placeholder.svg?height=200&width=300&text=Sushi+Sensation",
  },
  {
    id: 3,
    name: "Taco Town",
    cuisine: "Mexican",
    rating: 4.2,
    deliveryTime: "20-30",
    priceRange: "$",
    image: "/placeholder.svg?height=200&width=300&text=Taco+Town",
  },
  {
    id: 4,
    name: "Curry Corner",
    cuisine: "Indian",
    rating: 4.6,
    deliveryTime: "35-45",
    priceRange: "$$",
    image: "/placeholder.svg?height=200&width=300&text=Curry+Corner",
  },
  {
    id: 5,
    name: "Burger Bliss",
    cuisine: "American",
    rating: 4.3,
    deliveryTime: "15-25",
    priceRange: "$",
    image: "/placeholder.svg?height=200&width=300&text=Burger+Bliss",
  },
  {
    id: 6,
    name: "Mediterranean Delights",
    cuisine: "Mediterranean",
    rating: 4.8,
    deliveryTime: "30-40",
    priceRange: "$$$",
    image: "/placeholder.svg?height=200&width=300&text=Mediterranean+Delights",
  },
];

export default function RestaurantList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurants.map((restaurant) => (
        <Link href={`/restaurants/${restaurant.id}`} key={restaurant.id}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-0">
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  {restaurant.name}
                </h2>
                <div className="flex items-center mb-2">
                  <Badge variant="secondary" className="mr-2">
                    {restaurant.cuisine}
                  </Badge>
                  <span className="text-muted-foreground">
                    {restaurant.priceRange}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="font-semibold">{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{restaurant.deliveryTime} mins</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
