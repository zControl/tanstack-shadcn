import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(app)/_examples/demo/basic')({
  component: () => <div>Hello /_examples/demo/basic!</div>,
})
