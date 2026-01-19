import CardComp from "@/app/components/card";
import Pdf from "@/app/components/pdfView";

function Pdfview (){
    return(
    <CardComp
        sx={{ maxWidth: "90%", mx: "auto", m: 3 }}
            title="Vista previa del documento"
            subheader="Revisa el PDF antes de continuar"
    >
    <Pdf
        src="https://www.agirregabiria.net/g/sylvainaitor/principito.pdf"
        title="El Principito"
    />
    </CardComp>

    )
}
export default Pdfview;