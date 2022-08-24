
import './App.css';
import Home from './Home';
import requests from './request';

function App() {
 
  return (
    
    <div className="App">
    <Home
    quote_url = {requests.random}
    />
    </div>
    
  );
}

export default App;
