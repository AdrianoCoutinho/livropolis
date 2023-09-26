import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import * as React from "react";
import CardLivro from "./card";

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  ano: string;
  dataCadastro: string;
  genero: string;
  descricao: string;
}

export default function RegisterDialog() {
  const [open, setOpen] = React.useState(false);
  const [biblioteca, setBiblioteca] = React.useState<Livro[]>([]);
  const [livro, setLivro] = React.useState<Livro>({
    id: 0,
    titulo: "",
    autor: "",
    ano: "",
    dataCadastro: "",
    genero: "",
    descricao: "",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleClose();
    const newBook = {
      ...livro,
      id: biblioteca.length + 1,
    };
    setBiblioteca([...biblioteca, newBook]);
    setLivro({
      id: 0,
      titulo: "",
      autor: "",
      ano: "",
      dataCadastro: "",
      genero: "",
      descricao: "",
    });
  };
  console.log(biblioteca);
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Adicionar novo livro</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="id"
              label="ID"
              type="text"
              fullWidth
              variant="standard"
              disabled
            />
            <TextField
              autoFocus
              margin="dense"
              id="titulo"
              label="Titulo"
              type="text"
              fullWidth
              variant="standard"
              onChange={(ev) =>
                setLivro({
                  ...livro,
                  titulo: ev.target.value,
                })
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="autor"
              label="Autor"
              type="text"
              fullWidth
              variant="standard"
              onChange={(ev) =>
                setLivro({
                  ...livro,
                  autor: ev.target.value,
                })
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="ano"
              label="Ano"
              type="text"
              fullWidth
              variant="standard"
              onChange={(ev) =>
                setLivro({
                  ...livro,
                  ano: ev.target.value,
                })
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="dataCadastro"
              label="Data"
              type="text"
              fullWidth
              variant="standard"
              onChange={(ev) =>
                setLivro({
                  ...livro,
                  dataCadastro: ev.target.value,
                })
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="genero"
              label="Gênero"
              type="text"
              fullWidth
              variant="standard"
              onChange={(ev) =>
                setLivro({
                  ...livro,
                  genero: ev.target.value,
                })
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="descricao"
              label="Descrição"
              type="text"
              fullWidth
              variant="standard"
              onChange={(ev) =>
                setLivro({
                  ...livro,
                  descricao: ev.target.value,
                })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleSubmit}>
              Registrar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      {biblioteca.map((item) => {
        return (
          <Grid key={item.id} item xs={12} md={3} lg={3}>
            <CardLivro
              id={item.id}
              titulo={item.titulo}
              autor={item.autor}
              ano={item.ano}
              dataCadastro={item.dataCadastro}
              genero={item.genero}
              descricao={item.descricao}
            />
          </Grid>
        );
      })}
    </div>
  );
}
