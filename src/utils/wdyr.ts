// <reference types="@welldone-software/why-did-you-render" />
import React from "react";
if (process.env.NODE_ENV === "development") {
  console.log(process.env.NODE_ENV);
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
