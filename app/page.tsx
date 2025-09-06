import { MarketList } from "@/components/market-list";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-full">
      <div className="container mx-auto py-8">
        <MarketList />
      </div>
    </div>
  );
}
