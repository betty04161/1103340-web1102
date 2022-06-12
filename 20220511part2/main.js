let pageData = {
  productName: "訂張票到月球",
  productDescription: "月球之旅是搭乘我們最高級的飛行船，可以觀看外太空的風景",
  imageSrc: [
    "images/asteroid",
    "images/fantasy.jpg",
    "images/space.jpg",
    "images/spaceship.jpg",
  ],
  h2ClassController: {
    centered: true,
    colorFont: false,
  },
  pStyleController: {
    color: "blue",
    "margin-left": "50px",
    "font-size": "20px",
    "font-style": "italic",
  },
  imageStyleController: {
    margin: "auto",
    display: "block",
    width: "50%",
  },
  imageAlt: "Photo from space",
  productClasses: [
    { 
        name: "Coach", 
        price: 125000, 
        seatsAvailable: 20, 
        earlyBird: true 
    },
    {
      name: "Business",
      price: 275000,
      seatsAvailable: 6,
      earlyBird: true,
    },
    {
      name: "First",
      price: 430000,
      seatsAvailable: 2,
      earlyBird: false,
    },
  ],
};

const App = Vue.createApp({
  data() {
    return pageData;
  },
});

App.mount("#app");
