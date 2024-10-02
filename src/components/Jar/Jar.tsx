import React, { useState } from 'react';
import { JarFruit } from '../../Types/types';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Button from '@mui/material/Button';
import './Jar.css';

interface JarProps {
  jarFruits: JarFruit[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export const Jar: React.FC<JarProps> = ({ jarFruits }) => {
  const [showChart, setShowChart] = useState(false);

  const totalCalories = jarFruits.reduce(
    (sum, fruit) => sum + fruit.nutritions.calories * fruit.count,
    0
  );

  const chartData = jarFruits.map((fruit) => ({
    name: fruit.name,
    value: fruit.nutritions.calories * fruit.count,
  }));

  return (
    <div className="wrapper">
      {jarFruits.map((fruit) => (
        <div key={fruit.id}>
          {fruit.name} x{fruit.count} ({fruit.nutritions.calories * fruit.count}{' '}
          calories)
        </div>
      ))}
      <p>Total Calories: {totalCalories}</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowChart(!showChart)}
      >
        {showChart ? 'Hide Chart' : 'Show Chart'}
      </Button>
      {showChart && (
        <ResponsiveContainer width="60%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
