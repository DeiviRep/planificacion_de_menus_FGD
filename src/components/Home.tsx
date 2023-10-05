import { useState } from "react";
// import { NavLink } from "react-router-dom";
import DataMenu from "../module/home/mocks/data.json";
import "../css/home.css";
// import BanerVienvenida from "./Baner";
import {
  Box,
  Card,
  Dialog,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import useMediaquery from "../utilities/useMediaquery";
import CardIcon from "../module/home/ui/CardIcon";
import MenuList from "../module/home/ui/MenuList";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const Home = () => {
  // const theme = useTheme();
  const { sm, xs, md } = useMediaquery();
  const [openDialog, setOpenDialog] = useState(false);
  const displayFlex = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  };
  const bannerStyleHome = {
    height: { xs: "300px", sm: "310px", md: "310px" },
    width: "100%",
    display: "block",
    color: "white",
    textAlign: "center",
    borderRadius: 1.4,
    objectFit: "cover",
  };

  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const handleIconClick = (index: number) => {
    setSelectedIcon(index);
  };
  // const urlBanerImg =
  //   "https://composer.moises.ai/_next/static/media/welcome-page.2cd59cc3.png";

  const nombreSemanas = ["Semana1", "Semana2", "Semana3", "Semana4"];

  const urlImage =
    "https://media.istockphoto.com/id/668221242/es/foto/comunicaci%C3%B3n-de-la-gente-partido-hablando-el-concepto-de-felicidad.webp?b=1&s=612x612&w=0&k=20&c=UC2jjeRL7pk8hjsaPMkDQlGXFgZ4QNR4tcp3F0Ac7iI=";
  const idsSemana2 = [
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];
  const idsSemana3 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  function getRandomIds(max: number, count: number) {
    const ids = Array.from({ length: max }, (_, i) => i + 1);
    return Array.from(
      { length: count },
      () => ids.splice(Math.floor(Math.random() * ids.length), 1)[0]
    );
  }

  // Obtener 5 IDs aleatorios
  const randomIds = getRandomIds(20, 5);

  const getMenuList = (iconIndex: number) => {
    switch (iconIndex) {
      case 0:
        return DataMenu.menus.filter((item) => !randomIds.includes(item.id));
      case 1:
        return DataMenu.menus.filter(
          (item) => !idsSemana2.includes(item.id.toString())
        );
      case 2:
        return DataMenu.menus.filter(
          (item) => !idsSemana3.includes(item.id.toString())
        );
      case 3:
        return DataMenu.menus.filter((item) => !randomIds.includes(item.id));
      default:
        return DataMenu.menus.filter((item) => !randomIds.includes(item.id));
    }
  };

  const eliminar = (idMenu: string) => {
    handleClickOpen();
    console.log(idMenu);
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    // setSelectedValue(value);
  };

  const eliminarRecurso = () => {
    setOpenDialog(false);
    // setSelectedValue(value);
  };

  const menus = selectedIcon !== null ? getMenuList(selectedIcon) : [];
  return (
    <>
      {/* <BanerVienvenida urlImg={urlBanerImg} /> */}
      <Dialog onClose={handleClose} open={openDialog}>
        <DialogTitle>Esta seguro de eliminar un menu</DialogTitle>
        <Box display={"flex"} justifyContent={"space-around"}>
          <Button onClick={handleClose}>Aceptar</Button>
          <Button onClick={eliminarRecurso}>Cancelar</Button>
        </Box>
      </Dialog>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"space-between"}
          position="relative"
        >
          <Box
            component={"img"}
            src={urlImage}
            sx={{ ...bannerStyleHome, position: "relative", zIndex: "-1" }}
          />
          <Box
            sx={{
              ...displayFlex,
              position: "absolute",
              zIndex: "1",
              background: "rgba(25,27,38,0.5)",
              transition: "background 0.3s ease",
              "&:hover": {
                background: "rgba(25,27,38,0.4)",
                transition: "background 0.3s ease",
                ".subtitle": {
                  background: "rgba(25,27,38,0.6)",
                },
              },
              width: "100%",
              height: { xs: "300px", sm: "310px", md: "310px" },
              padding: "20px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              borderRadius: 1.4,
            }}
          >
            <Box>
              <Typography
                variant={sm ? "h3" : xs ? "h4" : md ? "h3" : "h4"}
                component="h2"
                sx={{ flexGrow: 1, fontWeight: "600" }}
              >
                Bienvenido
              </Typography>
              <Typography
                className="subtitle"
                letterSpacing="1px"
                textTransform="uppercase"
                component="h2"
                sx={{
                  flexGrow: 1,
                  fontWeight: "600",
                  fontSize: { sm: "1em", xs: "h3", md: "h4" },
                  transition: "background 0.3s ease",
                }}
                color="primary"
              >
                - Pide lo que deseas en el siguiente menu
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            {nombreSemanas.map((semana, index) => (
              <CardIcon
                nombre={semana}
                selected={selectedIcon === index}
                onSelect={() => handleIconClick(index)}
              />
            ))}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "24rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <h2>Menús de la semana</h2>
            <Card
              variant="outlined"
              sx={{
                p: 2,
                width: "90%",
                alignSelf: "start",
              }}
            >
              {menus.map((menu) => (
                <MenuList
                  id={menu.id.toString()}
                  name={menu.nombre}
                  platos={menu.platos}
                  key={menu.id}
                  iconComponent={<DeleteIcon />}
                  onSelect={() => eliminar(menu.id.toString())}
                />
              ))}
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
