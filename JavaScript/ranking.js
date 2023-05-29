const rankingContainer = document.querySelector("#rankings");
const info = [
  {
    img: "../Images/Avatars/Keepitreal.png",
    name: "Jaydon Ekstrom Bothman",
    name1: "Zain Dokidis",
  },
  {
    img: "../Images/Avatars/DigiLab.png",
    name: "Ruben Carder",
    name1: "Ruben Vetrovs",
  },
  {
    img: "../Images/Avatars/GravityOne.png",
    name: "Alfredo Septimus",
    name1: "Maren Franci",
  },
  {
    img: "../Images/Avatars/Juanie.png",
    name: "Davis Franci",
    name1: "Emerson Carder",
  },
  {
    img: "../Images/Avatars/BlueWhale.png",
    name: "Livia Rosser",
    name1: "Zain Botosh",
  },
  {
    img: "../Images/Avatars/MrFox.png",
    name: "Kianna Donin",
    name1: "Talan Korsgaard",
  },
  {
    img: "../Images/Avatars/Shroomie.png",
    name: "Phillip Lipshutz",
    name1: "Haylie Dias",
  },
  {
    img: "../Images/Avatars/Robotica.png",
    name: "Maria Rosser",
    name1: "James Donin",
  },
  {
    img: "../Images/Avatars/RustyRobot.png",
    name: "Kianna Stanton",
    name1: "Erin Siphron",
  },
  {
    img: "../Images/Avatars/NebulaKid.png",
    name: "Angel Lubin",
    name1: "Cristofer Levin",
  },
  {
    img: "../Images/Avatars/Robot.png",
    name: "Allison Torff",
    name1: "Alena Schleifer",
  },
  {
    img: "../Images/Avatars/BeKind2Robots.png",
    name: "Davis Workman",
    name1: "Dulce Vetrovs",
  },
  {
    img: "../Images/Avatars/Dog.png",
    name: "Lindsey Lipshutz",
    name1: "Nolan Siphron",
  },
  {
    img: "../Images/Avatars/Animakid.png",
    name: "Randy Carder",
    name1: "Omar Stanton",
  },
  {
    img: "../Images/Avatars/Dotgu.png",
    name: "Lydia Culhane",
    name1: "Omar Lipshutz",
  },
  {
    img: "../Images/Avatars/MoonDancer.png",
    name: "Rayna Bator",
    name1: "Terry Donin",
  },
  {
    img: "../Images/Avatars/Ghiblier.png",
    name: "Jocelyn Westervelt",
    name1: "Erin Botosh",
  },
  {
    img: "../Images/Avatars/Keepitreal.png",
    name: "Marilyn Torff",
    name1: "Cheyenne Rhiel ",
  },
  {
    img: "../Images/Avatars/NebulaKid.png",
    name: "Skylar Levin",
    name1: "Jaxson Vaccaro",
  },
  {
    img: "../Images/Avatars/GravityOne.png",
    name: "Terry Dorwart",
    name1: "Jordyn Dias",
  },
];
const mediaPhone = window.matchMedia("(max-width: 690px)");
let id = 1;

info.forEach((creator) => {
  const div = document.createElement("div");
  // if (mediaPhone.matches) {
  //   let array = creator.name.split(" ");
  //   creator.name = array[1] + array[0];
  // }
  div.className = "container item";
  div.innerHTML = `
  <div>
    <div>
       <div class="number">${id}</div>
       <div class="name">
           <img src="${creator.img}">
           <h5>${creator.name}</h5>
           <h5>${creator.name1}</h5>
       </div>
    </div>
    <div>
       <p>+1.41%</p>
       <p>602</p>
       <p>12.4 ETH</p>
    </div>
  </div>`;
  id++;
  rankingContainer.append(div);
});
