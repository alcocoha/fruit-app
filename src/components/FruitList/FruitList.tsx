import React from 'react';
import { Fruit } from '@/Types/types';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
  BaseFruitDisplay,
  BaseFruitDisplayProps,
} from '../BaseFruitDisplay/BaseFruitDisplay';

type FruitListProps = Omit<BaseFruitDisplayProps, 'renderContent'>;

export const FruitList: React.FC<FruitListProps> = (props) => {
  const renderContent = (groupFruits: Fruit[]) => (
    <List>
      {groupFruits.map((fruit) => (
        <ListItem
          key={fruit.id}
          secondaryAction={
            <Button
              onClick={() => props.addFruitToJar(fruit)}
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          }
        >
          <ListItemText
            primary={fruit.name}
            secondary={`${fruit.nutritions.calories} calories`}
          />
        </ListItem>
      ))}
    </List>
  );

  return <BaseFruitDisplay {...props} renderContent={renderContent} />;
};
