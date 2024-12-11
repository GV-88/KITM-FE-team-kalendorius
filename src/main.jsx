import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from './contexts/CalendarContext';
import App from './components/App/App';
import './styles/styles.scss'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
