import { Container, Row, Col } from "react-bootstrap";

const Home: React.FC = (): JSX.Element => {
  const imageUrls: string[] = [
    "/imgs/g-1.jpg",
    "/imgs/g-2.jpg",
    "/imgs/g-3.jpg",
    "/imgs/g-4.jpg",
    "/imgs/g-5.jpg",
    "/imgs/g-6.jpg",
    "/imgs/g-7.jpg",
    "/imgs/g-8.jpg",
    "/imgs/g-9.jpg",
  ];

  return (
    <Container className="vh-100">
      <Row>
        <Col>
          <h1>The HD DVD Store</h1>
          <p className="fs-3 text-center mt-4">
            Welcome to the HD DVD Store! An homage to the short-lived disc
            format that I have nostalgia for.
          </p>
        </Col>
      </Row>
      <Row className="g-2">
        {imageUrls.map((url, index) => (
          <Col xs={url === "/imgs/g-5.jpg" ? 12 : 6} md={4} key={index}>
            <img src={url} className="img-fluid rounded-3" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
