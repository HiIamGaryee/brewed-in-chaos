import Layout from "../Layout";
import {
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  CardContent,
  Card,
  Avatar,
} from "@mui/material";
import coffeeImg from "../assets/coffee1.png";
import usq1Img from "../assets/brewed-in-chaos/usq-1.jpeg";
import usq2Img from "../assets/brewed-in-chaos/usq-2.jpeg";
import usq3Img from "../assets/brewed-in-chaos/usq-3.jpeg";
import Png from "../assets/brewed-in-chaos/package/SM.png";
import { useNavigate } from "react-router-dom";
import homeBg from "../assets/brewedinchaosLightning.gif";
import homeIcon from "../assets/brewedinchaosIcon.png";
import { getBestSeller } from "../api/admin";
import { useQuery } from "@tanstack/react-query";

const USPList = [
  {
    img: usq1Img,
    name: "BlockChain Payments",
  },
  {
    img: usq2Img,
    name: "Exclusive coffee farms",
  },
  {
    img: usq3Img,
    name: "Subscription Boxes",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const { data: bestSellerList } = useQuery({
    queryKey: ["getBestSeller", 10, 0],
    queryFn: () => getBestSeller(10, 0),
  });

  return (
    <Layout>
      <Box
        sx={{
          position:"relative",
          backgroundSize: "cover",
          backgroundImage: `url(${homeBg})`,
          backgroundPosition: "center", 
          width: "100%", 
          minHeight: "300px",
          height: "auto", 
          overflow: "hidden",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <Box
        component="img"
        src={homeIcon}
        alt="Icon"
        sx = {{
          position:"absolute",
          top:"0",
          right:"100px",
          width:"auto",
          height:"100%",
          zIndex:10,  
        }}
        />
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignitem: { xs: "center", md: "start" },
            justifyContent: "center",
            pl: { xs: 0, md: 8 },
            order: { xs: 2, md: 1 },
          }}
        >
          <Stack spacing={2}>
            <Box>
              <Stack spacing={4}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: { xs: "center", md: "start" },
                    }}
                  >
                    <Typography variant="h3" fontWeight="bold">
                      Discover Your
                    </Typography>
                    <Typography
                      color="primary.main"
                      variant="h3"
                      fontWeight="bold"
                    >
                      Perfect Favorite Bean
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  px={2}
                  sx={{
                    textAlign: { xs: "center", md: "start" },
                    pl: { xs: 2, md: 0 },
                    pr: { xs: 2, md: 12 },
                  }}
                >
                  Your trust with us starts from knowing your coffee origin
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: { xs: "center", md: "start" },
                  }}
                >
                  <Button>Store</Button>
                  <Button>Join Us</Button>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignitem: "center",
            justifyContent: "center",
            order: { xs: 1, md: 2 },
          }}
        >
          <Box
            component="img"
            src={coffeeImg}
            alt="Bouncing GIF"
            sx={{
              cursor: "pointer",
              mt: { xs: 8, md: 0 },
              maxHeight: "500px",
              display: "none",
            }}
          />
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          flexDirection: "column",
          p: 4,
          bgcolor: "#f4eee1",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Our Selling Point
        </Typography>
        <Typography px={8} textAlign="center" mb={6}>
          Our cyrpto payments and tokenized rewards cater to tech-savvy
          customers, enhacing user engagement and loyalty.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", width: "auto" }}>
          <Grid container spacing={2}>
            {USPList.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: "row",
                    alignItems: "center ",
                  }}
                >
                  <Avatar
                    src={item.img}
                    sx={{
                      width: 80,
                      height: 80,
                      border: (theme) =>
                        `1px solid ${theme.palette.text.secondary}`,
                    }}
                  />
                  <Typography>{item.name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          flexDirection: "column",
          p: "40px",
          bgcolor: "#e8e7e5",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={6}>
          Best Seller
        </Typography>

        <Grid container spacing={4}>
          {bestSellerList?.data?.map((item: any, index: number) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={item._id}
              sx={{ mb: 4 }}
              // onClick={() => navigate(`/product/${item.code}`)}
            >
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Box
                    component="img"
                    src={require(`../assets/brewed-in-chaos/package-face/${item.code}.png`)}
                    alt="Best Seller Image"
                    sx={{
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default HomePage;
