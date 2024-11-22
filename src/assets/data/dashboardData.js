const DEFAULT_DATA = [
  [
    { id: 1, heading: "Revenue", value: 34000, percentage: 40, color: "blue" },
    { id: 2, heading: "Users", value: 400, percentage: -14, color: "yellow" },
    {
      id: 3,
      heading: "Transaction",
      value: 23000,
      percentage: 80,
      color: "green",
    },
    { id: 4, heading: "Products", value: 5000, percentage: 60, color: "brown" },
  ],

  {
    xAxis: [
      {
        scaleType: "band",
        data: ["january", "febrary", "march", "april"],
      },
    ],
    series: [{ data: [4, 3, 5, 6] }, { data: [1, 6, 3, 7] }],
    width: 700,
    height: 500,
  },

  [
    { id: 1, label: "laptop", percentage: 30, color: "brown" },
    { id: 2, label: "mobile", percentage: 70, color: "red" },
    { id: 3, label: "earphone", percentage: 47, color: "blueviolet" },
    { id: 4, label: "tablet", percentage: 85, color: "green" },
    { id: 5, label: "macbook", percentage: 100, color: "blue" },
    { id: 6, label: "speakers", percentage: 59, color: "yellow" },
  ],

  {
    data: [{ value: 5 }, { value: 10 }],
    size: {
      width: 250,
      height: 150,
    },
  },

  [
    {
      id: "trxn001",
      quantity: 4,
      discount: 300,
      amount: 4500,
      status: "pending",
    },
    {
      id: "trxn002",
      quantity: 3,
      discount: 100,
      amount: 700,
      status: "processing",
    },
    {
      id: "trxn003",
      quantity: 6,
      discount: 140,
      amount: 4500,
      status: "shipped",
    },
    {
      id: "trxn004",
      quantity: 7,
      discount: 270,
      amount: 3400,
      status: "processing",
    },
  ],
];

export default DEFAULT_DATA;
