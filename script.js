let div = document.querySelector('#info');
let btn = document.querySelector('button');
let iframe = document.querySelector('#map');

btn.addEventListener('click', () => {
  fetch('https://ipinfo.io/json')
    .then(res => res.json())
    .then(data => {
  
    

      div.innerHTML += `
        <div><strong>IP:</strong> ${data.ip}</div>
        <div><strong>Hostname:</strong> ${data.hostname}</div>
        <div><strong>Shahar:</strong> ${data.city}</div>
        <div><strong>Region:</strong> ${data.region}</div>
        <div><strong>Mamlakat:</strong> ${data.country}</div>
        <div><strong>Koordinatalar:</strong> ${data.loc}</div>
        <div><strong>Org:</strong> ${data.org}</div>
        <div><strong>Timezone:</strong> ${data.timezone}</div>
       
      `;


    });
});