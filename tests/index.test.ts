import {expect, test} from "vitest"

import {sayHello} from "../src"

test("says hello world", () => {
    expect(sayHello()).toEqual("Hello, world!")
})

test("says hello Naveen", () => {
    expect(sayHello("Naveen")).toEqual("Hello, Naveen!")
})
