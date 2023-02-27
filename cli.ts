#!/usr/bin/env node

import { argv } from "process";
import { mdLink } from "./index";

let path = argv[2];
let optionsOne = argv[3];
let optionsTwo = argv[4];

const options = [optionsOne, optionsTwo];

mdLink(path, options);

export { mdLink };
