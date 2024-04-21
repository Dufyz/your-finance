import { currencys } from "@/data/currencys";

export default function FormatMoney({
    value,
    currency
}: {
    value: number,
    currency: string
}) {

    const currencyCC = currencys.find((c) => c.cc === currency)?.cc || "USD";

    return (
        <span>
            {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currencyCC
            }).format(value)}
        </span>
    )
}