import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [open, setOpen] = React.useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yvbgqoq", "template_z1iqjwa", form.current, {
        publicKey: "kFnwXH2VMEWweL3-y",
      })
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-me" id="contact">
      <h2>Get In Touch</h2>

      <div className="leftContact" id="contact">
        <h3>What I am looking for?</h3>
        <p className="contact-message">
          Eager to dive deeper into the tech realm, I'm a passionate learner and
          interested to build new projects and softwares. Currently looking for
          an opportunity to further develop my skills and explore new horizons.
          If there's an opportunity that aligns with this journey, please do let
          me know. Let's make some code magic happen! 🚀💻
        </p>
      </div>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <h3 className="contactTitle">Reach out to me 🚀</h3>
        <input type="text" name="from_name" placeholder="Your Name" />

        <input type="email" name="user_email" placeholder="Your Email" />

        <textarea name="message" placeholder="Message" />
        <input className="btn" type="submit" value="Send" />
      </form>
    </div>
  );
}
