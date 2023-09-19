import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Titulo
        </Typography>
        <Typography variant="h5" component="div">
          Autor
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Ano
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Leia mais</Button>
      </CardActions>
    </Card>
  );
}
