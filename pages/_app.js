import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  input {
    width: 100%;
    height: 38px;
    font-size: 15px;
    color: white;
    padding: 10px;
    outline: 0px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 3.5px;
    background-color: transparent;
    margin-bottom: 25px;
  }
  button {
    width: 100%;
    height: 38px;
    font-size: 15px;
    border-radius: 3.5px;
    border-style: none;
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    cursor: pointer;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.disabled};
      opacity: 0.8;
      cursor: no-drop;
    }
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{db.title}</title>
        <meta name="og:title" content={db.title} />
        <meta name="og:description" content={db.description} />
        <meta name="og:image" content={db.bg} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://vercel.com/dimasresende/aluraquiz-base" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
