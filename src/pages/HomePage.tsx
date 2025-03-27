import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import RestaurantCard from "@/components/RestaurantCard";
import { ThemeToggle } from "@/components/ThemeToggle";

// Sample restaurant data
const restaurants = [
  {
    id: 1,
    name: "Burger Kingdom",
    image: "/placeholder.svg?height=200&width=400",
    rating: 4.2,
    description: "Nicest place for burgers",
    isNew: true,
    categories: ["Burgers", "Comfort Food"],
  },
  {
    id: 2,
    name: "Pizza Paradise",
    image: "/placeholder.svg?height=200&width=400",
    rating: 4.5,
    description: "Authentic Italian pizzas",
    isNew: false,
    categories: ["Pizza", "Italian"],
  },
  {
    id: 3,
    name: "Sushi Sensation",
    image: "/placeholder.svg?height=200&width=400",
    rating: 4.8,
    description: "Fresh and delicious sushi",
    isNew: true,
    categories: ["Japanese", "Sushi"],
  },
  {
    id: 4,
    name: "Taco Temple",
    image: "/placeholder.svg?height=200&width=400",
    rating: 4.3,
    description: "Authentic Mexican street food",
    isNew: false,
    categories: ["Mexican", "Street Food"],
  },
];

// Extract all unique categories
const allCategories = Array.from(
  new Set(restaurants.flatMap((restaurant) => restaurant.categories))
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Food Delivery</h1>
          <ThemeToggle />
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search for restaurants or cuisines..."
            className="pl-10 w-full"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {allCategories.map((category) => (
            <Button key={category} variant="outline" size="sm">
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}
