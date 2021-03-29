
import './App.css';
import AddStudent from './components/AddStudent';
import Footer from './components/Footer';
import Students from './components/Students';


function App() {
  return (
    <div >
      <h3 className="head">Students Exeat Card</h3>
    
    <div className="App">
      
      <AddStudent/>
      <h3 className="head">Exeat Records</h3>
      <Students/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
