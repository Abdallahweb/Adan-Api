
  $(document).ready(function() {
    $(".info1").delay(100).slideDown(), $(".info2").delay(120).slideDown(), $(".info3").delay(140).slideDown(), $(
      ".info4").delay(160).slideDown(), $(".info5").delay(180).slideDown(), $(".info6").delay(200).slideDown(), $(
      ".details").fadeIn()
  })


  function getch(e) {
    let s = document.getElementById("date"),
      c = document.getElementById("fajr"),
      d = document.getElementById("shourouk"),
      m = document.getElementById("dhohr"),
      u = document.getElementById("asr"),
      g = document.getElementById("maghreb"),
      o = document.getElementById("esha");
    fetch(`https://api.aladhan.com/v1/timingsByCity?city='${e}'&country=egypt`).then(e => e.json()).then(e => {

      savePrayerTimes(e.data);

      s.innerHTML = `<h1 class="date"> التاريخ الهجري : ${Object.values(e.data.date)[2].date} هجرياً</h1> `;
            let f = `${Object.values(e.data.timings)[0]}`;

      c.innerText =f.slice(1, 2) + ":" + f.slice(3, 5) + " صباحاً ";

            let h = `${Object.values(e.data.timings)[1]}`;
      d.innerText = h.slice(1, 2) + ":" + h.slice(3, 5) + " صباحاً ";

      let t = `${Object.values(e.data.timings)[2]}`;
      var n = t.slice(0, 2);
      m.innerText = n <= 12 ? n + ":" + t.slice(3, 5) + " صباحاً" : n - 12 + ":" + t.slice(3, 5) + " ظهراً ";
      let a = `${Object.values(e.data.timings)[3]}`;
      n = a.slice(0, 2) - 12, u.innerText = n + ":" + a.slice(3, 5) + " عصراً ";
      let i = `${Object.values(e.data.timings)[4]}`;
      n = i.slice(0, 2) - 12, g.innerText = n + ":" + i.slice(3, 5) + " مساءً ";
      let l = `${Object.values(e.data.timings)[6]}`;
      e = l.slice(0, 2) - 12, o.innerText = e + ":" + l.slice(3, 5) + " مساءً "
    })
  }

  function load() {
    let s = document.getElementById("date"),
      c = document.getElementById("fajr"),
      d = document.getElementById("shourouk"),
      m = document.getElementById("dhohr"),
      u = document.getElementById("asr"),
      g = document.getElementById("maghreb"),
      o = document.getElementById("esha");
    fetch("https://api.aladhan.com/v1/timingsByCity?city=giza&country=egypt").then(e => e.json()).then(e => {
      savePrayerTimes(e.data);
      s.innerHTML = `<h1 class="date"> التاريخ الهجري : ${Object.values(e.data.date)[2].date} هجرياً</h1>`;
      
          let f = `${Object.values(e.data.timings)[0]}`;

      c.innerText =f.slice(1, 2) + ":" + f.slice(3, 5) + " صباحاً ";

            let h = `${Object.values(e.data.timings)[1]}`;
      d.innerText = h.slice(1, 2) + ":" + h.slice(3, 5) + " صباحاً ";

      let t = `${Object.values(e.data.timings)[2]}`;
      var n = t.slice(0, 2);
      m.innerText = n <= 12 ? n + ":" + t.slice(3, 5) + " صباحاً" : n - 12 + ":" + t.slice(3, 5) + " ظهراً ";
      let a = `${Object.values(e.data.timings)[3]}`;
      n = a.slice(0, 2) - 12, u.innerText = n + ":" + a.slice(3, 5) + " عصراً ";
      let i = `${Object.values(e.data.timings)[4]}`;
      n = i.slice(0, 2) - 12, g.innerText = n + ":" + i.slice(3, 5) + " مساءً ";
      let l = `${Object.values(e.data.timings)[6]}`;
      e = l.slice(0, 2) - 12, o.innerText = e + ":" + l.slice(3, 5) + " مساءً "
    })
  }
  load()


    
        // function updateClock() {
        //     const now = new Date();
        //     const time = now.toLocaleTimeString('ar-EG');
        //     document.getElementById('clock').textContent = time;
        // }

        // updateClock();
        // setInterval(updateClock, 1000);


        let prayerTimes = {};

function savePrayerTimes(data) {
    prayerTimes = {
        الفجر: data.timings.Fajr,
        الشروق: data.timings.Sunrise,
        الظهر: data.timings.Dhuhr,
        العصر: data.timings.Asr,
        المغرب: data.timings.Maghrib,
        العشاء: data.timings.Isha
    };
}

function checkNextPrayer() {

    if (Object.keys(prayerTimes).length === 0) return;

    const now = new Date();

    let nextName = "";
    let nextTime = null;

    for (let name in prayerTimes) {

        let parts = prayerTimes[name].split(":");

        let date = new Date();

        date.setHours(parseInt(parts[0]));
        date.setMinutes(parseInt(parts[1]));
        date.setSeconds(0);

        if (date > now) {
            nextName = name;
            nextTime = date;
            break;
        }
    }

    if (!nextTime) {
        let parts = prayerTimes["الفجر"].split(":");

        nextTime = new Date();
        nextTime.setDate(nextTime.getDate() + 1);
        nextTime.setHours(parts[0]);
        nextTime.setMinutes(parts[1]);
        nextTime.setSeconds(0);
       
        nextName = "الفجر";
    }


    if(nextName == "الفجر"){
document.getElementsByClassName("info1")[0].classList.add("nextTime"); 
document.getElementsByClassName("info2")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info3")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info4")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info5")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info6")[0].classList.remove("nextTime"); 
  }
  else if(nextName == "الشروق"){
document.getElementsByClassName("info2")[0].classList.add("nextTime"); 
document.getElementsByClassName("info1")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info3")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info4")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info5")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info6")[0].classList.remove("nextTime"); 

  }
  else if(nextName == "الظهر"){
document.getElementsByClassName("info3")[0].classList.add("nextTime"); 
document.getElementsByClassName("info1")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info2")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info4")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info5")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info6")[0].classList.remove("nextTime");  
 }
  else if(nextName == "العصر"){
document.getElementsByClassName("info4")[0].classList.add("nextTime"); 
document.getElementsByClassName("info1")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info2")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info3")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info5")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info6")[0].classList.remove("nextTime"); 
  }
  else if(nextName == "المغرب"){
document.getElementsByClassName("info5")[0].classList.add("nextTime"); 
document.getElementsByClassName("info1")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info2")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info3")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info4")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info6")[0].classList.remove("nextTime"); 
  }
  else if(nextName == "العشاء"){
document.getElementsByClassName("info6")[0].classList.add("nextTime"); 
document.getElementsByClassName("info1")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info2")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info3")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info4")[0].classList.remove("nextTime"); 
document.getElementsByClassName("info5")[0].classList.remove("nextTime"); 
  }
    let diff = Math.floor((nextTime - now) / 1000);

    let hours = Math.floor(diff / 3600);
    let minutes = Math.floor((diff % 3600) / 60);
    let seconds = diff % 60;

    let msg = "";

    if (diff <= 0) {
        msg = "🔔 حان الآن موعد صلاة " + nextName;

    }
    else if (hours === 0 && minutes <= 5) {
        msg = "⏳ متبقي " + minutes + " دقيقة و " + seconds + " ثانية على صلاة " + nextName;
    }
    else if (hours === 0 && minutes <= 15) {
        msg = "⏳ متبقي " + minutes + " دقيقة على صلاة " + nextName;
    }
    else {
      
        msg = "<img src='fav.jpg' style='width:40px;height:40px'> الصلاة القادمة : " + nextName +
              " بعد " + hours + " ساعة و " + minutes + " دقيقة" ;
              
    }

    document.getElementById("nextPrayer").innerHTML = msg;
}

setInterval(checkNextPrayer,1000);