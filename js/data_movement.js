var data_movement_en = [
    {
        title: "Move",
        icon: "run",
        subtitle: "Cost: 5ft (1.5m) per 5ft (1.5m)",
        description: "Movement cost: 5ft (1.5m) per 5ft (1.5m) moved",
        reference: "PHB, pg. 190.",
        bullets: [
            "If you have more than one speed, such as your walking speed and a flying speed, you can switch back and forth between your speeds during your move. Whenever you switch, subtract the distance you've already moved from the new speed.",
            "You can move through a nonhostile creature's space.",
            "You can move through a hostile creature's space only if the creature is at least two sizes larger or smaller than you.",
            "Another creature's space is difficult terrain for you.",
            "Whether a creature is a friend or an enemy, you can't willingly end your move in its space."
        ]
    },
    {
        title: "Climb",
        icon: "crags",
        subtitle: "Cost: 10ft (3m) per 5ft (1.5m)",
        description: "Movement cost: 10ft (3m) per 5ft (1.5m) climbed",
        reference: "PHB, pg. 182.",
        bullets: [
            "May involve a Strength (Athletics) check if the climb is difficult"
        ]
    },
    {
        title: "Swim",
        icon: "at-sea",
        subtitle: "Cost: 10ft (3m) per 5ft (1.5m)",
        description: "Movement cost: 10ft (3m) per 5ft (1.5m) swum",
        reference: "PHB, pg. 182.",
        bullets: [
            "May involve a Strength (Athletics) check if the swim is difficult"
        ]
    },
    {
        title: "Drop prone",
        icon: "falling",
        subtitle: "Cost: 0ft (0m)",
        description: "Movement cost: 0ft (0m) (free)",
        reference: "PHB, pgs. 190-191,292.",
        bullets: [
            "You can drop prone without using any of your speed",
            "To move while prone, you must crawl or use magic such as teleportation",
            "Dropping prone adds the <i>Prone</i> condition (melee attacks against you have advantage, ranged attacks against you have disadvantage, your own attacks have disadvantage)"
        ]
    },
    {
        title: "Crawl",
        icon: "crawl",
        subtitle: "Cost: 10ft (3m) per 5ft (1.5m)",
        description: "Movement cost: 10ft (3m) per 5ft (1.5m) crawled",
        reference: "PHB, pg. 182.",
        bullets: [

        ]
    },
    {
        title: "Stand up",
        icon: "strong",
        subtitle: "Cost: half movement speed",
        description: "Movement cost: half of your speed",
        reference: "PHB, pg. 190-191.",
        bullets: [
            "You can't stand up if your speed is 0"
        ]
    },
    {
        title: "High jump",
        icon: "wingfoot",
        subtitle: "Cost: 5ft (1.5m) per 5ft (1.5m)",
        description: "Movement cost: 5ft (1.5m) per 5ft (1.5m) jumped",
        
        reference: "PHB, pg. 182.",
        bullets: [
            "You leap into the air a number of feet equal to <b>3 + your Strength modifier</b> if you move at least 10 feet (3m) on foot immediately before the jump.",
            "When you make a standing high jump, you can jump only half that distance.",
            "You can extend your arms half your height above yourself during the jump.",
            "In some circumstances, your DM might allow you to make a Strength (Athletics) check to jump higher than you normally can."
        ]
    },
    {
        title: "Long jump",
        icon: "wingfoot",
        subtitle: "Cost: 5ft (1.5m) per 5ft (1.5m)",
        description: "Movement cost: 5ft (1.5m) per 5ft (1.5m) jumped",
        reference: "PHB, pg. 182.",
        bullets: [
            "You cover a number of feet up to your <b>Strength score</b> if you move at least 10 feet (3m) on foot immediately before the jump.",
            "When you make a standing long jump, you can leap only half that distance",
            "May involve a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump's distance). You hit the obstacle on a failed check.",
            "May involve a DC 10 Dexterity (Acrobatics) check to land on your feet in difficult terrain. You land prone on a failed check."
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any stunt not on this list",
        description: "Perform any movement or stunt you can imagine",
        bullets: [
            "When you describe a kind of movement not detailed elsewhere in the rules, the DM tells you whether it is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    },
    {
        title: "Difficult terrain",
        icon: "stone-pile",
        subtitle: "Cost modifier: +5ft (1.5m) per 5ft (1.5m)",
        reference: "PHB, pg. 182.",
        description: "Moving in difficult terrain costs an additional 5ft (1.5m) per 5ft (1.5m) of movement",
        bullets: [
        ]
    },
    {
        title: "Grapple move",
        icon: "grab",
        subtitle: "Modifier: speed halved",
        description: "Drag or carry the grappled creature with you",
        reference: "PHB, pg. 195.",
        bullets: [
            "Your speed is halved unless the creature is Tiny or 2 or more sizes smaller than you."
        ]
    }
]

var data_movement_pt = [
    { title: "Mover", icon: "run", subtitle: "Custo: 1,5m (5ft) por 1,5m (5ft)", description: "Custo de movimento: 1,5m (5ft) por 1,5m (5ft)", reference: "LDJ 2024", bullets: ["Você pode se mover pelo espaço de criaturas não hostis.", "Pelo espaço de hostis apenas se forem 2 tamanhos maiores ou menores.", "O espaço de outra criatura conta como terreno difícil."] },
    { title: "Escalar", icon: "crags", subtitle: "Custo: 3m (10ft) por 1,5m (5ft)", description: "Custo de movimento: 3m (10ft) por 1,5m (5ft)", reference: "LDJ 2024", bullets: ["Sem custo extra se possuir deslocamento natural de escalada."] },
    { title: "Nadar", icon: "at-sea", subtitle: "Custo: 3m (10ft) por 1,5m (5ft)", description: "Custo de movimento: 3m (10ft) por 1,5m (5ft)", reference: "LDJ 2024", bullets: ["Sem custo extra se possuir deslocamento natural de natação."] },
    { title: "Cair no chão", icon: "falling", subtitle: "Custo: 0m (0ft)", description: "Custo de movimento: 0m (0ft)", reference: "LDJ 2024", bullets: ["Você pode se jogar no chão sem gastar seu deslocamento."] },
    { title: "Rastejar", icon: "crawl", subtitle: "Custo: 3m (10ft) por 1,5m (5ft)", description: "Custo de movimento: 3m (10ft) por 1,5m (5ft)", reference: "LDJ 2024", bullets: ["Você precisa estar na condição Caído para rastejar."] },
    { title: "Levantar", icon: "strong", subtitle: "Custo: metade do mov.", description: "Custo de movimento: metade do seu total", reference: "LDJ 2024", bullets: ["Você não pode se levantar se o seu deslocamento atual for 0."] },
    { title: "Salto em altura", icon: "wingfoot", subtitle: "Custo: 1,5m (5ft) por 1,5m (5ft)", description: "Custo de movimento: 1,5m (5ft) por 1,5m (5ft)", reference: "LDJ 2024", bullets: ["Pula cerca de 1m (3ft) + 0,3m (1ft) x Modificador de Força (correndo 3m (10ft) antes).", "Pula metade da distância se fizer isso parado."] },
    { title: "Salto em dist.", icon: "wingfoot", subtitle: "Custo: 1,5m (5ft) por 1,5m (5ft)", description: "Custo de movimento: 1,5m (5ft) por 1,5m (5ft)", reference: "LDJ 2024", bullets: ["Pula cerca de 0,3m (1ft) x Valor de Força (correndo 3m (10ft) antes).", "Pula metade da distância se fizer isso parado."] },
    { title: "Terreno difícil", icon: "stone-pile", subtitle: "Modificador: +1,5m (5ft)", description: "Custa 1,5m (5ft) adicionais por casa", reference: "LDJ 2024", bullets: [] },
    { title: "Mover agarrado", icon: "grab", subtitle: "Mod: mov. pela metade", description: "Arrastar criatura que você agarrou", reference: "LDJ 2024", bullets: ["Deslocamento cai pela metade, a não ser que a criatura seja Minúscula ou 2+ tamanhos menor."] }
];

var data_movement_es = [
    { title: "Mover", icon: "run", subtitle: "Costo: 5 pies (1,5m) por 5 pies (1,5m)", description: "Costo de movimiento", reference: "PHB 2024", bullets: ["Puedes moverte por el espacio de criaturas no hostiles.", "Por el de hostiles solo si son 2 tamaños mayores o menores.", "El espacio de otra criatura es siempre terreno difícil."] },
    { title: "Escalar", icon: "crags", subtitle: "Costo: 10 pies (3m) por 5 pies (1,5m)", description: "Costo de movimiento escalar", reference: "PHB 2024", bullets: ["Sin costo extra si tienes velocidad de escalada."] },
    { title: "Nadar", icon: "at-sea", subtitle: "Costo: 10 pies (3m) por 5 pies (1,5m)", description: "Costo de movimiento nadar", reference: "PHB 2024", bullets: ["Sin costo extra si tienes velocidad de nado."] },
    { title: "Caer al suelo", icon: "falling", subtitle: "Costo: 0 pies (0m)", description: "Costo de movimiento", reference: "PHB 2024", bullets: ["Puedes tirarte al suelo sin gastar movimiento."] },
    { title: "Arrastrarse", icon: "crawl", subtitle: "Costo: 10 pies (3m) por 5 pies (1,5m)", description: "Costo de movimiento", reference: "PHB 2024", bullets: ["Debes estar con la condición de Derribado para arrastrarte."] },
    { title: "Levantarse", icon: "strong", subtitle: "Costo: mitad de vel.", description: "Costo de movimiento: mitad de tu total", reference: "PHB 2024", bullets: ["No puedes levantarte si tu velocidad actual es 0."] },
    { title: "Salto de altura", icon: "wingfoot", subtitle: "Costo: 5 pies (1,5m) por 5 pies (1,5m)", description: "Costo de salto alto", reference: "PHB 2024", bullets: ["Saltas 3 pies (1m) + tu Modificador de Fuerza en pies (con 10 pies (3m) de carrera).", "Mitad de distancia si saltas desde posición estática."] },
    { title: "Salto de long.", icon: "wingfoot", subtitle: "Costo: 5 pies (1,5m) por 5 pies (1,5m)", description: "Costo de salto largo", reference: "PHB 2024", bullets: ["Saltas tu Puntuación de Fuerza en pies (con 10 pies (3m) de carrera).", "Mitad de distancia si saltas desde posición estática."] },
    { title: "Terreno difícil", icon: "stone-pile", subtitle: "Modificador: +5 pies (1,5m)", description: "Cuesta 5 pies (1,5m) adicionales", reference: "PHB 2024", bullets: [] },
    { title: "Mover agarrado", icon: "grab", subtitle: "Modificador: mitad vel.", description: "Arrastrar una criatura agarrada", reference: "PHB 2024", bullets: ["La velocidad se reduce a la mitad, salvo que la criatura sea Diminuta o 2 tamaños menor."] }
];

if (typeof current_lang === 'undefined') {
    var lang_override = localStorage.getItem('quickref_lang');
    var nav_lang = navigator.language ? navigator.language.slice(0, 2) : 'en';
    var current_lang = lang_override || nav_lang;
}
var data_movement = current_lang === 'pt' ? data_movement_pt : (current_lang === 'es' ? data_movement_es : data_movement_en);
