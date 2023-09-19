import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PrimarySearchAppBar from '../components/appbar';
import BasicCard from '../components/card';

export default function BasicGrid() {
  return (
<>
    <PrimarySearchAppBar/>
    <Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={0} sx={{padding: '10px 5px 5px 5px'}}>
        <Grid item xs={4}>
          <BasicCard/>
        </Grid>
        <Grid item xs={4}>
          <BasicCard/>
        </Grid>
        <Grid item xs={4}>
          <BasicCard/>
        </Grid>
      </Grid>
    </Box>
</>
  );
}