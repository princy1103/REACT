import React, { useState } from "react";
import { Container, Button, Form, Row, Col, Badge } from "react-bootstrap";
import ExtensionGroup from "./ExtensionGroup";

function LocalBoxMiner() {

  const [files, setFiles] = useState([]);
  const [filter, setFilter] = useState(""); 
  
  function getExt(name) {
    let dot = name.lastIndexOf(".");
    if (dot <= 0) return "no-ext";
    return name.slice(dot + 1).toLowerCase();
  }

function handleFiles(fileList) {
  let arr = Array.from(fileList).map(f => ({
    name: f.name,
    size: f.size,
    ext: getExt(f.name)
  }));
  setFiles(prev => [...prev, ...arr]);  
}

  let grouped = {};
  files.forEach(f => {
    if (!grouped[f.ext]) grouped[f.ext] = [];
    grouped[f.ext].push(f);
  });

  let exts = Object.keys(grouped).filter(ext =>
    ext.includes(filter.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h2>LocalBox Miner</h2>
      <p className="text-muted">Sort files by extension</p>

      <Row className="mb-3">
        <Col sm={6}>
          <Form.Control
            type="file"
            multiple
            onChange={e => handleFiles(e.target.files)}
          />
        </Col>
        <Col sm={3}>
          <Form.Control
            type="text"
            placeholder="Filter by extension (e.g. jpg)"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </Col>
        <Col sm={3}>
          <Button variant="dark" className="w-100" onClick={() => setFiles([])}>
            Clear All
          </Button>
        </Col>
      </Row>

      <p>
        <Badge bg="secondary">{files.length} files</Badge>{" "}
        <Badge bg="info">{Object.keys(grouped).length} extensions</Badge>
      </p>

      {files.length === 0 ? (
        <p className="text-muted">No files selected yet.</p>
      ) : exts.length === 0 ? (
        <p className="text-muted">No matching extensions.</p>
      ) : (
        exts.map(ext => (
          <ExtensionGroup key={ext} ext={ext} items={grouped[ext]} />
        ))
      )}
    </Container>
  );
}

export default LocalBoxMiner;
