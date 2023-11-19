import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import LanguageNavigator from './navigations/LanguageNavigator';
import SplashScreen from './components/SplashScreen';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <SplashScreen /> : <LanguageNavigator />}
      
    </NavigationContainer>
  );
}