import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    message,
}) => (
  <div>
    <h1>Nome: {name}!</h1>
    <h1>E-mail: {email}!</h1>
    <h1>Mensagem: {message}!</h1>
  </div>
);

export default EmailTemplate;