import "./App.css";
import React, { useState } from "react";
const initial=[{
  nom:"Ernest",
  prenom:"Rudasingwa",
  code:124347834
}]
const App = () => {
  const [student, setStudent] = useState(initial);
  const [name, setName] = useState({});
  const onSubmit = (e) => {
    e.preventDefault();
    if(!name.nom || !name.prenom || !name.code){
    return  alert("Please Enter the student info")
    }
    e.target.reset();
    setStudent((p) => [...p, name]);
    setName({})
    console.log(student)
  };
  const onChange = (e) => {
    setName(obj=>({...obj,[e.target.name]:e.target.value}));
  };
  const Array = student.map((i) => <tr><td>{i.nom}</td><td>{i.prenom}</td><td>{i.code}</td></tr>);
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <table>
          <tr className="rowTitle">
            <td className="title">Examen</td>
            <td colspan="3"></td>
          </tr>
          <tr className="header"><th>
          <label>nom: </label>
            <input type="text" name="nom" onChange={onChange} />
            </th>
            <th>
          <label>Prenom: </label>
            <input type="text" name="prenom" onChange={onChange} />
            </th><th>
          <label>Code: </label>
            <input type="number" name="code" onChange={onChange} />
            </th>
            <th>
            <button>Ajouter</button>
            </th></tr>
            
        </table>
        <h1>Liste des etudiants: </h1>
        <table className="students">
            <tr><td>Nom</td><td>Prenom</td><td>Code</td></tr>
            {Array}
        </table>
      </form>
    </div>
  );
};

export default App;
