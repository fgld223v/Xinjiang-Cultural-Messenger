import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Globe, 
  Palette, 
  Scissors, 
  Mountain, 
  Users, 
  Clock, 
  Award, 
  BookOpen,
  Heart,
  Star,
  MapPin,
  Calendar
} from 'lucide-react';

const Culture = () => {
  const culturalHighlights = [
    {
      title: "Silk Road Heritage",
      description: "Experience the ancient trade route that connected East and West, bringing together diverse cultures, traditions, and artistic expressions.",
      image: "https://ts1.tc.mm.bing.net/th/id/R-C.067158fdc4b3daed3c1cd3d3b951f35b?rik=Qme15QPfj816rg&riu=http%3a%2f%2fpic.616pic.com%2fbg_w1180%2f00%2f05%2f25%2fOkAwz8c2Ba.jpg!%2ffw%2f1120&ehk=rkz9x%2fDc3VDJ1iGjE4UPHupTNkHm%2fpgZt%2fgFhd9eLYQ%3d&risl=&pid=ImgRaw&r=0",
      icon: <Globe className="h-8 w-8 text-[#AA907E]" />
    },
    {
      title: "Traditional Craftsmanship",
      description: "Discover ancient techniques passed down through generations, from intricate embroidery to masterful pottery and textile weaving.",
      image: "https://img95.699pic.com/photo/50125/9784.jpg_wh860.jpg",
      icon: <Scissors className="h-8 w-8 text-[#AA907E]" />
    },
    {
      title: "Vibrant Colors",
      description: "Immerse yourself in the rich color palettes drawn from Xinjiang's magnificent landscapes - from golden deserts to turquoise mountain lakes.",
      image: "https://www.ts.cn/dzzz/xjhb/202208/W020220808462593919909.jpeg",
      icon: <Palette className="h-8 w-8 text-[#AA907E]" />
    },
    {
      title: "Mountain Culture",
      description: "Explore the unique traditions shaped by the majestic Tianshan Mountains, where nomadic heritage meets settled agricultural communities.",
      image: "https://ts1.tc.mm.bing.net/th/id/R-C.be7ef29f9b4fd4faa2b12f1ece8c01a9?rik=2Vfgv7e9ZxulGg&riu=http%3a%2f%2fimg.ts.cn%2f003%2f519%2f869%2f00351986947_83419e02.jpg&ehk=D3EvHlC6ualAhXJIp1dJwqlu2Pek1L%2bzJRpwLsj0L0U%3d&risl=&pid=ImgRaw&r=0",
      icon: <Mountain className="h-8 w-8 text-[#AA907E]" />
    }
  ];

  const culturalSymbols = [
    {
      symbol: "Pomegranate",
      meaning: "Symbol of prosperity, fertility, and abundance in Xinjiang culture",
      image: "https://img.alicdn.com/bao/uploaded/i1/2210427028899/O1CN01sZZyqd2FbnIEys8o4_!!2210427028899.jpg"
    },
    {
      symbol: "Eternal Knot",
      meaning: "Represents the interconnectedness of all things and the endless cycle of life",
      image: "https://image-cdn.tuchong.com/weili/image/l/1930644793845219351.jpeg"
    },
    {
      symbol: "Mountain Patterns",
      meaning: "Reflects the majestic Tianshan Mountains and spiritual connection to nature",
      image: "https://image-cdn.tuchong.com/weili/image/l/1395522543380201491.jpeg"
    },
    {
      symbol: "Floral Motifs",
      meaning: "Apricot blossoms and tulips symbolize purity, beauty, and the arrival of spring",
      image: "https://image-cdn.tuchong.com/weili/image/l/1418506485410824228.jpeg"
    }
  ];

  const festivals = [
    {
      name: "Nowruz Celebration",
      date: "March 21",
      description: "Persian New Year marking the beginning of spring, with traditional music, dance, and elaborate feasts.",
      image: "https://ts1.tc.mm.bing.net/th/id/R-C.bb17352292fb015dba4dd763827fdb7f?rik=nDl5b4AgYvp42w&riu=http%3a%2f%2fp5.qhmsg.com%2ft01167306bb158d7d54.jpg&ehk=vJzfUP%2bT85j06CSq9Jr6UDWe4jLbO1LrS3fAq0tHW3U%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      name: "Silk Road Festival",
      date: "September",
      description: "Month-long celebration of cultural exchange with craft demonstrations, traditional performances, and international cuisine.",
      image: "https://x0.ifengimg.com/ucms/2023_44/1DE2EAC835DDD1D19668B210964A578D934CE894_size246_w1600_h977.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4DEBA] via-[#ABC5AA]/30 to-[#AA907E]/20">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#675D50] via-[#AA907E] to-[#ABC5AA] text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://image-cdn.tuchong.com/weili/image/l/1251164131376889870.jpeg" 
            alt="Silk Road Cultural Landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover the Soul of Xinjiang
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A journey through millennia of cultural heritage where ancient traditions meet contemporary artistry
          </p>
        </div>
      </section>

      {/* Cultural Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#675D50] text-center mb-12">
            Cultural Heritage Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturalHighlights.map((highlight, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {highlight.icon}
                    <h3 className="text-xl font-semibold text-[#675D50] ml-3">{highlight.title}</h3>
                  </div>
                  <p className="text-[#AA907E]">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Symbols */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#675D50] text-center mb-12">
            Symbolic Language of Xinjiang
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalSymbols.map((symbol, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={symbol.image} 
                      alt={symbol.symbol}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#675D50] mb-2">{symbol.symbol}</h3>
                  <p className="text-sm text-[#AA907E]">{symbol.meaning}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Cultural Timeline */}
      <section className="py-16 bg-[#ABC5AA]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#675D50] text-center mb-12">
            Journey Through Time
          </h2>
          <Tabs defaultValue="ancient" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="ancient">Ancient</TabsTrigger>
              <TabsTrigger value="silk-road">Silk Road Era</TabsTrigger>
              <TabsTrigger value="modern">Modern</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ancient" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    2000 BCE - 200 CE
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#675D50] mb-4">
                    Early nomadic cultures laid the foundation for Xinjiang artistic traditions. Petroglyphs and early textile patterns emerged, influenced by the harsh yet beautiful landscape.
                  </p>
                  <img 
                    src="https://www.ts.cn/xwzx/shxw/202211/W020221110388532758516.jpeg"
                    alt="Ancient Xinjiang Art"
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="silk-road" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    200 CE - 1500 CE
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#675D50] mb-4">
                    The golden age of the Silk Road brought unprecedented cultural exchange. Chinese silk techniques merged with Persian designs, creating unique Xinjiang artistic styles that influenced global aesthetics.
                  </p>
                  <img 
                    src="https://img1.qunarzz.com/travel/d4/1504/d0/c34735e1d221f9.jpg_r_1360x1360x95_143d6306.jpg"
                    alt="Silk Road Cultural Exchange"
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="modern" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    1500 CE - Present
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#675D50] mb-4">
                    Modern artisans preserve ancient techniques while adapting to contemporary tastes. Today's cultural products represent living traditions that continue to evolve and inspire.
                  </p>
                  <img 
                    src="https://img95.699pic.com/photo/50125/9793.jpg_wh300.jpg!/fh/300/quality/90"
                    alt="Modern Cultural Craftsmanship"
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Cultural Festivals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#675D50] text-center mb-12">
            Cultural Celebrations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {festivals.map((festival, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src={festival.image} 
                    alt={festival.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#675D50] mb-2">{festival.name}</h3>
                  <p className="text-[#AA907E] font-semibold mb-3">{festival.date}</p>
                  <p className="text-[#675D50]">{festival.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Culture;
