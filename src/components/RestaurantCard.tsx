import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

interface Restaurant {
  id: number;
  name: string;
  image: string;
  rating: number;
  description: string;
  isNew: boolean;
  categories: string[];
}

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    // <Link href={`/restaurant/${restaurant.id}`} className="block h-full">
    <Card className="overflow-hidden h-full transition-all hover:shadow-md">
      <div className="relative">
        {/* <Image
            src={restaurant.image || "/placeholder.svg"}
            alt={restaurant.name}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          /> */}
        {restaurant.isNew && (
          <div className="absolute top-2 left-2 bg-[#e8f5c8] text-black text-xs font-medium px-2 py-1 rounded">
            new
          </div>
        )}
      </div>
      <CardHeader className="p-4 pb-0">
        <CardTitle>{restaurant.name}</CardTitle>
        <CardDescription className="flex items-center">
          <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
          <span>{restaurant.rating} very good</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-muted-foreground">
          {restaurant.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          {restaurant.categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="font-normal text-xs"
            >
              {category}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
    // </Link>
  );
}
