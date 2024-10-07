import Layout from "../Layout";
import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import coffeeImg from "../assets/coffee1.png";

const HomePage = () => {
  return (
    <Layout>
      <Grid container p={4}>
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
              // animation: "bounce 2s infinite",
              // "@keyframes bounce": {
              //   "0%, 100%": {
              //     transform: "translateY(0)",
              //   },
              //   "50%": {
              //     transform: "translateY(-20px)",
              //   },
              // },
            }}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          flexDirection: "column",
          p: 4,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Our Selling Point
        </Typography>
        <Typography variant="h6" px={2}>
          Our cyrpto payments and tokenized rewards cater to tech-savvy
          customers, enhacing user engagement and loyalty.
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
