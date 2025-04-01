import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
  IconButton,
  Tab,
  Tabs,
} from '@mui/material';
import { AddShoppingCart, Favorite, FavoriteBorder } from '@mui/icons-material';
import './Menu.css';

const menuCategories = ['All', 'Pizza', 'Burgers', 'Sushi', 'Indian', 'Desserts'];

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 12.99,
    description: "Fresh tomatoes, mozzarella, basil, and olive oil",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80",
    isVeg: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Classic Cheeseburger",
    category: "Burgers",
    price: 9.99,
    description: "Beef patty, cheddar cheese, lettuce, tomato, and special sauce",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80",
    isVeg: false,
    rating: 4.3,
  },
  {
    id: 3,
    name: "Dragon Roll",
    category: "Sushi",
    price: 15.99,
    description: "Eel, cucumber, avocado topped with tobiko",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80",
    isVeg: false,
    rating: 4.7,
  },

  {
    id: 4,
    name: " Roll",
    category: "Indian",
    price: 15.99,
    description: "Eel, cucumber, avocado topped with tobiko",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80",
    isVeg: false,
    rating: 4.7,
  },
 
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const toggleFavorite = (itemId) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const filteredItems = menuItems.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
        Our Menu
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          {menuCategories.map((category) => (
            <Tab 
              key={category} 
              label={category} 
              value={category}
              sx={{ 
                '&.Mui-selected': { 
                  color: '#ff4757',
                }
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {filteredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {item.name}
                  </Typography>
                  <IconButton 
                    onClick={() => toggleFavorite(item.id)}
                    color="primary"
                  >
                    {favorites.includes(item.id) ? <Favorite /> : <FavoriteBorder />}
                  </IconButton>
                </Box>
                <Typography color="text.secondary" paragraph>
                  {item.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                  <Chip 
                    label={item.isVeg ? "Vegetarian" : "Non-Veg"}
                    color={item.isVeg ? "success" : "error"}
                    size="small"
                  />
                  <Chip 
                    label={`★ ${item.rating}`}
                    color="primary"
                    size="small"
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    ${item.price}
                  </Typography>
                  <Button 
                    variant="contained" 
                    startIcon={<AddShoppingCart />}
                    sx={{ 
                      bgcolor: '#ff4757',
                      '&:hover': {
                        bgcolor: '#ff3747'
                      }
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Menu; 