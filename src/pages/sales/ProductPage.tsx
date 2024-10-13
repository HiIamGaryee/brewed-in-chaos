import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import React from "react";
import Layout from "../../Layout";
import Png from "../../assets/brewed-in-chaos/123.png";
import { useNavigate } from "react-router-dom";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useQuery } from "@tanstack/react-query";
import { getProductList } from "../../api/admin";
// import { getAboutUs } from "../api";
// import { useQuery } from "@tanstack/react-query";

const bestSellerList2 = [
  {
    img: Png,
    price: "Rm99.99",
    name: "Sumatra Mandheling",
    code: "SM",
  },
  {
    img: Png,
    price: "Rm99.99",
    name: "Colombian Supremo",
    code: "CS",
  },
  {
    img: Png,
    price: "Rm99.99",
    name: "Jamaican Blue Mountain",
    code: "JBM",
  },
  {
    img: Png,
    price: "Rm99.99",
    name: "Kenyan AA",
    code: "KAA",
  },
  {
    img: Png,
    price: "Rm99.99",
    name: "Sumatra Mandheling",
    code: "SM",
  },
  {
    img: Png,
    price: "Rm99.99",
    name: "Colombian Supremo",
    code: "CS",
  },
  {
    img: Png,
    price: "Rm99.99",
    name: "Jamaican Blue Mountain",
    code: "JBM",
  },
  {
    img: Png,
    price: "Rm99.99",
    name: "Kenyan AA",
    code: "KAA",
  },
  {
    img: Png,
    price: "Rm99.99",
    name: "Sumatra Mandheling",
    code: "SM",
  },
  {
    img: Png,
    price: "Rm99.99",
    name: "Colombian Supremo",
    code: "CS",
  },
  {
    img: Png,
    price: "Rm99.99",
    name: "Jamaican Blue Mountain",
    code: "JBM",
  },
  {
    img: Png,
    price: "Rm99.99",
    name: "Kenyan AA",
    code: "KAA",
  },
];

const ProductPage = () => {
  const navigate = useNavigate();
  const { data: bestSellerList } = useQuery({
    queryKey: ["getProductList", 10, 0],
    queryFn: () => getProductList(10, 0),
  });

  // const { data: aboutData } = useQuery({
  //   queryKey: ["aboutUs"],
  //   queryFn: getAboutUs,
  // });

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "light.main",
          color: "white",
          padding: 4,
          minHeight: "100vh",
        }}
      >
        {/* <p>
          <strong>About:</strong> {aboutData?.about}
        </p> */}

        <Box sx={{ maxWidth: 1200, margin: "auto", textAlign: "center" }}>
          {/* Original About Us Content */}
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Buy Now
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            Buy a new coffee bean and try it Now. No Coffee No Life.
          </Typography>
          <Grid container spacing={4}>
            {bestSellerList?.data?.map((item: any, index: number) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={item.code}
                onClick={() => navigate(`/product/${item.code}`)}
              >
                <Card sx={{ mb: 2, py: 0, px: 2 }}>
                  <CardContent>
                    <Box
                      component="img"
                      // src={item.img}
                      src={require(`../../assets/brewed-in-chaos/package-face/${item.code}.png`)}
                      alt="Product Image"
                      sx={{
                        cursor: "pointer",
                        mt: { xs: 8, md: 0 },
                        p: 1,
                        width: 1,
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </CardContent>
                  <Typography
                    variant="body1"
                    textAlign="center"
                    fontWeight="bold"
                  >
                    {item.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="primary.main"
                      fontWeight="bold"
                    >
                      $ {item.price}
                    </Typography>
                    <IconButton>
                      <ShoppingCartRoundedIcon />
                    </IconButton>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default ProductPage;
