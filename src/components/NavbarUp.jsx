import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const NavbarUp = () => {
  return (
    <>
      <style>
        @import
        url('https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro');
      </style>
      <AppBar color='transparent' elevation={0} >
        <Toolbar>
          <Box flex={1} />
          {menu1.map((item, i) => (
            <Link
              key={item.path}
              target='_blank'
              href={item.path}
              display="flex"
              alignItems="center"
              underline="none"
            
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Neue Haas Grotesk Display Pro", 
                  px:2,
                  color: "white",
                  fontSize: 15,
                  fontWeight: 600,
                  borderRight: i > 0 && i < menu1.length -1 ? 'solid 1px white': 'none',
                  borderLeft: i > 0 && i < menu1.length -1  ? 'solid 1px white': 'none',
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}

          <Box flex={1} />
          {menu2.map((item, i) => (
            <Link
              key={item.path}
              target='_blank'
              href={item.path}
              display="flex"
              alignItems="center"
              underline="none"
            >
              <Typography
                variant="h6"
                sx={{
                    px:2,
                    color: "white",
                    fontSize: 15,
                    fontWeight: 600,
                    borderRight: i > 0 && i < menu2.length -1 ? 'solid 1px white': 'none',
                    borderLeft: i === 1 ? 'solid 1px white': 'none',
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
          <Box flex={1} />
        </Toolbar>
      </AppBar>
    </>
  );
};

const menu1 = [
  {
    path: "tel:+12129462700",
    name: "+1 212 946 2700",
  },
  {
    path: "/HelpDesk",
    name: "Help Desk",
  },
  {
    path: "/WhySway",
    name: "Why Sway",
  },
];

const menu2 = [
  {
    path: "https://www.facebook.com/",
    name: <img src="/icons/facebook.png" alt="facebook" height={20} />,
  },
  {
    path: "https://twitter.com/home",
    name: <TwitterIcon />,
  },
  {
    path: "https://www.instagram.com/",
    name: <InstagramIcon />,
  },
  {
    path: "https://dribbble.com/",
    name: <img src="/icons/dribbble.png" alt="dribbble" height={20} />,
  },
];
