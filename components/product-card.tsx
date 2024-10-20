import type { PartialProduct } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function ProductCard({ p }: { p: PartialProduct }) {
	return (
		<Card className="overflow-hidden">
			<Link href={`/product/${p.name}`} className="block">
				<div className="relative h-48">
					<Image
						src={p.images[0].url}
						fill
						alt={p.name}
						sizes="100vw"
						quality={100}
						className="object-cover hover:scale-110 transition duration-300"
					/>
				</div>
				<CardHeader>
					<div className="flex justify-between items-start">
						<div>
							<CardTitle className="text-lg">{p.name}</CardTitle>
							<CardDescription className="mt-1">
								{new Intl.NumberFormat("en-NG", {
									style: "currency",
									currency: "NGN",
								}).format(Number(p.basePrice) + 0.1 * Number(p.basePrice))}{" "}
								per carton
								{/** added #50 as requested */}
							</CardDescription>
						</div>
						<h3 className="font-semibold text-sm px-2 py-1 rounded">
							{p.category.name}
						</h3>
					</div>
				</CardHeader>
			</Link>
		</Card>
	);
}