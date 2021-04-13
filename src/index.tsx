import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './themes/theme';
import App from './App';

// context
import { StoreProvider } from './context/store';

ReactDOM.render(
  <Router>
    <StoreProvider>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StoreProvider>
  </Router>,
  document.getElementById('root')
);
