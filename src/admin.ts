/*
  HOMEPAGE
*/
export const alertas: AlertsT = [
  {
    texto_destaque: 'Até 28 / 08',
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
    title: 'GESTO · Grupo de Estudos e Simulação Terapêutica Orientada',
    description:
      'Atividade focada em estudo de casos com base na terapia cognitivo-comportamental e em técnicas de outras terapias cognitivas de terceira onda. São estudados casos clássicos da literatura e casos criados pelos membros. Ao fim de cada semestre, os membros desenvolvem atividades para o público da UnB e o público externo, podendo ser oficinas, palestras, rodas de conversa, entre outros. ',
    icon: 'tabler:eyeglass-2',
  },
  {
    title: 'Grupo de Estudos em Neurociências · Explorando o Cérebro',
    description:
      'Estudo e discussão de literatura selecionada com o objetivo de aprofundar e atualizar os conhecimentos em neurociência dos membros.',
    icon: 'tabler:palette',
  },
  {
    title: 'Sináptica · Divulgando Conhecimentos',
    description:
      'Atividades de produção audiovisual versando sobre assuntos clássicos e novidades sobre a psicologia cognitiva e neuropsicologia e sua participação na sociedade. Além da divulgação de outros meios de canais de divulgação científica que trabalham com esses temas.',
    icon: 'tabler:book',
  },
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
    description: 'O processo seletivo sempre é divulgado em nossas redes sociais quando aberto, normalmente entre as duas semanas que marcam o fim do período de férias e início do semestre letivo. Por favor, cheque nossas redes para verificar se o processo seletivo está aberto.',
  },
  {
    title: 'O que eu preciso pra entrar na LAPCEN?',
    description:
      'Ser estudante da UnB nos cursos aceitos por nós é o suficiente para poder se inscrever no Processo Seletivo. No processo, são considerados fatores como histórico acadêmico, atividades extra curriculares relacionadas aos temas da LAPCEN e o seu perfil.',
  },
  {
    title: 'Que cursos podem participar da LAPCEN?',
    description:
      'Os cursos de graduação em psicologia, economia, biologia, medicina, serviço social, engenharia de software e engenharia de computação da UnB. Contudo, os cursos aceitos variam de acordo com o edital do processo seletivo.',
  },
];

// Pode ignorar a seguir se não for desenvolvedor
// Tipagem das variáveis
type AlertsT = {
  texto_destaque: string;
  texto_conteudo: string;
  redireciona_para: string;
}[];
