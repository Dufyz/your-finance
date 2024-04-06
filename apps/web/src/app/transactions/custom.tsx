import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import DateRangePicker from "./components/date-range-picker";

export default function Custom() {
  return (
    <TabsContent value="custom">
      <Card>
        <CardHeader className="flex w-full flex-row flex-wrap items-start justify-between gap-4 px-7">
          <div className="flex flex-col gap-[6px]">
            <CardTitle>History</CardTitle>
            <CardDescription>
              Here you can see all the transactions you made between the
              selected dates.
            </CardDescription>
          </div>
          <div>
            <DateRangePicker />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead className="hidden sm:table-cell">Category</TableHead>
                <TableHead className="hidden sm:table-cell">Type</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Restaurante Universitario</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    Itaú Unibanco
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">Food</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    Received
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  2023-06-23
                </TableCell>
                <TableCell className="text-right">$5.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
