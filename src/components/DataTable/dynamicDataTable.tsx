import { icons } from "@/const/icons";
import { Icon } from "@/lib/ui/Icon";
import { cn } from "@/lib/utils";
import {
  Column,
  ColumnDef,
  flexRender,
  Table as ReactTable,
} from "@tanstack/react-table";
import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export interface DynamicTableProps<T> {
  data?: T[];
  columns: ColumnDef<T>[];
  className?: string;
  table: ReactTable<T>;
  isSort?: boolean;
  isAction?: boolean;
  components?: {
    cellRenderer?: (
      prev: JSX.Element | ReactNode,
      columnKey: string,
      rowData: T
    ) => JSX.Element | null;
    headerRenderer?: (column: ColumnDef<T>) => JSX.Element | ReactNode;
  };
}

export interface ColumnSortProps<T extends object> {
  children: JSX.Element | null;
  column: Column<T, unknown>; // Use the Column type from Tanstack Table
}

const ColumnSort = <T extends object>({
  children,
  column,
}: ColumnSortProps<T>) => {
  return (
    <Button
      variant="ghost"
      className="text-xs !text-start !p-0 m-0! font-primary hover:bg-transparent capitalize"
      onClick={() => {
        column.toggleSorting(column.getIsSorted() === "asc"); // Use the header prop correctly
      }}
    >
      {children}
      <Icon src={icons.get("sort")!} alt="sort" width={10} height={12} />
    </Button>
  );
};

const DynamicDataTable = <T extends object>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  data,
  columns,
  components,
  table,
  className,
  isSort = true,
  ...props
}: DynamicTableProps<T>) => {
  return (
    <div
      className={cn(
        "border flex-1 overflow-auto  rounded-[10px] shadow-sm flex ",
        className
      )}
      {...props}
    >
      <Table className="bg-white h-full  flex-1 flex-grow w-full">
        <TableHeader className="sticky top-[-1px]  shadow-sm bg-white z-20 transition-all duration-500">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                // console.log("header id", header.id);

                return (
                  <TableHead
                    key={header.id}
                    className={`border !px-[10px] text-start   text-foreground whitespace-nowrap ${
                      header.id === "select" && "sticky left-[-1px] bg-white  "
                    }  ${
                      header.id === "action" &&
                      "sticky right-[-1px] bg-white z-20  after:content-[''] after:w-[calc(100%+1px) after:absolute after:bg-red-400 after:h-[200px] after:top-0 ]"
                    }`}
                  >
                    {isSort &&
                    header.id !== "action" &&
                    header.id !== "select" ? (
                      <ColumnSort column={header.column}>
                        <>
                          {!header.isPlaceholder
                            ? components?.headerRenderer
                              ? components.headerRenderer(header)
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )
                            : null}
                        </>
                      </ColumnSort>
                    ) : !header.isPlaceholder ? (
                      components?.headerRenderer ? (
                        components.headerRenderer(header)
                      ) : (
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )
                      )
                    ) : null}
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
                      <React.Fragment key={cell.id}>
                        <TableCell
                          className={`border !px-[10px]  whitespace-nowrap  text-sm ${
                            cell.column.id === "select" &&
                            "sticky left-[-1px] bg-white z-10 duration-150 !w-10 "
                          } ${
                            cell.column.id === "action" &&
                            "sticky right-[-1px] bg-white z-10 duration-150  "
                          }`}
                        >
                          {components?.cellRenderer
                            ? components.cellRenderer(
                                flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                ) as React.ReactNode,
                                cell.column.id,
                                cell.row.original
                              )
                            : flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                        </TableCell>
                      </React.Fragment>
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
