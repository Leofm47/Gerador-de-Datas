/*formatações do nome, arquivo e data*/

const getEl = id => document.getElementById(id);

const formatarNome = nome =>
  nome
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map(p => p[0].toUpperCase() + p.slice(1))
    .join(" ");

    function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const normalizarArquivo = texto =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, "_");

const formatarData = data => {
  const [ano, mes, dia] = data.split("-");
  return new Date(ano, mes - 1, dia).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
};

const produtoSelecionado = () =>
  document.querySelector('input[name="bg"]:checked')?.value;


/*DADOS*/
const cursosPorProduto = {
  edgecam: [
    "Habilitação Atualização EDGECAM Advanced Milling / Turning",
    "Habilitação Atualização EDGECAM Standard Milling / Turning",
    "Habilitação Atualização EDGECAM Ultimate Milling / Turning",
    "Habilitação Customizável em EDGECAM",
    "Habilitação EDGECAM 4 Axis Simultaneous",
    "Habilitação EDGECAM 5 Axis Simultaneous",
    "Habilitação EDGECAM 5 Axis Simultaneous -  Ultimate Module",
    "Habilitação EDGECAM 5 Axis Simultaneous - Advanced Module",
    "Habilitação EDGECAM Advanced Milling",
    "Habilitação EDGECAM Básico",
    "Habilitação EDGECAM Bundle Advanced Production",
    "Habilitação EDGECAM Educacional Atualização",
    "Habilitação EDGECAM Educacional Fresamento",
    "Habilitação EDGECAM Educacional Fresamento Avançado",
    "Habilitação EDGECAM Educacional Fresamento Simultâneo",
    "Habilitação EDGECAM Educacional Torneamento",
    "Habilitação EDGECAM Educacional Torneamento e Fresamento",
    "Habilitação EDGECAM Essential Milling",
    "Habilitação EDGECAM Essential Turning",
    "Habilitação EDGECAM Fresamento de 3 eixos simultâneos",
    "Habilitação EDGECAM Fresamento Prismático 2 1/2 Eixos",
    "Habilitação EDGECAM Inspection",
    "Habilitação EDGECAM para Fresamento contínuo com 4 eixos simultâneos",
    "Habilitação EDGECAM Probing",
    "Habilitação EDGECAM Standard Milling",
    "Habilitação EDGECAM Standard Turning (C & Y)",
    "Habilitação EDGECAM Strategy Manager",
    "Habilitação EDGECAM Torneamento Básico",
    "Habilitação EDGECAM Torneamento Completo",
    "Habilitação EDGECAM Ultimate Milling",
    "Habilitação EDGECAM Ultimate Turning (B Axis)",
    "Habilitação EDGECAM Wire EDM 5 Eixos",
    "Habilitação Torneamento Advanced Turning (2 Torres)",
    "Habilitação Torneamento Advanced Turning (Geral)",
    "Habilitação Torneamento Advanced Turning (Sub Spindle)"

  ],

  alphacam: [
    "Habilitação ALPHACAM Aspire",
    "Habilitação ALPHACAM Automation Manager",
    "Habilitação ALPHACAM Router Advanced",
    "Habilitação ALPHACAM Router Advanced Five Axis",
    "Habilitação ALPHACAM Router Essential",
    "Habilitação ALPHACAM Router Standard",
    "Habilitação ALPHACAM Router Ultimate",
    "Habilitação Customizável em ALPHACAM"
  ],

  esprit: [
    "Habilitação Customizável em ESPRIT",
    "Habilitação ESPRIT Básico",
    "Habilitação ESPRIT EDGE Additive DED",
    "Habilitação ESPRIT EDGE Básico",
    "Habilitação ESPRIT EDGE CAM Generator",
    "Habilitação ESPRIT EDGE Gear Generator",
    "Habilitação ESPRIT EDGE KnowledgeBase",
    "Habilitação ESPRIT EDGE Mill FreeForm 3-Axis",
    "Habilitação ESPRIT EDGE Mill FreeForm 3-Axis Light",
    "Habilitação ESPRIT EDGE Mill FreeForm 4-Axis",
    "Habilitação ESPRIT EDGE Mill FreeForm 5-Axis",
    "Habilitação ESPRIT EDGE Milling 2.5 axis",
    "Habilitação ESPRIT EDGE Milling 2.5 axis + 1 rotary axis",
    "Habilitação ESPRIT EDGE Milling 2.5 axis + 2 rotary axes",
    "Habilitação ESPRIT EDGE Milling 2.5 axis + 3 rotary and collinear axes",
    "Habilitação ESPRIT EDGE Millturn C and Y axis",
    "Habilitação ESPRIT EDGE Millturn C, Y and B-Axis",
    "Habilitação ESPRIT EDGE Millturn FreeForm 3-Axis",
    "Habilitação ESPRIT EDGE Millturn FreeForm 4-Axis",
    "Habilitação ESPRIT EDGE Millturn FreeForm 5-Axis",
    "Habilitação ESPRIT EDGE Multi-Spindle",
    "Habilitação ESPRIT EDGE Multi-Turret / Multi-Channel",
    "Habilitação ESPRIT EDGE Probing",
    "Habilitação ESPRIT EDGE Turning",
    "Habilitação ESPRIT EDGE Wire EDM 2-Axis",
    "Habilitação ESPRIT EDGE Wire EDM 4-Axis",
    "Habilitação ESPRIT EDGE Wire EDM Turn-n-Burn",
    "Habilitação ESPRIT Probing",
    "Habilitação ESPRIT SolidMill FreeForm 3-Axis",
    "Habilitação ESPRIT SolidMill FreeForm 5-Axis",
    "Habilitação ESPRIT SolidMill Production",
    "Habilitação ESPRIT SolidMill Production Plus",
    "Habilitação ESPRIT SolidMill Tradicional",
    "Habilitação ESPRIT SolidMill Tradicional 2.5 axis",
    "Habilitação ESPRIT SolidMillTurn Advanced",
    "Habilitação ESPRIT SolidMillTurn Production Plus",
    "Habilitação ESPRIT SolidMillTurn Traditional",
    "Habilitação ESPRIT SolidTurn Multi-Spindle",
    "Habilitação ESPRIT SolidTurn Multi-Turret",
    "Habilitação ESPRIT SolidTurn Multi-Turret / Multi-Channel",
    "Habilitação ESPRIT SolidTurn Production",
    "Habilitação ESPRIT SolidTurn Tradicional",
    "Habilitação ESPRIT SolidWire Gold",
    "Habilitação ESPRIT SolidWire Platinum",
    "Habilitação ESPRIT Turn-n-Burn",
    "Habilitação ESPRIT U-axis Turning",
    "Habilitação SolidWire Platinum Plus"
  ],

  LANTEK: [
    "Habilitação em LANTEK Customizável",
    "Habilitação LANTEK Bend",
    "Habilitação LANTEK Expert Cut",
    "Habilitação LANTEK Expert Cut Plus",
    "Habilitação LANTEK Expert Cut Plus Fab",
    "Habilitação LANTEK Expert Duct",
    "Habilitação LANTEK Expert Gold",
    "Habilitação LANTEK Expert Punch",
    "Habilitação LANTEK Expert Punch Plus",
    "Habilitação LANTEK Flex3D Tubes/Perfis",
    "Habilitação LANTEK INTEGRA CRM Quotes",
    "Habilitação LANTEK INTEGRA Outsourcing Management",
    "Habilitação LANTEK INTEGRA Outsourcing Purchasing",
    "Habilitação LANTEK Integra Reports Toolkit",
    "Habilitação LANTEK Manager",
    "Habilitação LANTEK MES Inventory",
    "Habilitação LANTEK Sharp",
    "Habilitação LANTEK Sharp Fab",
    "Habilitação LANTEK WOS",
    "Habilitação Upgrade LANTEK Expert Cut Plus",
    "Habilitação Upgrade LANTEK Expert Gold",
    "Habilitação Upgrade LANTEK Expert Punch Plus",
    "Habilitação Upgrade LANTEK Expert Silver"

  ],
  
  worknc: [
    "Habilitação Atualização de Versão WORKNC",
    "Habilitação Customizável em WORKNC",
    "Habilitação WORKNC 2D",
    "Habilitação WORKNC 5 Eixos Simultâneos",
    "Habilitação WORKNC Advanced",
    "Habilitação WORKNC Basic",
    "Habilitação WORKNC Educacional 5 Eixos Simultâneos",
    "Habilitação WORKNC Educacional Full License",
    "Habilitação WORKNC Full",
    "Habilitação WORKNC Gerenciamento de Features (Furos)",
    "Habilitação WORKNC Positional (4/5 Eixos indexados)"
  ],

  solidworks: [
    "Habilitação em DraftSight",
    "Habilitação em DriveWorks Pro Nivel I",
    "Habilitação em DriveWorks Pro Nivel II",
    "Habilitação em DriveWorks Solo",
    "Habilitação em DriveWorks Xpress",
    "Habilitação em Power Surfacing",
    "Habilitação em Power Surfacing RE",
    "Habilitação em SKA CONNECTOR",
    "Habilitação em SOLIDWORKS Chapas Metálicas e Soldagens",
    "Habilitação em SOLIDWORKS Customizável",
    "Habilitação em SOLIDWORKS Flow Simulation",
    "Habilitação em SOLIDWORKS Flow Simulation Eletronic Cooling",
    "Habilitação em SOLIDWORKS Flow Simulation HVAC",
    "Habilitação em SOLIDWORKS Inspection",
    "Habilitação em SOLIDWORKS MBD",
    "Habilitação em SOLIDWORKS Motion",
    "Habilitação em SOLIDWORKS Nível I",
    "Habilitação em SOLIDWORKS Nível II",
    "Habilitação em SOLIDWORKS Nível III",
    "Habilitação em SOLIDWORKS Plastics Premium",
    "Habilitação em SOLIDWORKS Plastics Professional",
    "Habilitação em SOLIDWORKS Plastics Standard",
    "Habilitação em SOLIDWORKS Routing Electrical",
    "Habilitação em SOLIDWORKS Routing Piping and Tubing",
    "Habilitação em SOLIDWORKS Simulation",
    "Habilitação em SOLIDWORKS Simulation Premium",
    "Habilitação em SOLIDWORKS Simulation Professional",
    "Habilitação em SOLIDWORKS Visualize Professional",
    "Habilitação em SOLIDWORKS Visualize Standard",
    "Habilitação SOLIDWORKS CAM Professional Milling",
    "Habilitação SOLIDWORKS CAM Professional Turning",
    "Habilitação SOLIDWORKS CAM STANDARD",
    "Habilitação SOLIDWORKS Composer Essentials",
    "Habilitação SOLIDWORKS PDM PROFESSIONAL - Administração",
    "Habilitação SOLIDWORKS PDM PROFESSIONAL - Usuários",
    "Habilitação SOLIDWORKS PDM STANDARD - Administração",
    "Habilitação SOLIDWORKS PDM STANDARD - Usuários",
  ],

  altium: [
    "Habilitação em Altium Concord Pro",
    "Habilitação em Altium Designer - Advanced",
    "Habilitação em Altium Designer - Essential",
    "Habilitação em Altium Designer Customizável"
  ],

  ares: [
    "Habilitação em Ares Electrical - Advanced",
    "Habilitação em Ares Electrical - Essentials",
    "Habilitação em ARES ELECTRICAL Customizável"
  ],

  DX: [
    "Habilitação - Colaboração na Plataforma 3DExperience"
  ]
};



const fundos = {
  edgecam: "assets/certificado_edgecam.png",
  worknc: "assets/certificado_worknc.png",
  alphacam: "assets/certificado_alphacam.png",
  esprit: "assets/certificado_esprit.png",
  LANTEK: "assets/certificado_LANTEK.png",
  solidworks: "assets/certificado_solidworks.png",
  altium: "assets/certificado_ares.png", // certificado de ares e altium tem o mesmo fundo
  ares: "assets/certificado_ares.png",  
  labs: "assets/certificado_labs.png",  
  DX: "assets/certificado_DX.png",
  ead: "assets/certificado_ead.png"  
};

const conteudoProgramatico = {
   //EDGECAM
  "Habilitação EDGECAM básico": [
    `Conteúdo Programático: 
	• Desenho 2D
	• Visualizações 
	• Ferramentas de edição (em caso de trabalhar com sólidos) 
	• Posicionamento 
	• Reconhecimento de características 
	• Extração de linhas 2D
`
  ],
  
  "Habilitação EDGECAM Educacional Fresamento": [
    `Conteúdo Programático: 
Interface 
    • Ambiente Workflow
    • Perfil de Trabalho 
    • Gerenciamente de Matéria Prima e Fixações
    • Criação da Sequência de Usinagem 
    • Barras de Ferramentas 

Biblioteca de Ferramentas (Toolstore) 
    • Configuração (Toolstore Administrator) 
    • Interface 
    • Criação de Ferramentas para Fresamento/ Furação 
    • Edição e Cópia de Ferramentas

Conceito no Ambiente de Preparação
    • Alinhar peça para fresamento 
    • Criar bruto/fixação 	
    • Procurar características 
    • Extração de limites 

Usinagem de Geometrias 
    • Operação de Furação
    • Operação de Faceamento 
    • Operação de Desbaste 
    • Operação de Perfilar 
    • Operação de Chanfrar 	
    • Operação de Acabamento de Áreas Planas 	
    • Operação de Rebaixo 
    • Operação Usinagem Paralela 

Código do Programa e Folha de Processo 
    • Gerar código CNC 
    • Gerar Folha de Processo 
`
  ],
  
    "Habilitação EDGECAM Educacional Fresamento Avançado": [
    `Conteúdo Programático: 

Interface 
    • Ambiente Workflow	
    • Perfil de Trabalho 
    • Gerenciamente de Matéria Prima e Fixações	
    • Criação da Sequência de Usinagem 
    • Barras de Ferramentas 

Biblioteca de Ferramentas (Toolstore) 
    • Configuração (Toolstore Administrator) 	
    • Interface 
    • Criação de Ferramentas para Fresamento / Furação 	
    • Edição e Cópia de Ferramentas 
    • Ferramentas Especiais 

Conceito de Ciclos para Sólidos 
    • Procurar Características 
    • Extração de Limites de Usinagem ( Edge Loop, Geometry From Edge , Silhouette Boundary....) 

Usinagem de Geometrias 
    • Conceito de Ciclos 
    • Ciclo de Faceamento 
    • Ciclo de Desbaste 
    • Ciclo de Desbaste Vetical 	
    • Ciclo de Perfilar 
    • Ciclo de Acabamento de Áreas Planas 
    • Ciclo de Rebaixo 
    • Ciclo de Texto 
    • Ciclo Usinagem Paralela 
    • Ciclo de Acabamento com Crista Constante 
    • Ciclo de Acabamento de Restos 
    • Ciclo de Acabamento de Seguir Superfície 
    • Ciclo de Acabamento de Cantos 
    • Ciclos de Projeção de Caminhos de Ferramentas, Limites, Curvas de Fluxo, Círculo Padrão. 

Recursos 
    • Background Processing 	
    • Batch Mode 
    • Criação de Superfícies de Proteção e utilização nos ciclos. 

Código do Programa e Folha de Processo 
    • Gerar código CNC 
    • Gerar Folha de Processo 
`
  ],
  
    "Habilitação EDGECAM Educacional Fresamento Simultâneo": [
    `Conteúdo Programático: 
	• Extrair característica de face 
	• Extrair característica de contorno de aresta 
	• Operação 4 eixos rotativos 
	• Operação 5 eixos Swarf 	
	• Operação combina utilizando 5 eixos 
	• Operação curva de 5 eixos 
	• Operação acabamento com 5 eixos 
	• Introdução ao ciclo de 5 eixos 
	• Ciclo 5 eixos (estratégias, faixa de corte,de entrada, tipos de ligações, múltiplos cortes) `
  ],
  
    "Habilitação EDGECAM Educacional Torneamento": [
    `Conteúdo Programático: 
Interface 
    • Ambiente Workflow
    • Perfil de Trabalho 
    • Gerenciamente de Matéria Prima e Fixações
    • Criação da Sequência de Usinagem 
    • Barras de Ferramentas 

Biblioteca de Ferramentas (Toolstore) 
    • Configuração (Toolstore Administrator) 
    • Interface 
    • Criação de Ferramentas para Torneamento / Furação 
    • Edição e Cópia de Ferramentas 

Conceito de Operações para Sólidos 
    • Procurar Características 
    • Características de Torneamento (reconhecimento manual) 

Usinagem de Geometrias 
    • Conceito de Operações 
    • Operação de Faceamento 
    • Operação de Desbaste Externo 
    • Operação de Acabamento Externo 
    • Operação de Canal Externo 
    • Operação de Roscar 
    • Operação de Furação
    • Operação de Desbaste Interno 
    • Operação de Acabamento Interno 
    • Operação de Canal Interno 
    • Simulação de Usinagem 
    • Integração Operações X Ciclos. 
    • Alterar rotação máxima do processo quando se utiliza operações 
    • Compensação de raio (pathrace) em canais

Programação do Segundo Lado 
    • Criação de novo Plano de Trabalho (CPL) 
    • Criação de Sequência de Trabalho Baseada neste Plano 
    • Usinagem do Segundo Lado 
    • Simulação da Peça Completa 

Ferramentas Acionadas ( Quando Houver) 
    • Seleção de Ferramentas Axiais e Radiais 
    • Operação de Desbaste 
    • Operação de Perfilar 
    • Operação de Rasgos
    • Operação de Furos para Fresamento 
    • Usinagens Axiais com Features e 2D 
    • Usinagens Radiais com Features e 2D 
    • Mill Mode: (Rotary e Planar) 
 
Código do Programa e Folha de Processo 
    • Gerar código CNC 
    • Gerar Folha de Processo 
`
  ],
  
    "Habilitação EDGECAM Educacional Torneamento e Fresamento": [
    `Conteúdo Programático: 
	Interface 
    • Ambiente Workflow
    • Perfil de Trabalho 
    • Gerenciamente de Matéria Prima e Fixações
    • Criação da Sequência de Usinagem 
    • Barras de Ferramentas 

Biblioteca de Ferramentas (Toolstore)
    • Configuração (Toolstore Administrator) 
    • Interface 
    • Criação de Ferramentas para Torneamento / Furação 
    • Edição e Cópia de Ferramentas 

Conceito de Operações para Sólidos 
    • Procurar Características 
    • Características de Torneamento (reconhecimento manual) 

Usinagem de Geometrias 
    • Conceito de Operações 
    • Operação de Faceamento 
    • Operação de Desbaste Externo 
    • Operação de Acabamento Externo 
    • Operação de Canal Externo 
    • Operação de Roscar 
    • Operação de Furação 
    • Operação de Desbaste Interno 
    • Operação de Acabamento Interno 
    • Operação de Canal Interno 
    • Simulação de Usinagem 
    • Integração Operações X Ciclos. 
    • Alterar rotação máxima do processo quando se utiliza operações 
    • Compensação de raio (pathrace) em canais 

Programação do Segundo Lado 
    • Criação de novo Plano de Trabalho (CPL) 
    • Criação de Sequência de Trabalho Baseada neste Plano 
    • Usinagem do Segundo Lado 
    • Simulação da Peça Completa 
    • Exercícios de programação do segundo lado 

Ferramentas Acionadas ( Quando Houver) 
    • Seleção de Ferramentas Axiais e Radiais 
    • Operação de Desbaste 
    • Operação de Perfilar 
    • Operação de Rasgos 
    • Operação de Furos para Fresamento 
    • Usinagens Axiais com Features e 2D 
    • Usinagens Radiais com Features e 2D 
    • Mill Mode: (Rotary e Planar) 

Código do Programa e Folha de Processo 
    • Gerar código CNC 
    • Gerar Folha de Processo 
    • Fresamento

Interface 
    • Ambiente Workflow
    • Perfil de Trabalho 
    • Gerenciamente de Matéria Prima e Fixaçõe
    • Criação da Sequência de Usinagem 
    • Barras de Ferramentas 

Biblioteca de Ferramentas (Toolstore) 
    • Configuração (Toolstore Administrator) 
    • Interface 
    • Criação de Ferramentas para Fresamento/ Furação 
    • Edição e Cópia de Ferramentas 

Conceito no Ambiente de Preparação
    • Alinhar peça para fresamento 
    • Criar bruto/fixação
    • Procurar características
    • Extração de limites 

Usinagem de Geometrias 
    • Operação de Furação 	
    • Operação de Faceamento 
    • Operação de Desbaste 
    • Operação de Perfilar 
    • Operação de Chanfrar 
    • Operação de Acabamento de Áreas Planas 
    • Operação de Rebaixo 
    • Operação Usinagem Paralela 

Código do Programa e Folha de Processo 
    • Gerar código CNC 
    • Gerar Folha de Processo 
`
  ],
  
    "Habilitação EDGECAM Fresamento de 3 eixos simultâneos": [
    `Conteúdo Programático: 
	• Noções básicas do EDGECAM
	• Interface Worklow
	• Aplicação de estratégias de usinagem 3 eixos em centros de fresamento
	• Geração de código CNC
	• Geração de folha de processo
`
  ],
  
    "Habilitação EDGECAM Fresamento Prismático 2 1/2 Eixos": [
    `Conteúdo Programático: 
	• Noções básicas do EDGECAM
	• Interface Workflow
	• Aplicação de estratégias de usinagem 2 ½ eixos em centros de fresamento
	• Geração de código CNC
	• Geração de folha de processo`
  ],

      "Habilitação EDGECAM para Fresamento contínuo com 4 eixos simultâneos": [
    `Conteúdo Programático: 
  • Geração de geometrias pertinentes a usinagem 4 eixos simultâneos
	• Aplicação de estratégias de usinagem 4 eixos simultâneos em centros de fresamento com opcional 4º eixo
	• Geração de código CNC
`
  ],

      "Habilitação EDGECAM Standard Turning (C & Y)": [
    `Conteúdo Programático: 
	• Reconhecimento de features Radiais e Axiais
	• Usinagens em modo Planar 
	• Programação de Usinagens em modo Rotativo
	• Criação de planos
	• Programações com Indexação de planos
	• Desbaste e Acabamento em fresamento, 
	• Perfilar para fresamento, 
	• Furação acionada, 
	• Usinagem de rasgos e faces, 
	• Usinagem com eixo rotativo (C) 
	• Usinagem com eixo linear Z 
	• Programação com eixos simultâneos 

Todos os recursos são vistos no plano axial e radial.
`
  ],

      "Habilitação EDGECAM Torneamento Básico": [
    `Conteúdo Programático: 
	• Noções básicas do EDGECAM
	• Interface Workflow
	• Aplicação de estratégias de usinagem para tornos de 2 eixos
	• Geração de código CNC
	• Geração de folha de processo

`
  ],

      "Habilitação EDGECAM Torneamento Completo": [
    `Conteúdo Programático: 
  • Noções básicas do EDGECAM
	• Utilização e criação de Geometrias 2D
	• Aplicação de estratégias de usinagem para tornos de 2 eixos + eixos C e Y
	• Geração de código CNC 
	• Geração de folhas de Processo
`
  ],
  
      "Habilitação de EDGECAM Ultimate Milling": [
    `Conteúdo Programático: 
	• Capacitar o aluno a utilizar o EDGECAM para fresamento de 3 eixos com posicionamento de mais 2 eixos angulares para moldes e matrizes. 
	• Usinagem com angulação de paredes e superfícies de forma livre;
	• Acabamento de projeção (caminho, limite, duas curvas e círculo);
	• Parallel lace;
	• Acabamento com crista constante;
	• Acabamento dos restos;
	• Usinagem pencil e todos os itens vistos em milling agora em ciclos, o que significa uma programação mais completa e com mais recursos;
	• Posicionamento de eixos angulares;
	• Usinagem com um eixo linear simultâneo utilizando geometrias 2D no controle da ferramenta, etc.
`
  ],

  // LANTEK
  "Habilitação LANTEK Expert Cut": [
    `Conteúdo Programático: 
	• Instalação local do software
	• Configuração da máquina de corte
	• Importação de peças
	• Cadastro de materiais e chapas
	• Nesting manual
	• Módulos
	• Acabamento manual
	• Ataques
	• Pontes
	• Amarrações
	• Módulo de desenho
	• Comunicação com a máquina e testes práticos`
  ],

  "Habilitação LANTEK Expert Cut Plus": [
    `Conteúdo Programático: 
	• Instalação local do software
	• Configuração da máquina de corte
	• Nesting manual
	• Nesting semi-automático
	• Nesting automático
	• Módulos
	• Acabamento manual
	• Acabamento semi-automático
	• Acabamento automático
	• Ataques
	• Pontes
	• Amarrações
	• Módulo de desenho
	• Comunicação com a máquina e testes práticos`
  ],

  "Habilitação LANTEK Expert Cut Plus Fab": [
    `Conteúdo Programático: 
  • Arquitetura de instalação Cut Plus
  • Nesting (manual, semi-automático e automático)
  • Acabamento (manual, semi-automático e automático)
  • Tecnologias (entradas de corte, pontes, amarrações e micro cortes)
  • Módulo de desenho
  • Configuração de tecnologias
  • Acompanhamento de testes em máquina
`
  ],

  "Habilitação LANTEK Expert Duct": [
    `Conteúdo Programático: 
	• Apresentação das figuras de caldeiraria
	• Exercícios didáticos e da própria empresa
	• Configuração do sistema para desenvolvimento das peças`
  ],

  "Habilitação LANTEK Expert Gold": [
    `Conteúdo Programático: 
	• Instalação local do software
	• Configuração das máquinas de corte puncionadeiras
	• Importação de peças
	• Configuração das máquinas de corte
	• Cadastro de materiais e chapas
	• Nesting manual
	• Nesting semi-automático
	• Nesting automático
	• Módulos
	• Acabamento manual
	• Acabamento semi-automático
	• Acabamento automático
	• Tabelas de tecnologia
	• Ataques
	• Pontes
	• Amarrações
	• Módulo de desenho
	• Comunicação com a máquina e testes práticos
	• Cadastro de torre
	• Cadastro de ferramentas
  • Importação de peças e módulo de desenho
`
  ],

  "Habilitação LANTEK Expert Punch": [
    `Conteúdo Programático: 
	• Instalação local do software
	• Configuração da puncionadeira
	• Importação de peças
	• Configuração das máquinas de corte
	• Cadastro de materiais e chapas
	• Nesting manual
	• Módulos
	• Acabamento manual
	• Módulo de desenho
	• Comunicação com a máquina e testes práticos
	• Cadastro de torre
`
  ],

  "Habilitação LANTEK Expert Punch Plus": [
    `Conteúdo Programático: 
	• Instalação local do software
	• Configuração da puncionadeira
	• Importação de peças
	• Configuração das máquinas de corte
	• Cadastro de materiais e chapas
	• Nesting manual
	• Nesting semi-automático
	• Nesting automático
	• Módulos
	• Acabamento manual
	• Acabamento semi-automático
	• Acabamento automático
	• Módulo de desenho
	• Comunicação com a máquina e testes práticos
	• Cadastro de torre`
  ],

  "Habilitação LANTEK Flex3D Tubes/Perfis": [
    `Conteúdo Programático: 
	• Instalação local do software;
	• Configuração da máquina de corte;
	• Criação de tubos/perfis;
	• Importação de geometrias 2D e 3D;
	• Aplicação de tecnologias de corte;
	• Geração da sequência de corte;
	• Comunicação com a máquina e testes práticos.
`
  ],

  "Habilitação LANTEK INTEGRA CRM Quotes": [
    `Conteúdo Programático: 
	• Instalação local do software
	• Configuração da máquina de corte
	• Importação de peças
	• Cadastro de materiais e chapas
	• Nesting manual
	• Módulos
	• Acabamento manual
	• Ataques
	• Pontes
	• Amarrações
	• Módulo de desenho
	• Comunicação com a máquina e testes práticos`
  ],

  "Habilitação LANTEK INTEGRA Outsourcing Management": [
    `Conteúdo Programático: 
	• Configuração do módulo de terceiros
	• Gestão de fornecedores
	• Gestão de artigos
	• Necessidades de terceirização
	• Pedidos de terceirização
	• Notas de Envios 
	• Notas de recebimento
	• Faturamento
	• Componentes adicionais (Outros links)
	• Histórico
	• Relatórios`
  ],

  "Habilitação LANTEK INTEGRA Outsourcing Purchasing": [
    `Conteúdo Programático: 
	• Configuração do módulo de compras
	• Gestão de fornecedores
	• Gestão de artigos
	• Planejamento de compra
	• Necessidades de compras
	• Contratos
	• Solicitação de orçamentos
	• Pedidos de compras
	• Recibos
	• Faturamento
	• Componentes adicionais (Outros links)
	• Histórico
	• Relatórios`
  ],

  "Habilitação LANTEK Integra Reports Toolkit": [
    `Conteúdo Programático: 
	• Intrução à relatórios
	• Criação de relatórios
	• Relacionamento das tabelas do LANTEK
	• Condições para atribuir relacionamentos
	• Permissões sobre os relatórios
	• Personalização de relatórios padrões
	• Replicação de relatórios em demais computadores
`
  ],

  "Habilitação LANTEK Manager": [
    `Conteúdo Programático: 
	• Apresentação das opções de "Rastreamento de produção"
	• Planejamento da produção através da "Planificação de trabalhos"
	• Apontamento de operações através do "Gerenciador do chão de fábrica"
	• Relatórios gerenciais
`
  ],

  "Habilitação LANTEK MES Inventory": [
    `Conteúdo Programático: 
	• Configuração do módulo de inventário
	• Gestão de armazens
	• Gestão de Inventário
	• Gestão de artigos
	• Gestão de materiais
	• Solicitações de compras
	• Movimentação de inventário
	• Permissões sobre os inventários
	• Rastreabilidade dos inventários
`
  ],

  "Habilitação LANTEK Sharp": [
    `Conteúdo Programático: 
  • Instalação local do software;
  • Nesting manual;
  • Nesting semi-automático;
  • Nesting automático;
  • Módulos;
  • Acabamento manual;
  • Acabamento semi-automático;
  • Acabamento automático;
  • Ataques;
  • Pontes;
  • Amarrações;
  • Módulo de desenho;
  • Comunicação com a máquina e testes práticos.`
  ],

  "Habilitação LANTEK Sharp Fab": [
    `Conteúdo Programático: 
  • Arquitetura de instalação Sharp
  • Nesting (manual, semi-automático e automático)
  • Acabamento (manual, semi-automático e automático)
  • Tecnologias (entradas de corte, pontes, amarrações e micro cortes)
  • Módulo de desenho
  • Acompanhamento de testes em máquina
`
  ],

  // WORKNC
  "Habilitação WORKNC Advanced": [
    `Conteúdo Programático: 
- Funcionalidades Worknc CAD; 
- Integração Worknc CAD e Worknc CAM;
- Função de bruto e criação de elementos CAM (curvas, pontos e listas); 
- Percursos módulo Worknc Full 3X (16 ciclos 2 ½ eixos, 6 ciclos de desbaste e mais  26 ciclos 3 eixos); edições e transformações de percursos; 
- Simulação / checagem de colisão; 
- Pós-processamento; 
- Biblioteca de ferramentas e porta ferramentas; 
- Folha de processos;
- Criação de contexto de usinagem; 
- Criação de vistas de usinagem; 
- Sistema de verificação de colisão/limites maquina; 
transformação 3+2.
`
  ],

  //ALPHACAM

    "Habilitação ALPHACAM Router Ultimate": [
    `Conteúdo Programático: 
O conteúdo repassado está abaixo descrito, e ao final deste treinamento, os colaboradores estarão apitos a realizar e criar programas completos no ALPHACAM com as ferramentas e recursos descritos.

•	Habilitação para o desenvolvimento de processos 2D;
•	Criação e edição de modelos 2D;
•	Programação em Modelos complexos 3D;
•	Reconhecimento de características do modelo 3D;
•	Desbaste e acabamento 3 eixos;
•	Desbaste de cavidades, Gravuras e Furacão;
•	Corte com Serra e Multdrill;
•	Construção de peças paramétricas;
•	Criação de bruto e limites;
•	Recursos para o processo em 3 eixos;
•	Controle de layers;
•	Orientação de direção e controle de percursos;
•	Criação de Nesting;
•	Criação e cadastro de ferramentas;
•	Criação de estilos e utilização de estilos;
•	Criação de plano (Workplanes);
•	Recursos para programação em 4/5 eixos posicionados;
•	Programação por linhas;
•	Programão 3D (usando o solido, faces do modelo);
•	Controle de estratégias;
•	Validação virtual (Simulação gráfica da usinagem em 3D);
•	Geração do código NC;
`
  ],

  //ALTIUM

    "Habilitação em Altium Concord Pro": [
    `Conteúdo Programático: 
• Altium Concord Pro Admin
Installation
Maintenance
Browser portal access
Licensing
Users and roles
Client Access
Version control setup
Email notifications
Part providers setup
Folder management and permissions
Global operation permissions
Items and item naming scheme
Revision naming scheme
Lifecycle definitions
Templates

• Altium Concord Pro Librarian
Unified Components
Symbol Creation
Model Creation
Component Creation
Part Choice List
Part Component Templates
Component Model Editing
Component Types And Search
Lifecycle States
Content Cart
Parts Request

• Altium Concord Pro Data Migration
Introduction
Library Migration_Overview
Library Migration_SchlibPcblib
Library Migration_IntLib
Library Migration_DBLib
Library Migration_SVNDBLib
Project Migration

• Altium Concord Pro User
Overview and Outline
Introduction
Placing Components
Placing Components
Design Reuse and Standardization
Projects
Manufacturing Release
Parts Request

`
  ],

    "Habilitação em Altium Designer - Advanced": [
    `Conteúdo Programático: 
• Produtividade 
  Reutilização de esquemáticos, reaproveitamento de partes da PCB e clonagem de roteamento em circuitos idênticos, variantes, pin swap, via stitching, ferramentas de roteamento e seleção avançadas, utilização de templates e design colaborativo, modificação de parâmetros em lote.

• Verificação 
  Ferramentas de criação de classes, diretivas e regras a partir do esquemático, configurações avançadas das regras de projeto, definição de escopo com expressões lógicas, controle de versionamento, criação de relatórios e parametrização.

• 3D 
  Definição da placa a partir de modelos 3D, importação de modelos STEP, configuração e verificação de regras de colisão entre modelos, placement de componentes, animação de dobras rigid-flex e manipulação de modelos.

• Manufatura e Montagem 
  Gerenciamento avançado de stack layer, teardrops, testpoints de fabricação e manufatura, rigid-flex, adição de imagens e gráficos, criação de painéis, configuração de lista de materiais.

• High Speed 
  Roteamento de pares diferenciais, ajuste de comprimento de trilhas para nets de comunicação, definição de regras para projetos com high-speed e alta densidade de trilhas e componentes, regras e organização do roteamento para sinais com múltiplas conexões como em um barramento de memória DDR, criação automática de via shielding.

`
  ],

    "Habilitação em Altium Designer - Essential": [
    `Conteúdo Programático: 
• Começando 
  Ambiente, painéis, toolbars, menus, atalhos, documentos de projeto, preferências de esquemático;

• Desenho do Esquemático 
  Colocação de objetos e criação das conexões, cursor e grade de esquemático, utilização de objetos gráficos e elétricos, annotation, edição global, compilar o projeto e buscar erros, projetos hierárquicos, projetos Multi-sheet, transferência para PCB e regras do esquemático;

• PCB
  Preferências do PCB, navegação, grupos de componentes e nets, atualizações SCH x PCB, roteamento, edição global, planos e polígonos, gerenciador do Layer Stack, definição de forma da PCB, grades, regras, DRC e resolução de violações;

• Documentação 
  Criação de BOM, configuração e geração de documentos e relatórios do projeto, arquivos e informações de montagem e fabricação;

• Bibliotecas 
  Técnicas de gerenciamento e criação de bibliotecas, bibliotecas integradas, símbolos esquemáticos e footprints com modelos 3D.

`
  ],

  //SOLIDWORKS

    "Habilitação em SOLIDWORKS Chapas Metálicas e Soldagens": [
    `Conteúdo Programático: 
  • Chapas metálicas
Desenvolvendo peças a partir de chapas planas, dobradas e conformadas, conversão de sólido para chapas, edição e extração de parâmetros de chapas e obtenção de desenhos 2D baseado em lista de corte
  • Soldagens
Criando estruturas metálicas soldadas por meio de perfis estruturais, personalização de perfis de soldagens, utilização de esboços 3D, aplicação de soldas e desenvolvimento de desenhos 2D baseado em lista de corte
`
  ],

  "Habilitação em SOLIDWORKS Motion": [
    `Conteúdo Programático: 
  • Introdução do Simulation Motion e conceitos de resultados
Análise inicial, conceito e métricas iniciais para gerar a estrutura do estudo.
  • Construção do modelo matemático e pós processamento
Considerações de posicionamento, métricas qualificatória de processamento.
  • Contatos, efeitos de amortecimentos e mola
Interpretação do coeficiente de atrito caraterísticas de contato.
  • Contatos avançados e tipos de Solvers
Para estudos mais complexos é necessário compreender os pontos de instabilidade, impactos de força e quando ou qual solver utilizar para seu estudo.
  • Otimização de projeto
Com base nos resultados é possível criar diversos quadrados considerando otimização de recurso ou do próprio modelo.
  • Pontos flexíveis e redundâncias 
O que é redundância? Quais os efeitos da redundância? Iremos ver compreender as respostas para essas perguntas e os benefícios.
  • Exportação de resultados do estudo de movimento para análise de FEA
Reutilização dos contornos do estudo motion, para validação mecânica do componente.
  • Evento baseado em Simulação
Métricas para automatizar o projeto utilizando sensores, servo motores e tarefas agendadas.
`
  ],

  "Habilitação em SOLIDWORKS Nível I": [
    `Conteúdo Programático: 
  • Começando
Interface básica, entendendo modelamento em 3D, discussão de modelagem correta.
  • Esboço
Inserindo perfil da peça através de esboços 2D, criação de entidades de esboço paramétricas e dimensionadas.
  • Peças 3D
Escolhendo perfil e melhor plano primário, intenção de projeto, desenvolvendo modelos prismáticos e cilíndricos, aplicação de furos padronizados, criando modelos de espessura fina com reforço, recursos de repetição e componentes seriados equacionados, aprendendo a corrigir erros de modelamento, editando e modificando projetos.
  • Montagens
Inserindo componentes, entendendo graus de liberdade, adicionando interações entre componentes, estruturando projetos com subníveis, empacotando e enviando projetos, verificando condições físicas do projeto, explodindo componentes e visualizando propriedades de massa.
  • Detalhamentos 2D
Entendendo utilização de templates, inserindo vistas ortogonais e tridimensionais de peças e montagens, aplicando dimensões e anotações, entendendo aplicação de propriedades personalizadas, criação de lista de materiais e balões de identificação e inserindo informações adicionais de projeto.
  • Simulações
Compreendendo aplicação de simulações, introduzindo análise de tensão, estudando um produto, calculando força máxima, interpretando resultados e gerando relatório da análise.`
  ],

  "Habilitação em SOLIDWORKS Nível II": [
    `Conteúdo Programático: 
  • Operações de corpos sólidos
Métodos de combinação entre corpos, salvamento de corpos sólidos, utilização de splines e desenvolvimento de esboços 3D.
  • Recursos avançados
Criação de sólido e corte varrido, desenvolvimento de sólido por variação de perfil, utilização de restrições de perfis intermediários e aplicação de inúmeros recursos avançados para elaboração de sólidos nativos e importados.
  • Reutilização de modelos
Desenvolvimento de roscas manuais e automáticas, criação de perfis personalizados de rosca, considerações de desempenho, manipulação de componentes de biblioteca e utilização de blocos de esboços.
  • Montagens
Entendendo método de modelamento em contexto e referências externas em peças e montagens, inserindo recursos de montagem, adicionando posicionamentos avançados e mecânicos e aplicando componentes inteligentes.
  • Diversificação de montagens
Aplicando configurações a montagens, trabalhando com estados de exibição, edição de montagens, substituição de componentes, resolvendo e evitando problemas e aplicando equações.
  • Aprimoramento de montagens
Entendendo o que são grandes montagens, desenvolvendo estruturação correta de projetos, trabalhando com distintos modos de abertura, simplificando nível de detalhe, editando qualidade de imagem dos componentes e desenvolvendo projetos com base em layout.
  • Animações
Entendendo método de animação com base em chaves automática e inserção manual, composição do tempo na animação, modificando propriedades ao longo do tempo e salvando animações.
`
  ],

    "Habilitação em SOLIDWORKS Nível III": [
    `Conteúdo Programático: 
  • Superfícies:
Entendimento das vantagens da modelação por superfície
Desenvolvimento de modelos através dos recursos básicos e avançados de superfície, utilizando métodos para a criação de sólidos. Aplicando superfícies e sólidos para a obtenção de modelos com geometria complexa.
Métodos de aparagem de superfícies, correção de modelos e a aplicação de superfícies para remendos complexos em modelos sólidos.
  • Moldagem:
Introdução ao conceito de moldes e produtos gerados por moldagem.
Apresentação das ferramentas de análise e suas respectivas aplicações.
Ferramentas de Moldagem para o desenvolvimento das partes de um molde cavidade, e quando necessário a inclusão de gavetas, pinças e postiços.
Utilização das ferramentas de superfícies no desenvolvimento de moldes.
Apresentação da importância de uma Biblioteca de projetos e introdução ao SOLIDWORKS Plastics.
`
  ],

    "Habilitação em SOLIDWORKS Plastics Premium": [
    `Conteúdo Programático: 
  • Análise de fluxo básico
Análise de fluxo, parâmetros de funcionamento, elementos de malha, condições de contorno e análise de resultados.
  • Detectando Interrupção no Preenchimento de Cavidades
Detectando Interrupção no Preenchimento, Estágios do processo, Configurações de preenchimento, Alterações de Design para reprocessamento de cálculos.
  • Ferramentas de automação
Ferramentas de automação, Estágios do processo, Estudo duplicado, Gerenciamento de arquivos plásticos, Usando Batch Manager, Resumo e relatório.
  • Locais de injeção e marcas de coletor
Regras de localização de injeção, Locais de injeção única vs. Múltiplos, Prever padrão do preenchimento, Rechupes, Minimizando rechupes em nervuras e Consultor de espessura nominal de parede.
  • Materiais
Propriedades do Material, Administrar Banco de Dados de Material, Banco de dados personalizado pelo usuário, Criar materiais a partir de Datasheet de fornecedores.
  • Manipulação de malha
Manipulação de malha, Refinamento de malha local, Controle de malha baseado em geometria, Malha Sólida e de Casca, Tipos de malha.
  • Detecção de Aprisionamento de Ar
Aprisionamento de Ar, Efeito Diesel, Intervalos de plotagem e Análise de ventilação.
  • Gate Blush
Tensão de cisalhamento e como Reduzir Gate Blush.
  • Tempos de recalque e resfriamento
Configurações do recalque, Análise do Recalque, Retração volumétrica no final do Recalque, Tempo de Resfriamento, Temperatura no final do pós-preenchimento.
  • Moldes de Cavidades Múltiplas
Layouts de molde, Tipos de canais, Força de fechamento, Assistente para criação de canais, Layout de molde família e Usando Balanceamento de canais.
  • Análise de Simetria
Reduzir tempo de simulação em Layout de cavidades simétricas. 
  • Válvulas e câmaras quentes
Portas controladas por válvulas e Canais quentes.
  • Moldagem por injeção de reação
Simulação básica para injeção de materiais termofixos.
  • Usando inserções
Configurar insertos, Materiais para insertos e análise de resultados com insertos.
  • Injeção por múltiplos pontos
Molde de Múltiplos pontos de injeção, Bi injeção e Co-injeção.
  • Moldagem com Assistência a Gás
Assistente a gás e Processos para redução de massa dos produtos.
  • Análise de resfriamento
Canais de resfriamento e molde, Fluído Refrigerante, Temperatura da parede do molde, Resultados do Circuito Refrigerante, Defletor e Bolha.
  • Análise de empenamento
Reduzindo a contração, reduzindo e corrigindo peças empenadas, Contribuições térmicas para empenamento, Formas de Empenamento e Estresse residual.
`
  ],

    "Habilitação em SOLIDWORKS Plastics Professional": [
    `Conteúdo Programático: 
  • Análise de fluxo básico
Análise de fluxo, parâmetros de funcionamento, elementos de malha, condições de contorno e análise de resultados.
  • Detectando Interrupção no Preenchimento de Cavidades
Detectando Interrupção no Preenchimento, Estágios do processo, Configurações de preenchimento, Alterações de Design para reprocessamento de cálculos.
  • Ferramentas de automação
Ferramentas de automação, Estágios do processo, Estudo duplicado, Gerenciamento de arquivos plásticos, Usando Batch Manager, Resumo e relatório.
  • Locais de injeção e marcas de coletor
Regras de localização de injeção, Locais de injeção única vs. Múltiplos, Prever padrão do preenchimento, Rechupes, Minimizando rechupes em nervuras e Consultor de espessura nominal de parede.
  • Materiais
Propriedades do Material, Administrar Banco de Dados de Material, Banco de dados personalizado pelo usuário, Criar materiais a partir de Datasheet de fornecedores.
  • Manipulação de malha
Manipulação de malha, Refinamento de malha local, Controle de malha baseado em geometria, Malha Sólida e de Casca, Tipos de malha.
  • Detecção de Aprisionamento de Ar
Aprisionamento de Ar, Efeito Diesel, Intervalos de plotagem e Análise de ventilação.
  • Gate Blush
Tensão de cisalhamento e como Reduzir Gate Blush.
  • Tempos de recalque e resfriamento
Configurações do recalque, Análise do Recalque, Retração volumétrica no final do Recalque, Tempo de Resfriamento, Temperatura no final do pós-preenchimento.
  • Moldes de Cavidades Múltiplas
Layouts de molde, Tipos de canais, Força de fechamento, Assistente para criação de canais, Layout de molde família e Usando Balanceamento de canais.
  • Análise de Simetria
Reduzir tempo de simulação em Layout de cavidades simétricas. 
  • Válvulas e câmaras quentes
Portas controladas por válvulas e Canais quentes.
  • Moldagem por injeção de reação
Simulação básica para injeção de materiais termofixos.
  • Usando inserções
Configurar insertos, Materiais para insertos e análise de resultados com insertos.
  • Injeção por múltiplos pontos
Molde de Múltiplos pontos de injeção, Bi injeção e Co-injeção.
  • Moldagem com Assistência a Gás
Assistente a gás e Processos para redução de massa dos produtos.
`
  ],

    "Habilitação em SOLIDWORKS Plastics Standard": [
    `Conteúdo Programático: 
  • Análise de fluxo básico
Análise de fluxo, parâmetros de funcionamento, elementos de malha, condições de contorno e análise de resultados.
  • Detectando Interrupção no Preenchimento de Cavidades
Detectando Interrupção no Preenchimento, Estágios do processo, Configurações de preenchimento, Alterações de Design para reprocessamento de cálculos.
  • Ferramentas de automação
Ferramentas de automação, Estágios do processo, Estudo duplicado, Gerenciamento de arquivos plásticos, Usando Batch Manager, Resumo e relatório.
  • Locais de injeção e marcas de coletor
Regras de localização de injeção, Locais de injeção única vs. Múltiplos, Prever padrão do preenchimento, Rechupes, Minimizando rechupes em nervuras e Consultor de espessura nominal de parede.
  • Materiais
Propriedades do Material, Administrar Banco de Dados de Material, Banco de dados personalizado pelo usuário, Criar materiais a partir de Datasheet de fornecedores.
  • Manipulação de malha
Manipulação de malha, Refinamento de malha local, Controle de malha baseado em geometria, Malha Sólida e de Casca, Tipos de malha.
  • Detecção de Aprisionamento de Ar
Aprisionamento de Ar, Efeito Diesel, Intervalos de plotagem e Análise de ventilação.
  • Gate Blush
Tensão de cisalhamento e como Reduzir Gate Blush.
`
  ],

    "Habilitação em SOLIDWORKS Simulation": [
    `Conteúdo Programático: 
  • O processo de análise
Princípios e conceitos, configuração de plotagem, tipos de acessórios de fixação, geração de malha, qualidade de malha, processamento, pós-processamento, verificação de convergência, comparação com os resultados analíticos.
  • Controles de malha, concentrações de tensão e condições de limite
Controle de malha, análise com refinamento local de malha, singularidades na tensão, configuração suprimida, entender o efeito de condições de limite.
  • Análise de montagens com contatos
Análise de contato, tipos de contato, contato de componente, contato local, tensões de contato, autocontato.
  • Montagens autoequilibradas simétricas e livres 
Peças de ajuste por contração, simetria, modo de corpo rígido, plotagem dos resultados no sistema de coordenadas local, sistemas de coordenadas cilíndricas, molas suaves, alívio inercial.
  • Análise de montagem com conectores e refinamento de malha
Conexão de componentes, conectores, tipos de conectores, controle de malha em uma montagem, carga remota, parede virtual, pós-processamento de conectores.
  • Malhas compatíveis/incompatíveis
Geração de malha compatível/incompatível, simetria cíclica.
  • Análise de componentes finos
Malha com elementos sólidos, malha sólida refinada, sólido x casca, criar elementos de cascas, superfície de plano médio, cores de malha de casca, alterar a orientação da malha, realinhamento automático de superfície da casaca, renderizar a espessura para cascas em 3D, comparação dos resultados, esforço computacional.
  • Cascas e sólidos com malha mista
Cascas e sólidos com malha mista, união de cascas e sólidos, malha mista, união de face de casca com face de casca, união aresta de casca com face de casca, contato unido de casca para sólido.
  • Elementos de viga - Análise da estrutura de um transportador
Elementos de viga, elementos de treliça, taxa de esbeltez, propriedades da seção, juntas conectadas e desconectadas, tipos de junta de viga, renderizar o perfil da viga, componentes de tensão da viga, diagramas de momento de curvatura e força de cisalhamento.
  • Sólidos, vigas e cascas com malha mista
Malha mista, estampa da viga.
  • Estudo de projeto
Estudo de projeto, parâmetros, resultados do estudo de projeto.
  • Análise de tensão térmica
Análise de tensão térmica, propriedades do material, importar temperaturas.
  • Malhas adaptativas
Malhas adaptativas, estudo h-adaptativo, estudo p-adaptativo.
  • Análise de grande deslocamento
Análise linear de pequeno deslocamento x grande deslocamento, solução de contato em análises de pequenos e grandes deslocamento.

`
  ],

    "Habilitação em SOLIDWORKS Simulation Premium": [
    `Conteúdo Programático: 
  • Vibração de um tubo
Análise estática, análise de frequência, análise dinâmica linear (força devagar), análise dinâmica linear (força rápida).
  • Análise de choque transiente de acordo com MIL-STD-810G
Fator de participação de massa, fator participação de massa cumulativo, amortecimento, amortecimento viscoso, time step, massa remota.
  • Análise harmônica de um suporte
Noções básicas de análise harmônica, propriedade análise harmônica.
  • Análise de resposta de espectro
Análise de resposta de espectro.
  • Análise de vibração aleatório de acordo com MIL-STD-810G
Massa distribuída, análise de vibração aleatória, função da densidade espectral de potência, nível geral de aceleração PSD.
  • Fadiga de vibração aleatória
Fadiga de vibração aleatória, propriedade de material, Curva S-N.
  • Análise Dinâmica Não Linear de uma caixa eletrônica
Análise dinâmica linear x não linear, amortecimento de Rayleigh, método de integração do tempo, método iterativo.

  Conteúdo Programático Não Linear:
  • Introdução a análise estrutural não linear
Tipos de não linearidades, não linearidade geométrica, não linearidade de material, análises de contato.
  • Análise de grande deslocamento
Análise estática não linear, curva de tempo, incrementação fixa, opção de grande deslocamento: análise não linear.
  • Técnicas de controle incremental
Técnicas de controle incremental, controle de força, controle de deslocamento.
  • Análise de flambagem não linear
Análise de flambagem linear: limitações e hipóteses, análise de flambagem não linear.
  • Deformação plástica
Deformação plástica, não linear – von Mises, não linear - Tresca.
  • Regras de Encruamento
Regras de encruamento, encruamento isotrópico, encruamento cinemático.
  • Análise de elastômeros
Constante de Mooney-Rivlin.
  • Análise de contato não linear
Instabilidade em montagens, estabilização, validade e limitação de análise estática.
  • Conformação mecânica
Curvatura, deformação plana, formulação de pequenas deformações x grandes deformações, problemas de convergência.
`
  ],

    "Habilitação em SOLIDWORKS Simulation Professional": [
    `Conteúdo Programático: 
  • Frequência natural de peças
Princípios e conceitos da análise modal, propriedades de material requeridas, frequências e modos de vibrar, análise de frequência com suporte, análise de frequência sem suporte, modos de corpo rígido, efeitos das restrições, frequência natural com cargas, efeitos de pré-tensão.
  • Frequência natural de montagens
Conectando peças de montagem, condições de contato unido, condições de contato unido e permitir penetração, massa remota, propriedades de massa.
  • Flambagem
Análise de flambagem, flambagem linear x não linear, fator de segurança à flambagem, considerações da análise de flambagem.
  • Casos de carga
Gerenciador de caso de cargas.
  • Submodelagem
Submodelagem, estudo pai, seleção de componentes para submodelagem, fixações em submodelo.
  • Análise topológica
Análise topológica, objetivos e restrições, controle de fabricação, efeitos de malhas, exportar malha suavizada.
  • Análise térmica
Mecanismos de transferência de calor, condução, convecção, radiação, propriedades de material para análise térmica, análise térmica estado estacionário, análise térmica transiente, importação de efeitos convectivos, curvas de tempo, curvas de temperatura.
  • Análise térmica com radiação
Análise térmica estado estacionário com radiação, singularidades de fluxo de calor.
  • Simplificação 2D de tensão térmica avançada
Análise de tensão térmica, análise térmica, simplificação 2D, , importação de temperatura e pressão, referência de temperatura em zero deformação, modelo 3D.
  • Análise de Fadiga de Amplitude Variável
Evento de fadiga de amplitude variável, método de contatos de ciclo de chuva, curva de carregamento variável.
  • Análise de Queda
Análise de queda, chão rígido, chão flexível, material elasto-plástico, teste de queda com contatos.
  • Análise de Otimização
Definição de objetivo, definição de restrições, pós-processamento de resultados de otimização.
  • Análise de vaso de pressão
Linearização de tensão, combinação de caso de cargas.
`
  ],

    "Habilitação em SOLIDWORKS Visualize Professional": [
    `Conteúdo Programático: 
  • Iniciando renderização
Interface, terminologias, estágio de processo, importação simplificada
  • Importação de modelo CAD
Configurações de importação, ferramentas de seleção, formas de manipulação de objetos, estrutura e organização, utilização de aparências, trabalhando com texturas e mapeamento
  • Utilização de decalques
Funcionalidades específicas com decalques, aplicando aparência como decalques, processo de múltiplas camadas
  • Trabalho com câmeras
Orientação e posionamento de câmera, aplicando profundidade de campo, tipo e opções de câmeras, utilização de filtros
  • Manipulação do ambiente
Interpretar cenas, alteração do plano de fundo e ambiente, utilizando luz solar baseada em local e tempo específico, criação e alteração de luzes
  • Ferramentas de produtividade
Criação múltiplas vistas de trabalho, renderizar todas as câmeras, alterar tempo limite, adicionar e renderizar configurações, agendar renderizações, descarregar renderização em computador terceiro
  • Animações
Controles básicos e avançados de animação, exportação de vídeos, efeito de movimento, chaves manuais e automáticas de animação, utilização de câmeras, alteração de aparências e cenas
  • Ferramentas de exportação
Exportação imagens interativas, utilização de câmeras 360, renderização de ambientes internos, modo de estereoscopia
`
  ],

    "Habilitação em SOLIDWORKS Visualize Standard": [
    `Conteúdo Programático: 
  • Iniciando renderização
Interface, terminologias, estágio de processo, importação simplificada, ferramentas de exportação
  • Importação de modelo CAD
Configurações de importação, ferramentas de seleção, formas de manipulação de objetos, estrutura e organização, utilização de aparências, trabalhando com texturas e mapeamento
  • Utilização de decalques
Funcionalidades específicas com decalques, aplicando aparência como decalques, processo de múltiplas camadas
  • Trabalho com câmeras
Orientação e posicionamento de câmera, aplicando profundidade de campo, tipo e opções de câmeras
  • Manipulação do ambiente
Interpretar cenas, alteração do plano de fundo e ambiente`
  ],

    "Habilitação SOLIDWORKS Composer Essentials": [
    `Conteúdo Programático: 
  • Iniciando
Interface, terminologias, menu, preferências, customizar interface
  • Geração de imagens
Criação e orientação de vistas, navegação gráfica, exportando imagens 2D
  • Vista explodidas
Ferramentas de explosão, visibilidade, importando arquivos, vinculando vistas, criando padrões de estilos, exportar imagens vetoriais
  • Lista de materiais (BOM)
Criando BOM, importando BOM do SOLIDWORKS, geração de BOM de peças e montagens, criação de balões de identificação, exportar imagens vetoriais interativas com BOM
  • Aspectos visuais
Aplicação de texturas, criação de luzes, edição de cenas, salvar seleções
  • Animações
Utilização da timeline, criação de chaves de animação, filtros de chaves, incrementando propriedades visuais, aplicando interações, adicionando câmeras, utilizando biblioteca de animação, exportação de vídeos
  • Atualização de projetos
Atualização completa de projetos, modificação de geometria específica, regenerar vistas, formas de publicação do conteúdo`
  ],

    "Habilitação SOLIDWORKS PDM PROFESSIONAL - Administração": [
    `Conteúdo Programático: 
• Introdução ao SOLIDWORKS PDM.
• Criar um vault de arquivos.
• Usuários e Grupos.
• Variáveis e cartões de dados.
• Colunas e lista de materiais (BOM).
• Tarefas do SOLIDWORKS PDM.
• Categorias
• Revisões e fluxos de trabalho.
• Sistema de mensagens.
• Templates do SOLIDWORKS PDM.
• Dispatch.
• Esquema de arquivo morto.
• Importar e exportar dados XML.
• Gerenciar o Toolbox.
• Indexação do SOLIDWORKS PDM.
`
  ],

      "Habilitação SOLIDWORKS PDM PROFESSIONAL - Usuários": [
    `Conteúdo Programático: 
• Introdução ao SOLIDWORKS PDM.
• Check-in e Check-out de arquivos.
• Versões de arquivos.
• Referências de Arquivos.
• Pesquisa do SOLIDWORKS PDM.
• Fluxos de trabalho e Notificações.
• Tarefas do SOLIDWORKS PDM.
• Gerenciamento de cache local.
`
  ],

      "Habilitação SOLIDWORKS PDM STANDARD - Administração": [
    `Conteúdo Programático: 
• Ferramenta de Administração
Políticas de grupo, ferramentas, criação cofre e adição de novo arquivo, criando vista local, controle de acesso e fluxo de trabalho.
• Grupos e usuários
Criando usuários, copiando permissões, propriedades dos usuários, criando grupos, estados, transições, pesquisa de cartões e lista de materiais.
• Criação de cartão de pasta
Criando cartões de dados, editor de cartões, associações, controle e utilização de variáveis.
• Arquivo e pesquisa de cartões
Lógica de controle de cartão, pesquisa de cartões, tabelas controladas, controle de pesquisa de variáveis e pesquisa de valores padrões.
• Fluxo de trabalho
Criando fluxo de trabalho, definindo condições, iniciando e salvando fluxo de trabalho, estados, transições e revisões.
• Migração de dados
Planejamento de migração dados de legados, limpeza de dados, migrando revisões e entendendo quais dados serão migrados.
• Backup do cofre
Backup do banco de dados, configurações de backup do servidor e pacotes de arquivos de backup.

`
  ],

      "Habilitação SOLIDWORKS PDM STANDARD - Usuário": [
    `Conteúdo Programático: 
• Login
Aprendendo os locais de acesso ao cofre do PDM.
• Check-in e check-out
Descarregando arquivos do cofre na vista local e carregando arquivos da vista local no cofre e diferentes locais para realizar check-in e check-out.
• Estado dos arquivos
Entendendo estado atual dos arquivos dentro do fluxo de trabalho.
• Fluxo de trabalho
Utilizando fluxo de trabalho para alterar estados dos arquivos.
• Cartão de dados
Exibindo e alterando propriedades dos arquivos e pesquisando de arquivos por meio dos cartões de dados.
• Trabalho com multiusuários
Aprendendo a trabalhar no ambiente com multiusuários.
• Histórico de arquivos
Analisando histórico dos arquivos.
• Versões e revisões
Controlando versões e revisões dos arquivos.
`
  ],

  "Habilitação - Colaboração na Plataforma 3DExperience": [
    `Conteúdo Programático
    
  • Entendendo o conceito de trabalho com a Plataforma 3DEXPERIENCE;
• Conectando-se à Plataforma 3DEXPERIENCE;
• Conectando-se à comunidades;
• Visualizando e realizando pesquisas de dados;
• Gerenciando Bookmarks;
• Trabalhando com documentos em Bookmarks;
• Trabalhando com Rotas;
• Gerenciando e atribuindo Tarefas;
• Gerenciando Problemas em Objetos;
• Trabalhando com a integração ENOVIA + Windows Explorer;
• Trabalhando com a integração ENOVIA + Microsoft Word e Microsoft Excel;
• Trabalhando com a integração ENOVIA + Microsoft Outlook;
`
  ],

  

};

const fundosPagina2 = {
  edgecam: "assets/conteudo_edgecam.png",
  LANTEK: "assets/conteudo_LANTEK.png",
  solidworks: "assets/conteudo_solidworks.png",
  worknc: "assets/conteudo_worknc.png",
  alphacam: "assets/conteudo_alphacam.png",
  altium: "assets/conteudo_ares.png",
  ares: "assets/conteudo_ares.png",
  DX: "assets/conteudo_DX.png"
};

/*UI – CURSOS -> opções de cursos referente ao produto*/

function atualizarCursos(produto) {
  getEl("titulo").value = "";
  getEl("painel-cursos").innerHTML = "";
  verificarCampos();
}

function mostrarCursosFiltrados(texto = "") {
  const painel = getEl("painel-cursos");
  const produto = produtoSelecionado();

  painel.innerHTML = "";

  if (!produto) {
    painel.style.display = "none";
    return;
  }

  const cursos = cursosPorProduto[produto] || [];

  cursos
    .filter(curso =>
      normalizarTexto(curso).includes(normalizarTexto(texto))
    )
    .forEach(curso => {
      const item = document.createElement("div");
      item.textContent = curso;

      item.onclick = () => {
        getEl("titulo").value = curso;
        painel.style.display = "none";
        verificarCampos();
        verificarCamposEmail();

      };

      painel.appendChild(item);
    });

  painel.style.display = cursos.length ? "block" : "none";
}

  getEl("titulo").addEventListener("focus", () => {
    mostrarCursosFiltrados("");
  });

  getEl("titulo").addEventListener("blur", () => {
    setTimeout(() => {
      getEl("painel-cursos").style.display = "none";
    }, 200);
  });

  const btnGerar = getEl("btn-gerar");

  document.addEventListener("DOMContentLoaded", () => {
    const produto = produtoSelecionado();
    if (produto) {
      getEl("bg-certificado").src = fundos[produto];
      atualizarCursos(produto);
    }
  });

  getEl("titulo").addEventListener("input", e =>
    mostrarCursosFiltrados(e.target.value)
  );

  ["nome", "horas", "data"].forEach(id =>
    getEl(id).addEventListener("input", verificarCampos)
  );

  document.querySelectorAll('input[name="bg"]').forEach(radio =>
    radio.addEventListener("change", () => {
      const produto = produtoSelecionado();
      getEl("bg-certificado").src = fundos[produto];
      atualizarCursos(produto);
    })
  );

  /*verificação se campos foram preenchidos*/

  function verificarCampos() {
    const camposPreenchidos =
      getEl("nome").value.trim() &&
      getEl("titulo").value.trim() &&
      getEl("horas").value.trim() &&
      getEl("data").value.trim() &&
      produtoSelecionado();

    btnGerar.disabled = !camposPreenchidos;
  }

  /* PDF */

  async function gerarPagina(elemento, scale = 2.0) {
    const canvas = await html2canvas(elemento, { scale, useCORS: true });
    return canvas.toDataURL("image/jpeg", 0.75);
  }

  async function gerarPDF() {
    let nome = formatarNome(getEl("nome").value.trim());
    const titulo = getEl("titulo").value.trim();
    const horas = getEl("horas").value.trim();
    const data = getEl("data").value;
    const produto = produtoSelecionado();

      if (produto === "ead") {
        gerarPDFEAD();
        return;
      }

    if (!nome || !titulo || !horas || !data || !produto) return;

    /* Página 1 */
    getEl("cert-nome").innerText = nome;
    getEl("cert-titulo").innerText = titulo;
    getEl("cert-horas").innerText = horas;
    getEl("cert-data").innerText = `São Leopoldo, ${formatarData(data)}`;
    getEl("bg-certificado").src = fundos[produto]; /* seleciona background da Página 1 */

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "a4");

    const img1 = await gerarPagina(getEl("certificado"));
    pdf.addImage(img1, "JPEG", 0, 0, 210, 297);

    /* Página 2 */
    const conteudo = conteudoProgramatico[titulo];
  if (conteudo) {
    getEl("bg-pagina-2").src = fundosPagina2[produto]; /* seleciona background da Página 2 */

    const lista = getEl("lista-conteudo");
    lista.innerHTML = "";

    conteudo.forEach(bloco => {   /* Cria lista para cada elemento da pg2 */ 
    bloco
      .split("\n")
      .map(i => i.trim())
      .filter(Boolean)
      .forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
      });
  }); 

    const img2 = await gerarPagina(getEl("certificado-pagina-2"));
    pdf.addPage();
    pdf.addImage(img2, "JPEG", 0, 0, 210, 297);
    }

    pdf.save(`${normalizarArquivo(nome)}.pdf`);
  }

  async function gerarPDFEAD() {

    let nome = formatarNome(getEl("nome").value.trim());
    const titulo = getEl("titulo").value.trim();
    const horas = getEl("horas").value.trim();
    const data = getEl("data").value;

    if (!nome || !titulo || !horas || !data) return;

    getEl("cert-nome-ead").innerText = nome;
    getEl("cert-titulo-ead").innerText = titulo;
    getEl("cert-horas-ead").innerText = horas;
    getEl("cert-data-ead").innerText = `São Leopoldo, ${formatarData(data)}`;

    getEl("bg-certificado-ead").src = fundos["ead"];

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF("l", "mm", "a4"); // LANDSCAPE

    const img = await gerarPagina(getEl("certificado-ead"));

    pdf.addImage(img, "JPEG", 0, 0, 297, 210);

    pdf.save(`${normalizarArquivo(nome)}.pdf`);
  }

  // Funções para mandar gerar o template e para mandar o e-mail para o participante

function gerarEmailTemplate(nome, curso, email) { 
  return {
    assunto: `Conclusão de curso SKA - ${curso}`,
    corpo: 
`Parabéns, ${nome}
 
Você completou com sucesso o curso ${curso}. Em anexo está o seu certificado.

Para saber sobre outros cursos disponíveis, acesse:
https://www.ska.com.br/capacitacao/cursos
 
Para qualquer dúvida, sigo à disposição.

Atenciosamente,
`
  };
}
  function gerarEmail() {
    const nome = formatarNome(getEl("nome").value.trim());
    const curso = getEl("titulo").value.trim();
    const emailDestino = getEl("email").value.trim(); // pega do input

    if (!nome || !curso || !emailDestino) {
      alert("Preencha o nome, curso e email");
      return;
    }

    const email = gerarEmailTemplate(nome, curso, emailDestino);

    const mailto = 
      `mailto:${emailDestino}?subject=${encodeURIComponent(email.assunto)}` +
      `&body=${encodeURIComponent(email.corpo)}`;

    window.location.href = mailto;
  }
  const btnSecondary = getEl("btn-secondary");

  function verificarCamposEmail() {
    const ok =
      getEl("nome").value.trim() &&
      getEl("titulo").value.trim();

    btnSecondary.disabled = !ok;
  }

  ["nome", "titulo"].forEach(id =>
    getEl(id).addEventListener("input", verificarCamposEmail)
  );

  document.addEventListener("DOMContentLoaded", verificarCamposEmail);
