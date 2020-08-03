import React from "react";
import NewLayout from "./assets/components/NewDesign/NewLayout";

import "./App.css";

export default function App() {
  return (
    <div className="new-layout-container">
      <NewLayout />
    </div>
  );
}

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";

// import Nav from "./assets/components/pages/Nav/Nav";
// import Home from "./assets/components/pages/Home/Home";
// import About from "./assets/components/pages/About/About";
// import Portfolio from "./assets/components/pages/Portfolio/Portfolio";
// import Resume from "./assets/components/pages/Resume/Resume";
// import Contact from "./assets/components/pages/Contact/Contact";
// import NotFoundPage from "./assets/components/pages/PageNotFound/404";
// import ScrollTopArrow from "./assets/components/ScrollTop/ScrollTopArrow";
// import Footer from "./assets/components/Footer/Footer";

// import "./App.css";

// function App() {
//   const [darkMode, setDarkMode] = React.useState(getInitialMode());
//   React.useEffect(() => {
//     localStorage.setItem("dark", JSON.stringify(darkMode));
//   }, [darkMode]);

//   // function getInitialMode() {
//   // 	const savedMode = JSON.parse(localStorage.getItem('dark'));
//   // 	getPrefColorScheme();
//   // 	return savedMode || false;
//   // }

//   function getInitialMode() {
//     const isReturningUser = "dark" in localStorage;
//     const userPrefDarkScheme = getPrefColorScheme();

//     if (isReturningUser) {
//       //if mode was saved return dark / light
//       console.log(localStorage.getItem("dark"));
//       let darkStorageValue = localStorage.getItem("dark");
//       if (darkStorageValue) {
//         const savedMode = JSON.parse(localStorage.getItem("dark"));
//         return savedMode;
//       }
//       return false;
//     } else if (userPrefDarkScheme) {
//       //if preferred scheme is dark - return dark
//       return true;
//     } else {
//       //otherwise - return light scheme
//       return false;
//     }
//   }

//   function getPrefColorScheme() {
//     if (!window.matchMedia) return;
//     // console.log(window.matchMedia('(prefers-color-scheme: dark)'));
//     return window.matchMedia("(prefers-color-scheme: dark)").matches;
//   }

//   return (
//     <Router>
//       <div className="main-app-container">
//         <div className={darkMode ? "dark-mode" : "light-mode"}>
//           <Nav />

//           <nav>
//             {/* toggle goes here */}
//             <div className="toggle-container">
//               <span style={{ color: darkMode ? "yellow" : "grey" }}>
//                 {/* <img src={require('../src/assets/images/sun.png')} alt="" height="40" width="40" /> */}
//                 <img
//                   src={require("../src/assets/images/dark.png")}
//                   alt=""
//                   height="30"
//                   width="30"
//                 />
//               </span>
//               <span className="toggle">
//                 <input
//                   onChange={() => setDarkMode((prevMode) => !prevMode)}
//                   checked={darkMode}
//                   className="checkbox"
//                   id="checkbox"
//                   type="checkbox"
//                 />
//                 <label htmlFor="checkbox" />
//               </span>
//               <span style={{ color: darkMode ? "grey" : "black" }}>
//                 {/* <img src={require('../src/assets/images/dark.png')} alt="" height="30" width="30" /> */}
//                 <img
//                   src={require("../src/assets/images/sun.png")}
//                   alt=""
//                   height="40"
//                   width="40"
//                 />
//               </span>
//             </div>
//           </nav>

//           <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/Home" component={Home} />
//             <Route exact path="/About" component={About} />
//             <Route exact path="/Portfolio" component={Portfolio} />
//             {/* <Route exact path="/Resume" component={Resume} /> */}
//             {/* <Route path="/Resume" component={Resume} loc="https://google.com" /> */}
//             <Route
//               exact
//               path="/Resume"
//               component={() => {
//                 window.open(
//                   "https://nishas-resume.netlify.app/",
//                   "_blank" // <- This is what makes it open in a new window.
//                 );
//                 return null;
//               }}
//             />
//             <Route exact path="/Contact" component={Contact} />
//             <Route
//               exact
//               path="/"
//               render={() => {
//                 window.location.href = "https://redirectsite.com";
//               }}
//             />
//             <Route exact path="/404" component={NotFoundPage} />
//             <Redirect to="/404" />
//           </Switch>

//           <ScrollTopArrow />

//           <Footer />
//         </div>
//       </div>
//     </Router>
//   );
// }
// export default App;
