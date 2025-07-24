import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} ${t('products.addToCart')}`);
  };

  const handleToggleFavorite = () => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
      toast.success(`${product.name} ${t('products.removeFromFavorites')}`);
    } else {
      addToFavorites(product);
      toast.success(`${product.name} ${t('products.addToFavorites')}`);
    }
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#AA907E]/20">
      <div 
        className="aspect-square cursor-pointer group"
        onClick={handleProductClick}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 
          className="text-lg font-semibold text-[#675D50] mb-2 cursor-pointer hover:text-[#AA907E] transition-colors"
          onClick={handleProductClick}
        >
          {product.name}
        </h3>
        <p className="text-sm text-[#AA907E] mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#AA907E]">${product.price}</span>
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              variant="outline" 
              className={`border-[#AA907E] ${isFavorite(product.id) ? 'bg-[#AA907E]/10 text-[#AA907E]' : 'text-[#AA907E]'} hover:bg-[#AA907E] hover:text-white transition-colors`}
              onClick={handleToggleFavorite}
            >
              <Heart className={`h-4 w-4 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
            </Button>
            <Button 
              size="sm" 
              className="bg-[#ABC5AA] hover:bg-[#675D50] text-white transition-colors"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              {t('products.addToCart')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
