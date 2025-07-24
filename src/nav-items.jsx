import { HomeIcon, ShoppingBag, BookOpen, Mail, ShoppingCart, Heart } from "lucide-react";
import Index from "./pages/Index.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Culture from "./pages/Culture.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";

/**
* Central place for defining the navigation items. Used for navigation components and routing.
*/
export const navItems = [
{
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
},
{
    title: "Products",
    to: "/products",
    icon: <ShoppingBag className="h-4 w-4" />,
    page: <Products />,
},
{
    title: "Culture",
    to: "/culture",
    icon: <BookOpen className="h-4 w-4" />,
    page: <Culture />,
},
{
    title: "Contact Us",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <Contact />,
},
{
    title: "Cart",
    to: "/cart",
    icon: <ShoppingCart className="h-4 w-4" />,
    page: <Cart />,
},
{
    title: "Product Detail",
    to: "/product/:id",
    icon: <ShoppingBag className="h-4 w-4" />,
    page: <ProductDetail />,
},
];
