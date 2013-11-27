/**
 * @fileoverview Tests for no-shadow rule.
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("../../../lib/tests/eslintTester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

eslintTester.addRuleTest("no-shadow", {
    valid: [
        "var a=3; function b(a) { a++; return a; }; setTimeout(function() { b(a); }, 0);"
    ],
    invalid: [
        { code: "var a=3; function b() { var a=10; }", errors: [{ message: "a is already declared in the upper scope.", type: "Identifier"}] },
        { code: "var a=3; function b() { var a=10; }; setTimeout(function() { b(); }, 0);", errors: [{ message: "a is already declared in the upper scope.", type: "Identifier"}] },
        { code: "var a=3; function b() { var a=10; var b=0; }; setTimeout(function() { b(); }, 0);", errors: [{ message: "a is already declared in the upper scope.", type: "Identifier"}, { message: "b is already declared in the upper scope.", type: "Identifier"}] }
    ]
});
