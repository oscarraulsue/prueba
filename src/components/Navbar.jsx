import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  ClearOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  console.log(window.location.hash);

  console.log("holaaa");
  return (
    <>
      <style>
        @import
        url('https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro');
      </style>
      <AppBar color='transparent' elevation={0} sx={{ mt: "60px"}}>
        <Toolbar>
          <Box flex={1} />

          <Link
            href="/"
            display="flex"
            alignItems="center"
            sx={{
              fontFamily: "Neue Haas Grotesk Display Pro",
            }}
          >
            <Typography variant="h6" sx={{ color: "white", fontSize:17 }}>
              LIBEL ACADEMY
            </Typography>
          </Link>

          <Box flex={1} />
          {
  menu.map(item => (
    
            <Link href={item.ruta} >
              <Typography variant="h6"  sx={{
              textDecoration: window.location.hash ===  item.ruta ?'underline':'none',
              color: window.location.hash ===  item.ruta ? 'rgb(166, 210, 248)' : "white",
              fontSize:15,
              px:2
            }}>{item.name}</Typography>
            </Link>
  ))
}



          <Box flex={1} />

          {isSearchVisible ? (
            <Input
            variant='outlined'
              sx={{ color:'white'}}
              className="fadeIn"
              autoFocus
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Buscar..."
              endAdornment={
                <InputAdornment position="end"  sx={{ color:'white'}} variant='outlined'>
                  <IconButton onClick={() => setIsSearchVisible(false)}>
                    <ClearOutlined sx={{color:'white'}} />
                  </IconButton>
                </InputAdornment>
              }
            />
          ) : (
            <IconButton
              onClick={() => setIsSearchVisible(true)}
              className="fadeIn"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <SearchOutlined sx={{color:'white'}} />
            </IconButton>
          )}

          <Link>
            <IconButton>
              <Badge badgeContent={"1"} color="error">
                <ShoppingCartOutlined sx={{color:'white'}} />
              </Badge>
            </IconButton>
          </Link>

        </Toolbar>
      </AppBar>
    </>
  );
};

const menu =[
  {
    ruta:"#Home",
    name:'Home'
  },
  {
    ruta:"#About",
    name:'About'
  },
  {
    ruta:"#Services",
    name:'Services'
  },
  {
    ruta:"#Pricing",
    name:'Pricing'
  },
  {
    ruta:"#Products",
    name:'Products'
  },
  {
    ruta:"#News",
    name:'News'
  },
]