import { Metadata } from "next";
import css from "./Home.module.css";

export const metadata: Metadata = {
  title: "404 - Page not found | Notehub",
  description: "This page does not exist or has been moved",
  openGraph: {
    title: "404 - Page not found | Notehub",
    description: "This page does not exist or has been moved",
    url: "https://notehub.com/",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg/not-found",
        width: 1200,
        height: 630,
        alt: "404 - Page not found | Notehub",
      },
    ],
  },
};

export default function NotFound() {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </>
  );
}
