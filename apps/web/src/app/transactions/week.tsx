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
import ToolsTransaction from "./components/tools-transaction"

export default function Week() {

    return (
        <TabsContent value="week">
                <Card>
                  <CardHeader className="px-7">
                    <CardTitle>History</CardTitle>
                    <CardDescription>
                      Here you can see all the transactions you made this week.
                    </CardDescription>
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
                          <TableHead className="hidden md:table-cell">Amount</TableHead>
                          <TableHead className="text-right">Edit</TableHead>
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
                              Revenue
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="hidden md:table-cell">$5.00</TableCell>
                          <TableCell className="h-[72px] flex items-center justify-end">
                            <ToolsTransaction />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
    )
}