# Propondo usar URI para indicar endereço físico

### schema

Localização em termos galáticos. Poderiamos usar world, para indicar é um endereço no nosso planeta Terra.

### userinfo

Aqui terial por default publi. Caso seja um endereço fora do domínio público, seria necessário credenciais para o acesso.

### port

Usariamos um número padrão de porta para identificar que estamos acessando ao endereço físico. Vamos escolher a porta de número 42 pra exemplificar.

### host

O dominio pertenceria ao país, ou territórios independentes. Cabendo a ele gerir e manusear os próximos itens: path, query e fragment.

### path

Nesse trecho que cada host determina a forma que será o caminho. Podendo conter então no caso do nosso país, estado/cidade/cep/número.

### query

Existem vários tipos de construções, dentre elas: casas, shoppings, praças, edifícios públicos e uma infinidade. Query identificaria qual tipo.

### fragment

Poderíamos associar ao que conhecemos hoje em dia como complemento. Informações adicionar para identificar um local que pertence ao mesmo endereço.

## Endereços propostos e sua respectiva URI:

### Rua Paul Bouthilier 266, Mangabeiras, Belo Horizonte, MG - Brasil, CEP 30310-10

world://public.brasil.adress:42/MG/BH/mangabeiras/3031010-266#servicos-informatica

### Infinite Loop, Cupertino, CA 95014, USA

world://public.usa.adress:42/CA/cupertino/95014-infinite-loop#services-tech

### 1-7-1 Konan. Minato-ku, Tokyo, 108-0075 Japan

world://public.nihon.adress:42/tokyo/minatoku/1080075-171#tekunoroji