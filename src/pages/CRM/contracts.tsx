import LeadManagersData from "@/assets/_moc_/lead_managers.json";
import Action from "@/components/actions/action";
import DynamicDataTable from "@/components/DataTable/dynamicDataTable";
import { readyDataForColumn } from "@/components/DataTable/readyDataForTableColumn";
import { ColumnField } from "@/components/DataTable/tableTypes";
import useTable from "@/components/DataTable/useTable";
import Pagination from "@/components/pagination/pagination";
import SecondarySearch from "@/components/search/secondarySearch";
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

function Contracts() {
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
      <MainTopContent className=" flex gap-4 w-full    py-5">
        <div className="flex w-full justify-end gap-6 items-center">
          <SecondarySearch />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="px-3 py-2 hover:border-[2px] text-base rounded-sm hover:!border-primary bg-white hover:bg-white"
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
          <Button
            variant="outline"
            className="px-3 py-2 hover:border-[2px] text-base rounded-sm hover:!border-primary bg-white hover:bg-white"
          >
            <Icon src={icons.get("filter")!} alt="column" />
            Filter
          </Button>
          <Action />
        </div>
      </MainTopContent>

      <MainMiddleContent className="h-[calc(100vh-250px)] w-full max-w-full ">
        <DynamicDataTable
          columns={fields}
          table={table}
          data={data}
          className="h-[calc(100vh-250px)] max-w-full  "
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

      <MainBottomContent className="flex items-center">
        <Pagination />
      </MainBottomContent>
    </MainContent>
  );
}

export default Contracts;
