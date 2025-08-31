import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Vegetable, parseVegetableCSV } from "@/lib/csvParser";

const VegetableCatalog = () => {
  const navigate = useNavigate();
  const [allVegetables, setAllVegetables] = useState<Vegetable[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selectedVegetable, setSelectedVegetable] = useState<Vegetable | null>(null);
  const [showOrderDialog, setShowOrderDialog] = useState(false);

  useEffect(() => {
    const loadVegetables = async () => {
      try {
        // Fetch the CSV file content
        const response = await fetch('/VegetablePrices.csv');
        const csvContent = await response.text();
        
        // Parse the CSV content
        const parsedVegetables = parseVegetableCSV(csvContent);
        
        setAllVegetables(parsedVegetables);
        setLoading(false);
      } catch (error) {
        console.error('Error loading vegetables:', error);
        setLoading(false);
      }
    };

    loadVegetables();
  }, []);

  // Apply search and sort filters using useMemo for better performance
  const filteredVegetables = useMemo(() => {
    if (allVegetables.length === 0) return [];
    
    let filtered = [...allVegetables];
    
    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(vegetable =>
        vegetable.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price-low":
        filtered.sort((a, b) => a.ourPrice - b.ourPrice);
        break;
      case "price-high":
        filtered.sort((a, b) => b.ourPrice - a.ourPrice);
        break;
      case "discount":
        filtered.sort((a, b) => {
          const discountA = ((a.marketPrice - a.ourPrice) / a.marketPrice) * 100;
          const discountB = ((b.marketPrice - b.ourPrice) / b.marketPrice) * 100;
          return discountB - discountA;
        });
        break;
      default:
        break;
    }
    
    return filtered;
  }, [searchQuery, sortBy, allVegetables]);

  const formatPrice = (price: number) => {
    return `₹${price}`;
  };

  const formatQuantity = (quantity: string) => {
    return quantity.trim();
  };

  const handleVegetableClick = (vegetable: Vegetable) => {
    setSelectedVegetable(vegetable);
    setShowOrderDialog(true);
  };

  const handleOrderNow = () => {
    setShowOrderDialog(false);
    setSelectedVegetable(null);
    navigate('/order-process');
  };

  const handleCloseDialog = () => {
    setShowOrderDialog(false);
    setSelectedVegetable(null);
  };

  if (loading) {
    return (
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Complete Vegetable Catalog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Loading fresh vegetables...
            </p>
          </div>
          <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-card animate-pulse h-full flex flex-col">
                <div className="aspect-square bg-gray-300"></div>
                <div className="p-2 sm:p-3 md:p-4 flex-1 flex flex-col">
                  <div className="h-2.5 sm:h-3 md:h-4 bg-gray-300 rounded mb-1 sm:mb-2 min-h-[1.75rem] sm:min-h-[2rem] md:min-h-[2.5rem] lg:min-h-[2.75rem]"></div>
                  <div className="h-2 sm:h-2.5 md:h-3 bg-gray-300 rounded mb-2 sm:mb-3"></div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <div className="h-2 sm:h-2.5 md:h-3 bg-gray-300 rounded w-10 sm:w-12 md:w-16 mb-1"></div>
                      <div className="h-3 sm:h-4 md:h-6 bg-gray-300 rounded w-14 sm:w-16 md:w-20"></div>
                    </div>
                    <div className="h-2.5 sm:h-3 md:h-4 bg-gray-300 rounded w-10 sm:w-12 md:w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Complete Vegetable Catalog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our entire collection of farm-fresh vegetables with competitive pricing
          </p>
          <div className="mt-4 text-sm text-gray-600">
            {searchQuery.trim() ? `Showing ${filteredVegetables.length} of ${allVegetables.length} varieties` : `Total Available: ${allVegetables.length} varieties`}
          </div>
        </div>

        {/* Search and filter bar */}
        <div className="mb-8 p-6 bg-white rounded-2xl shadow-card">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search vegetables..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fresh-green focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fresh-green"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="discount">Highest Discount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Full catalog grid */}
        <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredVegetables.map((vegetable, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-card hover:shadow-fresh transition-all duration-300 transform hover:scale-105 h-full flex flex-col cursor-pointer"
              onClick={() => handleVegetableClick(vegetable)}
            >
              <div className="aspect-square overflow-hidden bg-gradient-card relative">
                <img 
                  src={vegetable.imageUrl} 
                  alt={vegetable.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onLoad={(e) => {
                    // Hide placeholder when image loads successfully
                    const target = e.target as HTMLImageElement;
                    const placeholder = target.parentElement?.querySelector('.image-placeholder');
                    if (placeholder) {
                      placeholder.classList.add('hidden');
                    }
                  }}
                  onError={(e) => {
                    // Fallback to a better placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.parentElement?.querySelector('.image-placeholder');
                    if (placeholder) {
                      placeholder.classList.remove('hidden');
                    }
                  }}
                />
                {/* Loading placeholder */}
                <div className="image-placeholder absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-100 to-orange-100">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 bg-gradient-to-br from-fresh-green to-fresh-orange rounded-full flex items-center justify-center animate-pulse">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">Loading...</p>
                  </div>
                </div>
              </div>
              <div className="p-2 sm:p-3 md:p-4 flex-1 flex flex-col">
                <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-lg font-semibold text-foreground mb-1 sm:mb-2 line-clamp-2 min-h-[1.75rem] sm:min-h-[2rem] md:min-h-[2.5rem] lg:min-h-[2.75rem] leading-tight">
                  {vegetable.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3 line-clamp-1">
                  {formatQuantity(vegetable.quantity)}
                </p>
                <div className="flex items-center justify-between mb-2 sm:mb-3 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] sm:text-xs text-muted-foreground line-through">
                      MRP: {formatPrice(vegetable.marketPrice)}
                    </span>
                    <span className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-primary">
                      {formatPrice(vegetable.ourPrice)}
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-green-600 font-medium bg-green-50 px-1 py-0.5 rounded-full">
                    {Math.round(((vegetable.marketPrice - vegetable.ourPrice) / vegetable.marketPrice) * 100)}% OFF
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            All prices are inclusive of taxes. Free delivery on orders above ₹250.
          </p>
        </div>
      </div>

      {/* Order Dialog */}
      {showOrderDialog && selectedVegetable && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseDialog}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-fresh-green to-fresh-orange rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Order {selectedVegetable.name}
              </h3>
              <p className="text-gray-600">
                Would you like to proceed with your order?
              </p>
            </div>

            {/* Vegetable Details */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-green-100 to-orange-100">
                  <img 
                    src={selectedVegetable.imageUrl} 
                    alt={selectedVegetable.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{selectedVegetable.name}</h4>
                  <p className="text-sm text-gray-600">{formatQuantity(selectedVegetable.quantity)}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm text-gray-500 line-through">
                      MRP: {formatPrice(selectedVegetable.marketPrice)}
                    </span>
                    <span className="text-lg font-bold text-primary">
                      {formatPrice(selectedVegetable.ourPrice)}
                    </span>
                    <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                      {Math.round(((selectedVegetable.marketPrice - selectedVegetable.ourPrice) / selectedVegetable.marketPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={handleCloseDialog}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Close
              </button>
              <button
                onClick={handleOrderNow}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-fresh-green to-fresh-orange text-white rounded-xl font-bold hover:shadow-lg hover:shadow-fresh-green/30 transition-all duration-300 transform hover:scale-105"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VegetableCatalog; 