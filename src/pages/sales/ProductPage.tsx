import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import React from "react";
import Layout from "../../Layout";
import Png from "../../assets/brewed-in-chaos/123.png";
import { useNavigate } from "react-router-dom";

// import { getAboutUs } from "../api";
// import { useQuery } from "@tanstack/react-query";

const bestSellerList = [
  {
    img: Png,
    name: "Sumatra Mandheling",
    code: "SM",
  },
  {
    img: Png,
    name: "Colombian Supremo",
    code: "CS",
  },
  {
    img: Png,
    name: "Jamaican Blue Mountain",
    code: "JBM",
  },
  {
    img: Png,
    name: "Kenyan AA",
    code: "KAA",
  },
  {
    img: Png,
    name: "Sumatra Mandheling",
    code: "SM",
  },
  {
    img: Png,
    name: "Colombian Supremo",
    code: "CS",
  },
  {
    img: Png,
    name: "Jamaican Blue Mountain",
    code: "JBM",
  },
  {
    img: Png,
    name: "Kenyan AA",
    code: "KAA",
  },
  {
    img: Png,
    name: "Sumatra Mandheling",
    code: "SM",
  },
  {
    img: Png,
    name: "Colombian Supremo",
    code: "CS",
  },
  {
    img: Png,
    name: "Jamaican Blue Mountain",
    code: "JBM",
  },
  {
    img: Png,
    name: "Kenyan AA",
    code: "KAA",
  },
];

const ProductPage = () => {
  const navigate = useNavigate();

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
            About Us Page
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            Our mission is to lead the industry in creating value for ourselves
            and our partners by revolutionizing the way people experience
            products. Our team is dedicated to pushing the boundaries of what's
            possible, striving to set standards rather than follow them.
          </Typography>
          <Grid container spacing={4}>
            {bestSellerList.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={item.code}
                onClick={() => navigate(`/product/${item.code}`)}
              >
                <Card sx={{ mb: 2 }}>
                  <CardContent>
                    <Box
                      component="img"
                      src={item.img}
                      alt="Best Seller Image"
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
                </Card>
                <Typography variant="body1" textAlign="center" sx={{ mb: 2 }}>
                  {item.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default ProductPage;
