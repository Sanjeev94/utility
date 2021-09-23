import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
  
     <Navbar title="TextUtlts" />
     <div className="container my-3">

     
     <TextForm heading="Enter the text area to analyse" />
     </div>
     {/* <Navbar about="About TextUtils/> */}
    </>
  );
}

export default App;
