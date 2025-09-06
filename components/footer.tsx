export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-gradient-to-br from-blue-600 to-green-600 rounded-full"></div>
              </div>
            </div>
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Health Maxers Market
            </span>
          </div>
          <p className="text-sm text-gray-600 text-center">
            © 2025 Health Maxers Market. Premium health products to maximize your wellness journey.
          </p>
        </div>
      </div>
    </footer>
  );
}