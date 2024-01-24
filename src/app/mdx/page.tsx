import { Metadata } from "next";
import MdxComponent from "./content.mdx";

export const metadata: Metadata = {
  title: "Mdx page",
};

export default function Home() {
  return (
    <div className="prose">
      <MdxComponent />
    </div>
  );
}
