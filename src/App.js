import logo from './logo.svg';
import './App.css';
import { Content } from './components/Content';
import Header from './components/Header';
import { Student } from './components/students/Student';
function App() {

  

  return (
    <div className="App">
      <Header></Header>
      {/* <Content></Content> */}
      <Student></Student>
      </div>
  );
}

export default App;
