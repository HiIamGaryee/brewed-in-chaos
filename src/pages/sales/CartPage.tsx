import React, { useState } from "react";
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
  Stack,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../Layout";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import Png from "../../assets/brewed-in-chaos/123.png";

// Initial products data
const initialProducts = [
  { id: "1", name: "Analog Magazine Rack", price: 120, quantity: 2, img: Png },
  { id: "2", name: "Closca Helmet", price: 132, quantity: 1, img: Png },
  { id: "3", name: "Sigg Water Bottle", price: 23, quantity: 2, img: Png },
];

const CartPage = () => {
  const [products, setProducts] = useState(initialProducts);

  // Function to handle quantity change
  const handleQuantityChange = (id: string, newQuantity: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  // Function to remove item from cart
  const handleRemoveItem = (id: string) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  // Calculate the subtotal
  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Layout>
      <Typography variant="h4" sx={{ px: 4, pt: 4 }}>
        Your Cart
      </Typography>
      <Grid container spacing={4} sx={{ p: 4 }}>
        <Grid item xs={12} sm={6} md={8}>
          <TableContainer component={Card}>
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
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ display: "flex", gap: 2, alignItems: "center" }}
                    >
                      <Box
                        component="img"
                        src={product.img}
                        alt="Product Image"
                        sx={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          p: 1,
                        }}
                      />
                      {product.name}
                    </TableCell>
                    <TableCell align="right">${product.price}</TableCell>
                    <TableCell align="right">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "end",
                        }}
                      >
                        <IconButton
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              Math.max(1, product.quantity - 1)
                            )
                          }
                          disabled={product.quantity <= 1}
                        >
                          <RemoveRoundedIcon />
                        </IconButton>
                        <Typography sx={{ mx: 2 }}>
                          {product.quantity}
                        </Typography>
                        <IconButton
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              product.quantity + 1
                            )
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
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Stack spacing={4}>
                <Box>
                  <Typography variant="h6">Order Summary</Typography>
                  <Typography>Subtotal: ${subtotal}</Typography>
                  <Typography>Shipping: Free</Typography>
                  <Typography>Total: ${subtotal}</Typography>{" "}
                </Box>
                <Box>
                  <Typography variant="h6">Delivery Address</Typography>
                  <Typography>xxxx,xxxxxxxx,xxxxxx, xxxx</Typography>
                </Box>
                <Box>
                  <Typography variant="h6">Mobile No</Typography>
                  <Typography>012-321231</Typography>
                </Box>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Checkout
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CartPage;
