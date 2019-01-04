
import React, { Component } from "react";
import ReactDOM from "react-dom";

import './index.scss';

import FormContainer from "../../src/index.js";

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
