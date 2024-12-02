import { PageSections } from "@/components/common/PageSections";

function ActionModal() {
  return <div>Action Modal</div>;
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
  { id: "action", title: "Action", children: <ActionModal /> },
  { id: "display", title: "Display", children: <DisplayModal /> },
  { id: "drawer", title: "Drawer", children: <DrawerModal /> },
  { id: "sheet", title: "Sheet", children: <SheetModal /> },
  { id: "toast", title: "Toast", children: <ToastModal /> },
];
const DialogExample = () => {
  return <PageSections sections={sections} />;
};

export { DialogExample };
