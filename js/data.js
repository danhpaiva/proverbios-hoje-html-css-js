/* Dados de Provérbios: um versículo de destaque e um comentário reformado por capítulo (1 a 31). */
const PROVERBIOS_DATA = [
  {
    capitulo: 1,
    versiculo: "1:7",
    texto: "O temor do SENHOR é o princípio da ciência; os loucos desprezam a sabedoria e a instrução.",
    comentario: {
      autor: "Matthew Henry",
      texto: "Henry observa que a sabedoria proposta neste livro não começa na razão humana, mas na reverência a Deus. Conhecer fatos sem temer ao Senhor é apenas erudição vazia; o verdadeiro entendimento nasce de um coração rendido à autoridade divina. Desprezar essa instrução, portanto, não é sinal de independência, mas de insensatez espiritual."
    }
  },
  {
    capitulo: 2,
    versiculo: "2:6",
    texto: "Porque o SENHOR dá a sabedoria; da sua boca é que vem o conhecimento e o entendimento.",
    comentario: {
      autor: "Charles Bridges",
      texto: "Bridges destaca que a sabedoria bíblica é dom, não conquista: ela desce de Deus como dádiva de graça a quem a busca com clamor sincero e diligência de quem cava por tesouro. Isso corta pela raiz todo orgulho intelectual, pois nem o esforço humano mais dedicado produz discernimento sem a iniciativa soberana de Deus."
    }
  },
  {
    capitulo: 3,
    versiculo: "3:5-6",
    texto: "Confia no SENHOR de todo o teu coração, e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
    comentario: {
      autor: "John Gill",
      texto: "Gill lê esta confiança como algo que abrange todo o coração, sem reservas, contrastando a segurança de apoiar-se no Senhor com a instabilidade de confiar na própria razão caída. Reconhecer a Deus em todos os caminhos é submeter também as decisões mais comuns da vida à sua providência, na certeza de que é ele quem endireita a vereda do crente."
    }
  },
  {
    capitulo: 4,
    versiculo: "4:23",
    texto: "Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as saídas da vida.",
    comentario: {
      autor: "Matthew Henry",
      texto: "Para Henry, o coração é a fonte de onde brota toda a conduta humana; se a nascente é guardada com vigilância, a vida que dela mana tende à retidão. Esse cuidado não é obra de disciplina externa apenas, mas fruto da instrução paterna e da graça recebida, que moldam os afetos antes de moldar as ações."
    }
  },
  {
    capitulo: 5,
    versiculo: "5:21",
    texto: "Porque os caminhos do homem estão diante dos olhos do SENHOR, e ele pesa todas as suas veredas.",
    comentario: {
      autor: "Charles Bridges",
      texto: "Bridges vincula este capítulo, que adverte contra a sedução da adúltera, à onisciência de Deus como o maior freio contra o pecado secreto. Nenhum caminho escondido escapa ao olhar do Senhor, que pesa não apenas os atos, mas as intenções; por isso a fidelidade conjugal e a pureza de vida são, no fundo, questões de reverência a quem tudo vê."
    }
  },
  {
    capitulo: 6,
    versiculo: "6:6",
    texto: "Vai-te à formiga, ó preguiçoso; considera os seus caminhos, e sê sábio.",
    comentario: {
      autor: "John Gill",
      texto: "Gill nota que Deus usa a ordem da própria criação para repreender a preguiça humana: a formiga, sem chefe nem juiz, cumpre sua tarefa por instinto dado pelo Criador. Se a criatura irracional glorifica a Deus com diligência, quanto mais o homem, dotado de razão e revelação, deveria ordenar sua vida com previdência e trabalho."
    }
  },
  {
    capitulo: 7,
    versiculo: "7:1",
    texto: "Filho meu, guarda as minhas palavras, e esconde dentro de ti os meus mandamentos.",
    comentario: {
      autor: "Matthew Henry",
      texto: "Henry vê nesta guarda da Palavra a defesa preventiva contra a sedução narrada no restante do capítulo. Esconder o mandamento no íntimo é mais do que memorizar: é deixar que a Palavra habite o coração como sentinela, pronta a advertir antes que o pé se desvie para o caminho da destruição."
    }
  },
  {
    capitulo: 8,
    versiculo: "8:11",
    texto: "Porque melhor é a sabedoria do que os rubis; e de tudo o que se deseja nada se pode comparar a ela.",
    comentario: {
      autor: "Charles Bridges",
      texto: "Bridges observa que a Sabedoria, personificada neste capítulo como estando ao lado de Deus desde a eternidade, aponta para além de si mesma até Cristo, em quem estão escondidos todos os tesouros da sabedoria e do conhecimento. Por isso nenhum bem criado, por precioso que seja, rivaliza com o valor de conhecer a Deus."
    }
  },
  {
    capitulo: 9,
    versiculo: "9:10",
    texto: "O temor do SENHOR é o princípio da sabedoria, e o conhecimento do Santo é o entendimento.",
    comentario: {
      autor: "John Gill",
      texto: "Gill lembra que este versículo ecoa o tema de abertura do livro, fechando o primeiro grande bloco de Provérbios com o convite da Sabedoria à sua mesa, em contraste com o convite da insensatez. Aceitar esse convite é reconhecer a santidade de Deus como fundamento de todo entendimento verdadeiro, não um acréscimo posterior ao conhecimento."
    }
  },
  {
    capitulo: 10,
    versiculo: "10:12",
    texto: "O ódio excita contendas, mas o amor cobre todas as transgressões.",
    comentario: {
      autor: "Matthew Henry",
      texto: "Henry contrasta o efeito multiplicador do ódio, que reaviva ofensas antigas, com o efeito cobridor do amor, que perdoa em vez de expor. Essa graça de cobrir a falta do próximo, longe de ser conivência com o pecado, reflete o próprio caráter de Deus, que não trata os seus segundo o rigor que mereceriam."
    }
  },
  {
    capitulo: 11,
    versiculo: "11:2",
    texto: "Vindo a soberba, virá também a confusão; mas com os humildes está a sabedoria.",
    comentario: {
      autor: "Charles Bridges",
      texto: "Bridges vê na soberba a raiz de quase toda queda registrada nas Escrituras, pois ela cega o homem para sua real condição diante de Deus. A humildade, ao contrário, prepara o terreno do coração para receber sabedoria, já que reconhece a dependência total da graça e da revelação divina."
    }
  },
  {
    capitulo: 12,
    versiculo: "12:15",
    texto: "O caminho do tolo é reto aos seus olhos, mas o que dá ouvidos ao conselho é sábio.",
    comentario: {
      autor: "John Gill",
      texto: "Gill aponta que a autossuficiência do insensato é justamente o que o mantém preso ao erro, pois quem se julga sempre certo fecha os ouvidos à correção. A disposição de ouvir conselho, por outro lado, é sinal de graça operando no coração, dobrando o orgulho natural para receber instrução."
    }
  },
  {
    capitulo: 13,
    versiculo: "13:20",
    texto: "O que anda com os sábios ficará sábio, mas o companheiro dos tolos será afligido.",
    comentario: {
      autor: "Matthew Henry",
      texto: "Henry sublinha o poder formativo da companhia: assim como o ferro se molda pelo contato, o caráter se molda pela convivência. Buscar a comunhão de quem teme a Deus não é mero conselho social, mas meio de graça pelo qual o crente é edificado ou, na falta dele, arrastado à ruína."
    }
  },
  {
    capitulo: 14,
    versiculo: "14:27",
    texto: "O temor do SENHOR é uma fonte de vida, para se desviarem dos laços da morte.",
    comentario: {
      autor: "Charles Bridges",
      texto: "Bridges descreve o temor do Senhor não como terror servil, mas como reverência filial que brota de conhecer a Deus e mantém o crente afastado das armadilhas do pecado. Essa fonte nunca seca, pois se renova continuamente na comunhão com aquele que é a própria vida."
    }
  },
  {
    capitulo: 15,
    versiculo: "15:3",
    texto: "Os olhos do SENHOR estão em todo lugar, contemplando os maus e os bons.",
    comentario: {
      autor: "John Gill",
      texto: "Gill relaciona esta onipresença vigilante de Deus tanto ao consolo dos justos, que sabem que nenhuma aflição lhes escapa ao cuidado divino, quanto à advertência aos ímpios, que não encontrarão esconderijo para seus atos. A soberania de Deus sobre tudo o que é visto sustenta toda a ética prática do capítulo."
    }
  },
  {
    capitulo: 16,
    versiculo: "16:9",
    texto: "O coração do homem considera o seu caminho, mas o SENHOR lhe dirige os passos.",
    comentario: {
      autor: "Matthew Henry",
      texto: "Henry vê aqui a harmonia entre a responsabilidade humana de planejar e a soberania divina de dirigir, sem que uma anule a outra. O crente não é dispensado de pensar e agir com sabedoria, mas aprende a fazê-lo com humildade, sabendo que o resultado final está nas mãos de um Deus que governa todos os passos."
    }
  },
  {
    capitulo: 17,
    versiculo: "17:22",
    texto: "O coração alegre serve de bom remédio, mas o espírito abatido seca os ossos.",
    comentario: {
      autor: "Charles Bridges",
      texto: "Bridges nota que a alegria de que fala o texto não é otimismo natural, mas fruto de uma consciência em paz com Deus, o que produz efeitos concretos até sobre o corpo. O espírito abatido pelo pecado não confessado ou pela descrença, ao contrário, mina as forças e antecipa uma espécie de morte em vida."
    }
  },
  {
    capitulo: 18,
    versiculo: "18:10",
    texto: "Torre forte é o nome do SENHOR; a ele correrá o justo, e estará em alto refúgio.",
    comentario: {
      autor: "John Gill",
      texto: "Gill entende o nome do Senhor aqui como tudo o que Deus revelou de si mesmo em seus atributos e obras, um refúgio ao qual o justo recorre não por mérito próprio, mas pela confiança no caráter revelado de Deus. Correr para essa torre é o oposto de confiar nas próprias riquezas, mencionadas logo em seguida no mesmo capítulo."
    }
  },
  {
    capitulo: 19,
    versiculo: "19:21",
    texto: "Muitos propósitos há no coração do homem, mas o conselho do SENHOR permanecerá.",
    comentario: {
      autor: "Matthew Henry",
      texto: "Henry contrasta a multiplicidade e instabilidade dos planos humanos com a unidade e firmeza do decreto de Deus, que jamais falha nem é surpreendido. Essa verdade não paralisa o planejamento humano, mas o coloca em seu devido lugar, subordinado à vontade soberana que sempre prevalece."
    }
  },
  {
    capitulo: 20,
    versiculo: "20:24",
    texto: "Os passos do homem são dirigidos pelo SENHOR; como, pois, entenderá o homem o seu caminho?",
    comentario: {
      autor: "Charles Bridges",
      texto: "Bridges lê esta pergunta retórica como convite à humildade diante do mistério da providência: se até os passos são dirigidos por Deus, o homem faz bem em abandonar a pretensão de compreender plenamente seu próprio caminho e aprender antes a confiar em quem o traça."
    }
  },
  {
    capitulo: 21,
    versiculo: "21:2",
    texto: "Todo caminho do homem é reto aos seus olhos, mas o SENHOR pesa os corações.",
    comentario: {
      autor: "John Gill",
      texto: "Gill destaca a diferença entre o julgamento humano, sempre inclinado a se justificar, e o julgamento de Deus, que examina motivos ocultos aos próprios olhos do homem. Essa balança divina desmascara a autoilusão moral e chama o crente a buscar não a aprovação própria, mas a de Deus."
    }
  },
  {
    capitulo: 22,
    versiculo: "22:6",
    texto: "Ensina a criança no caminho em que deve andar, e, ainda quando for velho, não se desviará dele.",
    comentario: {
      autor: "Matthew Henry",
      texto: "Henry entende este princípio como promessa geral de sabedoria, não garantia mecânica e sem exceções: a instrução consistente na infância planta uma semente que, sob a bênção de Deus, tende a frutificar ao longo da vida. É um chamado sério à responsabilidade dos pais como primeiros mestres de fé."
    }
  },
  {
    capitulo: 23,
    versiculo: "23:26",
    texto: "Dá-me, filho meu, o teu coração, e os teus olhos observem os meus caminhos.",
    comentario: {
      autor: "Charles Bridges",
      texto: "Bridges observa que o pedido não é por mera obediência externa, mas pelo coração inteiro, único terreno em que a instrução pode realmente enraizar. Observar os caminhos do pai pressupõe uma relação de confiança e afeto, imagem do relacionamento que Deus deseja com seus filhos."
    }
  },
  {
    capitulo: 24,
    versiculo: "24:16",
    texto: "Porque sete vezes cai o justo, e se levanta; mas os ímpios são derrubados pela calamidade.",
    comentario: {
      autor: "John Gill",
      texto: "Gill esclarece que a queda do justo aqui não é queda em pecado habitual, mas as aflições e reveses comuns à vida, dos quais ele sempre se levanta pela graça sustentadora de Deus. Os ímpios, ao contrário, caem sem essa graça que os reergue, e por isso a calamidade os derruba de modo definitivo."
    }
  },
  {
    capitulo: 25,
    versiculo: "25:11",
    texto: "Como maçãs de ouro em salvas de prata, assim é a palavra dita a seu tempo.",
    comentario: {
      autor: "Matthew Henry",
      texto: "Henry aprecia nesta imagem a beleza da palavra oportuna, que une conteúdo valioso e ocasião adequada, como o ouro emoldurado pela prata. A sabedoria bíblica não se limita a dizer o que é verdadeiro, mas discerne também o momento certo de dizê-lo, algo que exige domínio próprio e discernimento espiritual."
    }
  },
  {
    capitulo: 26,
    versiculo: "26:12",
    texto: "Vendo tu um homem sábio a seus próprios olhos, mais esperança há do tolo do que dele.",
    comentario: {
      autor: "Charles Bridges",
      texto: "Bridges considera esta uma das advertências mais severas do livro: a autossuficiência espiritual fecha a porta que a própria insensatez reconhecida ainda deixa entreaberta. Enquanto o tolo humilde pode ser ensinado, o sábio a seus próprios olhos já se julga além de qualquer correção."
    }
  },
  {
    capitulo: 27,
    versiculo: "27:1",
    texto: "Não te glories do dia de amanhã, porque não sabes o que produzirá o dia.",
    comentario: {
      autor: "John Gill",
      texto: "Gill vincula esta advertência à soberania de Deus sobre o futuro, que pertence só a ele: planejar é sábio, mas jactar-se do amanhã como se estivesse garantido é usurpar um conhecimento que só Deus possui. A postura correta é a submissão à providência, não a presunção sobre o tempo."
    }
  },
  {
    capitulo: 28,
    versiculo: "28:13",
    texto: "O que encobre as suas transgressões nunca prosperará, mas o que as confessa e deixa alcançará misericórdia.",
    comentario: {
      autor: "Matthew Henry",
      texto: "Henry vê aqui, em miniatura, o próprio evangelho: o pecado escondido cresce e amargura a alma, enquanto a confissão sincera, unida ao abandono do pecado, abre caminho para a misericórdia de Deus. Esconder é a estratégia natural da culpa; confessar é a resposta que a graça ensina."
    }
  },
  {
    capitulo: 29,
    versiculo: "29:18",
    texto: "Não havendo profecia, o povo perece; mas o que guarda a lei esse é bem-aventurado.",
    comentario: {
      autor: "Charles Bridges",
      texto: "Bridges entende a falta de profecia como a ausência da Palavra de Deus proclamada com clareza, o que deixa o povo sem freio e sem rumo. Guardar a lei, em contraste, é a marca de quem recebeu essa revelação com fé, e nela encontra a verdadeira bem-aventurança que o mundo não pode oferecer."
    }
  },
  {
    capitulo: 30,
    versiculo: "30:5",
    texto: "Toda a palavra de Deus é pura; escudo é para os que confiam nele.",
    comentario: {
      autor: "John Gill",
      texto: "Gill destaca que Agur, autor deste capítulo, começa confessando sua própria ignorância diante de Deus antes de exaltar a pureza absoluta da sua Palavra. Essa Palavra provada e sem escória serve de escudo real a quem nela se refugia, ainda que o entendimento humano permaneça limitado diante dos mistérios de Deus."
    }
  },
  {
    capitulo: 31,
    versiculo: "31:30",
    texto: "Enganosa é a graça e vã a formosura, mas a mulher que teme ao SENHOR essa será louvada.",
    comentario: {
      autor: "Matthew Henry",
      texto: "Henry lê o retrato da mulher virtuosa que encerra o livro como resumo prático de tudo o que Provérbios ensinou sobre sabedoria: não aparência ou charme passageiro, mas um caráter formado pelo temor do Senhor, que se expressa em trabalho diligente, generosidade e domínio próprio. É a sabedoria do livro inteiro encarnada em uma vida."
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = PROVERBIOS_DATA;
}
