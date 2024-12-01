import { Tile } from "@/components/composites/Tile";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { Separator } from "@/components/ui/separator";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function AvatarTile() {
  const code = `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>SC</AvatarFallback>
</Avatar>
`;
  return (
    <Tile
      title="User Avatar"
      description="User Avatar shows the user's profile picture, or falls back to initials."
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Separator className="my-4" />
      <CodeBlock code={code} />
    </Tile>
  );
}

function BadgeTile() {
  const code = `<Badge>Basic</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="highlight">Highlight</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="error">Error</Badge>`;
  return (
    <Tile
      title="Badge"
      description="A badge can show status or be a flag for something."
    >
      <div className="flex flex-row gap-2 mb-4">
        <Badge>Basic</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="highlight">Highlight</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="error">Error</Badge>
      </div>
      <Separator className="my-4" />
      <CodeBlock code={code} />
    </Tile>
  );
}

function ButtonTile() {
  return (
    <Tile title="Button" description="A button is a clickable element.">
      <div className="flex flex-row gap-2">
        <Button>Default</Button>
      </div>
    </Tile>
  );
}

const BasicExample = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <AvatarTile />
        <BadgeTile />
        <ButtonTile />
      </div>
    </>
  );
};

export { BasicExample };
