import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="fiesty one you are!" name="Mike" age="32" />
      <StatefulGreetingWithPrevState />
      <NavBarSimple />
      <Sidebar />
    </div>
  );
}

export default App;
