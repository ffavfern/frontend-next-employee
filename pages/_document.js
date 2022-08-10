import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar";

export default function _document() {
  return (
    <Html>
      <Head>
        {/* <!-- CSS only --> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        />
        {/* <!-- JavaScript Bundle with Popper --> */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossorigin="anonymous"
        ></script>
      </Head>
      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
