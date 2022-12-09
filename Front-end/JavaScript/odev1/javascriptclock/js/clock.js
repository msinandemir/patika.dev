let userName = prompt("Kullanıcı adını giriniz");
let userNameDOM = document.querySelector("#myName");
let clockDOM = document.querySelector("#myClock");
let date;
function showTime() {
  date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  clockDOM.innerHTML = `${hour}:${minute}:${second} ${dayConverter()}`;
}

const checkUser = () => {
  if (userName) {
    userNameDOM.innerHTML = `${userName}`;
  } else {
    alert("Kullanıcı adı boş bırakılamaz!");
    location.reload();
  }
};

const dayConverter = () => {
  date = new Date();
  const days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];
  let day = days[date.getDay() - 1];
  return day;
};

checkUser();
setInterval(showTime, 1000);
showTime();
