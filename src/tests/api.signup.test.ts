import { expect, test } from 'vitest';
import { createUserAccount } from "@/lib/appwrite/api";
import { describe } from 'node:test';

describe("Sign-up", async() => {
    test("can create account", async() => {
        let resp = await createUserAccount({
            name: "TestAccount3",
            email: "test3@email.com",
            username: "testaccount3",
            password: "testpassword3",
        })
        expect(resp.code).not.toBe(409);
    })

    test("dublicate account", async() => {
        let resp = await createUserAccount({
            name: "TestAccount2",
            email: "test2@email.com",
            username: "testaccount2",
            password: "testpassword2",
        })
        //expect(resp.code).toBe(409);
    })

    test("missing account email", async() => {
        let resp = await createUserAccount({
            name: "",
            email: "",
            username: "",
            password: "",
        })
        //expect(resp.code).toBe(400);
    })
})