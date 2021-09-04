
import './App.css';
import Header from './components/header';
import Balance from './components/balance'
import './App.css'
import IncomeExpnese from './components/incomeExpnese';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

//contextAPI 

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpnese/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
