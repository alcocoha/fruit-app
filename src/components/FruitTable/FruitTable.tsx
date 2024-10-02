import React from 'react';
import { Fruit } from '@/Types/types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
  BaseFruitDisplay,
  BaseFruitDisplayProps,
} from '../BaseFruitDisplay/BaseFruitDisplay';

type FruitTableProps = Omit<BaseFruitDisplayProps, 'renderContent'>;

export const FruitTable: React.FC<FruitTableProps> = (props) => {
  const renderContent = (groupFruits: Fruit[]) => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Family</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Genus</TableCell>
            <TableCell>Calories</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groupFruits.map((fruit) => (
            <TableRow key={fruit.id}>
              <TableCell>{fruit.name}</TableCell>
              <TableCell>{fruit.family}</TableCell>
              <TableCell>{fruit.order}</TableCell>
              <TableCell>{fruit.genus}</TableCell>
              <TableCell>{fruit.nutritions.calories}</TableCell>
              <TableCell>
                <Button
                  onClick={() => props.addFruitToJar(fruit)}
                  startIcon={<AddIcon />}
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return <BaseFruitDisplay {...props} renderContent={renderContent} />;
};
