import Head from "next/head";

export default function Page() {
  return (
    <div>
      <Head>
        <meta name="og:title" content="WattMaven" />
        <meta name="og:description" content="WattMaven" />
        <meta
          name="og:image"
          content={
            // Because OG images must have a absolute URL, we use the
            // `VERCEL_URL` environment variable to get the deployment’s URL.
            // More info:
            // https://vercel.com/docs/concepts/projects/environment-variables
            `${
              process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : ""
            }/api/vercel`
          }
        />
      </Head>
    </div>
  );
}
