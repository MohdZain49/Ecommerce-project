const TRANSACTION_DEFAULT_DATA = [
  {
    completedTransactions: [
      {
        id: "trnx001",
        user: "Alice Johnson",
        amount: "$120.00",
        discount: "10%",
        quantity: 5,
      },
      {
        id: "trnx002",
        user: "Bob Smith",
        amount: "$250.00",
        discount: "15%",
        quantity: 2,
      },
      {
        id: "trnx003",
        user: "Charlie Brown",
        amount: "$75.00",
        discount: "5%",
        quantity: 10,
      },
      {
        id: "trnx004",
        user: "Diana Prince",
        amount: "$300.00",
        discount: "20%",
        quantity: 1,
      },
      {
        id: "trnx005",
        user: "Eve Adams",
        amount: "$180.00",
        discount: "10%",
        quantity: 3,
      },
      {
        id: "trnx006",
        user: "Frank Castle",
        amount: "$90.00",
        discount: "8%",
        quantity: 4,
      },
      {
        id: "trnx007",
        user: "Grace Hopper",
        amount: "$200.00",
        discount: "12%",
        quantity: 6,
      },
      {
        id: "trnx008",
        user: "Hank Pym",
        amount: "$150.00",
        discount: "10%",
        quantity: 7,
      },
      {
        id: "trnx009",
        user: "Ivy Green",
        amount: "$220.00",
        discount: "18%",
        quantity: 2,
      },
      {
        id: "trnx010",
        user: "Jack Ryan",
        amount: "$110.00",
        discount: "7%",
        quantity: 8,
      },
    ],
    inProgressTransactions: [
      {
        id: "trnx012",
        user: "Lara Croft",
        amount: "$130.00",
        discount: "5%",
        quantity: 3,
      },
      {
        id: "trnx013",
        user: "Michael Scott",
        amount: "$210.00",
        discount: "12%",
        quantity: 4,
      },
      {
        id: "trnx014",
        user: "Nancy Drew",
        amount: "$90.00",
        discount: "8%",
        quantity: 2,
      },
      {
        id: "trnx015",
        user: "Oscar Wilde",
        amount: "$170.00",
        discount: "10%",
        quantity: 6,
      },
      {
        id: "trnx016",
        user: "Pam Beesly",
        amount: "$140.00",
        discount: "7%",
        quantity: 5,
      },
      {
        id: "trnx017",
        user: "Quentin Tarantino",
        amount: "$250.00",
        discount: "15%",
        quantity: 4,
      },
      {
        id: "trnx018",
        user: "Rachel Green",
        amount: "$180.00",
        discount: "10%",
        quantity: 3,
      },
      {
        id: "trnx019",
        user: "Steve Rogers",
        amount: "$220.00",
        discount: "12%",
        quantity: 5,
      },
      {
        id: "trnx020",
        user: "Tony Stark",
        amount: "$300.00",
        discount: "20%",
        quantity: 2,
      },
      {
        id: "trnx021",
        user: "Ursula Buffay",
        amount: "$110.00",
        discount: "7%",
        quantity: 6,
      },
    ],
    pendingTransactions: [
      {
        id: "trnx011",
        user: "Kara Danvers",
        amount: "$160.00",
        discount: "10%",
        quantity: 5,
      },
      {
        id: "trnx022",
        user: "Victor Stone",
        amount: "$190.00",
        discount: "10%",
        quantity: 4,
      },
      {
        id: "trnx023",
        user: "Wanda Maximoff",
        amount: "$230.00",
        discount: "15%",
        quantity: 3,
      },
      {
        id: "trnx024",
        user: "Xander Cage",
        amount: "$150.00",
        discount: "8%",
        quantity: 5,
      },
      {
        id: "trnx025",
        user: "Yelena Belova",
        amount: "$170.00",
        discount: "12%",
        quantity: 2,
      },
      {
        id: "trnx026",
        user: "Zoe Saldana",
        amount: "$200.00",
        discount: "10%",
        quantity: 6,
      },
      {
        id: "trnx027",
        user: "Arthur Curry",
        amount: "$210.00",
        discount: "14%",
        quantity: 3,
      },
      {
        id: "trnx028",
        user: "Bruce Wayne",
        amount: "$250.00",
        discount: "18%",
        quantity: 4,
      },
      {
        id: "trnx029",
        user: "Clark Kent",
        amount: "$160.00",
        discount: "10%",
        quantity: 5,
      },
      {
        id: "trnx030",
        user: "Diana Prince",
        amount: "$220.00",
        discount: "12%",
        quantity: 2,
      },
      {
        id: "trnx031",
        user: "Eddie Brock",
        amount: "$180.00",
        discount: "10%",
        quantity: 3,
      },
    ],
    cancelledTransactions: [
      {
        id: "trnx032",
        user: "Felicity Smoak",
        amount: "$140.00",
        discount: "7%",
        quantity: 4,
      },
      {
        id: "trnx033",
        user: "Gwen Stacy",
        amount: "$190.00",
        discount: "10%",
        quantity: 2,
      },
      {
        id: "trnx034",
        user: "Harry Potter",
        amount: "$230.00",
        discount: "15%",
        quantity: 3,
      },
      {
        id: "trnx035",
        user: "Iris West",
        amount: "$150.00",
        discount: "8%",
        quantity: 5,
      },
      {
        id: "trnx036",
        user: "John Wick",
        amount: "$170.00",
        discount: "12%",
        quantity: 2,
      },
      {
        id: "trnx037",
        user: "Katniss Everdeen",
        amount: "$200.00",
        discount: "10%",
        quantity: 6,
      },
      {
        id: "trnx038",
        user: "Loki Laufeyson",
        amount: "$210.00",
        discount: "14%",
        quantity: 3,
      },
      {
        id: "trnx039",
        user: "Marty McFly",
        amount: "$250.00",
        discount: "18%",
        quantity: 4,
      },
      {
        id: "trnx040",
        user: "Natasha Romanoff",
        amount: "$160.00",
        discount: "10%",
        quantity: 5,
      },
      {
        id: "trnx041",
        user: "Oliver Queen",
        amount: "$220.00",
        discount: "12%",
        quantity: 2,
      },
    ],
  },
];



export default TRANSACTION_DEFAULT_DATA;