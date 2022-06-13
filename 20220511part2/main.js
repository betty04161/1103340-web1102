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
  productClasses: [
    {
      name: "Coach",
      price: 125000,
      seatsAvailable: 20,
      earlyBird: true,
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

  productType: ["Coach", "Business", "First"],
  selectedIndex: 0,
  showBook: false,
  name: "",
  tickets: 0,
  notes: "",
  history:[""],
  summary:"",
  showHistory: false,
  choice:false,
};

let pageMethods = {
  showTable1() {
    this.showBook = true;
    this.selectedIndex=0;
  },showTable2() {
    this.showBook = true;
    this.selectedIndex=1;
  },showTable3() {
    this.showBook = true;
    this.selectedIndex=2;
  },
  checkTicket() {
    if(this.tickets<1){
      this.tickets=1;
    }else if(this.tickets>this.productClasses[selectedIndex].seatsAvailable){
      this.tickets=this.productClasses[selectedIndex].seatsAvailable;
    }
  },
  order() {
    productClasses[selectedIndex].seatsAvailable-=this.tickets;
    this.summary=`${this.name} - ${this.productClasses[selectedIndex].name} ${this.tickets}張，備註:${this.notes}`;
    this.history.appendChild(this.summary);

    this.showBook = false;
    this.selectedIndex = 0;
    this.showBook = false;
    this.name = "";
    this.tickets = 0;
    this.notes = "";
    this.summary="";
  },
};

let pageComputed = { 
};

Vue.createApp({
  data() {
    return pageData;
  },
  methods: pageMethods,
  computed: pageComputed,
}).mount("#app");
