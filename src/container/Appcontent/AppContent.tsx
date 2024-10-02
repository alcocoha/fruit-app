import React, { useState, useEffect } from 'react';
import { GroupByOption } from '@/Types/types';
import { Select, Jar } from '@/components';
import { FruitDisplay } from '../FruitDisplay/FruitDisplay';
import { useFruits } from '@/hooks/useFruits';
import jarTop from '@/assets/jar-top.png';
import jarBottom from '@/assets/jar-bottom.png';
import './AppContent.css';

export const AppContent: React.FC = () => {
  const { fruits, jarFruits, loading, error, addFruitToJar, fetchFruits } =
    useFruits();
  const [groupBy, setGroupBy] = useState<GroupByOption>('None');

  const groupByOptions = [
    { value: 'None', label: 'None' },
    { value: 'Family', label: 'Family' },
    { value: 'Order', label: 'Order' },
    { value: 'Genus', label: 'Genus' },
  ];

  useEffect(() => {
    fetchFruits();
  }, [fetchFruits]);

  return (
    <div className="app">
      <h1 className="title">Fruit App</h1>
      <Select
        id="group-by-select"
        label="Group by"
        value={groupBy}
        options={groupByOptions}
        onChange={(value) => setGroupBy(value as GroupByOption)}
      />
      <div className="appcontent-wrapper">
        <div className="fruits">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <FruitDisplay
              fruits={fruits}
              groupBy={groupBy}
              addFruitToJar={addFruitToJar}
            />
          )}
        </div>
        <div className="jar">
          <img src={jarTop} alt="top" />
          <div className="jar-center">
            <Jar jarFruits={jarFruits} />
          </div>
          <img src={jarBottom} alt="bottom" />
        </div>
      </div>
    </div>
  );
};
