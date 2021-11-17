import React from 'react'
import Sidebarheader from './Sidebarheader'
import Sidebarfriends from './Sidebarfriends'
import { useState } from 'react'
import { CloseButton, Container } from 'react-bootstrap'



const Sidebar = () => {
    const [Sidebar, setShow] = useState(false);

  const handleClose = () => (setShow(false));
    return (
        <Container className="alpha-wraper row rounded ">
            <div   className="coverd col-4 col-sm-12 col-md-7 col-lg-4 col-xl-4 pt-4 d-none d-md-block d-lg-block">
            <CloseButton type="close" className="float-end btn"  onClick={handleClose} />
            <Sidebarheader />
            <Sidebarfriends />
            </div>
        </Container>
    )
}

export default Sidebar
