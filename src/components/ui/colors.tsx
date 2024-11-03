const Colors = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex space-x-2 h-12 justify-between">
        <div className="px-4 bg-background text-foreground">Background</div>
        <div className="px-4 bg-foreground text-background">Foreground</div>
        <div className="px-4 bg-card text-card-foreground">Card</div>
        <div className="px-4 bg-popover text-popover-foreground">Popover</div>
        <div className="px-4 bg-primary text-primary-foreground">Primary</div>
        <div className="px-4 bg-secondary text-secondary-foreground">
          Secondary
        </div>
      </div>
      <div className="flex space-x-2 h-12 justify-between">
        <div className="px-4 bg-muted text-muted-foreground">Muted</div>
        <div className="px-4 bg-accent text-accent-foreground">Accent</div>
        <div className="px-4 bg-destructive text-destructive-foreground">
          Destructive
        </div>
        <div className="px-4 bg-warning text-warning-foreground">Warning</div>
        <div className="px-4 bg-highlight text-highlight-foreground">
          Highlight
        </div>
        <div className="px-4 bg-header text-header-foreground">Header</div>
        <div className="px-4 bg-border text-border-foreground">Border</div>
        <div className="px-4 bg-input text-input-foreground">Input</div>
        <div className="px-4 bg-ring text-ring-foreground">Ring</div>
      </div>
      <div className="flex space-x-2 h-12 justify-between">
        <div className="px-4 bg-chart-1 text-chart-1-foreground">Chart 1</div>
        <div className="px-4 bg-chart-2 text-chart-2-foreground">Chart 2</div>
        <div className="px-4 bg-chart-3 text-chart-3-foreground">Chart 3</div>
        <div className="px-4 bg-chart-4 text-chart-4-foreground">Chart 4</div>
        <div className="px-4 bg-chart-5 text-chart-5-foreground">Chart 5</div>
      </div>
    </div>
  );
};

export { Colors };
