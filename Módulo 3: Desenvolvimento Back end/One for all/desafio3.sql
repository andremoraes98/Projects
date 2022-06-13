select
	u.usuario as usuario,
    count(c.cancao) as qtde_musicas_ouvidas,
    round(sum(c.duracao) / 60, 2) as total_minutos
from historico as h
inner join usuario as u
on u.usuario_id = h.usuario_id
inner join cancao as c
on c.cancao_id = h.cancao_id
group by u.usuario;