import { createAuth0Client } from '@auth0/auth0-spa-js';


const loginBtn = document.getElementById('login');
const output = document.getElementById('output');

const show = (msg) => {
  output.textContent += `\n${msg}`;
};
// Version tests
(async () => {
  const auth0 = await createAuth0Client({
    domain: 'dev-n6li42pa7lfgyazm.us.auth0.com',
    client_id: '3C5Hpt3c8Vili4i58ORomBAsawDBlvmg',
    audience: 'https://api.harvest.org',
    cacheLocation: 'localstorage',
    useRefreshTokens: true
  });

  loginBtn.onclick = async () => {
    await auth0.loginWithPopup();
    const user = await auth0.getUser();
    show('✅ Logged in');
    show(JSON.stringify(user, null, 2));
  };
})();
