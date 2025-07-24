import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon about cultural products.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4DEBA] via-[#ABC5AA]/30 to-[#AA907E]/20">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#675D50] mb-8 text-center">{t('contact.title')}</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Cultural Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#AA907E]" />
                  <span>culture@xinjiang-messenger.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#AA907E]" />
                  <span>+86 123-4567-8900</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#AA907E]" />
                  <span>123 Cultural Street, Urumqi, Xinjiang</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-[#AA907E]" />
                  <span>Monday - Friday 9:00-18:00</span>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <img 
                src="https://www.ts.cn/xwzx/dzxw/202209/W020220901426112522502.jpeg" 
                alt="Traditional Cultural Market"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Message About Cultural Products</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.fullName')}</label>
                    <Input type="text" placeholder="Please enter your name" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="Please enter your email address" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input type="tel" placeholder="Please enter your phone number" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.message')}</label>
                    <Textarea 
                      placeholder="Tell us about your interest in cultural products or any questions" 
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#AA907E] hover:bg-[#675D50]">
                    {t('contact.sendMessage')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
