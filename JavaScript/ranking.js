const rankingContainer = document.querySelector("#rankings");
const info = [
  {
    id: 1,
    img: "../Images/Avatars/Keepitreal.png",
    name: "Jaydon Ekstrom Bothman",
    name1: "Zain Dokidis",
  },
  {
    id: 2,
    img: "../Images/Avatars/DigiLab.png",
    name: "Ruben Carder",
    name1: "Ruben Vetrovs",
  },
  {
    id: 3,
    img: "../Images/Avatars/GravityOne.png",
    name: "Alfredo Septimus",
    name1: "Maren Franci",
  },
  {
    id: 4,
    img: "../Images/Avatars/Juanie.png",
    name: "Davis Franci",
    name1: "Emerson Carder",
  },
  {
    id: 5,
    img: "../Images/Avatars/BlueWhale.png",
    name: "Livia Rosser",
    name1: "Zain Botosh",
  },
  {
    id: 6,
    img: "../Images/Avatars/MrFox.png",
    name: "Kianna Donin",
    name1: "Talan Korsgaard",
  },
  {
    id: 7,
    img: "../Images/Avatars/Shroomie.png",
    name: "Phillip Lipshutz",
    name1: "Haylie Dias",
  },
  {
    id: 8,
    img: "../Images/Avatars/Robotica.png",
    name: "Maria Rosser",
    name1: "James Donin",
  },
  {
    id: 9,
    img: "../Images/Avatars/RustyRobot.png",
    name: "Kianna Stanton",
    name1: "Erin Siphron",
  },
  {
    id: 10,
    img: "../Images/Avatars/NebulaKid.png",
    name: "Angel Lubin",
    name1: "Cristofer Levin",
  },
  {
    id: 11,
    img: "../Images/Avatars/Robot.png",
    name: "Allison Torff",
    name1: "Alena Schleifer",
  },
  {
    id: 12,
    img: "../Images/Avatars/BeKind2Robots.png",
    name: "Davis Workman",
    name1: "Dulce Vetrovs",
  },
  {
    id: 13,
    img: "../Images/Avatars/Dog.png",
    name: "Lindsey Lipshutz",
    name1: "Nolan Siphron",
  },
  {
    id: 14,
    img: "../Images/Avatars/Animakid.png",
    name: "Randy Carder",
    name1: "Omar Stanton",
  },
  {
    id: 15,
    img: "../Images/Avatars/Dotgu.png",
    name: "Lydia Culhane",
    name1: "Omar Lipshutz",
  },
  {
    id: 16,
    img: "../Images/Avatars/MoonDancer.png",
    name: "Rayna Bator",
    name1: "Terry Donin",
  },
  {
    id: 17,
    img: "../Images/Avatars/Ghiblier.png",
    name: "Jocelyn Westervelt",
    name1: "Erin Botosh",
  },
  {
    id: 18,
    img: "../Images/Avatars/Keepitreal.png",
    name: "Marilyn Torff",
    name1: "Cheyenne Rhiel ",
  },
  {
    id: 19,
    img: "../Images/Avatars/NebulaKid.png",
    name: "Skylar Levin",
    name1: "Jaxson Vaccaro",
  },
  {
    id: 20,
    img: "../Images/Avatars/GravityOne.png",
    name: "Terry Dorwart",
    name1: "Jordyn Dias",
  },
];
const headNumber = document.querySelector("#headNumber");
const headArtist = document.querySelector("#headArtist");
const changeArtist = document.querySelector("#changeArtist");
const soldArtist = document.querySelector("#soldArtist");
const volumeArtist = document.querySelector("#volumeArtist");
const sectionDiv = document.querySelectorAll(".frame_container > div");
info.forEach((i) => {
  i.sold = Math.floor(Math.random() * 1000);
  i.change = Math.floor(Math.random() * 100) / 10;
  i.etc = Math.floor(Math.random() * 1000) / 10;
});
sectionDiv.forEach((div) => {
  div.addEventListener("click", () => {
    refreshDiv();
    div.style.borderBottomColor = "rgb(133, 133, 132)";
    div.querySelectorAll("h5").forEach((header) => {
      header.style.color = "rgb(255,255,255)";
    });
  });
});
getAllCards();
function getAllCards() {
  info.forEach((creator) => {
    const div = document.createElement("div");
    div.className = "container item";
    div.innerHTML = `
    <div>
      <div>
         <div class="number">${creator.id}</div>
         <div class="name">
             <img src="${creator.img}">
             <h5>${creator.name}</h5>
             <h5>${creator.name1}</h5>
         </div>
      </div>
      <div>
         <p>+${creator.change}%</p>
         <p>${creator.sold}</p>
         <p>${creator.etc} ETH</p>
      </div>
    </div>`;
    rankingContainer.append(div);
  });
}
function clear() {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.remove();
  });
}
function refreshDiv() {
  sectionDiv.forEach((div) => {
    div.style.borderBottomColor = " rgb(43, 43, 43)";
    div.querySelectorAll("h5").forEach((header) => {
      header.style.color = "rgb(133, 133, 132)";
    });
  });
}
headNumber.addEventListener("click", () => {
  info[0].id > info[1].id
    ? info.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
    : info.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
  clear();
  getAllCards();
});
headArtist.addEventListener("click", () => {
  const element = document.querySelector(".item");
  const style = getComputedStyle(element.querySelector("h5"));
  if (style.display == "none") {
    info[0].name1 > info[1].name1
      ? info.sort(function (x, y) {
          let a = x.name1.toUpperCase(),
            b = y.name1.toUpperCase();
          return a == b ? 0 : a > b ? 1 : -1;
        })
      : info.sort(function (x, y) {
          let a = x.name1.toUpperCase(),
            b = y.name1.toUpperCase();
          return a == b ? 0 : a > b ? -1 : 1;
        });
  } else {
    info[0].name > info[1].name
      ? info.sort(function (x, y) {
          let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
          return a == b ? 0 : a > b ? 1 : -1;
        })
      : info.sort(function (x, y) {
          let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
          return a == b ? 0 : a > b ? -1 : 1;
        });
  }
  clear();
  getAllCards();
});
const sortedFactor = [changeArtist, soldArtist, volumeArtist];
sortedFactor.forEach((factor) => {
  factor.addEventListener("click", () => {
    if (factor == sortedFactor[0]) {
      parseFloat(info[0].change) > parseFloat(info[1].change)
        ? info.sort((a, b) => parseFloat(a.change) - parseFloat(b.change))
        : info.sort((a, b) => parseFloat(b.change) - parseFloat(a.change));
    } else if (factor == sortedFactor[1]) {
      parseFloat(info[0].sold) > parseFloat(info[1].sold)
        ? info.sort((a, b) => parseFloat(a.sold) - parseFloat(b.sold))
        : info.sort((a, b) => parseFloat(b.sold) - parseFloat(a.sold));
    } else if (factor == sortedFactor[2]) {
      parseFloat(info[0].etc) > parseFloat(info[1].etc)
        ? info.sort((a, b) => parseFloat(a.etc) - parseFloat(b.etc))
        : info.sort((a, b) => parseFloat(b.etc) - parseFloat(a.etc));
    } else {
      return;
    }
    clear();
    getAllCards();
  });
});
