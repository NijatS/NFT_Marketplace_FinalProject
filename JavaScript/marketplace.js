const divs = document.querySelectorAll(".browseFrame_container >div");
const cards = [
  {
    img: "../Images/Trendings/2.1.png",
    head: "Magic Mushroom 0325",
    creatorAvatar: "../Images/Avatars/Shroomie.png",
    creator: "Shroomie",
    select: false,
  },
  {
    img: "..//Images/Trendings/Happy Robot 032.png",
    head: "Happy Robot 032",
    creatorAvatar: "..//Images/Avatars/BeKind2Robots.png",
    creator: "BeKind2Robots",
    select: false,
  },
  {
    img: "..//Images/Trendings/Happy Robot 024.png",
    head: "Happy Robot 024",
    creatorAvatar: "..//Images/Avatars/BeKind2Robots.png",
    creator: "BeKind2Robots",
    select: false,
  },
  {
    img: "..//Images/Trendings/1.3.png",
    head: "Designer Bear",
    creatorAvatar: "..//Images/Avatars/MrFox.png",
    creator: "Mr Fox",
    select: false,
  },
  {
    img: "../Images/Trendings/Colorful Dog 0356.png",
    head: "Colorful Dog 0356",
    creatorAvatar: "../Images/Avatars/Keepitreal.png",
    creator: "Keepitreal",
    select: false,
  },
  {
    img: "../Images/Trendings/Dancing Robot 0312.png",
    head: "Dancing Robot 0312",
    creatorAvatar: "../Images/Avatars/Robotica.png",
    creator: "Robotica",
    select: false,
  },
  {
    img: "..//Images/Trendings/CherryBlossomGirl035.png",
    head: "Cherry Blossom Girl 035",
    creatorAvatar: "..//Images/Avatars/MoonDancer.png",
    creator: "MoonDancer",
    select: false,
  },
  {
    img: "../Images/Trendings/Space Travel.png",
    head: "Space Travel",
    creatorAvatar: "../Images/Avatars/NebulaKid.png",
    creator: "NebulaKid",
    select: false,
  },
  {
    img: "../Images/Trendings/Sunset Dimension.png",
    head: "Sunset Dimension",
    creatorAvatar: "../Images/Avatars/Animakid.png",
    creator: "Animakid",
    select: false,
  },
  {
    img: "../Images/Trendings/Desert Walk.png",
    head: "Desert Walk",
    creatorAvatar: "../Images/Avatars/Catch 22.png",
    creator: "Catch 22",
    select: false,
  },
  {
    img: "../Images/Trendings/IceCream Ape.png",
    head: "IceCream Ape 0324",
    creatorAvatar: "../Images/Avatars/Ice Ape Club.png",
    creator: "Ice Ape Club",
    select: false,
  },
  {
    img: "../Images/Trendings/ColorfulDog 0524.png",
    head: "Colorful Dog 0344",
    creatorAvatar: "../Images/Avatars/Dog.png",
    creator: "PuppyPower",
    select: false,
  },
];
const nftCardsBrowseContainer = document.querySelector(".nftCards_container");
const likeP = document.querySelector("#likes");
divs[0].style.borderBottomColor = "rgb(133, 133, 132)";
divs[0].querySelector("h5").style.color = "rgb(255,255,255)";
divs[0].querySelector("p").style.backgroundColor = "rgb(133, 133, 132)";
let amountLike = 0;
let likedCard = [];
mainCards();
divs.forEach((div) => {
  div.addEventListener("click", () => {
    if (div == divs[1]) {
      nftCardsBrowseContainer.innerHTML = "";
      likedCards();
    } else {
      nftCardsBrowseContainer.innerHTML = "";
      mainCards();
    }
    refreshDiv();
    style = getComputedStyle(div);
    color = style.borderColor;
    if (color == "rgb(43, 43, 43)") {
      div.style.borderBottomColor = "rgb(133, 133, 132)";
      div.querySelector("h5").style.color = "rgb(255,255,255)";
      div.querySelector("p").style.backgroundColor = "rgb(133, 133, 132)";
    }
  });
});
function mainCards() {
  cards.forEach((card) => {
    const div = document.createElement("div");
    div.className = "nftCardBrowse";
    div.innerHTML = `
    <i class="fa fa-heart"></i>
    <img src="${card.img}">
    <div class="text">
      <div class ="top">
         <h5>${card.head}</h5>
         <div>
            <img src="${card.creatorAvatar}">
            <p>${card.creator}</p>
         </div>
      </div>
      <div class ="bottom">
         <div class="left">
            <p>Price</p>
            <p>1.63 ETH</p>
         </div>
         <div class="right">
            <p>Highest Bid</p>
            <p>0.33 wETH</p>
         </div>
      </div>
    </div>`;
    const likeBtn = div.querySelector("i");
    if (card.select) {
      likeBtn.style.color = "red";
    } else {
      likeBtn.style.color = "black";
    }
    likeBtn.addEventListener("click", () => {
      if (likeBtn.style.color == "black") {
        likeBtn.style.color = "red";
        amountLike++;
        card.select = true;
        likedCard.push(card);
      } else if (likeBtn.style.color == "red") {
        likeBtn.style.color = "black";
        amountLike--;
        card.select = false;
        const index = likedCard.indexOf(card);
        if (index > -1) {
          likedCard.splice(index, 1);
        }
      }
      likeP.textContent = amountLike;
    });
    nftCardsBrowseContainer.append(div);
  });
}
function likedCards() {
  likedCard.forEach((card) => {
    const div = document.createElement("div");
    div.className = "nftCardBrowse";
    div.innerHTML = `
    <i class="fa fa-heart"></i>
    <img src="${card.img}">
    <div class="text">
      <div class ="top">
         <h5>${card.head}</h5>
         <div>
            <img src="${card.creatorAvatar}">
            <p>${card.creator}</p>
         </div>
      </div>
      <div class ="bottom">
         <div class="left">
            <p>Price</p>
            <p>1.63 ETH</p>
         </div>
         <div class="right">
            <p>Highest Bid</p>
            <p>0.33 wETH</p>
         </div>
      </div>
    </div>`;
    const likeBtn = div.querySelector("i");
    if (card.select) {
      likeBtn.style.color = "red";
    } else {
      likeBtn.style.color = "black";
    }
    likeBtn.addEventListener("click", () => {
      if (likeBtn.style.color == "black") {
        likeBtn.style.color = "red";
        amountLike++;
        card.select = true;
        likedCard.push(card);
      } else if (likeBtn.style.color == "red") {
        likeBtn.style.color = "black";
        amountLike--;
        card.select = false;
        const index = likedCard.indexOf(card);
        if (index > -1) {
          likedCard.splice(index, 1);
        }
      }
      likeP.textContent = amountLike;
    });
    nftCardsBrowseContainer.append(div);
  });
}
function refreshDiv() {
  divs.forEach((div) => {
    div.style.borderBottomColor = " rgb(43, 43, 43)";
    div.querySelector("h5").style.color = "rgb(133, 133, 132)";
    div.querySelector("p").style.backgroundColor = "rgb(59, 59, 59)";
  });
}