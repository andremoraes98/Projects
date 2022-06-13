select
	ar.artista as 'artista',
	al.album as 'album'
from album as al
inner join artista as ar
on al.artista_id = ar.artista_id
and ar.artista = 'Walter Phoenix'
order by album;