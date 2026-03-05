import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // ← Insert the handleSubmit function here
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thank you ${name}!`);
  }

  return (
    <section className="card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <textarea
          placeholder="Message"
          rows="5"
          required
        ></textarea>

        <button type="submit" id="submitBtn">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;