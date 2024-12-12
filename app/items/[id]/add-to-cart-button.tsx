"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function AddToCartButton({ item }: { item: unknown }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    // Simulate adding to cart
    setTimeout(() => {
      setIsAdding(false);
      // Here you would typically update your cart state or send a request to your backend
      console.log("Added to cart:", item);
    }, 1000);
  };

  return (
    <Button onClick={handleAddToCart} disabled={isAdding}>
      <ShoppingCart className="w-4 h-4 mr-2" />
      {isAdding ? "Adding..." : "Add to Cart"}
    </Button>
  );
}
