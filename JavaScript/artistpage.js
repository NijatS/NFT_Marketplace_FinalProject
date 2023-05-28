const nftCardsContainer = document.querySelector(".nftCards_container");
const cards = [
  {
    img: "../Images/Trendings/Distant Galaxy.png",
    head: "Distant Galaxy",
    creatorAvatar: "../Images/Avatars/Animakid.png",
    creator: "Animakid",
  },
  {
    img: "..//Images/Trendings/Life On Edena.png",
    head: "Life On Edena",
    creatorAvatar: "..//Images/Avatars/Animakid.png",
    creator: "Animakid",
  },
  {
    img: "..//Images/Trendings/AstroFiction.png",
    head: "AstroFiction",
    creatorAvatar: "..//Images/Avatars/Animakid.png",
    creator: "Animakid",
  },
  {
    img: "../Images/Trendings/CryptoCity.png",
    head: "CryptoCity",
    creatorAvatar: "../Images/Avatars/Animakid.png",
    creator: "Animakid",
  },
  {
    img: "../Images/Trendings/ColorfulDog 0524.png",
    head: "ColorfulDog 0524",
    creatorAvatar: "../Images/Avatars/Animakid.png",
    creator: "Animakid",
  },
  {
    img: "..//Images/Trendings/Space Tales.png",
    head: "Space Tales",
    creatorAvatar: "..//Images/Avatars/Animakid.png",
    creator: "Animakid",
  },
  {
    img: "..//Images/Trendings/Cherry Blossom Girl 037.png",
    head: "Cherry Blossom Girl 037",
    creatorAvatar: "..//Images/Avatars/Animakid.png",
    creator: "Animakid",
  },
  {
    img: "../Images/Trendings/Dancing Robots 0987.png",
    head: "Dancing Robots 0987",
    creatorAvatar: "../Images/Avatars/Animakid.png",
    creator: "Animakid",
  },
  {
    img: "../Images/Trendings/IceCream Ape.png",
    head: "IceCream Ape ",
    creatorAvatar: "../Images/Avatars/Animakid.png",
    creator: "Animakid",
  },
];

cards.forEach((card) => {
  const div = document.createElement("div");
  div.className = "nftCard";
  div.innerHTML = `<img src="${card.img}">
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
  nftCardsContainer.append(div);
});
