import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  IconButton,
  Stack,
} from "@mui/material";
import Layout from "../../Layout";
import { useParams } from "react-router-dom";
import Png from "../../assets/brewed-in-chaos/123.png";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
const ProductDetailPage = () => {
  const { productCode } = useParams();

  // Product data and quantity state
  const [quantity, setQuantity] = useState(1);
  const product = {
    id: productCode,
    name: "Coffee Grinder",
    image: Png,
    price: 289.0,
    acidity: "low",
    roast: "dark",
    processing: "washed",
    description:
      "A coffee bean is a seed from the Coffea plant and the source for coffee. It is the pit inside the red or purple fruit. This fruit is often referred to as a coffee cherry, and like the cherry, it is a fruit with a pit.",
  };

  // Functions to handle quantity changes
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <Layout>
      <Grid container spacing={4} sx={{ p: 4 }}>
        <Grid item xs={12} md={5}>
          <Card>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Stack spacing={3}>
              <Box>
                <Typography variant="h4">{product.name}</Typography>
                <Typography variant="h5" color="primary">
                  ${product.price}
                </Typography>{" "}
              </Box>

              <Typography variant="body1" sx={{ maxWidth: 500 }}>
                {product.description}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="caption">
                  Acidity Level: {product.acidity}
                </Typography>

                <Typography variant="caption">
                  Roast Level: {product.roast}
                </Typography>

                <Typography variant="caption">
                  Processing Method: {product.processing}
                </Typography>
              </Box>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton onClick={handleDecrease}>
                    <RemoveRoundedIcon />
                  </IconButton>
                  <Typography sx={{ mx: 2 }}>{quantity}</Typography>
                  <IconButton onClick={handleIncrease}>
                    <AddRoundedIcon />
                  </IconButton>
                </Box>

                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    // onClick={() => navigate(`/purchase/${product.id}`)}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductDetailPage;
