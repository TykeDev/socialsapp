import { expect, test } from 'vitest';
import { deletePost, deleteSavedPost, getInfinitePosts, getPostById, likePost, savePost, searchPosts } from "@/lib/appwrite/api";

test("search post found", async() => {
    let resp = await searchPosts("huzur");
    expect(resp.total).toBeGreaterThan(0);
})

test("search post not found", async() => {
    let resp = await searchPosts("error");
    expect(resp.total).toBe(0);
})

test("infinite scroll", async() => {
    let resp = await getInfinitePosts({pageParam: 0});
    expect(resp.total).toBeGreaterThan(0);
})

test("infinite scroll fail", async() => {
    let resp = await getInfinitePosts({pageParam: Math.random()*10});
    expect(resp).toBe(undefined);
})

test("get post by postId", async() => {
    let resp = await getPostById("667b3e2e0fd903d1ac69");
    expect(resp).not.toBe(undefined);
})

test("get post by postId undefined", async() => {
    let resp = await getPostById("qqqqqqqqqqqqqq");
    //console.log(resp)
    expect(resp).toBe(undefined);
})

test("delete post fail", async() => {
    let resp = await deletePost("qqqq", "qqqqqq");
    expect(resp).toBe(undefined);
})

test("like/unlike", async() => {
    let resp = await likePost('667b3e2e0fd903d1ac69', ['667b37821bce3e38d83e', '667b4b3fece0408294b6']);
    //expect(resp).not.toBe(undefined);
})

test("save post", async() => {
    let resp = await savePost('667b4b3fece0408294b6', '667b3e2e0fd903d1ac69');
    expect(resp).not.toBe(undefined);
})

test("delete saved post", async() => {
    let resp = await deleteSavedPost('667b5b9100a3c2a42b98');
    expect(resp).toStrictEqual({ status: "Ok" });
})

test("delete saved post fail", async() => {
    let resp = await deleteSavedPost('667b58ccae3f3e768daaf');
    expect(resp).not.toBe({ status: "Ok" });
})

