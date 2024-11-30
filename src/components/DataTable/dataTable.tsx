import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
}

function DataTable<TData, TValue>({
  columns,
  data,
  className,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  return (
    <div
      className={cn(
        "overflow-auto h-full border rounded-[10px] shadow-sm",
        className
      )}
    >
      <Table className="bg-white  w-full  ">
        <TableHeader className="sticky top-[-1px] shadow-sm bg-white z-20 transition-all duration-500">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                console.log(header.column);

                return (
                  <TableHead
                    key={header.id}
                    className={`border !px-3 whitespace-nowrap ${
                      header.id === "select" && "sticky left-[-1px] bg-white "
                    }  ${
                      header.id === "action" &&
                      "sticky right-[-1px] bg-white z-20  after:content-[''] after:w-[calc(100%+1px) after:absolute after:bg-red-400 after:h-[200px] after:top-0 ]"
                    }`}
                  >
                    {header?.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => {
                    console.log(cell.column.id);
                    return (
                      <TableCell
                        key={cell.id}
                        className={`border !px-3 whitespace-nowrap text-sm ${
                          cell.column.id === "select" &&
                          "sticky left-[-1px] bg-white z-10 duration-150  "
                        }`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length}>No Data</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;
