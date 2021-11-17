import React from 'react'
import Nav from 'react-bootstrap/Nav'

const Tabs = () => {
    return (
      <div>
        <Nav  variant="pills "  defaultActiveKey="/home">
          <Nav.Item className="pe-2">
            <Nav.Link className="btn btn-light text-black" href="/planets">PLANET</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link className="btn btn-light text-black" href="/character" >CHARACTERS</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
}

export default Tabs
