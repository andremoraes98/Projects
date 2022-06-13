select
	u.usuario,
    if(year(max(h.data)) >= 2021, 'Usuário ativo', 'Usuário inativo') as 'condicao_usuario'
from  historico as h
inner join usuario as u
on u.usuario_id = h.usuario_id
group by u.usuario;