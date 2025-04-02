import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import Providers from "@/lib/ReactQueryProviders";

const nanumsquare = localFont({
  src: "../fonts/NanumSquareNeo-Variable.ttf",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "요리 맛짱 | 관리자 페이지",
  description: "요리 맛짱 | 관리자 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nanumsquare.className}>
        <main>
          <Providers>
            <Layout>
              {children}
              <div id="modal-root" />
            </Layout>
          </Providers>
        </main>
      </body>
    </html>
  );
}
