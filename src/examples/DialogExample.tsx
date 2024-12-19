import { PageSections } from "@/components/common/PageSections";
import { ConfirmActionModal } from "@/components/composites/ConfirmActionModal";
import { Tile } from "@/components/composites/Tile";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { Separator } from "@/components/ui/separator";
import { SectionDescription, SectionTitle } from "@/components/ui/typography";

function AlertDialogExample() {
  const imp = `import {
AlertDialog,
AlertDialogAction,
AlertDialogCancel,
AlertDialogContent,
AlertDialogDescription,
AlertDialogFooter,
AlertDialogHeader,
AlertDialogTitle,
AlertDialogTrigger,
} from "@/components/ui/alert-dialog";`;
  const code = `<AlertDialog>
  <AlertDialogTrigger>
    <Button variant="outline">Open Alert Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Alert Dialog Title</AlertDialogTitle>
      <AlertDialogDescription>
        This description calls out what is required for the user to know.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <div>
      The content of the alert dialog goes here. It could be a form, an image or
      a child component.
    </div>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`;
  return (
    <Tile
      title="Alert Dialog"
      description="An alert dialog is a modal that prompts the user to submit or confirm a required action. (Confirm or Cancel)"
    >
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant="outline">Open Alert Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Alert Dialog Title</AlertDialogTitle>
            <AlertDialogDescription>
              This description calls out what is required for the user to know.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div>
            The content of the alert dialog goes here. It could be a form, an
            image or a child component.
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Separator className="my-4" />
      <CodeBlock code={imp} language="tsx" />
      <CodeBlock code={code} language="tsx" />
      <Separator className="my-4" />
      <SectionTitle>Composite component</SectionTitle>
      <SectionDescription>
        A reusable component can be used instead of creating the full
        AlertDialog each time.
      </SectionDescription>
      <ConfirmActionModal
        trigger="Open Confirm Action"
        title="Confirm Action"
        description="You should be sure about this action, because it is important."
        onCancel={() => console.log("Cancel")}
        onConfirm={() => console.log("Confirm")}
      >
        Content of modal here.
      </ConfirmActionModal>
    </Tile>
  );
}

function DisplayModal() {
  return <div>Display Modal</div>;
}

function DrawerModal() {
  return <div>Drawer Modal</div>;
}

function SheetModal() {
  return <div>Sheet Modal</div>;
}

function ToastModal() {
  return <div>Toast Modal</div>;
}

const sections = [
  {
    id: "alert-dialog",
    title: "Alert Dialog",
    children: <AlertDialogExample />,
  },
  { id: "display", title: "Display", children: <DisplayModal /> },
  { id: "drawer", title: "Drawer", children: <DrawerModal /> },
  { id: "sheet", title: "Sheet", children: <SheetModal /> },
  { id: "toast", title: "Toast", children: <ToastModal /> },
];
const DialogExample = () => {
  return <PageSections sections={sections} />;
};

export { DialogExample };
