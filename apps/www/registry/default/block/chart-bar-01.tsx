"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import { ChartConfig, ChartContainer } from "@/registry/new-york/ui/chart"

export const description = "An area chart"

export const iframeHeight = "600px"

export const containerClassName =
  "w-full flex-1 flex items-center justify-center"

const data = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const config = {
  desktop: {
    label: "Desktop",
    colors: {
      light: "#3b82f6",
      dark: "#f43f5e",
    },
  },
  mobile: {
    label: "Mobile",
    colors: {
      light: "#93c5fd",
      dark: "#fda4af",
    },
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Active Users</CardTitle>
        <CardDescription>January - July 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <BarChart
            data={data}
            margin={{
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 7 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
