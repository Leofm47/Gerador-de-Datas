// ================= DADOS =================
const produtosSKA = {
  "SolidWorks": {
    servicos: ["Treinamento","Pré-OS em SOLIDWORKS","Consultoria"],
    tecnicos: ["João", "Maria", "Carlos"]
  },
  "Ares": {
    servicos: ["Treinamento em Ares","Pré-OS em Ares"],
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

  container.style.display = "block";
}

// Produto
produtoInput.addEventListener("focus", ()=>{
  mostrarOpcoes(opcoesProduto, Object.keys(produtosSKA), produtoInput);
});
produtoInput.addEventListener("input", ()=>{
  mostrarOpcoes(opcoesProduto, Object.keys(produtosSKA), produtoInput);
  servicoInput.value="";
  tecnicoInput.value="";
});

// Serviço
servicoInput.addEventListener("focus", ()=>{
  const p = produtoInput.value;
  if(produtosSKA[p]) mostrarOpcoes(opcoesServico, produtosSKA[p].servicos, servicoInput);
});
servicoInput.addEventListener("input", ()=>{
  const p = produtoInput.value;
  if(produtosSKA[p]) mostrarOpcoes(opcoesServico, produtosSKA[p].servicos, servicoInput);
});

// Técnico
tecnicoInput.addEventListener("focus", ()=>{
  const p = produtoInput.value;
  if(produtosSKA[p]) mostrarOpcoes(opcoesTecnico, produtosSKA[p].tecnicos, tecnicoInput);
});
tecnicoInput.addEventListener("input", ()=>{
  const p = produtoInput.value;
  if(produtosSKA[p]) mostrarOpcoes(opcoesTecnico, produtosSKA[p].tecnicos, tecnicoInput);
});

// Módulo
moduloInput.addEventListener("focus", ()=> mostrarOpcoes(opcoesModulo, modulos, moduloInput));
moduloInput.addEventListener("input", ()=> mostrarOpcoes(opcoesModulo, modulos, moduloInput));

// Período
periodoInput.addEventListener("focus", ()=> mostrarOpcoes(opcoesPeriodo, periodos, periodoInput));
periodoInput.addEventListener("input", ()=> mostrarOpcoes(opcoesPeriodo, periodos, periodoInput));

// Fechar fora
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
      if(datasTemp.includes(d)) datasTemp = datasTemp.filter(x=>x!==d);
      else datasTemp.push(d);
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

  const periodoDigitado = periodoInput.value;
  let horario = "";
  const p = normalizar(periodoDigitado);

  if(p.includes("manh")) horario = "08:00 às 12:00";
  else if(p.includes("tard")) horario = "13:00 às 17:00";
  else if(p.includes("integ")) horario = "08:00 às 17:00";
  else if(p.includes("noit")) horario = "";

  datasTemp.forEach(d=>{
    datasConfirmadas.push({
      dia:d,
      mes:dataAtual.getMonth()+1,
      ano:dataAtual.getFullYear(),
      servico:servicoInput.value,
      modulo:moduloInput.value,
      periodoTexto:periodoDigitado,
      horario:horario,
      tecnico:tecnicoInput.value,
      lote:loteAtual
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
    const chave = `${d.servico}_${d.modulo}_${d.periodoTexto}_${d.horario}_${d.tecnico}`;
    if(!grupos[chave]) grupos[chave]=[];
    grupos[chave].push(d);
  });

  for(let chave in grupos){
    const grupo = grupos[chave];
    const ref = grupo[0];
    const datas = grupo.map(d=>`${d.dia} de ${meses[d.mes - 1]}`).join(", ");

    const texto =
`────────────────────────────
📅 Datas: ${datas}
🛠 Serviço: ${ref.servico}
👨‍🔧 Técnico: ${ref.tecnico}
💻 Módulo: ${ref.modulo}
⏰ Horário: ${ref.horario}
🕒 Período: ${ref.periodoTexto}
📍 Local: SKA
────────────────────────────`;

    const wrapper = document.createElement("div");
    wrapper.className = "table";

    const pre = document.createElement("pre");
    pre.textContent = texto;

    const btn = document.createElement("button");
    btn.textContent = "📋 Copiar";
    btn.onclick = () => {
      navigator.clipboard.writeText(texto);
      btn.textContent = "✅ Copiado!";
      setTimeout(()=>btn.textContent="📋 Copiar",1500);
    };

    wrapper.appendChild(pre);
    wrapper.appendChild(btn);
    container.appendChild(wrapper);
  }
}

function limparCampos(){
  produtoInput.value = "";
  servicoInput.value = "";
  moduloInput.value = "";
  periodoInput.value = "";
  tecnicoInput.value = "";
}