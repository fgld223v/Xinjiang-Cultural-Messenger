import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Favorites = () => {
  const navigate = useNavigate();
  const { items: favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F4DEBA] via-[#ABC5AA]/30 to-[#AA907E]/20 flex flex-col">
        <Header />
        <div className="flex-1 container mx-auto px-4 py-16">
          <div className="text-center">
            <Heart className="h-16 w-16 mx-auto text-[#AA907E] mb-4" />
            <h2 className="text-2xl font-bold text-[#675D50] mb-4">No Favorites Yet</h2>
            <p className="text-[#AA907E] mb-8">Start adding your favorite items to your collection!</p>
            <Button 
              className="bg-[#AA907E] hover:bg-[#675D50]"
              onClick={() => navigate('/products')}
            >
              Browse Products
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4DEBA] via-[#ABC5AA]/30 to-[#AA907E]/20 flex flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-8 mb-8">
        <h1 className="text-3xl font-bold text-[#675D50] mb-8">My Favorites</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {favorites.map(product => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-[#675D50] mb-2">{product.name}</h3>
                <p className="text-sm text-[#AA907E] mb-3">{product.description}</p>
                <p className="text-xl font-bold text-[#AA907E] mb-4">${product.price}</p>
                
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-[#AA907E] hover:bg-[#675D50]"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-red-500 text-red-500 hover:bg-red-50"
                    onClick={() => removeFromFavorites(product.id)}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Favorites;
