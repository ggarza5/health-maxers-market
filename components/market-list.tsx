"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { healthProducts, type HealthProduct } from "@/lib/sample-data";

interface MarketItemCardProps {
  product: HealthProduct;
}

function MarketItemCard({ product }: MarketItemCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="w-full h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-white shadow-md cursor-pointer hover:scale-[1.02]">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-gray-900 text-sm mb-3 line-clamp-2 flex-shrink-0">
              {product.name}
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {product.keywords.slice(0, 3).map((keyword) => (
                <Badge 
                  key={keyword} 
                  variant="secondary" 
                  className="text-xs px-2 py-1 bg-gradient-to-r from-blue-50 to-green-50 text-blue-800 border-blue-200"
                >
                  {keyword}
                </Badge>
              ))}
              {product.keywords.length > 3 && (
                <Badge 
                  variant="secondary" 
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-600"
                >
                  +{product.keywords.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function MarketList() {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  // Get all unique keywords from all products
  const allKeywords = useMemo(() => {
    const keywords = new Set<string>();
    healthProducts.forEach(product => {
      product.keywords.forEach(keyword => keywords.add(keyword));
    });
    return Array.from(keywords).sort();
  }, []);

  // Filter products based on selected keywords
  const filteredProducts = useMemo(() => {
    if (selectedKeywords.length === 0) {
      return healthProducts;
    }
    return healthProducts.filter(product =>
      selectedKeywords.every(keyword => product.keywords.includes(keyword))
    );
  }, [selectedKeywords]);

  const toggleKeyword = (keyword: string) => {
    setSelectedKeywords(prev => {
      if (prev.includes(keyword)) {
        return prev.filter(k => k !== keyword);
      } else {
        return [...prev, keyword];
      }
    });
  };

  const clearFilters = () => {
    setSelectedKeywords([]);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="mb-8 text-center">
        <p className="text-gray-600 text-sm sm:text-base">
          Premium health products to maximize your wellness journey
        </p>
      </div>

      {/* Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Filter by:</span>
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className={`${selectedKeywords.length === 0 ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'}`}
          >
            All Products
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {allKeywords.map((keyword) => (
            <Button
              key={keyword}
              variant="outline"
              size="sm"
              onClick={() => toggleKeyword(keyword)}
              className={`text-xs transition-all ${
                selectedKeywords.includes(keyword)
                  ? 'bg-gradient-to-r from-blue-100 to-green-100 border-blue-300 text-blue-800 hover:from-blue-200 hover:to-green-200'
                  : 'hover:bg-gray-50'
              }`}
            >
              {keyword}
            </Button>
          ))}
        </div>

        {selectedKeywords.length > 0 && (
          <div className="text-sm text-gray-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} matching: {selectedKeywords.join(', ')}
          </div>
        )}
      </div>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <MarketItemCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products match your selected filters.</p>
          <Button
            onClick={clearFilters}
            className="mt-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}