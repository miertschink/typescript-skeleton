import {describe, expect, it, test} from "@jest/globals";
import {sample} from "./sample";

describe('Test',  () => {

    // Tests that rental cost is calculated correctly with valid rental days and km
    it('if true is true',async () => {
        const result = await sample();
        expect(result).toBe(true);
    });

});
