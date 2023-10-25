import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const ProductForm = ({ isOpen, onClose, onSubmit }) => {
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    brand: "",
    category: "",
    price: 0,
  });

  const handleChange = (key, value) => setProduct({ ...product, [key]: value });

  const handleAddProduct = () => {
    const { id, title, brand, price, category } = product;
    if (id > 0 && title && brand && price > 0 && category) {
      onSubmit({ ...product });
    } else {
      alert("All Fields are mandatory");
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setProduct({
        id: 0,
        title: "",
        brand: "",
        category: "",
        price: 0,
      });
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} toggle={onClose} centered>
      <ModalHeader toggle={onClose}>Add product</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="productId">Product ID</Label>
            <Input
              id="productId"
              name="productId"
              placeholder="Product ID"
              type="number"
              required
              value={product.id}
              onChange={(e) => handleChange("id", e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="productName">Product Name</Label>
            <Input
              id="productName"
              name="productName"
              placeholder="Product Name"
              type="text"
              required
              value={product.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="productBrand">Product Brand</Label>
            <Input
              id="productBrand"
              name="productBrand"
              placeholder="Product Brand"
              type="text"
              required
              value={product.brand}
              onChange={(e) => handleChange("brand", e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="productCategory">Product Category</Label>
            <Input
              id="productCategory"
              name="productCategory"
              placeholder="Product Category"
              type="text"
              required
              value={product.category}
              onChange={(e) => handleChange("category", e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="productPrice">Product Price</Label>
            <Input
              id="productPrice"
              name="productPrice"
              placeholder="Product Price"
              type="number"
              required
              value={product.price}
              onChange={(e) => handleChange("price", e.target.value)}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          type="submit"
          onClick={() => handleAddProduct()}
        >
          Add Product
        </Button>
        <Button color="secondary" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ProductForm;

