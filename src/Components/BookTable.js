import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import { LocalDining, People,  LocalFireDepartment } from '@mui/icons-material';
import './BookTable.css';
import { useTheme } from '@mui/material/styles';

const areas = [
  {
    id: 'family',
    name: 'Family Area',
    description: 'Spacious area perfect for family gatherings with kids play zone',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    capacity: '4-8 people',
    features: ['Kid-friendly', 'High chairs available', 'Play area nearby']
  },
  {
    id: 'couple',
    name: 'Couple Area',
    description: 'Intimate setting with romantic ambiance',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80',
    capacity: '2 people',
    features: ['Romantic lighting', 'Private seating', 'Special couple menu']
  },
  {
    id: 'outdoor',
    name: 'Outdoor Garden',
    description: 'Beautiful garden seating with natural ambiance',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80',
    capacity: '2-6 people',
    features: ['Fresh air', 'Garden view', 'Weather protected']
  },
  {
    id: 'non-veg',
    name: 'Non-Veg Special Area',
    description: 'Exclusive area for non-vegetarian dining with special BBQ and grill options',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    capacity: '2-8 people',
    features: ['BBQ & Grill', 'Premium meats', 'Special chef service']
  }
];

const timeSlots = [
  '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM',
  '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM',
  '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM',
  '9:00 PM'
];

const nonVegSpecials = [
  {
    name: 'BBQ Platter',
    description: 'Assorted grilled meats with special marinades',
    price: '$49.99'
  },
  {
    name: 'Premium Steak',
    description: 'Choice of premium cuts with signature sauces',
    price: '$39.99'
  },
  {
    name: 'Mixed Grill',
    description: 'Selection of chicken, lamb, and beef specialties',
    price: '$44.99'
  }
];

const BookTable = () => {
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [guests, setGuests] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAreaDetails, setSelectedAreaDetails] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showNonVegMenu, setShowNonVegMenu] = useState(false);

  const handleAreaClick = (area) => {
    setSelectedAreaDetails(area);
    setOpenDialog(true);
    if (area.id === 'non-veg') {
      setShowNonVegMenu(true);
    } else {
      setShowNonVegMenu(false);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSelectArea = () => {
    setSelectedArea(selectedAreaDetails.id);
    setOpenDialog(false);
  };

  const validateForm = () => {
    if (!selectedDate) return 'Please select a date';
    if (!selectedTime) return 'Please select a time';
    if (!selectedArea) return 'Please select an area';
    if (!guests) return 'Please select number of guests';
    if (!name.trim()) return 'Please enter your name';
    if (!phone.trim()) return 'Please enter your phone number';
    if (!email.trim()) return 'Please enter your email';
    if (!/\S+@\S+\.\S+/.test(email)) return 'Please enter a valid email';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setShowSuccess(true);
      // Reset form
      setSelectedDate('');
      setSelectedTime('');
      setSelectedArea('');
      setGuests('');
      setName('');
      setPhone('');
      setEmail('');
      setSpecialRequests('');
    } catch (error) {
      setError('Failed to book table. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ 
      py: 8,
      color: theme.palette.text.primary,
      bgcolor: theme.palette.background.default,
    }}>
      <Typography variant="h3" align="center" gutterBottom>
        Book a Table
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Choose your preferred dining area and make a reservation
      </Typography>

      <Grid container spacing={4}>
        {areas.map((area) => (
          <Grid item xs={12} md={4} key={area.id}>
            <Card 
              className="area-card"
              onClick={() => handleAreaClick(area)}
              sx={{ 
                cursor: 'pointer',
                transition: 'transform 0.3s ease-in-out',
                bgcolor: theme.palette.background.paper,
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: theme.palette.mode === 'dark' 
                    ? '0 8px 16px rgba(255,255,255,0.1)'
                    : '0 8px 16px rgba(0,0,0,0.2)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={area.image}
                alt={area.name}
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {area.name}
                  {area.id === 'non-veg' && (
                    <LocalFireDepartment color="error" sx={{ ml: 1, verticalAlign: 'middle' }} />
                  )}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {area.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip 
                    icon={<People />} 
                    label={area.capacity} 
                    size="small" 
                    color={area.id === 'non-veg' ? 'error' : 'primary'}
                  />
                  {area.features.map((feature, index) => (
                    <Chip 
                      key={index}
                      label={feature}
                      size="small"
                      variant="outlined"
                      color={area.id === 'non-veg' ? 'error' : 'default'}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper 
        elevation={3} 
        sx={{ 
          mt: 6, 
          p: 4,
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }} 
        className="booking-form"
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Reservation Details
              </Typography>
              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="date"
                label="Date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                inputProps={{ min: new Date().toISOString().split('T')[0] }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Time</InputLabel>
                <Select
                  value={selectedTime}
                  label="Time"
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  {timeSlots.map((time) => (
                    <MenuItem key={time} value={time}>{time}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Number of Guests</InputLabel>
                <Select
                  value={guests}
                  label="Number of Guests"
                  onChange={(e) => setGuests(e.target.value)}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <MenuItem key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Selected Area"
                value={areas.find(a => a.id === selectedArea)?.name || ''}
                disabled
                InputProps={{
                  startAdornment: <LocalDining sx={{ mr: 1, color: 'primary.main' }} />,
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Special Requests"
                multiline
                rows={4}
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={isLoading}
                className={isLoading ? 'loading-button' : ''}
              >
                {isLoading ? (
                  <>
                    <CircularProgress size={24} sx={{ mr: 1, color: 'white' }} />
                    Booking Table...
                  </>
                ) : (
                  'Book Now'
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog} 
        maxWidth="md" 
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          }
        }}
      >
        <DialogTitle>
          {selectedAreaDetails?.name}
          {selectedAreaDetails?.id === 'non-veg' && (
            <LocalFireDepartment color="error" sx={{ ml: 1, verticalAlign: 'middle' }} />
          )}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img
                src={selectedAreaDetails?.image}
                alt={selectedAreaDetails?.name}
                style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }}
              />
              <Typography variant="body1" paragraph>
                {selectedAreaDetails?.description}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip 
                  icon={<People />} 
                  label={selectedAreaDetails?.capacity} 
                  color={selectedAreaDetails?.id === 'non-veg' ? 'error' : 'primary'}
                />
                {selectedAreaDetails?.features.map((feature, index) => (
                  <Chip 
                    key={index}
                    label={feature}
                    variant="outlined"
                    color={selectedAreaDetails?.id === 'non-veg' ? 'error' : 'default'}
                  />
                ))}
              </Box>
            </Grid>
            {showNonVegMenu && (
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Special Non-Veg Menu
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {nonVegSpecials.map((item, index) => (
                    <Paper
                      key={index}
                      elevation={1}
                      sx={{ p: 2, mb: 2, bgcolor: 'background.default' }}
                    >
                      <Typography variant="subtitle1" gutterBottom>
                        {item.name}
                        <Typography
                          component="span"
                          color="error.main"
                          sx={{ float: 'right', fontWeight: 'bold' }}
                        >
                          {item.price}
                        </Typography>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Grid>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            onClick={handleSelectArea}
            variant="contained"
            color={selectedAreaDetails?.id === 'non-veg' ? 'error' : 'primary'}
          >
            Select Area
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert 
          severity="success" 
          onClose={() => setShowSuccess(false)}
          className="success-message"
          sx={{
            bgcolor: theme.palette.mode === 'dark' ? '#1b5e20' : '#4caf50',
            color: '#fff',
          }}
        >
          Table booked successfully! We'll send you a confirmation email shortly.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default BookTable; 