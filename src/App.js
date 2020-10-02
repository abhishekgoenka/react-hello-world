import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table';
import PureComponentDemo from './components/PureComponent';
import MemoComp from './components/MemoComp';
import RefsDemo from './components/RefsDemo';
import ParentFRInput from './components/ParentFRInput';

function App() {
  return (
    <div className="App">
      {/* <Greet name="abhishek" hero="superman"></Greet> */}
      {/* <Welcome name="abhishek">Some child text</Welcome> */}
      {/* <Hello Name="abhishek" heroName="batman"><p>this is child</p></Hello> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <Stylesheet primary={true}></Stylesheet> */}
      {/* <Form></Form> */}
      {/* <LifecycleA></LifecycleA> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Table></Table> */}
      {/* <PureComponentDemo></PureComponentDemo> */}
      {/* <MemoComp></MemoComp> */}
      {/* <RefsDemo></RefsDemo> */}
      <ParentFRInput></ParentFRInput>
    </div >
  );
}

export default App;
