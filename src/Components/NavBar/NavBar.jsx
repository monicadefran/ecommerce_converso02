import React , { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import TotalItems from '../CartContent/TotalItems';

const drawerWidth = 240;


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.primary, // Establecer el color a negro
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'primary',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const IconsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const IconSeparator = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

const DrawerContainer = styled('div')({
  width: drawerWidth,
});



export default function NavBar() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  }; 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#ffffff' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            onClick={handleDrawerToggle} // Asignar la función al evento onClick
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', fontWeight: 'bold', color:'black' } }}
          >
            <Link to='/'>CONVERSO</Link>
          </Typography>
           {/* Search bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconsWrapper>
            <IconButton>
              {/* Adding the fake number elements  */}
              <Badge badgeContent={<TotalItems />} color="success">
              <Link to={"/Cart"}><ShoppingCartIcon /></Link>
              </Badge>
            </IconButton>
            <IconSeparator />
            <IconButton>
              <PermIdentityIcon />
            </IconButton>
          </IconsWrapper>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen} // Utilizar el estado para controlar la apertura/cierre del Drawer
        onClose={handleDrawerToggle} // Asignar la función al evento onClose
        variant="temporary"
        sx={{ width: drawerWidth }}
      >
        <DrawerContainer>
          <List>
            <ListItem button>
            <Link to={"/Products"}><ListItemText primary="Mujer" /></Link>
              
            </ListItem>
            <ListItem button>
              <ListItemText primary="Hombre" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Niños" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Personalizar" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Edicion Limitada" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Explorar" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Rebajas" />
            </ListItem>
          </List>
        </DrawerContainer>
      
       
      </Drawer>
    </Box>
  );
}