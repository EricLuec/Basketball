import logo from './logo.svg';
import './App.css';
import Team from './components/team';
import History from './components/history';

const App = () => {
  return (
    <div className="container">
    <Team />
    <History />
    <Team />
  </div>
  );
};


export default App;
