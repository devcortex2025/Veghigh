import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import OrderProcess from "./pages/OrderProcess";
import News from "./pages/News";
import OurTeam from "./pages/OurTeam";
import VegetableCatalog from "./pages/VegetableCatalog";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <Banner />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/order-process" element={<OrderProcess />} />
              <Route path="/news" element={<News />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/vegetable-catalog" element={<VegetableCatalog />} />
              <Route path="/faq" element={<FAQ />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
