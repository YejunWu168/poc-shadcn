import { Button } from "@/components/ui/button";
import { ComboboxDemo } from "@/components/dropdown";
import { DatePickerDemo } from "@/components/datepicker";
import { BarChart } from "@/components/bar-chart";
import { X } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <div className="absolute right-4">
        <ModeToggle />
      </div>
      <h1 className="text-4xl font-semibold mb-10">POC Shadcn</h1>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3">
        <Card>
          <CardHeader>Button (default)</CardHeader>
          <CardContent>
            <Button>Button</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Button (outline)</CardHeader>
          <CardContent>
            <Button variant="outline">Button</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Button (Icon)</CardHeader>
          <CardContent>
            <Button>
              <X />
              Button
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Dropdown</CardHeader>
          <CardContent>
            <ComboboxDemo />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Dropdown (disabled</CardHeader>
          <CardContent>
            <ComboboxDemo disabled />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>DatePicker</CardHeader>
          <CardContent>
            <DatePickerDemo />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Bar Chart</CardHeader>
          <BarChart />
        </Card>
      </div>
    </main>
  );
}
