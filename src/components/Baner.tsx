import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";

export interface UrlBanerImgs {
  urlImg: string;
}

function BanerVienvenida({ urlImg }: UrlBanerImgs) {
  // <BanerVienvenida urlImg={urlBanerImg} />
  const isScreenLarge = useMediaQuery("(min-width: 1280px)");
  const isScreenMid = useMediaQuery("(max-width: 900px)");
  const isScreenSmall = useMediaQuery("(max-width: 600px)");
  const bannerStyle = {
    background: `url("${urlImg}") center/cover no-repeat`,
    height: `${
      isScreenLarge
        ? "300px"
        : isScreenMid
        ? "220px"
        : isScreenSmall
        ? "180px"
        : "170px"
    }`, // Ajusta la altura según tus necesidades
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    borderRadius: "1em",
  };
  return (
    <Grid
      margin={
        isScreenLarge
          ? "2.4em 0px"
          : isScreenMid
          ? "2.2em 0px"
          : isScreenSmall
          ? "1.9em 0px"
          : "2em 0px"
      }
    >
      <Box sx={bannerStyle}>
        <div>
          <Typography
            variant={
              isScreenLarge
                ? "h1"
                : isScreenMid
                ? "h2"
                : isScreenSmall
                ? "h4"
                : "h3"
            }
            component="h2"
            sx={{ flexGrow: 1, fontWeight: "600" }}
          >
            Bienvenido a Event Soft
          </Typography>
          <Typography variant="body1">
            Descubre todo lo que tenemos para ofrecerte.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              margin: `${
                isScreenLarge
                  ? "0px 20px"
                  : isScreenMid
                  ? "0px 0px"
                  : isScreenSmall
                  ? "0px 0px"
                  : "0px 0px"
              }`,
            }}
            // onClick={handleLoginClick}
          >
            Explorar
          </Button>
        </div>
      </Box>
      <Box
        sx={{
          margin: `${
            isScreenLarge
              ? "0px 280px"
              : isScreenMid
              ? "0px 20px"
              : isScreenSmall
              ? "0px 0px"
              : "0px 0px"
          }`,
        }}
      >
        <Typography variant="body1" textAlign="center" margin="30px 0px">
          Crea todas los eventos de tus sueños con la ayuda de Event Soft, para
          realizar por IA. Encuentre fácilmente palabras y líneas que rimen
          mientras establece el estado de ánimo adecuado para su evento.
        </Typography>
      </Box>
    </Grid>
  );
}

export default BanerVienvenida;
