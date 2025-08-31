export interface Vegetable {
  name: string;
  quantity: string;
  marketPrice: number;
  ourPrice: number;
  imageUrl: string;
}

export const parseVegetableCSV = (csvContent: string): Vegetable[] => {
  const lines = csvContent.trim().split('\n');
  const headers = lines[0].split(',');
  
  // Find the correct column indices
  const nameIndex = headers.findIndex(h => h.includes("Name"));
  const quantityIndex = headers.findIndex(h => h.includes("Quantity"));
  const priceIndex = headers.findIndex(h => h.includes("Price") && !h.includes("Our"));
  const ourPriceIndex = headers.findIndex(h => h.includes("Our Price"));
  const imageIndex = headers.findIndex(h => h.includes("Images"));
  
  const vegetables: Vegetable[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const values = line.split(',');
    
    if (values.length >= 5) {
      // Convert GitHub blob URL to raw URL for images
      let imageUrl = values[imageIndex]?.trim() || '';
      if (imageUrl.includes('github.com') && imageUrl.includes('/blob/')) {
        imageUrl = imageUrl.replace('/blob/', '/raw/');
      }
      
      const vegetable: Vegetable = {
        name: values[nameIndex]?.trim() || '',
        quantity: values[quantityIndex]?.trim() || '',
        marketPrice: parseFloat(values[priceIndex]?.trim() || '0'),
        ourPrice: parseFloat(values[ourPriceIndex]?.trim() || '0'),
        imageUrl: imageUrl
      };
      
      // Only add if we have valid data
      if (vegetable.name && vegetable.ourPrice > 0) {
        vegetables.push(vegetable);
      }
    }
  }
  
  return vegetables;
}; 