import "./index.css";
import runners from "./runners.js";
import races from "./races/index.js";
import { checkNewRunners } from "./utils.js";
import { printResults } from "./print-results.js";

// Throws error if new runners are introduced, runners import should be updated with newcomers
checkNewRunners(runners, races);

printResults(runners, races);
