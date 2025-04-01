import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  Chip,
  Divider,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  LocalDining,
  DirectionsBike,
  CheckCircle,
} from '@mui/icons-material';

const orderHistory = [
  {
    id: "ORD001",
    date: "2024-03-20",
    restaurant: "Pizza Paradise",
    items: [
      { name: "Margherita Pizza", quantity: 1, price: 12.99 },
      { name: "Garlic Bread", quantity: 2, price: 4.99 }
    ],
    status: "Delivered",
    total: 22.97,
    deliveryAddress: "123 Main St, City, State, 12345"
  },
  {
    id: "ORD002",
    date: "2024-03-19",
    restaurant: "Burger Bliss",
    items: [
      { name: "Classic Cheeseburger", quantity: 2, price: 9.99 },
      { name: "French Fries", quantity: 1, price: 3.99 }
    ],
    status: "In Progress",
    total: 23.97,
    deliveryAddress: "456 Oak Ave, City, State, 12345"
  }
];

const getSteps = () => {
  return ['Order Placed', 'Preparing', 'On the Way', 'Delivered'];
};

const getStepIcon = (step) => {
  switch (step) {
    case 0:
      return <LocalDining />;
    case 1:
      return <LocalDining />;
    case 2:
      return <DirectionsBike />;
    case 3:
      return <CheckCircle />;
    default:
      return null;
  }
};

const Orders = () => {
  const steps = getSteps();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
        My Orders
      </Typography>

      {orderHistory.map((order) => (
        <Paper 
          key={order.id}
          elevation={3}
          sx={{ 
            p: 3, 
            mb: 4,
            borderRadius: 2,
            '&:hover': {
              boxShadow: 6
            }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6">
              Order #{order.id}
            </Typography>
            <Chip 
              label={order.status}
              color={order.status === "Delivered" ? "success" : "primary"}
              sx={{ fontWeight: 'bold' }}
            />
          </Box>

          <Stepper 
            activeStep={order.status === "Delivered" ? 3 : 1} 
            alternativeLabel
            sx={{ mb: 4 }}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel StepIconComponent={() => getStepIcon(index)}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Order Details
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {order.items.map((item, index) => (
                      <Box 
                        key={index}
                        sx={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          mb: 1
                        }}
                      >
                        <Typography>
                          {item.quantity}x {item.name}
                        </Typography>
                        <Typography>
                          ${(item.price * item.quantity).toFixed(2)}
                        </Typography>
                      </Box>
                    ))}
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="h6">Total</Typography>
                      <Typography variant="h6" color="primary">
                        ${order.total}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Delivery Details
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {order.restaurant}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {order.deliveryAddress}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    Ordered on: {new Date(order.date).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
};

export default Orders; 