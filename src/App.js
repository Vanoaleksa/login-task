import { Route, Switch, useRouterHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import Table1 from './pages/table1';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* < Route exact path='/' component={Auth} /> */}
          < Route path='/'
           render={() => <Table1/>} /> 
        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;
