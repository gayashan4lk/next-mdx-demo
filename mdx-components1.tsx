import type { MDXComponents } from 'mdx/types'
import React, { ComponentPropsWithoutRef } from 'react'

type HeadingProps = ComponentPropsWithoutRef<'h1'>

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="font-bold text-4xl my-4" {...props} />
  ),
}

declare global {
  type MDXProvidedComponents = typeof components
}

export function useMDXComponents() : MDXProvidedComponents {
  console.log('components', components)
  return components
}