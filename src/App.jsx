import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import { CartProvider } from './contexts/CartContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import Checkout from './pages/Checkout';
import Favorites from './pages/Favorites';

const queryClient = new QueryClient();

const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <CartProvider>
      <FavoritesProvider>
        <HashRouter>
            <Routes>
            {navItems.map(({ to, page }) => (
                <Route key={to} path={to} element={page} />
            ))}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </HashRouter>
      </FavoritesProvider>
    </CartProvider>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
