import { PageSections } from "@/components/common/PageSections";

function AccordianTile() {
  return <div>accordian tile</div>;
}

function CardTile() {
  return <div>card tile</div>;
}

function TileTile() {
  return <div>tile tile</div>;
}

function DrawerTile() {
  return <div>drawer tile</div>;
}

function ScrollAreaTile() {
  return <div>scroll area tile</div>;
}
function ResizeableTile() {
  return <div>resizeable tile</div>;
}

function SheetTile() {
  return <div>sheet tile</div>;
}

const sections = [
  { id: "accordian", title: "Accordian", children: <AccordianTile /> },
  { id: "card", title: "Card", children: <CardTile /> },
  { id: "tile", title: "Tile", children: <TileTile /> },
  { id: "sheet", title: "Sheet", children: <SheetTile /> },
  { id: "drawer", title: "Drawer", children: <DrawerTile /> },
  { id: "scroll-area", title: "Scroll Area", children: <ScrollAreaTile /> },
  { id: "resizeable", title: "Resizeable", children: <ResizeableTile /> },
];
const ContainerExample = () => {
  return <PageSections sections={sections} />;
};

export { ContainerExample };
