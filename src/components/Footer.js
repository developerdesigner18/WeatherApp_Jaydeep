import React from "react";

import Card from "react-bootstrap/Card";

export default function Footer() {
  return (
    <Card bg="dark" style={{ borderRadius: "inherit" }}>
      <Card.Body>
        <Card.Title
          className="text-white"
          style={{ textAlign: "center", fontWeight: "200" }}
        >
          Weather
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
