const sbutton = document.getElementById("sub_button");
const val = document.getElementById("val");
const output_text = document.getElementById("city-name");
const temp_normal = document.getElementById("temp_normal");
const day_l = document.getElementById("day");
const month_l = document.getElementById("month");
const mood = document.getElementById("mood");
const temp_data = document.querySelector(".temp");
const rec = async () => {
  const city = val.value;
  val.value = "";
  if (city === "") {
    output_text.innerHTML = "please enter the a city name to get input !";
    temp_data.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=77a036e69e3512e8483daa304c98c05c`;
      const response = await fetch(url);
      const data = await response.json();
      const arrdata = [data];
      console.log(arrdata);
      temp_normal.innerHTML = arrdata[0].main.temp_max;
      output_text.innerHTML = `${arrdata[0].name}, ${arrdata[0].sys.country}`;

      /* mood*/
      const temp_mood = arrdata[0].weather[0].main;
      console.log(temp_mood);
      // temp_mood = "Rain";
      if (temp_mood === "Rain") {
        mood.innerHTML = '<i class="fa-solid fa-cloud-bolt"></i>';
      } else if (temp_mood === "Clear") {
        mood.innerHTML =
          '<i style="color : #eccc68" class="fa-solid fa-sun"></i>';
      } else if (temp_mood === "Clouds") {
        mood.innerHTML =
          '<i style="color : #f1f2f6" class="fa-solid fa-cloud-sun"></i>';
      } else {
        mood.innerHTML =
          '<i style="color : #f1f2f6" class="fa-solid fa-cloud"></i>';
      }
      temp_data.classList.remove("data_hide");
    } catch {
      output_text.innerHTML = "oops! please enter a valid city name.";
      temp_data.classList.add("data_hide");
    }
  }
};
sbutton.addEventListener("click", rec);
