import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={<SignIn />} />
        <Route path="/home" component={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
