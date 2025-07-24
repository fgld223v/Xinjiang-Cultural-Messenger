import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTranslation } from 'react-i18next';

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
    description: "Modern unisex hoodie featuring traditional 'Cloud & Wild Crane' embroidery motif",
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
  },
  {
    id: 9,
    name: "Creative stickers",
    description: "Decorative stickers featuring vibrant cultural patterns and artistic designs",
    price: 4.99,
    image: "pictures/jiaodai2.png",
    category: "Handicrafts"
  },
  {
    id: 10,
    name: "Whimsical hat",
    description: "Playfully designed winter hat with unique cultural embroidery accents",
    price: 29.99,
    image: "pictures/xiaoguaimao.png",
    category: "Creative stationery"
  },
  {
    id: 11,
    name: "Color palette plate",
    description: "Artistic tableware inspired by traditional color schemes, enhancing dining aesthetics",
    price: 24.99,
    image: "pictures/caipan.png",
    category: "Creative stationery"
  },
  {
    id: 12,
    name: "Silk Road Notebook",
    description: "Handbound notebook with embroidered silk cover featuring traditional Uyghur motifs",
    image: "pictures/bijiben.png",
    category: "Creative stationery"
  },
  {
    id: 13,
    name: "Shadow Play Hoodie",
    description: "Cultural hoodie inspired by Chinese shadow puppetry art",
    price: 134.99,
    image: "pictures/piyingxi.png",
    category: "Clothing series"
  },
  {
    id: 14,
    name: "Zodiac Collection Hoodie",
    description: "Hoodie featuring Chinese zodiac animals with contemporary styling",
    price: 144.99,
    image: "pictures/shengxiao.png",
    category: "Clothing series"
  },
  {
    id: 15,
    name: "Campus Culture Hoodie",
    description: "University-themed hoodie with Uyghur floral embroidery",
    price: 139.99,
    image: "pictures/yuanfu.png",
    category: "Clothing series"
  },
  {
    id: 16,
    name: "Silk Road Bookmark Set",
    description: "Handmade bookmarks featuring Silk Road cultural elements",
    price: 14.99,
    image: "pictures/shuqian.png",
    category: "Stationery series"
  }
];

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'Clothing series', label: 'Clothing series' },//服饰系列
  { value: 'Household goods', label: 'Household goods' },//家居用品
  { value: 'Accessories and daily necessities', label: 'Accessories and daily necessities' },// 配饰与日用
  { value: 'Stationery series', label: 'Stationery series' },//文具系列
  { value: 'Creative stationery', label: 'Creative stationery' },//创意文具
  { value: 'Digital peripheral', label: 'Digital peripheral' },//数码周边
  { value: 'Handicrafts', label: 'Handicrafts' },//手工艺品
  { value: 'Performance and event supplies', label: 'Performance and event supplies' },//演出与活动用品
];

const Products = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'all';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const params = new URLSearchParams(location.search);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    navigate({ search: params.toString() });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(location.search);
    if (category !== 'all') {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    navigate({ search: params.toString() });
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4DEBA] via-[#ABC5AA]/30 to-[#AA907E]/20">
      <Header onSearch={handleSearch} />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#675D50] mb-8 text-center">{t('nav.products')}</h1>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full md:w-64">
              <SearchBar onSearch={handleSearch} placeholder={t('products.searchPlaceholder')} />
            </div>
            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t('products.category')} />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t('products.sortBy')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">{t('products.sortName')}</SelectItem>
                <SelectItem value="price-low">{t('products.sortPriceLow')}</SelectItem>
                <SelectItem value="price-high">{t('products.sortPriceHigh')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="text-sm text-[#AA907E]">
            {t('common.found')} {filteredProducts.length} {t('common.products')}
            {searchTerm && `, ${t('common.search')}: "${searchTerm}"`}
            {selectedCategory !== 'all' && `, ${t('common.category')}: ${categories.find(c => c.value === selectedCategory)?.label}`}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#AA907E] text-lg">{t('products.noProducts')}</p>
            <Button
              className="mt-4 bg-[#AA907E] hover:bg-[#675D50]"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                navigate('/products');
              }}
            >
              {t('products.clearFilters')}
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
