import { Typography, Container, useMediaQuery } from "@mui/material";

export default function Home() {
  const phone = useMediaQuery("(max-width:550px)");
  return (
    <Container sx={{ textAlign: "center", mt: 2 }}>
      <Typography variant={phone ? "body1" : "h5"}>
        Welcome to the Chat App
      </Typography>
    </Container>
  );
}
