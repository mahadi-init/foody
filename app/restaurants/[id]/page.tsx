import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, Utensils, DollarSign, MapPin, Phone } from "lucide-react";
import RestaurantReviews from "./restaurant-reviews";
import RestaurantMenu from "./restaurant-menu";

// This would typically come from an API or database
const getRestaurantDetails = (id: string) => {
  const restaurants = {
    "1": {
      id: "1",
      name: "Bella Italia",
      cuisine: "Italian",
      rating: 4.5,
      //reviews: 230,
      priceRange: "$$",
      deliveryTime: "30-45",
      address: "123 Pasta Street, Foodville, FC 12345",
      phone: "+1 (555) 123-4567",
      image: "/placeholder.svg?height=300&width=600&text=Bella+Italia",
      description:
        "Authentic Italian cuisine in the heart of the city. From hand-made pasta to wood-fired pizzas, we bring the flavors of Italy to your table.",
      menu: [
        {
          category: "Appetizers",
          items: [
            {
              name: "Bruschetta",
              price: 8.99,
              description:
                "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and olive oil",
            },
            {
              name: "Caprese Salad",
              price: 10.99,
              description:
                "Fresh mozzarella, tomatoes, and sweet basil drizzled with a balsamic glaze",
            },
          ],
        },
        {
          category: "Main Courses",
          items: [
            {
              name: "Spaghetti Carbonara",
              price: 15.99,
              description:
                "Spaghetti with a creamy sauce of eggs, cheese, pancetta, and black pepper",
            },
            {
              name: "Margherita Pizza",
              price: 13.99,
              description:
                "Classic pizza with tomato sauce, fresh mozzarella, basil, and olive oil",
            },
          ],
        },
        {
          category: "Desserts",
          items: [
            {
              name: "Tiramisu",
              price: 7.99,
              description:
                "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
            },
            {
              name: "Panna Cotta",
              price: 6.99,
              description:
                "Silky smooth Italian custard topped with berry compote",
            },
          ],
        },
      ],
      reviews: [
        {
          id: 1,
          user: "John D.",
          rating: 5,
          comment:
            "Best Italian food in town! The pasta is always perfectly cooked.",
          date: "2024-03-10",
        },
        {
          id: 2,
          user: "Sarah M.",
          rating: 4,
          comment:
            "Great atmosphere and friendly staff. The pizza was delicious.",
          date: "2024-03-05",
        },
        {
          id: 3,
          user: "Mike R.",
          rating: 4.5,
          comment:
            "Authentic flavors that remind me of my trip to Italy. Will definitely be back!",
          date: "2024-02-28",
        },
      ],
    },
  };
  return restaurants[id as keyof typeof restaurants];
};

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const restaurant = getRestaurantDetails((await params).id);

  if (!restaurant) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          width={600}
          height={300}
          className="rounded-lg object-cover w-full h-[300px]"
        />
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <Badge>{restaurant.cuisine}</Badge>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>
              {restaurant.rating} ({restaurant.reviews.length} reviews)
            </span>
          </div>
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 mr-1" />
            <span>{restaurant.priceRange}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{restaurant.deliveryTime} min</span>
          </div>
        </div>
        <p className="text-muted-foreground">{restaurant.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Address
            </CardTitle>
          </CardHeader>
          <CardContent>{restaurant.address}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Phone
            </CardTitle>
          </CardHeader>
          <CardContent>{restaurant.phone}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Utensils className="w-5 h-5 mr-2" />
              Cuisine
            </CardTitle>
          </CardHeader>
          <CardContent>{restaurant.cuisine}</CardContent>
        </Card>
      </div>

      <Tabs defaultValue="menu" className="mb-8">
        <TabsList>
          <TabsTrigger value="menu">Menu</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="menu">
          <RestaurantMenu menu={restaurant.menu} />
        </TabsContent>
        <TabsContent value="reviews">
          <RestaurantReviews reviews={restaurant.reviews} />
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <Button size="lg">Order Now</Button>
      </div>
    </div>
  );
}
