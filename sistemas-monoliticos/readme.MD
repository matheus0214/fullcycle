# Sistemas Monolíticos

## O que é uma aplicação monolítica

- Aplicaçoes "tradicionais"
- "Tudo em um"
- Unidade de deployment

## Polêmica por trás das aplicações monolíticas

- Aplicações da década passada
- Ultrapassada
- Não escalam
- Impedem o crescimento do negócio
- Alto acoplamento

## Quando utilizar monolitos pode ser uma boa

- Novos projetos onde o modelo de negócio não está claro
- Instabilidade no core do negócio
- Evitar complexidade no processo de deploy
- Evitar complexidade na operação

## Tipos de sistemas monolíticos

- "Single process"
- Monolitos distribuídos
- Black blox

### Single process

- Alto acoplamento
- Modular
- Modular com bancos de dados segregados

#### Vamos pensa em logo prazo com "User"

- User
  - Dados pessoais
  - Endereços
  - Cartões de crédito
  - Tickets de suporte
  - Compras
  - Carrinho abandonado
  - Devoluções
  - Financiamento
  - Indicações

##### Principais problemas com essa abordagem

- Não existe contexto
- Entidades que se relacionam
- Não há divisão. Tudo faz parte de tudo. Tudo grudado em tudo.
- Efeitos colaterais indesejados

## DDD é um ponto de partida

### Sistemas monolíticos modulares

- Módulos quebrados em "bounded contexts"
- Conversam através de contratos de facades
- Entidades pode sem "duplicadas" tendo apenas os atributos necessários
- Equipes especializadas por módulos
- Alta coesão: O que muda junto, permanece junto

- Um único deploy
- Única operação
- Observabilidade simplificada
- Sistemas se comunicando internamente
- Única linguagem. Menos governança
