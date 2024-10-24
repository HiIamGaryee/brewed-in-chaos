import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Typography, AppBar, Toolbar, Box } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LoginIcon from "@mui/icons-material/Login"; // Assuming you have a login icon
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useAuth } from "../../AuthProvider";
import { useTranslation } from "react-i18next";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import CoffeeRoundedIcon from "@mui/icons-material/CoffeeRounded";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navBarLinks = [
    {
      name: "Home",
      icon: <CottageRoundedIcon />,
      link: "/",
    },
    {
      name: "About Us",
      icon: <CoffeeRoundedIcon />,
      link: "/about-us",
    },
    {
      name: "Mall",
      icon: <StoreRoundedIcon />,
      link: "/product",
    },
    {
      name: "Cart",
      icon: <ShoppingCartCheckoutRoundedIcon />,
      link: "/cart",
    },
    {
      name: "Profile",
      icon: <AccountCircleRoundedIcon />,
      link: "/member/profile",
    },
    user
      ? {
          name: "Logout",
          icon: <LogoutRoundedIcon />,
          link: "/logout",
          onClick: handleLogout,
        }
      : {
          name: "Login",
          icon: <LoginIcon />,
          link: "/login",
        },
  ];

  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ backgroundColor: "primary.main" }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ maxHeight: 50, marginRight: 16, cursor: "pointer" }}
            onClick={() => navigate(`/`)}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          {navBarLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#4caf50" : "inherit",
                display: "flex",
                alignItems: "center",
                marginRight: 4,
              })}
              onClick={item.onClick ? item.onClick : undefined}
            >
              {item.icon}
              <Typography sx={{ ml: 1, display: { xs: "none", sm: "block" } }}>
                {item.name}
              </Typography>
            </NavLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
