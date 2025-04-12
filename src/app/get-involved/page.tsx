'use client';

import Head from 'next/head';
import GetInvolved from '../../components/GetInvolved';

export default function GetInvolvedPage() {
  return (
    <>
      <Head>
        <title>Get Involved – Bible Mentor AI</title>
        <meta
          name="description"
          content="Join the mission of Bible Mentor AI. Become a beta tester, prayer partner, content contributor, donor, or church partner and help people grow in faith through Scripture-based guidance."
        />
        <link rel="canonical" href="https://biblementorai.org/get-involved" />
      </Head>

      <GetInvolved />
    </>
  );
}
