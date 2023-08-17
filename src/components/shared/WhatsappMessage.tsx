import React from "react";
import ReactWhatsapp from "react-whatsapp";

interface Props {
  content?: string;
  children?: React.ReactNode;
}

const WhatsappMessage: React.FC<Props> = ({ content, children }) => {
  return (
    <ReactWhatsapp
      element="webview"
      number="+994 504055044"
      message="Mene yaz"
      style={{ display: "flex" }}
    >
      {children}
      {content}
    </ReactWhatsapp>
  );
};

export default WhatsappMessage;
