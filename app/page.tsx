'use client';
import TextfieldCheck from "@/app/components/textFieldCheck";
import { useState } from "react";
import { Box } from "@mui/material";
export default function Home() {
const [campo, setCampo] = useState("");
const [campoChecked, setCampoChecked] = useState<boolean | null>(null);


 const respuestaApi = {
  contribuyente:{
    id:1,
    Nombre:'Raul',
    Apellido_Pat:'Rayo',
    Apellido_Mat:'Guadarrama',
    Edad:22
  },
  Empresa:{
    nombre:'develop',
    giro:'mercancia',
    presupuesto: 2500
  }

}
const handleChangeCampo = (value: string) => {
  setCampo(value);
};

  return (

    <Box  sx={{mt:3}}>
    <TextfieldCheck
     label="Nombre"
        value={respuestaApi.contribuyente.Nombre}
        checked={campoChecked}
        onChange={handleChangeCampo}
        onCheckChange={setCampoChecked}
        disabled={true}
    />
    </Box >
  );
}
