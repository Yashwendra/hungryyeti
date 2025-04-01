import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
} from '@mui/material';
import {
  ShoppingCart,
  Person,
  Menu as MenuIcon,
  Home,
  Restaurant,
  Receipt,
  Favorite,
  TableBar,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { useColorMode } from '../context/ThemeContext';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const navigate = useNavigate();
  const colorMode = useColorMode();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleProfileClick = () => {
    handleMenuClose();
    navigate('/profile');
  };

  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Menu', icon: <Restaurant />, path: '/menu' },
    { text: 'Book Table', icon: <TableBar />, path: '/book-table' },
    { text: 'Orders', icon: <Receipt />, path: '/orders' },
    { text: 'Favorites', icon: <Favorite />, path: '/favorites' },
  ];

  const renderMobileMenu = (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    >
      <List sx={{ width: 250 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            onClick={() => setMobileMenuOpen(false)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar position="fixed" sx={{ bgcolor: 'white', color: 'text.primary' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: '#ff4757',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.8rem',
          }}
        >
          The Hungry Yeti
        </Typography>

        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                startIcon={item.icon}
                sx={{
                  color: location.pathname === item.path ? '#ff4757' : 'inherit',
                  '&:hover': {
                    color: '#ff4757',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <IconButton
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
              <Person />
            </Avatar>
          </IconButton>

          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleMobileMenuToggle}
            >
              <MenuIcon />
            </IconButton>
          )}

          <IconButton
            onClick={colorMode.toggleColorMode}
            color="inherit"
            sx={{
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'rotate(180deg)',
              },
            }}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
      {renderMobileMenu}
    </AppBar>
  );
};

export default Header; 