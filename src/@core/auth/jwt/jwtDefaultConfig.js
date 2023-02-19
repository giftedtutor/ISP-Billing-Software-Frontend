// ** Auth Endpoints
export default {
  // loginEndpoint: '/jwt/login',
  // registerEndpoint: '/jwt/register',
  // refreshEndpoint: '/jwt/refresh-token',
  // logoutEndpoint: '/jwt/logout',
  // loginEndpoint: 'thesfb.live/Eastern-highway/api/login',
  // registerEndpoint: 'thesfb.live/Eastern-highway/api/register',
  loginEndpoint: 'http://127.0.0.1:8000/api/auth/login',
  registerEndpoint: 'http://127.0.0.1:8000/api/auth/register',
  refreshEndpoint: 'http://127.0.0.1:8000/api/auth/refresh',
  logoutEndpoint: 'http://127.0.0.1:8000/api/auth/logout',

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken'
}
