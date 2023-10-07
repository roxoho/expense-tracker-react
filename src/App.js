import './App.css';
import {Header} from './components/header';
import { Balance } from './components/balance';
import { Expenses } from './components/expenses';
import { TranscationList } from './components/transcationlist';
import { Add } from './components/addtransaction';
import { GlobalProvider } from './context/globalstate';

function App() {
  return (<GlobalProvider>
    <Header />
    <Balance />
    <Expenses />
    <TranscationList />
    <Add />
  </GlobalProvider>);
}

export default App;
