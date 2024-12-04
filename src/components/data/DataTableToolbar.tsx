import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table as TableType } from "@tanstack/react-table";

interface DataTableToolbarProps<TData> {
  table: TableType<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <Input
        placeholder="Search..."
        className="max-w-sm"
        value={(table.getColumn("firstName")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("firstName")?.setFilterValue(event.target.value)
        }
      />
      <Button onClick={() => console.log(table.getFilteredRowModel().rows)}>
        Log Rows
      </Button>
    </div>
  );
}
