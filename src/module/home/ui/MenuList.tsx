import { Box, Card, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";

export interface Plato {
  receta_id: number;
  porciones: number;
}
export interface DataProps {
  id: string;
  name: string;
  platos: Plato[];
  selected?: boolean;
  onSelect?: () => void;
}
const MenuList: FC<DataProps> = ({
  id,
  name = "escoja un plato de la semana",
  platos,
}) => {
  return (
    <>
      {name ? (
        <Box
          sx={{
            width: "100%",
            "&:hover": {
              ".platosDeMenu": {
                visibility: "visible",
                background: "gray",
              },
            },
          }}
        >
          <IconButton
            sx={{
              borderRadius: 0,
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
              width: "100%",
              "&:hover": {
                background: "gray",
              },
            }}
          >
            <Typography key={id}>{name}</Typography>
          </IconButton>
          <Card
            variant="outlined"
            className="platosDeMenu"
            sx={{
              visibility: "hidden",
              position: "absolute",
              zIndex: "999",
              right: "0.1rem",
              p: 2,
            }}
          >
            <Box>
              {platos.map((plato) => (
                <Typography>
                  Cantidad de Porciones: {plato.porciones}
                </Typography>
              ))}
            </Box>
          </Card>
        </Box>
      ) : (
        <>
          <Typography>{name}</Typography>
        </>
      )}
    </>
  );
};

export default MenuList;
