import React, { useEffect, useState } from "react";

function RobotList() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const URL = "/robots.json"; 

    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => setRobots(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1 style={{textAlign:'center'}}>Adopta un Robot con Robot Lovers!</h1>
      <hr />
      <img src="https://www.shutterstock.com/image-vector/set-cute-vintage-robots-banner-260nw-746786869.jpg" alt="robots" style={{ width: '2000px', height:'400px' }} />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Empresa Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr key={robot.id}>
              <td>{robot.id}</td>
              <td>{robot.nombre}</td>
              <td>{robot.modelo}</td>
              <td>{robot.empresaFabricante}</td>
              <td>
                <a href={`/robots/${robot.id}`}>Ver Detalles</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RobotList;
