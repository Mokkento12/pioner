import { Middleware } from "@reduxjs/toolkit";

export const loggerMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
    console.log("🟡 Action dispatched:", action);
    const result = next(action); // передаём действие дальше
    console.log("🟢 New state:", storeAPI.getState());
    return result;
  };
