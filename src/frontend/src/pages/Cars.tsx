import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const cars = [
  {
    brand: "BMW",
    model: "BMW 3 Series",
    engine: "2.0L TwinPower Turbo",
    mileage: "14 kmpl",
    price: "₹46,00,000",
    topSpeed: "250 km/h",
    fuel: "Petrol",
    img: "/assets/generated/bmw-3series.dim_600x400.jpg",
  },
  {
    brand: "Audi",
    model: "Audi A4",
    engine: "2.0L TFSI",
    mileage: "16 kmpl",
    price: "₹42,00,000",
    topSpeed: "240 km/h",
    fuel: "Petrol",
    img: "/assets/generated/audi-a4.dim_600x400.jpg",
  },
  {
    brand: "Mercedes",
    model: "Mercedes C-Class",
    engine: "1.5L EQ Boost",
    mileage: "15 kmpl",
    price: "₹55,00,000",
    topSpeed: "235 km/h",
    fuel: "Petrol/Mild Hybrid",
    img: "/assets/generated/mercedes-cclass.dim_600x400.jpg",
  },
  {
    brand: "Toyota",
    model: "Toyota Camry",
    engine: "2.5L Hybrid",
    mileage: "19 kmpl",
    price: "₹46,00,000",
    topSpeed: "210 km/h",
    fuel: "Petrol Hybrid",
    img: "/assets/generated/toyota-camry.dim_600x400.jpg",
  },
  {
    brand: "Hyundai",
    model: "Hyundai Creta",
    engine: "1.5L MPi",
    mileage: "17 kmpl",
    price: "₹11,00,000",
    topSpeed: "162 km/h",
    fuel: "Petrol",
    img: "/assets/generated/hyundai-creta.dim_600x400.jpg",
  },
  {
    brand: "Tata",
    model: "Tata Nexon EV",
    engine: "Electric Motor 143PS",
    mileage: "312 km range",
    price: "₹14,00,000",
    topSpeed: "140 km/h",
    fuel: "Electric",
    img: "/assets/generated/tata-nexon-ev.dim_600x400.jpg",
  },
];

const brands = ["All", "BMW", "Audi", "Mercedes", "Toyota", "Hyundai", "Tata"];

const fuelColors: Record<string, string> = {
  Petrol: "bg-amber-900/30 text-amber-400 border-amber-800",
  Electric: "bg-green-900/30 text-green-400 border-green-800",
  "Petrol Hybrid": "bg-blue-900/30 text-blue-400 border-blue-800",
  "Petrol/Mild Hybrid": "bg-purple-900/30 text-purple-400 border-purple-800",
};

export default function Cars() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? cars
      : cars.filter((c) => c.brand === activeFilter);

  return (
    <div>
      {/* Header */}
      <section className="py-12 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-3">
            Car <span className="text-primary">Models</span>
          </h1>
          <p className="text-muted-foreground">
            Explore top car brands with detailed specifications
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {brands.map((brand) => (
              <Button
                key={brand}
                variant={activeFilter === brand ? "default" : "outline"}
                size="sm"
                data-ocid="cars.filter.tab"
                onClick={() => setActiveFilter(brand)}
                className={
                  activeFilter === brand
                    ? "bg-primary hover:bg-primary/90 text-white border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }
              >
                {brand}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div
            className="text-center py-16 text-muted-foreground"
            data-ocid="cars.empty_state"
          >
            <p className="text-lg">No cars found for this brand.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((car, idx) => (
              <Card
                key={car.model}
                className="car-card bg-card border-border overflow-hidden"
                data-ocid={`cars.item.${idx + 1}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={car.img}
                    alt={car.model}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-bold text-foreground text-lg">
                        {car.model}
                      </h3>
                      <Badge className="mt-1 bg-primary/15 text-primary border-primary/30 text-xs">
                        {car.brand}
                      </Badge>
                    </div>
                    <span className="text-primary font-bold text-sm text-right">
                      {car.price}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="bg-secondary/50 rounded p-2">
                      <div className="text-xs text-muted-foreground">
                        Engine
                      </div>
                      <div className="text-xs font-medium text-foreground mt-0.5">
                        {car.engine}
                      </div>
                    </div>
                    <div className="bg-secondary/50 rounded p-2">
                      <div className="text-xs text-muted-foreground">
                        Mileage
                      </div>
                      <div className="text-xs font-medium text-foreground mt-0.5">
                        {car.mileage}
                      </div>
                    </div>
                    <div className="bg-secondary/50 rounded p-2">
                      <div className="text-xs text-muted-foreground">
                        Top Speed
                      </div>
                      <div className="text-xs font-medium text-foreground mt-0.5">
                        {car.topSpeed}
                      </div>
                    </div>
                    <div className="bg-secondary/50 rounded p-2">
                      <div className="text-xs text-muted-foreground">
                        Fuel Type
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs mt-0.5 ${fuelColors[car.fuel] ?? "border-border text-muted-foreground"}`}
                      >
                        {car.fuel}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
