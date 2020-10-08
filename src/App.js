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
import PortalsDemo from './components/PortalsDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import UserContextExample from './components/UserContextExample';
import { UserProvider } from './components/UserContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import CounterHook from './components/hooks/CounterHook';
import CounterHook1 from './components/hooks/CounterHook1';
import InvervalHoolCounter from './components/hooks/InvervalHoolCounter';
import DataFatching from './components/hooks/DataFatching';
import CounterReducer from './components/hooks/CounterReducer';

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
      {/* <ParentFRInput></ParentFRInput> */}
      {/* <PortalsDemo></PortalsDemo> */}
      {/* <ErrorBoundary>
        <Hero name="Superman"></Hero>
        <Hero name="Batman"></Hero>
        <Hero name=""></Hero>
      </ErrorBoundary> */}
      {/* <ClickCounter></ClickCounter> */}
      {/* <HoverCounter></HoverCounter> */}

      {/* <UserProvider value="abhishek">
        <UserContextExample></UserContextExample>
      </UserProvider> */}

      {/* <PostList></PostList> */}
      {/* <PostForm></PostForm> */}
      {/* <CounterHook></CounterHook> */}
      {/* <CounterHook1></CounterHook1> */}
      {/* <InvervalHoolCounter></InvervalHoolCounter> */}
      {/* <DataFatching></DataFatching> */}
      <CounterReducer></CounterReducer>
    </div >
  );
}

export default App;
