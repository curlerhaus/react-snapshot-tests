import { render, screen } from "@testing-library/react";
import App from "./App.js";
import renderer from "react-test-renderer";

test("renders a snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
