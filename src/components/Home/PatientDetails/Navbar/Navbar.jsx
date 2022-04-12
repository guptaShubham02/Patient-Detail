import { Divider } from '@mui/material'
import React from 'react'
import MiddleNavbar from './MiddleNavbar/MiddleNavbar'
import TopNavbar from './TopNavbar/TopNavbar'

const Navbar = ({findPatient, patientHome}) => {
  return (
    <>

    <TopNavbar findPatient={findPatient} />
    <Divider/>
    <MiddleNavbar findPatient={findPatient} patientHome={patientHome}/>
    <Divider />
    </>
  )
}

export default Navbar