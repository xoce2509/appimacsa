CREATE TABLE "job_title" (
  "job" TEXT PRIMARY KEY
);
CREATE TABLE "working_rules" (
  "rules" TEXT PRIMARY KEY
);
CREATE TABLE "working_hours" (
  "hours" TEXT PRIMARY KEY
);
CREATE TABLE "payment_method" (
  "method" TEXT PRIMARY KEY
);

create table staff(
"registration_date"          TEXT,
"workercode"                 TEXT,
"name"                       TEXT,
"lastname"                   TEXT,
"identification"             TEXT,
"age"                        INTEGER CHECK(age <=17),
"address"                    TEXT,
"phone"                      INTEGER,
"cellphone"                  INTEGER,
"sex"                        TEXT, CHECK(sex in ('M', 'F')),
"job"                        TEXT,
"rules"                      TEXT,
"hours"                      TEXT,
"method"                     TEXT,
"observation"                TEXT,

);