import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://public.wattmaven.com/logomark-light.svg`}
          alt="WattMaven"
          width={200}
          height={200}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
