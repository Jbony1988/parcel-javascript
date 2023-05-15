import printUserName, { sally, Kyle } from "./user.js";
import { v4 } from "uuid";

console.log(v4());
printUserName(sally);
printUserName(Kyle);
