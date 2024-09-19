--tabla equipo pesado--
create table equipment(
	id integer primary key autoincrement,
	purchasedate text not null,
	code text null,
	equipmentyear integer null,
	make text null,
	model text null,
	series text null,
	gps text null,
	tiresize text null,
	description text null,
	vendor text null,
	financing text null,
	fee real null,
	payment real null,
	warranty text null,
	states text null,
	cost real null,
	financingamount real null,
	total real null
);
create table vehicles(
	id integer primary key autoincrement,
	purchasedate text not null,
	code text null,
	
	yeard integer null,
	make text null,
	model text null,
	
	vin text null,
	color text null,
	tire text null,
	
	gps text null,
	plateno text not null,
	registrationdue text null,
	
	ownedlease text null,
	description text null,
	cost real null
);
create table tools(
	id integer primary key autoincrement,
	purchasedate text null,
	code text null,
	yeard integer null,
	make text null,
	model text null,
	series text null,
	gps text null,
	description text null,
	vendor text null,
	jobsite text null,
	warranty text null,
	price real null
);
