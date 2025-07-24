import { ShoppingBag, Menu, Heart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const { getTotalItems } = useCart();
  const { getFavoritesCount } = useFavorites();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/products', label: t('nav.products') },
    { path: '/culture', label: t('nav.culture') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-[#F4DEBA]/95 backdrop-blur-md shadow-lg absolute top-0 left-0 right-0 z-50 border-b border-[#AA907E]/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-bold text-[#675D50]">{t('header.title')}</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'text-[#AA907E]' 
                    : 'text-[#675D50] hover:text-[#AA907E]'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#AA907E] transform scale-x-100 transition-transform duration-200" />
                )}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-1">
            <LanguageSwitcher />
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-[#675D50] hover:text-[#AA907E] transition-colors relative"
              onClick={() => navigate('/favorites')}
            >
              <Heart className="h-5 w-5" />
              {getFavoritesCount() > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-[#AA907E] text-white text-xs px-1.5 py-0.5 min-w-[18px] h-[18px] flex items-center justify-center">
                  {getFavoritesCount()}
                </Badge>
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-[#675D50] hover:text-[#AA907E] transition-colors relative"
              onClick={() => navigate('/cart')}
            >
              <ShoppingBag className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-[#AA907E] text-white text-xs px-1.5 py-0.5 min-w-[18px] h-[18px] flex items-center justify-center">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-[#675D50]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-2 border-t border-[#AA907E]/30">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.path) 
                    ? 'text-[#AA907E] bg-[#AA907E]/10' 
                    : 'text-[#675D50] hover:text-[#AA907E] hover:bg-[#F4DEBA]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
