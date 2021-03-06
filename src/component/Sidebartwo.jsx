import React from 'react'
import Sidebarheadertwo from './Sidebarheadertwo'
import Sidebarfriends from './Sidebarfriends'
import { CloseButton } from 'react-bootstrap'


const Sidebartwo = () => {
    return (
        <div className="container alpha-wraper row rounded ">
            <div   className="coverd col-4 col-md-7 col-lg-4 col-xl-4 pt-4 me-5 d-none d-md-block d-lg-block">
            <CloseButton className="float-end "/>
            <Sidebarheadertwo />
            <Sidebarfriends />
            </div>
        </div>
    )
}

export default Sidebartwo
