import axios from "axios";

const Axios = axios.create({ baseURL: "https://dummyjson.com" });

export const getAllProducts = async () => {
  const res = await Axios.get("/products");
  return res.data;
};

export const addProducts = async (product) => {
  const res = await Axios.post("/products/add", JSON.stringify(product), {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

export const deleteProducts = async (id) => {
  const res = await Axios.delete(`/products/${id}`);
  return res.data;
};

