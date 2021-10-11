import './App.css';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import VerticalTabs from './verticalTabs.js';

function App() {
  return (
    <div className="main">
      <div className = "wrapper">
        <VerticalTabs/>
        </div>
    </div>
  );
}

export default App;
