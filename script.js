// ================= DADOS =================
const produtosSKA = {
  "SolidWorks": {
    servicos: ["Treinamento","Pré-OS em SOLIDWORKS","Consultoria", "Atualização de Versão"],
    tecnicos: ["Augusto Chiesa de Mattos", "Bruno Moura Ferri", "Gabriel Bueno", "José Vitor Becker de Souza", "Nathan Rodrigues Kirsch", "Thiago Paes de Farias"]
  },
  "Ares": {
    servicos: ["Treinamento em Ares","Pré-OS em Ares", "Consultoria em Ares"],
    tecnicos: ["Pedro Henrique Schneider Pereira"]
  },
 // "Edgecam": {
 //   servicos: []
//  },
  "LANTEK":{
    servicos: ["Atualização de versão - LANTEK"],
    tecnicos: ["Petterson Ducato", "Diego Gomes de Lima", "Fernando de Freitas Falk", "Gabriel Alves", "Arthur Volpato", "Leonides Milnitz Júnior", "Timoti Milan", "Alex James de Lima", "Pablo Fernandez", "Rodrigo Ramos de Sousa", "Mateus Barbosa"]
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
const deslocamentoInput = document.getElementById("deslocamento");

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
let acaoAtual = 0;

const daysContainer = document.getElementById("days");
const mesAnoSpan = document.getElementById("mesAno");

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];


// ================= CORES =================

function corDoLote(lote){

  const cores = [
    "#049AFB",
    "#377faf",
    "#014a7a",
    "#FFBC00"
  ];

  return cores[(lote - 1) % cores.length];

}


// ================= CRIAR DIA =================

function criarDiaCalendario(data){

  const btn = document.createElement("button");

  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();


  btn.textContent = dia;


  // =====================================================
  // EVENTOS CONFIRMADOS
  // =====================================================

  const confirmados = datasConfirmadas.filter(x =>
    x.dia === dia &&
    x.mes === mes &&
    x.ano === ano
  );


  // =====================================================
  // UMA ATIVIDADE
  // =====================================================

  if(confirmados.length === 1){

    const evento = confirmados[0];


    if(evento.deslocamento){

      btn.classList.add("deslocamento");

    }else{

      btn.style.background =
        corDoLote(evento.lote);

      btn.style.color = "#fff";

    }

  }


  // =====================================================
  // DUAS ATIVIDADES
  // =====================================================

  if(confirmados.length >= 2){

    const deslocamento =
      confirmados.find(x => x.deslocamento);

    const servico =
      confirmados.find(x => !x.deslocamento);


    if(deslocamento && servico){

      const periodoDeslocamento =
        normalizar(deslocamento.periodoTexto);

      const periodoServico =
        normalizar(servico.periodoTexto);


      const deslocamentoManha =
        periodoDeslocamento.includes("manh");

      const servicoManha =
        periodoServico.includes("manh");


      const corServico =
        corDoLote(servico.lote);


      // Deslocamento manhã / serviço tarde

      if(
        deslocamentoManha &&
        !servicoManha
      ){

        btn.style.background =
          `linear-gradient(
            to bottom,
            #363E4A 0%,
            #363E4A 50%,
            ${corServico} 50%,
            ${corServico} 100%
          )`;

        btn.style.color = "#fff";

      }


      // Serviço manhã / deslocamento tarde

      else if(
        servicoManha &&
        !deslocamentoManha
      ){

        btn.style.background =
          `linear-gradient(
            to bottom,
            ${corServico} 0%,
            ${corServico} 50%,
            #363E4A 50%,
            #363E4A 100%
          )`;

        btn.style.color = "#fff";

      }

    }

  }


  // =====================================================
  // SELEÇÃO TEMPORÁRIA
  // =====================================================

  const selecionado =
    datasTemp.some(x =>
      x.dia === dia &&
      x.mes === mes &&
      x.ano === ano
    );


  if(selecionado){

    btn.classList.add("active");

  }


  // =====================================================
  // CLIQUE
  // =====================================================

  btn.onclick = () => {

    const indice =
      datasTemp.findIndex(x =>
        x.dia === dia &&
        x.mes === mes &&
        x.ano === ano
      );


    if(indice !== -1){

      datasTemp.splice(indice, 1);

    }else{

      datasTemp.push({
        dia: dia,
        mes: mes,
        ano: ano
      });

    }


    renderCalendarioContinuo();

  };


  return btn;

}


// ================= CRIAR MÊS =================

function criarMes(ano, mes){

  const wrapper = document.createElement("div");

  wrapper.className = "mes-calendario";


  // =====================================================
  // TÍTULO DO MÊS
  // =====================================================

  const titulo = document.createElement("div");

  titulo.className = "titulo-mes";

  titulo.textContent =
    `${meses[mes]} ${ano}`;


  wrapper.appendChild(titulo);


  // =====================================================
  // CABEÇALHO DOS DIAS DA SEMANA
  // =====================================================

  const semana = document.createElement("div");

  semana.className = "dias-semana";


  const nomesDias = [
    "Dom",
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sáb"
  ];


  nomesDias.forEach(nome => {

    const span = document.createElement("span");

    span.textContent = nome;

    semana.appendChild(span);

  });


  wrapper.appendChild(semana);


  // =====================================================
  // GRID
  // =====================================================

  const grid = document.createElement("div");

  grid.className = "grid-mes";


  const primeiroDia =
    new Date(ano, mes, 1).getDay();


  const totalDias =
    new Date(ano, mes + 1, 0).getDate();


  // =====================================================
  // ESPAÇOS ANTES DO DIA 1
  // =====================================================

  for(let i = 0; i < primeiroDia; i++){

    const vazio =
      document.createElement("div");

    vazio.className = "dia-vazio";

    grid.appendChild(vazio);

  }


  // =====================================================
  // DIAS
  // =====================================================

  for(let d = 1; d <= totalDias; d++){

    const data =
      new Date(ano, mes, d);

    grid.appendChild(
      criarDiaCalendario(data)
    );

  }


  wrapper.appendChild(grid);

  return wrapper;

}


// ================= RENDER CONTÍNUO =================
function atualizarMesVisivel(){

  const mesesRenderizados =
    document.querySelectorAll(".mes-calendario");

  if(!mesesRenderizados.length){
    return;
  }

  const topoCalendario =
    daysContainer.getBoundingClientRect().top;

  let mesMaisProximo = null;
  let menorDistancia = Infinity;

  mesesRenderizados.forEach(mes => {

    const rect = mes.getBoundingClientRect();

    const distancia =
      Math.abs(rect.top - topoCalendario);

    if(distancia < menorDistancia){

      menorDistancia = distancia;
      mesMaisProximo = mes;

    }

  });

  if(mesMaisProximo){

    const ano =
      Number(mesMaisProximo.dataset.ano);

    const mes =
      Number(mesMaisProximo.dataset.mes);

    mesAnoSpan.textContent =
      `${meses[mes]} ${ano}`;

  }

}

function renderCalendarioContinuo(){

  daysContainer.innerHTML = "";

  const anoAtual = dataAtual.getFullYear();
  const mesAtual = dataAtual.getMonth();

  // Guarda referências dos meses
  window.mesesRenderizados = [];

  // Mostra 12 meses
  for(let i = 0; i <= 11; i++){

    const data = new Date(
      anoAtual,
      mesAtual + i,
      1
    );

    const mes = data.getMonth();
    const ano = data.getFullYear();

    const elementoMes = criarMes(ano, mes);

    // Guarda qual mês é esse
    elementoMes.dataset.ano = ano;
    elementoMes.dataset.mes = mes;

    window.mesesRenderizados.push(elementoMes);

    daysContainer.appendChild(elementoMes);
  }

  atualizarMesVisivel();

}

daysContainer.addEventListener(
  "scroll",
  atualizarMesVisivel
);


// ================= MUDAR MÊS =================
// Mantemos caso seus botões de anterior/próximo
// ainda existam no HTML.

function mudarMes(delta){

  const mesAtual =
    dataAtual.getMonth();

  const anoAtual =
    dataAtual.getFullYear();

  const novaData =
    new Date(
      anoAtual,
      mesAtual + delta,
      1
    );

  dataAtual = novaData;

  // Procura o mês desejado
  const mesAlvo =
    document.querySelector(
      `.mes-calendario[data-ano="${novaData.getFullYear()}"][data-mes="${novaData.getMonth()}"]`
    );

  if(mesAlvo){

    mesAlvo.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }else{

    // Se o mês não estiver entre os meses carregados,
    // recria a janela de meses.
    renderCalendarioContinuo();

  }

  mesAnoSpan.textContent =
    `${meses[novaData.getMonth()]} ${novaData.getFullYear()}`;

}


// ================= INICIALIZAÇÃO =================

renderCalendarioContinuo();

function gerar(){

  if(!datasTemp.length || !tecnicoInput.value){
    alert("Selecione dias e técnico");
    return;
  }

  // Cada clique em "Gerar" é uma nova ação
  acaoAtual++;

  // Só serviços recebem uma nova cor
  if(!deslocamentoInput.checked){
    loteAtual++;
  }

  const periodoDigitado = periodoInput.value;
  const p = normalizar(periodoDigitado);

  let horario = "";

  if(p.includes("manh")){
    horario = "08:00 as 12:00";
  }
  else if(p.includes("tard")){
    horario = "13:00 as 17:00";
  }
  else if(p.includes("integ")){
    horario = "08:00 as 17:00";
  }
  else if(p.includes("noit")){
    horario = "";
  }


  // =====================================================
  // IMPEDIR SERVIÇO NO MESMO PERÍODO DO DESLOCAMENTO
  // =====================================================

  if(!deslocamentoInput.checked){

    for(const data of datasTemp){

      const deslocamentoExistente = datasConfirmadas.find(x =>
        x.dia === data.dia &&
        x.mes === data.mes &&
        x.ano === data.ano &&
        x.deslocamento &&
        x.tecnico === tecnicoInput.value
      );

      if(!deslocamentoExistente){
        continue;
      }

      const periodoDeslocamento =
        normalizar(deslocamentoExistente.periodoTexto);


      // ---------------------------------------------
      // Deslocamento integral
      // ---------------------------------------------

      if(periodoDeslocamento.includes("integ")){

        alert(
          `O dia ${data.dia} já possui deslocamento durante todo o dia.`
        );

        acaoAtual--;

        if(!deslocamentoInput.checked){
          loteAtual--;
        }

        return;
      }


      // ---------------------------------------------
      // Deslocamento manhã + serviço manhã
      // ---------------------------------------------

      if(
        periodoDeslocamento.includes("manh") &&
        p.includes("manh")
      ){

        alert(
          `O dia ${data.dia} já possui deslocamento pela manhã.`
        );

        acaoAtual--;

        if(!deslocamentoInput.checked){
          loteAtual--;
        }

        return;
      }


      // ---------------------------------------------
      // Deslocamento tarde + serviço tarde
      // ---------------------------------------------

      if(
        periodoDeslocamento.includes("tard") &&
        p.includes("tard")
      ){

        alert(
          `O dia ${data.dia} já possui deslocamento à tarde.`
        );

        acaoAtual--;

        if(!deslocamentoInput.checked){
          loteAtual--;
        }

        return;
      }

    }

  }


  // =====================================================
  // CRIAR EVENTOS
  // =====================================================

  datasTemp.forEach(data => {

    // IMPORTANTE:
    // usa a data realmente selecionada,
    // e não o mês que está atualmente aberto
    const d = data.dia;
    const mes = data.mes;
    const ano = data.ano;


    // =====================================================
    // SERVIÇO INTEGRAL + DESLOCAMENTO EXISTENTE
    // =====================================================

    if(
      !deslocamentoInput.checked &&
      p.includes("integ")
    ){

      const deslocamentoExistente = datasConfirmadas.find(x =>
        x.dia === d &&
        x.mes === mes &&
        x.ano === ano &&
        x.deslocamento &&
        x.tecnico === tecnicoInput.value
      );


      if(deslocamentoExistente){

        const periodoDeslocamento =
          normalizar(deslocamentoExistente.periodoTexto);


        // ---------------------------------------------
        // Deslocamento de manhã
        // Serviço fica à tarde
        // ---------------------------------------------

        if(periodoDeslocamento.includes("manh")){

          datasConfirmadas.push({

            dia: d,
            mes: mes,
            ano: ano,

            servico: servicoInput.value,
            modulo: moduloInput.value,

            periodoTexto: "Tarde",
            horario: "13:00 as 17:00",

            tecnico: tecnicoInput.value,

            deslocamento: false,

            lote: loteAtual,
            acao: acaoAtual

          });

          return;
        }


        // ---------------------------------------------
        // Deslocamento de tarde
        // Serviço fica de manhã
        // ---------------------------------------------

        if(periodoDeslocamento.includes("tard")){

          datasConfirmadas.push({

            dia: d,
            mes: mes,
            ano: ano,

            servico: servicoInput.value,
            modulo: moduloInput.value,

            periodoTexto: "Manhã",
            horario: "08:00 as 12:00",

            tecnico: tecnicoInput.value,

            deslocamento: false,

            lote: loteAtual,
            acao: acaoAtual

          });

          return;
        }

      }

    }


    // =====================================================
    // COMPORTAMENTO NORMAL
    // =====================================================

    datasConfirmadas.push({

      dia: d,
      mes: mes,
      ano: ano,

      servico: deslocamentoInput.checked
        ? "Deslocamento"
        : servicoInput.value,

      modulo: deslocamentoInput.checked
        ? ""
        : moduloInput.value,

      periodoTexto: periodoDigitado,
      horario: horario,

      tecnico: tecnicoInput.value,

      deslocamento: deslocamentoInput.checked,

      lote: loteAtual,
      acao: acaoAtual

    });

  });


  // Limpa seleção temporária
  datasTemp = [];

  // Atualiza calendário
  renderCalendarioContinuo();

  // Atualiza cards
  gerarTexto();

}

function formatarDatas(grupo) {

  // Ordena as datas cronologicamente
  const datas = [...grupo].sort((a, b) => {

    if (a.ano !== b.ano)
      return a.ano - b.ano;

    if (a.mes !== b.mes)
      return a.mes - b.mes;

    return a.dia - b.dia;

  });


  // Agrupa por mês/ano
  const gruposMes = {};

  datas.forEach(data => {

    const chave = `${data.ano}-${data.mes}`;

    if (!gruposMes[chave]) {
      gruposMes[chave] = [];
    }

    gruposMes[chave].push(data);

  });


  const partesMeses = [];


  // Processa cada mês separadamente
  Object.values(gruposMes).forEach(grupoMes => {

    const mes = grupoMes[0].mes;
    const ano = grupoMes[0].ano;

    const dias = grupoMes
      .map(d => d.dia)
      .sort((a, b) => a - b);


    // Detecta sequências
    const sequencias = [];

    let inicio = dias[0];
    let anterior = dias[0];


    for (let i = 1; i <= dias.length; i++) {

      const atual = dias[i];


      if (atual === anterior + 1) {

        anterior = atual;
        continue;

      }


      sequencias.push({
        inicio,
        fim: anterior
      });


      inicio = atual;
      anterior = atual;

    }


    // Transforma as sequências em texto
    const partesDias = sequencias.map(s => {

      if (s.inicio === s.fim) {
        return `${s.inicio}`;
      }

      return `${s.inicio} a ${s.fim}`;

    });


    let textoDias;


    if (partesDias.length === 1) {

      textoDias = partesDias[0];

    } else {

      textoDias =
        `${partesDias.slice(0, -1).join(", ")} e ${partesDias[partesDias.length - 1]}`;

    }


    // Adiciona o mês
    partesMeses.push(
      `${textoDias} de ${meses[mes - 1]}`
    );

  });


  // Junta os meses
  if (partesMeses.length === 1) {

    return partesMeses[0];

  }


  return partesMeses
    .slice(0, -1)
    .join(", ")
    + " e "
    + partesMeses[partesMeses.length - 1];

}

function desfazerUltimaAcao(){

  if(datasConfirmadas.length === 0){
    alert("Não há nenhuma ação para desfazer.");
    return;
  }

  // Descobre a última ação
  const ultimaAcao = Math.max(
    ...datasConfirmadas.map(d => d.acao)
  );

  // Eventos pertencentes à última ação
  const eventosUltimaAcao = datasConfirmadas.filter(
    d => d.acao === ultimaAcao
  );

  // Verifica se a última ação foi um serviço
  const foiServico = eventosUltimaAcao.some(
    d => !d.deslocamento
  );

  // Remove somente a última ação
  datasConfirmadas = datasConfirmadas.filter(
    d => d.acao !== ultimaAcao
  );

  // Se era serviço, devolve o número do lote
  if(foiServico){
    loteAtual--;
  }

  // Atualiza tudo
  renderCalendarioContinuo();
  gerarTexto();
}

function gerarTexto(){

  const container = document.getElementById("tabelas");
  container.innerHTML = "";

  // Separa serviços e deslocamentos
  const servicos = datasConfirmadas.filter(d => !d.deslocamento);
  const deslocamentos = datasConfirmadas.filter(d => d.deslocamento);

  const grupos = {};

  // ================= AGRUPAR SERVIÇOS =================

  servicos.forEach(d => {

    const chave =
      `${d.servico}_${d.modulo}_${d.periodoTexto}_${d.horario}_${d.tecnico}`;

    if(!grupos[chave]){
      grupos[chave] = [];
    }

    grupos[chave].push(d);

  });


  // ================= CRIAR CARDS DOS SERVIÇOS =================

  for(let chave in grupos){

    const grupo = grupos[chave];
    const ref = grupo[0];

    grupo.sort((a,b) => {

      if(a.ano !== b.ano)
        return a.ano - b.ano;

      if(a.mes !== b.mes)
        return a.mes - b.mes;

      return a.dia - b.dia;

    });


    // ================= DESLOCAMENTOS RELACIONADOS =================

    const deslocamentosRelacionados = deslocamentos.filter(deslocamento => {

      return grupo.some(servico =>
        servico.dia === deslocamento.dia &&
        servico.mes === deslocamento.mes &&
        servico.ano === deslocamento.ano &&
        servico.tecnico === deslocamento.tecnico
      );

    });


    const datas = formatarDatas(grupo);


    // ================= TEXTO =================

    let texto = `Dias: ${datas}

Serviço: ${ref.servico}
Técnico: ${ref.tecnico}
Módulo: ${ref.modulo}
Horário: ${ref.horario}`;


    // Adiciona deslocamento ao texto
    if(deslocamentosRelacionados.length){

      const diasDeslocamento =
        formatarDatas(deslocamentosRelacionados);

      const horariosDeslocamento =
        [...new Set(
          deslocamentosRelacionados.map(d => d.horario)
        )].join(" / ");

      texto += `

Deslocamento: ${diasDeslocamento}
Horário deslocamento: ${horariosDeslocamento}`;

    }


    // ================= CARD =================

    const wrapper = document.createElement("div");
    wrapper.className = "table";


    const conteudo = document.createElement("div");

    conteudo.innerHTML = `
      <p><b>Dias:</b> ${datas}</p>

      <p><b>Serviço:</b> ${ref.servico}</p>

      <p><b>Técnico:</b> ${ref.tecnico}</p>

      <p><b>Módulo:</b> ${ref.modulo}</p>

      <p><b>Horário:</b> ${ref.horario}</p>

      ${
        deslocamentosRelacionados.length
        ?
        `
        <p><b>Deslocamento:</b> Sim</p>
        <p><b>Horário deslocamento:</b> ${
          [...new Set(
            deslocamentosRelacionados.map(d => d.horario)
          )].join(" / ")
        }</p>
        `
        :
        ""
      }
    `;


    const btn = document.createElement("button");

    btn.textContent = "📋 Copiar";

    btn.onclick = () => {

      navigator.clipboard.writeText(texto);

      btn.textContent = "✅ Copiado!";

      setTimeout(() => {
        btn.textContent = "📋 Copiar";
      }, 1500);

    };


    wrapper.appendChild(conteudo);
    wrapper.appendChild(btn);

    container.appendChild(wrapper);

  }


  // ================= DESLOCAMENTOS SEM SERVIÇO =================

  deslocamentos.forEach(deslocamento => {

    const temServico = servicos.some(servico =>

      servico.dia === deslocamento.dia &&
      servico.mes === deslocamento.mes &&
      servico.ano === deslocamento.ano &&
      servico.tecnico === deslocamento.tecnico

    );


    // Se já pertence a um serviço, não cria outro card
    if(temServico){
      return;
    }


    const datas = formatarDatas([deslocamento]);


    const texto = `Dias: ${datas}

Atividade: Deslocamento
Técnico: ${deslocamento.tecnico}
Horário: ${deslocamento.horario}`;


    const wrapper = document.createElement("div");
    wrapper.className = "table";


    const conteudo = document.createElement("div");

    conteudo.innerHTML = `
      <p><b>Dias:</b> ${datas}</p>
      <p><b>Atividade:</b> Deslocamento</p>
      <p><b>Técnico:</b> ${deslocamento.tecnico}</p>
      <p><b>Horário:</b> ${deslocamento.horario}</p>
    `;


    const btn = document.createElement("button");

    btn.textContent = "📋 Copiar";

    btn.onclick = () => {

      navigator.clipboard.writeText(texto);

      btn.textContent = "✅ Copiado!";

      setTimeout(() => {
        btn.textContent = "📋 Copiar";
      }, 1500);

    };


    wrapper.appendChild(conteudo);
    wrapper.appendChild(btn);

    container.appendChild(wrapper);

  });

}

function limparCampos(){
  produtoInput.value = "";
  servicoInput.value = "";
  moduloInput.value = "";
  periodoInput.value = "";
  tecnicoInput.value = "";
}