select
	c.cancao as cancao,
	count(*) as reproducoes
from historico as h
inner join cancao as c
on h.cancao_id = c.cancao_id
group by c.cancao
order by reproducoes desc, c.cancao
limit 2;