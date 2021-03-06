import React from 'react';
import App, { Container } from 'next/app';
//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import auth0 from '../services/auth0'
import "react-datepicker/dist/react-datepicker.css";
// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const auth = {user, isAuthenticated: !!user };
    return { pageProps, auth }
  }

  // state = {
  //   name: "Morgan",
  // }

  render () {
    const { Component, pageProps, auth } = this.props

    return (
      <Container>
        <Component {...pageProps} {...this.state}  auth = {auth}/>
      </Container>
    )
  }
}
