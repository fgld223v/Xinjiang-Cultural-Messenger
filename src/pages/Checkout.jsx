import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, CreditCard, Truck, Package } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';

const Checkout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  // Calculate shipping fee based on total price
  const subtotal = getTotalPrice();
  const shippingFee = subtotal > 150 ? 0 : 10;
  const totalAmount = subtotal + shippingFee;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Order submitted successfully! Thank you for your purchase.');
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F4DEBA] via-[#ABC5AA]/30 to-[#AA907E]/20">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Package className="h-16 w-16 mx-auto text-[#AA907E] mb-4" />
            <h2 className="text-2xl font-bold text-[#675D50] mb-4">Your cart is empty</h2>
            <p className="text-[#AA907E] mb-8">Add some beautiful items to your cart first!</p>
            <Button 
              className="bg-[#AA907E] hover:bg-[#675D50]"
              onClick={() => navigate('/products')}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4DEBA] via-[#ABC5AA]/30 to-[#AA907E]/20">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-4"
          onClick={() => navigate('/cart')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cart
        </Button>
        
        <h1 className="text-3xl font-bold text-[#675D50] mb-8">Checkout</h1>
        
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>First Name</Label>
                    <Input 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label>Last Name</Label>
                    <Input 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <Label>Email</Label>
                  <Input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div>
                  <Label>Phone</Label>
                    <Input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required 
                    />
                </div>
                
                <div>
                  <Label>Address</Label>
                  <Input 
                    name="address" 
                    value={formData.address}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label>City</Label>
                    <Input 
                      name="city" 
                      value={formData.city}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label>State</Label>
                    <Input 
                      name="state" 
                      value={formData.state}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label>ZIP Code</Label>
                    <Input 
                      name="zipCode" 
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Credit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                </RadioGroup>
                
                {paymentMethod === 'credit-card' && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label>Card Number</Label>
                      <Input 
                        name="cardNumber" 
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Expiry Date</Label>
                        <Input 
                          name="expiryDate" 
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      <div>
                        <Label>CVV</Label>
                        <Input 
                          name="cvv" 
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Cardholder Name</Label>
                      <Input 
                        name="cardholderName" 
                        value={formData.cardholderName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="flex space-x-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-[#AA907E]">Qty: {item.quantity}</p>
                        <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t mt-4 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shippingFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <Button type="submit" className="w-full mt-4 bg-[#AA907E] hover:bg-[#675D50]">
                  Place Order
                </Button>
              </CardContent>
            </Card>
            
            <div className="mt-4 p-4 bg-[#ABC5AA]/30 rounded-lg">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-[#AA907E]" />
                <span className="text-sm text-[#675D50]">Free shipping on orders over $150</span>
              </div>
            </div>
          </div>
        </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
