"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// This would typically come from a state management solution or API
const initialCartItems = [
  { id: 1, name: "Spicy Chicken Deluxe Burger", price: 12.99, quantity: 2 },
  { id: 2, name: "Veggie Supreme Pizza", price: 15.99, quantity: 1 },
  { id: 3, name: "Chocolate Brownie Sundae", price: 6.99, quantity: 2 },
];

export default function CartSummary() {
  //const [cartItems, setCartItems] = useState(initialCartItems);
  const [cartItems] = useState(initialCartItems);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.1; // Assuming 10% tax
  const deliveryFee = 2.99;
  const total = subtotal + tax + deliveryFee;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold pt-2 border-t">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
