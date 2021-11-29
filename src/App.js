import { Provider } from 'react-redux';

import './App.css';

import Table1 from './pages/table1';
import { store } from './redux/createStore';



function App() {
  return (
    <Provider store = {store}>
    
      <div className="App">
        <Table1/>
      </div>
    
    </Provider>
  );

}

export default App;
