import React from "react";
import { Container } from "react-bootstrap";

const Footer: React.FC = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-top">
      <Container>
        <p className="text-center my-auto py-3">
          &copy; {currentYear} HD DVD Store. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
