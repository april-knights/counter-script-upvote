import { Clicker } from "./clicker";
import { Counter } from "./counter";
import { redirectForNewReddit } from "./redirect";
import { Strategy } from "./strategy";

redirectForNewReddit();

console.log("Starting UpCount agent!");

const counter = new Counter();
const strategy = new Strategy(counter);
const clicker = new Clicker(strategy);

clicker.start();
