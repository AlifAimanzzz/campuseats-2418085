const vendors = [
  {
    id: "my-restaurant",
    name: "Kafe Mahallah Faruq",
    location: "Mahallah Faruq, Block F",
    openHours: "7:00 am - 10:00 pm",
    isOpen: true,
    menu: [
      {
        id: "far-1",
        name: "Nasi Lemak Ayam",
        description: "...",
        price: 7.5,
        category: "Rice",
        available: true,
      },
      {
        id: "far-2",
        name: "Nasi Ayam Gepuk",
        description: "...",
        price: 6,
        category: "Rice",
        available: true,
      },
      {
        id: "far-3",
        name: "Sirap Bandung",
        description: "...",
        price: 2.5,
        category: "Drinks",
        available: false,
      },
    ],
  },
  {
    id: "kafe-aminah",
    name: "Kafe Mahallah Aminah",
    location: "Mahallah Aminah, Ground Floor",
    openHours: "8:00 am - 9:00 pm",
    isOpen: true,
    menu: [
      {
        id: "ami-1",
        name: "Nasi Ayam Penyet",
        description: "Smashed fried chicken with sambal and rice",
        price: 9,
        category: "Rice",
        available: true,
      },
      {
        id: "ami-2",
        name: "Air Bandung",
        description: "Rose syrup with milk",
        price: 3,
        category: "Drinks",
        available: true,
      },
    ],
  },
];

export default vendors;
