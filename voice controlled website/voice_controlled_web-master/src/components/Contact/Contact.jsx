import React, { useState, useEffect } from "react";

const Contact = ({
  newName,
  newEmail,
  newMessage,
  nameRef,
  emailRef,
  messageRef,
  submitRef,
  submitForm,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (newName) {
      setName(newName);
    }
  }, [newName]);

  useEffect(() => {
    if (newEmail) {
      setEmail(newEmail);
    }
  }, [newEmail]);

  useEffect(() => {
    if (newMessage) {
      setMessage(newMessage);
    }
  }, [newMessage]);

  const styles = {
    
    container: {
      padding: '40px',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: 'rgba(83, 77, 77, 0.9)',
      color: '#1d1d1d',
      borderRadius: '10px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      animation: 'fadeIn 1s ease-out',
    },
    heading: {
      color: '#fff',
      textAlign: 'center',
      padding: '20px 0',
      fontSize: '2rem',
      fontWeight: '700',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      color: '#fff',
      display: 'block',
      marginBottom: '10px',
      fontWeight: '600',
      fontSize: '1rem',
    },
    input: {
      width: '100%',
      padding: '15px',
      border: 'none',
      borderRadius: '5px',
      boxSizing: 'border-box',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      color: '#3d3d3d',
      fontSize: '1rem',
      transition: 'background-color 0.3s ease',
      outline: 'none',
      border: '1px solid transparent',
    },
    textarea: {
      height: '150px',
      resize: 'none',
      padding: '15px',
    },
    button: {
      padding: '12px 25px',
      fontSize: '1.1rem',
      color: '#fff',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
    },
    textCenter: {
      textAlign: 'center',
    },
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  };

  return (
    <div style={styles.container}>
      <h4 style={styles.heading}>Contact</h4>
      <form style={styles.form} onSubmit={submitForm}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">Name</label>
          <input
            type="text"
            style={styles.input}
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameRef}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">Email</label>
          <input
            type="email"
            style={styles.input}
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="message">Message</label>
          <textarea
            style={{ ...styles.input, ...styles.textarea }}
            id="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ref={messageRef}
          ></textarea>
        </div>
        <button
          type="submit"
          ref={submitRef}
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
