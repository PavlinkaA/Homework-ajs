const API_URL = "https://swapi.dev/api/planets/?page=1"
const clickBtnnext = document.querySelector(".click-btn-next");
const clickBtnprevious = document.querySelector(".click-btn-previous")
function fetchApi() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => api(data));
};

const clickBtn = document.querySelector(".click-btn")
clickBtn.addEventListener("click", () => {
  fetchApi();
});

const api = (data) => {
  const planetTableBody = document.getElementById("planets-table-body");
  planetTableBody.innerHTML = "";
  for (let planet of data.results) {
    planetTableBody.innerHTML += `<tr>
<td>${planet.name}</td>
<td>${planet.population}</td>
<td>${planet.climate}</td>
<td>${planet.gravity}</td>
</tr>`
  }
  clickBtnnext.classList.remove("click-btn-next");
  clickBtnprevious.classList.add("click-btn-previous");
  document.getElementById("planets-table-body").style.border = "2px solid black";
};

const API_URL2 =
  "https://swapi.dev/api/planets/?page=2"
function fetchApi2() {
  fetch(API_URL2)
    .then(res => res.json())
    .then(data => api2(data));
};



clickBtnnext.addEventListener("click", () => {
  fetchApi2();
});

const api2 = (data) => {

  const planetTableBody = document.getElementById("planets-table-body");
  planetTableBody.innerHTML = "";
  for (let planet of data.results) {

    planetTableBody.innerHTML += `<tr>
  <td>${planet.name}</td>
  <td>${planet.population}</td>
  <td>${planet.climate}</td>
  <td>${planet.gravity}</td>
  </tr>`
  }
  clickBtnnext.classList.add("click-btn-next");
  clickBtnprevious.classList.remove("click-btn-previous");
};


clickBtnprevious.addEventListener("click", () => {
  fetchApi();
});
