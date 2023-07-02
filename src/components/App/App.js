import React from "react";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Register from "../Register/Register.js";

import { CurrentUserContext } from "../../contexts/currentUserContext";
import { MovieContext } from "../../contexts/MovieContext";
import { Route, Switch, useHistory } from "react-router-dom";
import Login from "../Login/Login.js";
import Page404 from "../Page404/Page404.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import InfoTooltipPopup from "../InfoTooltipPopup/InfoTooltipPopup";
import * as constants from "../../utils/constants";



export default App;
