import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/activities')({
  component: () => <div>Hello /_app/screen-time!</div>,
})
