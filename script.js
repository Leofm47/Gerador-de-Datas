// ================= DADOS =================
const produtosSKA = {
  "SolidWorks": {
    servicos: [
    "Treinamento", 
    "Pré-OS em SOLIDWORKS", 
    "Consultoria", 
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
    "Habilitação SOLIDWORKS PDM STANDARD - Usuários"],
    tecnicos: ["João", "Maria", "Carlos"]
  },
  "Ares": {
    servicos: ["Treinamento em Ares", "Pré-OS em Ares"],
    tecnicos: ["Pedro", "Ana"]
  }
};

const modulos = ["Presencial", "Remoto"];
const periodos = ["Manhã", "Tarde", "Noite", "Integral"];

// ================= ELEMENTOS =================
const produtoInput = document.getElementById("produto");
const servicoInput = document.getElementById("servico");
const tecnicoInput = document.getElementById("tecnico");
const moduloInput = document.getElementById("modulo");
const periodoInput = document.getElementById("periodo");

const opcoesProduto = document.getElementById("opcoesProduto");
const opcoesServico = document.getElementById("opcoesServico");
const opcoesTecnico = document.getElementById("opcoesTecnico");
const opcoesModulo = document.getElementById("opcoesModulo");
const opcoesPeriodo = document.getElementById("opcoesPeriodo");

// ================= AUTOCOMPLETE =================
function normalizar(t){
  return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
}

function mostrarOpcoes(container, lista, input){
  container.innerHTML = "";
  const filtro = normalizar(input.value);

  lista.filter(item => normalizar(item).includes(filtro))
       .forEach(item=>{
          const div = document.createElement("div");
          div.textContent = item;
          div.onclick = ()=>{
            input.value = item;
            container.style.display = "none";
          };
          container.appendChild(div);
       });

  container.style.display = lista.length ? "block" : "none";
}

// PRODUTO
produtoInput.addEventListener("focus", ()=>{
  mostrarOpcoes(opcoesProduto, Object.keys(produtosSKA), produtoInput);
});

produtoInput.addEventListener("input", ()=>{
  mostrarOpcoes(opcoesProduto, Object.keys(produtosSKA), produtoInput);
  servicoInput.value = "";
  tecnicoInput.value = "";
});

// SERVIÇO
servicoInput.addEventListener("focus", ()=>{
  const p = produtoInput.value;
  if(produtosSKA[p])
    mostrarOpcoes(opcoesServico, produtosSKA[p].servicos, servicoInput);
});

servicoInput.addEventListener("input", ()=>{
  const p = produtoInput.value;
  if(produtosSKA[p])
    mostrarOpcoes(opcoesServico, produtosSKA[p].servicos, servicoInput);
});

// TÉCNICO
tecnicoInput.addEventListener("focus", ()=>{
  const p = produtoInput.value;
  if(produtosSKA[p])
    mostrarOpcoes(opcoesTecnico, produtosSKA[p].tecnicos, tecnicoInput);
});

tecnicoInput.addEventListener("input", ()=>{
  const p = produtoInput.value;
  if(produtosSKA[p])
    mostrarOpcoes(opcoesTecnico, produtosSKA[p].tecnicos, tecnicoInput);
});

// MÓDULO
moduloInput.addEventListener("focus", ()=>{
  mostrarOpcoes(opcoesModulo, modulos, moduloInput);
});
moduloInput.addEventListener("input", ()=>{
  mostrarOpcoes(opcoesModulo, modulos, moduloInput);
});

// PERÍODO
periodoInput.addEventListener("focus", ()=>{
  mostrarOpcoes(opcoesPeriodo, periodos, periodoInput);
});
periodoInput.addEventListener("input", ()=>{
  mostrarOpcoes(opcoesPeriodo, periodos, periodoInput);
});

// FECHAR AO CLICAR FORA
document.addEventListener("click", e=>{
  if(!e.target.closest(".custom-select")){
    document.querySelectorAll(".options").forEach(o=>o.style.display="none");
  }
});

// ================= CALENDÁRIO =================
let dataAtual = new Date();
let datasTemp = [];
let datasConfirmadas = [];
let loteAtual = 0;

const daysContainer = document.getElementById("days");
const mesAnoSpan = document.getElementById("mesAno");
const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

function renderCalendar(){
  daysContainer.innerHTML = "";

  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth();
  mesAnoSpan.textContent = meses[mes]+" "+ano;

  const primeiroDia = new Date(ano, mes, 1).getDay();
  const totalDias = new Date(ano, mes+1, 0).getDate();

  for(let i=0;i<primeiroDia;i++){
    daysContainer.appendChild(document.createElement("div"));
  }

  for(let d=1; d<=totalDias; d++){
    const btn = document.createElement("button");
    btn.textContent = d;

    const confirmado = datasConfirmadas.find(x =>
      x.dia === d && x.mes === mes+1 && x.ano === ano
    );

    if(confirmado){
      btn.classList.add("confirmed"+confirmado.lote);
    }

    if(datasTemp.includes(d)){
      btn.classList.add("active");
    }

    btn.onclick = ()=>{
      if(confirmado) return;

      if(datasTemp.includes(d))
        datasTemp = datasTemp.filter(x=>x!==d);
      else
        datasTemp.push(d);

      renderCalendar();
    };

    daysContainer.appendChild(btn);
  }
}

function mudarMes(delta){
  dataAtual.setMonth(dataAtual.getMonth()+delta);
  renderCalendar();
}

renderCalendar();

// ================= GERAR =================
function gerar(){
  if(!datasTemp.length || !tecnicoInput.value){
    alert("Selecione dias e técnico");
    return;
  }

  loteAtual++;

  datasTemp.forEach(d=>{
  datasConfirmadas.push({
    dia:d,
    mes:dataAtual.getMonth()+1,
    ano:dataAtual.getFullYear(),
    servico:servicoInput.value,
    modulo:moduloInput.value,
    periodo:periodoInput.value,
    tecnico:tecnicoInput.value,
    lote: loteAtual
  });
});

  datasTemp=[];
  renderCalendar();
  gerarTexto();
}

function gerarTexto(){
  const container = document.getElementById("tabelas");
  container.innerHTML = "";

  const grupos = {};

  datasConfirmadas.forEach(d=>{
    const chave = `${d.servico}_${d.modulo}_${d.periodo}_${d.tecnico}`;
    if(!grupos[chave]) grupos[chave] = [];
    grupos[chave].push(d);
  });

  for(let chave in grupos){
    const grupo = grupos[chave];
    const ref = grupo[0];

    const datas = grupo.map(d=>`${d.dia}/${d.mes}`).join(", ");

    const div = document.createElement("div");
    div.className = "table";
    div.innerText =
`────────────────────────────
📅 Datas: ${datas}
🛠 Serviço: ${ref.servico}
👨‍🔧 Técnico: ${ref.tecnico}
💻 Módulo: ${ref.modulo}
⏰ Horário: ${ref.horario}
🕒 Período: ${ref.periodoTexto}
📍 Local: SKA
────────────────────────────`;

    container.appendChild(div);
  }
}