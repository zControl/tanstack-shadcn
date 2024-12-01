import { Tile } from "@/components/composites/Tile";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { Header4 } from "@/components/ui/typography";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { IceCream } from "lucide-react";

function AvatarTile() {
  const code = `import { Avatar } from "@/components/ui/avatar";
<Avatar>
  <AvatarImage src="/avatar-2.jpg" alt="Avatar" />
  <AvatarFallback>AZ</AvatarFallback>
</Avatar>
`;
  return (
    <Tile
      title="User Avatar"
      description="User Avatar shows the user's profile picture, or falls back to initials."
    >
      <Avatar>
        <AvatarImage src="/avatar-2.jpg" alt="Avatar" />
        <AvatarFallback>AZ</AvatarFallback>
      </Avatar>
      <Separator className="my-4" />
      <CodeBlock code={code} />
    </Tile>
  );
}

function BadgeTile() {
  const code = `import { Badge } from "@/components/ui/badge";
<Badge>Basic</Badge>
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
  const code = `import { Button } from "@/components/ui/button";
<Button>Default</Button>
<Button variant="variant">ButtonText</Button>
<Button>
  <IceCream />
  With Icon
</Button>
<Button disabled>
  <Spinner />
  Disabled
</Button>`;
  const sizes = `import { Button } from "@/components/ui/button";
<Button size="default">Default</Button>
<Button size="icon">
  <IceCream />
</Button>`;
  return (
    <Tile title="Button" description="A button is a clickable element.">
      <Header4>Colors</Header4>
      <div className="flex flex-row gap-2">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button>
          <IceCream />
          With Icon
        </Button>
        <Button disabled>
          <Spinner />
          Disabled
        </Button>
      </div>
      <Separator className="my-4" />
      <CodeBlock code={code} />
      <Header4>Sizes</Header4>
      <div className="flex flex-row gap-2 mt-4">
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="sm">Small</Button>
        <Button size="icon">
          <IceCream />
        </Button>
      </div>
      <Separator className="my-4" />
      <CodeBlock code={sizes} />
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
