import { cookies } from "next/headers";
import Providers from "./providers";
import Particles from "@/components/particle";
import "../styles/globals.css";

export const metadata = {
  metadataBase: new URL("https://rajkumarayal.com.np"),
  title: {
    default: "Rajkumar Aryal",
  },
  description: "Hey! I am Rajkumar, a full-stack developer from Nepal.",
  authors: [{ name: "Rajkumar Aryal", url: "https://rajkumararyal.com.np" }],
  creator: "rajkumararyal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajkumararyal.com.np",
    siteName: "Rajkumar Aryal",
    title: "Rajkumar Aryal",
    description: "Hey! I am Rajkumar, a full-stack developer from Nepal.",
    images: [
      {
        url: "https://ik.imagekit.io/0cany3jxx/without%20bg.png",
        width: 1200,
        height: 630,
        alt: "Rajkumar Aryal",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@rajkumararyal",
    creator: "@rajkumararyal",
    title: "Rajkumar Aryal",
    description: "Hey! I am Rajkumar, a full-stack developer from Nepal.",
    images: ["https://rajkumararyal.com.np/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen overflow-x-hidden">
         <Particles
    particleColors={["#ffffff"]}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover
    alphaParticles={false}
    disableRotation={false}
    pixelRatio={1}
    className="absolute top-0 left-0 w-full h-full z-0"
/>
    <div className="absolute top-0 left-0 w-full h-full z-0">
       <Providers cookies={cookieHeader}>
          {children}
        </Providers>
        </div>
      </body>
    </html>
  );
}
