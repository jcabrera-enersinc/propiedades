import { useSelector, useDispatch } from 'react-redux';
import { setVariable1, setVariable2, setVariable3, setVariable4, setVariable5, setQuery } from '../features/forms/querySlice';


export function QueryForm() {
  const variable1 = useSelector(state => state.query.variable1);
  const variable2 = useSelector(state => state.query.variable2);
  const variable3 = useSelector(state => state.query.variable3);
  const variable4 = useSelector(state => state.query.variable4);
  const variable5 = useSelector(state => state.query.variable5);
  const query = useSelector(state => state.query.query);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Generamos la consulta con las variables actualizadas
    const newQuery = `SELECT * FROM tabla WHERE variable1 = ${variable1} AND variable2 = ${variable2} AND variable3 = ${variable3} AND variable4 = ${variable4} AND variable5 = ${variable5}`;
    dispatch(setQuery(newQuery));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Parámetros de consulta</h1>
      <label htmlFor="variable1">Variable 1:</label>
      <input
        type="text"
        id="variable1"
        value={variable1}
        onChange={(event) => dispatch(setVariable1(event.target.value))}
      />
      <label htmlFor="variable2">Variable 2:</label>
      <input
        type="text"
        id="variable2"
        value={variable2}
        onChange={(event) => dispatch(setVariable2(event.target.value))}
      />
      <label htmlFor="variable3">Variable 3:</label>
      <input
        type="text"
        id="variable3"
        value={variable3}
        onChange={(event) => dispatch(setVariable3(event.target.value))}
      />
      <label htmlFor="variable4">Variable 4:</label>
      <input
        type="text"
        id="variable4"
        value={variable4}
        onChange={(event) => dispatch(setVariable4(event.target.value))}
      />
      <label htmlFor="variable5">Variable 5:</label>
      <input
        type="text"
        id="variable5"
        value={variable5}
        onChange={(event) => dispatch(setVariable5(event.target.value))}
      />
      <button type="submit">Generar consulta</button>
      <br />
      <label htmlFor="query">Consulta:</label>
      <textarea id="query" value={query} readOnly />
    </form>
  );
}