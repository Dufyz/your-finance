import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const plansFeatures = {
  pro: {
features : {
  unlimitedBudgets: true,
  unlimitedCategories: true,
  unlimitedTransactions: true,
  unlimitedGoals: true,
  unlimitedAccounts: true,
  unlimitedReports: true,
  unlimitedAttachments: true,
  prioritySupport: true,
  customCategories: true,
  customGoals: true,
  customReports: true,
  customAttachments: true,
},
  },
  free: {
features: {
  unlimitedBudgets: false,
  unlimitedCategories: false,
  unlimitedTransactions: false,
  unlimitedGoals: false,
  unlimitedAccounts: false,
  unlimitedReports: false,
  unlimitedAttachments: false,
  prioritySupport: false,
  customCategories: false,
  customGoals: false,
  customReports: false,
  customAttachments: false,
  },
  },
}

const features = {
  unlimitedBudgets: "Unlimited Budgets",
  unlimitedCategories: "Unlimited Categories",
  unlimitedTransactions: "Unlimited Transactions",
  unlimitedGoals: "Unlimited Goals",
  unlimitedAccounts: "Unlimited Accounts",
  unlimitedReports: "Unlimited Reports",
  unlimitedAttachments: "Unlimited Attachments",
  prioritySupport: "Priority Support",
  customCategories: "Custom Categories",
  customGoals: "Custom Goals",
  customReports: "Custom Reports",
  customAttachments: "Custom Attachments",
}

export default async function Plan() {
  return (
    <div className="grid gap-6">
    <Card>
      <CardHeader>
        <CardTitle>Pro</CardTitle>
        <CardDescription>
          The pro plan is for thos who want to take their finances to the next level.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="w-full flex flex-col gap-2 items-start justify-center">
          <li className="flex items-center justify-center gap-2">
            <Checkbox checked/>
            <span className="text-sm text-gray-700">
              Unlimited Budgets
            </span>
          </li>
          
        </ul>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button>Save</Button>
      </CardFooter>
    </Card>
    
  </div>
  )
}