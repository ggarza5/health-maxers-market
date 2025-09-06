"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { healthProducts, type HealthProduct } from "@/lib/sample-data";

// Function to find similar products based on shared keywords
function getSimilarProducts(currentProductId: string, currentKeywords: string[], limit: number = 3) {
  return healthProducts
    .filter(product => product.id !== currentProductId)
    .map(product => ({
      ...product,
      similarity: product.keywords.filter(keyword => currentKeywords.includes(keyword)).length
    }))
    .filter(product => product.similarity > 0)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, limit);
}

// Compact card component for similar products
function SimilarProductCard({ product }: { product: HealthProduct & { similarity: number } }) {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-200 cursor-pointer hover:scale-[1.02]">
        <CardContent className="p-0">
          <div className="flex">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-2"
                sizes="80px"
              />
            </div>
            <div className="p-3 flex-1 min-w-0">
              <h4 className="font-medium text-sm text-gray-900 line-clamp-2 mb-2">
                {product.name}
              </h4>
              <div className="flex flex-wrap gap-1">
                {product.keywords.slice(0, 2).map((keyword) => (
                  <Badge 
                    key={keyword} 
                    variant="secondary" 
                    className="text-xs px-1.5 py-0.5 bg-gradient-to-r from-blue-50 to-green-50 text-blue-700 border-blue-200"
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id as string;
  
  const product = healthProducts.find(p => p.id === productId);
  
  if (!product) {
    notFound();
  }

  const similarProducts = getSimilarProducts(product.id, product.keywords, 4);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-full">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6 hover:bg-blue-50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Market
          </Button>
        </Link>

        <Card className="overflow-hidden shadow-lg border-0">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-96">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain bg-gray-50"
                  priority
                />
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      {product.name}
                    </h1>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.keywords.map((keyword) => (
                        <Badge 
                          key={keyword} 
                          className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 border-blue-200 hover:from-blue-200 hover:to-green-200"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">Product Details</h2>
                    <p className="text-gray-600 leading-relaxed">
                      This premium health product is carefully selected to support your wellness journey. 
                      Each item in our Health Maxers Market is chosen for its quality, effectiveness, and 
                      alignment with modern health and wellness principles.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Key Benefits</h3>
                    <ul className="space-y-2">
                      {product.keywords.slice(0, 3).map((keyword, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3"></div>
                          Supports {keyword.replace('-', ' ')} wellness
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <a 
                      href={product.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
                        Learn More
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Similar Products Section */}
        {similarProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Similar Products
            </h2>
            <div className="space-y-3">
              {similarProducts.map((similarProduct) => (
                <SimilarProductCard key={similarProduct.id} product={similarProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}