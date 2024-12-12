import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// This would typically come from an API or database
const getCuisineDetails = (id: string) => {
  const cuisines = {
    "1": {
      id: 1,
      name: "Italian",
      description:
        "Savor the flavors of Italy with our authentic Italian cuisine. From classic pasta dishes to wood-fired pizzas, our Italian restaurants offer a taste of the Mediterranean right in your city.",
      image: "/placeholder.svg?height=400&width=800&text=Italian+Cuisine",
      popularDishes: [
        {
          id: 1,
          name: "Margherita Pizza",
          price: 12.99,
          image: "/placeholder.svg?height=100&width=100&text=Pizza",
        },
        {
          id: 2,
          name: "Spaghetti Carbonara",
          price: 14.99,
          image: "/placeholder.svg?height=100&width=100&text=Pasta",
        },
        {
          id: 3,
          name: "Tiramisu",
          price: 6.99,
          image: "/placeholder.svg?height=100&width=100&text=Tiramisu",
        },
      ],
      restaurants: [
        { id: 1, name: "Bella Italia", rating: 4.5 },
        { id: 2, name: "Pasta Paradise", rating: 4.3 },
        { id: 3, name: "Mamma Mia Pizzeria", rating: 4.7 },
      ],
    },
  };
  return cuisines[id as keyof typeof cuisines];
};

export default async function CuisinePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const cuisine = getCuisineDetails((await params).id);

  if (!cuisine) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">{cuisine.name} Cuisine</h1>
      <div className="mb-8">
        <Image
          src={cuisine.image}
          alt={cuisine.name}
          width={800}
          height={400}
          className="rounded-lg object-cover w-full h-[400px]"
        />
      </div>
      <p className="text-lg mb-8">{cuisine.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Popular Dishes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {cuisine.popularDishes.map((dish) => (
          <Card key={dish.id}>
            <CardContent className="p-4">
              <Image
                src={dish.image}
                alt={dish.name}
                width={100}
                height={100}
                className="rounded-md mb-2"
              />
              <h3 className="font-semibold">{dish.name}</h3>
              <p className="text-sm text-muted-foreground">
                ${dish.price.toFixed(2)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">
        Top {cuisine.name} Restaurants
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {cuisine.restaurants.map((restaurant) => (
          <Card key={restaurant.id}>
            <CardContent className="p-4">
              <h3 className="font-semibold">{restaurant.name}</h3>
              <p className="text-sm text-muted-foreground">
                Rating: {restaurant.rating}/5
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button asChild>
          <Link href="/restaurants">View All {cuisine.name} Restaurants</Link>
        </Button>
      </div>
    </div>
  );
}
