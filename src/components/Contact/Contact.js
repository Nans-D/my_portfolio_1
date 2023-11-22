import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <form action="/" method="post">
        <input type="text" placeholder="Your name" />
        <textarea cols="100" rows="20" placeholder="Your text"></textarea>
      </form>
    </div>
  );
};

export default Contact;
