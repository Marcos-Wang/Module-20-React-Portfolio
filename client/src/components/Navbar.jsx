
const styles = {
  nav: {
    background: '#c89637',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
  },
  pad: {
    padding: '0px 20px'
  }

};
function Navbar() {
  return (
      <div style={styles.nav}>
        <a href="#about" style={styles.pad}>About Me</a>
        <a href="#work" style={styles.pad}>Work</a>
        <a href="#contact" style={styles.pad}>Contact Me</a>
        <a href="#resume" style={styles.pad}>Resume</a>
      </div>
  );
}

export default Navbar;
