import { delay } from "redux-saga";
export default {
  async GetNotifications() {
    console.warn("real noti service");
    await delay(1000);
    return { count: 42 };
  }
};
