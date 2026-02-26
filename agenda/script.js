const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho",
               "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

let servicos = [
  "Implantação de PDM",
  "Treinamento de Usuários",
  "Treinamento de Administrador",
  "Treinamento SolidWorks Electrical",
  "Consultoria"
];

const cores = ["#22c55e","#38bdf8","#facc15","#c084fc","#fb7185","#f97316"];

const mesSelect = document.getElementById("mes");
meses.forEach((m,i)=>{
  let o=document.createElement("option");
  o.value=i;
  o.textContent=m;
  mesSelect.appendChild(o);
});

function gerarTabela(){
  const mes = parseInt(mesSelect.value);
  const semana = parseInt(document.getElementById("semana").value);

  const dataBase = new Date(new Date().getFullYear(), mes, 1 + semana*7);
  let dias=[];

  for(let i=0;i<5;i++){
    let d=new Date(dataBase);
    d.setDate(dataBase.getDate()+i);
    dias.push(d);
  }

  let html=`<table>
  <caption>${meses[mes]} - Semana ${semana+1}</caption>
  <tr>
    <th>Período</th>
    <th>SEG</th>
    <th>TER</th>
    <th>QUA</th>
    <th>QUI</th>
    <th>SEX</th>
  </tr>

  <tr>
    <td>Manhã<br><small>Das 8hs até 12hs</small></td>`;

  dias.forEach(()=> {
    html+=`<td class="vazio">${criarSelect()}</td>`;
  });

  html+=`</tr>

  <tr>
    <td>Tarde<br><small>Das 13hs até 17hs</small></td>`;

  dias.forEach(()=> {
    html+=`<td class="vazio">${criarSelect()}</td>`;
  });

  html+=`</tr>
  </table>`;

  document.getElementById("tabelas").innerHTML+=html;
}

function criarSelect(){
  let s=`<select class="celula" onchange="mudarCor(this)">
    <option value=""> </option>`;
  servicos.forEach((serv,i)=>{
    s+=`<option value="${i}">${serv}</option>`;
  });
  s+=`</select>`;
  return s;
}

function mudarCor(sel){
  const td = sel.parentElement;
  if(sel.value===""){
    td.className="vazio";
    td.style.background="";
    return;
  }
  td.className="";
  td.style.background = cores[sel.value % cores.length];
}