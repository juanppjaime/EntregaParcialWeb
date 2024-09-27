import React, { useEffect, useState } from "react";
import RobotDetail from './RobotDetail'; 
import { FormattedMessage } from "react-intl";

function RobotList() {
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null); 

  useEffect(() => {
    const URL = "http://localhost:3001/robots"; 

    fetch(URL)
      .then((response) => response.json())
      .then((data) => setRobots(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSelectRobot = (robot) => {
    setSelectedRobot(robot);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Adopta un Robot con Robot Lovers!</h1>
      <hr />
      <div className="banner" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img 
          src="/bannerRobots.png" 
          alt="robots" 
          style={{ width: '100%', height: 'auto', maxWidth: '800px' }} 
        />
      </div>

      <div className="content" style={contentStyle}>

        <div className="robot-table" style={tableContainerStyle}>
          <table className="table" style={tableStyle}>
            <thead>
              <tr style={{ backgroundColor: 'black'}}>
                <th><FormattedMessage id="ID" /></th>
                <th><FormattedMessage id="Name" /></th>
                <th><FormattedMessage id="Model" /></th>
                <th><FormattedMessage id="Manufacturing Company" /></th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id} onClick={() => handleSelectRobot(robot)} style={{ cursor: 'pointer' }}>
                  <td>{robot.id}</td>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="robot-detail" style={detailContainerStyle}>
          {selectedRobot ? (
            <RobotDetail robot={selectedRobot} />
          ) : (
            <p style={{ textAlign: 'center' }}>Selecciona un robot para ver los detalles.</p>
          )}
        </div>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
}

const contentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '20px',
};

const tableContainerStyle = {
  flex: 1,
  overflowX: 'auto',
};

const tableStyle = {
  margin: '0 auto', borderCollapse: 'collapse', width: '100%'
};

const detailContainerStyle = {
  flex: 1,
  padding: '20px',
};

export default RobotList;
