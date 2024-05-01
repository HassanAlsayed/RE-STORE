import { Typography } from "@mui/material";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import HandleErrors from "../HandleErrors";

function About() {
  const {handleApiError} = HandleErrors();

  return (
    <Container>
      <Typography gutterBottom variant="h2">Errors for testing purposes</Typography>
      <ButtonGroup>
      <Button variant="contained" onClick={() => handleApiError(400)} style={{ backgroundColor: '#1E90FF', height: '40px', cursor:'pointer',width:'200px' }}>Test 400 Error</Button>
      <Button variant="contained" onClick={() => handleApiError(401)} style={{ backgroundColor: '#1E90FF', height: '40px', cursor:'pointer',width:'200px' }}>Test 401 Error</Button>
      <Button variant="contained" onClick={() => handleApiError(404)} style={{ backgroundColor: '#1E90FF', height: '40px', cursor:'pointer',width:'200px' }}>Test 404 Error</Button>
      <Button variant="contained" onClick={() => handleApiError(500)} style={{ backgroundColor: '#1E90FF', height: '40px', cursor:'pointer',width:'200px'  }}>Test 500 Error</Button>
      <Button variant="contained" onClick={() => handleApiError("ValidationError")} style={{ backgroundColor: '#1E90FF', height: '40px', cursor:'pointer',width:'200px' }}>Test Validation Error</Button>

      </ButtonGroup>
    </Container>
  );
}

export default About;
