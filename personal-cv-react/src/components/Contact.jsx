function Header() {
    return (
      <section className="card">
      <h2>Contact Me</h2>
      <form>
        <input type="text" id="name" placeholder="Name" />
        <input type="email" id="email" placeholder="Email" />
        <textarea placeholder="Message" rows="5" required></textarea><br /><br />
        <button type="submit" id="submitBtn">Send</button>  
      </form>
    </section>
    );
  }
  
  export default Header;