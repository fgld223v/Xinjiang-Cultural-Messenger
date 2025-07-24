import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        products: 'Products',
        culture: 'Culture',
        contact: 'Contact Us',
        cart: 'Cart',
        favorites: 'Favorites'
      },
      header: {
        title: 'Xinjiang Cultural Messenger',
        cart: 'Cart',
        favorites: 'Favorites'
      },
      hero: {
        title: 'Discover Authentic Xinjiang Cultural Products',
        subtitle: 'Bring centuries of tradition and cultural heritage into your modern life through our curated collection of handmade cultural treasures.',
        button: 'Explore Cultural Collection'
      },
      culture: {
        title: 'Xinjiang Cultural Heritage',
        embroidery: 'Exquisite Embroidery',
        embroideryDesc: 'Experience the ancient needlework traditions passed down through generations, where every stitch carries the wisdom of centuries.',
        colors: 'Vibrant Colors',
        colorsDesc: 'Discover the color palettes drawn from Xinjiang\'s magnificent landscapes - from golden deserts to turquoise mountain lakes.',
        symbols: 'Sacred Symbols',
        symbolsDesc: 'Uncover the profound meanings behind ancient patterns - from protective symbols to representations of universal harmony.'
      },
      products: {
        title: 'Featured Cultural Collection',
        viewAll: 'Discover Full Collection',
        addToCart: 'Add to Cart',
        addToFavorites: 'Add to Favorites',
        removeFromFavorites: 'Remove from Favorites',
        price: 'Price',
        category: 'Category',
        searchPlaceholder: 'Search cultural products...',
        sortBy: 'Sort by',
        sortName: 'Name',
        sortPriceLow: 'Price: Low to High',
        sortPriceHigh: 'Price: High to Low',
        noProducts: 'No matching products found',
        clearFilters: 'Clear Filters'
      },
      productDetail: {
        details: 'Product Details',
        material: 'Material',
        origin: 'Origin',
        care: 'Care Instructions',
        addToCart: 'Add to Cart',
        back: 'Back'
      },
      cart: {
        title: 'Shopping Cart',
        empty: 'Your cart is empty',
        continueShopping: 'Continue Shopping',
        items: 'Items',
        quantity: 'Quantity',
        subtotal: 'Subtotal',
        shipping: 'Shipping',
        total: 'Total',
        clearCart: 'Clear Cart',
        checkout: 'Proceed to Checkout',
        orderSummary: 'Order Summary'
      },
      checkout: {
        title: 'Checkout',
        shippingInfo: 'Shipping Information',
        paymentMethod: 'Payment Method',
        creditCard: 'Credit Card',
        paypal: 'PayPal',
        cardNumber: 'Card Number',
        expiryDate: 'Expiry Date',
        cvv: 'CVV',
        cardholderName: 'Cardholder Name',
        placeOrder: 'Place Order',
        freeShipping: 'Free shipping on orders over 150'
      },
      contact: {
        title: 'Contact Us About Cultural Products',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        hours: 'Hours',
        sendMessage: 'Send Cultural Inquiry',
        fullName: 'Full Name',
        message: 'Message About Cultural Products'
      },
      favorites: {
        title: 'My Favorites',
        empty: 'No Favorites Yet',
        browseProducts: 'Browse Products'
      },
      newsletter: {
        title: 'Join Our Cultural Journey',
        subtitle: 'Subscribe to discover new artisan stories, exclusive collections, and profound cultural insights from the heart of Xinjiang',
        placeholder: 'Enter your email address',
        subscribe: 'Subscribe Now',
        privacy: 'We respect your privacy and will never share your information'
      },
      common: {
        loading: 'Loading...',
        error: 'An error occurred',
        close: 'Close',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        found: 'Found',
        products: 'products',
        search: 'search',
        category: 'category',
        invalidEmail: 'Please enter a valid email address',
        success: 'Success',
        copyright: 'Xinjiang Cultural Messenger. All rights reserved.'
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: '首页',
        products: '产品',
        culture: '文化',
        contact: '联系我们',
        cart: '购物车',
        favorites: '收藏'
      },
      header: {
        title: '新疆文化使者',
        cart: '购物车',
        favorites: '收藏'
      },
      hero: {
        title: '发现正宗新疆文化产品',
        subtitle: '通过我们精心策划的手工文化珍宝收藏，将几个世纪的传统和文化遗产带入您的现代生活。',
        button: '探索文化收藏'
      },
      culture: {
        title: '新疆文化遗产',
        embroidery: '精湛刺绣',
        embroideryDesc: '体验代代相传的古老针线工艺传统，每一针都承载着世代的智慧。',
        colors: '活力色彩',
        colorsDesc: '发现从新疆壮丽景观中汲取的调色板——从金色沙漠到绿松石山湖。',
        symbols: '神圣符号',
        symbolsDesc: '揭示古代图案背后的深刻含义——从保护符号到普遍和谐的表征。'
      },
      products: {
        title: '精选文化收藏',
        viewAll: '发现完整收藏',
        addToCart: '加入购物车',
        addToFavorites: '添加到收藏',
        removeFromFavorites: '从收藏中移除',
        price: '价格',
        category: '分类',
        searchPlaceholder: '搜索文化产品...',
        sortBy: '排序方式',
        sortName: '名称',
        sortPriceLow: '价格：从低到高',
        sortPriceHigh: '价格：从高到低',
        noProducts: '未找到匹配的产品',
        clearFilters: '清除筛选'
      },
      productDetail: {
        details: '产品详情',
        material: '材质',
        origin: '产地',
        care: '保养说明',
        addToCart: '加入购物车',
        back: '返回'
      },
      cart: {
        title: '购物车',
        empty: '您的购物车是空的',
        continueShopping: '继续购物',
        items: '商品',
        quantity: '数量',
        subtotal: '小计',
        shipping: '运费',
        total: '总计',
        clearCart: '清空购物车',
        checkout: '去结算',
        orderSummary: '订单摘要'
      },
      checkout: {
        title: '结算',
        shippingInfo: '配送信息',
        paymentMethod: '支付方式',
        creditCard: '信用卡',
        paypal: 'PayPal',
        cardNumber: '卡号',
        expiryDate: '有效期',
        cvv: '安全码',
        cardholderName: '持卡人姓名',
        placeOrder: '提交订单',
        freeShipping: '订单满150免运费'
      },
      contact: {
        title: '联系我们了解文化产品',
        email: '邮箱',
        phone: '电话',
        address: '地址',
        hours: '营业时间',
        sendMessage: '发送文化咨询',
        fullName: '姓名',
        message: '关于文化产品的留言'
      },
      favorites: {
        title: '我的收藏',
        empty: '暂无收藏',
        browseProducts: '浏览产品'
      },
      newsletter: {
        title: '加入我们的文化之旅',
        subtitle: '订阅以发现新的工匠故事、独家系列和来自新疆心脏地带的深刻文化见解',
        placeholder: '请输入您的邮箱地址',
        subscribe: '立即订阅',
        privacy: '我们尊重您的隐私，绝不会分享您的信息'
      },
      common: {
        loading: '加载中...',
        error: '发生错误',
        close: '关闭',
        save: '保存',
        cancel: '取消',
        delete: '删除',
        edit: '编辑',
        found: '找到',
        products: '个产品',
        search: '搜索',
        category: '分类',
        invalidEmail: '请输入有效的邮箱地址',
        success: '成功',
        copyright: '新疆文化使者. 版权所有.'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
