import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://your-portfolio.example.com"),
  title: "Roman Chakraborty — Full-Stack Developer & AI Engineer",
  description:
    "Full-stack developer and aspiring AI engineer specializing in scalable web applications, RAG systems, LLM integration, and semantic search.",
  keywords: [
    "full-stack developer",
    "AI engineer",
    "RAG",
    "LangChain",
    "Next.js",
    "Python",
    "FastAPI",
    "portfolio",
  ],
  authors: [{ name: "Roman Chakraborty" }],
  openGraph: {
    title: "Roman Chakraborty — Full-Stack Developer & AI Engineer",
    description:
      "Building intelligent products for the web. Full-stack engineering, RAG systems, and AI-powered applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roman Chakraborty — Full-Stack Developer & AI Engineer",
    description:
      "Building intelligent products for the web. Full-stack engineering, RAG systems, and AI-powered applications.",
  },
};

export const viewport = {
  themeColor: "#f5eee7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
