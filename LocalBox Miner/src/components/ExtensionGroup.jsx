import React, { useState } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";

function ExtensionGroup({ ext, items }) {
  const [show, setShow] = useState(true);

  return (
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-between">
        <b>.{ext}</b> ({items.length})
        <Button
          size="sm"
          variant="outline-secondary"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "Show"}
        </Button>
      </Card.Header>

      {show && (
        <ListGroup>
          {items.map((file, i) => (
            <ListGroup.Item key={i}>
              {file.name} <span className="text-muted">({file.size} bytes)</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Card>
  );
}

export default ExtensionGroup;
