var data_bonusaction_en = [
    {
        title: "Offhand Attack",
        icon: "crossed-swords",
        subtitle: "Use with the Attack action",
        description: "Attack with your off hand",
        reference: "PHB 2024",
        bullets: [
            "Only usable if you take the <i>Attack</i> action and attack with a light melee weapon that you're holding in one hand.",
            "Perform a single attack with a different light melee weapon that you're holding in the other hand.",
            "You don't add your ability modifier to the damage of the bonus attack, unless that modifier is negative.",
            "If either weapon has the thrown property, you can throw the weapon, instead of making a melee attack with it."
        ]
    },
    {
        title: "Magic",
        icon: "magic-swirl",
        subtitle: "Cast time of 1 bonus action",
        description: "Cast a spell with a casting time of 1 bonus action",
        reference: "PHB 2024",
        bullets: [
            "You can't cast a spell with your action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
            "For further details, see the <i>Magic</i> action."
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Some features use bonus actions",
        description: "Use a racial or class feature that uses a bonus action",
        reference: "See class page for more information.",
        bullets: [

        ]
    }
]

var data_bonusaction_pt = [
    {
        title: "Ataque mão inábil",
        icon: "crossed-swords",
        subtitle: "Use com a ação de Ataque",
        description: "Ataque com sua mão inábil",
        reference: "LDJ 2024",
        bullets: [
            "Utilizável apenas se você realizar a ação de <i>Ataque</i> e atacar com uma arma corpo-a-corpo leve que esteja segurando em uma mão.",
            "Realize um único ataque com uma arma corpo-a-corpo leve diferente que esteja segurando na outra mão.",
            "Você não adiciona seu modificador de atributo ao dano do ataque bônus, a menos que o modificador seja negativo.",
            "Se qualquer uma das armas tiver a propriedade de arremesso, você pode arremessar a arma, em vez de fazer um ataque corpo-a-corpo."
        ]
    },
    {
        title: "Magia",
        icon: "magic-swirl",
        subtitle: "Tempo de conjuração: 1 ação bônus",
        description: "Conjura magia com tempo de 1 ação bônus",
        reference: "LDJ 2024",
        bullets: [
            "Você não pode conjurar uma magia com sua ação e uma magia diferente com sua ação bônus no mesmo turno, exceto se a ação principal for usada para conjurar um truque.",
            "Para mais detalhes, veja a ação <i>Magia</i>."
        ]
    },
    {
        title: "Usar hab. classe",
        icon: "embrassed-energy",
        subtitle: "Algumas características usam ações bônus",
        description: "Usa uma característica de classe que usa uma ação bônus",
        reference: "Veja a página da classe para mais informações.",
        bullets: []
    }
];

var data_bonusaction_es = [
    {
        title: "Ataque arma sec.",
        icon: "crossed-swords",
        subtitle: "Úsalo con la acción de Ataque",
        description: "Ataca con el arma secundaria",
        reference: "PHB 2024",
        bullets: [
            "Solo se puede usar si realizas la acción de <i>Ataque</i> y atacas con un arma cuerpo a cuerpo ligera que sostienes en una mano.",
            "Realiza un único ataque con un arma cuerpo a cuerpo ligera diferente que sostienes en la otra mano.",
            "No añades tu modificador de característica al daño del ataque adicional, a menos que el modificador sea negativo.",
            "Si alguna de las armas tiene la propiedad arrojadiza, puedes lanzar el arma en lugar de hacer un ataque cuerpo a cuerpo."
        ]
    },
    {
        title: "Magia",
        icon: "magic-swirl",
        subtitle: "Tiempo de conjuro: 1 acción adicional",
        description: "Lanza un conjuro de 1 acción adicional",
        reference: "PHB 2024",
        bullets: [
            "No puedes lanzar un conjuro con tu acción y un conjuro diferente con tu acción adicional en el mismo turno, excepto si la acción principal se usa para lanzar un truco.",
            "Para más detalles, consulta la acción <i>Magia</i>."
        ]
    },
    {
        title: "Usar hab. clase",
        icon: "embrassed-energy",
        subtitle: "Algunos rasgos usan acciones adicionales",
        description: "Usa un rasgo de clase que requiera acción adicional",
        reference: "Consulta la página de tu clase para más información.",
        bullets: []
    }
];

if (typeof current_lang === 'undefined') {
    var lang_override = localStorage.getItem('quickref_lang');
    var nav_lang = navigator.language ? navigator.language.slice(0, 2) : 'en';
    var current_lang = lang_override || nav_lang;
}
var data_bonusaction = current_lang === 'pt' ? data_bonusaction_pt : (current_lang === 'es' ? data_bonusaction_es : data_bonusaction_en);
