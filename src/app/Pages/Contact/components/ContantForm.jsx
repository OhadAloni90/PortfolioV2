import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";

import cn from "./ContantForm.module.scss";

const ContantForm = () => {
  const [viewModelState, setViewModelState] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [status, setStatus] = useState("Submit");
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_7i2bqhp", "template_ngbv36e", values, "FXrMZBF_bo2Q85Ckm")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            email: "",
            role: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus('FAIL');
        }
      );
  };

  useEffect(() => {
    if (status !== 'Submit' ) {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const form = useRef();

  const sendEmail = (e) => {
    setValues({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={cn.container}>
      <form onSubmit={handleSubmit}>
        <div className={cn.nameDiv}>
          <label namehtmlfor="name" className={cn.label}>
            Name:
          </label>
          <input
            value={values.fullName}
            onChange={handleChange}
            name="fullName"
            type="text"
            id="name"
            className={isClicked ? cn.chcked : cn.input}
            onClick={(prev) => setIsClicked(!prev)}
            placeholder="Enter your name, person"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className={cn.label}>
            Email:
          </label>
          <input
            value={values.email}
            type="email"
            name="email"
            onChange={handleChange}
            className={cn.input}
            id="email"
            required
            placeholder="Enter your email, person"
          />
        </div>
        <div>
          <label htmlFor="message" className={cn.label}>
            Message:
          </label>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Enter your text, person"
            id="message"
            className={cn.area}
            required
          />
        </div>
        <button
          type="submit"
          className={cn.button}
          onSubmit={(e) => sendEmail(e)}
          data-mouse-hover='button'
          data-mouse-hover-text={
            viewModelState
              ? ''
              : 'SUBMIT YOUR MAIL'
          }
        >
          {status !== "Submit" ? "Submit" : status}
        </button>
        <div className={status === 'SUCCESS' ? cn.success : status === 'FAIL' ? cn.failed : cn.submit}>{status !== 'Submit' ? status : null}</div>

      </form>
    </div>
  );
};

export default ContantForm;
