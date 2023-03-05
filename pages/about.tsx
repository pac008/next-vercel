import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";
import { DarkLayout } from "@/components/layouts/DarkLayout";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <h1>about page</h1>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">pages/about.tsx</code>
        </p>
        <div>
          <Link href="/">ir a home</Link>
        </div>
      </div>
    </>
  );
}

About.getLayout = function getLayout(page: any) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
