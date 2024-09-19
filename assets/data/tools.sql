CREATE TABLE "tools_classification" (
  "classification" TEXT PRIMARY KEY
);
CREATE TABLE "tools_year" (
  "year" INTEGER PRIMARY KEY
);
CREATE TABLE "combustion_type" (
  "combustion" TEXT PRIMARY KEY
):
CREATE TABLE "combustion_detail" (
  "detail" TEXT PRIMARY KEY
);

CREATE TABLE "tools" (
	"id"	INTEGER,
	"purchase_date"	TEXT,
	"classification"	TEXT,
	"year" INTEGER,
	"code"	TEXT,
	"make"	TEXT,
	"model"	TEXT,
	"series"	TEXT,
	"gps"	TEXT CHECK(gps in ('Y', 'N')),
	"combustion"	TEXT,
	"detail"	TEXT,
	"description"	TEXT,
	"price"	REAL,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("combustion_detail") REFERENCES "",
	FOREIGN KEY("combustion_type") REFERENCES "auxiliary_tools"("combustiontype"),
	FOREIGN KEY("make_tool") REFERENCES "auxiliary_tools"("maketool"),
	FOREIGN KEY("model_tool") REFERENCES "auxiliary_tools"("modeltool"),
	FOREIGN KEY("tool_category") REFERENCES "clasification"("toolscategory")
)