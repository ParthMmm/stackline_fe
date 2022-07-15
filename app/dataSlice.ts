import { Item } from '@/types/index';
import type { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  data: Item[];
}

const initialState: DataState = {
  data: [
    {
      id: '',
      title: '',
      image: '',
      subtitle: '',
      brand: '',
      reviews: [{ customer: '', review: '', score: 0 }],
      retailer: '',
      details: [''],
      tags: [''],
      sales: [
        {
          weekEnding: '',
          retailSales: 0,
          wholesaleSales: 0,
          unitsSold: 0,
          retailerMargin: 0,
        },
      ],
    },
  ],
};

export const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<[Item]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export const selectData = (state: RootState) => state.data;

export default dataSlice.reducer;
