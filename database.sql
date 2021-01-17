CREATE TABLE "gallery" (
	id SERIAL PRIMARY KEY,
	path VARCHAR,
	description VARCHAR(200),
	likes INT DEFAULT 0
);

INSERT INTO "gallery" ("path", "description")
VALUES ('images/Prof_Pic.jpg', 'At a cabin on a lake at Glacier National Park'), ('images/With_Friends.jpg', 'My best friends and I in Los Angeles'), ('images/Back_in_the_90s.jpg', 'Essence of the 90s - my siblings and I as kids'), ('images/Sis_Got_Married.jpg', 'My siblings and I at my sisters wedding'), ('images/With_Dad_and_Baby.jpg', 'My dad and I with my nephew'), ('images/The_Ocean.png', 'Photo of me thinking about the ocean.'), ('images/Skydiving.png', 'My first time skydiving, highly recommend'), ('images/True_Self.png', 'What I would look like if x-rayed'), ('images/With_Gparents.jpg', 'What a goof! With my grandparents'), ('images/With_the_Fam.jpg', 'Up north near Hackensack with my family');
