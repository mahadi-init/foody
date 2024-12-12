"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

// This would typically come from a state management solution or API
const initialCartItems = [
  {
    id: 1,
    name: "Spicy Chicken Deluxe Burger",
    price: 12.99,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100&text=Burger",
  },
  {
    id: 2,
    name: "Veggie Supreme Pizza",
    price: 15.99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100&text=Pizza",
  },
  {
    id: 3,
    name: "Chocolate Brownie Sundae",
    price: 6.99,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100&text=Sundae",
  },
];

export default function CartItems() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  if (cartItems.length === 0) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-center text-muted-foreground">
            Your cart is empty.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <Card key={item.id}>
          <CardContent className="p-4 flex items-center">
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="rounded-md mr-4"
            />
            <div className="flex-grow">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </Button>
              <Input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
                className="w-16 text-center"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </Button>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
