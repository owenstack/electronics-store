import * as z from "zod";
import { type CompleteProduct, relatedProductSchema } from "./index";

export const productImageSchema = z.object({
	id: z.string(),
	url: z.string(),
	altText: z.string(),
	productId: z.string(),
});

export interface CompleteProductImage
	extends z.infer<typeof productImageSchema> {
	product: CompleteProduct;
}

/**
 * relatedProductImageSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedProductImageSchema: z.ZodSchema<CompleteProductImage> =
	z.lazy(() =>
		productImageSchema.extend({
			product: relatedProductSchema,
		}),
	);
