import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  Grid,
  Checkbox,
  FormControlLabel,
  Alert,
  IconButton,
  InputAdornment,
  LinearProgress,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  ArrowForward,
  ArrowBack,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const steps = ['Account Details', 'Personal Information', 'Delivery Preferences'];

const SignUp = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    notifications: true,
    terms: false,
  });
  const [errors, setErrors] = useState({});

  const getPasswordStrength = (password) => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return (strength / 4) * 100;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: event.target.type === 'checkbox' ? checked : value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 0:
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Invalid email address';
        }
        if (!formData.password) {
          newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
          newErrors.password = 'Password must be at least 8 characters';
        }
        if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match';
        }
        break;
      case 1:
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        break;
      case 2:
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
        if (!formData.terms) newErrors.terms = 'You must accept the terms and conditions';
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateStep(activeStep)) {
      try {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Form submitted:', formData);
        navigate('/profile'); // Redirect to profile page after successful signup
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const renderAccountDetails = () => (
    <Box sx={{ mt: 2 }}>
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        error={!!errors.email}
        helperText={errors.email}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        value={formData.password}
        onChange={handleInputChange}
        error={!!errors.password}
        helperText={errors.password}
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {formData.password && (
        <Box sx={{ mt: 1, mb: 2 }}>
          <LinearProgress 
            variant="determinate" 
            value={passwordStrength}
            color={
              passwordStrength <= 25 ? 'error' :
              passwordStrength <= 50 ? 'warning' :
              passwordStrength <= 75 ? 'info' : 'success'
            }
          />
          <Typography variant="caption" color="textSecondary">
            Password strength: {
              passwordStrength <= 25 ? 'Weak' :
              passwordStrength <= 50 ? 'Fair' :
              passwordStrength <= 75 ? 'Good' : 'Strong'
            }
          </Typography>
        </Box>
      )}
      <TextField
        fullWidth
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword}
        margin="normal"
      />
    </Box>
  );

  const renderPersonalInfo = () => (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            error={!!errors.phone}
            helperText={errors.phone}
          />
        </Grid>
      </Grid>
    </Box>
  );

  const renderDeliveryPreferences = () => (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            error={!!errors.address}
            helperText={errors.address}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            error={!!errors.city}
            helperText={errors.city}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="State"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            error={!!errors.state}
            helperText={errors.state}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="ZIP Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            error={!!errors.zipCode}
            helperText={errors.zipCode}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.notifications}
                onChange={handleInputChange}
                name="notifications"
                color="primary"
              />
            }
            label="I want to receive order updates and promotional offers"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.terms}
                onChange={handleInputChange}
                name="terms"
                color="primary"
              />
            }
            label="I agree to the terms and conditions"
          />
          {errors.terms && (
            <Typography color="error" variant="caption" display="block">
              {errors.terms}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create Your Account
        </Typography>
        
        <Stepper activeStep={activeStep} sx={{ my: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={handleSubmit}>
          {activeStep === 0 && renderAccountDetails()}
          {activeStep === 1 && renderPersonalInfo()}
          {activeStep === 2 && renderDeliveryPreferences()}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              disabled={activeStep === 0 || isSubmitting}
              onClick={handleBack}
              startIcon={<ArrowBack />}
            >
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={isSubmitting ? null : <ArrowForward />}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                endIcon={<ArrowForward />}
                disabled={isSubmitting}
              >
                Next
              </Button>
            )}
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp; 