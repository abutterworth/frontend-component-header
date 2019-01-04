
import React, { Component } from "react";
import ReactDOM from "react-dom";

// import FormContainer from "../../src/index.js";
import FormContainer from "../../dist/main.js";

console.log(FormContainer)

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
