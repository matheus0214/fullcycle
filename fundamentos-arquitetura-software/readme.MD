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
- Compartilado
  - Maior latência
  - Não há duplicação
  - Sessões compartilhadas
  - Banco de dados externo
    - MySQL
    - Redis
    - Memcache
