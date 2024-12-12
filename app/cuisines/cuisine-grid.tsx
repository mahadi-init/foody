import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Route } from "next";

// This would typically come from an API or database
const cuisines = [
  {
    id: 1,
    name: "Italian",
    image: "/placeholder.svg?height=200&width=300&text=Italian",
  },
  {
    id: 2,
    name: "Chinese",
    image: "/placeholder.svg?height=200&width=300&text=Chinese",
  },
  {
    id: 3,
    name: "Mexican",
    image: "/placeholder.svg?height=200&width=300&text=Mexican",
  },
  {
    id: 4,
    name: "Japanese",
    image: "/placeholder.svg?height=200&width=300&text=Japanese",
  },
  {
    id: 5,
    name: "Indian",
    image: "/placeholder.svg?height=200&width=300&text=Indian",
  },
  {
    id: 6,
    name: "Thai",
    image: "/placeholder.svg?height=200&width=300&text=Thai",
  },
  {
    id: 7,
    name: "Greek",
    image: "/placeholder.svg?height=200&width=300&text=Greek",
  },
  {
    id: 8,
    name: "French",
    image: "/placeholder.svg?height=200&width=300&text=French",
  },
  {
    id: 9,
    name: "Spanish",
    image: "/placeholder.svg?height=200&width=300&text=Spanish",
  },
  {
    id: 10,
    name: "American",
    image: "/placeholder.svg?height=200&width=300&text=American",
  },
  {
    id: 11,
    name: "Korean",
    image: "/placeholder.svg?height=200&width=300&text=Korean",
  },
  {
    id: 12,
    name: "Vietnamese",
    image: "/placeholder.svg?height=200&width=300&text=Vietnamese",
  },
];

export default function CuisineGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cuisines.map((cuisine) => (
        <Link href={`/cuisines/${cuisine.id}` as Route} key={cuisine.id}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative h-48">
                <Image
                  src={cuisine.image}
                  alt={cuisine.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">
                  {cuisine.name}
                </h2>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
