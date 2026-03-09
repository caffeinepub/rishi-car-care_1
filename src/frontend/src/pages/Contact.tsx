import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

export default function Contact() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || !actor) return;
    setStatus("loading");
    try {
      await actor.submitMessage(name, email, message);
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      {/* Header */}
      <section className="py-12 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-3">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-muted-foreground">
            Get in touch with the Rishi Car Care team
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info + Map */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-card border-border text-center">
                <CardContent className="p-4">
                  <Phone className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-semibold text-foreground mt-1">
                    9787683497
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border text-center">
                <CardContent className="p-4">
                  <Mail className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-xs font-semibold text-foreground mt-1 break-all">
                    rishikesh042004@gmail.com
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border text-center">
                <CardContent className="p-4">
                  <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-semibold text-foreground mt-1">
                    Coimbatore, TN
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Google Map */}
            <div
              className="rounded-lg overflow-hidden border border-border"
              data-ocid="contact.map_marker"
            >
              <iframe
                src="https://maps.google.com/maps?q=coimbatore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                frameBorder={0}
                allowFullScreen
                title="Coimbatore Map"
                className="block"
              />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="font-display text-xl text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {status === "success" ? (
                <div
                  className="flex flex-col items-center justify-center py-10 text-center"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                  <Button
                    className="mt-6 bg-primary hover:bg-primary/90 text-white"
                    onClick={() => setStatus("idle")}
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-name"
                      className="text-sm text-foreground"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="contact-name"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      data-ocid="contact.name_input"
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-email"
                      className="text-sm text-foreground"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      data-ocid="contact.email_input"
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-message"
                      className="text-sm text-foreground"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Write your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      data-ocid="contact.message_textarea"
                      required
                      rows={5}
                      className="bg-secondary border-border focus:border-primary resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div
                      className="flex items-center gap-2 p-3 rounded-md bg-destructive/10 border border-destructive/30"
                      data-ocid="contact.error_state"
                    >
                      <AlertCircle className="h-4 w-4 text-destructive" />
                      <p className="text-sm text-destructive">
                        Failed to send message. Please try again.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    data-ocid="contact.submit_button"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        <span data-ocid="contact.loading_state">
                          Sending...
                        </span>
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
