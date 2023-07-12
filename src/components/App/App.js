import { useState, useEffect } from "react";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Page404 from "../Page404/Page404.js";
import InfoPopup from "../InfoPopup/InfoPopup.js";

import { CurrentUserContext } from "../../contexts/currentUserContext";
import { MovieContext } from "../../contexts/MovieContext";
import { Route, Switch, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import * as constants from "../../utils/constants";

function App() {
  const [isLoading, setIsLoading] = useState(true);
    let moviesIsPresent = JSON.parse(
    localStorage.getItem("searchedMoviesArray")
  );
  let movies = JSON.parse(localStorage.getItem("films")) || [];
  const [movieIsFound, setMovieIsFound] = useState(!!moviesIsPresent);
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem("searchedMoviesArray")) || []
  );
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [infoPopupMessage, setInfoPopupMessage] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isResultSuccess, setIsResultSuccess] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const [currentUser, setCurrentUser] = useState({});
  const [moviesArrayForRender, setMoviesArrayForRender] = useState(
    JSON.parse(localStorage.getItem("moviesArrayForRender")) || []
  );
  const [renderedMoviesQuantity, setRenderedMoviesQuantity] =
    useState(12);
  const [moreMoviesQuantity, setMoreMoviesQuantity] = useState(3);
  const [allMoviesAreShown, setAllMoviesAreShown] = useState(true);
  const [lastSearchingString, setLastSearchingString] = useState(
    localStorage.getItem("stringToSearch") || ""
  );
  const [shortFilmsOnlyStatus, setShortFilmsOnlyStatus] = useState(
    !!localStorage.getItem("shortMovieOnly")
  );
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const baseUrl = "https://api.nomoreparties.co";
  const history = useHistory();
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [searchStringIsMissed, setSearchStringIsMissed] = useState(
    !localStorage.getItem("stringToSearch")
  );

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    const checkTokenAndSetUser = async () => {
      try {
        if (jwt) {
          const res = await mainApi.checkToken(jwt);
          setCurrentUser(res);
          setLoggedIn(true);
        }
      } catch (err) {
        handleSignOut();
        console.log(err);
      }
    };
    checkTokenAndSetUser();
  }, []);

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setCurrentWidth(window.innerWidth);
      }, 200);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (currentWidth >= constants.DESKTOP.width) {
      setRenderedMoviesQuantity(constants.DESKTOP.startingCount);
      setMoreMoviesQuantity(constants.DESKTOP.moreCount);
    } else if (currentWidth <= constants.TABLET.width) {
      setRenderedMoviesQuantity(constants.MOBILE.startingCount);
      setMoreMoviesQuantity(constants.MOBILE.moreCount);
    } else {
      setRenderedMoviesQuantity(constants.TABLET.startingCount);
      setMoreMoviesQuantity(constants.TABLET.moreCount);
    }
  }, [currentWidth]);

  useEffect(() => {
    if (loggedIn) {
      mainApi.updateToken();
      mainApi
        .getMovies()
        .then((res) => {
          setSavedMovies(res);
          setFilteredSavedMovies(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    const IsLastMovieShown =
      moviesArrayForRender.length === filteredMovies.length;
    setAllMoviesAreShown(IsLastMovieShown);
    localStorage.setItem("allMoviesAreShown", IsLastMovieShown.toString());
  }, [moviesArrayForRender]);

  const searchMovies = async (stringToSearch, shortMovieOnly) =>
  {
    setLastSearchingString(stringToSearch);
    let localMovies = JSON.parse(localStorage.getItem("films"));
    if (localMovies) {
      const searchedMoviesArray = getFilteredMovies(stringToSearch, shortMovieOnly);
      setFilteredMovies(searchedMoviesArray);
      const tempArrayForRender = searchedMoviesArray.slice(0, renderedMoviesQuantity);
      setMoviesArrayForRender(tempArrayForRender);
      localStorage.setItem("searchedMoviesArray", JSON.stringify(searchedMoviesArray));
      localStorage.setItem("stringToSearch", stringToSearch);
      localStorage.setItem("shortMovieOnly", shortMovieOnly ? shortMovieOnly : "");
      localStorage.setItem("moviesArrayForRender", JSON.stringify(tempArrayForRender));
    } else {
      setIsLoading(true);
      setMovieIsFound(false);
      mainApi.updateToken();
      try {
        const res = await mainApi.getMovies();
        setSavedMovies(res);
      } catch (err) {
        console.log(err);
      }
      try {
        const res = await moviesApi.getMovies();
        localStorage.setItem("films", JSON.stringify(res));
        const searchedMoviesArray = getFilteredMovies(stringToSearch, shortMovieOnly);
        setFilteredMovies(searchedMoviesArray);
        const tempArrayForRender = searchedMoviesArray.slice(0, renderedMoviesQuantity);
        setMoviesArrayForRender(tempArrayForRender);
        localStorage.setItem("searchedMoviesArray", JSON.stringify(searchedMoviesArray));
        localStorage.setItem("stringToSearch", stringToSearch);
        localStorage.setItem("shortMovieOnly", shortMovieOnly ? shortMovieOnly : "");
        localStorage.setItem("moviesArrayForRender", JSON.stringify(tempArrayForRender));
      } catch (err) {
        setInfoPopupMessage(constants, constants.commonServerError);
        setIsPopupOpen(true);
        console.log(err);
      } finally {
        setIsLoading(false);
        setMovieIsFound(true);
      }
    }
  };
  const getFilteredMovies = (stringToSearch, shortMovieOnly) => {
    const movies = JSON.parse(localStorage.getItem("films"));
    const lowerCaseSearchString = stringToSearch.toLowerCase();
    return movies.filter((item) => {
      const lowerCaseNameRU = item.nameRU.toLowerCase();
      const lowerCaseNameEN = item.nameEN.toLowerCase();
      return shortMovieOnly
        ? (item.duration <= constants.SHORTMOVIEDURATION && (lowerCaseNameRU.includes(lowerCaseSearchString) || lowerCaseNameEN.includes(lowerCaseSearchString)))
        : (lowerCaseNameRU.includes(lowerCaseSearchString) || lowerCaseNameEN.includes(lowerCaseSearchString));
    });
  };

  const showMoreMovies = () => {
    const newMaxMoviesQuantity =
      moviesArrayForRender.length + moreMoviesQuantity;
    setMoviesArrayForRender(filteredMovies.slice(0, newMaxMoviesQuantity));
    localStorage.setItem("renderedMoviesQuantity", newMaxMoviesQuantity);
  };

  const checkMovieName = (movie, stringToSearch) => {
    const nameRU = movie.nameRU.toLowerCase();
    const nameEN = movie.nameEN.toLowerCase();
    const searchLowerCase = stringToSearch.toLowerCase();
    return nameRU.includes(searchLowerCase) || nameEN.includes(searchLowerCase);
  };
  const handleFindSavedMovies = (stringToSearch, shortMovieOnly) => {
    const searchedMoviesArray = savedMovies.filter((item) => {
      const isShortMovie = item.duration <= constants.SHORTMOVIEDURATION;
      const hasMatchingName = checkMovieName(item, stringToSearch);
      return shortMovieOnly ? (isShortMovie && hasMatchingName) : hasMatchingName;
    });
    setFilteredSavedMovies(searchedMoviesArray);
  };

  const handleLikeClick = (newMovie) => {
    mainApi
      .postNewMovie(newMovie)
      .then((movie) => {
        const newSavedMovies = [movie, ...savedMovies];
        setSavedMovies(newSavedMovies);
        setFilteredSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        console.log(err);
        setInfoPopupMessage(`Ошибка создания карточки: ${err}`);
        setIsPopupOpen(true);
      });
  };

  function findMovieForDelete(movie) {
    return savedMovies.find((item) => item.movieId === movie.id);
  };

  function handleDislikeClick(movie) {
    const { id } = movie;
    const movieToDelete = findMovieForDelete(movie);
    mainApi.deleteMovie(movieToDelete)
      .then(() => {
        mainApi
          .getMovies()
            .then((res) => {
              setSavedMovies(res);
              setFilteredSavedMovies((state) =>state.filter((m) => m.movieId !== id));
            })
            .catch((err) => {
              console.log(err);
            });
      })
      .catch((err) => {
      console.log(err);
    });
  }

  function filterOutMovie(movieList, movieId) {
    return movieList.filter((movie) => movie._id !== movieId);
  };

  function handleDeleteFromSaved(movie) {
    mainApi
      .deleteMovie(movie)
      .then(() => {
        setSavedMovies((state) => filterOutMovie(state, movie._id));
        setFilteredSavedMovies((state) => filterOutMovie(state, movie._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const closePopup = () => {
    setInfoPopupMessage("");
    setIsPopupOpen(false);
  };

  const handleSignInSubmit = async ({ email, password }) => {
    try {
      const data = await mainApi.signin(password, email);
      if (data) {
        const res = await mainApi.checkToken(data.token);
        setCurrentUser(res);
        setLoggedIn(true);
        history.push("/movies");
      }
    } catch (err) {
      setInfoPopupMessage(
        `Ошибка входа: ${err}. Проверьте вводимые данные и попробуйте еще раз.`
      );
      setIsPopupOpen(true);
    }
  };

  const handleRegisterSubmit = async ({ name, email, password }) => {
    setIsInputDisabled(true);
    try {
      const res = await mainApi.register(name, email, password);
      await handleSignInSubmit({
        email: res.email,
        password: password,
      });
    } catch (err) {
      setInfoPopupMessage("Ошибка при регистрации");
      setIsPopupOpen(true);
    } finally {
      setIsInputDisabled(false);
    }
  };

  const handleUpdateUser = async (newUserData) => {
    try {
      const res = await mainApi.setUserInfo(newUserData);
      setCurrentUser(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = () => {
    history.push("/");
    setLoggedIn(false);
    setLastSearchingString("");
    setMoviesArrayForRender([]);
    setAllMoviesAreShown(true);
    setMovieIsFound(false);
    setTimeout(() => {
      localStorage.clear();
    }, 500);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <MovieContext.Provider
        value={{
          moviesCards: movies,
          savedMovies: savedMovies,
        }}
      >
        <main className="page">
          <Switch>
            <Route exact path="/">
              <Header
                loggedIn={loggedIn}
                isBurgerMenuOpened={isBurgerMenuOpened}
                setIsBurgerMenuOpened={setIsBurgerMenuOpened}
              />
              <Main />
              <Footer />
            </Route>

            <Route path="/signup">
              <Register
                onAddUser={handleRegisterSubmit}
                isInputDisabled={isInputDisabled}
              />
            </Route>

            <Route path="/signin">
              <Login
                onEnterUser={handleSignInSubmit}
                isInputDisabled={isInputDisabled}
              />
            </Route>

            <ProtectedRoute
              path="/movies"
              component={Movies}
              loggedIn={loggedIn}
              isBurgerMenuOpened={isBurgerMenuOpened}
              setIsBurgerMenuOpened={setIsBurgerMenuOpened}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              movieIsFound={movieIsFound}
              setMovieIsFound={setMovieIsFound}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              movieList={moviesArrayForRender}
              baseUrl={baseUrl}
              onLike={handleLikeClick}
              onDislike={handleDislikeClick}
              onMoreMoviesClick={showMoreMovies}
              onSearch={searchMovies}
              allMoviesAreShown={allMoviesAreShown}
              lastSearchingString={lastSearchingString}
              setLastSearchingString={setLastSearchingString}
              shortFilmsOnlyStatus={shortFilmsOnlyStatus}
              setShortFilmsOnlyStatus={setShortFilmsOnlyStatus}
              searchStringIsMissed={searchStringIsMissed}
              setSearchStringIsMissed={setSearchStringIsMissed}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
              loggedIn={loggedIn}
              isBurgerMenuOpened={isBurgerMenuOpened}
              setIsBurgerMenuOpened={setIsBurgerMenuOpened}
              setMovieIsFound={setMovieIsFound}
              savedMovies={savedMovies}
              movieList={filteredSavedMovies}
              baseUrl={baseUrl}
              onLike={handleLikeClick}
              onDislike={handleDeleteFromSaved}
              onSearch={handleFindSavedMovies}
              setSearchStringIsMissed={setSearchStringIsMissed}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/profile"
              component={Profile}
              loggedIn={loggedIn}
              isBurgerMenuOpened={isBurgerMenuOpened}
              setIsBurgerMenuOpened={setIsBurgerMenuOpened}
              onUpdateUser={handleUpdateUser}
              onSignOut={handleSignOut}
              setInfoPopupMessage={setInfoPopupMessage}
              setIsPopupOpen={setIsPopupOpen}
              setIsResultSuccess={setIsResultSuccess}
            ></ProtectedRoute>

            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
          <InfoPopup
            isPopupOpen={isPopupOpen}
            messageText={infoPopupMessage}
            isResultSuccess={isResultSuccess}
            onClose={closePopup}
          />
        </main>
      </MovieContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
