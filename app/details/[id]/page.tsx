import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, Clock, Utensils, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AddToCartButton from "@/components/common/add-to-cart-button";

// This would typically come from an API or database
const getItemDetails = (id: string) => {
  const items = {
    "1": {
      name: "Spicy Chicken Deluxe Burger",
      description:
        "A juicy, hand-breaded chicken breast, seasoned with a spicy blend of peppers and spices, topped with fresh lettuce, tomato, and our signature sauce, all on a toasted brioche bun.",
      price: 12.99,
      rating: 4.7,
      prepTime: "15-20",
      calories: 650,
      image: "/placeholder.svg?height=400&width=600&text=Spicy+Chicken+Deluxe",
      allergens: ["Gluten", "Egg", "Milk"],
      customizations: [
        { name: "Extra Spicy", price: 0.5 },
        { name: "Add Cheese", price: 1.0 },
        { name: "Add Bacon", price: 1.5 },
      ],
    },
  };
  return items[id as keyof typeof items];
};

export default async function ItemDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const item = getItemDetails((await params).id);

  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={item.image}
            alt={item.name}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[400px]"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
          <p className="text-muted-foreground mb-4">{item.description}</p>
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-400 mr-1" />
            <span className="font-semibold mr-2">{item.rating}</span>
            <span className="text-muted-foreground">(203 reviews)</span>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-primary mr-2" />
              <span>{item.prepTime} mins</span>
            </div>
            <div className="flex items-center">
              <Utensils className="w-5 h-5 text-primary mr-2" />
              <span>{item.calories} cal</span>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Allergens:</h3>
            <div className="flex flex-wrap gap-2">
              {item.allergens.map((allergen) => (
                <span
                  key={allergen}
                  className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
                >
                  {allergen}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Customizations:</h3>
            {item.customizations.map((custom) => (
              <div
                key={custom.name}
                className="flex justify-between items-center mb-2"
              >
                <span>{custom.name}</span>
                <span className="text-primary font-semibold">
                  +${custom.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-bold">${item.price.toFixed(2)}</span>
            <AddToCartButton item={item} />
          </div>
        </div>
      </div>
      <Card className="mt-8">
        <CardContent className="p-6">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
            <p className="text-sm">
              Our kitchen handles various allergens. While we take precautions,
              cross-contamination is possible. If you have severe allergies,
              please inform our staff when placing your order.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
