import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Paper,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Fade,
  Slide,
  TextField,
  InputAdornment,
  Chip,
  Rating,
  Divider,
  Modal,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  RestaurantMenu,
  Delivery,
  LocalOffer,
  Star,
  ArrowForward,
  Search,
  FavoriteBorder,
  LocationOn,
  Timer,
  LocalDining,
  TrendingUp,
  LocalPizza,
  Fastfood,
  Restaurant,
  Coffee,
  EmojiFoodBeverage,
  LocalFireDepartment,
  ShoppingCart,
  Favorite,
  Circle,
  Stop,
  Close,
  RestaurantMenuOutlined,
  RamenDining,
  BakeryDining,
  SetMeal,
  LocalBar,
  Whatshot,
  MonetizationOn,
  LocalShipping,
  Info,
  CheckCircle,
} from '@mui/icons-material';
import { keyframes } from '@mui/system';

// Enhanced animations
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,0,0,0.1); }
  50% { transform: scale(1.05); box-shadow: 0 0 20px 10px rgba(0,0,0,0.1); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,0,0,0.1); }
`;

const fadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDietType, setSelectedDietType] = useState('All');
  const [selectedDish, setSelectedDish] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { name: 'All', icon: <LocalDining /> },
    { name: 'Pizza', icon: <LocalPizza /> },
    { name: 'Fast Food', icon: <Fastfood /> },
    { name: 'Fine Dining', icon: <Restaurant /> },
    { name: 'Cafe', icon: <Coffee /> },
    { name: 'Desserts', icon: <EmojiFoodBeverage /> },
    { name: 'Asian', icon: <RamenDining /> },
    { name: 'Bakery', icon: <BakeryDining /> },
    { name: 'Seafood', icon: <SetMeal /> },
    { name: 'Bar & Grill', icon: <LocalBar /> },
  ];

  const featuredRestaurants = [
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
    }
  ];

  const specialOffers = [
    {
      title: "Free Delivery",
      description: "On your first order",
      icon: <Delivery />,
      color: "linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)"
    },
    {
      title: "20% OFF",
      description: "For new customers",
      icon: <LocalOffer />,
      color: "linear-gradient(135deg, #4ECDC4 0%, #45B7D1 100%)"
    },
    {
      title: "Special Menu",
      description: "Chef's recommendations",
      icon: <RestaurantMenu />,
      color: "linear-gradient(135deg, #45B7D1 0%, #2E8BC0 100%)"
    }
  ];

  const popularMenuItems = [
    {
      id: 1,
      name: "Signature Burger",
      restaurant: "Burger House",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      price: "$12.99",
      rating: 4.9,
      calories: "650 cal",
      preparationTime: "15 min",
      isSpicy: true,
      discount: "15% OFF"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      restaurant: "Pizza Paradise",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
      price: "$14.99",
      rating: 4.7,
      calories: "800 cal",
      preparationTime: "20 min",
      isSpicy: false,
      discount: null
    },
    {
      id: 3,
      name: "Sushi Platter",
      restaurant: "Sushi Master",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
      price: "$24.99",
      rating: 4.8,
      calories: "520 cal",
      preparationTime: "25 min",
      isSpicy: false,
      discount: "Free Delivery"
    },
    {
      id: 4,
      name: "Spicy Ramen",
      restaurant: "Noodle House",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
      price: "$16.99",
      rating: 4.6,
      calories: "750 cal",
      preparationTime: "18 min",
      isSpicy: true,
      discount: null
    }
  ];

  const dietTypes = ['All', 'Non-Veg', 'Veg'];

  const nonVegMenuItems = [
    {
      id: 5,
      name: "Grilled BBQ Chicken",
      restaurant: "Smokehouse Grill",
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b",
      price: "$18.99",
      rating: 4.8,
      calories: "850 cal",
      preparationTime: "25 min",
      isSpicy: true,
      discount: "New",
      type: "non-veg",
      description: "Tender chicken marinated in BBQ sauce"
    },
    {
      id: 6,
      name: "Classic Beef Burger",
      restaurant: "Burger House",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      price: "$15.99",
      rating: 4.7,
      calories: "950 cal",
      preparationTime: "20 min",
      isSpicy: false,
      type: "non-veg",
      description: "Premium beef patty with fresh veggies"
    },
    {
      id: 7,
      name: "Butter Chicken",
      restaurant: "Indian Spice",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
      price: "$16.99",
      rating: 4.9,
      calories: "780 cal",
      preparationTime: "30 min",
      isSpicy: true,
      type: "non-veg",
      description: "Creamy tomato-based curry with tender chicken"
    },
    {
      id: 8,
      name: "Grilled Salmon",
      restaurant: "Ocean Fresh",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
      price: "$22.99",
      rating: 4.6,
      calories: "650 cal",
      preparationTime: "25 min",
      type: "non-veg",
      description: "Fresh Atlantic salmon with herbs"
    }
  ];

  const vegMenuItems = [
    {
      id: 9,
      name: "Paneer Tikka",
      restaurant: "Indian Spice",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
      price: "$14.99",
      rating: 4.7,
      calories: "550 cal",
      preparationTime: "20 min",
      isSpicy: true,
      type: "veg",
      description: "Grilled cottage cheese with spices"
    },
    {
      id: 10,
      name: "Mediterranean Falafel",
      restaurant: "Green House",
      image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb5",
      price: "$13.99",
      rating: 4.5,
      calories: "480 cal",
      preparationTime: "15 min",
      type: "veg",
      description: "Crispy chickpea patties with hummus"
    }
  ];

  // Add more vegetarian options
  const newVegMenuItems = [
    {
      id: 11,
      name: "Mushroom Risotto",
      restaurant: "Italian Bistro",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
      price: "$16.99",
      rating: 4.7,
      calories: "580 cal",
      preparationTime: "25 min",
      type: "veg",
      description: "Creamy arborio rice with wild mushrooms",
      ingredients: ["Arborio Rice", "Wild Mushrooms", "Parmesan", "White Wine", "Herbs"],
      allergens: ["Dairy"],
      dietaryInfo: ["Vegetarian", "Gluten-Free"]
    },
    {
      id: 12,
      name: "Buddha Bowl",
      restaurant: "Green House",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      price: "$15.99",
      rating: 4.8,
      calories: "450 cal",
      preparationTime: "15 min",
      type: "veg",
      description: "Nutritious bowl with quinoa and fresh vegetables",
      ingredients: ["Quinoa", "Avocado", "Chickpeas", "Kale", "Sweet Potato"],
      allergens: ["Nuts"],
      dietaryInfo: ["Vegan", "Gluten-Free"]
    },
    {
      id: 13,
      name: "Spinach Lasagna",
      restaurant: "Italian Bistro",
      image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0",
      price: "$17.99",
      rating: 4.6,
      calories: "680 cal",
      preparationTime: "35 min",
      type: "veg",
      description: "Layered pasta with spinach and ricotta",
      ingredients: ["Pasta", "Spinach", "Ricotta", "Tomato Sauce", "Mozzarella"],
      allergens: ["Dairy", "Gluten"],
      dietaryInfo: ["Vegetarian"]
    }
  ];

  // Add Chef's Special items
  const chefsSpecialItems = [
    {
      id: 14,
      name: "Truffle Pasta",
      restaurant: "The Gourmet Kitchen",
      image: "https://images.unsplash.com/photo-1556760544-74068565f05c",
      price: "$28.99",
      rating: 4.9,
      calories: "720 cal",
      preparationTime: "30 min",
      type: "veg",
      isChefSpecial: true,
      description: "Hand-crafted pasta with black truffle",
      ingredients: ["Fresh Pasta", "Black Truffle", "Parmesan", "Cream", "Wild Mushrooms"],
      allergens: ["Dairy", "Gluten"],
      dietaryInfo: ["Vegetarian"]
    },
    {
      id: 15,
      name: "Wagyu Steak",
      restaurant: "Smokehouse Grill",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947",
      price: "$49.99",
      rating: 5.0,
      calories: "850 cal",
      preparationTime: "35 min",
      type: "non-veg",
      isChefSpecial: true,
      description: "Premium grade Wagyu beef with truffle butter",
      ingredients: ["Wagyu Beef", "Truffle Butter", "Herbs", "Garlic"],
      allergens: ["Dairy"],
      dietaryInfo: ["High-Protein"]
    },
    {
      id: 16,
      name: "Seafood Paella",
      restaurant: "Ocean Fresh",
      image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a",
      price: "$34.99",
      rating: 4.8,
      calories: "780 cal",
      preparationTime: "40 min",
      type: "non-veg",
      isChefSpecial: true,
      description: "Traditional Spanish rice with fresh seafood",
      ingredients: ["Saffron Rice", "Shrimp", "Mussels", "Calamari", "Bell Peppers"],
      allergens: ["Shellfish"],
      dietaryInfo: ["Gluten-Free"]
    }
  ];

  const bakeryItems = [
    {
      id: 17,
      name: "French Croissant",
      restaurant: "Paris Bakery",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
      price: "$4.99",
      rating: 4.8,
      calories: "250 cal",
      preparationTime: "Fresh Daily",
      type: "veg",
      description: "Buttery, flaky French croissants",
      ingredients: ["Butter", "Flour", "Yeast", "Salt"],
      allergens: ["Gluten", "Dairy"],
      dietaryInfo: ["Vegetarian"],
      isFresh: true
    },
    {
      id: 18,
      name: "Sourdough Bread",
      restaurant: "Artisan Bakehouse",
      image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb",
      price: "$6.99",
      rating: 4.7,
      calories: "180 cal",
      preparationTime: "Fresh Daily",
      type: "veg",
      description: "Traditional sourdough bread with perfect crust",
      ingredients: ["Flour", "Sourdough Starter", "Salt"],
      allergens: ["Gluten"],
      dietaryInfo: ["Vegan"],
      isFresh: true
    },
    {
      id: 19,
      name: "Chocolate Danish",
      restaurant: "Sweet Heaven",
      image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812",
      price: "$5.99",
      rating: 4.9,
      calories: "320 cal",
      preparationTime: "Fresh Daily",
      type: "veg",
      description: "Flaky pastry filled with rich chocolate",
      ingredients: ["Butter", "Flour", "Chocolate", "Sugar"],
      allergens: ["Gluten", "Dairy"],
      dietaryInfo: ["Vegetarian"],
      isFresh: true
    }
  ];

  const seafoodItems = [
    {
      id: 20,
      name: "Grilled Lobster",
      restaurant: "Ocean's Finest",
      image: "https://images.unsplash.com/photo-1533682805518-564e714bf5cc",
      price: "$45.99",
      rating: 4.9,
      calories: "450 cal",
      preparationTime: "30 min",
      type: "non-veg",
      description: "Fresh lobster grilled with herb butter",
      ingredients: ["Lobster", "Herb Butter", "Lemon", "Garlic"],
      allergens: ["Shellfish", "Dairy"],
      dietaryInfo: ["High-Protein", "Gluten-Free"]
    },
    {
      id: 21,
      name: "Tuna Poke Bowl",
      restaurant: "Pacific Bistro",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      price: "$19.99",
      rating: 4.7,
      calories: "380 cal",
      preparationTime: "15 min",
      type: "non-veg",
      description: "Fresh tuna with avocado and sushi rice",
      ingredients: ["Tuna", "Avocado", "Rice", "Soy Sauce"],
      allergens: ["Fish", "Soy"],
      dietaryInfo: ["High-Protein", "Gluten-Free Option"]
    },
    {
      id: 22,
      name: "Seafood Platter",
      restaurant: "Ocean's Finest",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
      price: "$59.99",
      rating: 4.8,
      calories: "820 cal",
      preparationTime: "35 min",
      type: "non-veg",
      description: "Assorted seafood with dipping sauces",
      ingredients: ["Shrimp", "Calamari", "Fish", "Mussels"],
      allergens: ["Shellfish", "Fish"],
      dietaryInfo: ["High-Protein"]
    }
  ];

  const barAndGrillItems = [
    {
      id: 23,
      name: "Craft Beer Burger",
      restaurant: "The Rustic Grill",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      price: "$16.99",
      rating: 4.8,
      calories: "850 cal",
      preparationTime: "25 min",
      type: "non-veg",
      description: "Beer-infused beef patty with premium toppings",
      ingredients: ["Beef", "Craft Beer", "Cheese", "Bacon"],
      allergens: ["Dairy", "Gluten"],
      dietaryInfo: ["High-Protein"]
    },
    {
      id: 24,
      name: "BBQ Ribs",
      restaurant: "Smokehouse",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947",
      price: "$28.99",
      rating: 4.9,
      calories: "920 cal",
      preparationTime: "40 min",
      type: "non-veg",
      description: "Slow-cooked ribs with house BBQ sauce",
      ingredients: ["Pork Ribs", "BBQ Sauce", "Spices"],
      allergens: ["None"],
      dietaryInfo: ["High-Protein", "Gluten-Free"]
    },
    {
      id: 25,
      name: "Grilled Wings",
      restaurant: "The Rustic Grill",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
      price: "$14.99",
      rating: 4.7,
      calories: "650 cal",
      preparationTime: "20 min",
      type: "non-veg",
      description: "Spicy grilled wings with blue cheese dip",
      ingredients: ["Chicken Wings", "Hot Sauce", "Blue Cheese"],
      allergens: ["Dairy"],
      dietaryInfo: ["High-Protein", "Gluten-Free"]
    }
  ];

  // Add new items to allMenuItems
  const allMenuItems = [...popularMenuItems, ...nonVegMenuItems, ...vegMenuItems, ...newVegMenuItems, ...chefsSpecialItems, ...bakeryItems, ...seafoodItems, ...barAndGrillItems];

  // Filter menu items based on diet type
  const filteredMenuItems = selectedDietType === 'All' 
    ? allMenuItems 
    : allMenuItems.filter(item => 
        selectedDietType === 'Non-Veg' ? item.type === 'non-veg' : item.type === 'veg'
      );

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box sx={{ overflow: 'hidden', bgcolor: '#f8f9fa' }}>
      {/* Hero Section with Enhanced Design */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          pt: 15,
          pb: 20,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="rgba(255,255,255,0.05)" fill-rule="evenodd"/%3E%3C/svg%3E")',
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Slide direction="right" in={isLoaded} timeout={1000}>
                <Box>
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      fontWeight: 800,
                      mb: 2,
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      animation: `${fadeSlideIn} 1s ease-out`,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                    }}
                  >
                    Delicious Food
                    <br />
                    <span style={{ color: '#FFD700' }}>Delivered</span> To You
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 4,
                      opacity: 0.9,
                      animation: `${fadeSlideIn} 1s ease-out 0.3s`,
                      lineHeight: 1.6,
                    }}
                  >
                    Choose from thousands of restaurants and get your food delivered fast
                  </Typography>
                  
                  {/* Enhanced Search Bar */}
                  <Box 
                    sx={{ 
                      mb: 4,
                      animation: `${fadeSlideIn} 1s ease-out 0.6s`,
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        p: 0.5,
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: 3,
                        bgcolor: 'rgba(255,255,255,0.95)',
                      }}
                    >
                      <TextField
                        fullWidth
                        placeholder="Search for restaurants or dishes..."
                        variant="standard"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Search color="primary" />
                            </InputAdornment>
                          ),
                          disableUnderline: true,
                          sx: { px: 2 }
                        }}
                      />
                      <Button
                        variant="contained"
                        size="large"
                        sx={{
                          borderRadius: 2,
                          px: 4,
                          py: 1.5,
                          bgcolor: 'primary.main',
                          '&:hover': {
                            bgcolor: 'primary.dark',
                          },
                        }}
                      >
                        Search
                      </Button>
                    </Paper>
                  </Box>
                </Box>
              </Slide>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade in={isLoaded} timeout={1500}>
                <Box
                  sx={{
                    position: 'relative',
                    animation: `${float} 6s ease-in-out infinite`,
                    transform: 'perspective(1000px) rotateY(-5deg)',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                    alt="Hero"
                    style={{
                      width: '100%',
                      borderRadius: '20px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                      transform: 'translateZ(50px)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      background: 'linear-gradient(45deg, #FF6B6B, #FF8E8E)',
                      borderRadius: '50%',
                      width: 80,
                      height: 80,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                      animation: `${pulse} 2s infinite`,
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                      20% OFF
                    </Typography>
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxWidth="lg" sx={{ mt: -10, mb: 8, position: 'relative', zIndex: 1 }}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 4,
            bgcolor: 'white',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          }}
        >
          <Grid container spacing={2}>
            {categories.map((category, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Card
                  onClick={() => setSelectedCategory(category.name)}
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    cursor: 'pointer',
                    bgcolor: selectedCategory === category.name ? 'primary.light' : 'white',
                    color: selectedCategory === category.name ? 'primary.main' : 'text.primary',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  {category.icon}
                  <Typography variant="subtitle2" sx={{ mt: 1 }}>
                    {category.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      {/* Special Offers Section with Enhanced Design */}
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {specialOffers.map((offer, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Fade in={isLoaded} timeout={1000 + index * 500}>
                <Paper
                  sx={{
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    background: offer.color,
                    color: 'white',
                    borderRadius: 4,
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      p: 1.5,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.2)',
                      animation: `${pulse} 2s infinite`,
                    }}
                  >
                    {offer.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {offer.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {offer.description}
                    </Typography>
                  </Box>
                </Paper>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Popular Menu Items Section with Diet Type Filter */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
            Popular Menu Items
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                ml: 2,
                px: 2,
                py: 0.5,
                bgcolor: 'error.main',
                color: 'white',
                borderRadius: 2,
                fontSize: '0.9rem',
                verticalAlign: 'middle',
              }}
            >
              HOT & FRESH
            </Box>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
            Discover our most loved dishes from top restaurants
          </Typography>

          {/* Diet Type Filter */}
          <Box sx={{ display: 'flex', gap: 1, mb: 4, flexWrap: 'wrap' }}>
            {dietTypes.map((type) => (
              <Chip
                key={type}
                label={type}
                onClick={() => setSelectedDietType(type)}
                variant={selectedDietType === type ? 'filled' : 'outlined'}
                color={selectedDietType === type ? 'primary' : 'default'}
                icon={type === 'Veg' ? <Circle sx={{ color: 'success.main' }} /> : 
                      type === 'Non-Veg' ? <Stop sx={{ color: 'error.main' }} /> : null}
                sx={{ 
                  borderRadius: 2,
                  '& .MuiChip-icon': {
                    fontSize: '0.8rem'
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        <Grid container spacing={3}>
          {filteredMenuItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Fade in={isLoaded} timeout={1500 + index * 500}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={item.image}
                      alt={item.name}
                      sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    {item.discount && (
                      <Chip
                        label={item.discount}
                        color="error"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          bgcolor: 'rgba(255,255,255,0.95)',
                        }}
                      />
                    )}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        bgcolor: 'rgba(255,255,255,0.95)',
                        borderRadius: '50%',
                        width: 24,
                        height: 24,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {item.type === 'veg' ? (
                        <Circle sx={{ color: 'success.main', fontSize: '0.8rem' }} />
                      ) : (
                        <Stop sx={{ color: 'error.main', fontSize: '0.8rem' }} />
                      )}
                    </Box>
                    {item.isSpicy && (
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 16,
                          left: 16,
                          bgcolor: 'rgba(255,59,48,0.9)',
                          color: 'white',
                          px: 2,
                          py: 0.5,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                        }}
                      >
                        <LocalFireDepartment fontSize="small" />
                        <Typography variant="caption">Spicy</Typography>
                      </Box>
                    )}
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.restaurant}
                      </Typography>
                      {item.description && (
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontSize: '0.875rem' }}>
                          {item.description}
                        </Typography>
                      )}
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                      <Rating value={item.rating} precision={0.1} readOnly size="small" />
                      <Typography variant="body2" color="text.secondary">
                        ({item.rating})
                      </Typography>
                    </Box>

                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Timer sx={{ fontSize: 18, color: 'text.secondary', mr: 0.5 }} />
                          <Typography variant="body2" color="text.secondary">
                            {item.preparationTime}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          {item.calories}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold' }}>
                        {item.price}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton 
                          size="small"
                          sx={{
                            bgcolor: 'rgba(0,0,0,0.05)',
                            '&:hover': { bgcolor: 'rgba(0,0,0,0.1)' },
                          }}
                        >
                          <Favorite sx={{ fontSize: 20 }} />
                        </IconButton>
                        <Button
                          variant="contained"
                          startIcon={<ShoppingCart />}
                          sx={{
                            borderRadius: 2,
                            textTransform: 'none',
                          }}
                        >
                          Add
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Restaurants Section with Enhanced Design */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
            Featured Restaurants
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                ml: 2,
                px: 2,
                py: 0.5,
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 2,
                fontSize: '0.9rem',
                verticalAlign: 'middle',
              }}
            >
              TRENDING
            </Box>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
            Explore our top-rated restaurants and their special dishes
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1, mb: 4, flexWrap: 'wrap' }}>
            {['All', 'Nearest', 'Rating 4.5+', 'Free Delivery'].map((filter) => (
              <Chip
                key={filter}
                label={filter}
                onClick={() => {}}
                variant={filter === 'All' ? 'filled' : 'outlined'}
                color={filter === 'All' ? 'primary' : 'default'}
                sx={{ borderRadius: 2 }}
              />
            ))}
          </Box>
        </Box>
        
        <Grid container spacing={3}>
          {featuredRestaurants.map((restaurant, index) => (
            <Grid item xs={12} md={4} key={restaurant.id}>
              <Fade in={isLoaded} timeout={1500 + index * 500}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={restaurant.image}
                      alt={restaurant.name}
                      sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    {restaurant.trending && (
                      <Chip
                        icon={<TrendingUp />}
                        label="Trending"
                        color="primary"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          bgcolor: 'rgba(255,255,255,0.95)',
                        }}
                      />
                    )}
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                          {restaurant.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          {restaurant.cuisine}
                        </Typography>
                      </Box>
                      <IconButton 
                        size="small"
                        sx={{
                          bgcolor: 'rgba(0,0,0,0.05)',
                          '&:hover': {
                            bgcolor: 'rgba(0,0,0,0.1)',
                          },
                        }}
                      >
                        <FavoriteBorder />
                      </IconButton>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Rating
                        value={restaurant.rating}
                        precision={0.1}
                        readOnly
                        size="small"
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        ({restaurant.rating})
                      </Typography>
                    </Box>

                    <Divider sx={{ my: 2 }} />
                    
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Timer sx={{ fontSize: 20, color: 'text.secondary', mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {restaurant.deliveryTime}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <LocationOn sx={{ fontSize: 20, color: 'text.secondary', mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {restaurant.distance}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        mt: 3,
                        borderRadius: 2,
                        textTransform: 'none',
                        py: 1.5,
                      }}
                      endIcon={<ArrowForward />}
                    >
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Chef's Special Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
            Chef's Special
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                ml: 2,
                px: 2,
                py: 0.5,
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                color: 'white',
                borderRadius: 2,
                fontSize: '0.9rem',
                verticalAlign: 'middle',
              }}
            >
              PREMIUM
            </Box>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
            Exquisite dishes crafted by our master chefs
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {chefsSpecialItems.map((item, index) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Fade in={isLoaded} timeout={1500 + index * 500}>
                <Card
                  onClick={() => handleDishClick(item)}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={item.image}
                      alt={item.name}
                      sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      <Whatshot />
                      <Typography variant="subtitle2">Chef's Special</Typography>
                    </Box>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {item.name}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {item.restaurant}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {item.description}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                      <Rating value={item.rating} precision={0.1} readOnly />
                      <Typography variant="body2" color="text.secondary">
                        ({item.rating})
                      </Typography>
                    </Box>

                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Timer sx={{ fontSize: 20, color: 'text.secondary', mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {item.preparationTime}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold' }}>
                          {item.price}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<ShoppingCart />}
                      sx={{
                        mt: 2,
                        borderRadius: 2,
                        textTransform: 'none',
                        py: 1.5,
                        background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FFA500, #FF8C00)',
                        },
                      }}
                    >
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Bakery Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
            Fresh from the Bakery
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                ml: 2,
                px: 2,
                py: 0.5,
                background: 'linear-gradient(45deg, #8B4513, #D2691E)',
                color: 'white',
                borderRadius: 2,
                fontSize: '0.9rem',
                verticalAlign: 'middle',
              }}
            >
              FRESH DAILY
            </Box>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
            Freshly baked breads and pastries made with love
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {bakeryItems.map((item, index) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Fade in={isLoaded} timeout={1500 + index * 500}>
                <Card
                  onClick={() => handleDishClick(item)}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={item.image}
                      alt={item.name}
                      sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    {item.isFresh && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          background: 'linear-gradient(45deg, #8B4513, #D2691E)',
                          color: 'white',
                          px: 2,
                          py: 0.5,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                        }}
                      >
                        <BakeryDining />
                        <Typography variant="subtitle2">Fresh Today</Typography>
                      </Box>
                    )}
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.restaurant}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                      <Rating value={item.rating} precision={0.1} readOnly />
                      <Typography variant="body2" color="text.secondary">
                        ({item.rating})
                      </Typography>
                    </Box>

                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Timer sx={{ fontSize: 20, color: 'text.secondary', mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {item.preparationTime}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold' }}>
                          {item.price}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<ShoppingCart />}
                      sx={{
                        mt: 2,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                      }}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Seafood Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
            Fresh Seafood
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                ml: 2,
                px: 2,
                py: 0.5,
                background: 'linear-gradient(45deg, #006994, #4CA1AF)',
                color: 'white',
                borderRadius: 2,
                fontSize: '0.9rem',
                verticalAlign: 'middle',
              }}
            >
              OCEAN FRESH
            </Box>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
            Premium seafood caught fresh from the ocean
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {seafoodItems.map((item, index) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Fade in={isLoaded} timeout={1500 + index * 500}>
                <Card
                  onClick={() => handleDishClick(item)}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={item.image}
                      alt={item.name}
                      sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      <Whatshot />
                      <Typography variant="subtitle2">Chef's Special</Typography>
                    </Box>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.restaurant}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                      <Rating value={item.rating} precision={0.1} readOnly />
                      <Typography variant="body2" color="text.secondary">
                        ({item.rating})
                      </Typography>
                    </Box>

                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Timer sx={{ fontSize: 20, color: 'text.secondary', mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {item.preparationTime}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold' }}>
                          {item.price}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<ShoppingCart />}
                      sx={{
                        mt: 2,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                      }}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Bar & Grill Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
            Bar & Grill
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                ml: 2,
                px: 2,
                py: 0.5,
                background: 'linear-gradient(45deg, #FF4B2B, #FF416C)',
                color: 'white',
                borderRadius: 2,
                fontSize: '0.9rem',
                verticalAlign: 'middle',
              }}
            >
              FLAME GRILLED
            </Box>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
            Perfectly grilled dishes with signature sauces
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {barAndGrillItems.map((item, index) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Fade in={isLoaded} timeout={1500 + index * 500}>
                <Card
                  onClick={() => handleDishClick(item)}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={item.image}
                      alt={item.name}
                      sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      <Whatshot />
                      <Typography variant="subtitle2">Chef's Special</Typography>
                    </Box>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.restaurant}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                      <Rating value={item.rating} precision={0.1} readOnly />
                      <Typography variant="body2" color="text.secondary">
                        ({item.rating})
                      </Typography>
                    </Box>

                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Timer sx={{ fontSize: 20, color: 'text.secondary', mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {item.preparationTime}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold' }}>
                          {item.price}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<ShoppingCart />}
                      sx={{
                        mt: 2,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                      }}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Quick View Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="dish-modal-title"
        aria-describedby="dish-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '70%' },
            maxWidth: 800,
            maxHeight: '90vh',
            overflow: 'auto',
            bgcolor: 'background.paper',
            borderRadius: 4,
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedDish && (
            <>
              <IconButton
                onClick={handleCloseModal}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'text.secondary',
                }}
              >
                <Close />
              </IconButton>

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    src={selectedDish.image}
                    alt={selectedDish.name}
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                      borderRadius: 2,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {selectedDish.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {selectedDish.restaurant}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Rating value={selectedDish.rating} precision={0.1} readOnly />
                    <Typography>({selectedDish.rating})</Typography>
                    <Chip
                      icon={selectedDish.type === 'veg' ? <Circle sx={{ color: 'success.main' }} /> : <Stop sx={{ color: 'error.main' }} />}
                      label={selectedDish.type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                      color={selectedDish.type === 'veg' ? 'success' : 'error'}
                      variant="outlined"
                    />
                  </Box>

                  <Typography variant="body1" paragraph>
                    {selectedDish.description}
                  </Typography>

                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <MonetizationOn color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={`Price: ${selectedDish.price}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Timer color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={`Preparation Time: ${selectedDish.preparationTime}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LocalShipping color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Free Delivery Available" />
                    </ListItem>
                  </List>

                  {selectedDish.ingredients && (
                    <>
                      <Typography variant="h6" gutterBottom>
                        Ingredients
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                        {selectedDish.ingredients.map((ingredient) => (
                          <Chip
                            key={ingredient}
                            label={ingredient}
                            variant="outlined"
                            size="small"
                          />
                        ))}
                      </Box>
                    </>
                  )}

                  {selectedDish.allergens && (
                    <>
                      <Typography variant="h6" gutterBottom>
                        Allergens
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                        {selectedDish.allergens.map((allergen) => (
                          <Chip
                            key={allergen}
                            label={allergen}
                            color="warning"
                            variant="outlined"
                            size="small"
                            icon={<Info />}
                          />
                        ))}
                      </Box>
                    </>
                  )}

                  {selectedDish.dietaryInfo && (
                    <>
                      <Typography variant="h6" gutterBottom>
                        Dietary Information
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                        {selectedDish.dietaryInfo.map((info) => (
                          <Chip
                            key={info}
                            label={info}
                            color="success"
                            variant="outlined"
                            size="small"
                            icon={<CheckCircle />}
                          />
                        ))}
                      </Box>
                    </>
                  )}

                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<ShoppingCart />}
                    sx={{
                      mt: 2,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      background: selectedDish.isChefSpecial
                        ? 'linear-gradient(45deg, #FFD700, #FFA500)'
                        : 'primary.main',
                    }}
                  >
                    Add to Cart - {selectedDish.price}
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Home;