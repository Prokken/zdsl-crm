import { ColumnDef, flexRender } from "@tanstack/react-table";
import { Table } from "lucide-react";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export interface DynamicTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  className?: string;
  components?: {
    cellRenderer?: (columnKey: string, rowData: T) => JSX.Element;
    headerRenderer?: (columnKey: string) => JSX.Element;
  };
}

const DynamicDataTable = <T extends object>({
  data,
  columns,
  components,
  className,
  ...props
}: DynamicTableProps<T>) => {
  return (
    <div
      className={cn(
        "overflow-auto h-full border rounded-[10px] shadow-sm",
        className
      )}
      {...props}
    >
      <Table className="bg-white  w-full  ">
        <TableHeader className="sticky top-[-1px] shadow-sm bg-white z-20 transition-all duration-500">
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
};

export default DynamicDataTable;
