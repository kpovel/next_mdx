import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-extrabold text-3xl">{children}</h1>
    ),
    ...components,
  };
}
