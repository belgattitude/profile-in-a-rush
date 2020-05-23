import React from 'react';
import App from 'next/app';
import '../assets/styles/styles.scss';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        <Component {...pageProps} />
      </CacheProvider>
    );
  }
}

export default MyApp;
