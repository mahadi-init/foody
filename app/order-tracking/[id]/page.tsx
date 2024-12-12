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
import {
  Clock,
  MapPin,
  Utensils,
  CheckCircle,
  Truck,
  Package,
} from "lucide-react";
import { Route } from "next";

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
      status: "In Transit",
      address: "123 Main St, Anytown, USA",
      estimatedDelivery: "2024-03-15T18:30:00",
      trackingSteps: [
        {
          label: "Order Placed",
          status: "completed",
          time: "2024-03-15T17:00:00",
        },
        {
          label: "Order Confirmed",
          status: "completed",
          time: "2024-03-15T17:05:00",
        },
        {
          label: "Preparing",
          status: "completed",
          time: "2024-03-15T17:15:00",
        },
        {
          label: "Out for Delivery",
          status: "current",
          time: "2024-03-15T17:45:00",
        },
        { label: "Delivered", status: "upcoming", time: null },
      ],
    },
  };
  return orders[id as keyof typeof orders];
};

export default async function OrderTrackingPage({
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
      case "in transit":
        return "bg-yellow-500";
      case "cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStepIcon = (label: string) => {
    switch (label) {
      case "Order Placed":
        return <Package className="w-6 h-6" />;
      case "Order Confirmed":
        return <CheckCircle className="w-6 h-6" />;
      case "Preparing":
        return <Utensils className="w-6 h-6" />;
      case "Out for Delivery":
        return <Truck className="w-6 h-6" />;
      case "Delivered":
        return <MapPin className="w-6 h-6" />;
      default:
        return <Clock className="w-6 h-6" />;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Order Tracking</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{order.restaurant}</h2>
            <Badge className={getStatusColor(order.status)}>
              {order.status}
            </Badge>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            <span>
              Estimated Delivery:{" "}
              {new Date(order.estimatedDelivery).toLocaleString()}
            </span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{order.address}</span>
          </div>
          <div className="space-y-4">
            {order.trackingSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                    step.status === "completed"
                      ? "bg-green-500 text-white"
                      : step.status === "current"
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {getStepIcon(step.label)}
                </div>
                <div className="flex-grow">
                  <p className="font-semibold">{step.label}</p>
                  {step.time && (
                    <p className="text-sm text-muted-foreground">
                      {new Date(step.time).toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            ))}
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
        <CardFooter>
          <Button variant="outline" asChild className="w-full">
            <Link href={"/orders" as Route}>Back to Orders</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
