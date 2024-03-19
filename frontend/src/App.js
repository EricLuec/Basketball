import './App.css';
import Team from './components/team';
import History from './components/history';
import Intro from './components/Intro';

const App = () => {
  return (
    <div className="container">
      <Intro />
      <Team className="tweak"/>
      <History className="tweak" />
      <Team className="tweak"/>
    </div>
  );
};


export default App;
