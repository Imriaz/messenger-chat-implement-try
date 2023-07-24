import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add the Facebook SDK script */}
          <script
            async
            defer
            crossOrigin="anonymous"
            src={`https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0&appId=${process.env.NEXT_PUBLIC_FB_APP_ID}&autoLogAppEvents=1`}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;