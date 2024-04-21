import { configureStore } from "@reduxjs/toolkit";

import profile from "./users/profile";
import navMenuFunctions from "./appFunctionality/navMenuFunctions";
import snackBar from "./appFunctionality/snackbar";

export const ibassStore = () => {
  return configureStore({
    reducer: {
      //app functionality
      menuFunctions: navMenuFunctions,
      snackbar: snackBar,
      //user
      userProfile: profile,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof ibassStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
