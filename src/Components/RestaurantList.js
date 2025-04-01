import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,

  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import {
  AccessTime,
  LocalOffer,
  Favorite,
  FavoriteBorder,
  Restaurant,
  Search,
  LocalPizza,
  RestaurantMenu,
  LocalBar,
  BakeryDining,
  LocalDining,
} from '@mui/icons-material';
import './RestaurantList.css';

const restaurants = [
  {
    id: 1,
    name: "The Gourmet Kitchen",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    rating: 4.8,
    cuisine: "Fine Dining",
    deliveryTime: "30-40 min",
    minOrder: "$20",
    distance: "1.2 km",
    trending: true
  },
  {
    id: 2,
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    rating: 4.6,
    cuisine: "Japanese",
    deliveryTime: "25-35 min",
    minOrder: "$15",
    distance: "0.8 km",
    trending: true
  },
  {
    id: 3,
    name: "Pizza Paradise",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    rating: 4.5,
    cuisine: "Italian",
    deliveryTime: "20-30 min",
    minOrder: "$12",
    distance: "1.5 km",
    trending: false
  },
  {
    id: 4,
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    rating: 4.7,
    cuisine: "Indian",
    deliveryTime: "35-45 min",
    minOrder: "$18",
    distance: "2.0 km",
    trending: true
  }
];

const categories = [
  {
    id: 1,
    title: "Fast Food",
    icon: <Restaurant />,
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    description: "Quick bites and comfort food"
  },
  {
    id: 2,
    title: "Pizza",
    icon: <LocalPizza />,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    description: "Authentic Italian pizzas"
  },
  {
    id: 3,
    title: "Asian",
    icon: <RestaurantMenu />,
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de",
    description: "Sushi, noodles and more"
  },
  {
    id: 4,
    title: "Fine Dining",
    icon: <LocalDining />,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    description: "Elegant dining experience"
  },
  {
    id: 5,
    title: "Bakery",
    icon: <BakeryDining />,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    description: "Fresh bread and pastries"
  },
  {
    id: 6,
    title: "Bars & Pubs",
    icon: <LocalBar />,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
    description: "Drinks and nightlife"
  }
];

const RestaurantList = () => {
 
  const [isLoaded, setIsLoaded] = useState(false);
  const [favorites, setFavorites] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleFavorite = (e, id) => {
    e.preventDefault();
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Delicious Food Delivered To Your Doorstep</h1>
          <p className="hero-subtitle">
            Choose from thousands of restaurants and get your favorite meals delivered
          </p>
          <div className="search-bar">
            <TextField
              fullWidth
              placeholder="Search for restaurants or cuisines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              sx={{ 
                '& .MuiOutlinedInput-root': { 
                  border: 'none',
                  '& fieldset': { border: 'none' }
                },
                '& .MuiOutlinedInput-input': {
                  padding: '12px 14px'
                }
              }}
            />
            <Button 
              variant="contained" 
              className="search-button"
              sx={{ 
                bgcolor: '#ff4757',
                '&:hover': { bgcolor: '#ff3747' },
                minWidth: '120px'
              }}
            >
              Search
            </Button>
          </div>
        </div>
      </section>

      <Container maxWidth="lg">
        <section className="categories-section">
          <h2 className="section-title">Explore Categories</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.title} loading="lazy" />
                </div>
                <div className="category-content">
                  <Box sx={{ mb: 1, color: '#ff4757' }}>
                    {category.icon}
                  </Box>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Popular Restaurants</h2>
          <div className="restaurant-grid">
            {restaurants.map((restaurant, index) => (
              <Card
                key={restaurant.id}
                component={Link}
                to={`/restaurant/${restaurant.id}`}
                className="restaurant-card"
                sx={{ textDecoration: 'none' }}
              >
                <div className="restaurant-image">
                  <img src={restaurant.image} alt={restaurant.name} loading="lazy" />
                  <IconButton
                    className="favorite-button"
                    onClick={(e) => toggleFavorite(e, restaurant.id)}
                    size="small"
                  >
                    {favorites[restaurant.id] ? (
                      <Favorite sx={{ color: '#ff4757' }} />
                    ) : (
                      <FavoriteBorder />
                    )}
                  </IconButton>
                  {restaurant.trending && (
                    <div className="trending-badge">Trending</div>
                  )}
                </div>
                <CardContent className="restaurant-info">
                  <Typography variant="h6" className="restaurant-title">
                    {restaurant.name}
                  </Typography>

                  <div className="restaurant-meta">
                    <div className="rating-badge">
                      <span>★</span> {restaurant.rating}
                    </div>
                    <span className="cuisine-tag">{restaurant.cuisine}</span>
                  </div>

                  <div className="delivery-info">
                    <span className="delivery-time">
                      <AccessTime fontSize="small" />
                      {restaurant.deliveryTime}
                    </span>
                    <span className="min-order">
                      <LocalOffer fontSize="small" />
                      Min. {restaurant.minOrder}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default RestaurantList; 