--heavy equipment auxiliary table--

CREATE TABLE "machinery_classification"(
 "classification" TEXT PRIMARY KEY
);
CREATE TABLE "equipment_year" (
 "year" INTEGER PRIMARY KEY
);
CREATE TABLE "tire_system" (
 "tire" TEXT PRIMARY KEY
);
CREATE TABLE "fuel_type" (
 "fuel" TEXT PRIMARY KEY
);

-- heavy equipment table --
CREATE TABLE "heavy_equipment" (
	"id"	INTEGER,
	"purchase_date"	TEXT,
	"code"	TEXT,
	"classification"	TEXT,
	"year"	TEXT,
	"make"	TEXT,
	"model"	TEXT,
	"series"	TEXT,
	"gps"	TEXT CHECK(gps in ('Y', 'N')),
	"tire"	TEXT,
	"detail"	TEXT,
	"engine"	TEXT,
	"engine_power"	TEXT,
	"type_fuel"	TEXT,
	"description"	TEXT,
	"cost"	REAL,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("classification") REFERENCES "machinery_classification"("classification"),
	FOREIGN KEY("year") REFERENCES "equipment_year"("year"),
	FOREIGN KEY("tire") REFERENCES "tire_system"("tire"),
	FOREIGN KEY("fuel") REFERENCES "fuel_type"("fuel")
);