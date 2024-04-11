import './App.css'
import Header from './Components/header/Header';
import Options from './Components/options/Options';
import AddOption from './Components/addOption/AddOption';


function App() {

  return (
    <main>
      <Header />
      <div className='container'>
        <button className='action-btn'>What Should I do?</button>
        <div className='options-box'> 
          <Options />
          <AddOption />
        </div> 
      </div>
    </main>
  )
}

export default App
