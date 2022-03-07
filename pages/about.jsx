import React from "react";
import { useRouter } from "next/dist/client/router";

export default function AboutPage() {
  const router = useRouter();
  console.log("Query about:", router.query);

  return <div>About Page</div>;
}
