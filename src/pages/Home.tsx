import { ArrowRight, Shield, Banknote, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80")',
            transform: 'translateZ(-1px) scale(1.5)'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Luxury Redefined
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the pinnacle of automotive excellence with our curated collection of premium vehicles.
          </p>
          <Button 
            size="lg" 
            className="text-lg"
            onClick={() => navigate('/vehicles')}
          >
            Explore Our Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Shield className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Premium Vehicles</h3>
              <p className="text-muted-foreground">
                Carefully selected luxury cars from the world's finest manufacturers.
              </p>
            </Card>
            <Card className="p-6">
              <Banknote className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Flexible Financing</h3>
              <p className="text-muted-foreground">
                Tailored financial solutions to match your requirements.
              </p>
            </Card>
            <Card className="p-6">
              <RefreshCw className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Trade-In Service</h3>
              <p className="text-muted-foreground">
                Fair valuation and hassle-free trade-in process.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Mide&Dara Motors</h2>
              <p className="text-muted-foreground mb-6">
                In 2016, Mr. Alamu Abbey envisioned a dealership in Lagos where customers could buy quality vehicles with confidence and ease. That vision became MIDE & Dara Motors Limited, a car dealership grounded in trust, quality, and customer satisfaction. Starting as a subsidiary of Midakmart Limited, a top supermarket chain in Nigeria, we combined our passion for automobiles with a dedication to exceptional service, quickly becoming a go-to name for vehicles in Lagos and beyond.
              </p>
              <Button 
                variant="outline"
                onClick={() => navigate('/about')}
              >
                Learn More About Us
              </Button>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1562141989-c5c79ac8f576?auto=format&fit=crop&q=80"
                alt="Luxury car showroom"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}