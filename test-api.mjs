fetch('https://api.data.gov.my/data-catalogue?id=fuelprice&limit=5&sort=-date').then(res => res.json()).then(data => console.log(JSON.stringify(data, null, 2))).catch(console.error);
