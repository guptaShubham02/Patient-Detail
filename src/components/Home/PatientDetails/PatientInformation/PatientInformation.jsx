import { Grid } from '@mui/material'
import React from 'react'
import Profile from './Profile/Profile'

const patientInformation = ({findPatient}) => {
  return (
    <Grid item xs={8}>
      <Profile findPatient={findPatient} />
    </Grid>
  )
}

export default patientInformation