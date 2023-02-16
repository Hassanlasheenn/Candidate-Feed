import { Card } from '@mui/material';
import React from 'react';
import { cardStyle } from './ComponentStyles';

// reusable component to be used along the sign up and login pages

const AuthCard = ({ children }) => {
  return <Card sx={cardStyle}>{children}</Card>;
};

export default AuthCard;