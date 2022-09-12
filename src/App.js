import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />}></Route>
        <Route path="/video/:id" exact element={<VideoDetail />}></Route>
        <Route
          path="/search/:searchTerm"
          exact
          element={<SearchFeed />}
        ></Route>
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
