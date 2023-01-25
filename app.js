import './style.css'
import { getUserCertificates, Certificate } from 'crypto-pro'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      Testing CAdES-BES browser plugin
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

window.addEventListener('DOMContentLoaded', () => {
  (async () => {
    let certificates = [];
  
    try {
      certificates = await getUserCertificates();
      console.log(certificates);
    } catch (error) {
      console.error(error);
    }
  })()
});
