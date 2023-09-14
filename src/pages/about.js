import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content="This is the about page" />
      </Head>

      <div>
        <h1 className="red-text">About</h1>
        <p>This is the about page.</p>
      </div>
    </Layout>
  );
}
