var data_action_en = [
    {
        title: "Attack",
        icon: "crossed-swords",
        subtitle: "Melee or ranged attack",
        description: "Perform a melee or ranged attack with your weapon",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Certain features, such as the <i>Extra Attack</i> feature of the fighter, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You may move in between these attacks.",
            "When you attack with a light melee weapon, you can use a bonus action to attack with your other hand (see the <i>Offhand attack</i> bonus action).",
            "You may replace one of your melee attacks with a <i>Grapple</i> or a <i>Shove</i>.",
            "Some conditions give advantage on the attack: attacks against blinded, paralyzed, petrified, restrained, stunned, or unconscious targets; melee attacks against prone targets; attacks by invisible or hidden attackers.",
            "Some conditions give disadvantage on the attack: attacks against invisible or hidden targets; ranged attacks against prone targets; attacks by blinded, frightened, poisoned, or restrained attackers."
        ]
    },
    {
        title: "Grapple",
        icon: "grab",
        subtitle: "Unarmed Strike",
        description: "Attempt to grab a creature or wrestle with it",
        reference: "PHB 2024",
        bullets: [
            "As an Unarmed Strike, you can grapple a creature within reach.",
            "The target must succeed on a Strength or Dexterity saving throw (its choice).",
            "The DC is 8 + your Strength modifier + your Proficiency Bonus.",
            "On a failed save, the target is Grappled."
        ]
    },
    {
        title: "Shove",
        icon: "hand",
        subtitle: "Unarmed Strike",
        description: "Shove a creature, either to knock it prone or push it away from you",
        reference: "PHB 2024",
        bullets: [
            "As an Unarmed Strike, you can shove a creature within reach.",
            "The target must succeed on a Strength or Dexterity saving throw (its choice).",
            "The DC is 8 + your Strength modifier + your Proficiency Bonus.",
            "On a failed save, the target is knocked Prone or pushed 5 feet (1.5m) away."
        ]
    },
    {
        title: "Magic",
        icon: "magic-swirl",
        subtitle: "Cast time of 1 action",
        description: "Cast a spell or use a magic item",
        reference: "PHB 2024",
        bullets: [
            "Cast a spell with a casting time of an Action.",
            "Use a magic item that requires an Action to activate."
        ]
    },
    {
        title: "Dash",
        icon: "sprint",
        subtitle: "Double movement speed",
        description: "Gain extra movement for the current turn",
        reference: "PHB, pg. 192.",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Dodge",
        icon: "aura",
        subtitle: "Increase defenses",
        description: "Focus entirely on avoiding attacks",
        reference: "PHB, pg. 192.",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "Escape",
        icon: "manacles",
        subtitle: "Escape a grapple",
        description: "Escape a grapple",
        reference: "PHB, pg. 195.",
        bullets: [
            "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
        ]
    },
    {
        title: "Help",
        icon: "telepathy",
        subtitle: "Grant an ally advantage",
        description: "Grant an ally advantage on an ability check or attack",
            reference: "PHB 2024",
        bullets: [
                "The target gains advantage on the next ability check it makes to perform the task. You must have proficiency in the skill if it requires a skill check without tools.",
            "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet (1.5m) of you.",
            "The advantage lasts until the start of your next turn."
        ]
    },
    {
            title: "Utilize",
        icon: "snatch",
        subtitle: "Interact, use special abilities",
            description: "Interact with an object",
            reference: "PHB 2024",
        bullets: [
                "You normally interact with an object while doing something else. If you need to dedicate your attention to it (or use a second object), use the Utilize action.",
            "Equipping or unequipping a shield uses the Utilize action.",
            "Drinking a potion yourself is a Bonus Action, but administering it to someone else uses the Utilize action."
        ]
    },
    {
        title: "Hide",
        icon: "hood",
        subtitle: "",
            description: "Attempt to conceal yourself",
            reference: "PHB 2024",
        bullets: [
                "You must be heavily obscured, or behind Three-Quarters or Total Cover.",
                "Make a DC 15 Dexterity (Stealth) check.",
                "On a success, you gain the Invisible condition.",
                "The condition ends if you make a sound louder than a whisper, an enemy finds you, you make an attack roll, or you cast a spell with a verbal component."
        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Devote your attention to finding something",
            reference: "PHB 2024",
        bullets: [
                "Make a Wisdom (Perception) check to discern a hidden object or creature.",
                "Make an Intelligence (Investigation) check to deduce the location of a hidden object or creature.",
                "Make a Wisdom (Survival) check to follow tracks."
        ]
    },
        {
            title: "Study",
            icon: "book-cover-open",
            subtitle: "Recall information",
            description: "Study a creature, object, or text",
            reference: "PHB 2024",
            bullets: [
                "Make an Intelligence check to recall information or deduce something.",
                "Applicable skills: Arcana, History, Nature, Religion."
            ]
        },
        {
            title: "Influence",
            icon: "convince",
            subtitle: "Interact socially",
            description: "Influence a creature's attitude or actions",
            reference: "PHB 2024",
            bullets: [
                "Make a Charisma check to influence a creature.",
                "Applicable skills: Animal Handling, Deception, Intimidation, Persuasion."
            ]
        },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Stabilize a creature",
        icon: "first-aid",
        subtitle: "Administer first aid to a dying creature",
        description: "Stop a dying creature from needing to make death saving throws",
        reference: "PHB, pg. 197.",
        bullets: [
            "Make a Wisdom (Medicine) check with DC 10",
            "On a success, the creature is stable and no longer needs to make death saving throws",
            "A stable creature regains 1 hit point after 1d4 hours"
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
]

var data_action_pt = [
    { title: "Ataque", icon: "crossed-swords", subtitle: "Corpo-a-corpo ou à distância", description: "Ataca com uma arma ou ataque desarmado", reference: "LDJ 2024", bullets: ["Pode substituir um ataque por Agarrar ou Empurrar.", "Pode equipar/desequipar uma arma como parte do ataque."] },
    { title: "Agarrar", icon: "grab", subtitle: "Ataque Desarmado", description: "Tentar agarrar uma criatura", reference: "LDJ 2024", bullets: ["O alvo faz resistência de For/Des (CD 8 + For + Proficiência).", "Se falhar, fica Agarrado."] },
    { title: "Empurrar", icon: "hand", subtitle: "Ataque Desarmado", description: "Empurrar ou derrubar", reference: "LDJ 2024", bullets: ["O alvo faz resistência de For/Des (CD 8 + For + Proficiência).", "Se falhar, é derrubado Caído ou empurrado 1,5m (5ft)."] },
    { title: "Magia", icon: "magic-swirl", subtitle: "Tempo: 1 Ação", description: "Conjurar magia ou usar item mágico", reference: "LDJ 2024", bullets: ["Conjura uma magia de tempo de 1 Ação.", "Ativa um item mágico que exija uma Ação."] },
    { title: "Disparada", icon: "sprint", subtitle: "Dobro de deslocamento", description: "Ganha deslocamento extra", reference: "LDJ 2024", bullets: ["O aumento é igual ao seu deslocamento."] },
    { title: "Desengajar", icon: "journey", subtitle: "Sem ataques de oportunidade", description: "Seu movimento não provoca ataques", reference: "LDJ 2024", bullets: [] },
    { title: "Esquiva", icon: "aura", subtitle: "Aumenta defesas", description: "Foca em evitar ataques", reference: "LDJ 2024", bullets: ["Ataques contra você têm desvantagem.", "Testes de resistência de Destreza têm vantagem."] },
    { title: "Escapar", icon: "manacles", subtitle: "Escapar de agarre", description: "Escapar de ser agarrado", reference: "LDJ 2024", bullets: ["Faça um teste de Força (Atletismo) ou Destreza (Acrobacia) contra a CD de agarre."] },
    { title: "Ajuda", icon: "telepathy", subtitle: "Concede vantagem", description: "Ajuda um aliado", reference: "LDJ 2024", bullets: ["O alvo ganha vantagem em seu próximo teste ou ataque.", "Se for um teste de perícia sem ferramentas, você deve ter proficiência na perícia."] },
    { title: "Utilizar", icon: "snatch", subtitle: "Interagir com objetos", description: "Interagir com objeto", reference: "LDJ 2024", bullets: ["Equipar um escudo ou interagir ativamente com um objeto complexo.", "Beber uma poção é Ação Bônus; dar a alguém requer a Ação Utilizar."] },
    { title: "Esconder-se", icon: "hood", subtitle: "Ficar Invisível", description: "Ocultar-se de inimigos", reference: "LDJ 2024", bullets: ["Requer Cobertura Três Quartos, Total ou estar Fortemente Obscurecido.", "Faça um teste de Furtividade CD 15. Sucesso = condição Invisível."] },
    { title: "Procurar", icon: "magnifying-glass", subtitle: "Encontrar algo", description: "Dedicado a achar algo oculto", reference: "LDJ 2024", bullets: ["Use Percepção, Investigação ou Sobrevivência."] },
    { title: "Estudar", icon: "book-cover-open", subtitle: "Lembrar informações", description: "Estudar alvo ou texto", reference: "LDJ 2024", bullets: ["Testes de Inteligência: Arcanismo, História, Natureza ou Religião."] },
    { title: "Influenciar", icon: "convince", subtitle: "Interação social", description: "Mudar atitude de criatura", reference: "LDJ 2024", bullets: ["Testes de Carisma: Enganação, Intimidação, Persuasão, ou Adestrar Animais."] },
    { title: "Preparar", icon: "stopwatch", subtitle: "Ação com gatilho", description: "Prepara uma reação", reference: "LDJ 2024", bullets: ["Escolhe um gatilho e a ação de resposta."] },
    { title: "Usar hab. classe", icon: "embrassed-energy", subtitle: "Poder da classe", description: "Uso de poder de classe/espécie", reference: "LDJ 2024", bullets: [] },
    { title: "Estabilizar", icon: "first-aid", subtitle: "Primeiros socorros", description: "Impede morte de criatura", reference: "LDJ 2024", bullets: ["Teste de Medicina CD 10 ou usar Kit de Curandeiro."] },
    { title: "Improvisar", icon: "juggler", subtitle: "Ações criativas", description: "Fazer o que imaginar", reference: "LDJ 2024", bullets: ["O Mestre decide se é possível e qual teste é necessário."] }
];

var data_action_es = [
    { title: "Ataque", icon: "crossed-swords", subtitle: "Cuerpo a cuerpo o distancia", description: "Ataca con un arma o ataque desarmado", reference: "PHB 2024", bullets: ["Puedes sustituir un ataque por Agarrar o Empujar.", "Puedes equipar/desequipar un arma como parte del ataque."] },
    { title: "Agarrar", icon: "grab", subtitle: "Ataque desarmado", description: "Intentar agarrar", reference: "PHB 2024", bullets: ["El objetivo hace salvación de Fue/Des (CD 8 + Fue + Competencia).", "Si falla, queda Agarrado."] },
    { title: "Empujar", icon: "hand", subtitle: "Ataque desarmado", description: "Empujar o derribar", reference: "PHB 2024", bullets: ["El objetivo hace salvación de Fue/Des (CD 8 + Fue + Competencia).", "Si falla, cae Derribado o es empujado 5 pies (1,5m)."] },
    { title: "Magia", icon: "magic-swirl", subtitle: "Tiempo de conjuro: 1 Acción", description: "Lanzar conjuro o usar objeto mágico", reference: "PHB 2024", bullets: ["Lanza un conjuro de 1 Acción.", "Activa un objeto mágico que exija una Acción."] },
    { title: "Carrera", icon: "sprint", subtitle: "Doble de velocidad", description: "Gana movimiento extra", reference: "PHB 2024", bullets: ["El incremento es igual a tu velocidad."] },
    { title: "Destrabarse", icon: "journey", subtitle: "Previene ataques de oportunidad", description: "Tu movimiento no provoca ataques", reference: "PHB 2024", bullets: [] },
    { title: "Esquivar", icon: "aura", subtitle: "Aumenta defensas", description: "Enfócate en evitar ataques", reference: "PHB 2024", bullets: ["Los ataques en tu contra tienen desventaja.", "Tiradas de salvación de Destreza con ventaja."] },
    { title: "Escapar", icon: "manacles", subtitle: "Escapar de agarre", description: "Escapar de ser agarrado", reference: "PHB 2024", bullets: ["Haz una prueba de Fuerza (Atletismo) o Destreza (Acrobacias) contra la CD del agarre."] },
    { title: "Ayuda", icon: "telepathy", subtitle: "Otorga ventaja", description: "Ayuda a un aliado", reference: "PHB 2024", bullets: ["El objetivo tiene ventaja en su próxima prueba o ataque.", "Si es una prueba sin herramientas, debes tener competencia."] },
    { title: "Utilizar", icon: "snatch", subtitle: "Interactuar con objetos", description: "Interactuar con un objeto", reference: "PHB 2024", bullets: ["Equipar un escudo o interactuar activamente con un objeto.", "Beber una poción es Acción Adicional; dársela a otro es Acción Utilizar."] },
    { title: "Esconderse", icon: "hood", subtitle: "Quedar Invisible", description: "Ocultarte de los enemigos", reference: "PHB 2024", bullets: ["Requiere Cobertura 3/4, Total o estar Fuertemente oscurecido.", "Haz una prueba de Sigilo CD 15. Éxito = Invisible."] },
    { title: "Buscar", icon: "magnifying-glass", subtitle: "Encontrar algo", description: "Dedicado a buscar algo oculto", reference: "PHB 2024", bullets: ["Usa Percepción, Investigación o Supervivencia."] },
    { title: "Estudiar", icon: "book-cover-open", subtitle: "Recordar información", description: "Estudiar objetivo o texto", reference: "PHB 2024", bullets: ["Pruebas de Inteligencia: Arcano, Historia, Naturaleza, Religión."] },
    { title: "Influenciar", icon: "convince", subtitle: "Interacción social", description: "Cambiar actitud de criatura", reference: "PHB 2024", bullets: ["Pruebas de Carisma: Engaño, Intimidación, Persuasión o Trato con animales."] },
    { title: "Preparar", icon: "stopwatch", subtitle: "Acción con detonante", description: "Prepara una reacción", reference: "PHB 2024", bullets: ["Elige un detonante y la acción de respuesta."] },
    { title: "Usar hab. clase", icon: "embrassed-energy", subtitle: "Poder de clase", description: "Uso de poder de clase/raza", reference: "PHB 2024", bullets: [] },
    { title: "Estabilizar", icon: "first-aid", subtitle: "Primeros auxilios", description: "Impide muerte de criatura", reference: "PHB 2024", bullets: ["Prueba de Medicina CD 10 o usa un Kit de Sanador."] },
    { title: "Improvisar", icon: "juggler", subtitle: "Acciones creativas", description: "Hacer lo que imagines", reference: "PHB 2024", bullets: ["El DM decide si es posible y qué prueba se requiere."] }
];

if (typeof current_lang === 'undefined') {
    var lang_override = localStorage.getItem('quickref_lang');
    var nav_lang = navigator.language ? navigator.language.slice(0, 2) : 'en';
    var current_lang = lang_override || nav_lang;
}
var data_action = current_lang === 'pt' ? data_action_pt : (current_lang === 'es' ? data_action_es : data_action_en);
