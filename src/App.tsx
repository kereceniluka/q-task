import { Switch, Route, Redirect } from 'react-router-dom';

// pages
import Posts from './pages/Posts';

const App: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/posts" />
      <Route path="/posts" component={Posts} />
      <Route path="/post/:id" />
    </Switch>
  );
}

export default App;
