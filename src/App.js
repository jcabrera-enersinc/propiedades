import { QueryForm } from './components/QueryForm';
//import { useSelector } from 'react-redux';
import './index.css';

export function App() {
  //const query = useSelector(state => state.query.query);

  return (
    <div className='center'>
      <QueryForm />
      {/* 
      <br />
      <label htmlFor="query">Consulta:</label>
      <textarea id="query" value={query} readOnly />
      */}
    </div>
  );
}

export default App;


