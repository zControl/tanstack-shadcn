import { Colors } from '@/components/ui/colors'
import { AccordianExample } from '@/examples/AccordianExample'
import { TileExample } from '@/examples/TileExample'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(app)/_examples/demo_')({
  component: () => (
    <>
      <div className="w-full flex flex-col gap-6">
        <Colors />
        <AccordianExample />
        <TileExample />
      </div>
    </>
  ),
})
