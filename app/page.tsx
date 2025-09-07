import { MarketList } from "@/components/market-list";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-background to-green-50 dark:from-blue-950/20 dark:via-background dark:to-green-950/20 min-h-full">
      <div className="container mx-auto py-8">
        <MarketList />
      </div>
    </div>
  );
}
