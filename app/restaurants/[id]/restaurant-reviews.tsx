import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

interface RestaurantReviewsProps {
  reviews: Review[];
}

export default function RestaurantReviews({ reviews }: RestaurantReviewsProps) {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <Card key={review.id}>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-semibold">{review.user}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>{review.rating}</span>
              </div>
            </div>
            <p>{review.comment}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
