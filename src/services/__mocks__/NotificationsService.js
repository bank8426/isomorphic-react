let count = 0;
export default {
  __setCount(_count) {
    count = _count;
  },
  async GetNotifications() {
    console.warn("good job");
    return { count };
  }
};
