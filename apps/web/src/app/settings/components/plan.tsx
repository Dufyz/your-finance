import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  IconCheck,
  IconRosetteDiscountCheck,
  IconX
} from "@tabler/icons-react";
import { features, plansFeatures } from "../data/plans";

export default function Plan() {
  const renderFeatureList = (
    featuresList:
      | typeof plansFeatures.pro.features
      | typeof plansFeatures.free.features,
    planType: "pro" | "free"
  ) => (
    <ul className="flex h-full w-full flex-1 flex-col items-start justify-center gap-2">
      {Object.keys(featuresList).map((feature) => {
        const isChecked =
          plansFeatures[planType as keyof typeof plansFeatures].features[
            feature as keyof (typeof plansFeatures)[typeof planType]["features"]
          ];

        return (
          <li key={feature} className="flex items-center gap-2">
            {isChecked ? <IconCheck /> : <IconX />}
            <span
              className={`text-sm ${!isChecked && "line-through"} text-muted-foreground`}
            >
              {features[feature as keyof typeof features]}
            </span>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="flex flex-col flex-wrap items-stretch justify-center gap-6 md:flex-row">
      <Card className="flex-1 transform shadow-lg transition duration-500 hover:scale-105">
        <CardHeader className="m-0 flex flex-col items-start justify-center gap-2">
          <CardTitle className="flex w-full items-center justify-between gap-4">
            <div>
              <h1>Pro</h1>
            </div>
            <div className="flex items-center justify-center gap-2">
              <IconRosetteDiscountCheck color="#15803d" />
              <span className="text-base text-green-700">Current plan</span>
            </div>
          </CardTitle>
          <CardDescription>
            For those who want to have full control of their finances and have
            access to all features.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col items-start justify-center gap-6">
          <div className="">
            <span className="text-4xl font-semibold text-green-700">$9.99</span>
            <span className="text-xl text-muted-foreground">/month</span>
          </div>
          {renderFeatureList(plansFeatures.pro.features, "pro")}
        </CardContent>
        <CardFooter>
          <Button disabled>Choose PRO</Button>
        </CardFooter>
      </Card>

      <Card className="flex-1 transform shadow-lg transition duration-500 hover:scale-105">
        <CardHeader className="m-0 flex flex-col items-start justify-center gap-2">
          <CardTitle>Free</CardTitle>
          <CardDescription>
            For those who want to start managing their finances and have a
            better control.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-start justify-center gap-6">
          <div className="">
            <span className="text-4xl font-semibold text-green-700">$0.00</span>
            <span className="text-xl text-gray-500">/month</span>
          </div>
          {renderFeatureList(plansFeatures.free.features, "free")}
        </CardContent>
        <CardFooter>
          <Button>Choose FREE</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
