import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Phone, Star, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/ThemeToggle";

const restaurants = [
  {
    id: 1,
    name: "Burger Kingdom",
    image: "/placeholder.svg?height=400&width=800",
    rating: 4.2,
    description: "Nicest place for burgers",
    isNew: true,
    categories: ["Burgers", "Comfort Food"],
    address: "123 Main Street, Foodville",
    hours: "9:00 AM - 10:00 PM",
    priceRange: "$$",
    phone: "(555) 123-4567",
    menu: [
      {
        name: "Classic Burger",
        price: 8.99,
        description: "Beef patty with lettuce, tomato, and special sauce",
      },
      {
        name: "Cheese Burger",
        price: 9.99,
        description: "Classic burger with American cheese",
      },
      {
        name: "Bacon Burger",
        price: 10.99,
        description: "Classic burger with crispy bacon",
      },
      {
        name: "Veggie Burger",
        price: 8.99,
        description: "Plant-based patty with all the fixings",
      },
    ],
    reviews: [
      {
        author: "John D.",
        rating: 5,
        comment: "Best burgers in town! The special sauce is amazing.",
      },
      {
        author: "Sarah M.",
        rating: 4,
        comment: "Great food, but can get crowded during lunch hours.",
      },
    ],
  },
  {
    id: 2,
    name: "Pizza Paradise",
    image: "/placeholder.svg?height=400&width=800",
    rating: 4.5,
    description: "Authentic Italian pizzas",
    isNew: false,
    categories: ["Pizza", "Italian"],
    address: "456 Flour Avenue, Foodville",
    hours: "11:00 AM - 11:00 PM",
    priceRange: "$$",
    phone: "(555) 987-6543",
    menu: [
      {
        name: "Margherita",
        price: 12.99,
        description: "Classic tomato sauce, mozzarella, and basil",
      },
      {
        name: "Pepperoni",
        price: 14.99,
        description: "Tomato sauce, mozzarella, and pepperoni",
      },
      {
        name: "Vegetarian",
        price: 13.99,
        description: "Tomato sauce, mozzarella, and assorted vegetables",
      },
      {
        name: "Hawaiian",
        price: 15.99,
        description: "Tomato sauce, mozzarella, ham, and pineapple",
      },
    ],
    reviews: [
      {
        author: "Mike R.",
        rating: 5,
        comment: "Authentic Italian taste. Reminds me of Naples!",
      },
      {
        author: "Lisa T.",
        rating: 4,
        comment: "Delicious pizzas, but a bit pricey.",
      },
    ],
  },
  {
    id: 3,
    name: "Sushi Sensation",
    image: "/placeholder.svg?height=400&width=800",
    rating: 4.8,
    description: "Fresh and delicious sushi",
    isNew: true,
    categories: ["Japanese", "Sushi"],
    address: "789 Ocean Drive, Foodville",
    hours: "12:00 PM - 10:00 PM",
    priceRange: "$$$",
    phone: "(555) 456-7890",
    menu: [
      {
        name: "California Roll",
        price: 7.99,
        description: "Crab, avocado, and cucumber",
      },
      {
        name: "Spicy Tuna Roll",
        price: 8.99,
        description: "Tuna and spicy mayo",
      },
      {
        name: "Dragon Roll",
        price: 12.99,
        description: "Eel, avocado, and cucumber",
      },
      {
        name: "Salmon Nigiri",
        price: 6.99,
        description: "Fresh salmon over rice",
      },
    ],
    reviews: [
      {
        author: "Emma L.",
        rating: 5,
        comment: "The freshest sushi I've had outside of Japan!",
      },
      {
        author: "David K.",
        rating: 5,
        comment: "Excellent quality and presentation. Worth every penny.",
      },
    ],
  },
  {
    id: 4,
    name: "Taco Temple",
    image: "/placeholder.svg?height=400&width=800",
    rating: 4.3,
    description: "Authentic Mexican street food",
    isNew: false,
    categories: ["Mexican", "Street Food"],
    address: "321 Spice Street, Foodville",
    hours: "10:00 AM - 9:00 PM",
    priceRange: "$",
    phone: "(555) 234-5678",
    menu: [
      {
        name: "Beef Taco",
        price: 3.99,
        description: "Seasoned beef with lettuce, cheese, and salsa",
      },
      {
        name: "Chicken Taco",
        price: 3.99,
        description: "Grilled chicken with lettuce, cheese, and salsa",
      },
      {
        name: "Fish Taco",
        price: 4.99,
        description: "Battered fish with slaw and lime crema",
      },
      {
        name: "Veggie Taco",
        price: 3.49,
        description: "Grilled vegetables with guacamole and salsa",
      },
    ],
    reviews: [
      {
        author: "Carlos R.",
        rating: 4,
        comment: "Authentic flavors that remind me of home.",
      },
      {
        author: "Sophia W.",
        rating: 5,
        comment: "Best street tacos in the area. Great prices too!",
      },
    ],
  },
];

export default function RestaurantDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === Number(id));

  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Restaurants
          </Button>
          <ThemeToggle />
        </div>

        <div className="relative w-full h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
          {/* <Image src={restaurant.image || "/placeholder.svg"} alt={restaurant.name} fill className="object-cover" /> */}
          {restaurant.isNew && (
            <div className="absolute top-4 left-4 bg-[#e8f5c8] text-black text-sm font-medium px-3 py-1 rounded">
              new
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl">
                      {restaurant.name}
                    </CardTitle>
                    <CardDescription className="flex items-center mt-2">
                      <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                      <span>{restaurant.rating} very good</span>
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.categories.map((category, index) => (
                      <Badge key={index} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {restaurant.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">
                        {restaurant.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-muted-foreground">
                        {restaurant.hours}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">
                        {restaurant.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Utensils className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Price Range</h3>
                      <p className="text-muted-foreground">
                        {restaurant.priceRange}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="menu" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="menu">Menu</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="menu" className="mt-4">
                <div className="grid grid-cols-1 gap-4">
                  {restaurant.menu.map((item, index) => (
                    <Card key={index}>
                      <CardHeader className="p-4 pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{item.name}</CardTitle>
                          <span className="font-medium">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-4">
                <div className="grid grid-cols-1 gap-4">
                  {restaurant.reviews.map((review, index) => (
                    <Card key={index}>
                      <CardHeader className="p-4 pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">
                            {review.author}
                          </CardTitle>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                            <span>{review.rating}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">
                          {review.comment}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Online</CardTitle>
                <CardDescription>
                  Place your order for pickup or delivery
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full">Delivery</Button>
                <Button variant="outline" className="w-full">
                  Pickup
                </Button>
              </CardContent>
              <Separator />
              <CardFooter className="flex flex-col items-start pt-6">
                <div className="w-full space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      {restaurant.hours}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Phone</h4>
                    <p className="text-sm text-muted-foreground">
                      {restaurant.phone}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Address</h4>
                    <p className="text-sm text-muted-foreground">
                      {restaurant.address}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
