import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MenuItem {
  name: string;
  price: number;
  description: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

interface RestaurantMenuProps {
  menu: MenuCategory[];
}

export default function RestaurantMenu({ menu }: RestaurantMenuProps) {
  return (
    <div className="space-y-8">
      {menu.map((category, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{category.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex justify-between items-start"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${item.price.toFixed(2)}</p>
                    <Button size="sm" className="mt-2">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
