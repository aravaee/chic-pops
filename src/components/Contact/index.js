import React from "react";
import { useForm } from "react-hook-form";
import {
  ContactContainer,
  ContactForms,
  SubButton,
  Input,
  TextArea,
  Forms,
} from "./ContactElements";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Contact = () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    // Send form email
    console.log("Onsub");
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ContactContainer>
      <h1>Contact Me</h1>
      <ContactForms
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Forms>
          <Input
            type="text"
            name="name"
            ref={register({
              required: {
                value: true,
                message: "Please enter your name",
              },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
            })}
            placeholder="Name"
          ></Input>
          {errors.name && (
            <span className="errorMessage">{errors.name.message}</span>
          )}
        </Forms>

        <Forms>
          <Input
            type="email"
            name="email"
            ref={register({
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            placeholder="Email address"
          ></Input>
          {errors.email && (
            <span className="errorMessage">
              Please enter a valid email address
            </span>
          )}
        </Forms>

        <Forms>
          <Input
            type="text"
            name="subject"
            ref={register({
              required: {
                value: true,
                message: "Please enter a subject",
              },
              maxLength: {
                value: 75,
                message: "Subject cannot exceed 75 characters",
              },
            })}
            placeholder="Subject"
          ></Input>
          {errors.subject && (
            <span className="errorMessage">{errors.subject.message}</span>
          )}
        </Forms>

        <Forms>
          <TextArea
            rows={3}
            name="message"
            ref={register({
              required: true,
            })}
            placeholder="Message"
          ></TextArea>
          {errors.message && (
            <span className="errorMessage">Please enter a message</span>
          )}
        </Forms>

        <SubButton type="submit">
          Submit
        </SubButton>
      </ContactForms>
      <ToastContainer />
    </ContactContainer>
  );
};

export default Contact;
