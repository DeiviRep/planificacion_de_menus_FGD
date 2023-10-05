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
const MenuList: FC<DataProps> = ({ id, name, platos }) => {
  return (
    <>
      <Box
        sx={{
          "&:hover": {
            ".platosDeMenu": {
              visibility: "visible",
              background: "gray",
            },
          },
        }}
      >
        <IconButton>
          <Typography key={id}>{name}</Typography>
        </IconButton>
        <Card
          variant="outlined"
          className="platosDeMenu"
          sx={{
            visibility: "hidden",
            position: "absolute",
            zIndex: "999",
            right: "5rem",
            p: 2,
          }}
        >
          <Box>
            {platos.map((plato) => (
              <Typography>Cantidad de Porciones: {plato.porciones}</Typography>
            ))}
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default MenuList;
