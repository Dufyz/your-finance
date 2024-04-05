import { Badge } from "@/components/ui/badge"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TabsContent } from "@/components/ui/tabs"
import DateRangePicker from "./date-range-picker"

export default function Custom() {
    return (
        <TabsContent value="custom">
                <Card>
                  <CardHeader className="px-7 w-full flex gap-4 flex-wrap items-start justify-between flex-row">
                   <div className="flex gap-2 flex-col">
                   <CardTitle>History</CardTitle>
                    <CardDescription>
                      Here you can see all the transactions you made between the selected dates.
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
                          <TableHead className="hidden sm:table-cell">
                            Category
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Type
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
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
                          <TableCell className="hidden sm:table-cell">
                            Food
                          </TableCell>
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
    )
}