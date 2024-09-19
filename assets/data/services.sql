create table horometer(
id integer primary key autoincrement,
company text null,
contact text null,
cellphone integer null,
email text null,
make text null,
yeard integer null,
series text null,
datef text null,
startime integer null,
endtime integer null,
totalhours integer null,
cost real null,
unused integer null,
maintenance integer null,
observation text null,
payment real null
);

create table rent(
id integer primary key autoincrement,
company text null,
contacto text null,
cellphone integer null,
email text null,
make text null,
model text null,
vehicleyear integer null,
series text null,
servicedate text null,
hourlyrent real null,
serviceshours integer null,
totalrent real null,
fuelquantity integer null,
fuelcost real null,
totalfuel real null,
generalpayment real null,
observation text null
);

