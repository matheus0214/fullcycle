# API Gateway

## API

- É um conjunto de operações bem definidas com objetivo de oferecer aos seus consumidores um serviço, produto ou uma integração.
- Na prática o consumidor de uma API utiliza o serviço sem a necessidade de entender os detalhes de implementação, essa é uma característica que deve ser preservada.

## APIs Rest

- Durante esse módulo vamos utilizar o modelo arquitetura REST, sugerido por Roy Fielding.
- A implementação mais comum encontrada no mercado é utilização do modelo arquitetura REST + JSON para tráfego de dados.

## API Gateway Pattern

- Em um modelo que implementa um padrão de arquitetura de microserviços, como os cliente vão poder identificar o serviço que contém as informações que ele necessita?
- Em geral a granularidade das informações do microserviço é diferente da qual gostaríamos de expor para o cliente.

## O que é um API Gateway?

- É uma ferramenta de gerenciamento, geralmente adicionada entre o cliente e um grupo de sistemas de um determinado contexto, atuando como ponto único de entrada das APIs.

## Funcionalidades de um API Gateway

- Geralmente o API Gateway atua na camada de rede, provendo funcionalidades ortogonais, as que não necessariamente são responsabilidades das aplicações.

### Quais são essas funcionalidades?

- Controle de abuso (rate limiting)
- Autenticação/Autorização de maneira padronizada
- Controle de logs
- Gerenciamento de APIs (routing)
- Metricas padronizadas (ops team)
- Tracing distribuido
