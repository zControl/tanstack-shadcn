import { PageSections } from "@/components/common/PageSections";
import { Tile } from "@/components/composites/Tile";

function DatabaseStatus() {
  return (
    <Tile
      title="Database Status"
      description="Get database health info and test connection."
    >
      <div>Query Status:</div>
      <div>Is Pending:</div>
      <div>Is Error:</div>
      <div>Data:</div>
    </Tile>
  );
}

function DatabaseGetDataFromButton() {
  return <div>get data from button</div>;
}

const sections = [
  {
    id: "database-status",
    title: "Database Status",
    children: <DatabaseStatus />,
  },
  {
    id: "database-data-from-button",
    title: "Database Data From Button",
    children: <DatabaseGetDataFromButton />,
  },
];
const DatabaseExample = () => {
  return <PageSections sections={sections} />;
};

export { DatabaseExample };
