import { Col, Row } from "react-bootstrap";
import storeItems from "../data/movies.json";
import StoreItem from "../components/StoreItem";

const Store: React.FC = (): JSX.Element => {
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
