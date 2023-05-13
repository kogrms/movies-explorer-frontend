import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Page404 from "../Page404/Page404";

function App() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);

  return (
    <main className="page">
      <Switch>
        <Route exact path="/">
          <Header
            isMobileMenuOpened={isMobileMenuOpened}
            setIsMobileMenuOpened={setIsMobileMenuOpened}
          />
          <Main />
          <Footer />
        </Route>

        <Route path="/signup">
          <Register/>
        </Route>

        <Route path="/signin">
          <Login/>
        </Route>

        <Route path="/movies">
          <Movies
            isMobileMenuOpened={isMobileMenuOpened}
            setIsMobileMenuOpened={setIsMobileMenuOpened}
          ></Movies>
        </Route>

        <Route path="/saved-movies">
          <SavedMovies
            isMobileMenuOpened={isMobileMenuOpened}
            setIsMobileMenuOpened={setIsMobileMenuOpened}
          ></SavedMovies>
        </Route>

        <Route path="/profile">
          <Profile
            isMobileMenuOpened={isMobileMenuOpened}
            setIsMobileMenuOpened={setIsMobileMenuOpened}
          ></Profile>
        </Route>

        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
