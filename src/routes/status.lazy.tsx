import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/status')({
  component: () => <div>Hello /status!</div>,
})
