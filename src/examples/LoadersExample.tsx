import { PageSections } from "@/components/common/PageSections";

function SpinnerTile() {
  return <div>spinner tile</div>;
}

function SkeletonRowTile() {
  return <div>skeleton row tile</div>;
}

function SkeletonBoxTile() {
  return <div>skeleton box tile</div>;
}

const sections = [
  { id: "spinner", title: "Spinner", children: <SpinnerTile /> },
  { id: "skeleton-row", title: "Skeleton Row", children: <SkeletonRowTile /> },
  { id: "skeleton-box", title: "Skeleton Box", children: <SkeletonBoxTile /> },
];
const LoadersExample = () => {
  return <PageSections sections={sections} />;
};

export { LoadersExample };
