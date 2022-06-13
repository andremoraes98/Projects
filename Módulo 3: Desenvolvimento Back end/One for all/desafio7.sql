select
	ar.artista as 'artista',
	al.album as 'album',
    count(u.artista_id) as 'seguidores'
from album as al
inner join artista as ar
on al.artista_id = ar.artista_id
inner join usuario_seguindo_artista as u
on u.artista_id = al.artista_id
group by al.album, artista
order by seguidores desc, artista, album;