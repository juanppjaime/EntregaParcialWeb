import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function RobotCard(props) {
  return (
    <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
      <Card.Img
        style={{ height: "14rem" }}
        src={props.robot.imagen}
        alt={props.robot.nombre}
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/robots/${props.robot.id}`}>
            {props.robot.nombre}
          </Link>
        </Card.Title>
        <Card.Text>Modelo: {props.robot.modelo}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RobotCard;
