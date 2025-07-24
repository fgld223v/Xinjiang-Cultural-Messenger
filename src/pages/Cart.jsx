import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';

const Cart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  // Calculate shipping fee based on total price
  const subtotal = getTotalPrice();
  const shippingFee = subtotal > 150 ? 0 : 10;
  const total = subtotal + shippingFee;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F4DEBA] via-[#ABC5AA]/30 to-[#AA907E]/20 flex flex-col">
        <Header />
        
        <div className="flex-1 container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="h-16 w-16 mx-auto text-[#AA907E] mb-4" />
            <h2 className="text-2xl font-bold text-[#675D50] mb-4">{t('cart.empty')}</h2>
            <p className="text-[#AA907E] mb-8">{t('cart.continueShopping')}</p>
            <Button 
              className="bg-[#AA907E] hover:bg-[#675D50]"
              onClick={() => navigate('/products')}
            >
              {t('cart.continueShopping')}
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
        <h1 className="text-3xl font-bold text-[#675D50] mb-8">{t('cart.title')}</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{t('cart.items')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#675D50]">{item.name}</h3>
                        <p className="text-sm text-[#AA907E]">${item.price}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={clearCart}
                    className="text-red-600 border-red-600 hover:bg-red-50"
                  >
                    {t('cart.clearCart')}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/products')}
                  >
                    {t('cart.continueShopping')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>{t('cart.orderSummary')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t('cart.subtotal')}</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('cart.shipping')}</span>
                    <span>${shippingFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold">
                      <span>{t('cart.total')}</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4 bg-[#AA907E] hover:bg-[#675D50]"
                  onClick={handleCheckout}
                >
                  {t('cart.checkout')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
