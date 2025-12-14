'use client';
import TextfieldCheck from "@/app/components/textFieldCheck";
import { useState, useEffect } from "react";
import { Box, Button, Grid } from "@mui/material";

export default function Home() {
const [nombreC, setNombreC] = useState("");
const [apellidoPat, setApellidoPat] = useState("");
const [apellidoMat, setApellidoMat] = useState("");
const [nombreCheked, setNombreCheked] = useState<boolean | null>(null);
const [apellidoPatChecked, setApellidoPatChecked] = useState<boolean | null>(null);
const [apellidoMatChecked, setApellidoMatChecked] = useState<boolean | null>(null);
const [solicitud, setSolicitud] = useState<RespuestaApiProps | null>(null);
 
const respuestaApi:RespuestaApiProps = {
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
    setNombreC(value);
  };

  const handleClick = () => {
    const payload = {
      nombre: solicitud?.contribuyente?.Nombre,
      nombreCheked: nombreCheked,
      apellidoPat: solicitud?.contribuyente?.Apellido_Pat,
      apellidoPatChecked: apellidoPatChecked,
      apellidoMat: solicitud?.contribuyente?.Apellido_Mat,
      apellidMatChecked: apellidoMatChecked      
    }
    console.log(payload);
  }

useEffect(() => {
  setSolicitud(respuestaApi)
}, []); 

  return (
<Grid container sx={{m:3}} spacing={2}>
    <Grid size={{md:4}} >
      <TextfieldCheck
        label="Nombre"
        value={solicitud?.contribuyente.Nombre ?? ''}
        checked={nombreCheked}
        onChange={handleChangeCampo}
        onCheckChange={setNombreCheked}
        disabled={true}
      />
      </Grid >

    <Grid size={{md:4}} >
      <TextfieldCheck
      label="Apellido Paterno"
          value={solicitud?.contribuyente.Apellido_Pat ?? ''}
          checked={apellidoPatChecked}
          onChange={handleChangeCampo}
          onCheckChange={setApellidoPatChecked}
          disabled={true}
      />
      </Grid >

      <Grid size={{md:4}} >
        <TextfieldCheck
        label="Apellido Paterno"
            value={solicitud?.contribuyente.Apellido_Mat ?? ''}
            checked={apellidoMatChecked}
            onChange={handleChangeCampo}
            onCheckChange={setApellidoMatChecked}
            disabled={true}
      />
      </Grid >
      <Grid size={{md:12}} >
        <Button
          onClick={handleClick}
          fullWidth
          variant="contained"
        >
          Enviar
      </Button>
      
      </Grid>

    </Grid>
  );
}
