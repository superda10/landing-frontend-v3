import React from 'react'
import classes from './News.module.scss'
import { Container } from '@mui/material'
import { News } from 'views/Home/components'

const NewsPage = () => {
  return (
    <div className={classes.container}>
      <Container>
        <News />
      </Container>
     </div>

  )
}

export default NewsPage
