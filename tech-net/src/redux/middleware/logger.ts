import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("current state", store.getState());
  console.log("action ", action);

  next(action);
  console.log("update ", store.getState());
};

export default logger;
