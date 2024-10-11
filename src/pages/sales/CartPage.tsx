import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../Layout";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
// Dummy product data
const products = [
  { id: "1", name: "Analog Magazine Rack", price: 120, quantity: 2 },
  { id: "2", name: "Closca Helmet", price: 132, quantity: 1 },
  { id: "3", name: "Sigg Water Bottle", price: 23, quantity: 2 },
];

const CartPage = () => {
  // Function to handle quantity change
  const handleQuantityChange = (id: string, newQuantity: number) => {
    // Implement quantity change logic here
    console.log(`Updated Product ID ${id} to Quantity ${newQuantity}`);
  };

  // Function to remove item from cart
  const handleRemoveItem = (id: string) => {
    console.log(`Removed Product ID ${id}`);
  };

  return (
    <Layout>
      <Box sx={{ p: 4, bgcolor: "background.default", minHeight: "100vh" }}>
        <Typography variant="h4" gutterBottom>
          Your Cart
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="right">${product.price}</TableCell>
                  <TableCell align="right">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton
                        onClick={() =>
                          handleQuantityChange(product.id, product.quantity - 1)
                        }
                        disabled={product.quantity <= 1}
                      >
                        <RemoveRoundedIcon />
                      </IconButton>
                      <Typography sx={{ mx: 2 }}>{product.quantity}</Typography>
                      <IconButton
                        onClick={() =>
                          handleQuantityChange(product.id, product.quantity + 1)
                        }
                      >
                        <AddRoundedIcon />
                      </IconButton>
                    </Box>
                  </TableCell>

                  <TableCell align="right">
                    ${product.price * product.quantity}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleRemoveItem(product.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Order Summary</Typography>
              <Typography>
                Subtotal: $
                {products.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0
                )}
              </Typography>
              <Typography>Shipping: Free</Typography>
              <Typography>
                Total: $
                {products.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0
                )}
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Checkout
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Layout>
  );
};

export default CartPage;
