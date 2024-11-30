import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  Table,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import React from "react";

function useTable<TData, TValue>({
  data,
  columns,
}: {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}): Table<TData> {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  //   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
  //     []
  //   );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  return useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    // onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      //   columnFilters,
      columnVisibility,
    },
  });
}

export default useTable;
