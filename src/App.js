import './App.css';
import Header from './components/header';
import Body from './components/body';

function App() {
  return (
    <div className='home'>
      <div>
        <Header/>
      </div>
      <div className='body'>
        <Body/>
      </div>
    </div>
  );
}

export default App;
