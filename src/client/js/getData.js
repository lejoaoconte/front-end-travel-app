import axios from "axios";
import moment from "moment";

function handleForm(event) {
  event.preventDefault();

  const city = document.getElementById("city").value;
  const date = document.getElementById("date").value;

  setArrayValues(city, date);
}

function setArrayValues(city, date) {
  const value = {
    city,
    date,
  };

  let data = [];
  if (localStorage.getItem("local-infos"))
    data = JSON.parse(localStorage.getItem("local-infos"));
  data.unshift(value);

  localStorage.setItem("local-infos", JSON.stringify(data));
  getData(city, date);
}

function getDaysTrip(date) {
  const now = moment(new Date());
  const tripDate = moment(date);
  const days = tripDate.diff(now, "days");

  return days < 0 ? 0 : days;
}

function getData(city, date) {
  console.log(city, date);
  const base_url = "http://localhost:8055";

  document.getElementById("loading-area").style.display = "flex";

  axios
    .post(`${base_url}/getcity`, {
      city,
    })
    .then(({ data }) => {
      const { geonames } = data;
      const { countryName } = geonames[0];
      const { name } = geonames[0];

      const html = document.createElement("div");
      html.setAttribute("class", "general-trip-area");

      const { lat } = geonames[0];
      const { lng } = geonames[0];

      const bodySend = {
        lat: lat,
        lon: lng,
      };

      axios.post(`${base_url}/getweather`, bodySend).then(({ data }) => {
        const { temp } = data.data[0];

        const htmlWeather = `<div class="basic-infos-area">
                              <h3>My trip to: ${name}, ${countryName}</h3>
                              <div>
                                <p>Date: <span>${date}</span></p>
                              </div>
                              <div>
                                ${
                                  temp !== null
                                    ? `<p>Weather: <span>${temp}˚C</span></p>`
                                    : "<p>Weather: <span>Uninformed</span></p>"
                                }
                              </div>
                              <div>
                                <p>Remaining <span>${getDaysTrip(
                                  date
                                )} days</span> to your trip</p>
                              </div>
                            </div>`;

        axios.post(`${base_url}/images`, { city }).then(({ data }) => {
          let htmlImages = "<div></div>";
          if (data.hits.length > 0) {
            const { largeImageURL } = data.hits[0];
            htmlImages = `<div id="image-trip-area" style="background-image: url('${largeImageURL}')"></div>`;
          } else {
            htmlImages = `<div id="image-trip-area" style="background-image: url('https://via.placeholder.com/450x450')"></div>`;
          }

          html.innerHTML += htmlImages;
          html.innerHTML += htmlWeather;

          document.getElementById("my-trips").prepend(html);
          document.getElementById("loading-area").style.display = "none";
        });
      });
    });
}

export { getData, handleForm, setArrayValues };
