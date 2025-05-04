// Refer leerob tutorial for MDX components
// https://youtu.be/34bRv6cQezo?si=nrAyj8P9-Eui5kE8
// https://github.com/leerob/site/blob/main/mdx-components.tsx

import type { MDXComponents } from 'mdx/types'
import type { ComponentPropsWithoutRef } from 'react'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Headings
    h1: (props: ComponentPropsWithoutRef<'h1'>) => (
      <h1 {...props} className="text-4xl font-bold mt-8 mb-4" />
    ),
    h2: (props: ComponentPropsWithoutRef<'h2'>) => (
      <h2 {...props} className="text-3xl font-semibold mt-6 mb-3" />
    ),
    h3: (props: ComponentPropsWithoutRef<'h3'>) => (
      <h3 {...props} className="text-2xl font-semibold mt-5 mb-2" />
    ),
    // Paragraphs
    p: (props: ComponentPropsWithoutRef<'p'>) => (
      <p {...props} className="text-base leading-7 mb-4" />
    ),
    // Links
    a: (props: ComponentPropsWithoutRef<'a'>) => (
      <a {...props} className="text-blue-600 hover:text-blue-800 underline" />
    ),
    // Lists
    ul: (props: ComponentPropsWithoutRef<'ul'>) => (
      <ul {...props} className="list-disc pl-6 mb-4" />
    ),
    ol: (props: ComponentPropsWithoutRef<'ol'>) => (
      <ol {...props} className="list-decimal pl-6 mb-4" />
    ),
    li: (props: ComponentPropsWithoutRef<'li'>) => (
      <li {...props} className="mb-1" />
    ),
    // Code blocks
    pre: (props: ComponentPropsWithoutRef<'pre'>) => (
      <pre {...props} className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4" />
    ),
    // Inline code
    code: (props: ComponentPropsWithoutRef<'code'>) => (
      <code {...props} className="bg-gray-100 dark:bg-gray-900 rounded px-1 py-0.5 font-mono text-sm" />
    ),
    // Blockquotes
    blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
      <blockquote {...props} className="border-l-4 border-gray-300 pl-4 italic my-4" />
    ),
  }
}
