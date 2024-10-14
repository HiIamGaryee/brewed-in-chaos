import React, { useState, useEffect } from "react";
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
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../Layout";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useAppMutation } from "../../hooks/useAppMutation";
import { CheckoutParams, postCheckout } from "../../api/admin";

type CartProduct = {
  name: string;
  code: string;
  price: number;
  quantity: number;
};

const CartPage = () => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [mobile, setMobile] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const { mutate, reset } = useAppMutation(postCheckout, {
    onSuccess: () => {
      reset();
      setProducts([]); // Clear cart after successful checkout
      localStorage.removeItem("cart"); // Clear localStorage cart
    },
  });

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setProducts(cart);
  }, []);

  const handleQuantityChange = (code: string, newQuantity: number) => {
    const updatedProducts = products.map((product: CartProduct) => {
      if (product.code === code) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setProducts(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  // Function to remove item from cart
  const handleRemoveItem = (code: string) => {
    const updatedProducts = products.filter(
      (product: CartProduct) => product.code !== code
    );
    setProducts(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  // Calculate the subtotal
  const subtotal = products.reduce((sum: number, item: CartProduct) => {
    return sum + item.price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    const checkoutData: CheckoutParams = {
      shipping: "0",
      total: subtotal.toFixed(2),
      address,
      mobile,
      email,
      status: "pending",
      products: products.map(({ code, price, quantity }) => ({
        code,
        price: price.toString(), // Ensure price is a string
        quantity,
      })),
    };

    // Call the mutate function to submit the checkout
    mutate(checkoutData);
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
                {products.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      Your cart is empty.
                    </TableCell>
                  </TableRow>
                ) : (
                  products.map((product: any) => (
                    <TableRow key={product.code}>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ display: "flex", gap: 2, alignItems: "center" }}
                      >
                        <Box
                          component="img"
                          src={(() => {
                            try {
                              return require(`../../assets/brewed-in-chaos/package-face/${product.code}.png`);
                            } catch (error) {
                              return require(`../../assets/brewed-in-chaos/package-face/default.png`);
                            }
                          })()}
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
                                product.code,
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
                                product.code,
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
                        <IconButton
                          onClick={() => handleRemoveItem(product.code)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                )}
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
                  <Typography>Total: ${subtotal}</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" mb={2}>
                    Personal Details
                  </Typography>
                  <Stack spacing={2}>
                    <TextField
                      label="Delivery Address"
                      fullWidth
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />

                    <TextField
                      label="Mobile No"
                      fullWidth
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />

                    <TextField
                      label="Email"
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Stack>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={handleCheckout}
                >
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
