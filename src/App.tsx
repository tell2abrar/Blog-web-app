import { theme } from 'theme';
import { client } from 'graphql/client';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
import { AuthLayout, MainLayout } from 'layouts';
import { authRoutes, mainRoutes } from 'routes';
import { AppProvider, ChatProvider } from 'contexts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

export const App = () => (
  <ApolloProvider client={client}>
    <AppProvider>
      <ChatProvider>
        <Toaster />
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            <CssBaseline />
            <BrowserRouter>
              <Routes>
                <Route element={<AuthLayout />}>
                  {authRoutes.map((route, index) => (
                    <Route path={route.path} element={route.element} key={index} />
                  ))}
                </Route>
                <Route element={<MainLayout />}>
                  {mainRoutes.map((route, index) => (
                    <Route path={route.path} element={route.element} key={index} />
                  ))}
                </Route>
              </Routes>
            </BrowserRouter>
          </StyledEngineProvider>
        </ThemeProvider>
      </ChatProvider>
    </AppProvider>
  </ApolloProvider>
);
