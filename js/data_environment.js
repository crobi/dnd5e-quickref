var data_environment_obscurance_en = [
    {
        title: "Lightly obscured",
        icon: "bleeding-eye",
        subtitle: "Disadvantage on Perception",
        description: "Dim light, patchy fog, moderate foliage",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creatures have <b>disadvantage on Wisdom (Perception)</b> checks that rely on sight."
        ]
    },
    {
        title: "Heavily obscured",
        icon: "lightning-tear",
        subtitle: "Effectively blind",
        description: "Darkness, opaque fog, dense foliage",
        reference: "PHB, pg. 183.",
        bullets: [
            "A creature in a heavily obscured area effectively suffers from the <b>blinded condition</b>."
        ]
    }
]

var data_environment_light_en = [
    {
        title: "Bright light",
        icon: "star-pupil",
        subtitle: "Normal vision",
        description: "Bright light lets most creatures see normally",
        reference: "PHB, pg. 183.",
        bullets: [
            "Gloomy days still provide bright light, as do torches, lanterns, fires, and other sources of illumination within a specific radius."
        ]
    },
    {
        title: "Dim light",
        icon: "semi-closed-eye",
        subtitle: "Lightly obscured",
        description: "Dim light, also called shadows",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creates a <b>lightly obscured</b> area.",
            "An area of dim light is usually a boundary between a source of bright light, such as a torch, and surrounding darkness.",
            "The soft light of twilight and dawn also counts as dim light. A particularly brilliant full moon might bathe the land in dim light."
        ]
    },
    {
        title: "Darkness",
        icon: "worried-eyes",
        subtitle: "Heavily obscured",
        description: "Darkness creates a heavily obscured area",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creates a <b>heavily obscured</b> area.",
            "Characters face darkness outdoors at night (even most moonlit nights), within the confines of an unlit dungeon or a subterranean vault, or in an area of magical darkness."
        ]
    }
]

var data_environment_vision_en = [
    {
        title: "Blindsight",
        icon: "one-eyed",
        subtitle: "Perceive without sight",
        description: "Perceive your surroundings without relying on sight, within a certain radius",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creatures without eyes, such as oozes, and creatures with echolocation or heightened senses, such as bats and true dragons, have this sense."
        ]
    },
    {
        title: "Darkvision",
        icon: "semi-closed-eye",
        subtitle: "Limited vision in darkness",
        description: "A creature with Darkvision can see better in the dark or low light conditions, within a certain radius",
        reference: "PHB, pgs. 183-184.",
        bullets: [
            "Within a specified range, a creature with darkvision can <b>see in darkness as if the darkness were dim light</b>, so areas of darkness are only lightly obscured as far as that creature is concerned.",
            "However, the creature can’t discern color in darkness, only shades of gray.",
            "Many creatures in the worlds of D&D, especially those that dwell underground, have darkvision."
        ]
    },
    {
        title: "Truesight",
        icon: "eye-shield",
        subtitle: "See in darkness",
        description: "A creature with truesight can see everything in its true form, independent of the environment",
        reference: "PHB, pg. 184.",
        bullets: [
            "A creature with truesight can, out to a specific range, see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, and perceives the original form of a shapechanger or a creature that is transformed by magic.",
            "Furthermore, the creature can see into the Ethereal Plane."
        ]
    }
]

var data_environment_cover_en = [
    {
        title: "Half cover",
        icon: "broken-shield",
        subtitle: "Low wall, furniture, creatures",
        description: "A target has half cover if an obstacle blocks at least half of its body",
        reference: "PHB, pg. 196.",
        bullets: [
            "The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend.",
            "A target with half cover has a <b>+2 bonus to AC and Dexterity saving throws</b>.",
            " If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    },
    {
        title: "Three-quarters cover",
        icon: "cracked-shield",
        subtitle: "Portcullis, arrow slit",
        description: "A target has three-quarters cover if about three-quarters of it is covered by an obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "The obstacle might be a portcullis, an arrow slit, or a thick tree trunk.",
            "A target with three-quarters cover has a <b>+5 bonus to AC and Dexterity saving throws</b>.",
            " If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    },
    {
        title: "Full cover",
        icon: "shield",
        subtitle: "Completely concealed",
        description: "A target has total cover if it is completely concealed by an obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "A target with total cover <b>can’t be targeted directly</b> by an attack or a spell, although some spells can reach such a target by including it in an area of effect.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    }
]

var data_environment_obscurance_pt = [
    { title: "Levemente obscurecido", icon: "bleeding-eye", subtitle: "Desvantagem em Percepção", description: "Penumbra, neblina, folhagem", reference: "LDJ 2024", bullets: ["Desvantagem em testes de Sabedoria (Percepção) que dependem de visão."] },
    { title: "Fortemente obscurecido", icon: "lightning-tear", subtitle: "Efetivamente cego", description: "Escuridão, neblina opaca", reference: "LDJ 2024", bullets: ["Uma criatura em uma área fortemente obscurecida sofre da condição Cego."] }
];
var data_environment_light_pt = [
    { title: "Luz plena", icon: "star-pupil", subtitle: "Visão normal", description: "A luz plena permite visão normal", reference: "LDJ 2024", bullets: ["Fornecida por dias abertos, fogueiras, tochas e fontes de luz."] },
    { title: "Penumbra", icon: "semi-closed-eye", subtitle: "Levemente obscurecido", description: "Também chamada de sombras", reference: "LDJ 2024", bullets: ["Cria uma área levemente obscurecida.", "Ocorre no alvorecer ou crepúsculo, ou na fronteira entre luz plena e escuridão."] },
    { title: "Escuridão", icon: "worried-eyes", subtitle: "Fortemente obscurecido", description: "Cria uma área fortemente obscurecida", reference: "LDJ 2024", bullets: ["Cria uma área fortemente obscurecida.", "Ocorre a noite, em masmorras sem luz, ou áreas de magia negra."] }
];
var data_environment_vision_pt = [
    { title: "Sentido Cego", icon: "one-eyed", subtitle: "Perceber sem visão", description: "Sentir arredores sem visão", reference: "LDJ 2024", bullets: ["Percebe perfeitamente nos arredores em um raio fixo."] },
    { title: "Visão no Escuro", icon: "semi-closed-eye", subtitle: "Visão noturna", description: "Visão avançada em penumbra ou escuridão", reference: "LDJ 2024", bullets: ["Vê escuridão como se fosse penumbra (tons de cinza).", "Penumbra conta como Luz plena no raio estipulado."] },
    { title: "Visão Verdadeira", icon: "eye-shield", subtitle: "Enxergar a verdade", description: "Visão total independentemente do ambiente", reference: "LDJ 2024", bullets: ["Vê em escuridão normal ou mágica, nota seres invisíveis, e percebe transmorfo e ilusões na sua forma real.", "Também enxerga o Plano Etéreo."] }
];
var data_environment_cover_pt = [
    { title: "Meia cobertura", icon: "broken-shield", subtitle: "Baixa parede ou criaturas", description: "Metade do corpo escondido", reference: "LDJ 2024", bullets: ["Recebe bônus de +2 na CA e nos testes de resistência de Destreza."] },
    { title: "Três quartos de cobertura", icon: "cracked-shield", subtitle: "Árvores ou janelas estreitas", description: "3/4 do corpo protegido", reference: "LDJ 2024", bullets: ["Recebe bônus de +5 na CA e nos testes de resistência de Destreza."] },
    { title: "Cobertura total", icon: "shield", subtitle: "Totalmente oculto", description: "Não pode ser alvejado", reference: "LDJ 2024", bullets: ["Não pode ser o alvo direto de magias ou ataques."] }
];
var data_environment_obscurance_es = [
    { title: "Ligeramente oscurecido", icon: "bleeding-eye", subtitle: "Desventaja en Percepción", description: "Luz tenue, niebla ligera", reference: "PHB 2024", bullets: ["Desventaja en pruebas de Sabiduría (Percepción) basadas en la vista."] },
    { title: "Fuertemente oscurecido", icon: "lightning-tear", subtitle: "Efectivamente ciego", description: "Oscuridad, niebla espesa", reference: "PHB 2024", bullets: ["Una criatura aquí cuenta con la condición de Ciego."] }
];
var data_environment_light_es = [
    { title: "Luz brillante", icon: "star-pupil", subtitle: "Visión normal", description: "Permite ver todo con normalidad", reference: "PHB 2024", bullets: ["Provista por el día, antorchas y fogatas."] },
    { title: "Luz tenue", icon: "semi-closed-eye", subtitle: "Ligeramente oscurecido", description: "También llamadas penumbras", reference: "PHB 2024", bullets: ["Crea un área Ligeramente oscurecida.", "Límites entre luces y amaneceres."] },
    { title: "Oscuridad", icon: "worried-eyes", subtitle: "Fuertemente oscurecido", description: "Total falta de luz", reference: "PHB 2024", bullets: ["Crea un área Fuertemente oscurecida.", "Noches de exteriores, calabozos sin iluminación."] }
];
var data_environment_vision_es = [
    { title: "Sentido Ciego", icon: "one-eyed", subtitle: "Percibir sin visión", description: "Sentir todo sin usar los ojos", reference: "PHB 2024", bullets: ["Ignoras efectos de luz si están a tu rango de Sentido Ciego."] },
    { title: "Visión Oscuridad", icon: "semi-closed-eye", subtitle: "Visión nocturna", description: "Ver mejor en lo oscuro", reference: "PHB 2024", bullets: ["Puedes ver en Oscuridad como Luz tenue (en grises).", "La Luz tenue cuenta como Luz brillante."] },
    { title: "Visión Verdadera", icon: "eye-shield", subtitle: "Ver la verdad", description: "Visión sin engaños", reference: "PHB 2024", bullets: ["Ves a los invisibles, en oscuridad mágica, ilusiones y a través de transformaciones mágicas.", "Además ves en el Plano Etéreo."] }
];
var data_environment_cover_es = [
    { title: "Media cobertura", icon: "broken-shield", subtitle: "Paredes bajas o personas", description: "Muro que tapa a la mitad", reference: "PHB 2024", bullets: ["Bono de +2 a tu CA y salvaciones de Destreza."] },
    { title: "Tres cuartos de cobertura", icon: "cracked-shield", subtitle: "Árboles o murallas grandes", description: "Te tapa el 75% del cuerpo", reference: "PHB 2024", bullets: ["Bono de +5 a tu CA y salvaciones de Destreza."] },
    { title: "Cobertura total", icon: "shield", subtitle: "Oculto completamente", description: "No pueden verte", reference: "PHB 2024", bullets: ["No puedes ser objetivo directo de un ataque o conjuro."] }
];

if (typeof current_lang === 'undefined') {
    var lang_override = localStorage.getItem('quickref_lang');
    var nav_lang = navigator.language ? navigator.language.slice(0, 2) : 'en';
    var current_lang = lang_override || nav_lang;
}
var data_environment_obscurance = current_lang === 'pt' ? data_environment_obscurance_pt : (current_lang === 'es' ? data_environment_obscurance_es : data_environment_obscurance_en);
var data_environment_light = current_lang === 'pt' ? data_environment_light_pt : (current_lang === 'es' ? data_environment_light_es : data_environment_light_en);
var data_environment_vision = current_lang === 'pt' ? data_environment_vision_pt : (current_lang === 'es' ? data_environment_vision_es : data_environment_vision_en);
var data_environment_cover = current_lang === 'pt' ? data_environment_cover_pt : (current_lang === 'es' ? data_environment_cover_es : data_environment_cover_en);
