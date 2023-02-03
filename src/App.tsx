import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  // const keyword = useRecoilValue(getKeyword);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>YOFLIX</title>
        <link rel="canonical" href="https://bejewelled-pony-8f1ad0.netlify.app/" />
      </Helmet>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies/:category/:movieId" element={<Home />}></Route>

          <Route path="/search" element={<Search />}>
            <Route path=":contentId" element={<Search />}></Route>
          </Route>

          <Route path="/tv" element={<Tv />}></Route>
          <Route path="/tv/:tvcategory/:programId" element={<Tv />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
