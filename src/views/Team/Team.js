import React from 'react'
import classes from './Team.module.scss'
import { Container } from '@mui/material'
import { TheTeam } from 'views/Home/components'

const Team = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <TheTeam />
      </div>
    </div>
  )
}

export default Team
