import { ICategory } from "@/shared/type/category.interface";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCategories = createAsyncThunk<ICategory[]>(
  "categories/fetchAll",
  async () => {
    const res = await axios.get<ICategory[]>("/api/categories");
    return res.data;
  }
);

export const createCategory = createAsyncThunk<void, FormData>(
  "categories/create",
  async (data) => {
    await axios.post("/api/categories/create", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
);

export const editCategory = createAsyncThunk<void, { id: string; data: FormData }>(
  "categories/edit",
  async ({ id, data }) => {
    await axios.post(`/api/categories/edit/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
);

export const deleteCategory = createAsyncThunk<void, string>(
  "categories/delete",
  async (id) => {
    await axios.delete(`/api/categories/${id}`);
  }
);

interface categoriesState {
  items: ICategory[];
  loading: boolean;
}

const initialState: categoriesState = {
  items: [],
  loading: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllCategories.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default categoriesSlice.reducer;
