import { IBrand } from "@/shared/type/brand.interface";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL + '/api/brands'


interface BrandsState {
  items: IBrand[];
  loading: boolean;
}

const initialState: BrandsState = {
  items: [],
  loading: false,
};

export const fetchAllBrands = createAsyncThunk<IBrand[]>(
  "brands/fetchAll",
  async () => {
    const res = await axios.get<IBrand[]>(`${API_URL}/all`);
    return res.data;
  }
);

export const createBrand = createAsyncThunk<void, FormData>(
  "brands/create",
  async (data) => {
    await axios.post(`${API_URL}/create`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
);

export const editBrand = createAsyncThunk<void, { id: string; data: FormData }>(
  "brands/edit",
  async ({ id, data }) => {
    await axios.post(`${API_URL}/edit/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
);

export const deleteBrand = createAsyncThunk<void, string>(
  "brands/delete",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  }
);


const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllBrands.fulfilled, (state, action: PayloadAction<IBrand[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllBrands.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default brandsSlice.reducer;
