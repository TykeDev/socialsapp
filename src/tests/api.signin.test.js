import { expect, test } from 'vitest';
import { signInAccount } from "@/lib/appwrite/api";
import { describe } from 'node:test';


describe("Sign-in", async() => {
    test("correct sign-in", async() => {
        let resp = await signInAccount({
            email: "test@email.com",
            password: "testpassword"
        })
        expect(resp.current).toBe(true);
    })

    test("invalid sign-in", async() => {
        let resp = await signInAccount({
            email: "mahmut@email.com",
            password: "mahmutmahmut123"
        })
        expect(resp).toBe(undefined);
    })
})