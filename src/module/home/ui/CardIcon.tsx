import { Box, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export interface DataProps {
  nombre: string;
  selected: boolean;
  onSelect: () => void;
}
const CardIcon: FC<DataProps> = ({ nombre, selected, onSelect }) => {
  return (
    <>
      <Box>
        <IconButton
          onClick={onSelect}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            cursor: "pointer",
            color: selected ? "primary.main" : "black",
          }}
        >
          <CalendarTodayIcon />
          <Typography>{nombre}</Typography>
        </IconButton>
      </Box>
    </>
  );
};

export default CardIcon;
