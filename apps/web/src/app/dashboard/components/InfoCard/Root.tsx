import { Card } from "@/components/ui/card"
import { ReactNode } from "react"

export default function Root({children}: {
    children: ReactNode
}) {
    return (
        <Card>
            {children}
    </Card>
    )
}