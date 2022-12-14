import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            border: 1px solid ${({ theme }) => theme.colors.btn};

            &:hover {
              background-color: rgb(0 0 0 /0%);
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to Contact us</h2>
      {/* //////////////for map go to google map then enter location,tn click to share option, then click (embed a map) than copy html and paste  */}

      {/* <iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.639521753113!2d67.12129351447848!3d24.91027474939519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3391fcd875245%3A0xe8e69966c8519d46!2sWallStreet%20Exchange%20Gulistan-e-Johar%20Branch!5e0!3m2!1sen!2s!4v1669845580698!5m2!1sen!2s" 
// width="600"
width="100%"
 height="450"
//  style="border:0;" 
style={{border:0}}
//  allowfullscreen="" 
allowFullScreen="" 
 loading="lazy"
 referrerpolicy="no-referrer-when-downgrade">
 </iframe> */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14470.432837528087!2d67.06761572232983!3d24.945413500212073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f58ca99fa6b%3A0x60edf88219ea27ab!2sAncholi%20Gulberg%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1669913097461!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* ////////form (formspree)go to + sign=>new form=> name the form then creat,tn copy url n paste it into form action */}
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/maykglao"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name=" message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
