
import React from 'react';
import App, { Container } from 'next/app';
//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  // state = {
  //   name: "Morgan",
  // }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} {...this.state}/>
      </Container>
    )
  }
}
