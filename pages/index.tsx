import Head from "next/head";
import About from "./about";
import Certifications from "./certifications";
import Experience from "./experience";
import Project from "./projects";
import Education from "./education";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Sanyam Jain - Portfolio</title>
          <meta
            property="og:description"
            content="Welcome to my portfolio! I am a software engineer who builds accessible, inclusive products and digital experiences for the web."
          />
          <meta
            name="keywords"
            content="portfolio, web developer, Asp dot net developer, dot net developer, software engineer"
          />
          <meta name="author" content="Sanyam Jain" />
          {/* <meta property="og:image" content="website url/images/Thumbnail.jpg" /> */}
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:alt" content="Summary Image" />
          <meta property="og:site_name" content="Sanyam's Portfolio" />
          {/* <meta property="og:url" content={"website url"} /> */}
          <meta property="og:title" content="Sanyam Jain - Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_IE" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="Full Stack Engineer" />
          <meta
            name="twitter:description"
            content="Welcome to my portfolio! I am a software engineer who builds accessible, inclusive products and digital experiences for the web."
          />
          {/* <meta
            name="twitter:image"
            content={`${window.location.origin}images/Thumbnail.jpeg`}
          /> */}
          <link rel="shortcut icon" href="/apple-touch-icon.png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="android-chrome-192x192"
            sizes="192x192"
            href="/favicon/android-chrome-192x192.png"
          />
          <link
            rel="android-chrome-512x512"
            sizes="512x512"
            href="/favicon/android-chrome-512x512.png"
          />
        </Head>
      </div>
      <About />
      <Experience />
      <Project />
      <Education />
      <Certifications />
      <Contact />
      <div className="mt-20">
        © {new Date().getFullYear()} Sanyam Jain. Made with ♥ in Ahmedabad,
        India.
      </div>
    </>
  );
}
