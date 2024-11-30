import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartLabel } from "@/pages/CRM/dashboard";

// Chart configuration
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  facebook: {
    label: "Facebook",
    color: "#017BFE",
  },
  google: {
    label: "Google",
    color: "#FFD500",
  },
  youtube: {
    label: "YouTube",
    color: "#FE408E",
  },
  linkedin: {
    label: "Linkedin",
    color: "#0266C8",
  },
  referral: {
    label: "Referral",
    color: "#00BF7A",
  },
} satisfies ChartConfig;

// Chart data with colors assigned based on chartConfig
const chartData = [
  { source: "Facebook", sales: 275 },
  { source: "Google", sales: 200 },
  { source: "YouTube", sales: 287 },
  { source: "Linkedin", sales: 173 },
  { source: "Referral", sales: 190 },
].map((data) => ({
  ...data,
  fill: chartConfig[data.source.toLowerCase()].color, // Assign colors dynamically
}));

export function SalesPieChart() {
  // Calculate the total number of sales
  const totalSales = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.sales, 0);
  }, []);

  return (
    <div className="flex items-center  gap-6">
      <Card className="rounded-none border-none bg-transparent h-full w-[50%] !px-0 !m-0">
        <CardContent className=" pb-0 !px-0 !m-0">
          <ChartContainer
            config={chartConfig}
            className=" aspect-square max-h-[250px] !px-0 !m-0"
          >
            <PieChart className="!px-0 !m-0">
              {/* Add tooltips */}
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              {/* Configure Pie chart */}
              <Pie
                data={chartData}
                dataKey="sales"
                nameKey="source"
                innerRadius={60}
                outerRadius={100}
                strokeWidth={5}
              >
                {/* Add a custom center label */}
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalSales.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground text-sm"
                          >
                            Sales
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4">
        <ChartLabel className="bg-[#017BFE]" text="Facebook" />
        <ChartLabel className="bg-[#FFD500]" text="Google" />
        <ChartLabel className="bg-[#00BF7A]" text="Youtube" />
        <ChartLabel className="bg-[#017BFE]" text="Linkedin" />
        <ChartLabel className="bg-[#FFD500]" text="Referral" />
      </div>
    </div>
  );
}
