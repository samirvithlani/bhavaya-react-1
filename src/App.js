import logo from './logo.svg';
import './App.css';
import { Content } from './components/Content';
import Header from './components/Header';
import { Student } from './components/students/Student';
import { UseStateDemo } from './components/UseStateDemo';
import { FormDemo1 } from './components/FormDemo1';
function App() {

  

  return (
    <div className="App">
      <Header></Header>
      {/* <Content></Content> */}
      {/* <Student></Student> */}
      {/* <UseStateDemo/> */}
      <FormDemo1></FormDemo1>
      </div>
  );
}

export default App;
