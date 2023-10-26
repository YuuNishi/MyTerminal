#! /usr/bin/env node
const yargs = require("yargs");
console.log("Hello, World!");
console.log("__   __ _   _  _   _ ");
console.log("\\ \\ / /| | | || | | |");
console.log(" \\ V / | |_| || |_| |");
console.log("  |_|   \\___/  \\___/")
console.log("I will be alive soon...");

const usage = "\nUsage: yuu <option>";
const options = yargs .usage(usage) .option("l", {alias:"Info", describe: "List my infos", type: "boolean", demandOption
: false }).help(true).argv;