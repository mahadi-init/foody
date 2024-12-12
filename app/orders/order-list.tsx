"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Utensils } from "lucide-react";
import { Route } from "next";

// This would typically come from an API or database
const initialOrders = [
  {
    id: "1",
    date: "2024-03-15",
    restaurant: "Burger Palace",
    items: ["Cheeseburger", "Fries", "Soda"],
    total: 15.99,
    status: "Completed",
  },
  {
    id: "2",
    date: "2024-03-14",
    restaurant: "Pizza Heaven",
    items: ["Pepperoni Pizza", "Garlic Bread"],
    total: 22.5,
    status: "Completed",
  },
  {
    id: "3",
    date: "2024-03-13",
    restaurant: "Sushi Express",
    items: ["California Roll", "Miso Soup", "Green Tea"],
    total: 28.75,
    status: "Processing",
  },
  {
    id: "4",
    date: "2024-03-12",
    restaurant: "Taco Fiesta",
    items: ["Beef Tacos (3)", "Guacamole", "Churros"],
    total: 19.99,
    status: "Cancelled",
  },
];

export default function OrderList() {
  //const [orders, setOrders] = useState(initialOrders);
  const [orders] = useState(initialOrders);

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
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order.id}>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{order.restaurant}</h3>
                <p className="text-sm text-muted-foreground">
                  Order #{order.id}
                </p>
              </div>
              <Badge className={getStatusColor(order.status)}>
                {order.status}
              </Badge>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <Clock className="w-4 h-4 mr-1" />
              <span>{new Date(order.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Utensils className="w-4 h-4 mr-1" />
              <span>{order.items.join(", ")}</span>
            </div>
            <div className="text-lg font-semibold">
              Total: ${order.total.toFixed(2)}
            </div>
          </CardContent>
          <CardFooter className="bg-muted p-4 flex justify-between">
            <Button variant="outline" asChild>
              <Link href={`/orders/${order.id}` as Route}>View Details</Link>
            </Button>
            <Button onClick={() => console.log(`Reordering ${order.id}`)}>
              Reorder
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
