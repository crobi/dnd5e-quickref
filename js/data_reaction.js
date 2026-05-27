var data_reaction_en = [
    {
        title: "Opportunity attack",
        icon: "crossed-swords",
        subtitle: "Enemy leaves your reach",
        description: "You can rarely move heedlessly past your foes without putting yourself in danger",
        reference: "PHB 2024",
        bullets: [
            "Trigger: enemy creature you can see leaves your reach.",
            "Make one melee attack against the provoking creature.",
            "The attack interrupts the provoking creature's movement, occurring right before the creature leaves your reach.",
            "Creatures don't provoke an opportunity attack when they teleport or when someone or something moves them without using their movement, action, or reaction."
        ]
    },
    {
        title: "Readied action",
        icon: "stopwatch",
        subtitle: "Part of your Ready action",
        description: "Execute the reaction specified by your Ready action",
        reference: "PHB 2024",
        bullets: [
            "Trigger: specified by your <i>Ready</i> action."
        ]
    },
    {
        title: "Magic",
        icon: "magic-swirl",
        subtitle: "Cast time of 1 reaction",
        description: "Cast a spell with a casting time of 1 reaction",
        reference: "PHB 2024",
        bullets: [
            "Trigger: specified by the spell.",
            "For further details, see the <i>Magic</i> action."
        ]
    }
]

var data_reaction_pt = [
    { title: "Ataque de oportunidade", icon: "crossed-swords", subtitle: "Inimigo sai do seu alcance", description: "Inimigos não podem te ignorar impunemente", reference: "LDJ 2024", bullets: ["Gatilho: uma criatura inimiga que você pode ver sai do seu alcance.", "Faça um ataque corpo-a-corpo contra a criatura que provocou.", "O ataque interrompe o movimento da criatura, ocorrendo logo antes dela sair do seu alcance.", "Criaturas não provocam ataques de oportunidade quando se teletransportam ou quando alguém ou algo as move sem usar o próprio movimento, ação ou reação."] },
    { title: "Ação preparada", icon: "stopwatch", subtitle: "Parte da sua ação Preparar", description: "Executa a reação especificada pela sua ação Preparar", reference: "LDJ 2024", bullets: ["Gatilho: especificado pela sua ação <i>Preparar</i>."] },
    { title: "Magia", icon: "magic-swirl", subtitle: "Tempo de conjuração: 1 reação", description: "Conjura magia de 1 reação", reference: "LDJ 2024", bullets: ["Gatilho: especificado pela magia.", "Para mais detalhes, veja a ação <i>Magia</i>."] }
];

var data_reaction_es = [
    {
        title: "Ataque de oportunidad",
        icon: "crossed-swords",
        subtitle: "El enemigo sale de tu alcance",
        description: "Rara vez puedes pasar junto a enemigos sin ponerte en peligro",
        reference: "PHB 2024",
        bullets: [
            "Detonante: una criatura enemiga que puedes ver sale de tu alcance.",
            "Realiza un ataque cuerpo a cuerpo contra la criatura que lo provoca.",
            "El ataque interrumpe el movimiento de la criatura, ocurriendo justo antes de que salga de tu alcance.",
            "Las criaturas no provocan ataques de oportunidad al teletransportarse o cuando algo las mueve sin usar su movimiento, acción o reacción."
        ]
    },
    { title: "Acción preparada", icon: "stopwatch", subtitle: "Parte de tu acción Preparar", description: "Ejecuta la reacción especificada en Preparar", reference: "PHB 2024", bullets: ["Detonante: especificado por tu acción <i>Preparar</i>."] },
    { title: "Magia", icon: "magic-swirl", subtitle: "Tiempo de conjuro: 1 reacción", description: "Lanza conjuro de 1 reacción", reference: "PHB 2024", bullets: ["Detonante: especificado por el conjuro.", "Para más detalles, consulta la acción <i>Magia</i>."] }
];

if (typeof current_lang === 'undefined') {
    var lang_override = localStorage.getItem('quickref_lang');
    var nav_lang = navigator.language ? navigator.language.slice(0, 2) : 'en';
    var current_lang = lang_override || nav_lang;
}
var data_reaction = current_lang === 'pt' ? data_reaction_pt : (current_lang === 'es' ? data_reaction_es : data_reaction_en);
