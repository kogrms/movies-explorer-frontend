import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
// import { CurrentUserContext } from "../../contexts/currentUserContext";
// import { MovieContext } from "../../contexts/MovieContext";
import { Route, Switch } from "react-router-dom";
// useHistory

import Login from "../Login/Login";
import Page404 from "../Page404/Page404";
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
// import { moviesApi } from "../../utils/MoviesApi";
// import { mainApi } from "../../utils/MainApi";
// import InfoTooltipPopup from "../InfoTooltipPopup/InfoTooltipPopup";
// import * as constants from "../../utils/constants";

function App() {
  let moviesIsPresent = JSON.parse(
    localStorage.getItem("movieArrayAfterSearch")
  );
  // let movies = JSON.parse(localStorage.getItem("films")) || [];

  const [isLoading, setIsLoading] = React.useState(true); // изменение надписей кнопок при ожидании ответа от сервера
  const [movieIsFound, setMovieIsFound] = React.useState(moviesIsPresent ? true : false); // управляет заглушкой "Ничего не найдено"
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]); // массив фильмов для страницы сохраненных фильмов

  return (
    // <CurrentUserContext.Provider value={currentUser}>
    //   <MovieContext.Provider
    //     value={{
    //       moviesCards: movies,
    //       savedMovies: savedMovies,
    //     }}
    //   >
        <main className="page">
          <Switch>
            <Route exact path="/">
              <Header
                // loggedIn={loggedIn}
                isMobileMenuOpened={isMobileMenuOpened}
                setIsMobileMenuOpened={setIsMobileMenuOpened}
              />
              <Main />
              <Footer />
            </Route>

            <Route path="/signup">
              <Register
                // onAddUser={handleRegisterSubmit}
                // isInputDisabled={isInputDisabled}
              />
            </Route>

            <Route path="/signin">
              <Login
                // onEnterUser={handleSignInSubmit}
                // isInputDisabled={isInputDisabled}
              />
            </Route>

            <Route
              path="/movies"
              component={Movies}
            ></Route>

            <Route
              path="/saved-movies"
              component={SavedMovies}
              // loggedIn={loggedIn}
              isMobileMenuOpened={isMobileMenuOpened}
              setIsMobileMenuOpened={setIsMobileMenuOpened}
              setMovieIsFound={setMovieIsFound}
              savedMovies={savedMovies}
              // movieList={filteredSavedMovies}
              // baseUrl={baseUrl}

              // onLike={handleLikeClick}
              // onDislike={handleDislikeClickFromSaved}
              // onSearch={handleFindSavedMovies}

            ></Route>

            {/* <ProtectedRoute */}
            <Route
              path="/profile"
              component={Profile}
              // loggedIn={loggedIn}
              isMobileMenuOpened={isMobileMenuOpened}
              setIsMobileMenuOpened={setIsMobileMenuOpened}

              // onUpdateUser={handleUpdateUser}
              // onSignOut={handleSignOut}

              // setInfoTooltipMessage={setInfoTooltipMessage}
              // setIsPopupOpen={setIsPopupOpen}
              // setIsResultSuccess={setIsResultSuccess}

            ></Route>

            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
          {/* <InfoTooltipPopup
            isPopupOpen={isPopupOpen}
            messageText={infoTooltipMessage}
            isResultSuccess={isResultSuccess}
            onClose={onPopupClose}
          /> */}
        </main>
    //   </MovieContext.Provider>
    // </CurrentUserContext.Provider>
  );
}

export default App;
