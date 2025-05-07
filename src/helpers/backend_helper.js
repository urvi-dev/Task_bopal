import { STATUS_CODE } from "../constants/constants";
import { APIClient } from "./api_helper";

import * as url from "./url_helper";

const api = new APIClient();

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
export const postFakeRegister = (data) =>
  api.post(url.POST_FAKE_REGISTER, data);

export const postFakesetPassword = (data) =>
  api.post(url.POST_FAKE_SETPASSWORD, data);

// Login Method
export const postFakeLogin = (data) => api.post(url.POST_FAKE_LOGIN, data);

// verify email
export const checkEmailVerification = (data) =>
  api.post(url.CHECK_EMAIL_VERIFICATION, data);
export const verifyEmail = (data) => api.post(url.VERIFY_EMAIL, data);
export const resetPassword = (data) =>
  api.update(url.POST_RESET_PASSWORD, data);

// postForgetPwd
export const postFakeForgetPwd = (data) =>
  api.post(url.POST_FAKE_PASSWORD_FORGET, data);
export const passwordForget = (data) => api.post(url.PASSWORD_FORGET, data);

// Edit profile
export const postJwtProfile = (data) =>
  api.post(url.POST_EDIT_JWT_PROFILE, data);

export const postFakeProfile = (data) =>
  api.update(url.POST_EDIT_PROFILE + "/" + data.idx, data);

// Register Method
export const postJwtRegister = (url, data) => {
  return api.post(url, data).catch((err) => {
    var message;
    if (err.response && err.response.status) {
      switch (err.response.status) {
        case STATUS_CODE.notFound:
          message = "Sorry! the page you are looking for could not be found";
          break;
        case STATUS_CODE.internalServerError:
          message =
            "Sorry! something went wrong, please contact our support team";
          break;
        case STATUS_CODE.unauthorized:
          message = "Invalid credentials";
          break;
        default:
          message = err[1];
          break;
      }
    }
    throw message;
  });
};

export const postJwtsetPassword = (url, data) => {
  return api.post(url, data).catch((err) => {
    var message;
    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 404:
          message = "Sorry! the page you are looking for could not be found";
          break;
        case 500:
          message =
            "Sorry! something went wrong, please contact our support team";
          break;
        case 401:
          message = "Invalid credentials";
          break;
        default:
          message = err[1];
          break;
      }
    }
    throw message;
  });
};

// Login Method
export const postJwtLogin = (data) => api.post(url.POST_JWT_LOGIN, data);

// postForgetPwd
export const postJwtForgetPwd = (data) =>
  api.post(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = (data) => api.post(url.SOCIAL_LOGIN, data);

// Categories
export const postCategory = (categories) =>
  api.post(url.POST_CATEGORY, categories);
export const putCategory = (data, id) =>
  api.put(`${url.PUT_CATEGORY}/${id}`, data);
export const deleteCategory = (id) =>
  api.delete(`${url.DELETE_CATEGORY}/${id}`);
export const getCategory = (id) => {
  return api.get(`${url.GET_CATEGORY}/${id}`);
};
export const getCategories = (payload) => api.post(url.GET_CATEGORIES, payload);
export const getCategoriesTree = (payload) => api.get(url.GET_CATEGORIES_TREE);

//Contests
export const postContest = (contests) => api.post(url.POST_CONTEST, contests);
export const putContest = (data, id) =>
  api.put(`${url.PUT_CONTEST}/${id}`, data);
export const deleteContest = (id) => api.delete(`${url.DELETE_CONTEST}/${id}`);
export const getContest = (id) => {
  return api.get(`${url.GET_CONTEST}/${id}`);
};
export const getContests = (payload) => api.post(url.GET_CONTESTS, payload);

// //kyc

// export const deleteKyc = (id) => api.delete(`${url.DELETE_KYC}/${id}`);
// export const getKyc = (id) => {
//   return api.get(`${url.GET_KYC}/${id}`);
// };
// export const getKycs = (payload) => api.post(url.GET_KYCS, payload);

// //WithdrawRequestsReducer
// export const deleteWithdrawRequest = (id) => api.delete(`${url.DELETE_WITHDRAW_REQUEST}/${id}`);
// export const getWithdrawRequest = (id) => {
//   return api.get(`${url.GET_WITHDRAW_REQUEST}/${id}`);
// };
// export const getWithdrawRequests = (payload) => api.post(url.GET_WITHDRAW_REQUESTS, payload);

//user_contest

// export const deleteUserContest = (id) => api.delete(`${url.DELETE_USERCONTEST}/${id}`);
// export const getUserContest = (id) => {
//   return api.get(`${url.GET_USERCONTEST}/${id}`);
// };
// export const getUserContests = (payload) => api.post(url.GET_USERCONTESTS, payload);

//ManageTeam
export const postManageTeam = async (formData) => {
  try {
    const response = await api.post(url.POST_MANAGETEAM, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response; // Return only the data part of the response
  } catch (error) {
    throw error.response ? error.response.data : error; // Throw error to be caught by thunk
  }
};

export const putManageTeam = async (data, id) => {
  try {
    const response = await api.put(`${url.PUT_MANAGETEAM}/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response; // Return only the data part of the response
  } catch (error) {
    throw error.response ? error.response.data : error; // Throw error to be caught by thunk
  }
};

export const importManageTeams = async (data) => {
  try {
    const response = await api.post(url.IMPORT_MANAGETEAM, data);
    return response;
  } catch (error) {
    throw error.response ? error.response.data : error; // Throw error to be caught by thunk
  }
};
export const deleteManageTeam = (id) =>
  api.delete(`${url.DELETE_MANAGETEAM}/${id}`);
export const getManageTeam = (id) => {
  return api.get(`${url.GET_MANAGETEAM}/${id}`);
};
export const getManageTeams = (payload) =>
  api.post(url.GET_MANAGETEAMS, payload);

export const getManagePlyer = (id) => {
  return api.get(`${url.GET_MANAGEPLYER}/${id}`);
};
export const getManagePlyers = (payload) =>
  api.post(url.GET_MANAGEPLYERS, payload);

//players

export const postPlayer = async (formData) => {
  try {
    const response = await api.post(url.POST_PLAYER, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const putPlayer = async (data, id) => {
  try {
    const response = await api.put(`${url.PUT_PLAYER}/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const importPlayers = async (data) => {
  try {
    const response = await api.post(url.IMPORT_PLAYER, data);
    return response;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const deletePlayer = (id) => api.delete(`${url.DELETE_PLAYER}/${id}`);
export const getPlayer = (id) => {
  return api.get(`${url.GET_PLAYER}/${id}`);
};
export const getPlayers = (payload) => api.post(url.GET_PLAYERS, payload);

export const getPlayersStat = (id) => {
  return api.get(`${url.GET_PLAYERSSTAT}/${id}`);
};
export const getPlayersStats = (payload) =>
  api.post(url.GET_PLAYERSSTATS, payload);

// export const postUnit = (units) => api.post(url.POST_UNIT, units);
// export const putUnit = (data, id) => api.put(`${url.PUT_UNIT}/${id}`, data);
// export const deleteUnit = (id) => api.delete(`${url.DELETE_UNIT}/${id}`);
// export const getUnit = (id) => {
//   return api.get(`${url.GET_UNIT}/${id}`);
// };
// export const getUnits = (payload) => api.post(url.GET_UNITS, payload);

//competitions
export const getCompetitionList = (id) => {
  return api.get(`${url.GET_COMPETITION_LIST}/${id}`);
};
export const getCompetitionLists = (payload) =>
  api.post(url.GET_COMPETITION_LISTS, payload);

//competitions details
export const getCompetitionRound = (id) => {
  return api.get(`${url.GET_COMPETITION_ROUND}/${id}`);
};
export const getCompetitionRounds = (payload) =>
  api.post(url.GET_COMPETITION_ROUNDS, payload);
//competition stats
export const getCompetitionStat = (id) => {
  return api.get(`${url.GET_COMPETITION_STAT}/${id}`);
};
export const getCompetitionStats = (payload) =>
  api.post(url.GET_COMPETITION_STATS, payload);
//competition teams
export const getCompetitionTeam = (id) => {
  return api.get(`${url.GET_COMPETITION_TEAM}/${id}`);
};
export const getCompetitionTeams = (payload) =>
  api.post(url.GET_COMPETITION_TEAMS, payload);
//competition venues
export const getCompetitionVenue = (id) => {
  return api.get(`${url.GET_COMPETITION_VENUE}/${id}`);
};
export const getCompetitionVenues = (payload) =>
  api.post(url.GET_COMPETITION_VENUES, payload);

//matchLists
export const getMatchList = (id) => {
  return api.get(`${url.GET_MATCH_LIST}/${id}`);
};
export const getMatchLists = (payload) =>
  api.post(url.GET_MATCH_LISTS, payload);
//matchPlayers
export const getMatchPlayer = (id) => {
  return api.get(`${url.GET_MATCH_PLAYER}/${id}`);
};
export const getMatchPlayers = (payload) =>
  api.post(url.GET_MATCH_PLAYERS, payload);
//matchInnings
export const getMatchInning = (id) => {
  return api.get(`${url.GET_MATCH_INNING}/${id}`);
};
export const getMatchInnings = (payload) =>
  api.post(url.GET_MATCH_INNINGS, payload);
//matchPlayerStats
export const getMatchPlaterStat = (id) => {
  return api.get(`${url.GET_MATCH_PLAYER_STAT}/${id}`);
};
export const getMatchPlayerStats = (payload) =>
  api.post(url.GET_MATCH_PLAYER_STATS, payload);
//matchBallEvents
export const getMatchBallEvent = (id) => {
  return api.get(`${url.GET_MATCH_BALL_EVENT}/${id}`);
};
export const getMatchBallEvents = (payload) =>
  api.post(url.GET_MATCH_BALL_EVENTS, payload);

//match contest
export const postMatchContest = (matches) =>
  api.post(url.POST_MATCH_CONTEST, matches);
export const deleteMatchContest = (id) =>
  api.delete(`${url.DELETE_MATCH_CONTEST}/${id}`);
export const getMatchContest = (id) => {
  return api.get(`${url.GET_MATCH_CONTEST}/${id}`);
};
export const getMatchContests = (payload) =>
  api.post(url.GET_MATCH_CONTESTS, payload);

//match contest teams
export const getMatchContestTeam = (id) => {
  return api.get(`${url.GET_MATCH_CONTEST_TEAM}/${id}`);
};
export const getMatchContestTeams = (payload) =>
  api.post(url.GET_MATCH_CONTEST_TEAMS, payload);

//match contest teams players
export const getMatchContestTeamPlayer = (id) => {
  return api.get(`${url.GET_MATCH_CONTEST_TEAM_PLAYER}/${id}`);
};
export const getMatchContestTeamPlayers = (payload) =>
  api.post(url.GET_MATCH_CONTEST_TEAM_PLAYERS, payload);

// Countries
export const postCountry = (countries) => api.post(url.POST_COUNTRY, countries);
export const putCountry = (data, id) =>
  api.put(`${url.PUT_COUNTRY}/${id}`, data);
export const deleteCountry = (id) => api.delete(`${url.DELETE_COUNTRY}/${id}`);
export const getCountry = (id) => {
  return api.get(`${url.GET_COUNTRY}/${id}`);
};
export const getCountries = (payload) => api.post(url.GET_COUNTRIES, payload);

// States
export const postState = (states) => api.post(url.POST_STATE, states);
export const putState = (data, id) => api.put(`${url.PUT_STATE}/${id}`, data);
export const deleteState = (id) => api.delete(`${url.DELETE_STATE}/${id}`);
export const getState = (id) => {
  return api.get(`${url.GET_STATE}/${id}`);
};
export const getStates = (payload) => {
  return api.post(url.GET_STATES, payload);
};

// Cities
export const postCity = (states) => api.post(url.POST_CITY, states);
export const putCity = (data, id) => api.put(`${url.PUT_CITY}/${id}`, data);
export const deleteCity = (id) => api.delete(`${url.DELETE_CITY}/${id}`);
export const getCity = (id) => {
  return api.get(`${url.GET_CITY}/${id}`);
};
export const getCities = (payload) => api.post(url.GET_CITIES, payload);

// Cities Areas
export const postCityArea = (cities_areas) =>
  api.post(url.POST_CITY_AREA, cities_areas);
export const putCityArea = (data, id) =>
  api.put(`${url.PUT_CITY_AREA}/${id}`, data);
export const deleteCityArea = (id) =>
  api.delete(`${url.DELETE_CITY_AREA}/${id}`);
export const getCityArea = (id) => {
  return api.get(`${url.GET_CITY_AREA}/${id}`);
};
export const getCitiesAreas = (payload) =>
  api.post(url.GET_CITIES_AREAS, payload);

// Users
export const postUser = (users) => api.post(url.POST_USER, users);
export const putUser = (data, id) => api.put(`${url.PUT_USER}/${id}`, data);
export const deleteUser = (id) => api.delete(`${url.DELETE_USER}/${id}`);
export const getUser = (id) => {
  return api.get(`${url.GET_USER}/${id}`);
};
export const getUsers = (payload) => api.post(url.GET_USERS, payload);

// Mindstrike Players
export const getUserMindStrikrPlayer = (id) => {
  return api.get(`${url.GET_USER_MINDSTRIKE_PLAYER}/${id}`);
};
export const getUserMindStrikrPlayers = (payload) =>
  api.post(url.GET_USER_MINDSTRIKE_PLAYERS, payload);

//TeamPlayers
export const postUserTeamPlayer = (userTeamPlayers) =>
  api.post(url.POST_USER_TEAM_PLAYER, userTeamPlayers);
export const putUserTeamPlayer = (userTeamPlayers) =>
  api.put(url.PUT_USER_TEAM_PLAYER, userTeamPlayers);
export const deleteUserTeamPlayer = (id) =>
  api.delete(`${url.DELETE_USER_TEAM_PLAYER}/${id}`);
export const changeStatusUserTeamPlayer = (payload, id) =>
  api.patch(`${url.CHANGE_STATUS_USER_TEAM_PLAYER}/${id}`, payload);
export const getUserTeamPlayer = (id) =>
  api.get(`${url.GET_USER_TEAM_PLAYER}/${id}`);
export const getUserTeamPlayers = (userTeamPlayers) =>
  api.post(url.GET_USER_TEAM_PLAYERS, userTeamPlayers);

// Sales Customers
export const postSalesCustomer = (customers) =>
  api.post(url.POST_SALES_CUSTOMER, customers);
export const putSalesCustomer = (customers) =>
  api.put(url.PUT_SALES_CUSTOMER, customers);
export const deleteSalesCustomer = (customers) =>
  api.delete(url.DELETE_SALES_CUSTOMER, { headers: { customers } });
export const getSalesCustomer = (customers) =>
  api.get(url.GET_SALES_CUSTOMER, customers);
export const getSalesCustomers = (customers) =>
  api.get(url.GET_SALES_CUSTOMER, customers);

// Sales Orders
export const postSalesOrder = (sales_orders) =>
  api.post(url.POST_SALES_ORDER, sales_orders);
export const putSalesOrder = (sales_orders) =>
  api.put(url.PUT_SALES_ORDER, sales_orders);
export const deleteSalesOrder = (id) =>
  api.delete(`${url.DELETE_SALES_ORDER}/${id}`);
export const getSalesOrder = (id) => api.get(`${url.GET_SALES_ORDER}/${id}`);
export const getSalesOrders = (sales_orders) =>
  api.post(url.GET_SALES_ORDERS, sales_orders);

// Users Roles
export const postRole = (roles) => api.post(url.POST_USER_ROLE, roles);
export const putRole = (data, id) =>
  api.put(`${url.PUT_USER_ROLE}/${id}`, data);
export const deleteRole = (id) => api.delete(`${url.DELETE_USER_ROLE}/${id}`);
export const getRole = (id) => {
  return api.get(`${url.GET_USER_ROLE}/${id}`);
};
export const getRoles = (payload) => api.post(url.GET_USERS_ROLES, payload);

// Users Permissions
export const postPermission = (permissions) =>
  api.post(url.POST_USER_PERMISSION, permissions);
export const putPermission = (data, id) =>
  api.put(`${url.PUT_USER_PERMISSION}/${id}`, data);
export const deletePermission = (id) =>
  api.delete(`${url.DELETE_USER_PERMISSION}/${id}`);
export const getPermission = (id) => {
  return api.get(`${url.GET_USER_PERMISSION}/${id}`);
};
export const getPermissions = (payload) =>
  api.post(url.GET_USERS_PERMISSIONS, payload);

//User Contest
export const getUserCricketContest = (id) => {
  return api.get(`${url.GET_USER_CRICKET_CONTEST}/${id}`);
};
export const getUserCricketContests = (payload) =>
  api.post(url.GET_USER_CRICKET_CONTESTS, payload);

export const getUserCricketContestTeam = (id) => {
  return api.get(`${url.GET_USER_CRICKET_CONTEST}/${id}`);
};
export const getUserCricketContestsTeams = (payload) =>
  api.post(url.GET_USER_CRICKET_CONTESTS, payload);

export const getUserCricketContestTeamPlayer = (id) => {
  return api.get(`${url.GET_USER_CRICKET_CONTEST}/${id}`);
};
export const getUserCricketContestTeamPlayers = (payload) =>
  api.post(url.GET_USER_CRICKET_CONTESTS, payload);

export const postregisterUser = async (formData) => {
  try {
    const response = await api.post(url.POST_REGISTER, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
