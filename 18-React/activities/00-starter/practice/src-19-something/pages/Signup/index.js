import React, {useState} from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
  
const Signup = () => {
  const [username,setUsername] = useState()
  const [pass,setPass] = useState()

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username: " + username.username)
    console.log("pass: " + pass.pass)
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input className="form-control" 
              type="text" 
              placeholder="Username" 
              name="username" 
              onChange={e => setUsername({username: e.target.value})}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPass({pass: e.target.value})}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
  <h3>Hello {username.username}</h3>
          <p>I probably shouldn't tell you this, but your password is {pass.pass}!</p>
        </Container>
      </form>
    </div>
  );
};

export default Signup;