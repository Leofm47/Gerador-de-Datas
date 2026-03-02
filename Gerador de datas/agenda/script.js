const diasSemana = ["DOM","SEG","TER","QUA","QUI","SEX","SÁB"];

let servicos = [
  "Implantação de PDM",
  "Treinamento de Usuários",
  "Treinamento de Administrador",
  "Treinamento SolidWorks Electrical",
  "Consultoria"
];

const cores = ["#22c55e","#38bdf8","#facc15","#c084fc","#fb7185","#f97316"];

function gerarTabela(){
  const input = document.getElementById("dataInicio").value;
  if(!input){
    alert("Selecione uma data inicial");
    return;
  }

  let dias = [];
  let data = new Date(input);

// força começar na segunda-feira
const dia = data.getDay(); // 0=DOM, 1=SEG, ..., 6=SAB
const diff = (dia === 0) ? 1 : (8 - dia);
data.setDate(data.getDate() + diff - 1);

  // pega 5 dias úteis
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

  dias.forEach(()=> html += `<td class="vazio">${criarSelect()}</td>`);

  html += `</tr>
    <tr>
      <td>Tarde<br><small>Das 13hs até 17hs</small></td>`;

  dias.forEach(()=> html += `<td class="vazio">${criarSelect()}</td>`);

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

function criarSelect(){
  let s = `<select class="celula" onchange="mudarCor(this)">
    <option value=""> </option>`;
  servicos.forEach((serv,i)=>{
    s += `<option value="${i}">${serv}</option>`;
  });
  s += `</select>`;
  return s;
}

function mudarCor(sel){
  const td = sel.parentElement;
  if(sel.value === ""){
    td.className = "vazio";
    td.style.background = "";
    return;
  }
  td.className = "";
  td.style.background = cores[sel.value % cores.length];
}