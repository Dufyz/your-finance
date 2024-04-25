import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { IconTargetArrow } from "@tabler/icons-react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Goals() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Goals</CardTitle>
        <Button asChild size="sm" className="ml-auto gap-1" disabled>
          <Link href="#">
            View All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="grid gap-8">
        <div className="flex items-center gap-4">
          <IconTargetArrow size={24} />
          <div className="grid  w-full gap-1">
            <p className="text-sm font-medium leading-none">
              International travel
            </p>
            <Progress value={10} />
          </div>
          <div className="ml-auto font-medium">$3,000.00</div>
        </div>
        <div className="flex items-center gap-4">
          <IconTargetArrow size={24} />
          <div className="grid  w-full gap-1">
            <p className="text-sm font-medium leading-none">
              International travel
            </p>
            <Progress value={50} />
          </div>
          <div className="ml-auto font-medium">$3,000.00</div>
        </div>
        <div className="flex items-center gap-4">
          <IconTargetArrow size={24} />
          <div className="grid  w-full gap-1">
            <p className="text-sm font-medium leading-none">
              International travel
            </p>
            <Progress value={83} />
          </div>
          <div className="ml-auto font-medium">$3,000.00</div>
        </div>
        <div className="flex items-center gap-4">
          <IconTargetArrow size={24} />
          <div className="grid  w-full gap-1">
            <p className="text-sm font-medium leading-none">
              International travel
            </p>
            <Progress value={25} />
          </div>
          <div className="ml-auto font-medium">$3,000.00</div>
        </div>
      </CardContent>
    </Card>
  );
}
