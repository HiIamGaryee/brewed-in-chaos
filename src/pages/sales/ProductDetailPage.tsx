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
import { useLocation, useParams } from "react-router-dom";
import Png from "../../assets/brewed-in-chaos/123.png";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
const ProductDetailPage = () => {
  const location = useLocation();
  const product = location.state.product;
  const { productCode } = useParams();

  const [quantity, setQuantity] = useState(1);

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
              image={(() => {
                try {
                  return require(`../../assets/brewed-in-chaos/package-face/${product.code}.png`);
                } catch (error) {
                  return require(`../../assets/brewed-in-chaos/package-face/default.png`);
                }
              })()}
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
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ maxWidth: 500 }}>
                {product.description}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="caption">
                  {product.acidity ? `Acidity Level: ${product.acidity}` : null}
                </Typography>

                <Typography variant="caption">
                  {product.roast ? `Roast Level: ${product.roast}` : null}
                </Typography>

                <Typography variant="caption">
                  {product.processing
                    ? `Processing Method: ${product.processing}`
                    : null}
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
