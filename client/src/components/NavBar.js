import * as React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar
            variant='regular'
            style={{marginTop: '10px'}}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BABY PRODUCTS
          </Typography>
          <Button color="inherit" component={Link} to='/'>PRODUCTS</Button>
          <Button color="inherit" component={Link} to='/addnewproduct'>ADD NEW PRODUCT</Button>
          <Button color="inherit" component={Link} to='/contact'>Contact</Button>
        </Toolbar>
    </Box>
  );
}