import { AutoStoriesTwoTone } from '@mui/icons-material'
import { AppBar, Avatar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
// import  AutoStoriesTwoTone from '@material-ui/icons';
// import aavatar from '.\Image\aavatar.jpg'

<Avatar alt="Avatar" src="/path/to/image.jpg" />

function Navbar() {
  return (
    <div>
      <AppBar style={{ background: "linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)" }}>
        <Toolbar >
        <Avatar style={{background:'pink'}}>
        <IconButton>
            <AutoStoriesTwoTone/>
        </IconButton>
        </Avatar>
          <Typography >
            
            BIBLIOTIC
            
          </Typography>
          <div style={{marginLeft:'80%'}}>
          <Link to = {'/'}>

          <Button style={{color:"white"}}>HOME</Button>
          </Link>
          <Link to = {'/aboutus'} >
            <Button style={{color:"white"}}> About</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <br /><br />
    </div>
  )
}

export default Navbar
