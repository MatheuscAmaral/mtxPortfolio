import { createRoot } from 'react-dom/client';
import { Toaster } from "./components/ui/sonner.tsx";
import ThemeProvider from './contexts/ThemeContext.tsx';
import App from './App.tsx';
import './index.css';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
    <Toaster />
  </ThemeProvider>
)
