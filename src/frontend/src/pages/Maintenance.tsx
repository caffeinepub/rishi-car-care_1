import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Circle, Droplets, Settings, Sparkles } from "lucide-react";

const tips = [
  {
    icon: Settings,
    title: "Engine Care",
    color: "text-red-400",
    bg: "bg-red-900/20 border-red-900/40",
    points: [
      "Check engine oil level every 1,000 km or before long trips",
      "Replace air filter every 15,000–20,000 km for optimal airflow",
      "Monitor coolant levels to prevent engine overheating",
      "Inspect spark plugs every 30,000 km and replace if worn",
      "Listen for unusual noises and address them early",
    ],
  },
  {
    icon: Droplets,
    title: "Oil Change",
    color: "text-amber-400",
    bg: "bg-amber-900/20 border-amber-900/40",
    points: [
      "Change engine oil every 5,000–7,000 km for most cars",
      "Always use manufacturer-recommended oil grade (e.g. 5W-30)",
      "Replace the oil filter with every oil change",
      "Check for oil leaks underneath the vehicle regularly",
      "Use synthetic oil for better engine protection in extreme temperatures",
    ],
  },
  {
    icon: Circle,
    title: "Tire Maintenance",
    color: "text-blue-400",
    bg: "bg-blue-900/20 border-blue-900/40",
    points: [
      "Check tire pressure monthly — recommended PSI is on the door sticker",
      "Rotate tires every 10,000 km for even wear",
      "Inspect tread depth — replace when below 1.6mm",
      "Get wheel alignment checked every 10,000 km",
      "Check sidewalls for cracks, bulges, or damage",
    ],
  },
  {
    icon: Battery,
    title: "Battery Care",
    color: "text-green-400",
    bg: "bg-green-900/20 border-green-900/40",
    points: [
      "Clean battery terminals to remove corrosion buildup",
      "Check battery voltage regularly — healthy range is 12.4–12.7V",
      "Avoid deep discharge by not leaving lights on when engine is off",
      "Inspect battery connections for tightness and corrosion",
      "Replace battery every 3–5 years for reliable starts",
    ],
  },
  {
    icon: Sparkles,
    title: "Car Cleaning",
    color: "text-purple-400",
    bg: "bg-purple-900/20 border-purple-900/40",
    points: [
      "Wash the exterior weekly to prevent paint damage from dirt",
      "Apply wax every 3 months to protect the paint surface",
      "Vacuum and wipe the interior monthly for a fresh look",
      "Protect the dashboard with UV protectant to prevent cracking",
      "Clean windows inside and out for maximum visibility",
    ],
  },
];

export default function Maintenance() {
  return (
    <div>
      {/* Header */}
      <section className="py-12 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-3">
            Car <span className="text-primary">Maintenance</span>
          </h1>
          <p className="text-muted-foreground">
            Essential tips to keep your vehicle in peak condition
          </p>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, idx) => (
            <Card
              key={tip.title}
              className={`border ${tip.bg} bg-card`}
              data-ocid={`maintenance.item.${idx + 1}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${tip.bg}`}
                  >
                    <tip.icon className={`h-5 w-5 ${tip.color}`} />
                  </div>
                  <CardTitle className={`font-display text-xl ${tip.color}`}>
                    {tip.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tip.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-0.5 shrink-0">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 rounded-lg bg-primary/10 border border-primary/20 text-center">
          <h3 className="text-xl font-display font-bold text-foreground mb-2">
            Need Professional Help?
          </h3>
          <p className="text-muted-foreground text-sm">
            Contact Rishi Car Care for expert maintenance advice and guidance.
          </p>
        </div>
      </section>
    </div>
  );
}
