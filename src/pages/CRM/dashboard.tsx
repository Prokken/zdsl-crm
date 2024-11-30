import { SalesConversationBarChart } from "@/components/charts/salesConversationBarChart";
import { SalesPieChart } from "@/components/charts/salesPieChart";
import FilterByDate from "@/components/filterByDate/filterByDate";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
function Dashboard() {
  return (
    <div className="flex flex-col  h-full">
      <div>
        <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-3 md:gap-0 py-4">
          <h1>
            Hello, Md Ashik <span className="!text-black">&#x1F44F; </span>
          </h1>

          <FilterByDate />
        </div>
        <div className="grid xl:grid-cols-5 md:grid-cols-2 xl:gap-0 gap-3 xl:border-y xl:shadow-sm">
          <Card className=" xl:rounded-none border xl:border-0 xl:border-r ">
            <CardHeader className="py-3">Total Contracts</CardHeader>
            <CardContent className="py-3">
              <p>
                <span className="text-2xl font-bold  ">2594</span>
                <Badge className="bg-[#0f9e6a33] text-[#0f9e6a] font-normal text-[12px] ml-1 px-1 py-0">
                  +2%
                </Badge>
              </p>
            </CardContent>
            <CardFooter className="justify-between py-3">
              <p className="font-medium">
                +290 <span className="text-secondary-foreground">Leads</span>
              </p>

              <Button className="bg-primary text-white hover:bg-primary-hover-background hover:text-primary-foreground shadow-sm px-3">
                View <ArrowRight />
              </Button>
            </CardFooter>
          </Card>

          {/* card 2  */}
          <Card className=" xl:rounded-none border xl:border-0 xl:border-r ">
            <CardHeader className="py-3">Total Leads</CardHeader>
            <CardContent className="py-3">
              <p>
                <span className="text-2xl font-bold  ">2250</span>
                <Badge className="bg-[#fe408f67] text-[#FE408E] font-normal text-[12px] ml-1 px-1 py-0">
                  +2%
                </Badge>
              </p>
            </CardContent>
            <CardFooter className="justify-between py-3">
              <p className="font-medium">
                +00 <span className="text-secondary-foreground">Leads</span>
              </p>

              <Button className="bg-primary text-white hover:bg-primary-hover-background hover:text-primary-foreground shadow-sm px-3">
                View <ArrowRight />
              </Button>
            </CardFooter>
          </Card>
          {/* card 3  */}
          <Card className=" xl:rounded-none border xl:border-0 xl:border-r ">
            <CardHeader className="py-3">New Leads</CardHeader>
            <CardContent className="py-3">
              <p>
                <span className="text-2xl font-bold  ">650</span>
                <Badge className="bg-[#0f9e6a33] text-[#0f9e6a] font-normal text-[12px] ml-1 px-1 py-0">
                  +2%
                </Badge>
              </p>
            </CardContent>
            <CardFooter className="justify-between py-3">
              <p className="font-medium">
                +00 <span className="text-secondary-foreground">Leads</span>
              </p>

              <Button className="bg-primary text-white hover:bg-primary-hover-background hover:text-primary-foreground shadow-sm px-3">
                View <ArrowRight />
              </Button>
            </CardFooter>
          </Card>
          {/* card 4  */}
          <Card className=" xl:rounded-none border xl:border-0 xl:border-r ">
            <CardHeader className="py-3">In Pipeline</CardHeader>
            <CardContent className="py-3">
              <p>
                <span className="text-2xl font-bold  ">650</span>
                <Badge className="bg-[#e9ab1a38] text-[#E9AA1A] font-normal text-[12px] ml-1 px-1 py-0">
                  +2%
                </Badge>
              </p>
            </CardContent>
            <CardFooter className="justify-between py-3">
              <p className="font-medium">
                +00 <span className="text-secondary-foreground">Leads</span>
              </p>

              <Button className="bg-primary text-white hover:bg-primary-hover-background hover:text-primary-foreground shadow-sm px-3">
                View <ArrowRight />
              </Button>
            </CardFooter>
          </Card>
          {/* card 4  */}
          <Card className="border-0 rounded-none">
            <CardHeader className="py-3">Meeting &#128197;</CardHeader>
            <CardContent className="py-3">
              <p>
                <span className="text-2xl font-bold  ">650</span>
                <Badge className="bg-[#0f9e6a33] text-[#0f9e6a] font-normal text-[12px] ml-1 px-1 py-0">
                  +2%
                </Badge>
              </p>
            </CardContent>
            <CardFooter className="justify-between py-3">
              <p className="font-medium">
                +00 <span className="text-secondary-foreground">Leads</span>
              </p>

              <Button className="bg-primary text-white hover:bg-primary-hover-background hover:text-primary-foreground shadow-sm px-3">
                View <ArrowRight />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="flex-1  w-full flex gap-[120px] h-full mt-8">
        <div className="w-[60%]  ">
          <div className="flex justify-between">
            <h5>Sales Conversations</h5>
            <div className="flex gap-5 items-center ">
              <ChartLabel className="bg-[#017BFE]" text="Leads" />
              <ChartLabel className="bg-[#FFD500]" text="Meeting" />
              <ChartLabel className="bg-[#00BF7A]" text="Sales" />
            </div>
            <div>
              <FilterByDate />
            </div>
          </div>
          <SalesConversationBarChart />
        </div>
        {/* pie chart  */}
        <div className="w-[40%] h-full ">
          <div className="flex justify-between">
            <div className="mb-4">
              <h5 className="font-semibold ">Sales</h5>
              <span>Leads Sources</span>
            </div>
            <div>
              <FilterByDate />
            </div>
          </div>
          <SalesPieChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

export const ChartLabel = ({
  className,
  text,
}: {
  className?: string;
  text: string;
}) => {
  return (
    <div className="flex gap-1 justify-start items-center">
      <div
        className={cn(
          `w-4 h-4 rounded-full block  border-[3px] border-white shadow-xl `,
          className
        )}
      ></div>
      <span className="block">{text}</span>
    </div>
  );
};
