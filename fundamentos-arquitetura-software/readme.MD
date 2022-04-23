# Arquitetura de software

## Tipos de arquitetura

- Software
- Solução
- Tecnológica
- Corporativa

### Arquitetura Tecnológica

- Especialidade em tecnologias específicas de mercado
- Geração de valor baseado em especialidades
- Diversidade de profisionais especialistas
  - Arquiteto Elastic
  - Arquiteto Java
  - SQL Server
  - Oracle
  - SAP

### Arquitetura Corporativa

- Impacta estrategicamente a organização como um todo
- Avaliação de custos
- Avaliação de possíveis novas tecnologias
- Padronização de tecnologias
- Planejamento de grandes implantações
  - Sistemas "core"
  - Migrações

### Arquitetura de Soluções

- Fica entre a área de negócios e software
- Trasformar requisitos de negócio em soluções de software
- Desenhos arquiteturais da solução de um software para reproduzir como ele irá funcionar
  - C4
  - UML
  - BPMN
- Analisa os impactos comerciais em relação a uma escolha tecnológica
- Pode participar de processos comercial de pré-venda e venda
- Analisa os impactos dos custos para o negócio

### Arquitetura de Software

- É uma "disciplina" de engenharia de software
- Diretamente ligada ao processo de desenvolvimento de software
- Afeta diretamente na estrutura organizacional da empresa
  - Formação dos times
  - Estrutura dos componentes do software
  - "Organizações que desenvolvem sistemas de software tendem a produzir sistemas que são cópia das estruturas de comunição dessas empresas. (Melvin Conway)"

Em relação entre os objetivos de negócio e suas restrições com os componentes a serem criados e suas responsabilidades visando sua evolução do software.

"É a organização fundamental de um sistema e seus componentes, suas relãções, seu ambiente, bem como os princípios que guiam seu design e evolução." (IEE Standard 1471)

O processo de arquitetar um software estabelece que o que está sendo desenvolvido faça parte de um conjunto maior.

#### O papel de Arquiteto(a) de Software

- Transformar requisitos de negócio em padrões arquiteturais
- Orquestrar pessoas desenvolvedores e experts de domínio
- Entender de forma profunda conceitos e modelos arquiteturais
- Auxilia na tomada de decisão nos momentos de crise
- Reforça boas práticas de desenvolvimento
- Code reviews

Apesar de nem todas as organizações possuírem o cargo de arquiteto de software, normalmente profissionais mais experientes como desenvolvedores seniors e tech leads acabam realizando esse papel baseado em suas experiencias anterioes.

Há empresas que apesar de não possuírem o cargo de arquiteto(a) de software, possuem um departamento de arquitetura que auxilia os diversos times da organizãção com questões arquiteturais.

#### Por que aprender arquitetura de software?

- Poder navegar da visão macro para a visão micro de um ou mais softwares
- Entender quais são as diversas opções que temos para desenvolver a mesma coisa e escolher a melhor solução para determinado contexto
- Pensar a longo prazo no projeto e sua sustentabilidade
- Tomar decisões de forma mais fria e calculada evitando assim ser influenciado(a) por "hypes" de mercado
- Mergulho em padrões de projeto e de desenvolvimento e suas boas práticas
- Ter mais clareza do impacto que o software possui na organização como um todo
- Tomar decisões com mais confiança

### Arquitetura vs Design

- Arquitetura: Escopo global ou alto nível
- Design: Escopo local

### Sustentabilidade

- Desenvolver um software é caro
- Software resolve uma "dor"
- Software precisa se pagar ao longo do tempo
- Acompanhar a evolução do negócio
- Quanto mais tempo um software fica no ar, mais retorno gera
- A solução precisa ser arquitetada

### Pilares da arquitetura de software

- Estruturação
  - Fácil evolução, componentização para atender os objetivos de negócio
- Componentização
- Relacionamento entre sistemas
- Governança

### Requisitos arquiteturais (RAs)

- Performace
- Armazenamento de dados
- Escalabilidade
- Segurança
- Legal
- Audit
- Marketing

### Características arquiteturais

- Operacionais
- Estruturais
- Cross-Cutting

#### Características Operacionais

- Disponibilidade
- Recuperação de desastres
- Performace
- Recuperação (Backup)
- Confiabilidade e segurança
- Robustes
- Escalabilidade

#### Características Estruturais

- Configurável
- Extensibilidade
- Fácil instalação
- Reuso de componentes
- Internacionalização
- Fácil manutenção
- Portabilidade (diversos bancos de dados)
- Fácil suport (logs, debugging)

#### Características Cross-Cutting

- Acessibilidade
- Processo de retenção e recuperação de dados (quanto tempo os dados serão mantidos)
- Autenticação e Autorização
- Legal
- Privacidade
- Segurança
- Usabilidade

### Prespectivas para arquiteturar software de qualidade

- Performace
- Escalabilidade
- Resiliência

#### Performace

- É o desempenho que um software possui para completar um determinado workload
- As unidades de medida para avaliarmos a performace de um software são:
  - Latência ou "response time"
  - Throughput
- Ter um software performático é diferente de ter um software escalável

##### Métricas para medir a performace

- Diminuindo a latência
  - Normalmente medida em milliseconds
  - É afetada pelo tempo de processamento da aplicação, rede e chamadas externas
- Aumento de throughtput
  - Quantidade de requisições
  - Diretamente ligado a latência

##### Principais razões para baixa performance

- Processamento ineficiente
- Recursos computacionais limitados
- Trabalhar de forma bloqueante
- Acesso serial a recursos

##### Principais formas para aumentar a eficiência

- Escala da capacidade computacional(CPU, Disco, Memória, Rede)
- Lógica por trás de software(Algoritmos, queries, overhead de frameworks)
- Concorrência e paralelismo
- Banco de dados(tipos de bancos, schema)
- Caching

##### Capacidade computacional: Escala vertical vs horizontal

- Escala Vertical -> Aumentar a capacidade computacional
- Escala Horizontal -> Aumentar a quantidade de maquinas

##### Diferença entre concorrência e paralelismo

"Concorrência é sobre lidar com muitas coisas ao mesmo tempo. Paralelismo é fazer muitas coisas ao mesmo tempo." Rob Pike

##### Vamos imaginar um webserser

- Trabalhando de forma seria - único processo
- Atendendo 5 requestes

- Forma concorrent/paralela
- 5 threads
- Atendendo 5 requests

##### Caching

- Cache na borda/Edge computing
- Dados estáticos
- Páginas web
- Funções internas
  - Evita reprocessamento de algoritmos pesados
- Objetos

###### Caching: Exclusivo vs Compartilhado

- Exclusivo
  - Baixa latência
  - Duplicado entre os nós
  - Problemas relacionados a sessões
- Compartilhado
  - Maior latência
  - Não há duplicação
  - Sessões compartilhadas
  - Banco de dados externo
    - MySQL
    - Redis
    - Memcache

##### Caching: Edge computing

- Cache realizado mais próximo ao usuário
- Evita a requisição chegar até o Cloud Provider/Infra
- Normalmente arquivos estáticos
- CDN - Content Delivery Network
- Cloudflare workers
- Vercel
- Akamai

### Escalabilidade

Escalabilidade é a capacidade de sistemas suportarem o aumento (ou a redução) dos workloads incrementando (ou reduzindo) o custo em menor ou igual proporção.

#### Escalabilidade vs Performace

Enquanto performace tem o foco em reduzir a latência e aumentar a throughput, a escalabilidade visa termos a possibilidade de aumentar ou diminuir o throughput adicionando ou removendo a capacidade computacional.

#### Escalando software - Descentralizaçao

- Disco efêmero
- Servidor de aplicação vs Servidor de assets
- Cache centralizado
- Sessões centralizadas
- Upload/Gravação de arquivos

#### Escala de banco de dados

- Aumentando recursos computacionais
- Distribuindo responsabilidades (escrita vs leitura)
- Shards de forma horizontal
- Severless

#### Otimização de queries e índices

- Trabalhe com índices de forma consciente
- APM (Application performance monitoring) nas queries
- Explain na queries
- CQRS (Command Query Responsibility Segregation)

#### Proxy reverso

Um proxy reverso é um servidor que fica na frente dos servidores web e encaminha as solicitações do cliente (por exemplo, navegador web) para esses servidores web.

##### Soluções populares de Proxy Reverso

- Nginx
- HAProxy (HA = High Availability)
- Traefik

### Resiliência

- Resiliência é um conjunto de estratégias adotadas intencionalmente para a adaptação de um sistema quando uma falha ocorre.
- Ter estratégias de resiliência nos possibilita minimizar os riscos de perda de dados e transações importantes para o negócio.

#### Proteger e ser Protegido

- Um sistema em uma arquitetura distribuída precisa adotar mecanismos de autopreservação para garantir ao máximo sua operação com qualidade.
- Um sistema não pode ser "egoísta" ao ponto de realizar mais requisições em um sistema que está falhando.
- Um sistema lento no ar muitas vezes é pior do que um sistema fora do ar. (Efeito dominó)

#### Health check

- Sem sinais vitais, não é possível saver a "saúde" de um sistema
- Um sistema que não está saudável possui uma chance de se recuperar caso o tráfego para de ser direcionado a ele temporariamente.
- Health check de qualidade

#### Rate Limiting

- Protege o sistema baseado no que ele foi projetado para suportar
- Preferência programada por tipo de client

#### Circuit breaker

- Protege o sistema fazendo com que as reuisições feitas para ele sejam negadas. EX: 500
- Circuito fechado = Requisições chegam normalmente
- Circuito aberto = Requisições não chegam ao sistema. Error instantâneo ao client
- Meio aberto = Permite uma quantidade limitada de requisições para verificação se o sistema tem condições de voltar ao ar integralmente

### API Gateway

- Garante que requisições "inapropriadas" cheguem até o sistema: Ex. usuário não autenticado
- Implementa políticas de Rate Limiting, Health check, etc.

### Service Mesh

- Controla o tráfego de rede
- Evita implementações de proteção pelo próprio sistema
- mTLS
- Circuit breaker, retry, timeout, fault injection, etc.

### Trabalhar de forma assíncrona

- Evitar perda de dados
- Não há perda de dados no envio de uma transação se o server estiver fora
- Servidor pode processar a transação em seu tempo quando estiver online

### Situações complexas

- O que acontece se o message broker cair?
- Haverá perda de mensagens?
- Seu sistema ficará fora do ar?
- Como garantir resiliência?
