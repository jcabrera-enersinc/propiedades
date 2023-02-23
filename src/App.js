import { QueryForm } from './components/QueryForm';
import { Form } from './components/Form';
//import { useSelector } from 'react-redux';

export function App() {
  //const query = useSelector(state => state.query.query);

  return (

    <div>
      <div className='center'>
        <QueryForm />
        {/* 
      <br />
      <label htmlFor="query">Consulta:</label>
      <textarea id="query" value={query} readOnly />
      */}
      </div>
      <div className='center2'>
        <Form />
      </div>
    </div>
  );
}
export default App;


