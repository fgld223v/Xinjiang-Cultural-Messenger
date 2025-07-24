import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

// 完整的产品数据
const products = [
  {
    id: 1,
    name: "Exquisite throw pillow",
    description: "Luxury silk pillow with authentic Uyghur embroidery, handcrafted by Kashgar artisans",
    details: "Each pillow features unique geometric patterns symbolizing prosperity, crafted using centuries-old embroidery techniques. The reversible design offers two stunning looks.",
    material: "100% Pure silk exterior, hypoallergenic cotton filling",
    origin: "Kashgar, Xinjiang",
    care: "Professional dry clean recommended, avoid ironing directly on embroidery",
    dimensions: "45cm x 45cm (18\" x 18\")",
    weight: "320g",
    price: 39.99,
    image: "pictures/baozhen1.png",
    images: [
      "pictures/baozhen1.png",
      "pictures/baozhen2.png",
      "pictures/baozhen3.png",
      "pictures/baozhen4.png"
    ],
    category: "Household goods",
    inStock: true,
    rating: 4.8,
    reviews: 127
  },
  {
    id: 2,
    name: "Ethnic costumes",
    description: "Complete traditional Uyghur dance ensemble with metallic thread embroidery",
    details: "Performance set includes tunic, pants, and sash, featuring intricate Kashgar-style patterns that shimmer under stage lights. Designed for freedom of movement while maintaining cultural authenticity.",
    material: "Breathable cotton-linen blend, 24k gold-plated embroidery threads",
    origin: "Urumqi, Xinjiang",
    care: "Hand wash in cold water with mild detergent, lay flat to dry",
    dimensions: "Custom sizing available (standard lengths 120-140cm)",
    weight: "950g",
    price: 139.99,
    image: "pictures/fushi1.png",
    images: [
      "pictures/fushi1.png",
      "pictures/fushi2.png",
      "pictures/fushi3.png",
      "pictures/fushi4.png",
      "pictures/fushi5.png",
      "pictures/fushi6.png"
    ],
    category: "Performance and event supplies",
    inStock: true,
    rating: 4.6,
    reviews: 89
  }, {
    id: 3,
    name: "Cloud Crane Hoodie",
    description: "Modern unisex hoodie featuring traditional 'Cloud & Wild Crane' embroidery motif",
    details: "This premium hoodie showcases intricate embroidery of cloud and crane patterns, symbolizing longevity and good fortune in Chinese culture. The design combines Kazakh wool felt appliqué techniques with urban fashion aesthetics.",
    material: "80% Cotton, 20% Polyester with wool embroidery",
    origin: "Ili, Xinjiang",
    care: "Machine wash cold inside-out, line dry in shade",
    dimensions: "S, M, L, XL",
    weight: "550g",
    price: 129.99,
    image: "pictures/xiangyun.png",
    images: [
      "pictures/xiangyun.png",
    ],
    category: "Clothing series",
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: "Cloth bag",
    description: "Sturdy market tote with detachable embroidered panels",
    details: "Features interchangeable Hotan-style embroidery inserts that can be mixed/matched. Reinforced handles support up to 15kg while showcasing traditional floral motifs.",
    material: "Heavyweight organic canvas, removable silk embroidery panels",
    origin: "Turpan, Xinjiang",
    care: "Spot clean embroidery, machine wash canvas body at 30°C",
    dimensions: "40cm x 38cm x 15cm (16\" x 15\" x 6\")",
    weight: "380g",
    price: 19.99,
    image: "pictures/budai.png",
    images: [
      "pictures/budai.png",
      "pictures/budai2.png",
      "pictures/budai3.png"
    ],
    category: "Household goods",
    inStock: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: 5,
    name: "Folk custom badge",
    description: "Enamel pin collection featuring Xinjiang's twelve mukams motifs",
    details: "Set of six pins representing musical instruments from Uyghur classical repertoire. Each piece is individually hand-filled with vibrant enamel colors.",
    material: "Nickel-free brass base, lead-free enamel",
    origin: "Kashgar, Xinjiang",
    care: "Polish gently with microfiber cloth, avoid chemicals",
    dimensions: "4cm diameter each with secure butterfly clutch",
    weight: "25g per pin",
    price: 19.99,
    image: "pictures/cuju.png",
    images: [
      "pictures/cuju.png",
      "pictures/datuoluo.png",
      "pictures/duzhupiao.png",
      "pictures/kongzhu.png",
      "pictures/lunziqiu.png",
      "pictures/tiaoban.png"
    ],
    category: "Handicrafts",
    inStock: true,
    rating: 4.5,
    reviews: 312
  },
  {
    id: 6,
    name: "Cultural and creative umbrella",
    description: "Automatic open/close umbrella with Dunhuang fresco reproductions",
    details: "Waterproof canopy features high-resolution prints of Mogao Cave murals. Fiberglass ribs withstand strong winds while showcasing celestial musicians and lotus motifs.",
    material: "190T pongee canopy, fiberglass frame with rubberized handle",
    origin: "Hotan, Xinjiang",
    care: "Air dry fully before storing, avoid saltwater exposure",
    dimensions: "Arc diameter: 105cm (41\"), closed length: 32cm (13\")",
    weight: "450g",
    price: 29.99,
    image: "pictures/yusan.png",
    images: [
      "pictures/yusan.png",
      "pictures/yusan2.png",
      "pictures/yusan3.png"
    ],
    category: "Accessories and daily necessities",
    inStock: true,
    rating: 4.6,
    reviews: 178
  },
  {
    id: 7,
    name: "Exquisite folding fan",
    description: "Hand-painted silk fan with scenes from the Taklamakan Desert",
    details: "Features mineral pigment paintings of desert oases and caravan scenes on premium habotai silk. Sandalwood frame releases subtle fragrance when used.",
    material: "Grade 6A mulberry silk, aged sandalwood ribs",
    origin: "Kashgar, Xinjiang",
    care: "Store in provided silk pouch, avoid humidity extremes",
    dimensions: "Open span: 30cm (12\"), 16 ribs for optimal airflow",
    weight: "160g",
    price: 19.99,
    image: "pictures/zheshan.png",
    images: [
      "pictures/zheshan.png",
      "pictures/zheshan2.png",
      "pictures/zheshan3.png",
      "pictures/zheshan4.png"
    ],
    category: "Handicrafts",
    inStock: true,
    rating: 4.8,
    reviews: 94
  },
  {
    id: 8,
    name: "Digital peripheral",
    description: "MagSafe-compatible phone case with Kirgiz eagle hunter designs",
    details: "Ultra-thin case features laser-etched nomadic patterns that won't fade. Raised edges protect camera/screen while maintaining wireless charging capability.",
    material: "Shock-absorbent TPU with scratch-resistant coating",
    origin: "Yining, Xinjiang",
    care: "Clean with alcohol wipes, avoid petroleum cleaners",
    dimensions: "Precise cutouts for all ports/buttons (iPhone models)",
    weight: "55g",
    price: 29.99,
    image: "pictures/shoujike.png",
    images: [
      "pictures/shoujike.png",
      "pictures/zhijia.png"
    ],
    category: "Digital peripheral",
    inStock: true,
    rating: 4.7,
    reviews: 267
  },
  {
    id: 9,
    name: "Creative stickers",
    description: "Removable vinyl decals with Xinjiang ikat patterns",
    details: "Set includes 12 durable stickers reproducing traditional textile designs. UV-resistant ink prevents fading, suitable for indoor/outdoor use on smooth surfaces.",
    material: "Oracal 651 vinyl with matte laminate finish",
    origin: "Khotan, Xinjiang",
    care: "Apply to clean, dry surfaces; remove slowly at 45° angle",
    dimensions: "Varied sizes from 5x5cm to 10x15cm",
    weight: "15g per sheet",
    price: 4.99,
    image: "pictures/jiaodai2.png",
    images: [
      "pictures/jiaodai2.png",
      "pictures/jiaodai.png",
      "pictures/tiezhi.png"
    ],
    category: "Handicrafts",
    inStock: true,
    rating: 4.9,
    reviews: 45
  },
  {
    id: 10,
    name: "Whimsical hat",
    description: "Felted wool beanie with playful Kirgiz-inspired animal ears",
    details: "Hand-felted using traditional techniques with embroidered details. Foldable ear flaps provide extra warmth in winter conditions.",
    material: "100% Mongolian wool felt, silk embroidery threads",
    origin: "Altay, Xinjiang",
    care: "Spot clean only, reshape while damp if needed",
    dimensions: "One-size stretch fit (54-58cm head circumference)",
    weight: "120g",
    price: 29.99,
    image: "pictures/xiaoguaimao.png",
    images: [
      "pictures/xiaoguaimao.png"
    ],
    category: "Creative stationery",
    inStock: true,
    rating: 4.8,
    reviews: 198
  },
  {
    id: 11,
    name: "Color palette plate",
    description: "Dinnerware set inspired by mineral pigments of Tian Shan mountains",
    details: "Food-safe glazes reproduce natural hues found in Xinjiang's landscapes. Microwave/dishwasher safe with non-porous ceramic construction.",
    material: "High-fired porcelain with cobalt-free glazes",
    origin: "Urumqi, Xinjiang",
    care: "Dishwasher safe up to 80°C, microwave safe",
    dimensions: "Dinner plate: 26cm, salad plate: 20cm, bowl: 15cm diameter",
    weight: "1.8kg for 16-piece set",
    price: 24.99,
    image: "pictures/caipan.png",
    images: [
      "pictures/caipan.png"
    ],
    category: "Creative stationery",
    inStock: true,
    rating: 4.6,
    reviews: 234
  },
  {
    id: 12,
    name: "Silk Road Notebook",
    description: "Handbound notebook with embroidered silk cover featuring traditional Uyghur motifs",
    details: "Features lokta paper pages and traditional suzani-inspired embroidery on cover. Ribbon bookmark and back pocket for keepsakes.",
    material: "Nepalese lokta paper, silk cover with cotton backing",
    origin: "Kashgar, Xinjiang",
    care: "Keep away from moisture, store flat when not in use",
    dimensions: "A5 size (14.8x21cm), 192 pages (96 sheets)",
    weight: "280g",
    price: 19.99,
    image: "pictures/bijiben.png",
    images: [
      "pictures/bijiben.png",
      "pictures/bijiben2.png",
      "pictures/bijiben3.png",
      "pictures/bijiben4.png"
    ],
    category: "Creative stationery",
    inStock: true,
    rating: 4.7,
    reviews: 67
  },
  {
    id: 13,
    name: "Shadow Play Hoodie",
    description: "Cultural hoodie inspired by Chinese shadow puppetry art",
    details: "Features dynamic character silhouettes from traditional folklore with embroidered warrior figures and mythological creatures. The asymmetrical layout mimics traditional puppet stage compositions.",
    material: "85% Organic cotton, 15% Spandex with metallic thread embroidery",
    origin: "Kashgar, Xinjiang",
    care: "Hand wash recommended, lay flat to dry",
    dimensions: "S, M, L, XL",
    weight: "600g",
    price: 134.99,
    image: "pictures/piyingxi.png",
    images: [
      "pictures/piyingxi.png"
    ],
    category: "Clothing series",
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 14,
    name: "Zodiac Collection Hoodie",
    description: "Hoodie featuring Chinese zodiac animals with contemporary styling",
    details: "Each design combines the animal's traditional symbolic meaning with modern graphic elements. The embroidery uses techniques from Suzhou silk thread work for dimensional effects.",
    material: "Brushed cotton with silk-thread embroidery",
    origin: "Urumqi, Xinjiang",
    care: "Dry clean recommended for embroidery preservation",
    dimensions: "S, M, L, XL",
    weight: "580g",
    price: 144.99,
    image: "pictures/shengxiao.png",
    images: [
      "pictures/shengxiao.png",
      "pictures/shengxiao1.png",
    ],
    category: "Clothing series",
    inStock: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 15,
    name: "Campus Culture Hoodie",
    description: "University-themed hoodie with Uyghur floral embroidery",
    details: "Merges institutional colors with Central Asian floral motifs, representing cultural exchange. Features contrast stitching along the hood and cuffs for visual interest.",
    material: "Organic cotton with rayon embroidery thread",
    origin: "Khotan, Xinjiang",
    care: "Gentle cycle wash, avoid bleach",
    dimensions: "S, M, L, XL",
    weight: "620g",
    price: 139.99,
    image: "pictures/yuanfu.png",
    images: [
      "pictures/yuanfu.png",
      "pictures/jinianfu.png",
      "pictures/weiyi.png"
    ],
    category: "Clothing series",
    inStock: true,
    rating: 4.5,
    reviews: 112
  },
  {
    id: 16,
    name: "Silk Road Bookmark Set",
    description: "Handmade bookmarks featuring Silk Road cultural elements",
    details: "Set of 5 bookmarks with embroidered designs representing key Silk Road landmarks. Each bookmark has a tassel made from Xinjiang silk threads.",
    material: "Silk embroidery on linen base",
    origin: "Hotan, Xinjiang",
    care: "Spot clean only",
    dimensions: "5cm x 15cm",
    weight: "30g/set",
    price: 14.99,
    image: "pictures/shuqian.png",
    images: [
      "pictures/shuqian.png"
    ],
    category: "Stationery series",
    inStock: true,
    rating: 4.6,
    reviews: 167
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F4DEBA] via-[#ABC5AA]/30 to-[#AA907E]/20 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#675D50] mb-4">产品未找到</h2>
            <Button onClick={() => navigate('/products')}>
              返回产品列表
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4DEBA] via-[#ABC5AA]/30 to-[#AA907E]/20 flex flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t('productDetail.back')}
        </Button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 图片展示区域 */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden relative" style={{ width: '100%', height: '24rem' }}>
              <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={4}
                wheel={{ step: 0.1 }}
                doubleClick={{ disabled: true }}
                panning={{ velocityDisabled: false }}
              >
                {({ zoomIn, zoomOut, resetTransform }) => (
                  <>
                    <TransformComponent wrapperStyle={{ width: '100%', height: '24rem' }}>
                      <img
                        src={product.images[selectedImage]}
                        alt={product.name}
                        className="w-full h-96 object-cover select-none"
                        draggable={false}
                        style={{ pointerEvents: 'none', userSelect: 'none' }}
                      />
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
            </div>

            {/* 缩略图 */}
            <div className="flex space-x-2 mt-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index ? 'border-[#AA907E]' : 'border-gray-200'
                    }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* 产品信息区域 */}
          <div>
            <h1 className="text-3xl font-bold text-[#675D50] mb-4">{product.name}</h1>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-lg ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                ))}
              </div>
              <span className="ml-2 text-[#AA907E]">{product.rating} ({product.reviews} 评价)</span>
            </div>

            <p className="text-3xl font-bold text-[#AA907E] mb-4">${product.price}</p>

            <p className="text-[#675D50] mb-6 leading-relaxed">{product.description}</p>

            <div className="flex space-x-4 mb-6">
              <Button
                size="lg"
                className="bg-[#AA907E] hover:bg-[#675D50] flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {t('productDetail.addToCart')}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className={`border-[#AA907E] ${isFavorite(product.id) ? 'bg-[#AA907E]/10 text-[#AA907E]' : 'text-[#AA907E]'} hover:bg-[#AA907E] hover:text-white transition-colors`}
                onClick={handleToggleFavorite}
              >
                <Heart className={`h-5 w-5 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
              </Button>
            </div>

            {/* 产品详情卡片 */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-[#675D50] mb-2">{t('productDetail.details')}</h3>
                  <p className="text-[#675D50]">{product.details}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-[#675D50]">{t('productDetail.material')}</h4>
                    <p className="text-[#AA907E]">{product.material}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#675D50]">{t('productDetail.origin')}</h4>
                    <p className="text-[#AA907E]">{product.origin}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#675D50]">尺寸</h4>
                    <p className="text-[#AA907E]">{product.dimensions}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#675D50]">重量</h4>
                    <p className="text-[#AA907E]">{product.weight}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[#675D50]">{t('productDetail.care')}</h4>
                  <p className="text-[#AA907E]">{product.care}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${product.inStock
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                    }`}>
                    {product.inStock ? '有货' : '缺货'}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 相关产品推荐 */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#675D50] mb-6">相关产品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-[#675D50] mb-2">{relatedProduct.name}</h3>
                    <p className="text-[#AA907E] font-bold">${relatedProduct.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;

