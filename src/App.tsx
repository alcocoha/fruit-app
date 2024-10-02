import React from 'react';
import { FruitsProvider } from '@/contexts/FruitsContext';
import { AppContent } from '@/container';

const App: React.FC = () => (
  <FruitsProvider>
    <AppContent />
  </FruitsProvider>
);

export default App;
