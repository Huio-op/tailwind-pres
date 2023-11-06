import Header from '~/components/header/Header.jsx';
import FisrtStep from '~/components/mainPage/FisrtStep.jsx';
import SecondStep from '~/components/mainPage/SecondStep.jsx';
import { useRef } from 'react';
import { ThemeProvider } from '~/hooks/useTheme.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <div className={`text-black dark:bg-black dark:text-dark-text`}>
        <Header />
        <FisrtStep />
        <SecondStep />
      </div>
    </ThemeProvider>
  );
}
