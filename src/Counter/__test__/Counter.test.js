import React from "react";
import Counter from "../Counter";
import {cleanup, fireEvent, render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

let getByTestId;
let addBtnEl;
let subtractBtnEl;
let counterEl;
let inputEl;

beforeEach( () => {
    const component = render(<Counter />);
    getByTestId = component.getByTestId

    addBtnEl = getByTestId("add-btn");
    subtractBtnEl = getByTestId("subtract-btn");
    counterEl = getByTestId("counter");
    inputEl = getByTestId("input")
})

afterEach(() => {
    cleanup()
})

test("header renders with the correct text", () => {
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("My Counter");
});

test("counter initially starts at zero", () => {
    expect(counterEl.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
    expect(inputEl.value).toBe("1");
})

test("add button renders with plus sign", () => {
    const addBtn = getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+");
})

test("subtract button renders with minus sign", () => {
    const subtractBtn = getByTestId("subtract-btn");

    expect(subtractBtn.textContent).toBe("-");
})

test("changing the input by typing actually works correctly", () => {
    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    expect(inputEl.value).toBe("5");
})

test("clicking on the plus button adds 1 to the displayed counter", () => {
    expect(counterEl.textContent).toBe("0");

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe("1");
})

test("clicking on the minus button subtracts 1 from the displayed counter", () => {
    expect(counterEl.textContent).toBe("0");

    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe("-1");
})

test("changing input value then clicking on add button works correctly", () => {
    expect(counterEl.textContent).toBe("0");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe("5");
})

test("changing input value then clicking on minus button works correctly", () => {
    expect(counterEl.textContent).toBe("0");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe("-5");
})

test("adding and then subtracting leads to the correct counter number", () => {
    expect(counterEl.textContent).toBe("0");

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    });

    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe("20");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    fireEvent.click(addBtnEl);
    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe("15");

})

test("counter contains correct className", () => {
    expect(counterEl.textContent).toBe("0");

    expect(counterEl.className).toBe("");

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    });

    fireEvent.click(addBtnEl)

    expect(counterEl.className).toBe("");

    fireEvent.click(addBtnEl)

    expect(counterEl.className).toBe("green");

    fireEvent.click(addBtnEl)

    expect(counterEl.className).toBe("green");

    fireEvent.click(subtractBtnEl)
    fireEvent.click(subtractBtnEl)

    expect(counterEl.className).toBe("");

    fireEvent.click(subtractBtnEl)
    fireEvent.click(subtractBtnEl)
    fireEvent.click(subtractBtnEl)
    fireEvent.click(subtractBtnEl)

    expect(counterEl.className).toBe("red");

})