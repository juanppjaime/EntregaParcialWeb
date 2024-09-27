import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RobotDetail() {
  const { robotId } = useParams();
  const [robot, setRobot] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const URL = `/robots.json`; 

    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los detalles del robot");
        }
        return response.json();
      })
      .then((data) => {
        const foundRobot = data.find(r => r.id === parseInt(robotId));
        setRobot(foundRobot);
      })
      .catch((error) => setError(error.message));
  }, [robotId]);

    if (error) {
    return <div>Error {error}</div>;
    }

    if (!robot) {
    return <div>No han cargado los robots aún</div>;
    }

  return (
    <div className="robot-detail" style={{ display: 'flex', marginTop: '20px' }}>
  <div>
    <h2>Detalles del Robot</h2>
    <h3>{robot.nombre}</h3>
    <img src={robot.imagen} alt={robot.humor} style={{ width: '400px', height: '400px' }} />
    <p>{robot.description}</p>
  </div>
  <div style={{ marginLeft: '20px' }}>
    <h2>Características</h2>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h3>Año de Fabricación: {robot.añoFabricacion}</h3>
    <h3>Capacidad de Procesamiento: {robot.capacidadProcesamiento}</h3>
    <h3>Estado de Humor: {robot.humor}</h3>
  </div>
</div>

  );
}

export default RobotDetail;
