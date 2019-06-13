import { delay } from "redux-saga";

it(`async test1`, done => {
  setTimeout(done, 100);
});

it(`async test2`, () => {
  return new Promise(resolve => {
    setTimeout(resolve, 1500);
  });
});

it(`async test3`, async () => {
  await delay(100);
});
