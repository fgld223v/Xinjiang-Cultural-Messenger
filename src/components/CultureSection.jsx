import { useTranslation } from 'react-i18next';

const CultureSection = () => {
  const { t } = useTranslation();

  return (
    <section id="culture" className="py-20 bg-gradient-to-br from-[#F4DEBA] via-[#ABC5AA]/10 to-[#AA907E]/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#675D50] text-center mb-16">
          {t('culture.title')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center group">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <img 
                src="https://image-cdn.tuchong.com/weili/image/l/2081243870738382855.jpeg" 
                alt="Traditional Embroidery Art"
                className="w-full h-full rounded-full mx-auto object-cover border-4 border-[#AA907E]/30 group-hover:border-[#AA907E] transition-colors duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-[#AA907E]/0 group-hover:bg-[#AA907E]/20 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-2xl font-semibold text-[#675D50] mb-3">{t('culture.embroidery')}</h3>
            <p className="text-[#AA907E] leading-relaxed">
              {t('culture.embroideryDesc')}
            </p>
          </div>
          
          <div className="text-center group">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <img 
                src="https://image-cdn.tuchong.com/weili/image/l/1484440658607734784.jpeg" 
                alt="Vibrant Cultural Colors"
                className="w-full h-full rounded-full mx-auto object-cover border-4 border-[#AA907E]/30 group-hover:border-[#AA907E] transition-colors duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-[#AA907E]/0 group-hover:bg-[#AA907E]/20 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-2xl font-semibold text-[#675D50] mb-3">{t('culture.colors')}</h3>
            <p className="text-[#AA907E] leading-relaxed">
              {t('culture.colorsDesc')}
            </p>
          </div>
          
          <div className="text-center group">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <img 
                src="https://image-cdn.tuchong.com/weili/image/l/1271711924944764950.jpeg" 
                alt="Ancient Cultural Symbols"
                className="w-full h-full rounded-full mx-auto object-cover border-4 border-[#AA907E]/30 group-hover:border-[#AA907E] transition-colors duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-[#AA907E]/0 group-hover:bg-[#AA907E]/20 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-2xl font-semibold text-[#675D50] mb-3">{t('culture.symbols')}</h3>
            <p className="text-[#AA907E] leading-relaxed">
              {t('culture.symbolsDesc')}
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-[#AA907E]">
            Each piece in our collection represents a living connection to centuries of Xinjiang cultural heritage
          </p>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
