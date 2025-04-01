import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Chip,
  Rating,
  Tabs,
  Tab,
  Button,
  IconButton,
  Paper,

  useTheme,
} from '@mui/material';
import {
  AccessTime,
  LocalOffer,
  Favorite,
  FavoriteBorder,
  ShoppingCart,
  Restaurant,

  Circle,
  Stop,
} from '@mui/icons-material';

// Sample restaurant data (you can replace this with API calls)
const restaurantData = {
 
  name: "The Gourmet Kitchen",
  image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  rating: 4.8,
  cuisine: "Fine Dining",
  deliveryTime: "30-40 min",
  minOrder: "$20",
  distance: "1.2 km",
  description: "Experience fine dining at its best with our curated menu of international cuisines.",
  categories: [
    {
      id: 'popular',
      name: 'Popular Dishes',
      items: [
        {
          id: 1,
          name: 'Signature Burger',
          description: 'Premium beef patty with special sauce',
          price: 14.99,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
          isVeg: false,
          rating: 4.9,
          popular: true
        },
        {
          id: 2,
          name: 'Truffle Pasta',
          description: 'Handmade pasta with black truffle',
          price: 18.99,
          image: 'https://images.unsplash.com/photo-1556760544-74068565f05c',
          isVeg: true,
          rating: 4.8,
          popular: true
        }
      ]
    },
    {
      id: 'starters',
      name: 'Starters',
      items: [
        {
          id: 3,
          name: 'Bruschetta',
          description: 'Toasted bread with tomatoes and herbs',
          price: 8.99,
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f',
          isVeg: true,
          rating: 4.5
        },
        {
          id: 4,
          name: 'Chicken Wings',
          description: 'Spicy BBQ wings with dip',
          price: 12.99,
          image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2',
          isVeg: false,
          rating: 4.7
        }
      ]
    },
    {
      id: 'mains',
      name: 'Main Course',
      items: [
        {
          id: 5,
          name: 'Grilled Salmon',
          description: 'Fresh Atlantic salmon with herbs',
          price: 24.99,
          image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
          isVeg: false,
          rating: 4.8
        },
        {
          id: 6,
          name: 'Mushroom Risotto',
          description: 'Creamy risotto with wild mushrooms',
          price: 16.99,
          image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
          isVeg: true,
          rating: 4.6
        }
      ]
    },
    {
      id: 'desserts',
      name: 'Desserts',
      items: [
        {
          id: 7,
          name: 'Tiramisu',
          description: 'Classic Italian dessert',
          price: 8.99,
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
          isVeg: true,
          rating: 4.9
        },
        {
          id: 8,
          name: 'Chocolate Lava Cake',
          description: 'Warm chocolate cake with ice cream',
          price: 9.99,
          image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c',
          isVeg: true,
          rating: 4.8
        }
      ]
    }
  ]
};

const RestaurantDetails = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Restaurant Header */}
      <Paper 
        elevation={3}
        sx={{
          p: 3,
          mb: 4,
          bgcolor: theme.palette.background.paper,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              height="250"
              image={restaurantData.image}
              alt={restaurantData.name}
              sx={{ borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Typography variant="h4" gutterBottom>
                {restaurantData.name}
              </Typography>
              <IconButton 
                onClick={() => setFavorite(!favorite)}
                sx={{ 
                  color: favorite ? 'error.main' : 'inherit',
                  '&:hover': { color: 'error.main' }
                }}
              >
                {favorite ? <Favorite /> : <FavoriteBorder />}
              </IconButton>
            </Box>
            <Typography variant="subtitle1" color="text.secondary" paragraph>
              {restaurantData.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Chip icon={<Restaurant />} label={restaurantData.cuisine} />
              <Chip icon={<AccessTime />} label={restaurantData.deliveryTime} />
              <Chip icon={<LocalOffer />} label={`Min. order ${restaurantData.minOrder}`} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Rating value={restaurantData.rating} precision={0.1} readOnly />
              <Typography variant="body2" color="text.secondary">
                ({restaurantData.rating})
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Menu Categories */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={selectedCategory} 
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {restaurantData.categories.map((category, index) => (
            <Tab 
              key={category.id} 
              label={category.name}
              sx={{ 
                textTransform: 'none',
                fontWeight: 'medium',
                minWidth: 120
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* Menu Items */}
      <Grid container spacing={3}>
        {restaurantData.categories[selectedCategory].items.map((item) => (
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
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  {item.isVeg ? (
                    <Circle color="success" sx={{ fontSize: 16, mr: 1 }} />
                  ) : (
                    <Stop color="error" sx={{ fontSize: 16, mr: 1 }} />
                  )}
                  <Typography variant="h6">
                    {item.name}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {item.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Rating value={item.rating} size="small" readOnly />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({item.rating})
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    ${item.price}
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCart />}
                    size="small"
                  >
                    Add
                  </Button>
                </Box>
                {item.popular && (
                  <Chip
                    label="Popular"
                    color="error"
                    size="small"
                    sx={{ position: 'absolute', top: 12, right: 12 }}
                  />
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RestaurantDetails; 