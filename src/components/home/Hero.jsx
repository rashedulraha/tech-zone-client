"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Hero = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Razer BlackWidow V4",
      price: "$199",
      image:
        "https://i.pinimg.com/1200x/08/c7/10/08c7109118bed48400551a13e7a124be.jpg",
      description: "Mechanical keyboard built for ultimate speed.",
    },
    {
      id: 2,
      name: "PlayStation 5 Pro",
      price: "$799",
      image:
        "https://i.pinimg.com/1200x/9e/08/24/9e0824fa210808a3166872dad36a6b90.jpg",
      description: "Next-gen console gaming redefined.",
    },
    {
      id: 3,
      name: "NVIDIA GeForce RTX 5090",
      price: "$2,499",
      image:
        "https://i.pinimg.com/736x/fc/e2/ae/fce2ae1f09e352729e37fb056af333a9.jpg",
      description: "Unmatched performance for 8K gaming.",
    },
    {
      id: 4,
      name: "Samsung Odyssey G9 OLED",
      price: "$1,399",
      image:
        "https://i.pinimg.com/1200x/f3/4e/f9/f34ef9aa321a485149bdf03c4931171e.jpg",
      description: "Ultra-wide curved display, 240Hz refresh rate.",
    },
    {
      id: 5,
      name: "Logitech G Pro X Headset",
      price: "$129",
      image:
        "https://i.pinimg.com/1200x/2e/eb/9c/2eeb9c6eebd67b188137f55b5d4bbb88.jpg",
      description: "Crystal clear audio for competitive play.",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="text-center lg:text-left space-y-6 order-2 lg:order-1 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm border border-secondary text-secondary-foreground text-xs sm:text-sm font-medium mb-2 animate-pulse">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New Arrival: PS5 Pro Unleashed
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary leading-[1.1]">
            Unleash Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-purple-600">
              True Potential
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Dominate the competition with the latest in **high-performance
            gaming gear, powerful PC components, and immersive peripherals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <Link href="/gaming-essentials" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 shadow-lg hover:shadow-primary/25 transition-all duration-300 h-12 text-base">
                Explore Gear <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/deals" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 text-base hover:bg-secondary/50">
                View Today's Deals
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[350px] sm:max-w-md lg:max-w-full lg:ml-auto order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-red-500/20 rounded-full blur-[80px] -z-10 animate-pulse pointer-events-none" />

          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="w-full py-8 !pb-12">
            {featuredProducts.map((product) => (
              <SwiperSlide
                key={product.id}
                className="!w-[280px] sm:!w-[320px]">
                <div className="group relative bg-card/50 border border-white/10 dark:border-white/5 backdrop-blur-md p-4 rounded-3xl shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full">
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-lg">
                    HOT
                  </div>

                  <div className="aspect-square bg-white dark:bg-secondary/20 rounded-2xl flex items-center justify-center mb-5 overflow-hidden p-4 group-hover:scale-[1.02] transition-transform duration-500">
                    <Image
                      src={product.image}
                      width={400}
                      height={400}
                      alt={product.name}
                      className="w-full h-full object-contain drop-shadow-xl"
                      priority={product.id <= 2}
                    />
                  </div>

                  <div className="space-y-3 px-1">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-lg leading-tight line-clamp-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded text-xs font-bold shrink-0">
                        <Star className="w-3 h-3 fill-current" />
                        <span>5.0</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2 h-10">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between font-bold pt-2 border-t border-border/50">
                      <span className="text-xl">{product.price}</span>
                      <Button
                        size="sm"
                        className="rounded-full px-4 h-8 bg-primary/90 hover:bg-primary">
                        Pre-Order
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
