/*
  HOMEPAGE
*/
export const alertas: AlertsT = [
  {
    texto_destaque: 'Até 21 / 10',
    texto_conteudo: 'Processo seletivo aberto! »',
    redireciona_para: '/blog',
  },
  // {
  //   texto_destaque: 'Outro alerta',
  //   texto_conteudo: 'Processo seletivo2 aberto! »',
  //   redireciona_para: 'https://link.tree',
  // },
];

export const projetos = [
  {
    title: 'NeuroEduca · Desenvolvendo Estratégias de Aprendizagem Eficazes',
    description:
      'A equipe está planejando colaborar com educadores e alunos para avaliar diferentes técnicas de estudo, com foco em conceitos como espaçamento, recuperação ativa e elaboração. Por meio de workshops e materiais educativos, o projeto busca capacitar os estudantes com ferramentas práticas para aprimorar seu processo de aprendizado, usando os insights mais recentes da neurociência.',
    icon: 'tabler:eyeglass-2',
  },
  {
    title: 'NeuroArte · Explorando a Criatividade e o Cérebro',
    description:
      'No estágio inicial do projeto "NeuroArte", a LAPCEN está mergulhando na emocionante jornada de compreender a relação entre criatividade e atividade cerebral. A equipe está elaborando planos para conduzir estudos que analisarão padrões de atividade neural em indivíduos envolvidos em diversas atividades criativas, como música, arte visual e escrita. Além disso, o projeto pretende explorar como estímulos criativos podem influenciar positivamente a cognição e o bem-estar emocional',
    icon: 'tabler:palette',
  },
  {
    title: 'Grupo de Estudos',
    description:
      'A equipe está planejando colaborar com educadores e alunos para avaliar diferentes técnicas de estudo, com foco em conceitos como espaçamento, recuperação ativa e elaboração. Por meio de workshops e materiais educativos, o projeto busca capacitar os estudantes com ferramentas práticas para aprimorar seu processo de aprendizado, usando os insights mais recentes da neurociência.',
    icon: 'tabler:book',
  },
  {},
  {},
  {
    title: 'Abertos a novas ideias e contribuições',
    description:
      'Adotar uma cultura aberta a novas ideias e contribuições é indispensável. Queremos fomentar inovação, colaboração e networking. Caso queira desenvolver um projeto conosco, entre em contato.',
    icon: 'tabler:bulb',
  },
];

export const perguntasFrequentes = [
  // {
  //   title: 'Quando é o processo seletivo?',
  //   description: 'Não sei',
  // },
  {
    title: 'Quando é o Processo Seletivo?',
    description: 'Muda issaqui logo ein',
  },
  {
    title: 'O que eu preciso pra entrar na LAPCEN?',
    description:
      'Ser estudante da UnB nos cursos aceitos por nós é o suficiente para poder se inscrever no Processo Seletivo. No processo, são considerados fatores como histórico acadêmico, atividades extra curriculares relacionadas aos temas da LAPCEN e o seu perfil.',
  },
  {
    title: 'Que cursos podem participar da LAPCEN?',
    description:
      'Os cursos de graduação em psicologia, economia, biologia, medicina, serviço social, engenharia de software e engenharia de computação da UnB.',
  },
];

// Pode ignorar a seguir se não for desenvolvedor
// Tipagem das variáveis
type AlertsT = {
  texto_destaque: string;
  texto_conteudo: string;
  redireciona_para: string;
}[];
