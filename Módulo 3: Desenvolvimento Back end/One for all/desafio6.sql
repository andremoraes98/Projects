select
	min(p.valor) as 'faturamento_minimo',
    max(p.valor) as 'faturamento_maximo',
    round(avg(p.valor), 2) as 'faturamento_medio',
    round(sum(p.valor), 2) as 'faturamento_total'
from usuario as u
inner join plano as p
on u.plano_id = p.plano_id;