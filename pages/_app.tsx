import Layout from "@/components/Layout/Layout";
import "../styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { extendTheme } from "@chakra-ui/react";
import { Provider, useDispatch } from "react-redux";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:5001/recipes");
  const recipes = await res.json();
  return {
    props: {
      recipes,
    }, // will be passed to the page component as props
  };
}

const theme = extendTheme({
  colors: {
    brand: {
      green: {
        100: "#00FF7A",
        200: "#01BC5A",
      },
      red: {
        100: "#EE3B48",
        200: "#CE2B37",
      },
      grey: {
        100: "#DDE5E9",
      },
      Paragraph: "#A7A6A7",
    },
  },
});

import { store } from "@/components/02-store/store";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UserProvider>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </UserProvider>
    </Provider>
  );
}
