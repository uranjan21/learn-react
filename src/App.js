import './App.css';
import Card from '@mui/material/Card';
import Header from "./components/Header/Header.js"
import CoreConcepts from "./components/CoreConcepts.js"
import { Concepts } from './data/data.js';
function App() {
  return (
    <div className="App">
      <Header />
      <section className="component">
        <h1 className="component-title">Core Concepts</h1>
        <div className='myCard'>
          <CoreConcepts title={Concepts[0].title} description={Concepts[0].description} links={Concepts[0].links} />
          <CoreConcepts {...Concepts[1]} />
          <CoreConcepts {...Concepts[2]} />
          <CoreConcepts {...Concepts[3]} />
          <CoreConcepts {...Concepts[4]} />
          <CoreConcepts {...Concepts[5]} />
          </div>
      </section>
    </div>
  );
}

export default App;

///Practise Tasks

// TODO : Create a card component, reuse it 4 times, pass different data through props
// pass props from an object
