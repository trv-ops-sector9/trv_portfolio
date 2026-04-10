import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store",
  description: "Prints, objects, and releases. Coming soon.",
};

export default function StorePage() {
  return (
    <div className="container stub-page">
      <span className="stub-page__label">Store</span>
      <h1 className="stub-page__title">Coming Soon</h1>
      <p className="stub-page__description">
        Prints, objects, and releases. Check back later.
      </p>
    </div>
  );
}
