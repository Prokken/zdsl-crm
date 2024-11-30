"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 186, mobile: 80, sales: 50 },
  { month: "February", desktop: 305, mobile: 200, sales: 20 },
  { month: "March", desktop: 237, mobile: 120, sales: 30 },
  { month: "April", desktop: 73, mobile: 190, sales: 60 },
  { month: "May", desktop: 209, mobile: 130, sales: 70 },
  { month: "June", desktop: 214, mobile: 140, sales: 80 },
  { month: "July", desktop: 214, mobile: 140, sales: 90 },
  { month: "August", desktop: 214, mobile: 140, sales: 60 },
  { month: "Septembar", desktop: 214, mobile: 140, sales: 30 },
  { month: "October", desktop: 214, mobile: 140, sales: 50 },
  { month: "November", desktop: 214, mobile: 140, sales: 60 },
  { month: "December", desktop: 214, mobile: 140, sales: 120 },
];

const chartConfig = {
  desktop: {
    label: "Leads",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Meeting",
    color: "hsl(var(--chart-2))",
  },
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function SalesConversationBarChart() {
  return (
    <Card className="h-fit border-0 rounded-none bg-transparent !p-0 !m-0">
      <CardContent className="p-0">
        <ChartContainer
          config={chartConfig}
          className="md:h-[350px] lg:h-[450px] w-full !px-0 !m-0"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid horizontal={true} color="#dadada" />
            <XAxis
              dataKey="month"
              tickLine={true}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 12)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="#017BFE" radius={8} />
            <Bar dataKey="mobile" fill="#FFD500" radius={8} />
            <Bar dataKey="sales" fill="#00BF7A" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
