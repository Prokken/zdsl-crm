import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { ColumnField } from "./tableTypes";

export const readyDataForColumn = <TData extends object>(
  fields: ColumnField[],
  options: { isAction?: boolean; isSelection?: boolean } = {
    isAction: true,
    isSelection: true,
  }
): ColumnDef<TData>[] => {
  const columns: ColumnDef<TData>[] = fields.map((field) => ({
    accessorKey: field.accessorKey,
    header: field.header,
  }));

  const selectionCol: ColumnDef<TData> = {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        className=""
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  };

  const actionCol: ColumnDef<TData> = {
    id: "action",
    header: "Action",
    enableSorting: false,
    enableHiding: false,
  };

  const result = [...columns];
  if (options?.isAction) {
    result.push(actionCol);
  }
  if (options?.isSelection) {
    result.unshift(selectionCol);
  }

  return result;
};
