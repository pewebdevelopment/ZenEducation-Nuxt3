import { defineStore } from "pinia";


const state = () => ({
  // ...

  /* User */
  userName: null,
  userEmail: null,
  userAvatar: null,

  /* Field focus with ctrl+k (to register only once) */
  isFieldFocusRegistered: false,


  clients: [
    { id: 19, avatar: "https://avatars.dicebear.com/v2/gridy/Howell-Hand.svg", login: "percy64", name: "Howell Hand", company: "Kiehn-Green", city: "Emelyside", progress: 70, created: "Mar 3, 2021" },
    { id: 11, avatar: "https://avatars.dicebear.com/v2/gridy/Hope-Howe.svg", login: "dare.concepcion", name: "Hope Howe", company: "Nolan Inc", city: "Paristown", progress: 68, created: "Dec 1, 2021" },
    { id: 32, avatar: "https://avatars.dicebear.com/v2/gridy/Nelson-Jerde.svg", login: "geovanni.kessler", name: "Nelson Jerde", company: "Nitzsche LLC", city: "Jailynbury", progress: 49, created: "May 18, 2021" },
    { id: 22, avatar: "https://avatars.dicebear.com/v2/gridy/Kim-Weimann.svg", login: "macejkovic.dashawn", name: "Kim Weimann", company: "Brown-Lueilwitz", city: "New Emie", progress: 38, created: "May 4, 2021" }
  ],
  history: [
    { amount: 375.53, name: "Home Loan Account", date: "3 days ago", type: "deposit", business: "Turcotte" },
    { amount: 470.26, name: "Savings Account", date: "3 days ago", type: "payment", business: "Murazik - Graham" },
    { amount: 971.34, name: "Checking Account", date: "5 days ago", type: "invoice", business: "Fahey - Keebler" },
    { amount: 374.63, name: "Auto Loan Account", date: "7 days ago", type: "withdrawal", business: "Collier - Hintz" }
  ],
  products: [
    {
      name: "Test1",
      date: "3 hours ago",
      adjective: "TST_001",
      product: "P-01",
      material: "wood",
      price: "20.00"
    },
    {
      name: "Test2",
      date: "2 days ago",
      product: "P-02",
      adjective: "TST_002",
      material: "iron",
      price: "40.00"
    },
    {
      name: "Test3",
      date: "3 days ago",
      product: "P-03",
      adjective: "TST_003",
      material: "steel",
      price: "20.00"
    },
    {
      name: "Test4",
      date: "4 days ago",
      product: "P-04",
      adjective: "TST_04",
      material: "wood",
      price: "20.99"
    },
  ]
});

const getters = {


};


const actions = {
  setUser(payload) {
    if (payload.name) {
      this.userName = payload.name;
    }
    if (payload.email) {
      this.userEmail = payload.email;
    }
    if (payload.avatar) {
      this.userAvatar = payload.avatar;
    }
  },

};


export const useMainStore = defineStore('main', {
  state,
  getters,
  actions
});