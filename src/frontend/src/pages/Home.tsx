import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Car,
  ChevronRight,
  Info,
  Newspaper,
  Phone,
  Wrench,
} from "lucide-react";

const featuredCars = [
  {
    name: "BMW 3 Series",
    brand: "BMW",
    price: "₹46,00,000",
    fuel: "Petrol",
    speed: "250 km/h",
    img: "/assets/generated/bmw-3series.dim_600x400.jpg",
  },
  {
    name: "Hyundai Creta",
    brand: "Hyundai",
    price: "₹11,00,000",
    fuel: "Petrol",
    speed: "162 km/h",
    img: "/assets/generated/hyundai-creta.dim_600x400.jpg",
  },
  {
    name: "Tata Nexon EV",
    brand: "Tata",
    price: "₹14,00,000",
    fuel: "Electric",
    speed: "140 km/h",
    img: "/assets/generated/tata-nexon-ev.dim_600x400.jpg",
  },
];

const popularCars = [
  {
    name: "Audi A4",
    brand: "Audi",
    price: "₹42,00,000",
    fuel: "Petrol",
    img: "/assets/generated/audi-a4.dim_600x400.jpg",
  },
  {
    name: "Mercedes C-Class",
    brand: "Mercedes",
    price: "₹55,00,000",
    fuel: "Petrol/Mild Hybrid",
    img: "/assets/generated/mercedes-cclass.dim_600x400.jpg",
  },
  {
    name: "Toyota Camry",
    brand: "Toyota",
    price: "₹46,00,000",
    fuel: "Petrol Hybrid",
    img: "/assets/generated/toyota-camry.dim_600x400.jpg",
  },
];

const maintenanceTips = [
  {
    title: "Engine Care",
    desc: "Regular oil checks and air filter replacement keep your engine running smooth.",
    icon: "🔧",
  },
  {
    title: "Tire Maintenance",
    desc: "Check pressure monthly and rotate every 10,000 km for safety and even wear.",
    icon: "🔄",
  },
  {
    title: "Battery Care",
    desc: "Clean terminals regularly and check voltage to avoid unexpected breakdowns.",
    icon: "⚡",
  },
];

const quickLinks = [
  { to: "/cars" as const, label: "Car Models", icon: Car },
  { to: "/maintenance" as const, label: "Maintenance", icon: Wrench },
  { to: "/news" as const, label: "Car News", icon: Newspaper },
  { to: "/about" as const, label: "About Us", icon: Info },
  { to: "/contact" as const, label: "Contact", icon: Phone },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[560px] sm:h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 100%), url('/assets/generated/hero-car.dim_1200x600.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/40 text-xs uppercase tracking-widest">
            Powered by Rishi
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4 leading-tight">
            Rishi <span className="text-primary">Car Care</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Complete Information About Cars in One Place
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold"
              data-ocid="home.explore_button"
            >
              <Link to="/cars">
                Explore Cars <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10"
              data-ocid="home.learn_more_button"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {quickLinks.map((ql) => (
              <Link
                key={ql.to}
                to={ql.to}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium transition-colors hover:bg-primary hover:text-white hover:border-primary"
              >
                <ql.icon className="h-4 w-4" />
                {ql.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Cars */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              Latest <span className="text-primary">Cars</span>
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Top picks from our collection
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-primary/40 text-primary hover:bg-primary hover:text-white"
          >
            <Link to="/cars">
              View All <ChevronRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCars.map((car) => (
            <Card
              key={car.name}
              className="car-card bg-card border-border overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-display font-bold text-foreground">
                      {car.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-xs mt-1 border-primary/40 text-primary"
                    >
                      {car.brand}
                    </Badge>
                  </div>
                  <span className="text-primary font-bold text-sm">
                    {car.price}
                  </span>
                </div>
                <div className="flex gap-3 text-xs text-muted-foreground mt-2">
                  <span>⚡ {car.fuel}</span>
                  <span>🏎️ {car.speed}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Cars */}
      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                Popular <span className="text-primary">Cars</span>
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Most loved by enthusiasts
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary/40 text-primary hover:bg-primary hover:text-white"
            >
              <Link to="/cars">
                View All <ChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCars.map((car) => (
              <Card
                key={car.name}
                className="car-card bg-background border-border overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display font-bold text-foreground">
                        {car.name}
                      </h3>
                      <Badge
                        variant="outline"
                        className="text-xs mt-1 border-primary/40 text-primary"
                      >
                        {car.brand}
                      </Badge>
                    </div>
                    <span className="text-primary font-bold text-sm">
                      {car.price}
                    </span>
                  </div>
                  <div className="flex gap-3 text-xs text-muted-foreground mt-2">
                    <span>⚡ {car.fuel}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              Maintenance <span className="text-primary">Tips</span>
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Keep your car in top condition
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-primary/40 text-primary hover:bg-primary hover:text-white"
          >
            <Link to="/maintenance">
              View All <ChevronRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {maintenanceTips.map((tip) => (
            <Card key={tip.title} className="car-card bg-card border-border">
              <CardHeader className="pb-3">
                <div className="text-3xl mb-2">{tip.icon}</div>
                <CardTitle className="font-display text-lg text-foreground">
                  {tip.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{tip.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
