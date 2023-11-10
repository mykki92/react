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
import ContentHooks from "./components/ContentHooks";
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
import UseStateWithObjects from "./components/UseStateWithObjects";
import UseEffectCounter from "./components/UseEffectCounter";
import UseEffectCounterContainer from "./components/UseEffectCounterContainer";

function App() {
  return (
    <div className="App">
      <h2>FunctionalGreeting</h2>
      <FunctionalGreeting />
      <hr />
      <h2>FunctionalGreetingWithProps</h2>
      <FunctionalGreetingWithProps greeting="fiesty one you are!" name="Mike" age="32" />
      <hr />
      <h2>StatefulGreeting</h2>
      <StatefulGreeting greeting="I'm a stateful class component!" name="Mike"/>
      <hr />
      <h2>StatefulGreetingWithPrevState</h2>
      <StatefulGreetingWithPrevState />
      <hr />
      <h2>StatefulGreetingWithCallback</h2>
      <StatefulGreetingWithCallback />
      <hr />
      <h2>NavBarForm</h2>
      <NavBarForm />
      <hr />
      <h2>Sidebar</h2>
      <Sidebar />
      <hr />
      <h2>EventsFunctional</h2>
      <EventsFunctional />
      <hr />
      <h2>EventsClass</h2>
      <EventsClass />
      <hr />
      <h2>EventBinding</h2>
      <EventBinding />
      <hr />
      <h2>ConditionalRenderingClass</h2>
      <ConditionalRenderingClass />
      <hr />
      <h2>ConditionalRenderingFunctional</h2>
      <ConditionalRenderingFunctional connected={true} />
      <hr />
      <h2>NestingComponents</h2>
      <NestingComponents />
      <hr />
      <h2>MethodsAsPropsParent</h2>
      <MethodsAsPropsParent />
      <hr />
      <h2>Clock</h2>
      <Clock />
      <hr />
      <h2>ControlledForm</h2>
      <ControlledForm />
      <hr />
      <h2>ControlledFormHooks</h2>
      <ControlledFormHooks />
      <hr />
      <h2>UncontrolledForm</h2>
      <UncontrolledForm />
      <hr />
      <h2>HooksCounter</h2>
      <HooksCounter />
      <hr />
      <h2>ClassCounter</h2>
      <ClassCounter />
      <hr />
      <h2>UseEffectCounter</h2>
      <UseEffectCounter />
      <hr />
      <h2>UseEffectCounterContainer</h2>
      <UseEffectCounterContainer />
      <hr />
      <h2>UseStateWithArrays</h2>
      <UseStateWithArrays />
      <hr />
      <h2>UseStateWithObjects</h2>
      <UseStateWithObjects />
      <hr />
      <h2>SearchBar3</h2>
      <SearchBar3 />
      <hr />
      <h2>LifeCyclesCDM</h2>
      <LifeCyclesCDM />
      <hr />
      <h2>LifeCyclesCDU</h2>
      <LifeCyclesCDU />
      <hr />
      <h2>LifeCyclesCWU</h2>
      <LifeCyclesCWU />
      <hr />
      <h2>RenderingLists</h2>
      <RenderingLists />
      <hr />
      <h2>Content</h2>
      <Content />
      <hr />
      <h2>ContentHooks</h2>
      <ContentHooks />
      <hr />
    </div>
  );
}

export default App;
