import { Card, CardActions, CardContent, CardHeader } from "@mui/material";
import { CardCompProps } from "@/app/components/card/types/cardComp";

function CardComp({ title, subheader, children, actions, sx, ...props }:CardCompProps) {
  return (
    <Card sx={sx} {...props}>
      <CardHeader
  title={title}
  subheader={subheader}
  sx={{
    textAlign: "center",
    "& .MuiCardHeader-content": {
      alignItems: "center",
    },
  }}
/>
      <CardContent>{children}</CardContent>
      
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
}

export default CardComp;