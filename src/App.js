import React, { Component } from 'react';
import logo from './logo.svg';
import Hello from './Hello';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nombre: '',
      apellido: '',
      telefono: '',
      listado: [],
      id: 0
    };
  }

  obtenerDatos()
  {
    fetch("http://www.raydelto.org/agenda.php").then(
      (resultado) => resultado.json()
    ).then((resultado)=>{
      this.setState({listado: resultado});
      let contacto = resultado[this.state.id];
      // let contacto =     {
      //   nombre:"Rufo", 
      // apellido:"Lopez", 
      // telefono:"333-444-4444"
      // }

      this.setState({
        nombre: contacto.nombre, 
        apellido: contacto.apellido,
        telefono: contacto.telefono});
    });

    this.setState({
      nombre:"Rufo", 
      apellido:"Lopez", 
      telefono:"333-444-4444",

      });

  }


  componentWillMount()
  {
    this.obtenerDatos();
  }

  siguiente()
  {
    console.log("SIGUIENTE");
    this.setState({id: this.state.id +1});
    const id = this.state.id;
    console.log(this.state.listado);
    console.log(id);

    if(this.state.listado[id])
    {
      this.setState({
        nombre: this.state.listado[id].nombre,
        apellido: this.state.listado[id].apellido,
        telefono: this.state.listado[id].telefono
      });  
    }
  }

  render() {
    return (
      <div>
        <Hello 
        nombre={this.state.nombre}
        apellido={this.state.apellido}
        telefono={this.state.telefono}
         />
        <p>
          
          <button onClick={this.siguiente.bind(this)}>Siguiente Contacto</button>
        </p>
      </div>
    );
  }
}


// const App = () =>{
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
