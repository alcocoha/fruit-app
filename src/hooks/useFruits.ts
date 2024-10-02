import { useContext, useCallback } from 'react';
import { FruitsContext, FruitsContextType } from '@/contexts/FruitsContext';
import axios from 'axios';
import { Fruit } from '@/Types/types';

export const useFruits = (): FruitsContextType & {
  fetchFruits: () => Promise<void>;
} => {
  const context = useContext(FruitsContext);
  if (context === undefined) {
    throw new Error('useFruits must be used within a FruitsProvider');
  }

  const { setFruits, setLoading, setError } = context;

  const fetchFruits = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get<Fruit[]>('/api/fruit/all');
      setFruits(response.data);
      setError(null);
    } catch (err) {
      setError('Error fetching fruits');
    } finally {
      setLoading(false);
    }
  }, [setFruits, setLoading, setError]);

  return { ...context, fetchFruits };
};
