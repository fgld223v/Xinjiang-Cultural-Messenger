import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import CultureSection from '@/components/CultureSection';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import { useTranslation } from 'react-i18next';

const carouselSlides = [
  {
    title: "Discover Authentic Xinjiang Treasures",
    description: "Journey through millennia of cultural heritage with our curated collection of handmade masterpieces from the Silk Road.",
    image: "https://image-cdn.tuchong.com/weili/image/l/1471646698374037505.jpeg",
  },
  {
    title: "Master Artisan Creations",
    description: "Each piece tells a story of dedication, tradition, and unparalleled craftsmanship passed down through generations.",
    image: "https://image-cdn.tuchong.com/weili/image/l/1110716158134845441.jpeg",
  },
  {
    title: "Cultural Heritage Gifts",
    description: "From exquisite silk embroidery to hand-carved ceramics, discover meaningful gifts that celebrate the rich tapestry of Xinjiang culture.",
    image: "https://image-cdn.tuchong.com/weili/image/l/1543957034014212096.jpeg",
  }
];

const products = [
  {
    id: 1,
    name: "Exquisite throw pillow",
    description: "Handcrafted embroidered throw pillow featuring traditional cultural motifs, adding elegance to your home decor",
    price: 39.99,
    image: "pictures/baozhen1.png",
    category: "Household goods"
  },
  {
    id: 2,
    name: "Ethnic costumes",
    description: "Authentic traditional ethnic clothing showcasing exquisite embroidery and cultural heritage designs",
    price: 139.99,
    image: "pictures/fushi1.png",
    category: "Performance and event supplies"
  },
  {
    id: 3,
    name: "Cloud Crane Hoodie",
    description: "Modern unisex hoodie featuring traditional 'Cloud & Wild Crane' embroidery motif, blending Chinese auspicious symbolism with contemporary streetwear",
    price: 129.99,
    image: "pictures/xiangyun.png",
    category: "Clothing series"
  },
  {
    id: 4,
    name: "Cloth bag",
    description: "Eco-friendly canvas bag adorned with beautiful ethnic embroidery patterns, both stylish and practical",
    price: 19.99,
    image: "pictures/budai.png",
    category: "Household goods"
  },
  {
    id: 5,
    name: "Folk custom badge",
    description: "Decorative pin featuring traditional folk art designs, perfect for accessorizing",
    price: 19.99,
    image: "pictures/cuju.png",
    category: "Handicrafts"
  },
  {
    id: 6,
    name: "Cultural and creative umbrella",
    description: "Artistic umbrella printed with cultural patterns, combining functionality with aesthetic appeal",
    price: 29.99,
    image: "pictures/yusan.png",
    category: "Accessories and daily necessities"
  },
  {
    id: 7,
    name: "Exquisite folding fan",
    description: "Elegant handcrafted folding fan featuring delicate embroidery and traditional designs",
    price: 19.99,
    image: "pictures/zheshan.png",
    category: "Handicrafts"
  },
  {
    id: 8,
    name: "Digital peripheral",
    description: "Stylish tech accessories incorporating traditional cultural elements and auspicious symbols",
    price: 29.99,
    image: "pictures/shoujike.png",
    category: "Digital peripheral"
  }
];

const Index = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4DEBA] via-[#ABC5AA]/30 to-[#AA907E]/20 relative">
      <Header />

      <section className="pt-16">
        <Carousel slides={carouselSlides} />
      </section>

      <CultureSection />

      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#675D50] text-center mb-12">
            {t('products.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-[#AA907E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#675D50] transition-colors text-lg"
              onClick={() => navigate('/products')}
            >
              {t('products.viewAll')}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#ABC5AA]/20 to-[#AA907E]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#675D50] text-center mb-12">
            Experience Living Heritage
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ts1.tc.mm.bing.net/th/id/R-C.9cd04b21a3168e5f9ecfa80d7793254d?rik=Y2DmfjdObt77SA&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fphotoblog%2f1809%2f24%2fc7%2f111103290_1537796107915.jpg&ehk=LkGWW4axzuerFPE7xmPc9WVnKAUYi8vg5ocS4tfxvjs%3d&risl=&pid=ImgRaw&r=0"
                alt="Cultural Heritage Center"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#675D50]">Visit Our Cultural Sanctuary</h3>
              <p className="text-[#675D50] text-lg leading-relaxed">
                Immerse yourself in the rich cultural heritage of Xinjiang at our cultural center.
                Experience live demonstrations by master artisans, participate in traditional craft workshops,
                and discover the stories behind each exquisite piece in our collection.
              </p>
              <div className="space-y-3">
                <p className="flex items-center text-[#675D50]">
                  <span className="text-[#AA907E] mr-2">✓</span>
                  Daily Artisan Demonstrations
                </p>
                <p className="flex items-center text-[#675D50]">
                  <span className="text-[#AA907E] mr-2">✓</span>
                  Hands-on Craft Workshops
                </p>
                <p className="flex items-center text-[#675D50]">
                  <span className="text-[#AA907E] mr-2">✓</span>
                  Cultural Storytelling Sessions
                </p>
              </div>
              <Button
                className="bg-[#AA907E] hover:bg-[#675D50] text-white"
                onClick={() => navigate('/culture')}
              >
                Plan Your Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
      <NewsletterSubscription />

      <Footer />
    </div>
  );
};

export default Index;
