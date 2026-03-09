import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { BookOpen, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Expert Knowledge",
    desc: "In-depth information about car models, specifications, and features. Our team researches every detail so you don't have to.",
  },
  {
    icon: Zap,
    title: "Latest Updates",
    desc: "Stay up-to-date with the newest car launches, EV technology updates, and automotive industry trends as they happen.",
  },
  {
    icon: Shield,
    title: "Trusted Information",
    desc: "All information is verified and accurate. We cross-check data from manufacturers and reliable automotive sources.",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            About <span className="text-primary">Rishi Car Care</span>
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Rishi Car Care is your one-stop destination for complete car
            information. We provide detailed knowledge about car models,
            maintenance tips, latest car launches, and automotive technology
            updates. Our mission is to help car enthusiasts and everyday drivers
            make informed decisions.
          </p>
        </div>
      </section>

      {/* Image + Story */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/assets/generated/bmw-3series.dim_600x400.jpg"
              alt="About Rishi Car Care"
              className="rounded-lg border border-border w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded with a passion for automobiles, Rishi Car Care was created
              to bridge the gap between complex automotive information and
              everyday car owners. Whether you&apos;re buying your first car,
              planning maintenance, or simply exploring the latest models, we
              have you covered.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From luxury sedans to budget-friendly hatchbacks, from petrol
              engines to cutting-edge EVs &mdash; we cover it all with clarity
              and accuracy. Our goal is simple: empower every driver with the
              right information.
            </p>
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary">
                  50+
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Car Models
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary">
                  6
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Top Brands
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary">
                  100+
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Tips &amp; Guides
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-2">
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10 text-sm">
            What makes Rishi Car Care different
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((f) => (
              <Card
                key={f.title}
                className="car-card bg-background border-border text-center"
              >
                <CardHeader className="pb-3">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-display text-lg text-foreground">
                    {f.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Have a <span className="text-primary">Question?</span>
        </h2>
        <p className="text-muted-foreground mb-6">
          Reach out to us anytime. We&apos;re happy to help with any car-related
          queries.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-semibold"
        >
          <Link to="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  );
}
