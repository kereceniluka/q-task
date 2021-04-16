import { Switch, Route, Redirect } from 'react-router-dom';

// pages
import Posts from './pages/Posts';
import Post from './pages/Post';

const App: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/posts" />
      <Route path="/posts" component={Posts} />
      <Route path="/post/:id" component={Post} />
    </Switch>
  );
}

export default App;
