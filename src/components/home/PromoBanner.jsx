import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const PromoBanner = () => {
  return (
    <section className="container mx-auto px-4 my-20">
      <div className="bg-muted rounded-md p-8 md:p-16 overflow-hidden relative text-center lg:text-left border-border border-2 shadow-2xl shadow-muted/50">
        <div className="absolute top-0 right-0 w-64 h-64 bg-muted blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div className="relative w-full h-64 md:h-96 flex items-center justify-center order-1 lg:order-1">
            <div className="w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.03] transition-transform duration-700 border border-white/50">
              <Image
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/736x/88/14/33/881433e75e1199b92efdc3f5f7e48120.jpg"
                width={1000}
                height={1000}
                alt="Gaming Setup"
              />
            </div>
          </div>

          <div className="space-y-6 order-2 lg:order-2">
            <span className="inline-block px-3 py-1 bg-primary text-muted text-xs font-bold tracking-wide rounded-full shadow-lg">
              LIMITED TIME OFFER
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Enhance Your <br />{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-violet-600">
                Gaming Experience
              </span>
            </h2>
            <p className="text-muted-foreground max-w-md font-medium mx-auto lg:mx-0">
              Get up to 50% off on premium gaming headsets and mechanical
              keyboards. Offer ends this Sunday.
            </p>

            <Button size="lg" className="mt-4  rounded-full px-8 shadow-xl">
              <Link href="/products">Grab the Deal</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
