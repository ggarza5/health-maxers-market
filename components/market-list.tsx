"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { healthProducts, type HealthProduct } from "@/lib/sample-data";

interface MarketItemCardProps {
  product: HealthProduct;
}

function MarketItemCard({ product }: MarketItemCardProps) {
  return (
    <Card className="w-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 bg-white shadow-md">
      <CardContent className="p-0">
        <div className="flex">
          <div className="relative w-32 h-24 sm:w-40 sm:h-32 flex-shrink-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 128px, 160px"
            />
          </div>
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-3 line-clamp-2">
                {product.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {product.keywords.map((keyword) => (
                  <Badge 
                    key={keyword} 
                    variant="secondary" 
                    className="text-xs px-2 py-1 bg-gradient-to-r from-blue-50 to-green-50 text-blue-800 border-blue-200 hover:from-blue-100 hover:to-green-100 transition-all duration-200"
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function MarketList() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
          Health Maxers Market
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Premium health products to maximize your wellness journey
        </p>
      </div>
      
      <div className="space-y-4">
        {healthProducts.map((product) => (
          <MarketItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}