const largura = prompt("Informe o valor da largura da base: ")
const comprimento = prompt ("Informe o valor do comprimento da base: ")
const andares = prompt ("Quantos andares acima da fundação terá sua base? ")
const plataforma = largura*comprimento;
const fundacao = largura*comprimento;
const parede = (largura*2)+(comprimento*2);
const pecas = ((plataforma + parede + 1)*andares)+fundacao;

alert(
    "Resultado: \n" + 
    "\n Largura: " + largura +
    "\n Comprimento: "+ comprimento +
    "\n\n Plataformas: "+ plataforma*andares +
    "\n Paredes 3x4: "+ parede*andares +
    "\n Fundação: "+ fundacao +
    "\n\n Peças utilizadas: "+ pecas + " considerando 1 porta por andar"
)