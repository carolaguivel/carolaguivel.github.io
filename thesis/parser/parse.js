const nearley = require("nearley");
const grammar = require("./json.js");

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

try {
    parser.feed(`["h"]`);
    console.log("Parse success!", parser.results);
} catch (e) {
    console.log("Parse failed!", e.message);
}