"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "../shared/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SkeletonProductCard } from "../shared/skeleton/SkeletonLoader";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  const { data: latestProduct, isLoading } = useQuery({
    queryKey: ["latestProducts"],
    queryFn: async () => {
      const { data } = await axios(
        "https://https://techzoneserver.vercel.app/api/products/latest"
      );
      return data;
    },
  });

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header Section: Modernized and Centered on mobile */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 border-b pb-4">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
              Trending Tech
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              Top picks for this week—don&apos;t miss out on the innovation.
            </p>
          </div>

          {/* View All Button: Styled as primary action */}
          <Link href="/products">
            <Button className="rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 gap-2 px-6">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isLoading ? (
            // Displaying a maximum of 5 skeleton cards for a cleaner featured section look
            <>
              {Array.from({ length: 5 }).map((_, ind) => (
                <SkeletonProductCard key={ind} />
              ))}
            </>
          ) : (
            <>
              {latestProduct?.slice(0, 5).map((prod) => (
                <ProductCard key={prod._id} prod={prod} />
              ))}
            </>
          )}
        </div>

        {/* Mobile View All (Re-added for accessibility) */}
        <div className="mt-10 flex justify-center sm:hidden">
          <Link href="/products">
            <Button variant="outline" className="w-full rounded-full gap-2">
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
