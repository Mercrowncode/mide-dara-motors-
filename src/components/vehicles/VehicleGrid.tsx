import { Vehicle } from '@/lib/types';
import { VehicleCard } from './VehicleCard';
import { VehicleCardSkeleton } from './VehicleCardSkeleton';

interface VehicleGridProps {
  vehicles: Vehicle[];
  isLoading: boolean;
  filters: {
    make: string;
    priceRange: number[];
    year: string;
    bodyType: string;
  };
}

export function VehicleGrid({ vehicles, isLoading, filters }: VehicleGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <VehicleCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesMake = !filters.make || vehicle.make === filters.make;
    const matchesYear = !filters.year || vehicle.year.toString() === filters.year;
    const matchesPrice = 
      vehicle.price >= filters.priceRange[0] && 
      vehicle.price <= filters.priceRange[1];
    
    return matchesMake && matchesYear && matchesPrice;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredVehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}