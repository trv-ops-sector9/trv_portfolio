import type { Metadata } from "next";
import { PrivateGate } from "./PrivateGate";

export const metadata: Metadata = {
  title: "Private",
  robots: { index: false, follow: false },
};

export default function PrivatePage() {
  return <PrivateGate />;
}
