import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Utensils, Award, Truck } from "lucide-react";
import Image from "next/image";

export default function SecondSection() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Delicious Food, Delivered to Your Door
          </h1>
          <p className="text-xl mb-8">
            Order from your favorite restaurants with just a few clicks!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Input
              type="text"
              placeholder="Enter your address"
              className="max-w-xs bg-primary-foreground text-primary"
            />
            <Button variant="secondary">Find Food Near Me</Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-primary" />
                  Choose Your Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                Enter your address to find nearby restaurants and cuisines.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Utensils className="w-6 h-6 mr-2 text-primary" />
                  Select Your Meal
                </CardTitle>
              </CardHeader>
              <CardContent>
                Browse menus and select your favorite dishes from local
                restaurants.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="w-6 h-6 mr-2 text-primary" />
                  Enjoy Your Delivery
                </CardTitle>
              </CardHeader>
              <CardContent>
                Your food will be prepared and delivered right to your doorstep.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Restaurants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/*resturants.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <Image
                    src={item.image}
                    alt={item.resturantType}
                    height={150}
                    width={150}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2">
                    {item.resturantType}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    {item.cuisineType}
                  </p>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-primary" />
                    <span className="text-sm">{item.prepareTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))*/}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Special Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Free Delivery on Your First Order
                </h3>
                <p className="mb-4">Use code: FIRSTORDER</p>
                <Button variant="secondary">Order Now</Button>
              </CardContent>
            </Card>
            <Card className="bg-secondary text-secondary-foreground">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  20% Off on Family Meals
                </h3>
                <p className="mb-4">Valid for orders above $50</p>
                <Button>Claim Offer</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <p className="mb-4 italic">
                    &quot;The food was amazing and the delivery was super fast!
                    Will definitely order again.&quot;
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={`/placeholder.svg?height=50&width=50&text=User ${i}`}
                      alt={`User ${i}`}
                      height={50}
                      width={50}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">Customer {i}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <Award
                            key={index}
                            className="w-4 h-4 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8">
            Get your favorite food delivered in minutes!
          </p>
          <Button variant="secondary" size="lg">
            Order Now
          </Button>
        </div>
      </section>
    </div>
  );
}
