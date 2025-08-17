const weatherData = {
    tehran: { temp: 31, condition: "آفتابی", humidity: 22, wind: 14 },
    mashhad: { temp: 27, condition: "نیمه‌ابری", humidity: 35, wind: 10 },
    shiraz: { temp: 34, condition: "آفتابی", humidity: 18, wind: 12 },
    tabriz: { temp: 24, condition: "بارانی", humidity: 50, wind: 8 },
    esfahan: { temp: 29, condition: "ابری", humidity: 40, wind: 11 },
    rasht: { temp: 26, condition: "بارانی", humidity: 78, wind: 6 },
    yazd: { temp: 38, condition: "آفتابی", humidity: 12, wind: 15 },
    kerman: { temp: 30, condition: "نیمه‌ابری", humidity: 28, wind: 9 },
    ahvaz: { temp: 41, condition: "گرد و غبار", humidity: 20, wind: 18 },
    bandarabbas: { temp: 36, condition: "شرجی", humidity: 80, wind: 7 },
};
const siteSearch = document.querySelector("#site_search");
const searchSub = document.querySelector("#search_submit");
const description = document.querySelector(".description");
const body = document.querySelector("body");
const timeDis = document.querySelector(".time-dis");
const form = document.querySelector(".main-form");

const city = document.querySelector(".city");
const degree = document.querySelector(".degree-p");
const windSpeed = document.querySelector(".wind-p");
const humid = document.querySelector(".humidity-p");

const displayTime = setInterval(() => {
    function formatTime(number) {
        return number < 10 ? "0" + number : number;
    }
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDay();
    const year = today.getFullYear();

    const hour = formatTime(today.getHours());
    const minute = formatTime(today.getMinutes());
    const seconds = formatTime(today.getSeconds());

    const output = hour + ":" + minute + ":" + seconds;
    // console.log(output);
    timeDis.innerHTML = `
                <p>Current Time: ${output}</p>
            `;
}, 1000);

function mainFunc(input) {
    let bgCon;
    for (let [key, value] of Object.entries(weatherData)) {
        // console.log(key);

        if (key == input) {
            city.innerText = input[0].toLocaleUpperCase() + key.slice(1);
            degree.innerText = value.temp;
            windSpeed.innerText = value.wind;
            humid.innerText = value.humidity;
            bgCon = value.condition;
        }
    }

    switch (bgCon) {
        case "آفتابی":
            body.setAttribute("class", "sunny");
            break;
        case "نیمه‌ابری":
            body.setAttribute("class", "partly-cloudy");
            break;
        case "ابری":
            body.setAttribute("class", "cloudy");
            break;
        case "بارانی":
            body.setAttribute("class", "rainy");
            break;
        case "گرد و غبار":
            body.setAttribute("class", "dust");
            break;
        case "شرجی":
            body.setAttribute("class", "sultry");
            break;
    }
}

const startCon = localStorage.getItem("condition");
mainFunc(startCon);

searchSub.addEventListener("click", () => {
    const input = siteSearch.value;
    // console.log(input);
    siteSearch.value = "";

    mainFunc(input);

    localStorage.setItem("condition", input);
});

siteSearch.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchSub.click();
    }
});
