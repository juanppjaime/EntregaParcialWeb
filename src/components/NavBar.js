import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/robots">Robot Gallery</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
