import React from "react";
import Counter from "../Counter";
import {fireEvent, render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("header renders with the correct text", () => {
    const { getByTestId } = render(<Counter />);
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("My Counter")
});

test("counter initially starts at zero", () => {
    const { getByTestId } = render(<Counter />);
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
});

test("input contains initial value of 1", () => {
    const { getByTestId } = render(<Counter />);
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");
})

test("add button renders with plus sign", () => {
    const { getByTestId } = render(<Counter />);
    const addBtn = getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+");
})

test("subtract button renders with minus sign", () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtn = getByTestId("subtract-btn");

    expect(subtractBtn.textContent).toBe("-");
})

test("changing the input by typing actually works correctly", () => {
    const { getByTestId } = render(<Counter />);
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    expect(inputEl.value).toBe("5");
})

test("clicking on the plus button adds 1 to the displayed counter", () => {
    const { getByTestId } = render(<Counter />);
    const addBtnEl = getByTestId("add-btn");
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe("1");
})

test("clicking on the minus button subtracts 1 from the displayed counter", () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtnEl = getByTestId("subtract-btn");
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe("-1");
})