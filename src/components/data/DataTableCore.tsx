import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type Table as TableType,
} from "@tanstack/react-table";

import { DataTablePagination } from "@/components/data/DataTablePagination";
import { DataTableViewOptions } from "@/components/data/DataTableViewOptions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  toolbar?: React.ReactNode | ((table: TableType<TData>) => React.ReactNode);
  caption?: string;
}

const DataTableCore = <TData, TValue>({
  columns,
  data,
  toolbar,
  caption,
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const renderedToolbar =
    typeof toolbar === "function" ? toolbar(table) : toolbar;

  const renderTableHeader = (table: TableType<TData>) => {
    return table.getHeaderGroups().map((headerGroup) => (
      <TableRow key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <TableHead key={header.id}>
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        ))}
      </TableRow>
    ));
  };

  const renderTableBody = (table: TableType<TData>) => {
    return table.getRowModel().rows?.length ? (
      table.getRowModel().rows.map((row) => (
        <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))
    ) : (
      <TableRow>
        <TableCell colSpan={columns.length} className="h-24 text-center">
          No results.
        </TableCell>
      </TableRow>
    );
  };

  return (
    <div className="rounded-md border space-y-2">
      <div className="flex items-center justify-between p-2">
        <div>{renderedToolbar}</div>
        <DataTableViewOptions table={table} />
      </div>
      <Table>
        <TableHeader>{renderTableHeader(table)}</TableHeader>
        <TableBody>{renderTableBody(table)}</TableBody>
        <TableCaption>{caption}</TableCaption>
      </Table>
      {table.getFilteredRowModel().rows.length > 5 && (
        <DataTablePagination table={table} />
      )}
    </div>
  );
};

export { DataTableCore };
