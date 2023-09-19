import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import PrimarySearchAppBar from '../components/appbar';
import BasicCard from '../components/card';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
<>
    <PrimarySearchAppBar/>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item><BasicCard/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><BasicCard/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><BasicCard/></Item>
        </Grid>
      </Grid>
    </Box>
</>
  );
}