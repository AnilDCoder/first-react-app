import React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AddHome = () => {
  return (<Grid container spacing={{ xs: 2, md: 3 }} >
  {Array.from(Array(6)).map((_, index) => (
    <Grid item xs={2} sm={3} md={4} key={index}>
      <Item>xs=2</Item>
    </Grid>
  ))}
</Grid>)
};

export default AddHome;
