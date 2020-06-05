// MOCKUP DATABASE
const DB = {
    "animais": [
        {"nome": "Abrigo Animal Joinville",
        "image": "./img/mockup-cards/animais/abrigo-animal-joinville.jpg",
        "texto": "Torne-se padrinho ou madrinha de um cão idoso de nosso abrigo!",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 123, "data": new Date("2020-05-23").getTime(), "tipo": "org"},
        {"nome": "Amiva",
        "image": "./img/mockup-cards/animais/amiva.jpg",
        "texto": "Educar os humanos para posse responsável de animais e promover adoção de cães e gatos.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 43, "data": new Date("2020-04-19").getTime(), "tipo": "org"},
        {"nome": "Arca",
        "image": "./img/mockup-cards/animais/arca-brasil.jpg",
        "texto": "Em 25 anos de atuação, os projetos, eventos e outras ações da ARCA BRASIL, trazem esperança aos direitos dos animais no país.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 235, "data": new Date("2019-03-18").getTime(), "tipo": "org"},
        {"nome": "Arca",
        "image": "./img/mockup-cards/animais/arca-veterinario-solidario.jpg",
        "texto": "Profissionais que contribuem para a redução do sofrimento animal, sempre dentro de suas possibilidades pessoais e operacionais.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 34, "data": new Date("2020-07-07").getTime(), "tipo": "evento"},
        {"nome": "Juntos Pelos Animais",
        "image": "./img/mockup-cards/animais/evento-racao.jpg",
        "texto": "Evento para arrecadação de ração para nosso abrigo. Venham!",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 12, "data": new Date("2020-06-18").getTime(), "tipo": "evento"},
        {"nome": "Defesa Animal",
        "image": "./img/mockup-cards/animais/ong-defesa-animal.png",
        "texto": "Nosso objetivo é proteger animais em situação de vulnerabilidade, vítimas de abandono, atropelamentos e maus tratos.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 124, "data": new Date("2020-01-03").getTime(), "tipo": "org"},
        {"nome": "Prefeitura de São Paulo",
        "image": "./img/mockup-cards/animais/procura-cachorro.jpg", 
        "texto": "Ajuda para encontrar animais desaparecidos",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 68, "data": new Date("2020-04-04").getTime(), "tipo": "org"},
        {"nome": "Edmilson Andrade",
        "image": "./img/mockup-cards/animais/usuario-doacao-caes.jpg",
        "texto": "Estou com alguns cachorros na minha casa que estão procurando por um lar.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 12, "data": new Date("2020-04-06").getTime(), "tipo": "pessoa"},
        {"nome": "WWF",
        "image": "./img/mockup-cards/animais/wwf.jpg",
        "texto": "O WWF trabalha na região amazônica junto com comunidades locais, indígenas e ongs, para contribuir para a proteção da Amazônia.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 234, "data": new Date("2019-10-17").getTime(), "tipo": "org"}
    ],
    "meio-ambiente": [
        {"nome": "Favela Verde",
        "image": "./img/mockup-cards/meio-ambiente/favela-verde.jpg",
        "texto": "Realizamos projetos socioambientais através de participação e inovação social, que buscam a sustentabilidade urbana.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 56, "data": new Date("2019-11-11").getTime(), "tipo": "org"},
        {"nome": "Greenpeace",
        "image": "./img/mockup-cards/meio-ambiente/greenpeace.png",
        "texto": "Chega de destruição da Amazônia! Ajude a frear o desmatamento da nossa floresta.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 432, "data": new Date("2020-10-23").getTime(), "tipo": "org"},
        {"nome": "Observatório do Clima",
        "image": "./img/mockup-cards/meio-ambiente/observatorio-do-clima.png",
        "texto": "O Observatório do Clima reúne entidades da sociedade civil objetivando discutir a questão das mudanças climáticas no Brasil.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 154, "data": new Date("2019-09-17").getTime(), "tipo": "org"},
        {"nome": "SOS Mata Atlântica",
        "image": "./img/mockup-cards/meio-ambiente/sos-mata-atlantica.jpg",
        "texto": "Inspirar a sociedade na defesa da Mata Atlântica. Venha conhecer nosso trabalho!",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 116, "data": new Date("2019-09-19").getTime(), "tipo": "org"}
    ],
    "idosos": [
        {"nome": "Ativa Idade",
        "image": "./img/mockup-cards/idosos/ativa-idade.jpg",
        "texto": "Somos a ong Ativa Idade, apelidada carinhosamente como ATI, que tem como objetivo proteger o direito dos nossos idosos.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 59, "data": new Date("2020-03-23").getTime(), "tipo": "org"},
        {"nome": "Ação Social Recreio",
        "image": "./img/mockup-cards/idosos/doacao-de-fraldas.jpg",
        "texto": "Neste mês de maio doe fraldas geriátricas e infantis para asilos e famílias assistidas pelo nosso programa.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 43, "data": new Date("2020-06-06").getTime(), "tipo": "evento"},
        {"nome": "Idoso Amado",
        "image": "./img/mockup-cards/idosos/idoso-animado.png",
        "texto": "Chamando colaboradores que se sensibilizam com a esta causa e querem ajudar de acordo com o que lhes é possível.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 49, "data": new Date("2020-04-07").getTime(), "tipo": "org"},
        {"nome": "Prefeitura de Trombudo Central",
        "image": "./img/mockup-cards/idosos/encontro-idoso.png",
        "texto": "O evento terá uma tarde com programação especial para a terceira idade.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 23, "data": new Date("2020-09-07").getTime(), "tipo": "evento"}
    ],
    "deficientes": [
        {"nome": "AACD",
        "image": "./img/mockup-cards/deficientes/aacd.jpg",
        "texto": "O atendimento que a AACD oferece a milhares de pessoas só é possível graças ao apoio dos nossos colaboradores.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "views": 452, "data": new Date("2019-06-23").getTime(), "tipo": "org", "informacao": "Data: 05/06/2020"},
        {"nome": "Adapt Surf",
        "image": "./img/mockup-cards/deficientes/adapt-surf.jpg",
        "texto": "Divulgar o surf adaptado para pessoas com deficiência, preservar a Natureza e lutar por mais acessibilidade nas praias.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "views": 165, "data": new Date("2019-09-24").getTime(), "tipo": "org", "informacao": "Data: 05/06/2020"},
        {"nome": "Adapt Surf",
        "image": "./img/mockup-cards/deficientes/adapt-surf-evento.jpeg",
        "texto": "Venha participar do evento de surf no dia Internacional da pessoa com deficiência.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "views": 59, "data": new Date("2020-06-18").getTime(), "tipo": "evento", "informacao": "Data: 05/06/2020"},
        {"nome": "APAE",
        "image": "./img/mockup-cards/deficientes/apae.jpg",
        "texto": "Sua doação é fundamental para continuidade dos trabalhos desenvolvidos pelas Apaes.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "views": 79, "data": new Date("2020-02-19").getTime(), "tipo": "org", "informacao": "Data: 05/06/2020"},
        {"nome": "Vicente Domingos",
        "image": "./img/mockup-cards/deficientes/cadeira-de-rodas.webp",
        "texto": "Sou paraplégico e estou precisando de uma cadeira de rodas, pois a minha quebrou. Moro em pirituba.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "views": 23, "data": new Date("2020-02-19").getTime(), "tipo": "pessoa", "informacao": "Data: 05/06/2020"}
    ],
    "educacao": [
        {"nome": "Ciranda do Saber",
        "image": "./img/mockup-cards/educacao/ciranda-do-saber.png",
        "texto": "A Ciranda do Saber realiza a fomentação da leitura através da destinação de livros a ONGs e eventos literários.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 165, "data": new Date("2019-07-23").getTime(), "tipo": "org",},
        {"nome": "CPM",
        "image": "./img/mockup-cards/educacao/cidadao-pro-mundo.png",
        "texto": "Oferecemos cursos de inglês para jovens e adultos de comunidades carentes promovendo a inserção e integração social.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 173, "data": new Date("2019-09-14").getTime(), "tipo": "org"},
        {"nome": "IOS",
        "image": "./img/mockup-cards/educacao/ios.png",
        "texto": "Apoiar e monitorar a empregabilidade de jovens e pessoas com deficiência, que tenham menor acesso ao mercado de trabalho.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 124, "data": new Date("2020-02-07").getTime(), "tipo": "org"},
        {"nome": "Jovens Hackers",
        "image": "./img/mockup-cards/educacao/jovens-hackers.jpg",
        "texto": "Empoderamos crianças e adolescentes em situação de vulnerabilidade social por meio da tecnologia, com aulas a baixo custo.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 97, "data": new Date("2020-04-09").getTime(), "tipo": "org"},
        {"nome": "Guri",
        "image": "./img/mockup-cards/educacao/projeto-guri.jpg",
        "texto": "O ensino musical é a ferramenta escolhida pelo Projeto Guri para o cumprimento da sua missão de inclusão sociocultural.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 202, "data": new Date("2019-09-18").getTime(), "tipo": "org"},
        {"nome": "PyLadies",
        "image": "./img/mockup-cards/educacao/pyladies.png",
        "texto": "O PyLadies é uma comunidade mundial que foi trazida ao Brasil com o propósito de trazer mais mulheres para a área tecnológica.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 201, "data": new Date("2020-02-07").getTime(), "tipo": "org"},
        {"nome": "PyLadies",
        "image": "./img/mockup-cards/educacao/pyladies-evento.jpg",
        "texto": "Abordaremos tópicos de estatística descritiva e como aplicá-los em análises de dados usando Python, com Pandas e Seaborn.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 76, "data": new Date("2020-05-23").getTime(), "tipo": "evento"},
        {"nome": "Todos pela Educação",
        "image": "./img/mockup-cards/educacao/todos-pela-educacao.jpg",
        "texto": "Nosso propósito é melhorar o Brasil, impulsionando a qualidade e a equidade da Educação Básica no País.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 75, "data": new Date("2020-03-24").getTime(), "tipo": "org"}
    ],
    "alimentacao": [
        {"nome": "Armazém do Campo",
        "image": "./img/mockup-cards/alimentacao/armazem-do-campo.jpg",
        "texto": "Produtos agroecológicos, orgânicos e da agricultura familiar. Venha e traga sua família para conhecer um novo jeito de comer bem.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 87, "data": new Date("2020-02-21").getTime(), "tipo": "org"},
        {"nome": "Armazém do Campo",
        "image": "./img/mockup-cards/alimentacao/feira-da-reforma-agraria.jpg",
        "texto": "Feira Nacional da Reforma Agrária 2020. Confira o que vai rolar nesta edição!",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 48, "data": new Date("2020-12-20").getTime(), "tipo": "evento"},
        {"nome": "Sopão Solidário",
        "image": "./img/mockup-cards/alimentacao/sopao-comunitario.jpg",
        "texto": "Venha contribuir com o sopão comunitário durante esse inverno!",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 45, "data": new Date("2020-07-12").getTime(), "tipo": "evento"},
        {"nome": "Banco de Alimentos",
        "image": "./img/mockup-cards/alimentacao/banco-de-alimentos.jpg",
        "texto": "Buscamos alimentos onde sobra e levamos onde falta.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 76, "data": new Date("2020-05-31").getTime(), "tipo": "org"},
        {"nome": "Stop Hunger",
        "image": "./img/mockup-cards/alimentacao/stop-hunger.png",
        "texto": "Junte-se a nós! Doe cestas básica durante a restrição do covid-19.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 120, "data": new Date("2019-12-07").getTime(), "tipo": "org"},
        {"nome": "Horta na Laje",
        "image": "./img/mockup-cards/alimentacao/horta-na-laje.jpg",
        "texto": "O Horta na Laje tem como objetivo incentivar a alimentação saudável, a sustentabilidade e a economia dentro de Paraisópolis.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 79, "data": new Date("2020-03-09").getTime(), "tipo": "org"}
    ],
    "moradia": [
        {"nome": "Anjos da Noite",
        "image": "./img/mockup-cards/moradia/anjos-da-noite.jpg",
        "texto": "Manter o corpo aquecido é essencial. Todos precisamos de cobertores em qualquer época do ano e principalmente no inverno.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 42, "data": new Date("2020-06-13").getTime(), "tipo": "evento"},
        {"nome": "Banco da Providência",
        "image": "./img/mockup-cards/moradia/banco-da-providencia.png",
        "texto": "O Banco da Providência desenvolve projetos de inclusão social para jovens, adultos e famílias em pobreza extrema no RJ.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 76, "data": new Date("2020-04-30").getTime(), "tipo": "org"},
        {"nome": "Habitat",
        "image": "./img/mockup-cards/moradia/habitat-brasil.png",
        "texto": "Incentivar as pessoas a construírem juntas casas, comunidades e esperança, procurando assim transformar o amor de Deus em ação.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 56, "data": new Date("2019-10-19").getTime(), "tipo": "org"},
        {"nome": "Teto",
        "image": "./img/mockup-cards/moradia/teto.png",
        "texto": "Superar a situação de pobreza em que vivem milhões de pessoas nas comunidades precárias, junto aos moradores e voluntários.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 234, "data": new Date("2019-05-24").getTime(), "tipo": "org"}
    ],
    "refugiados": [
        {"nome": "ACNUR",
        "image": "./img/mockup-cards/refugiados/acnur.jpg",
        "texto": "Trabalhamos para oferecer proteção, acesso à educação e assistência médica aos refugiados no Brasil e no mundo.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 176, "data": new Date("2019-07-16").getTime(), "tipo": "org"},
        {"nome": "ADUS",
        "image": "./img/mockup-cards/refugiados/adus.png",
        "texto": "O Adus oferece para os refugiados aulas de português, inserção no mercado de trabalho e orientação jurídica.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 78, "data": new Date("2020-02-19").getTime(), "tipo": "org"},
        {"nome": "Migraflix",
        "image": "./img/mockup-cards/refugiados/migraflix.png",
        "texto": "Apostamos no conhecimento dos refugiados, ajudando em projetos que geram renda, para possibilitar uma vida mais digna em nosso país.",
        "mais": "Esse texto é para explicar mais sobre o assunto. Aqui você encontra mais detalhes a respeito da ONG, do evento, do curso, etc. Aqui ficam todas as informações complementares e que possuem o intuito de auxiliar o usuário e quem estiver interessado em ajudar/participar",
        "informacao": "Data: 05/06/2020",
        "views": 74, "data": new Date("2020-02-08").getTime(), "tipo": "org"}
    ]
}

// CRIA UM CARD A PARTIR DE INFORMAÇÕES DO CARD
function createCard(cardInfo) {

    // CRIA CARD
    let card = document.createElement('article');
    card.setAttribute('data-views', cardInfo['views']);
    card.setAttribute('data-date', cardInfo['data']);
    card.setAttribute('data-type', cardInfo['tipo']);

    // CRIA CONTAINER DA IMAGEM
    let holder = document.createElement('div');
    holder.classList.add('img-holder');
    card.appendChild(holder);

    // CRIA IMAGEM
    let img = document.createElement('img');
    img.src = cardInfo['image'];
    holder.appendChild(img);

    // CRIA ÁREA DE CONTEUDO
    let content = document.createElement('div');
    content.classList.add('content');
    card.appendChild(content);

    // CRIA TITULO DO CONTEÚDO
    let title = document.createElement('div');
    title.classList.add('content-title');
    content.appendChild(title);

    // CRIA LINK PARA PAGINA DA AUTORA DO CARD
    let link = document.createElement('a');
    link.href = '#'
    link.innerText = cardInfo['nome'];
    title.appendChild(link);

    // INTERAÇÃO A PARTIR DO LINK CRIADO

   link.addEventListener('click', function(){
       card.classList.add('modify');
       text.innerText = cardInfo['mais'];
       let info = document.createElement('h3');
       info.innerText = cardInfo['informacao'];
       text.appendChild(info); 
   });

    // CRIA BOTÃO PARA SEGUIR
    let button = document.createElement('button');
    button.classList.add('btn');
    button.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.626 511.627" style="enable-background:new 0 0 511.626 511.627;" xml:space="preserve"><g><path d="M506.206,179.012L360.025,32.834c-3.617-3.617-7.898-5.426-12.847-5.426s-9.233,1.809-12.847,5.426 c-3.617,3.619-5.428,7.902-5.428,12.85v73.089h-63.953c-135.716,0-218.984,38.354-249.823,115.06C5.042,259.335,0,291.03,0,328.907 c0,31.594,12.087,74.514,36.259,128.762c0.57,1.335,1.566,3.614,2.996,6.849c1.429,3.233,2.712,6.088,3.854,8.565 c1.146,2.471,2.384,4.565,3.715,6.276c2.282,3.237,4.948,4.859,7.994,4.859c2.855,0,5.092-0.951,6.711-2.854 c1.615-1.902,2.424-4.284,2.424-7.132c0-1.718-0.238-4.236-0.715-7.569c-0.476-3.333-0.715-5.564-0.715-6.708 c-0.953-12.938-1.429-24.653-1.429-35.114c0-19.223,1.668-36.449,4.996-51.675c3.333-15.229,7.948-28.407,13.85-39.543 c5.901-11.14,13.512-20.745,22.841-28.835c9.325-8.09,19.364-14.702,30.118-19.842c10.756-5.141,23.413-9.186,37.974-12.135 c14.56-2.95,29.215-4.997,43.968-6.14s31.455-1.711,50.109-1.711h63.953v73.091c0,4.948,1.807,9.232,5.421,12.847 c3.62,3.613,7.901,5.424,12.847,5.424c4.948,0,9.232-1.811,12.854-5.424l146.178-146.183c3.617-3.617,5.424-7.898,5.424-12.847 C511.626,186.92,509.82,182.636,506.206,179.012z" /></g></svg>'
    title.appendChild(button);
    button.addEventListener('click', function(){
        text.innerText = cardInfo['texto'];
        card.classList.remove('modify');
    });

    // CRIA DIV PARA O TEXTO DO CONTEÚDO
    let body = document.createElement('div');
    body.classList.add('content-body');
    content.appendChild(body);

    // CRIA TEXTO DO CARD
    let text = document.createElement('p');
    text.innerText = cardInfo['texto'];
    body.appendChild(text);

    return card;
}

// INSERE UMA LISTA DE CARDS NA SECTION PRINCIPAL
function appendCards(cards) {
    let cardSection = document.getElementById('card-section');
    cards.forEach(function (card) {
        cardSection.appendChild(card);
    });
}

// REMOVE TODOS OS CARDS DA SECTION PRINCIPAL
function removeCards() {
    let cardSection = document.getElementById('card-section');
    while (cardSection.children.length > 1) {
        cardSection.removeChild(cardSection.children[1]);
    }
}

// ADICIONA EVENT LISTENERS PARA OS CHECKBOXES DE CATAGORIA
function addCategoriesEventListeners() {
    let checkboxes = document.querySelectorAll('ul#categories li label input');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('click', function () {

            // FAZ UMA NOVA PESQUISA POR CATEGORIA SE O BOTÃO CLICADO FOR DIFERENTE DO QUE JÁ ESTÁ CLICADO
            let toolbar = document.getElementById('toolbar');
            if (toolbar.getAttribute('data-categorie') != checkbox.value) {
                toolbar.setAttribute('data-categorie', checkbox.value);
                search(toolbar.getAttribute('data-categorie'), toolbar.getAttribute('data-filters'), toolbar.getAttribute('data-sorter'));
            }
        });
    });
}

// ADICIONA EVENT LISTENERS PARA OS CHECKBOXES DE FILTRO DE PESQUISA
function addFiltersEventListeners() {
    let checkboxes = document.querySelectorAll('div#filter-search label input');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('click', function () {

            let toolbar = document.getElementById('toolbar');
            let filters = JSON.parse(toolbar.getAttribute('data-filters'));
            let index = filters.indexOf(checkbox.value);
            let searchBox = document.getElementById('search-box');
            
            // SE TIVER COM UMA PESQUISA POR PALAVRA FAZ UMA PESQUISA POR PALAVRAS E FILTRA APENAS OS CARDS QUE CONTEM A PALAVRA
            // SENÃO FAÇA PASSE APENAS PELO FILTRO
            if (searchBox.value != '') {
                // SE ESSE FILTRO NÃO ESTAVA APLICADO, APLIQUE E PASSE PELO FILTRO
                // SENÃO DESAPLIQUE E PASSE PELO FILTRO NOVAMENTE 
                if (index == -1) {

                    filters.push(checkbox.value);
                    toolbar.setAttribute('data-filters', JSON.stringify(filters));
                    showCards(JSON.parse(toolbar.getAttribute('data-filters')), wordSearchCards(searchBox.value));
                } else {
    
                    filters.splice(index, 1);
                    toolbar.setAttribute('data-filters', JSON.stringify(filters));
                    showCards(JSON.parse(toolbar.getAttribute('data-filters')), wordSearchCards(searchBox.value));
                }
                
            } else {
                // SE ESSE FILTRO NÃO ESTAVA APLICADO, APLIQUE E PASSE PELO FILTRO
                // SENÃO DESAPLIQUE E PASSE PELO FILTRO NOVAMENTE 
                if (index == -1) {
    
                    filters.push(checkbox.value);
                    toolbar.setAttribute('data-filters', JSON.stringify(filters));
                    showCards(JSON.parse(toolbar.getAttribute('data-filters')), undefined);
                } else {
    
                    filters.splice(index, 1);
                    toolbar.setAttribute('data-filters', JSON.stringify(filters));
                    showCards(JSON.parse(toolbar.getAttribute('data-filters')), undefined);
                }
            }
            
        });
    });
}

// ADICIONA EVENT LISTENERS PARA OS RADIOS DE ORDENAÇÃO
function addSortersEventListeners() {
    let radios = document.querySelectorAll('div#sort-search label input');

    radios.forEach(function (radio) {
        radio.addEventListener('click', function () {

            // SE ESSE BOTÃO DE ORDENAÇÃO NÃO ESTAVA SELECIONADO, SELECIONE E FAÇA A ORDENAÇÃO
            let toolbar = document.getElementById('toolbar');
            if (toolbar.getAttribute('data-sorter') != radio.value) {
                toolbar.setAttribute('data-sorter', radio.value);
                sortCards(toolbar.getAttribute('data-sorter'));
            }
        });
    });
}

// ADICIONA EVENT LISTENER PARA A CAIXA DE PESQUISA
function addSearchBoxEventListener() {
    let searchBox = document.getElementById('search-box');
    let toolbar = document.getElementById('toolbar');

    // QUANDO APERTAR ENTER FAÇA A PESQUISA POR PALAVRA E PASSE PELO FILTRO EM SEGUIDA
    searchBox.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            showCards(JSON.parse(toolbar.getAttribute('data-filters')), wordSearchCards(searchBox.value));
        }
    });
}

// PEGA TODOS AS INFORMAÇÕES DOS CARDS DE UMA CATEGORIA NO BANCO DE DADOS, E RETORNA UMA LISTA COM OS CARDS
function requestCards (categorie) {
    let cardList = [];
    let searchBox = document.getElementsByClassName('search-box')[0];
    searchBox.children[0].value = '';
    searchBox.children[1].style.display = 'none';

    // SE FOR TODAS CATEGORIAS
    if (categorie == 'todas') {
        let categories = Object.keys(DB);
        categories.forEach(function (categorie) {

            let cardInfoList = DB[categorie];

            cardInfoList.forEach(function (cardInfo) {
                cardList.push(createCard(cardInfo));
            });
        });

    // SE FOR UMA CATEGORIA ESPECIFICA
    } else {
        let cardInfoList = DB[categorie];
    
        cardInfoList.forEach(function (cardInfo) {
            cardList.push(createCard(cardInfo));
        });
    }

    return cardList;
}

// FILTRA OS CARDS DE UMA CATEGORIA DE ACORDO COM OS FILTROS PASSADOS MUDANDO ENTRE DISPLAY: NONE E FLEX
function showCards (filters, cards = Array.from(document.getElementById('card-section').children).slice(1)) {

    switch (filters.length) {
        // SE TIVER UM FILTRO
        case 1:
            cards.forEach(function (card) {
                if (card.getAttribute('data-type') == filters[0]) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
            break;
            // SE TIVER DOIS FILTROS TESTE OS DOIS
        case 2:
            cards.forEach(function (card) {
                if (card.getAttribute('data-type') == filters[0] || card.getAttribute('data-type') == filters[1]) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
            break;
        // SE TIVER ZERO OU TRÊS FILTROS MOSTRE TUDO
        default:
            cards.forEach(function (card) {
                card.style.display = 'flex';
            });
    }
}

// ORDENA OS CARDS DE ACORDO COM O CRITERIO PASSADO
// CRIA UMA NOVA LISTA, REORDENA NOVA LISTA, REMOVE OS CARDS ANTIGOS, COLOCA A ORDENADA
function sortCards (criteria) {
    let section = document.getElementById('card-section');
    let cards = Array.from(section.children).slice(1);

    switch (criteria) {
        case 'destaque':
            cards.sort(function (card1, card2) {
                return (card1.getAttribute('data-views') - card2.getAttribute('data-views')) * -1;
            });
            break;
        case 'impulsionar':

            cards.sort(function (card1, card2) {
                return (card1.getAttribute('data-views') - card2.getAttribute('data-views'));
            });
            break;
        case 'recente':

            cards.sort(function (card1, card2) {
                return (card1.getAttribute('data-date') - card2.getAttribute('data-date')) * -1;
            });
            break;
    }

    removeCards();
    appendCards(cards);
}

// PROCURA PALAVRAS NO NOME DA AUTORA OU NO TEXTO DO CARD
function wordSearchCards(phrase) {
    let searchBox = document.getElementsByClassName('search-box')[0];
    let cards = Array.from(document.getElementById('card-section').children).slice(1);
    
    // SEPARA A FRASE EM PALAVRAS
    let words = phrase.split(' ');

    let cardsFound = [];
    let found = 0;
    cards.forEach(function (card) {
        let name = card.children[1].children[0].children[0].innerText;
        let text = card.children[1].children[1].children[0].innerText;

        words.forEach(function (word) {
            
            if (name.search(word) >= 0 || text.search(word) >= 0) {
                card.style.display = 'flex';
                cardsFound.push(card);
                found++;
            } else {
                card.style.display = 'none';
            }
        });
    });

    // SE NÃO ENCONTROU NENHUMA MOSTRE O TEXTO DE 'NENHUM RESULTADO'
    if (found == 0) {
        searchBox.children[1].style.display = 'flex';
    } else {
        searchBox.children[1].style.display = 'none';
    }

    return cardsFound;
}

// FAZ UMA BUSCA GERAL
function search(categorie, filters, sorter) {
    let cardList = requestCards(categorie);
    removeCards();
    appendCards(cardList);
    showCards(JSON.parse(filters), undefined);
    sortCards(sorter);
    cardsOpacityOn();
}

// MUDA A OPACIDADE DOS CARDS PARA AS TRANSIÇÕES DE PESQUISA
function cardsOpacityOn() {
    let section = document.getElementById('card-section');
    for (let card = 1; card < section.children.length; card++) {
        section.children[card].style.opacity = 1;
    }
}

// MAIN
window.addEventListener('load', function () {
    
    
    // ADICIONA EVENT LISTENERS PARA OS BOTÕES DE PESQUISA
    addCategoriesEventListeners();
    addFiltersEventListeners();
    addSortersEventListeners();
    addSearchBoxEventListener();
    
    // DEFININDO OPÇÕES DE PESQUISA INICIAIS
    let toolbar = document.getElementById('toolbar');
    toolbar.setAttribute('data-categorie', 'todas');
    toolbar.setAttribute('data-filters', '[]');
    toolbar.setAttribute('data-sorter', 'destaque');

    // LOADER ANTES DE MOSTRAR O CONTEUDO
    let loader = document.getElementById('loader');
    loader.addEventListener('animationend', function () {
    
    // ESCONDE LOADER
    loader.style.opacity = 0;
    loader.style.display = 'none';

    // MOSTRA CARDS
    search(toolbar.getAttribute('data-categorie'), toolbar.getAttribute('data-filters'), toolbar.getAttribute('data-sorter'));
});
});