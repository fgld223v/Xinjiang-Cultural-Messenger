import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

const NewsletterSubscription = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error(t('common.invalidEmail'));
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      toast.success(t('newsletter.success'));
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#AA907E] via-[#675D50] to-[#ABC5AA] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('newsletter.title')}
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-[#F4DEBA] leading-relaxed">
            {t('newsletter.subtitle')}
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder={t('newsletter.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-stone-900 bg-white/95 placeholder:text-stone-500 focus:ring-2 focus:ring-[#F4DEBA] focus:border-transparent"
                disabled={isLoading}
              />
              <Button 
                type="submit"
                className="bg-[#F4DEBA] hover:bg-[#ABC5AA] text-[#675D50] px-8 py-3 rounded-lg font-semibold transition-colors duration-300 disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? t('common.loading') : t('newsletter.subscribe')}
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-[#F4DEBA]/80 mt-4">
            {t('newsletter.privacy')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
