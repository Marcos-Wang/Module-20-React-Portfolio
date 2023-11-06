// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
import profile from '../assets/profile.png'

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    color: 'black',
    padding: 20,
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card() {
  return (
    <div>
    <div style={styles.card}>
      <div style={styles.heading} id = "about">About Me</div>
      <div style={styles.content}>
      <img src={profile} alt="me" />
        <br></br>My name is Marcos Wang. I'm a Computer Science major currently studying web development in the UCI bootcamp. I'm experienced in working with
              C++, Python, Javascript, CSS, and HTML.
      </div>
    </div>
    <div style={styles.card}>
      <div style={styles.heading} id = "work">Work</div>
      <div style={styles.content}>
        You can find my tamagotchi application here at: <a href="https://github.com/Marcos-Wang/Tamagotchi-Project-Marcos-Wang" >Github</a>
      </div>
    </div>
    <div style={styles.card}>
      <div style={styles.heading} id = "contact">Contact Me</div>
      <div style={styles.content}>
      You can contact me through my phone number: 949-506-9616 or at my E-mail: wangfmarcos@gmail.com
      </div>
    </div>
    <div style={styles.card}>
      <div style={styles.heading} id = "resume">Resume</div>
      <div style={styles.content}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
    </div>
  );
}

export default Card;
