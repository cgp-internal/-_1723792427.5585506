import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useTheme } from './hooks/useTheme';

const App = () => {
  const [theme, updateTheme] = useTheme();

  return (
    <div className="App" style={{ backgroundColor: theme.primaryColor }}>
      <Header />
      <main>
        {/* Add your app content here */}
      </main>
      <Footer />
    </div>
  );
};

export { App };