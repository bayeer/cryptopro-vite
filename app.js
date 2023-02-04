import './style.css'
import { getUserCertificates } from 'crypto-pro'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      Testing CAdES-BES browser plugin
    </div>
    <p class="read-the-docs" id="certs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

function onDomReady() {
  (async function() {
    let certificates = [];
  
    try {
      certificates = await getUserCertificates();
      console.log(certificates);

      const thumbprints = certificates.map((cert) => cert.thumbprint);
      document.querySelector('#certs').innerHTML = thumbprints.join("\n<br>");

    } catch (error) {
      console.error(error);
    }
  })()
}

window.addEventListener('DOMContentLoaded', onDomReady);
