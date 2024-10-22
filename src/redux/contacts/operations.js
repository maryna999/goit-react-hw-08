import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../instance";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/contacts");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const response = await api.post("/contacts", {
        name: name,
        number: number,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/contacts/${id}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  "contacts/changeContact",
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
