import logo from './logo.svg';
import './App.css';
import Team from './components/team';
import History from './components/history';

const App = () => {
  return (
    <div className="container">
      
      <Team className="tweak"/>
      <History className="tweak" />
      <Team className="tweak"/>
    </div>
  );
};


export default App;
