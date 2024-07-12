#Jogo em modo texto desenvolvido em Node
- Foi desenvolvido com propósito didático, explorando pricipalmente conceitos de orientação a objetos, funcões e demais estruturas elementares
- O diagrama do jogo encontra-se no miro: https://miro.com/app/board/uXjVKz4H_l4=/?share_link_id=960896758957
- Para executar testes, no arquivo index.js da pasta raiz, comentar a chama da função main e descomentar a função testes
- Para vida infinita, no momento de informar o nome do personagem, informe: ITalents

##Estrutura
- O ponto de entrada do jogo é a função main do index.js que está na pasta raiz
- main chama o menuprincipal() que por sua vez poderá chamar o menu secundário de onde realmente o jogo é iniciado: menuSelNivel()
- Dentro de menuSelNivel é chamada função iniciarJogo e o mesmo, chama a função controlaFase, de onde são chamada cada uma das fases e controlado se houve Game Over
- São 4 fase (1 ,2, 3 e Final), além da Introdução, GameOver (caso perca) e Créditos Finais (caso ganhe)
- As fases são todas chamadas de dentro da funcão controlaFases. Seu controle é por meio um loop simples dentro de um array.

  
