import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* ---------------- HERO SECTION ---------------- */}
        <section className="bg-muted p-10 md:p-16 text-center border-b border-border">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Need help? Have questions about our products? We&apos;re always here
            to assist you.
          </p>
        </section>

        {/* ---------------- NEW LAYOUT SECTION ---------------- */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-14">
            {/* -------- LEFT SIDE: CONTACT INFORMATION -------- */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>

              {/* Address */}
              <div className="bg-muted p-6 rounded-2xl border flex gap-4 items-start">
                <div className="p-3 bg-primary/10 text-primary rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office Address</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Level 4, Gadget Tower, Banana, Dhaka-1213
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-muted p-6 rounded-2xl border flex gap-4 items-start">
                <div className="p-3 bg-primary/10 text-primary rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone Numbers</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    +880 1700 000000 <br /> +880 1900 000000
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-muted p-6 rounded-2xl border flex gap-4 items-start">
                <div className="p-3 bg-primary/10 text-primary rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    support@gadgetgalaxy.com <br /> sales@gadgetgalaxy.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-muted p-6 rounded-2xl border flex gap-4 items-start">
                <div className="p-3 bg-primary/10 text-primary rounded-full">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Working Hours</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Mon–Fri: 10AM – 8PM <br /> Sat: 10AM – 4PM
                  </p>
                </div>
              </div>
            </div>

            {/* -------- RIGHT SIDE: CONTACT FORM -------- */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-10">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {/* Form posts normally, no JS needed */}
                <form
                  action="/contact-success"
                  method="POST"
                  className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input name="name" placeholder="John Doe" required />
                    </div>

                    <div className="space-y-2">
                      <Label>Email Address</Label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Subject</Label>
                    <Input
                      name="subject"
                      placeholder="Order Issue, Warranty, etc."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Message</Label>
                    <Textarea
                      name="message"
                      className="min-h-[150px] resize-none"
                      placeholder="Write your message here..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 text-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* -------- MAP SECTION -------- */}
          <div className="mt-24 rounded-3xl overflow-hidden border h-[400px] shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57946.985968133435!2d88.89544338495617!3d24.806182072442553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc7b563db2ee85%3A0x30ccd5950337b4fb!2sNaogaon!5e0!3m2!1sen!2sbd!4v1764234956713!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}
