var data_condition_en = [
    {
        title: "Blinded",
        icon: "one-eyed",
        subtitle: "You can't see",
        description: "You can't see",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires sight.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage."
        ]
    },
    {
        title: "Charmed",
        icon: "smitten",
        subtitle: "You are charmed",
        description: "You are charmed by another creature",
        reference: "PHB, pg. 290.",
        bullets: [
            "You can't attack your charmer or target them with harmful abilities or magical effects.",
            "Your charmer has advantage on ability checks to interact socially with you."
        ]
    },
    {
        title: "Deafened",
        icon: "elf-ear",
        subtitle: "You can't hear",
        description: "You can't hear",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires hearing."
        ]
    },
    {
        title: "Exhaustion",
        icon: "crawl",
            subtitle: "Cumulative penalties",
            description: "Exhaustion is measured in 6 levels",
            reference: "PHB 2024",
        bullets: [
                "Levels 1-5: You suffer a penalty to your d20 Tests (ability checks, attack rolls, saving throws) and Spell Save DCs equal to -2 times your exhaustion level.",
                "Your Speed is reduced by 5 feet (1.5m) times your exhaustion level.",
                "Level 6: You die.",
                "Finishing a Long Rest reduces your exhaustion level by 1."
        ]
    },
    {
        title: "Frightened",
        icon: "sharp-smile",
        subtitle: "You are frightened",
        description: "You are frightened",
        reference: "PHB, pg. 290.",
        bullets: [
            "You have disadvantage on ability checks and attack rolls while the source of your fear is within line of sight.",
            "You can't willingly move closer to the source of your fear."
        ]
    },
    {
        title: "Grappled",
        icon: "grab",
        subtitle: "You are grappled",
        description: "You are grappled",
        reference: "PHB, pg. 290.",
        bullets: [
                "Your speed is 0.",
                "You have disadvantage on attack rolls against any target other than the grappler.",
                "The condition ends if your grappler is incapacitated, or if you are moved out of their reach."
        ]
    },
    {
        title: "Incapacitated",
        icon: "internal-injury",
        subtitle: "You can't take actions or reactions",
        description: "You can't take actions or reactions",
        reference: "PHB 2024",
        bullets: [
                "You can't take any actions, bonus actions, or reactions.",
                "Your concentration is broken.",
                "You automatically fail Strength and Dexterity saving throws.",
                "You can't speak."
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "You can't be seen",
        description: "You can't be seen without the aid of magic or a special sense",
        reference: "PHB, pg. 291.",
        bullets: [
                "You aren't visible, so you are Heavily Obscured.",
            "You have advantage on attack rolls.",
                "Attack rolls against you have disadvantage.",
                "You can still be detected by noise or tracks."
        ]
    },
    {
        title: "Paralyzed",
        icon: "internal-injury",
        subtitle: "You are paralyzed",
        description: "You can't do anything",
        bullets: [
            "You are incapacitated and can't move or speak.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet (1.5m) of you.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Petrified",
        icon: "stone-pile",
        subtitle: "You are transformed into stone",
        description: "You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone)",
        reference: "PHB, pg. 291.",
        bullets: [
            "Your weight increases by a factor of ten, and you cease aging.",
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws.",
            "You have resistance to all damage.",
            "You are immune to poison and disease, though a poison or disease already in your system is only suspended, not neutralized."
        ]
    },
    {
        title: "Poisoned",
        icon: "deathcab",
        subtitle: "You are poisoned",
        description: "You are poisoned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You have disadvantage on attack rolls and ability checks."
        ]
    },
    {
        title: "Prone",
        icon: "crawl",
        subtitle: "You are prone",
        description: "You are prone",
        reference: "PHB, pg. 292.",
        bullets: [
                "Your only movement options are to crawl or stand up.",
            "You have disadvantage on attack rolls.",
                "Attack rolls against you have advantage if the attacker is within 5 feet (1.5m) of you, otherwise they have disadvantage."
        ]
    },
    {
        title: "Restrained",
        icon: "imprisoned",
        subtitle: "You are restrained",
        description: "You are restrained",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage.",
            "You have disadvantage on Dexterity saving throws."
        ]
    },
    {
        title: "Stunned",
        icon: "internal-injury",
        subtitle: "You are stunned",
        description: "You are stunned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move, and can speak only falteringly.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Unconscious",
        icon: "coma",
        subtitle: "You are unconscious",
        description: "You are unconscious",
        reference: "PHB, pg. 292.",
        bullets: [
                "You have the Incapacitated condition and are unaware of your surroundings.",
            "You drop whatever you're holding and fall prone.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet (1.5m) of you.",
                "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Dying",
        icon: "dead-head",
        subtitle: "You are dying",
        description: "You have been dropped to zero hit points and are dying",
        reference: "PHB, pg. 197.",
        bullets: [
            "If you are reduced to 0 hit points by damage that fails to kill you, you fall unconscious and are dying.",
            "If you receive any healing you immediately regain consciousness again and no longer dying.",
            "When dying, at the start of each of your turns you make a death saving throw. Roll a d20 and do not add any modifiers.",
            "A 10 or higher is a success, 9 or lower is a failure.",
            "On your third success, you become stable.",
            "On your third failure, you die.",
            "Rolling a 1 counts as two failures.",
            "Rolling a 20 immediately causes you to regain 1 hit point.",
            "You can also be stabilized by an ally taking the Stabilize action and succeeding on a DC 10 Wisdom (Medicine) check.",
            "Once stable, you regain 1 hit point after 1d4 hours."
        ]
    }
]

var data_condition_pt = [
    { title: "Cego", icon: "one-eyed", subtitle: "Não pode ver", description: "Você não consegue ver nada", reference: "LDJ 2024", bullets: ["Falha automática em testes que exigem visão.", "Desvantagem em ataques. Ataques contra você têm Vantagem."] },
    { title: "Enfeitiçado", icon: "smitten", subtitle: "Controlado ou cativado", description: "Você foi enfeitiçado", reference: "LDJ 2024", bullets: ["Não pode atacar ou alvejar o encantador.", "Encantador tem Vantagem em interações sociais com você."] },
    { title: "Surdo", icon: "elf-ear", subtitle: "Não pode ouvir", description: "Você não consegue ouvir", reference: "LDJ 2024", bullets: ["Falha automática em testes que exigem audição."] },
    { title: "Exaustão", icon: "crawl", subtitle: "Penalidades cumulativas", description: "Fadiga dividida em 6 níveis", reference: "LDJ 2024", bullets: ["Níveis 1-5: Penalidade em testes de d20 e CD de Magias igual a -2 vezes o seu nível.", "Deslocamento reduz em 1,5m (5ft) vezes o nível.", "Nível 6: Você morre.", "Descanso Longo reduz o nível em 1."] },
    { title: "Amedrontado", icon: "sharp-smile", subtitle: "Cheio de medo", description: "Assustado pela fonte de medo", reference: "LDJ 2024", bullets: ["Desvantagem em testes e ataques enquanto ver a fonte.", "Não pode se mover voluntariamente na direção da fonte."] },
    { title: "Agarrado", icon: "grab", subtitle: "Preso no lugar", description: "Alguém ou algo te agarrou", reference: "LDJ 2024", bullets: ["Deslocamento cai para 0.", "Desvantagem em ataques contra outros que não quem o agarrou.", "Termina se quem agarra ficar incapacitado ou você sair do alcance."] },
    { title: "Incapacitado", icon: "internal-injury", subtitle: "Sem ações ou reações", description: "Não pode agir", reference: "LDJ 2024", bullets: ["Não pode usar ações ou reações.", "Concentração é quebrada.", "Falha em testes de resistência de For e Des.", "Você não pode falar."] },
    { title: "Invisível", icon: "invisible", subtitle: "Você não pode ser visto", description: "Você não pode ser visto", reference: "LDJ 2024", bullets: ["Considerado Fortemente Obscurecido.", "Vantagem em ataques. Ataques contra você têm Desvantagem."] },
    { title: "Paralisado", icon: "internal-injury", subtitle: "Paralisado fisicamente", description: "Não pode se mover ou agir", reference: "LDJ 2024", bullets: ["Incapacitado, não fala ou anda.", "Ataques contra você têm Vantagem.", "Acertos num raio de 1,5m (5ft) são Críticos.", "Falha For/Des."] },
    { title: "Petrificado", icon: "stone-pile", subtitle: "Transformado em pedra", description: "Transformado em pedra/sólido", reference: "LDJ 2024", bullets: ["Incapacitado. Resistência a todo o dano.", "Imune a veneno e doença.", "Peso x10. Falha For/Des."] },
    { title: "Envenenado", icon: "deathcab", subtitle: "Envenenado", description: "Você está envenenado", reference: "LDJ 2024", bullets: ["Desvantagem nas jogadas de ataque e testes de atributo."] },
    { title: "Caído", icon: "crawl", subtitle: "Você caiu", description: "Você está deitado no chão", reference: "LDJ 2024", bullets: ["Opções de mover: rastejar ou levantar.", "Ataques têm Desvantagem.", "Ataques contra você têm Vantagem (se 1,5m/5ft de dist) ou Desvantagem (se mais longe)."] },
    { title: "Impedido", icon: "imprisoned", subtitle: "Preso", description: "Você está preso", reference: "LDJ 2024", bullets: ["Deslocamento 0.", "Desvantagem em ataques. Ataques contra você têm Vantagem.", "Desvantagem em testes de Des."] },
    { title: "Atordoado", icon: "internal-injury", subtitle: "Incapacitado temporário", description: "Atordoado e aturdido", reference: "LDJ 2024", bullets: ["Incapacitado, não pode se mover.", "Ataques contra você têm Vantagem. Falha For/Des."] },
    { title: "Inconsciente", icon: "coma", subtitle: "Sem consciência", description: "Desmaiado e indefeso", reference: "LDJ 2024", bullets: ["Incapacitado, larga o que está segurando e cai Caído.", "Ataques contra você têm Vantagem.", "Acertos num raio de 1,5m (5ft) são Críticos. Falha For/Des."] },
    { title: "Morrendo", icon: "dead-head", subtitle: "Zero Pontos de Vida", description: "Fazendo testes contra a morte", reference: "LDJ 2024", bullets: ["Faz testes de morte no início do turno.", "3 Sucessos = Estável. 3 Falhas = Morte.", "Rolar 20 cura 1 PV. 1 conta como 2 falhas."] }
];

var data_condition_es = [
    { title: "Ciego", icon: "one-eyed", subtitle: "No puedes ver", description: "No puedes ver nada", reference: "PHB 2024", bullets: ["Fallas en pruebas que requieran vista.", "Tus ataques con Desventaja. Ataques contra ti con Ventaja."] },
    { title: "Hechizado", icon: "smitten", subtitle: "Cautivado", description: "Has sido encantado", reference: "PHB 2024", bullets: ["No puedes atacar al encantador.", "El encantador tiene Ventaja en tiradas sociales contra ti."] },
    { title: "Sordo", icon: "elf-ear", subtitle: "No puedes oír", description: "No puedes oír nada", reference: "PHB 2024", bullets: ["Fallas toda prueba que requiera audición."] },
    { title: "Agotamiento", icon: "crawl", subtitle: "Penalizaciones por fatiga", description: "Exhausto (Niveles del 1 al 6)", reference: "PHB 2024", bullets: ["Niveles 1-5: Penalizador de -2 x Nivel en Pruebas de d20 y CD de Conjuros.", "Tu velocidad se reduce 5 pies (1,5m) x Nivel.", "Nivel 6: Mueres.", "El descanso largo reduce 1 nivel."] },
    { title: "Asustado", icon: "sharp-smile", subtitle: "Aterrorizado", description: "Aterrorizado de una fuente", reference: "PHB 2024", bullets: ["Desventaja en pruebas y ataques mientras veas la fuente.", "No puedes acercarte a la fuente."] },
    { title: "Agarrado", icon: "grab", subtitle: "Atrapado", description: "Alguien te sujeta", reference: "PHB 2024", bullets: ["Velocidad de 0.", "Desventaja al atacar a criaturas distintas al que te agarra.", "Termina si te sacan de su alcance o el agarre se incapacita."] },
    { title: "Incapacitado", icon: "internal-injury", subtitle: "Sin acciones", description: "No puedes actuar", reference: "PHB 2024", bullets: ["No puedes realizar acciones o reacciones.", "Pierdes la concentración. Fallas salvaciones Fue/Des.", "No puedes hablar."] },
    { title: "Invisible", icon: "invisible", subtitle: "No pueden verte", description: "No puedes ser visto", reference: "PHB 2024", bullets: ["Cuentas como Fuertemente oscurecido.", "Ventaja en tus ataques. Ataques contra ti con Desventaja."] },
    { title: "Paralizado", icon: "internal-injury", subtitle: "Congelado físicamente", description: "No puedes moverte o actuar", reference: "PHB 2024", bullets: ["Incapacitado.", "Ataques contra ti con Ventaja.", "Impactos a 5 pies (1,5m) son críticos. Fallas Fue/Des."] },
    { title: "Petrificado", icon: "stone-pile", subtitle: "Convertido en piedra", description: "Transformado en material sólido", reference: "PHB 2024", bullets: ["Incapacitado. Resistencia a todo el daño.", "Inmune a veneno/enfermedad. Peso x10. Fallas Fue/Des."] },
    { title: "Envenenado", icon: "deathcab", subtitle: "Intoxicado", description: "Sufres el efecto de veneno", reference: "PHB 2024", bullets: ["Desventaja en tiradas de ataque y pruebas de característica."] },
    { title: "Derribado", icon: "crawl", subtitle: "En el suelo", description: "Has caído al suelo", reference: "PHB 2024", bullets: ["Solo puedes arrastrarte o levantarte.", "Tus ataques con Desventaja.", "Ataques contra ti con Ventaja a 5 pies (1,5m) o Desventaja si es de más lejos."] },
    { title: "Apresado", icon: "imprisoned", subtitle: "Atado firmemente", description: "Limitado para moverte", reference: "PHB 2024", bullets: ["Velocidad de 0.", "Desventaja en tus ataques y salvaciones Des.", "Ataques contra ti con Ventaja."] },
    { title: "Aturdido", icon: "internal-injury", subtitle: "Incapacitado temporal", description: "Conmocionado", reference: "PHB 2024", bullets: ["Incapacitado, no te mueves.", "Ataques contra ti con Ventaja. Fallas Fue/Des."] },
    { title: "Inconsciente", icon: "coma", subtitle: "Sin sentido", description: "Desmayado", reference: "PHB 2024", bullets: ["Incapacitado. Sueltas lo que tengas y quedas Derribado.", "Ataques contra ti con Ventaja.", "Impactos a 5 pies (1,5m) son críticos. Fallas Fue/Des."] },
    { title: "Muriendo", icon: "dead-head", subtitle: "A las puertas de la muerte", description: "Cero Puntos de Golpe", reference: "PHB 2024", bullets: ["Haces tiradas de muerte cada turno.", "3 Éxitos = Estable. 3 Fallos = Muerte.", "Sacar un 20 cura 1 PG. Sacar 1 cuenta como 2 fallos."] }
];

if (typeof current_lang === 'undefined') {
    var lang_override = localStorage.getItem('quickref_lang');
    var nav_lang = navigator.language ? navigator.language.slice(0, 2) : 'en';
    var current_lang = lang_override || nav_lang;
}
var data_condition = current_lang === 'pt' ? data_condition_pt : (current_lang === 'es' ? data_condition_es : data_condition_en);
