import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";

// This would typically come from an API or database
const getOrderDetails = (id: string) => {
  const orders = {
    "1": {
      id: "1",
      date: "2024-03-15",
      restaurant: "Burger Palace",
      items: [
        { name: "Cheeseburger", price: 8.99, quantity: 1 },
        { name: "Fries", price: 3.99, quantity: 1 },
        { name: "Soda", price: 2.99, quantity: 1 },
      ],
      total: 15.97,
      status: "Completed",
      address: "123 Main St, Anytown, USA",
    },
  };
  return orders[id as keyof typeof orders];
};

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const order = getOrderDetails((await params).id);

  if (!order) {
    notFound();
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500";
      case "processing":
        return "bg-yellow-500";
      case "cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Order Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{order.restaurant}</h2>
            <Badge className={getStatusColor(order.status)}>
              {order.status}
            </Badge>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            <span>{new Date(order.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{order.address}</span>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Order Items:</h3>
            <ul className="space-y-2">
              {order.items.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/orders">Back to Orders</Link>
          </Button>
          <Button onClick={() => console.log(`Reordering ${order.id}`)}>
            Reorder
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
