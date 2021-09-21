import * as React from "react"
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"
import theme from '../theme';
import "@fontsource/karla";
import '@fontsource/karla/700.css';
import '@fontsource/karla/800.css';

function Providers({ children }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      { children }
    </ChakraProvider>
  )
}
export { Providers };
