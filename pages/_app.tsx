import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export default function App({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <>
            <div className="">Hello</div>
          </>
        }
        persistor={persistor}
      >
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
