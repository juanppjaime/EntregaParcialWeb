import React from "react";
import { FormattedMessage } from "react-intl";

function RobotDetail({ robot }) {
  return (
    <div className="robot-card" style={cardStyle}>
      <h2 style={{textAlign:'center'}}>{robot.nombre}</h2>
      <img 
        src={'https://raw.githubusercontent.com/fai-aher/T34-Wiki-Backup/refs/heads/main/images/robot'+ robot.id + '.png'  }
        alt={robot.humor} 
        style={{  width: '160px', 
          height: '160px', 
          border: '4px solid #333', 
          marginBottom: '20px', 
          display: 'block', 
          margin: 'auto'
}} 
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{textAlign:'justify'}}>→ <strong><FormattedMessage id="Year of manufacture" />:</strong> {robot.añoFabricacion}</li>
        <li style={{textAlign:'justify'}}>→ <strong><FormattedMessage id="Proccessing capacity" />:</strong> {robot.capacidadProcesamiento}</li>
        <li style={{textAlign:'justify'}}>→ <strong><FormattedMessage id="Humor" />:</strong> {robot.humor}</li>
      </ul>
      <p style={{textAlign:'justify'}}>{robot.description}</p>
    </div>
  );
}

const cardStyle = {
  backgroundColor: '#f2f2f2', 
  border: '2px solid #333', 
  padding: '20px', 
  textAlign: 'left',
  width:'380px'

};

export default RobotDetail;
