import LeadManagersData from "@/assets/_moc_/lead_managers.json";
import DynamicDataTable from "@/components/DataTable/dynamicDataTable";
import { readyDataForColumn } from "@/components/DataTable/readyDataForTableColumn";
import { ColumnField } from "@/components/DataTable/tableTypes";
import useTable from "@/components/DataTable/useTable";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { icons } from "@/const/icons";
import {
  MainBottomContent,
  MainContent,
  MainMiddleContent,
  MainTopContent,
} from "@/layout/mainContentLayout";
import { Icon } from "@/lib/ui/Icon";

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

function Leads() {
  const fields: ColumnField[] = Object.keys(LeadManagersData[0])
    .filter((key) => key !== "id")
    .map((filed) => {
      return {
        accessorKey: filed,
        header: filed.split("_").join(" "),
      };
    });

  const data: ColumnData[] = LeadManagersData;
  const table = useTable({ columns: readyDataForColumn(fields), data: data });

  return (
    <MainContent className="h-full ">
      <MainTopContent className="  py-4">
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="px-3 py-2 border-[2px] text-base rounded-sm !border-primary bg-white hover:bg-white"
              >
                <Icon src={icons.get("column")!} alt="column" />
                Manage Column
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </MainTopContent>

      <MainMiddleContent className="max-h-full h-fit">
        <DynamicDataTable
          columns={fields}
          table={table}
          data={data}
          components={{
            cellRenderer: (prev, key) => {
              if (key === "job_title") {
                return <span>Sales Manager</span>;
              }
              return <>{prev}</>;
            },
          }}
        />
      </MainMiddleContent>

      <MainBottomContent className="">pagination</MainBottomContent>
    </MainContent>
  );
}

export default Leads;
