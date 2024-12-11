import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Tag, Percent } from "lucide-react";

// This would typically come from an API or database
const offers = [
  {
    id: 1,
    title: "50% Off Your First Order",
    description: "New users get 50% off their first order up to $20",
    code: "WELCOME50",
    expiryDate: "2024-06-30",
    image: "/placeholder.svg?height=200&width=300&text=50%+Off",
    type: "New User",
  },
  {
    id: 2,
    title: "Free Delivery on Orders Over $30",
    description: "Enjoy free delivery on all orders over $30",
    code: "FREEDEL30",
    expiryDate: "2024-07-15",
    image: "/placeholder.svg?height=200&width=300&text=Free+Delivery",
    type: "Delivery",
  },
  {
    id: 3,
    title: "Buy One Get One Free Pizza",
    description: "Order any large pizza and get a medium pizza for free",
    code: "BOGOPIZZA",
    expiryDate: "2024-05-31",
    image: "/placeholder.svg?height=200&width=300&text=BOGO+Pizza",
    type: "Restaurant Special",
  },
  {
    id: 4,
    title: "20% Off Sushi Platters",
    description: "Get 20% off all sushi platters every Tuesday",
    code: "SUSHITUES",
    expiryDate: "2024-08-31",
    image: "/placeholder.svg?height=200&width=300&text=Sushi+Discount",
    type: "Weekly Special",
  },
  {
    id: 5,
    title: "Family Meal Deal",
    description: "Save $15 on family-sized meals for 4 or more people",
    code: "FAMILY15",
    expiryDate: "2024-09-30",
    image: "/placeholder.svg?height=200&width=300&text=Family+Meal+Deal",
    type: "Bundle Offer",
  },
  {
    id: 6,
    title: "Healthy Choice Discount",
    description: "10% off on all salads and low-calorie meals",
    code: "EATWELL10",
    expiryDate: "2024-07-31",
    image: "/placeholder.svg?height=200&width=300&text=Healthy+Choice",
    type: "Dietary Special",
  },
];

export default function OffersList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {offers.map((offer) => (
        <Card key={offer.id} className="flex flex-col h-full">
          <CardContent className="p-0">
            <Image
              src={offer.image}
              alt={offer.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <Badge variant="secondary" className="mb-2">
                {offer.type}
              </Badge>
              <h2 className="text-xl font-semibold mb-2">{offer.title}</h2>
              <p className="text-muted-foreground mb-4">{offer.description}</p>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-1 text-primary" />
                  <span className="font-semibold">{offer.code}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>
                    Expires: {new Date(offer.expiryDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button className="w-full">
              <Percent className="w-4 h-4 mr-2" />
              Apply Offer
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
