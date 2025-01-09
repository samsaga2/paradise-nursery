import { createSlice } from "@reduxjs/toolkit";

const treesGroup = "Trees";
const grassesGroup = "Grasses";
const flowersGroup = "Flowers";

export const itemsSlice = createSlice({
  name: "items",
  initialState: [
    // Flowers
    {
      group: flowersGroup,
      img: "https://i5.walmartimages.com/asr/1e0e705d-5d7e-4d66-b097-154e0d57de20_1.8b97509e999445226c2726fc2a5dbae1.jpeg",
      name: "Rose Bouquet",
      cost: 25,
      quantity: 0,
      description: "A bouquet of freshly cut roses to brighten any day."
    },
    {
      group: flowersGroup,
      img: "https://pixabay.com/images/download/sunflower-324175_640.jpg",
      name: "Sunflower Arrangement",
      cost: 20,
      quantity: 0,
      description: "A cheerful arrangement of sunflowers perfect for any occasion."
    },
    {
      group: flowersGroup,
      img: "https://www.theflowerstandchelsea.com/wp-content/uploads/2018/03/Tulip-bouquet2.jpg",
      name: "Tulip Bunch",
      cost: 18,
      quantity: 0,
      description: "A colorful bunch of tulips to add a splash of color."
    },

    // Trees
    {
      group: treesGroup,
      img: "https://www.tnnursery.net/cdn/shop/files/sugar-maple-tree-tn-nursery-3.jpg?v=1735331347&width=2000",
      name: "Maple Tree",
      cost: 50,
      quantity: 0,
      description: "A beautiful maple tree to enhance your garden."
    },
    {
      group: treesGroup,
      img: "https://www.tnnursery.net/cdn/shop/files/loblolly-pine-tree-tn-nursery-2.jpg?v=1735309869&width=2000",
      name: "Pine Tree",
      cost: 45,
      quantity: 0,
      description: "A sturdy pine tree, ideal for year-round greenery."
    },
    {
      group: treesGroup,
      img: "https://i.pinimg.com/736x/46/59/10/465910dfb32ce73e94f211582fd257cd.jpg",
      name: "Apple Tree",
      cost: 60,
      quantity: 0,
      description: "An apple tree that produces delicious, fresh fruit."
    },

    // Grasses
    {
      group: grassesGroup,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMc5Ko2M9VzlQmdo0-xhhXOhaerUHchUlWg&s",
      name: "Lawn Grass Seed",
      cost: 15,
      quantity: 0,
      description: "Premium lawn grass seed for a lush green lawn."
    },
    {
      group: grassesGroup,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxyMHwyD1MrFBqb4AIYbpSfauHCw4OIb-r9Q&s",
      name: "Bamboo Grass",
      cost: 30,
      quantity: 0,
      description: "Elegant bamboo grass for decorative purposes."
    },
    {
      group: grassesGroup,
      img: "https://as1.ftcdn.net/v2/jpg/08/85/25/40/1000_F_885254021_dEn76TFNohXm5k05mVFxekncD351EHw7.jpg",
      name: "Ornamental Grass",
      cost: 25,
      quantity: 0,
      description: "Ornamental grass to beautify any outdoor space."
    },
  ],
  reducers: {
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
    resetQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        state[index].quantity = 0;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity, resetQuantity } = itemsSlice.actions;

export default itemsSlice.reducer;
