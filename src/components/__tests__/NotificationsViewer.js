import NotificationsViewer from "../NotificationsViewer";
import renderer from "react-test-renderer";
import React from "react";
import { delay } from "redux-saga";

jest.mock("../../services/NotificationsService");
const NotificationsService = require("../../services/NotificationsService")
  .default;
describe("noti viewer", () => {
  beforeAll(() => {
    NotificationsService.__setCount(42);
  });

  it("should display the correct number of notifications", async () => {
    const tree = renderer.create(<NotificationsViewer />);
    await delay();
    const instance = tree.root;
    const component = instance.findByProps({ className: `notifications` });
    const text = component.children[0];
    expect(text).toEqual("42 Notification awaiting");
  });
});
