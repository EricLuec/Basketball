import logo from './logo.svg';
import './App.css';
import Team from './components/team';
import History from './components/history';

const App = () => {
  return (
    <div>
      <Team class="max-w-sm rounded overflow-hidden shadow-lg" />
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
