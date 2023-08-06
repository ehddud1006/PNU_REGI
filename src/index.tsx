import DateTimeProvider from '@/@components/@shared/DateTimeProvider';
import RegisterDataProvider from '@/@components/@shared/RegisterDataProvider';
import App from '@/App';
import globalStyle from '@/styles/globalStyle';
import theme from '@/styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <ThemeProvider theme={theme}>
      <RegisterDataProvider>
        <DateTimeProvider>
          <App />
        </DateTimeProvider>
      </RegisterDataProvider>
    </ThemeProvider>
  </React.StrictMode>
);
