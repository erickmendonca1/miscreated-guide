const largura = prompt("Informe o valor da largura da base: ")
const comprimento = prompt ("Informe o valor do comprimento da base: ")
const andares = prompt ("Quantos andares acima da fundação terá sua base? ")
const plataforma = largura*comprimento;
const fundacao = largura*comprimento;
const parede = (largura*2)+(comprimento*2);
const pecas = ((plataforma + parede + 1)*andares)+fundacao;
const log = 2
const wall3x4 = parede*12;
const plataforma3x4 = plataforma*9;


alert(
    "Resultado: \n" + 
    "\n Largura: " + largura +
    "\n Comprimento: "+ comprimento +
    "\n\n Plataformas: "+ plataforma*andares +
    "\n Paredes 3x4: "+ parede*andares +
    "\n Fundação: "+ fundacao +
    "\n\n Peças utilizadas: "+ pecas + " considerando 1 porta por andar" +

    "\n Para construir as paredes você vai precisar de "+ wall3x4 + " lumbers" +
    "\n Para construir as plataformas você vai precisar de "+ plataforma3x4 + " lumbers" +
    "\n Isso equivale a: " + (wall3x4*2 + plataforma3x4*2) + " logs" +
    "\n\n Para pegar essa quantidade de madeira você vai precisar de "+ Math.ceil(((plataforma3x4*2)+(wall3x4*2))/280) +" machados"
)