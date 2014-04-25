-- User
create table user (
	id int auto_increment primary Key,
	user_login_id varchar(100) unique,
	as_id text,
	password text,
	json text,
	create_at timestamp default now()
);
alter table user add disp_name text after password;

-- Item
create table item (
	id int auto_increment primary Key,
	json text,
	create_at timestamp default now()
);
alter table item add user_id int after id;

-- User Daily Action
create table user_daily_action (
	id int auto_increment primary key,
	yyyymmdd int,
	user_id int,
	json text,
	create_at timestamp default now()
);
