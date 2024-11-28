import { cn } from "@/lib/utils";
import { ColorSelector } from "./color-selector";

interface colorBoxProps {
  label: string;
  bgColor: string;
  textColor: string;
}
const ColorBox = ({ label, bgColor, textColor }: colorBoxProps) => {
  return (
    <div
      className={cn(
        "h-12 px-4 flex items-center justify-center text-lg font-semibold",
        `bg-${bgColor}`,
        `text-${textColor}`,
      )}
    >
      {label}
    </div>
  );
};
const Colors = () => {
  return (
    <>
      <div>
        <ColorSelector />
      </div>
      <div className="px-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ColorBox
          label="Background"
          bgColor="background"
          textColor="foreground"
        />
        <ColorBox
          label="Foreground"
          bgColor="foreground"
          textColor="background"
        />
        <ColorBox label="Card" bgColor="card" textColor="card-foreground" />
        <ColorBox
          label="Popover"
          bgColor="popover"
          textColor="popover-foreground"
        />
        <ColorBox
          label="Primary"
          bgColor="primary"
          textColor="primary-foreground"
        />
        <ColorBox
          label="Secondary"
          bgColor="secondary"
          textColor="secondary-foreground"
        />
        <ColorBox label="Muted" bgColor="muted" textColor="muted-foreground" />
        <ColorBox
          label="Accent"
          bgColor="accent"
          textColor="accent-foreground"
        />
        <ColorBox
          label="Destructive"
          bgColor="destructive"
          textColor="destructive-foreground"
        />
        <ColorBox
          label="Warning"
          bgColor="warning"
          textColor="warning-foreground"
        />
        <ColorBox
          label="Highlight"
          bgColor="highlight"
          textColor="highlight-foreground"
        />
        <ColorBox
          label="Header"
          bgColor="header"
          textColor="header-foreground"
        />
        <ColorBox
          label="Border"
          bgColor="border"
          textColor="border-foreground"
        />
        <ColorBox label="Input" bgColor="input" textColor="input-foreground" />
        <ColorBox label="Ring" bgColor="ring" textColor="ring-foreground" />
        <ColorBox
          label="Chart 1"
          bgColor="chart-1"
          textColor="chart-1-foreground"
        />
        <ColorBox
          label="Chart 2"
          bgColor="chart-2"
          textColor="chart-2-foreground"
        />
        <ColorBox
          label="Chart 3"
          bgColor="chart-3"
          textColor="chart-3-foreground"
        />
        <ColorBox
          label="Chart 4"
          bgColor="chart-4"
          textColor="chart-4-foreground"
        />
        <ColorBox
          label="Chart 5"
          bgColor="chart-5"
          textColor="chart-5-foreground"
        />
      </div>
    </>
  );
};

export { Colors };
