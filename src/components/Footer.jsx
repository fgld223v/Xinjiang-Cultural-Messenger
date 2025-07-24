import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#675D50] text-[#F4DEBA] py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-2 md:mb-0">
            <p className="text-sm font-medium">{t('header.title')}</p>
            <p className="text-xs text-[#AA907E]">Preserving Heritage, Connecting Cultures</p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link to="/products" className="hover:text-[#AA907E] transition-colors">{t('nav.products')}</Link>
            <Link to="/culture" className="hover:text-[#AA907E] transition-colors">{t('nav.culture')}</Link>
            <Link to="/contact" className="hover:text-[#AA907E] transition-colors">{t('nav.contact')}</Link>
          </div>
          
          <div className="text-center md:text-right mt-2 md:mt-0">
            <p className="text-xs text-[#AA907E]">
              © 2024 {t('common.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
