import { Box, Grid } from "@mui/material";

function PdfViewer({
  src,
  title = "PDF Viewer",
  height = "80vh",
}:PdfViewerProps) {
  return (
    <Grid container justifyContent="center">
      <Grid size={{xs:12, md:10, lg:8}} >
        <Box
          sx={{
            width: "100%",
            height,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
          }}
        >
          <iframe
            src={src}
            title={title}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default PdfViewer;
