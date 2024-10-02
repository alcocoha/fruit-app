import React from 'react';
import { Fruit, GroupByOption } from '@/Types/types';
import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export interface BaseFruitDisplayProps {
  fruits: Fruit[];
  groupBy: GroupByOption;
  addFruitToJar: (fruit: Fruit) => void;
  addAllToJar: (fruits: Fruit[]) => void;
  renderContent: (groupFruits: Fruit[]) => React.ReactNode;
}

export const groupFruits = (fruits: Fruit[], groupBy: GroupByOption) =>
  groupBy === 'None'
    ? { 'All Fruits': fruits }
    : fruits.reduce(
        (acc, fruit) => {
          const key = fruit[groupBy.toLowerCase() as keyof Fruit] as string;
          if (!acc[key]) acc[key] = [];
          acc[key].push(fruit);
          return acc;
        },
        {} as Record<string, Fruit[]>
      );

export const BaseFruitDisplay: React.FC<BaseFruitDisplayProps> = ({
  fruits,
  groupBy,
  addFruitToJar,
  addAllToJar,
  renderContent,
}) => {
  const groupedFruits = groupFruits(fruits, groupBy);

  return (
    <Box>
      {Object.entries(groupedFruits).map(([group, groupFruits]) => (
        <Box key={group} mb={4}>
          <Box display="flex" alignItems="center" mb={1}>
            <Typography variant="h6">{group}</Typography>
            <Button
              startIcon={<AddIcon />}
              onClick={() => addAllToJar(groupFruits)}
              sx={{ ml: 2 }}
            >
              Add All
            </Button>
          </Box>
          {renderContent(groupFruits)}
        </Box>
      ))}
    </Box>
  );
};
