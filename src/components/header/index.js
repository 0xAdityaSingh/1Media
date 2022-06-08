import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './header.css';
const pages = ['Features', 'Pricing', 'Invite friends'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} style={{ background: 'white' }}>
        <Toolbar>
          <div className='appname' >1Media</div>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Button 
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, textTransform: 'none', fontFamily:'Montserrat', fontSize:15, color: 'black'}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Stack direction="row" spacing={2}>
          <Button variant="text" style={{textTransform: 'none', fontFamily:'Montserrat', fontSize:15, color: 'black'}} >Sign In</Button>
          
          <Button variant="contained" style={{textTransform: 'none',fontFamily:'Montserrat',fontSize:15,}} disableElevation>Create account</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header