import logo from './logo.svg';
import './App.css';
import Team from './components/team';
import History from './components/history';

const App = () => {
  return (
    <div className="grid grid-cols-3 h-screen">
      <Team />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <History />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Team />
    </div>
  );
};


export default App;
