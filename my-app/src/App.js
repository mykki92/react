import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
// import NavBarSimple from "./components/NavBarSimple";
import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import EventBinding from "./components/EventBinding";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import RenderingLists from "./components/RenderingLists";
import Content from "./components/Content";
import Clock from "./components/Clock";
import LifeCyclesCDM from "./components/LifeCyclesCDM";
import LifeCyclesCDU from "./components/LifeCyclesCDU";
import LifeCyclesCWU from "./components/LifeCyclesCWU";
import ControlledForm from "./components/ControlledForm";
import ControlledFormHooks from "./components/ControlledFormHooks";
import UncontrolledForm from "./components/UncontrolledForm";
import { SearchBar3 } from "./components/SearchBar3";
import HooksCounter from "./components/HooksCounter";
import ClassCounter from "./components/ClassCounter";
import UseStateWithArrays from "./components/UseStateWithArrays";

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <hr />
      <FunctionalGreetingWithProps greeting="fiesty one you are!" name="Mike" age="32" />
      <hr />
      <StatefulGreeting greeting="I'm a stateful class component!" name="Mike"/>
      <hr />
      <StatefulGreetingWithPrevState />
      <hr />
      <StatefulGreetingWithCallback />
      <hr />
      <NavBarForm />
      <hr />
      <Sidebar />
      <hr />
      <EventsFunctional />
      <hr />
      <EventsClass />
      <hr />
      <EventBinding />
      <hr />
      <ConditionalRenderingClass />
      <hr />
      <ConditionalRenderingFunctional connected={true} />
      <hr />
      <NestingComponents />
      <hr />
      <MethodsAsPropsParent />
      <hr />
      <Clock />
      <hr />
      <ControlledForm />
      <hr />
      <ControlledFormHooks />
      <hr />
      <UncontrolledForm />
      <hr />
      <HooksCounter />
      <hr />
      <ClassCounter />
      <hr />
      <UseStateWithArrays />
      <hr />
      <SearchBar3 />
      <hr />
      <LifeCyclesCDM />
      <hr />
      <LifeCyclesCDU />
      <hr />
      <LifeCyclesCWU />
      <hr />
      <RenderingLists />
      <hr />
      <Content />
      <hr />
    </div>
  );
}

export default App;
