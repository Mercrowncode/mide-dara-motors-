import { ThemeProvider } from 'next-themes';
import { Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { VehicleListingPage } from '@/pages/VehicleListingPage';
import { Toaster } from '@/components/ui/toaster';
import './App.css';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<VehicleListingPage />} />
        </Routes>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;