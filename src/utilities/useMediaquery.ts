import { useMediaQuery, useTheme } from "@mui/material";

function useMediaquery() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const md = useMediaQuery(theme.breakpoints.only("md"));
  return {
    sm,
    xs,
    md,
  };
}

export default useMediaquery;
