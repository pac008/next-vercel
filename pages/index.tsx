import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <h1>home page</h1>
        <div className="description">
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/index.tsx</code>
          </p>
          <div>
            <Link href="/about">ir a about</Link>
          </div>
        </div>
    </MainLayout>
  );
}
