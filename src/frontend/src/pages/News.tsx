import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const news = [
  {
    title: "Tata Punch EV Launched at ₹10.99 Lakh",
    date: "January 2026",
    category: "Electric",
    desc: "Tata Motors officially launches the Punch EV with a range of 421 km on a single charge. The most affordable electric SUV in India targets first-time EV buyers.",
  },
  {
    title: "Maruti Suzuki Swift 2026 Model Unveiled",
    date: "February 2026",
    category: "Hatchback",
    desc: "The all-new 2026 Swift boasts a new 1.2L Z-Series engine with improved fuel efficiency of 24.8 kmpl. Bookings are now open across all Maruti Arena dealerships.",
  },
  {
    title: "Hyundai Creta EV Gets 5-Star Safety Rating",
    date: "February 2026",
    category: "Electric",
    desc: "The Hyundai Creta Electric achieves a perfect 5-star rating from Global NCAP, reinforcing its position as the safest electric SUV in its segment.",
  },
  {
    title: "Toyota Land Cruiser 2026 India Launch",
    date: "March 2026",
    category: "SUV",
    desc: "Toyota unveils the Land Cruiser 300 for the Indian market at ₹2.10 Crore. The flagship off-roader comes with a twin-turbo V6 engine and advanced 4WD system.",
  },
  {
    title: "BYD Seal Sedan Coming to India in 2026",
    date: "March 2026",
    category: "Electric",
    desc: "BYD confirms the Seal electric sedan will be launched in India with a range of 570 km. The model is expected to be priced between ₹45–55 Lakh.",
  },
  {
    title: "MG Windsor EV Pro Version Announced",
    date: "March 2026",
    category: "Electric",
    desc: "MG Motor announces the Windsor EV Pro with enhanced 60.7 kWh battery and ADAS features. The Pro variant gets a panoramic sunroof and 11 kW AC charging.",
  },
];

const categoryColors: Record<string, string> = {
  Electric: "bg-green-900/30 text-green-400 border-green-800",
  Hatchback: "bg-blue-900/30 text-blue-400 border-blue-800",
  SUV: "bg-amber-900/30 text-amber-400 border-amber-800",
  Sedan: "bg-purple-900/30 text-purple-400 border-purple-800",
};

export default function News() {
  return (
    <div>
      {/* Header */}
      <section className="py-12 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-3">
            Latest Car <span className="text-primary">News</span>
          </h1>
          <p className="text-muted-foreground">
            Stay updated with the latest launches, trends, and automotive news
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, idx) => (
            <Card
              key={item.title}
              className="car-card bg-card border-border flex flex-col"
              data-ocid={`news.item.${idx + 1}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <Badge
                    variant="outline"
                    className={`text-xs ${categoryColors[item.category] ?? "border-border text-muted-foreground"}`}
                  >
                    {item.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-foreground text-base leading-tight">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
