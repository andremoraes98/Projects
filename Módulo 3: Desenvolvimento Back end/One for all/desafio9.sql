select
    count(*) as 'quantidade_musicas_no_historico'
from historico as h
inner join usuario as u
on h.usuario_id = u.usuario_id and u.usuario = 'Bill'
group by h.usuario_id;