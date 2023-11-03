import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";


//function App() {
//  return (
//    <div className="App">
//      <FunctionalGreeting />
//      <FunctionalGreetingWithProps greeting="fiesty one you are!" name="Mike" age="32" />
//    </div>
//  );
//}

//export default App;

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;
