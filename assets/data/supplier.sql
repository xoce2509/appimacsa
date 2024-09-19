

create table machinery_supplier(
registrationdate        INTEGER,
provider_code           TEXT,
company                 TEXT,
address                 TEXT,
phone                   INTEGER,
cell_phone              INTEGER,
email                   TEXT,
website                 TEXT,
type_category           TEXT,
contact                 TEXT,
observation             TEXT,
PRIMARY KEY(
	provider_code
),

FOREIGN KEY (
        type_category
)
REFERENCES clasification (category)

);

CREATE TABLE vehicle_supplier(
registrationdate        INTEGER,
provider_code           TEXT,
company                 TEXT,
address                 TEXT,
phone                   INTEGER,
cell_phone              INTEGER,
email                   TEXT,
website                 TEXT,
vehicle_category        TEXT,
contact                 TEXT,
observation             TEXT,