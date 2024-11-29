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
    <div className="border-0 flex flex-col rounded-sm">
      <div className={cn("flex-1 rounded-sm ", className)}>
        <Table className="bg-white overflow-auto">
          <TableHeader className="sticky -top-2 bg-white z-20 duration-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  console.log("header id", header.id);

                  return (
                    <TableHead
                      key={header.id}
                      className={`border !px-3 whitespace-nowrap ${
                        header.id === "select" && "sticky left-[-1px] bg-white "
                      }  ${
                        header.id === "action" &&
                        "sticky right-[-1px] bg-white z-20  after:content-[''] after:w-[calc(100%+1px) after:absolute after:bg-red-400 after:h-full after:block after:top-0 after:lef-0 after:z-50 ]"
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
    </div>
  );
}

export default DataTable;
