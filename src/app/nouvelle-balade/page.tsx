"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NewRide() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://tinyurl.com/nouvelle-balade");
  });

  return null;
}
