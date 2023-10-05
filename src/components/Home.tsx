import React, { FC } from "react";
// import { NavLink } from "react-router-dom";
import "../css/home.css";
import BanerVienvenida from "./Baner";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import useMediaquery from "../utilities/useMediaquery";

export interface Root {
  nombre: string;
  color: string;
  precio: number;
  imagen: string;
}
export interface ReyesProps {
  reyes: Root[];
}
const Home: FC<ReyesProps> = ({ reyes }) => {
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
  // const urlBanerImg =
  //   "https://composer.moises.ai/_next/static/media/welcome-page.2cd59cc3.png";

  const urlImage =
    "https://media.istockphoto.com/id/668221242/es/foto/comunicaci%C3%B3n-de-la-gente-partido-hablando-el-concepto-de-felicidad.webp?b=1&s=612x612&w=0&k=20&c=UC2jjeRL7pk8hjsaPMkDQlGXFgZ4QNR4tcp3F0Ac7iI=";
  return (
    <>
      {/* <BanerVienvenida urlImg={urlBanerImg} /> */}
      <Grid
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
    </>
  );
};

export default Home;
