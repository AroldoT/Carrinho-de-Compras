// Função para buscar os produtos da API
async function fetchProdutos() {
  try {
    const res = await fetch('https://fakestoreapi.com/products?limit=10');
    const produtos = await res.json(); // Espera a resposta ser convertida para JSON
    return produtos; // Retorna os produtos
  } catch (erro) {
    console.log('Erro ao buscar produtos: ', erro); // Captura e exibe o erro corretamente
  }
}

const listaP = [];

function addLista(produtos) {
  return new Promise((resolve, reject) => {
    try {
      listaP.push(...produtos); // Adiciona todos os produtos ao array listaP
      console.log('Lista atualizada:', listaP); // Exibe a lista no console
      resolve(listaP); // Resolve a Promise com a lista atualizada
    } catch (erro) {
      console.log('Erro ao adicionar à lista:', erro);
      reject(erro); // Rejeita a Promise em caso de erro
    }
  });
}

async function exibir(lista) {
  // Exibe o título de cada produto da lista
  lista.forEach(produto => {
    //console.log(produto.title); // Acessa e exibe o título de cada produto
    try {
      const section = document.querySelector('section')
      const card = document.createElement('div')
      let estoque = true
      if (produto.rating.count <= 0) {
        estoque = false
      }
      if (estoque) {
        estoque = 'Item Disponível'
      }
      else {
        estoque = 'Item em falta'
      }
      card.innerHTML = `
      <div id="card${produto.id}">
        <div id="hCard${produto.id}">
          <h2>${produto.title}</h2>
        </div>
        <div id="mCard${produto.id}">
          <img src="${produto.image}" style="width: 100px; height: 100px;">
          <p>${produto.description}</p>
          <p>${estoque}</p>
        </div>
        <div id="fCard${produto.id}">
          <p>${produto.price}</p>
        </div>
        <button id="btnCard${produto.id}">Comprar</button>
      </div>`
      section.appendChild(card)
    }
    catch (erro) {
      console.log('Erro ao buscar produtos: ', erro);
    }
  });
}

async function main() {
  const produtos = await fetchProdutos(); // Aguarda a busca dos produtos
  await addLista(produtos); // Adiciona os produtos à listaP
  await exibir(listaP); // Exibe a lista de produtos
}

main(); // Executa a função principal
const carrinho = [];

  const card1 = document.getElementById('btnCard1');
  const card2 = document.getElementById('btnCard2');
  const card3 = document.getElementById('btnCard3');
  const card4 = document.getElementById('btnCard4');
  const card5 = document.getElementById('btnCard5');
  const card6 = document.getElementById('btnCard6');
  const card7 = document.getElementById('btnCard7');
  const card8 = document.getElementById('btnCard8');
  const card9 = document.getElementById('btnCard9');
  const card10 = document.getElementById('btnCard10');

card1.addEventListener('click', (e) => {
  e.preventDefault()
  carrinho.push(produto.title)
  carrinho.push(produto.price)
  console.log(carrinho)
})
