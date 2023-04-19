import React from "react";
import "./App.css";
// import Application from './components/application/Application';
// import Skills from './components/skills/Skills';
// import Counter from "./components/counter/Counter";
import { MuiMode } from "./components/mui/MuiMode";
import { AppProviders } from "./providers/AppProvider";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application/>
        <Skills skills={['html', 'css']}/> 
        <Counter />*/}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
