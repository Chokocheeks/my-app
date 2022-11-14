// import logo from './logo.svg';
import './App.css';
import { Button }  from './components/Button/Button';
import { Tab } from './components/Tab/Tab';
import { Title } from './components/Title/Title';

function App() {
  const clickHandler = () => {
    console.log(Math.random());
  }

  return (
    <div className="App">
      <Title>*</Title>
      {/* <Button title={'Name Last'} type={'primary'} click={clickHandler}/>
      <Button title={'Vi Skrip'} type={'secondary'} click={clickHandler}/> */}
     <Tab />
    </div>
  );
}

export default App;
