import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import App from './App';

// context
import { StoreProvider } from './context/store';

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <StoreProvider>
      <App />
    </StoreProvider>
  </Router>,
  document.getElementById('root')
);
