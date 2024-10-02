import React, { useState } from 'react';
import { Fruit, GroupByOption } from '@/Types/types';
import { FruitList, FruitTable } from '@/components';
import { Button, Box } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import TableChartIcon from '@mui/icons-material/TableChart';

interface FruitDisplayProps {
  fruits: Fruit[];
  groupBy: GroupByOption;
  addFruitToJar: (fruit: Fruit) => void;
}

export const FruitDisplay: React.FC<FruitDisplayProps> = ({
  fruits,
  groupBy,
  addFruitToJar,
}) => {
  const [view, setView] = useState<'list' | 'table'>('list');

  const addAllToJar = (fruits: Fruit[]) => {
    fruits.forEach(addFruitToJar);
  };

  return (
    <Box>
      <Box mb={2}>
        <Button
          variant={view === 'list' ? 'contained' : 'outlined'}
          onClick={() => setView('list')}
          startIcon={<ListIcon />}
          sx={{ mr: 1 }}
        >
          List View
        </Button>
        <Button
          variant={view === 'table' ? 'contained' : 'outlined'}
          onClick={() => setView('table')}
          startIcon={<TableChartIcon />}
        >
          Table View
        </Button>
      </Box>
      {view === 'list' ? (
        <FruitList
          fruits={fruits}
          groupBy={groupBy}
          addFruitToJar={addFruitToJar}
          addAllToJar={addAllToJar}
        />
      ) : (
        <FruitTable
          fruits={fruits}
          groupBy={groupBy}
          addFruitToJar={addFruitToJar}
          addAllToJar={addAllToJar}
        />
      )}
    </Box>
  );
};
