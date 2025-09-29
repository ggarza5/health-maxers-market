export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-3xl font-bold">
            <span className="text-[#714cfe]">Max</span>
            <span className="text-[#120c40] dark:text-white">Health</span>
          </h2>
          <p className="text-base text-[#4b5257] dark:text-slate-400">
            © 2025 MaxHealth. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}