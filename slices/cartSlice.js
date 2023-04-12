import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState : {
        items: [],
        totalPrice:0
        
    },
    reducers: {
        addItem : (state,{payload}) => {
            const itemExist = state.items.find(
                (item) =>
                item?.card.info?.name === payload?.card?.info?.name    
              );

              if(itemExist){
                state.items.forEach((item) => {
                  if (
                    item?.card.info?.name === payload?.card?.info?.name 
                  ) {
                    item.stock++;
                  }
                });
              }
              else {
                state.items.push({
                    ...payload,
                    stock : 1
                });            
              }
        },
        removeItem : (state,{payload}) => {
          const itemExistIndex = state.items.findIndex(
            (item) => item?.card.info?.name === payload?.card?.info?.name
          );
        
          if (itemExistIndex !== -1) {
            state.items[itemExistIndex].stock--;
        
            if (state.items[itemExistIndex].stock === 0) {
              state.items.splice(itemExistIndex, 1);
            }
          }           
        }
    }
})


export const {addItem,removeItem} = cartSlice.actions
export default cartSlice.reducer;