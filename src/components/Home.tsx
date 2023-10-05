import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import DataMenu from "../module/home/mocks/data.json";
import "../css/home.css";
// import BanerVienvenida from "./Baner";
import { Box, Card, Grid, Typography } from "@mui/material";
import useMediaquery from "../utilities/useMediaquery";
import CardIcon from "../module/home/ui/CardIcon";

const Home = () => {
  // const theme = useTheme();
  const { sm, xs, md } = useMediaquery();
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

  const idsSemana1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
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
  const idsSemana4 = [
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
  ];
  const idsSemana5 = [
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];

  const getMenuList = (iconIndex: number) => {
    switch (iconIndex) {
      case 0:
        return DataMenu.menus.filter(
          (item) => !idsSemana1.includes(item.id.toString())
        );
      case 1:
        return DataMenu.menus.filter(
          (item) => !idsSemana2.includes(item.id.toString())
        );
      case 2:
        return DataMenu.menus.filter(
          (item) => !idsSemana3.includes(item.id.toString())
        );
      case 3:
        return DataMenu.menus.filter(
          (item) => !idsSemana4.includes(item.id.toString())
        );
      default:
        return DataMenu.menus.filter(
          (item) => !idsSemana5.includes(item.id.toString())
        );
    }
  };

  const menus = selectedIcon !== null ? getMenuList(selectedIcon) : [];
  return (
    <>
      {/* <BanerVienvenida urlImg={urlBanerImg} /> */}
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
              background: "rgba(255, 255, 255, 0.7)",
              transition: "background 0.3s ease",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.4)",
                transition: "background 0.3s ease",
                ".subtitle": {
                  background: "rgba(255, 255, 255, 0.6)",
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
        <Grid item xs={12}>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <div>
              <h2>Menús:</h2>
              <ul>
                {menus.map((menu) => (
                  <>
                    <li key={menu.id}>{menu.nombre}</li>
                    <Card
                      className="platosDeMenu"
                      sx={{
                        "&:hover": {
                          ".platosDeMenu": {},
                        },
                      }}
                    >
                      <Box>
                        {menu.platos.map((plato) => (
                          <Typography>
                            Cantidad de Porciones: {plato.porciones}
                          </Typography>
                        ))}
                      </Box>
                    </Card>
                  </>
                ))}
              </ul>
            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
