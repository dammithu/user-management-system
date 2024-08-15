
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
 
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To User Management System</h1>
        <button className='user_btn' onClick={()=>navigate('/users')}>USERS</button>
      </header>
    </div>
  );
}

export default App;
