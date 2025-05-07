// REGISTER
export const POST_FAKE_REGISTER = "/auth/signup";
export const POST_FAKE_SETPASSWORD = "/auth/signup";

// VERIFY EMAIL
export const CHECK_EMAIL_VERIFICATION = "/auth/check-email-verification";
export const VERIFY_EMAIL = "/auth/verify-email";

// export const CHECK_EMAIL_VERIFICATION = "/login.php";
// export const VERIFY_EMAIL = "/login.php";

export const POST_REGISTER = "/new_user.php";
export const POST_LOGIN = "/login.php";
// RESET PASSWORD
export const POST_RESET_PASSWORD = "/auth/set-new-password";
export const PASSWORD_FORGET = "/auth/forgot-password";

// LOGIN
export const POST_FAKE_LOGIN = "/auth/sign-in";
export const POST_JWT_LOGIN = "/auth/sign-in";
export const POST_FAKE_PASSWORD_FORGET = "/auth/forgot-password";
export const POST_FAKE_JWT_PASSWORD_FORGET = "/jwt-forget-pwd";
export const SOCIAL_LOGIN = "/social-login";

// PROFILE
export const POST_EDIT_JWT_PROFILE = "/post-jwt-profile";
export const POST_EDIT_PROFILE = "/user";

// CATEGORIES
export const POST_CATEGORY = "/contest-category";
export const PUT_CATEGORY = "/contest-category";
export const DELETE_CATEGORY = "/contest-category";
export const GET_CATEGORY = "/contest-category";
export const GET_CATEGORIES = "/contest-categories";
export const GET_CATEGORIES_TREE = "/contest-categories-nested";

//CONTESTS
export const POST_CONTEST = "/cricket-contest";
export const PUT_CONTEST = "/cricket-contest";
export const DELETE_CONTEST = "/cricket-contest";
export const GET_CONTEST = "/cricket-contest";
export const GET_CONTESTS = "/cricket-contests";

//Manage-Team
export const POST_MANAGETEAM = "/team";
export const PUT_MANAGETEAM = "/team";
export const DELETE_MANAGETEAM = "/team";
export const GET_MANAGETEAM = "/team";
export const GET_MANAGETEAMS = "/teams";

export const GET_MANAGEPLYER = "/teams-player";
export const GET_MANAGEPLYERS = "/teams-players";

//PLAYERS
export const POST_PLAYER = "/player";
export const PUT_PLAYER = "/player";
export const DELETE_PLAYER = "/player";
export const GET_PLAYER = "/player";
export const GET_PLAYERS = "/players";
export const GET_PLAYERSSTAT = "/players-stat";
export const GET_PLAYERSSTATS = "/players-stats";

//competitions
export const GET_COMPETITION_LIST = "/competition";
export const GET_COMPETITION_LISTS = "/competitions";

export const GET_COMPETITION_ROUND = "/competitions-round";
export const GET_COMPETITION_ROUNDS = "/competitions-rounds";

export const GET_COMPETITION_STAT = "/competitions-stat";
export const GET_COMPETITION_STATS = "/competitions-stats";

export const GET_COMPETITION_TEAM = "/competitions-team";
export const GET_COMPETITION_TEAMS = "/competitions-teams";

export const GET_COMPETITION_VENUE = "/competitions-venue";
export const GET_COMPETITION_VENUES = "/competitions-venues";

// matches
export const GET_MATCH_LIST = "/match";
export const GET_MATCH_LISTS = "/matches";

export const GET_MATCH_PLAYER = "/matches-player";
export const GET_MATCH_PLAYERS = "/matches-players";

export const GET_MATCH_INNING = "/matches-inning";
export const GET_MATCH_INNINGS = "/matches-innings";

export const GET_MATCH_PLAYER_STAT = "/matches-players-stat";
export const GET_MATCH_PLAYER_STATS = "/matches-players-stats";

export const GET_MATCH_BALL_EVENT = "/matches-ball-events";
export const GET_MATCH_BALL_EVENTS = "/matches-ball-events";

// MATCH Contests
export const POST_MATCH_CONTEST = "/matches-contest";
export const DELETE_MATCH_CONTEST = "/matches-contest";
export const GET_MATCH_CONTEST = "/matches-contest";
export const GET_MATCH_CONTESTS = "/matches-contests";

//match Contest teams

export const GET_MATCH_CONTEST_TEAM = "/match-contest-team";
export const GET_MATCH_CONTEST_TEAMS = "/match-contest-teams";

//match Contest teams Players

export const GET_MATCH_CONTEST_TEAM_PLAYER = "/match-contest-teams-player";
export const GET_MATCH_CONTEST_TEAM_PLAYERS = "/match-contest-teams-players";

// COUNTRIES
export const POST_COUNTRY = "/country";
export const PUT_COUNTRY = "/country";
export const DELETE_COUNTRY = "/country";
export const GET_COUNTRY = "/country";
export const GET_COUNTRIES = "/countries";

// STATES
export const POST_STATE = "/state";
export const PUT_STATE = "/state";
export const DELETE_STATE = "/state";
export const GET_STATE = "/state";
export const GET_STATES = "/states";

// CITIES
export const POST_CITY = "/city";
export const PUT_CITY = "/city";
export const DELETE_CITY = "/city";
export const GET_CITY = "/city";
export const GET_CITIES = "/cities";

// CITIES AREAS
export const POST_CITY_AREA = "/city-area";
export const PUT_CITY_AREA = "/city-area";
export const DELETE_CITY_AREA = "/city-area";
export const GET_CITY_AREA = "/city-area";
export const GET_CITIES_AREAS = "/cities-areas";

// USERS ROLES
export const POST_USER_ROLE = "/user/role";
export const PUT_USER_ROLE = "/user/role";
export const DELETE_USER_ROLE = "/user/role";
export const GET_USER_ROLE = "/user/role";
export const GET_USERS_ROLES = "/users/roles";

// USERS
export const POST_USER = "/update_user.php";
export const PUT_USER = "/update_user.php";
export const DELETE_USER = "/delete_user.php";
export const GET_USER = "/user";
export const GET_USERS = "/user_list.php";

// Mindstrike Players

export const GET_USER_MINDSTRIKE_PLAYER = "/mindstrike-player";
export const GET_USER_MINDSTRIKE_PLAYERS = "/mindstrike-players";

// USERS PERMISSION
export const POST_USER_PERMISSION = "/user/permission";
export const PUT_USER_PERMISSION = "/user/permission";
export const DELETE_USER_PERMISSION = "/user/permission";
export const GET_USER_PERMISSION = "/user/permission";
export const GET_USERS_PERMISSIONS = "/users/permissions";

// USER SETTINGS
export const GET_USER_SETTINGS_MOBILE = "/user/settings/mobile/:user_id";
export const PUT_USER_SETTINGS_MOBILE = "/user/settings/mobile/:user_id";
export const PUT_USER_SETTINGS_VERIFY_MOBILE =
  "/user/settings/verify-mobile/:user_id";
export const GET_USER_SETTINGS_EMAIL = "/user/settings/email/:user_id";
export const PUT_USER_SETTINGS_EMAIL = "/user/settings/email/:user_id";
export const PUT_USER_SETTINGS_VERIFY_EMAIL =
  "/user/settings/verify-email/:user_id";
export const GET_USER_SETTINGS_DETAILS = "/user/settings/details/:user_id";
export const PUT_USER_SETTINGS_DETAILS = "/user/settings/details/:user_id";

// User Contest
export const GET_USER_CRICKET_CONTEST = "/cricket-contest";
export const GET_USER_CRICKET_CONTESTS = "/cricket-contests";

export const GET_USER_CRICKET_CONTEST_TEAM = "/cricket-contests-team";
export const GET_USER_CRICKET_CONTEST_TEAMS = "/cricket-contests-teams";

export const GET_USER_CRICKET_CONTEST_TEAM_PLAYER =
  "/cricket-contests-teams-players";
export const GET_USER_CRICKET_CONTEST_TEAM_PLAYERS =
  "/cricket-contests-teams-players";

// //PLAYERS
// export const GET_PLAYER = "/player";
// export const GET_PLAYERS = "/players";

export const GET_PLAYER_STAT = "/player-stat";
export const GET_PLAYERS_STATS = "/players-stats";

//Teams

export const GET_TEAM = "/team";
export const GET_TEAMS = "/teams";

export const GET_TEAM_PLAYER = "/teams-player";
export const GET_TEAM_PLAYERS = "/teams-players";

//Cricket Constest

export const GET_CRICKET_CONTEST = "/contest";
export const GET_CRICKET_CONTESTS = "/contests";

export const GET_CATEGORY_CRICKET_CONTEST = "/contest-category";
export const GET_CATEGORIES_CRICKET_CONTESTS = "/contest-categories";
