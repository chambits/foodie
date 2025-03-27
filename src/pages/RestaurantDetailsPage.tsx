import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { ArrowLeft, Clock, MapPin, Phone, Star, Utensils } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Image from "@/components/Image";
import { useRestaurants } from "@/hooks/useRestaurants";
import { getImageUrl } from "@/lib/utils";

export default function RestaurantDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getRestaurantById } = useRestaurants();
  const restaurant = getRestaurantById(Number(id));

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
        </div>

        <div className="relative w-full h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
          <Image
            src={getImageUrl("food", restaurant.image)}
            alt={restaurant.name}
            className="w-full h-64 md:h-80 object-cover"
            loading="lazy"
          />
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
