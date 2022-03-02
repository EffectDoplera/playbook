const urls = ["url1", "url2", "url3"];
const fetch = () => new Promise((res) => {
  setTimeout(() => res(111), 1000);
})

function makeRequest(dataUrls) {
  const requests = dataUrls.map((item) => fetch(item));
  return Promise.all(requests);
}

makeRequest(urls).then((res) => console.log(res));
