import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // ← Insert the handleSubmit function here
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name })
    })
    .then(res => res.json())
    .then(data => {
      // --- TASK 6 START ---
      if (data.message) {
        alert(data.message); // This shows "Hello [Name]" OR "Name is required"
      } else {
        alert("Unexpected error occurred."); // This is the fallback for weird errors
      }
      // --- TASK 6 END ---
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Could not connect to the server. Make sure XAMPP is running!");
    });
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