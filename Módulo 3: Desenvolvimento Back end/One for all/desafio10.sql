select
    c.cancao as 'nome',
    count(*) as 'reproducoes'
from usuario as u
inner join historico as h
on u.usuario_id = h.usuario_id and u.plano_id in (1, 4)
inner join cancao as c
on h.cancao_id = c.cancao_id
group by nome
order by nome;