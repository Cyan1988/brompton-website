import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import products_List from "../../data/products_list.json"

const initialState: {
    title: string;
    img_url: string;
    price: string;
    weight: string;
    text: string;
    series: string;
    details: string;
    logo: string;
    id: string;
}[] =  products_List ;

export const filterSlice = createSlice({
    // 命名空間，name值作爲action type的前綴
    name: "filter",
    initialState,
    reducers:{
        result: (state, action: PayloadAction<string>) => {
            state.filter((item)=>{
               return item.title.includes(action.payload)
            })
        }
    }
})

export const filterSelector = (state:any) => state.filter
export const { result } = filterSlice.actions;
export default filterSlice.reducer