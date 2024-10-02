import React, { createContext, useState, ReactNode } from 'react';
import { Fruit, JarFruit } from '@/Types/types';

export interface FruitsContextType {
  fruits: Fruit[];
  jarFruits: JarFruit[];
  setFruits: React.Dispatch<React.SetStateAction<Fruit[]>>;
  addFruitToJar: (fruit: Fruit) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export const FruitsContext = createContext<FruitsContextType | undefined>(
  undefined
);

export const FruitsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [jarFruits, setJarFruits] = useState<JarFruit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const addFruitToJar = (fruit: Fruit) => {
    setJarFruits((prevJarFruits) => {
      const existingFruit = prevJarFruits.find((f) => f.id === fruit.id);
      if (existingFruit) {
        return prevJarFruits.map((f) =>
          f.id === fruit.id ? { ...f, count: f.count + 1 } : f
        );
      } else {
        return [...prevJarFruits, { ...fruit, count: 1 }];
      }
    });
  };

  const value = {
    fruits,
    jarFruits,
    setFruits,
    addFruitToJar,
    loading,
    setLoading,
    error,
    setError,
  };

  return (
    <FruitsContext.Provider value={value}>{children}</FruitsContext.Provider>
  );
};
