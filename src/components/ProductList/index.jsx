import React, { Fragment, useEffect, useState } from "react";
import "./style.scss";
import { addProducts, deleteProducts, getAllProducts } from "../../api";
import { Table, Button } from "reactstrap";
import ProductForm from "./ProductForm";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [openAddProduct, setOpenAddProduct] = useState(false);

  const toggleAddProduct = () => setOpenAddProduct((prevState) => !prevState);

  const fetchAllProducts = async () => {
    try {
      const products = await getAllProducts();
      console.log({ products });
      setProducts(products.products);
    } catch (error) {
      setProducts([]);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const res = await deleteProducts(productId);
      console.log({ res });
      alert("Product Deleted Successfully");
      setProducts(products.filter((p) => p?.id !== productId));
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  const handleAddProduct = async (product) => {
    try {
      const res = await addProducts(product);
      console.log({ res });
      setProducts([res, ...products]);
      setOpenAddProduct(false);
    } catch (error) {
      console.log({ error });
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Fragment>
      <div className="add-btn">
        <Button color="primary" onClick={() => setOpenAddProduct(true)}>
          Add a new product
        </Button>
      </div>
      <h1 className="product-list-heading">List of Products</h1>
      <div className="cpt-table">
        <Table responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product?.id}>
                <th scope="row">{product?.id}</th>
                <td>{product?.title}</td>
                <td>{product?.brand}</td>
                <td>{product?.category}</td>
                <td>{product?.price}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => handleDelete(product?.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ProductForm
          isOpen={openAddProduct}
          onClose={toggleAddProduct}
          onSubmit={handleAddProduct}
        />
      </div>
    </Fragment>
  );
};

export default ProductList;

