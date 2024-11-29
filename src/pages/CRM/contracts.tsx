import DataTable from "@/components/DataTable/dataTable";
import { ColumnData } from "@/components/DataTable/tableTypes";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
// mock data
import leadManagersData from "@/assets/_moc_/lead_managers.json";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useReducer } from "react";

export interface ColumnData {
  name?: string;
  phone?: string;
  job_title?: string;
  total_lead: number;
  meeting: number;
  next_meeting?: number;
  in_follow_up?: number;
  sale_closed?: number;
  status?: boolean;
  date_added?: string; // ISO or formatted date as a string
  added_by?: string;
  birthdate?: string; // ISO or formatted date as a string
  marrige_date?: string; // ISO or formatted date as a string
  id: string;
}

export const columns: ColumnDef<ColumnData>[] = [
  {
    accessorKey: "person",
    header: () => <span className="text-base font-bold">Person</span>,
    cell: ({ row }) => (
      <span className="text-base">{row.getValue("person")}</span>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            return column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];

export const data: ColumnData[] = leadManagersData;

export interface ColumnField {
  accessorKey: string;
  header: string;
  order: number;
  checked: boolean;
}

export interface TableColumnReducerAction {
  data: ColumnField;
  type: "CHECKED" | "UNCHECKED";
}

const addingTableColumnReducer = (
  fields: ColumnField[],
  action: TableColumnReducerAction
) => {
  if (!action?.data) {
    throw new Error("Action data is required.");
  }

  return fields.map((field) =>
    field.accessorKey === action.data.accessorKey
      ? { ...field, checked: action.type === "CHECKED" }
      : field
  );
};

//  type TableColumReducerAction = {
//    data: ColumnDef<ColumnData>;
//    type:
//  };

// const tableColumReducer = (
//   state : ColumnDef<ColumnData>[],
//   action: TableColumnReducerAction
// ) => {};

const readyDataForColumn: (
  fields: ColumnField[],
  isSort?: boolean,
  options?: { isAction?: boolean; isSelection?: boolean }
) => ColumnDef<ColumnData>[] = (
  fields,
  isSort = true,
  options = { isAction: true, isSelection: true }
) => {
  const columns: ColumnDef<ColumnData>[] = fields.map((field) => ({
    accessorKey: field.accessorKey,
    header: ({ column }) => {
      return isSort ? (
        <Button
          variant="ghost"
          className="text-sm font-primary hover:bg-transparent capitalize"
          onClick={() => {
            return column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          {field.header}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        <span className="text-sm"> {field.header}</span>
      );
    },
    cell: ({ row }) =>
      field.accessorKey == "job_title" ? (
        <span>Sales Manager</span>
      ) : (
        <span className="text-base">{row.getValue(field.accessorKey)}</span>
      ),
  }));

  const selectionCol: ColumnDef<ColumnData> = {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
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

  const actionCol: ColumnDef<ColumnData> = {
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

function Contracts() {
  const fields: ColumnField[] = Object.keys(leadManagersData[0])
    .filter((key) => key !== "id")
    .map((filed, i) => {
      return {
        order: i,
        accessorKey: filed,
        header: filed.split("_").join(" "),
        checked: i <= 10,
      };
    });

  const [selectedColumns, dispatch] = useReducer(
    addingTableColumnReducer,
    fields
  );

  const tableColumns = readyDataForColumn(
    selectedColumns.filter((column) => column.checked)
  );

  console.log(selectedColumns.filter((column) => column.checked));

  return (
    <div>
      <Popover>
        <PopoverTrigger>Filter</PopoverTrigger>
        <PopoverContent className="z-50">
          <ul className="bg-white  shadow-md ">
            {selectedColumns?.map((field) => (
              <li
                key={field.accessorKey}
                className="px-3 flex flex-col justify-center py-2"
              >
                <div className="flex items-center gap-2  select-none ">
                  <Checkbox
                    className=""
                    id={field.accessorKey}
                    defaultChecked={field?.checked}
                    onCheckedChange={(isChecked: boolean) => {
                      dispatch({
                        type: isChecked ? "CHECKED" : "UNCHECKED",
                        data: field,
                      });
                    }}
                  />
                  <label
                    htmlFor={field.accessorKey}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize text-accent-foreground "
                  >
                    {field.header}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
      <DataTable columns={tableColumns} data={data} />
    </div>
  );
}

export default Contracts;
