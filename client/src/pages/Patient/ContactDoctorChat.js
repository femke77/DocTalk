/*import React from "react";
import Channel from "../../components/ChatChannel";
import Footer from "../../components/Footer";

export default function ContactDoctorChat() {
    return (
        <div>
        <div>
        <h1>Contact Doctor</h1>
            <Channel/>
            </div>
            <Footer />
            </div>
    )
} */
import React from "react";
import { styled } from "@mui/system";
import Channel from "../../components/ChatChannel";
import Footer from "../../components/Footer";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const ContainerWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "80vh",
  padding: "16px",
  background: "#f0f0f0",
});

const ChatContainer = styled(Paper)({
  width: "100%",
  maxWidth: "800px",
  background: "#fff",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
  borderRadius: "5px",
  padding: "16px",
});

const Header = styled(Typography)({
  fontSize: "24px",
  marginBottom: "16px",
});

export default function ContactDoctorChat() {
  return (
    <ContainerWrapper>
      <ChatContainer>
        <Header variant="h1">Contact Doctor</Header>
        <Channel />
      </ChatContainer>
      <Footer />
    </ContainerWrapper>
  );
}


