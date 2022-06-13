select
	cancao as nome_musica,
    (case 
		when cancao = 'Whithout My Streets' then replace (cancao, 'streets', 'Code Review')
	end) as novo_nome
from cancao
where
	cancao like '%streets'
order by nome_musica;