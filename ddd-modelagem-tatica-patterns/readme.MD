# DDD: Modelagem Tática e Patterns

## Elementos táticos

Quando estamos falando sobre DDD e precisamos olhar mais a fundo um bounded context.
Precisamos ser capazes de modelarmos de forma mais assertiva os seus principais componentes, comportamentos e individualidades, bem como suas relações.

## Entidades

"Uma entidade é algo único que é capaz de ser alterado de forma contínua durante um longo período de tempo."

"Uma entidade é algo que possui uma continuidade em seu ciclo de vida e pode ser distinguida independente dos atributos que são importantes para a aplicação do usuário. Pode ser uma pessoa, cidade, carro, um ticket de loteria ou uma transação bancário"

Entidade = IDENTIDADE

## Value Object

"Quando você se preocupa apenas com os atributos de um elemento de um model, classifique isso como um Value Object"

"Trate o Value Object como imutável."

## Agregados

"Um agregado é um conjunto de objetos associados que tratamos como uma unidade para propósito de mudança de dados"

## Domain Services

A Service in the domain is a stateless operation that fulfills a domain-specific task. Often the best indication that you should create a Service in the domain model is when the operation you need to perform feels out of place as a method on an Aggregate (10) or a Value Object.

- Uma entidade pode realizar uma ação que vai afetar todas as entidades?
- Como realizar uma operação em lote?
- Como calcular algo cujas as informações constam em mais de uma entidade?

### Cuidados

- Quando houver muitos Domain Services em seu projeto, TALVEZ, isso pode indicar que seus agregados estão anêmicos.
- Domain Services são Stateless
