import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  Box,
  TextField,
  
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  IconButton,
  Alert,
  CircularProgress,
  MobileStepper,
} from '@mui/material';
import {
  Person,
  LocationOn,
  CreditCard,

  Edit,
  Save,
  Restaurant,
  Favorite,
  PhotoCamera,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@mui/icons-material';
import { keyframes } from '@mui/system';
import './Profile.css';

// Update animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    address: '123 Main St, City, State 12345',
    favoriteFood: ['Pizza', 'Sushi', 'Burgers'],
    savedAddresses: [
      '123 Main St, City, State 12345',
      '456 Oak Ave, City, State 12345'
    ],
    paymentMethods: [
      { type: 'Credit Card', last4: '4242', expiry: '12/24' },
      { type: 'PayPal', email: 'john.doe@example.com' }
    ]
  });
  const [formData, setFormData] = useState({ ...userData });

  // Add new state for image slider
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
      title: 'Favorite Healthy Meals',
      description: 'Exploring healthy and delicious food options'
    },
    {
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
      title: 'Restaurant Collection',
      description: 'My favorite dining spots in the city'
    },
    {
      url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
      title: 'Food Adventures',
      description: 'Discovering new cuisines and flavors'
    },
    {
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      title: 'Dining Experiences',
      description: 'Special moments and memorable meals'
    }
  ];

  const maxSteps = images.length;

  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(() => {
        setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [autoPlay, maxSteps]);

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setUserData(formData);
      setIsEditing(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle photo upload logic here
      console.log('Photo uploaded:', file);
    }
  };

  const renderImageSlider = () => (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 400,
        overflow: 'hidden',
        borderRadius: 2,
        mb: 4,
        boxShadow: 3,
        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          animation: `${fadeIn} 0.8s ease-out`,
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      }}
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <img
        src={images[activeStep].url}
        alt={images[activeStep].title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          color: 'white',
          padding: 3,
          animation: `${slideIn} 0.5s ease-out`,
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          {images[activeStep].title}
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9 }}>
          {images[activeStep].description}
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          padding: 2,
          background: 'linear-gradient(rgba(0,0,0,0.5), transparent)',
        }}
      >
        <IconButton
          size="large"
          onClick={handleBack}
          sx={{
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.2)',
            },
          }}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          size="large"
          onClick={handleNext}
          sx={{
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.2)',
            },
          }}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          bgcolor: 'transparent',
          padding: 2,
          '& .MuiMobileStepper-dot': {
            width: 8,
            height: 8,
            margin: '0 4px',
            bgcolor: 'rgba(255,255,255,0.5)',
          },
          '& .MuiMobileStepper-dotActive': {
            bgcolor: 'white',
          },
        }}
        nextButton={<Box />}
        backButton={<Box />}
      />
    </Box>
  );

  const renderPersonalInfo = () => (
    <Box sx={{ mt: 3 }} className="profile-section">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6">Personal Information</Typography>
        <IconButton 
          onClick={() => setIsEditing(!isEditing)}
          disabled={isLoading}
          className="edit-button"
        >
          {isEditing ? (
            isLoading ? <CircularProgress size={24} /> : <Save onClick={handleSave} />
          ) : (
            <Edit />
          )}
        </IconButton>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={isEditing ? formData.name : userData.name}
            onChange={handleInputChange}
            disabled={!isEditing || isLoading}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={isEditing ? formData.email : userData.email}
            onChange={handleInputChange}
            disabled={!isEditing || isLoading}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={isEditing ? formData.phone : userData.phone}
            onChange={handleInputChange}
            disabled={!isEditing || isLoading}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={isEditing ? formData.address : userData.address}
            onChange={handleInputChange}
            disabled={!isEditing || isLoading}
            variant="outlined"
            multiline
            rows={2}
          />
        </Grid>
      </Grid>
    </Box>
  );

  const renderAddresses = () => (
    <Box sx={{ mt: 3 }} className="profile-section">
      <Typography variant="h6" gutterBottom>Saved Addresses</Typography>
      <List>
        {userData.savedAddresses.map((address, index) => (
          <ListItem key={index} divider className="profile-card">
            <ListItemIcon>
              <LocationOn color="primary" />
            </ListItemIcon>
            <ListItemText primary={address} />
            <Button color="primary" className="edit-button">Edit</Button>
          </ListItem>
        ))}
      </List>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<LocationOn />}
        sx={{ mt: 2 }}
      >
        Add New Address
      </Button>
    </Box>
  );

  const renderPayments = () => (
    <Box sx={{ mt: 3 }} className="profile-section">
      <Typography variant="h6" gutterBottom>Payment Methods</Typography>
      <List>
        {userData.paymentMethods.map((method, index) => (
          <ListItem key={index} divider className="profile-card">
            <ListItemIcon>
              <CreditCard color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary={method.type}
              secondary={method.last4 ? `**** **** **** ${method.last4}` : method.email}
            />
            <Button color="primary" className="edit-button">Edit</Button>
          </ListItem>
        ))}
      </List>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<CreditCard />}
        sx={{ mt: 2 }}
      >
        Add Payment Method
      </Button>
    </Box>
  );

  const renderFavorites = () => (
    <Box sx={{ mt: 3 }} className="profile-section">
      <Typography variant="h6" gutterBottom>Favorite Foods</Typography>
      <Grid container spacing={2}>
        {userData.favoriteFood.map((food, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              className="profile-card"
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Restaurant color="primary" />
              <Typography>{food}</Typography>
              <IconButton size="small" sx={{ ml: 'auto' }}>
                <Favorite color="error" />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {showAlert && (
        <Alert 
          severity="success" 
          className="success-alert"
          sx={{ position: 'fixed', top: 80, right: 16, zIndex: 2000 }}
        >
          Profile updated successfully!
        </Alert>
      )}
      
      {renderImageSlider()}
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }} className="profile-card">
            <Box className="profile-avatar">
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  margin: '0 auto 16px',
                  bgcolor: 'primary.main'
                }}
              >
                <Person sx={{ fontSize: 60 }} />
              </Avatar>
              <div className="avatar-overlay">
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="photo-upload"
                  type="file"
                  onChange={handlePhotoUpload}
                />
                <label htmlFor="photo-upload">
                  <IconButton
                    color="inherit"
                    component="span"
                    sx={{ color: 'white' }}
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </div>
            </Box>
            <Typography variant="h5" gutterBottom>
              {userData.name}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {userData.email}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }} className="profile-card">
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
              <Tab icon={<Person />} label="Personal Info" />
              <Tab icon={<LocationOn />} label="Addresses" />
              <Tab icon={<CreditCard />} label="Payments" />
              <Tab icon={<Favorite />} label="Favorites" />
            </Tabs>

            <Box sx={{ mt: 3 }}>
              {activeTab === 0 && renderPersonalInfo()}
              {activeTab === 1 && renderAddresses()}
              {activeTab === 2 && renderPayments()}
              {activeTab === 3 && renderFavorites()}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile; 