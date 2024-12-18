import { useState, useEffect } from 'react';
import { Vehicle } from '@/lib/types';
import { MOCK_VEHICLES } from '@/lib/mock-data';

export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchVehicles = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setVehicles(MOCK_VEHICLES);
      setIsLoading(false);
    };

    fetchVehicles();
  }, []);

  return { vehicles, isLoading };
}