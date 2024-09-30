/* This JavaScript code snippet is setting up an Axios instance called `usersApi` with a base URL of
"/choreo-apis/loginandregister/backend/v1/". It then defines several functions to interact with an API for
user authentication and registration. */
/*import oauth from 'axios-oauth-client'*/
import axios from 'axios';

/* The code snippet `const usersApi = axios.create({baseURL: "/choreo-apis/loginandregister/backend/v1/",})`
is creating an Axios instance named `usersApi`. This instance is configured with a base URL of
"/choreo-apis/loginandregister/backend/v1/". */
/*
const getClientCredentials = oauth.clientCredentials(
  axios.create(),
  <tokenUrl>,
  <consumerKey>,
  <consumerSecret>
);
const auth = await getClientCredentials();
const accessToken = auth.access_token;*/


const usersApi = axios.create({
	baseURL: "https://87eb86a0-e8e6-4dbd-b145-d44aa213613b-dev.e1-us-east-azure.choreoapis.dev/loginandregister/backend/v1/",
})

/**
 * The `LoginUser` function sends a POST request to the "login/" endpoint with user data to log in a
 * user.
 * @param userData - The `userData` parameter in the `LoginUser` function likely contains the
 * information necessary for a user to log in, such as their username, password, or any other
 * credentials required for authentication. This data is sent to the `usersApi` service using a POST
 * request to the "login/" endpoint
 */
export const LoginUser = (userData) => usersApi.post("login/", userData);


/**
 * This function retrieves user data by their user ID from the login endpoint.
 * @param userId - The `userId` parameter is the unique identifier of the user whose information you
 * want to retrieve.
 */
export const getUserById = (userId) => usersApi.get(`login/${userId}`);


/**
 * The function `createUser` sends a POST request to the "register/" endpoint with the user data.
 * @param user - The `user` parameter is an object containing the information needed to create a new
 * user. This object typically includes properties such as username, email, password, and any other
 * relevant user details required for registration.
 */
export const createUser = (user) => usersApi.post("register/", user);
