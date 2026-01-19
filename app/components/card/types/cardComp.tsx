import { ReactNode } from "react";
import { SxProps, Theme } from "@mui/material";

export type CardCompProps = {
  title: string;
  subheader?: string;
  children: ReactNode;
  actions?: ReactNode;
  sx?: SxProps<Theme>;
}
