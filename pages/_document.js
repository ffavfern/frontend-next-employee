import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar";

export default function _document() {
  return (
    <Html>
    <Head>
      <link
           href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
           rel="stylesheet"
           integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
           crossOrigin="anonymous"
         />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
  );
}
