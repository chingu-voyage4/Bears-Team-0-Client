import React, { Component } from "react";
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Layout from "./Layout/Layout";
import Landing from "./Landing/Landing";
import Team from "./Pages/Team";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AllQuizzes from "./AllQuizzes/AllQuizzes";
import { MakeQuiz } from "./MakeQuiz/MakeQuiz";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Landing} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/all" component={AllQuizzes} />
            <Route exact path="/make-quiz" component={MakeQuiz} />
          </AnimatedSwitch>
        </Layout>
      </div>
    );
  }
}

export default App;
