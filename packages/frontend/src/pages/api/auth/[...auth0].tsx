// pages/api/auth/[...auth0].js
import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

// TODO: need to implement
export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        authorizationParams: {
          // scope: 'offline_access'
          // audience: 'https://api.example.com/products', // or AUTH0_AUDIENCE
          // Add the `offline_access` scope to also get a Refresh Token
          scope: 'openid profile email offline_access', // or AUTH0_SCOPE
        },
        returnTo: '/profile',
      });
    } catch (error) {
      res.status(error.status || 400).end(error.message);
    }
  },
  logout: async (req, res) => {
    try {
      await handleLogout(req, res, {
        returnTo: '/',
      });
    } catch (error) {
      console.error(error);
    }
  },
});

// import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

// export default withApiAuthRequired(async function products(req, res) {
//   // If your Access Token is expired and you have a Refresh Token
//   // getAccessToken will fetch you a new one using the refresh_token grant
//   const { accessToken } = await getAccessToken(req, res);  // request the token
//   console.log(accessToken);
//   const response = await fetch('localhost:3010/v1/api/school', {
//     headers: {
//       Authorization: Bearer ${accessToken}
//     }
//   });
//   const products = await response.json();
//   // res.status(200).json(products);
//   return <pre>{products}</pre>;
// });
