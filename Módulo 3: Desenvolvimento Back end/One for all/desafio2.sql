select
    (
		select
			count(c.cancao)
		from cancao as c
    ) as cancoes,
    count(ar.artista) as artistas,
    (
		select
			count(al.album)
		from album as al
    ) as albuns
from artista as ar;