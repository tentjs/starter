import { mount } from "@tentjs/tent";
import { Counter } from "../components/counter";
import { fireEvent, getByRole } from "@testing-library/dom";

/**
 * Mocking the CSS module
 * This is necessary because Jest does not understand CSS modules.
 */
jest.mock("../components/counter/counter.module.css", () => ({
  button: "button",
  highCount: "highCount",
  superHighCount: "superHighCount",
}));

describe("counter", () => {
  test("verify text content and classes when incrementing", () => {
    mount(document.body, Counter);

    const button = getByRole(document.body, "button");

    expect(button.textContent).toBe("Clicked 0 times");

    fireEvent.click(button);

    expect(button.textContent).toBe("Clicked 1 times");

    fireEvent.click(button);
    fireEvent.click(button);

    expect(button.textContent).toBe("Clicked 3 times");
    expect(button.classList.contains("highCount")).toBe(true);

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(button.textContent).toBe("Clicked 6 times");
    expect(button.classList.contains("superHighCount")).toBe(true);
  });
});
