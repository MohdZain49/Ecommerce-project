import oven from "./images/products/oven.jpg";
import airconditioner from "./images/products/airconditioner.webp";
import refrigerator from "./images/products/refrigerator.jpg";
import washingMachine from "./images/products/washingMachine.jpg";
import Laptop from "./images/products/Laptop.webp";
import hpLaptop from "./images/products/hpLaptop.webp";
import soundbox from "./images/products/soundbox.jpg";
import tablet from "./images/products/tablet.webp";

import profile01 from "./images/customers/profile01.avif";
import profile02 from "./images/customers/profile02.avif";
import profile03 from "./images/customers/profile03.avif";
import profile04 from "./images/customers/profile04.avif";
import profile05 from "./images/customers/profile05.avif";
import profile06 from "./images/customers/profile06.avif";
import profile07 from "./images/customers/profile07.avif";
import profile08 from "./images/customers/profile08.avif";
import profile09 from "./images/customers/profile09.avif";
import profile10 from "./images/customers/profile10.avif";

const data = {
  widgets: [
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

  dashboardBarChart: {
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

  inventoriesProgressBars: [
    { id: 1, label: "laptop", percentage: 30, color: "brown" },
    { id: 2, label: "mobile", percentage: 70, color: "red" },

    { id: 3, label: "earphone", percentage: 47, color: "blueviolet" },
    { id: 4, label: "tablet", percentage: 85, color: "green" },
    { id: 5, label: "macbook", percentage: 100, color: "blue" },
    { id: 6, label: "speakers", percentage: 59, color: "yellow" },
  ],

  gender: {
    data: [{ value: 5 }, { value: 10 }],
    size: {
      width: 250,
      height: 150,
    },
  },

  topTransactions: [
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

  products: [
    // {
    //   id: "prd001",
    //   image: shoes,
    //   name: "Puma Shoes Air Jordan Cook Nigga 2023",
    //   price: 12000,
    //   stock: 250,
    //   action: "managed",
    // },
    {
      id: "prd002",
      image: refrigerator,
      name: "Whirlpool Frost-Free Triple-Door Refrigerator",
      Description:
        "Direct-Cool Refrigerator (205 WDE CLS 2S SAPPHIRE BLUE-Z, Blue,2023 Model)",
      price: 32990,
      stock: 23,
      action: "managed",
    },
    {
      id: "prd003",
      image: oven,
      name: "Panasonic 23 L Convection Microwave Oven",
      Description:
        "NN-CT353BFDG,Black Mirror, 360° Heat Wrap, stainless steel cavity, Magic Grill",
      price: 10200,
      stock: 130,
      action: "managed",
    },
    {
      id: "prd004",
      image: washingMachine,
      name: "Panasonic Fully-Automatic Washing Machine",
      Description:
        " Direct Drive Technology, Steam Wash, 6 Motion DD, Smart Diagnosis, Fully-Automatic Front Load Washing Machine ",
      price: 12490,
      stock: 78,
      action: "managed",
    },
    {
      id: "prd005",
      image: airconditioner,
      name: "Godrej 1 Ton 3 Star",
      Description:
        "Copper, I-Sense Technology, 2024 Model, AC 1T EI 12TINV3R32-GWA Split, White",
      price: 28900,
      stock: 10,
      action: "managed",
    },
    {
      id: "prd006",
      image: hpLaptop,
      name: "hp Core i3-1215U, 12th Gen",
      Description:
        "16GB RAM/512GB SSD/FHD/Windows 11/MS Office 21/Backlit Keyboard/ 15.6” (39.6 cm)/Silver/2.21 KG",
      price: 35000,
      stock: 10,
      action: "managed",
    },
    {
      id: "prd007",
      image: tablet,
      name: "Samsung Galaxy Tab",
      Description:
        "S9 FE 27.69 cm (10.9 inch) Display, RAM 6 GB, ROM 128 GB Expandable, S Pen in-Box, Wi-Fi, IP68 Tablet, Gray",
      price: 34900,
      stock: 10,
      action: "managed",
    },
    {
      id: "prd008",
      image: soundbox,
      name: "Krisons Cylender 4 Double Woofer 40W",
      Description:
        "Sound, Vivid RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card Playback, Portable Speaker & Type C",
      price: 1598,
      stock: 10,
      action: "managed",
    },
    {
      id: "prd009",
      image: Laptop,
      name: " i3-1215U, 12th Gen (8GB RAM/512GB SSD/FHD/",
      Description:
        "16GB RAM/512GB SSD/FHD/Windows 11/MS Office 21/Backlit Keyboard/ 15.6” (39.6 cm)/Silver/2.21 KG",
      price: 1598,
      stock: 10,
      action: "managed",
    },
  ],

  transactions: [
    {
      id: "trnx001",
      user: "Alice Johnson",
      amount: "$120.00",
      discount: "10%",
      quantity: 5,
      status: "Completed",
      action: "View",
    },
    {
      id: "trnx002",
      user: "Bob Smith",
      amount: "$75.00",
      discount: "5%",
      quantity: 3,
      status: "Pending",
      action: "Edit",
    },
    {
      id: "trnx003",
      user: "Charlie Brown",
      amount: "$200.00",
      discount: "15%",
      quantity: 8,
      status: "Completed",
      action: "View",
    },
    {
      id: "trnx004",
      user: "Diana Prince",
      amount: "$90.00",
      discount: "10%",
      quantity: 4,
      status: "In Progress",
      action: "Edit",
    },
    {
      id: "trnx005",
      user: "Evan White",
      amount: "$60.00",
      discount: "0%",
      quantity: 2,
      status: "Cancelled",
      action: "Delete",
    },
    {
      id: "trnx006",
      user: "Fiona Green",
      amount: "$150.00",
      discount: "20%",
      quantity: 6,
      status: "Completed",
      action: "View",
    },
    {
      id: "trnx007",
      user: "George Black",
      amount: "$110.00",
      discount: "5%",
      quantity: 3,
      status: "Pending",
      action: "Edit",
    },
    {
      id: "trnx008",
      user: "Hannah Grey",
      amount: "$300.00",
      discount: "25%",
      quantity: 10,
      status: "Completed",
      action: "View",
    },
    {
      id: "trnx009",
      user: "Ian Brown",
      amount: "$85.00",
      discount: "5%",
      quantity: 2,
      status: "In Progress",
      action: "Edit",
    },
    {
      id: "trnx010",
      user: "Jane Doe",
      amount: "$130.00",
      discount: "15%",
      quantity: 7,
      status: "Completed",
      action: "View",
    },
  ],

  customers: [
    {
      id: 1,
      profile: profile04,
      name: "John Doe",
      gender: "Male",
      email: "johndoe@example.com",
      role: "Admin",
    },
    {
      id: 2,
      profile: profile02,
      name: "Jane Smith",
      gender: "Male",
      email: "janesmith@example.com",
      role: "User",
    },
    {
      id: 3,
      profile: profile06,
      name: "Mike Johnson",
      gender: "Male",
      email: "mikejohnson@example.com",
      role: "Moderator",
    },
    {
      id: 4,
      profile: profile01,
      name: "Emily Brown",
      gender: "Female",
      email: "emilybrown@example.com",
      role: "User",
    },
    {
      id: 5,
      profile: profile10,
      name: "Chris Lee",
      gender: "Male",
      email: "chrislee@example.com",
      role: "User",
    },
    {
      id: 6,
      profile: profile03,
      name: "Laura Green",
      gender: "Female",
      email: "lauragreen@example.com",
      role: "Admin",
    },
    {
      id: 7,
      profile: profile07,
      name: "Tom Hardy",
      gender: "Male",
      email: "tomhardy@example.com",
      role: "Moderator",
    },
    {
      id: 8,
      profile: profile08,
      name: "Rachel Adams",
      gender: "Female",
      email: "racheladams@example.com",
      role: "User",
    },
    {
      id: 9,
      profile: profile09,
      name: "James White",
      gender: "Male",
      email: "jameswhite@example.com",
      role: "User",
    },
    {
      id: 10,
      profile: profile05,
      name: "Sophia Black",
      gender: "Female",
      email: "sophiablack@example.com",
      role: "Admin",
    },
  ],

  homeItems: [
    {
      id: "001",
      image: oven,
      company: "Panasonic",
      item_name: "Panasonic 23 L Convection Microwave Oven",
      Description:
        "NN-CT353BFDG,Black Mirror, 360° Heat Wrap, stainless steel cavity, Magic Grill",
      original_price: 10200,
      current_price: 9200,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.5,
        count: 1400,
      },
      stock: 130,
    },
    {
      id: "002",
      image: refrigerator,
      company: "Whirlpool",
      item_name: "Whirlpool Frost-Free Triple-Door Refrigerator",
      Description:
        "Direct-Cool Refrigerator (205 WDE CLS 2S SAPPHIRE BLUE-Z, Blue,2023 Model)",
      original_price: 32599,
      current_price: 31507,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.3,
        count: 24,
      },
      stock: 23,
    },
    {
      id: "003",
      image: washingMachine,
      company: "Panasonic",
      item_name: "Panasonic Fully-Automatic Washing Machine",
      Description:
        " Direct Drive Technology, Steam Wash, 6 Motion DD, Smart Diagnosis, Fully-Automatic Front Load Washing Machine ",
      original_price: 12599,
      current_price: 11495,
      discount_percentage: 69,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.1,
        count: 249,
      },
      stock: 78,
    },
    {
      id: "004",
      image: airconditioner,
      company: "Godrej",
      item_name: "Godrej 1 Ton 3 Star",
      Description:
        "Copper, I-Sense Technology, 2024 Model, AC 1T EI 12TINV3R32-GWA Split, White",
      original_price: 28999,
      current_price: 28999,
      discount_percentage: 0,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 5.0,
        count: 10,
      },
      stock: 10,
    },
    {
      id: "005",
      image: hpLaptop,
      company: "hp",
      item_name: "hp Core i3-1215U, 12th Gen",
      Description:
        "16GB RAM/512GB SSD/FHD/Windows 11/MS Office 21/Backlit Keyboard/ 15.6” (39.6 cm)/Silver/2.21 KG",
      original_price: 35399,
      current_price: 34489,
      discount_percentage: 65,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.2,
        count: 3500,
      },
      stock: 10,
    },
    {
      id: "006",
      image: tablet,
      company: "Samsung",
      item_name: "Samsung Galaxy Tab",
      Description:
        "S9 FE 27.69 cm (10.9 inch) Display, RAM 6 GB, ROM 128 GB Expandable, S Pen in-Box, Wi-Fi, IP68 Tablet, Gray",
      original_price: 14995,
      current_price: 14995,
      discount_percentage: 0,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 0.0,
        count: 0,
      },
    },
    {
      id: "007",
      image: soundbox,
      company: "Krinsons",
      item_name: "Krisons Cylender 4 Double Woofer 40W",
      Description:
        "Sound, Vivid RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card Playback, Portable Speaker & Type C",
      original_price: 1599,
      current_price: 939,
      discount_percentage: 60,
      rating: {
        stars: 4.2,
        count: 388,
      },
      stock: 10,
    },
    {
      id: "008",
      image: Laptop,
      company: "Dell",
      item_name: " i3-1215U, 12th Gen (8GB RAM/512GB SSD/FHD/",
      Description:
        "16GB RAM/512GB SSD/FHD/Windows 11/MS Office 21/Backlit Keyboard/ 15.6” (39.6 cm)/Silver/2.21 KG",
      original_price: 1585,
      current_price: 1442,
      discount_percentage: 50,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.2,
        count: 5200,
      },
      stock: 10,
    },
  ],

  cartItems: [],
};

export default data;
