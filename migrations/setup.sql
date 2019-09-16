CREATE TABLE ap.product
(
	"id" serial,
	"name" text NOT NULL,
	"asin" text UNIQUE NOT NULL,
	"categoryGroup" text,
	"subCategory" text,
	"rank" integer,
	"length" numeric,
	"width" numeric,
	"height" numeric,
    "createdAt" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
	CONSTRAINT "PK_product" PRIMARY KEY ("id")
);

COMMENT ON COLUMN ap.product.height
    IS 'measured in  inches';