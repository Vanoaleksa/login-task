import { Route, Switch,useRouterHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import Table from './pages/table';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          < Route  exact path='/' component={Auth} />
          < Route path='/table' component={Table} />
        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;
