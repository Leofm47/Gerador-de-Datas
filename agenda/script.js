  const diasSemana = ["DOM","SEG","TER","QUA","QUI","SEX","SÁB"];

  // CADASTRO DE PRODUTOS E SERVIÇOS
  const produtos = {
    "SW": [
      "Implantação de PDM",
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
      "Habilitação SOLIDWORKS PDM STANDARD - Usuários",
    ],
    "Hexagon": [
      "Pós-processador",
      "Implantação",
      "Treinamento",
      "Customização"
    ],
    "Lantek": [
      "Implantação",
      "Treinamento",
      "Consultoria"
    ]
  };

  const cores = [
    "#93c5fd", // azul claro
    "#86efac", // verde claro
    "#fca5a5", // vermelho claro
    "#fde68a", // amarelo
    "#c4b5fd", // roxo claro
    "#f9a8d4", // rosa
    "#67e8f9", // ciano
    "#fdba74", // laranja
    "#a7f3d0", // verde água
    "#fef08a", // amarelo pastel
    "#d8b4fe", // lilás
    "#fecaca"  // coral
  ];

  function gerarTabela(){
    const input = document.getElementById("dataInicio").value;
    const produto = document.getElementById("produto").value;

    if(!input){
      alert("Selecione uma data inicial");
      return;
    }

    if(!produto){
      alert("Selecione um produto");
      return;
    }

    let dias = [];
    let [ano, mes, diaNum] = input.split("-");
    let data = new Date(ano, mes - 1, diaNum);

    // começa na segunda correta
    const diaSemana = data.getDay(); // 0=DOM
    const diff = (diaSemana === 0) ? 1 : 1 - diaSemana;
    data.setDate(data.getDate() + diff);

    while(dias.length < 5){
      if(data.getDay() >= 1 && data.getDay() <= 5){
        dias.push(new Date(data));
      }
      data.setDate(data.getDate() + 1);
    }

    let html = `<table>
      <caption>${formatarData(dias[0])} até ${formatarData(dias[4])}</caption>
      <tr>
        <th>Período</th>`;

    dias.forEach(d=>{
      html += `<th>${diasSemana[d.getDay()]}<br>
        ${doisDigitos(d.getDate())}/${doisDigitos(d.getMonth()+1)}
      </th>`;
    });

    html += `</tr>
      <tr>
        <td>Manhã<br><small>Das 8hs até 12hs</small></td>`;

    dias.forEach(()=> html += `<td class="vazio">${criarInput(produto)}</td>`);

    html += `</tr>
      <tr>
        <td>Tarde<br><small>Das 13hs até 17hs</small></td>`;

    dias.forEach(()=> html += `<td class="vazio">${criarInput(produto)}</td>`);

    html += `</tr></table>`;

    document.getElementById("tabelas")
      .insertAdjacentHTML("beforeend", html);
  }

  function doisDigitos(n){
    return n < 10 ? "0" + n : n;
  }

  function formatarData(d){
    return `${doisDigitos(d.getDate())}/${doisDigitos(d.getMonth()+1)}/${d.getFullYear()}`;
  }

  function criarInput(produto){
    return `
      <div class="autocomplete-wrapper">
        <textarea class="celula" rows="1"
          oninput="autoResize(this); mostrarSugestoes(this, '${produto}'); mudarCorInput(this)"
          onfocus="mostrarSugestoes(this, '${produto}')"
          onblur="fecharSugestoes(this)"></textarea>
        <div class="sugestoes"></div>
      </div>
    `;
  }
  function mudarCorInput(input){
    const td = input.closest("td");
    const produto = document.getElementById("produto").value;
    const lista = produtos[produto] || [];

    const index = lista.indexOf(input.value);

    // Se estiver na lista
    if(index !== -1){
      td.className = "";
      td.style.background = cores[index % cores.length];
      return;
    }

    // Texto livre
    if(input.value.trim() !== ""){
      const corCustom = corPorTexto(input.value);
      td.className = "";
      td.style.background = corCustom;
      return;
    }

    // Vazio
    td.className = "vazio";
    td.style.background = "";
  }

  function corPorTexto(texto){
    const coresCustom = [
      "#fde68a", // amarelo
      "#bbf7d0", // verde
      "#fecaca", // vermelho
      "#bfdbfe", // azul
      "#ddd6fe", // roxo
      "#fbcfe8", // rosa
      "#99f6e4", // ciano
      "#fed7aa", // laranja
      "#e9d5ff"  // lilás
    ];

    let hash = 0;
    for(let i = 0; i < texto.length; i++){
      hash = texto.charCodeAt(i) + ((hash << 5) - hash);
    }

    return coresCustom[Math.abs(hash) % coresCustom.length];
  }



  function mostrarSugestoes(input, produto){
    const lista = input.nextElementSibling;
    const texto = input.value.toLowerCase();
    lista.innerHTML = "";

    if(!produtos[produto]) return;

    const filtrados = produtos[produto].filter(s =>
      s.toLowerCase().includes(texto)
    );

    filtrados.forEach((serv, index) => {
      const div = document.createElement("div");
      div.className = "sugestao";
      div.textContent = serv;

      div.onclick = () => {
        input.value = serv;
        autoResize(input);   // 🔥 isso evita corte
        lista.innerHTML = "";
        mudarCorInput(input);
      };

      lista.appendChild(div);
    });
  }

  function fecharSugestoes(input){
    setTimeout(() => {
      input.nextElementSibling.innerHTML = "";
    }, 150);
  }

  function pintarCelula(input, index){
    const td = input.closest("td");
    td.className = "";
    td.style.background = cores[index % cores.length];
  }
  function autoResize(textarea){
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}