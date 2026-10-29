import "./App.css";
import EventList from "./components/Eventlist";
import StudentRegistration from "./StudentRegistration/StudentForm";

function App() {
  return (
    <div className="App">

      {/* Navigation */}
      <header className="navbar">
        <a href="#" className="logo">
          CampusConnect
        </a>

        <nav>
          <a href="#">Home</a>
          <a href="#events">Events</a>
          <a href="#registration">Register</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">
            CONNECT • PARTICIPATE • GROW
          </p>

          <h1>
            Make Your Campus
            <br />
            <span>Experience Count</span>
          </h1>

          <p className="hero-description">
            Discover exciting campus events, connect with
            fellow students, and make every moment memorable.
          </p>

          <a href="#events" className="hero-button">
            Explore Events
          </a>
        </div>
      </section>

      {/* Events Section */}
      <section id="events">
        <EventList />
      </section>

      {/* Student Registration Section */}
      <section id="registration">
        <StudentRegistration />
      </section>

    </div>
  );
}

export default App;