import { useRef } from "react";
import {
  ContactBox,
  ContactTitle,
  SendButton,
  SendButtonBox,
  StyledTextField,
  TextFieldMessage,
  Wrapper,
  IconBox,
  LocationBox,
  Container,
} from "./styled";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CallIcon from "@mui/icons-material/Call";
import WhatsappMessage from "components/shared/WhatsappMessage";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SocialIconHover, SocialIconTansition } from "components/header/styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_4dojbqv",
          "template_er40vy6",
          form.current,
          "xLrhwK9Io5rGg6k4M"
        )
        .then(
          () => {
            toast.success("Mesajiniz gonderildi", {
              position: "bottom-right",
              autoClose: 2000,
              theme: "colored",
            });
          },
          () => {
            toast.error("Mesajiniz gonderildi", {
              position: "bottom-right",
              autoClose: 2000,
              theme: "colored",
            });
          }
        );
      e.target.reset();
    }
  };

  return (
    <Wrapper>
      <Container>
        <div className="w-full">
          <ContactBox
            transition={SocialIconTansition}
            whileHover={SocialIconHover}
          >
            <IconBox>
              <WhatsAppIcon />
            </IconBox>
            <WhatsappMessage content="Whatsapp" />
          </ContactBox>
          <ContactBox
            transition={SocialIconTansition}
            whileHover={SocialIconHover}
          >
            <IconBox>
              <CallIcon />
            </IconBox>
            <div>(994+)50-405-50-44</div>
          </ContactBox>
          <ContactBox
            transition={SocialIconTansition}
            whileHover={SocialIconHover}
          >
            <IconBox>
              <LocationOnIcon />
            </IconBox>
            <div>Azerbaijan,baku</div>
          </ContactBox>
        </div>
        <LocationBox
          transition={SocialIconTansition}
          whileHover={SocialIconHover}
        >
          <iframe
            style={{ height: "100%", width: "100%", borderRadius: "8px" }}
            src="https://www.google.com/maps/embed/v1/place?q=Koroğlu,+Baku,+Azerbaijan&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </LocationBox>
      </Container>
      <Box
        className="border-solid  border-2 border-indigo-900 p-3 pb-0 rounded-lg"
        component="form"
        ref={form}
        onSubmit={sendEmail}
      >
        <ContactTitle>Get In Touch</ContactTitle>
        <div>
          <div className=" flex gap-6 mb-6">
            <StyledTextField>
              <TextField
                required
                color="primary"
                label="Name"
                name="user_name"
                variant="filled"
              />
            </StyledTextField>
            <StyledTextField>
              <TextField
                color="primary"
                label="Surname"
                name="user_surname"
                variant="filled"
              />
            </StyledTextField>
          </div>
          <StyledTextField className="mb-6">
            <TextField
              color="primary"
              fullWidth
              name="subject"
              label="Subject *"
              variant="filled"
            />
          </StyledTextField>
          <StyledTextField className="mb-6">
            <TextField
              required
              color="primary"
              fullWidth
              type="email"
              name="user_email"
              label="Email *"
              variant="filled"
            />
          </StyledTextField>
          <StyledTextField>
            <TextField
              required
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="filled"
              fullWidth
              style={TextFieldMessage}
              inputProps={{ style: { color: "yellow" } }}
            />
          </StyledTextField>
          <SendButtonBox>
            <SendButton type="submit">Send Message</SendButton>
          </SendButtonBox>
        </div>
      </Box>
    </Wrapper>
  );
};

export default Contact;
