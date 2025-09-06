import { MarketList } from "@/components/market-list";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <main className="container mx-auto py-8">
        <MarketList />
      </main>
    </div>
  );
}
