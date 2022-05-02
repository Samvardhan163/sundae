import Col from "react-bootstrap/Col";
function toppingsOptions({ name, imagePath }) {
  return (
    <div>
      <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}></Col>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} toppings`}
      ></img>
    </div>
  );
}

export default toppingsOptions;
