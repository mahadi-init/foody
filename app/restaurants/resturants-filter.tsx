"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const cuisines = [
  "Italian",
  "Chinese",
  "Mexican",
  "Japanese",
  "Indian",
  "Thai",
  "American",
  "Mediterranean",
];
const dietaryOptions = [
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Halal",
  "Kosher",
];

export default function RestaurantFilters() {
  const [priceRange, setPriceRange] = useState("all");

  return (
    <Accordion type="multiple" defaultValue={["cuisines", "price", "dietary"]}>
      <AccordionItem value="cuisines">
        <AccordionTrigger>Cuisines</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            {cuisines.map((cuisine) => (
              <div key={cuisine} className="flex items-center space-x-2">
                <Checkbox id={`cuisine-${cuisine}`} />
                <Label htmlFor={`cuisine-${cuisine}`}>{cuisine}</Label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="price">
        <AccordionTrigger>Price Range</AccordionTrigger>
        <AccordionContent>
          <RadioGroup value={priceRange} onValueChange={setPriceRange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="price-all" />
              <Label htmlFor="price-all">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="$" id="price-low" />
              <Label htmlFor="price-low">$</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="$$" id="price-medium" />
              <Label htmlFor="price-medium">$$</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="$$$" id="price-high" />
              <Label htmlFor="price-high">$$$</Label>
            </div>
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="dietary">
        <AccordionTrigger>Dietary Options</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            {dietaryOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox id={`dietary-${option}`} />
                <Label htmlFor={`dietary-${option}`}>{option}</Label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
