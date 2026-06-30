# InduDash

## Sobre o Projeto

O **InduDash** é um dashboard industrial desenvolvido para monitoramento e análise de máquinas em tempo real, com foco em desempenho operacional, eficiência (OEE), consumo de energia e gestão de status da planta fabril.

O sistema simula um ambiente de gestão de produção, permitindo acompanhar o fluxo de trabalho por setor, identificar falhas em tempo real e apoiar a tomada de decisão com base em indicadores estratégicos de manufatura.

O objetivo do projeto é otimizar o controle industrial e demonstrar, na prática, como a tecnologia pode melhorar a produtividade e reduzir desperdícios em operações de manufatura e processos industriais.

---

## Funcionalidades

- Dashboard com visão geral da produção  
- Monitoramento de KPIs (OEE Total, Produção, Energia)  
- Classificação de status (Operando, Atenção, Manutenção, Parada, Offline)  
- Identificação de máquinas mais produtivas e mais quentes  
- Gráficos analíticos dinâmicos:
  - Distribuição de OEE  
  - Produção por setor  
  - Status das máquinas  
  - Consumo de energia  
- Sistema de adição de novas máquinas via modal  
- Validação de dados de entrada  
- Integração com backend em Node.js  
- Consumo de dados via API REST  
- Interface moderna, escura e responsiva para ambiente industrial  

---

## Tecnologias Utilizadas

### Front-end
- HTML5  
- CSS3 (layouts modernos e responsivos)  
- JavaScript (Vanilla JS)  
- Chart.js (visualização de dados)  
- Font Awesome (iconografia)  

### Back-end
- Node.js  
- Express.js  

---

## Estrutura do Projeto

```text
InduDash/
│
├── backend/
│   └── server.js
│
├── data/
│   ├── alertas.js
│   ├── maquinas.js
│   ├── setores.js
│   └── status.js
│
├── public/
│   ├── css/
│   │   ├── base.css
│   │   ├── components.css
│   │   └── layout.css
│   │
│   ├── js/
│   │   ├── api.js
│   │   ├── cards.js
│   │   ├── chart1.js
│   │   ├── chart2.js
│   │   ├── chart3.js
│   │   ├── chart4.js
│   │   ├── dashboard.js
│   │   ├── modal.js
│   │   ├── script.js
│   │   ├── utils.js
│   │   └── validacoes.js
│   │
│   └── index.html
├── package-lock.json
├── package.json
└── README.md
````

---

## Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/Murilo5660/InduDash.git
```

### 2. Acesse a pasta

```bash
cd InduDash
```

### 3. Instale as dependências

```bash
npm install express
```

### 4. Acesse a pasta

```bash
cd backend
```

### 5. Inicie o servidor

```bash
node server.js
```

O servidor será iniciado na porta **3000** e o dashboard estará disponível em:

```
http://localhost:3000
```

---

## Temas Abordados

* Gestão de manufatura (Indústria 4.0)
* Monitoramento de máquinas em tempo real
* Cálculo e análise de OEE (Overall Equipment Effectiveness)
* Gestão de eficiência energética
* Manutenção preditiva e preventiva
* Visualização de dados aplicados à produção
* Tomada de decisão baseada em indicadores industriais

---

## Objetivo do Projeto

O InduDash foi desenvolvido com o propósito de demonstrar a aplicação prática de tecnologia na resolução de problemas reais de manufatura, especialmente relacionados ao controle de produtividade, análise de eficiência e redução de paradas não programadas.

O sistema simula um ambiente fabril onde dados são utilizados para otimizar processos e melhorar o desempenho operacional.

---

## Desenvolvedores

### Murilo Ferreira Stresser

<a href="https://www.linkedin.com/in/murilo-ferreira-stresser-9328b5384/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>
<a href="https://github.com/Murilo5660" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white"/>
</a>

---

### Caio Lima Viana

<a href="https://www.linkedin.com/in/caio-lima-viana-004759397/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>
<a href="https://github.com/caio180" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white"/>
</a>

---

## Licença

© 2026 InduDash. Todos os direitos reservados.
