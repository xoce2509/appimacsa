--tabla auxiliar flota de vehiculo--
CREATE TABLE "vehicles_classification" (
  "clasification" TEXT PRIMARY KEY
);
CREATE TABLE "vehicle_year" (
  "year" INTEGER PRIMARY KEY
);
CREATE TABLE "tire_size" (
  "tire" TEXT PRIMARY KEY
):
CREATE TABLE "fuel_vehicle_type" (
  "fuel" TEXT PRIMARY KEY
);


--tabla de vehiculos--
CREATE TABLE "fleet_vehicle" (
	"id"	INTEGER,
	"date_purchase"	TEXT,
	"classification"	TEXT,
	"code"	TEXT,
	"year"	INTEGER,
	"make"	TEXT,
	"model"	TEXT,
	"vin_number"	TEXT,
	"color"	TEXT,
	"tire"	TEXT,
	"gps"	TEXT CHECK(gps in ('Y', 'N')),
	"fuel"	TEXT,
	"engine"	TEXT,
	"engine_power"	TEXT,
	"plate_number"	TEXT,
	"registrationdue"	TEXT,
	"propietity"	TEXT CHECK(propietity in ('O', 'L')),
	"description"	TEXT,
	"cost"	REAL,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("clasification") REFERENCES "vehicles_classification"("clasification"),
	FOREIGN KEY("year") REFERENCES "vehicle_year"("year"),
	FOREIGN KEY("tire") REFERENCES "tire_size"("tire"),
	FOREIGN KEY("fuel") REFERENCES "fuel_type"("fuel")
);