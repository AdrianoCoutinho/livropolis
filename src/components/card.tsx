import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

interface DataLivroProps {
  id: number;
  titulo: string;
  autor: string;
  ano: string;
  dataCadastro: string;
  genero: string;
  descricao: string;
}

const CardLivro: React.FC<DataLivroProps> = (props) => {
  const LivrosData = [props];
  console.log(LivrosData);
  return (
    <Card
      sx={{
        minWidth: 275,
        textAlign: "center",
        marginTop: "20px",
        backgroundColor: "#909090",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></Typography>
        <Typography color="text.secondary">{props.id}</Typography>
        <Typography color="text.secondary">{props.titulo}</Typography>
        <Typography color="text.secondary">{props.autor}</Typography>
        <Typography color="text.secondary">{props.ano}</Typography>
        <Typography color="text.secondary">{props.genero}</Typography>
        <Typography color="text.secondary">{props.dataCadastro}</Typography>
        <Typography color="text.secondary">{props.descricao}</Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Leia mais</Button>
      </CardActions>
    </Card>
  );
};

export default CardLivro;
