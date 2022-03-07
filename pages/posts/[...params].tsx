import React from "react";
import { useRouter } from "next/dist/client/router";

export default function ParamsPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Params Page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
