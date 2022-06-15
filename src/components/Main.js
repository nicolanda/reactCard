export const Main = (props) => (
  <main className={props.darkMode ? "dark" : ""}>
    <h3 className="main-title">Fun facts about React</h3>
    <ul className="main-subjects">
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k starts on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprises apps, including mobile apps</li>
    </ul>
  </main>
);
