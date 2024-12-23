"use client";

import {
  Bar,
  BarProps,
  CartesianGrid,
  DefaultLegendContentProps,
  Legend,
  BarChart as RechartBarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./ui/chart";
import Link from "next/link";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--secondary))",
  },
} satisfies ChartConfig;

// Custom legend
function RenderLegend(props: DefaultLegendContentProps) {
  const { payload } = props;

  if (!payload) return null;

  return (
    <ul>
      {payload.map((entry, index) => (
        <li key={`item-${index}`}>{entry.value}</li>
      ))}
    </ul>
  );
}

// Custom bar with nextjs/link
function CustomBarShape(props: BarProps) {
  const { fill, x, y, width, height, dataKey } = props;

  return (
    <Link href={`/${dataKey}`}>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        stroke="blue"
      />
    </Link>
  );
}

export function BarChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <RechartBarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        {/* <Bar
          dataKey="mobile"
          fill="var(--color-mobile)"
          radius={4}
          shape={<CustomBarShape dataKey="mobile" />}
        /> */}

        {/* <Tooltip cursor={false} /> */}
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        {/* <Legend content={RenderLegend} /> */}
        <ChartLegend content={<ChartLegendContent />} />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis onClick={(e) => console.log(e)} dataKey="month" />
        <YAxis />
      </RechartBarChart>
    </ChartContainer>
  );
}
