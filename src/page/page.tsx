import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PrimarySearchAppBar from "../components/appbar";
import RegisterDialog from "../components/registerDialog";

export default function BasicGrid() {
  return (
    <>
      <PrimarySearchAppBar />
      <Box sx={{ flexGrow: 0 }}>
        <Grid container spacing={1}>
          <RegisterDialog />
        </Grid>
      </Box>
    </>
  );
}
