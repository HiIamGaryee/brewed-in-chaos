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
  Stack,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../Layout";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

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
                    <TableCell component="th" scope="row">
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
                              product.quantity - 1
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
          <Box>
            <Card>
              <CardContent>
                <Stack spacing={4}>
                  <Box>
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
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CartPage;
