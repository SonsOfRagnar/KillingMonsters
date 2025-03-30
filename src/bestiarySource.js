const categories =
{
    cursed: "Cursed One",
    draconid: "Draconid",
    necrophage: "Necrophage",
    relict: "Relict"
}

const types = 
{
    aberration: "Aberration",
    beast: "Beast",
    celestial: "Celestial",
    construct: "Construct",
    dragon: "Dragon",
    elemental: "Elemental",
    fey: "Fey",
    fiend: "Fiend",
    giant: "Giant",
    humanoid: "Humanoid",
    monstrosity: "Monstrosity",
    ooze: "Ooze",
    plant: "Plant",
    undead: "Undead"    
}

const sizes = 
{
    tiny: "Tiny",
    small: "Small",
    medium: "Medium",
    large: "Large",
    huge: "Huge",
    gargantuan: "Gargantuan"
}

const entries = 
{
    template: 
    {
        active: false,
        name: "Template",
        image: "",
        category: categories.cursed,
        type: types.humanoid,
        size: sizes.medium,
        overview: "",
        strengths: "",
        weaknesses: "",
        peculiarities: "",
        lures: "",
        harvesting: "",
        about: ""
    },
    werewolf: 
    {
        active: true,
        name: "Werewolf",
        image: "../assets/images/bestiary/Werewolf.webp",
        category: categories.cursed,
        type: types.humanoid,
        size: sizes.medium,
        overview: ["Wolf-like bipeds with large hind paws and elongated limbs. Can run on all fours with long, clawed hands. Mix of leathery skin and thick wolf fur. Wolf's head and ruff protruding from shoulders. Standard canine jaw configuration, exceptionally strong bite. Found usually in settlements living as ordinary people when not transformed. More feral specimens may lair in forests or high tundra."],
        strengths: "Immune to non-silver weapons, cold damage; resistant to poison, necrotic, thunder, force damage, frightened, charmed. Excellent hearing and smell; rapid regeneration; very fast, strong, and agile; very fast agressive attacks; intelligent",
        weaknesses: "Harmed by silver, vulnerable to a spear tipped with a sprig of Aconite, left under the full moon for an hour.",
        peculiarities: "Potion of Aconite, Hemlock, and silver powder can prevent transformation for one - four hours; some cases of lycanthropy may be cured by removing the curse that first transformed them; bites should be treated with a poultice of rue, wormwood, and silver powder, although chance of infection is low.",
        lures: ["Blood of a child under five years of age", "Heart of one the werewolf loves"],
        harvesting: ["Werewolf Teeth: valuable", "Werewolf Blood: used in potions"],
        about: ["A humanoid cursed with lycanthropy, instilling a thirst for blood and granting the ability to transform into a terrible wolf. Lycanthropes may be either direct results of a magical Curse, born as the offspring of two lycanthropes, or infected when bitten by one already afflicted by lycanthropy. However this last is far rarer than superstition would have you believe as most bites do not transmit the disease. However it is still a possibility and one especially relevant to those who may encounter and fight lycanthropes often.", "In the case of cursed werewolves, there is a possibility of lifting the curse, although as with all curses, it will be likely be unique, and require a unique solution to lift it, if it is at all possible to lift.", "Regardless of the source of their lycanthropy, each werewolf is invariably unique, as they are humanoids cursed or diseased with a terrible burden. Some may be unwilling hosts to the bloodlust, while others may embrace it, or even deliberately use it to their advantage. Some may be fully lucid during transformation, while others may remember only fragments, or believing the episodes to be vivid dreams."]
    },
    wyvern:
    {
        active: true,
        name: "Wyvern",
        image: "../assets/images/bestiary/Wyvern.webp",
        category: categories.draconid,
        type: types.dragon,
        size: sizes.large,
        overview: ["Large Draconid (Dragon): Aerial biped with sharp, three-toed claws. Can use wing-tips as forelimbs for crawling and climbing. Long, agile neck with a small snake-like head filled with powerful conical teeth. Long thin tail ending in a very sharp, venomous barb.", "            Found in mountains, cliff-faces, open woodlands. More common in higher altitude areas, but have a wide distribution. Often drawn to pastures and open grassland in search of livestock."],
        strengths: "Immune to poison, lightning damage; resistant to bludgeoning, slashing, thunder, fire damage; very fast flying speed; very dangerous tail stinger; long neck can dart down while flying to attack at long range; extremely aggressive when threatened",
        weaknesses: "Vulnerable to cold damage; far slower and more vulnerable while on the ground; weighted nets or firmly anchored bear traps may be able to keep it grounded",
        peculiarities: "Although warm-blooded, wyverns are poorly insulated and prefer to hunt during the day, especially around midday; wyvern venom, birthwort and  white gull to create an antivenom; lacking true antivenom, golden oriole should be used instead",
        lures: ["Live goat or sheep"],
        harvesting: ["Wyvern Venom Gland: Used to make antivenom", "Wyvern Skin: Valuable"],
        about: ["Wyverns are voracious and highly aggressive winged draconids that prefer to dive down upon prey from a great height and snatch it in their claws. Much like a tortoise in the claws of an eagle, those caught by a wyvern will soon find themselves lifted to a great height and bourn away to some lofty nest where they are dropped to dash against the rocks. The wyvern can then pick the - often still living - victim apart at its leisure, feeding morsels to their hatchlings.", "One of the wyvern's distinctive characteristics that set it apart from other draconids is their tail. The long tail of a wyvern ends in a foot-long razor sharp hollow spine, that can inject an excruciatingly painful venom into those it pierces. Should one be struck by the tail-spine, their death is almost certain, unless they have access to the correct antivenom."]
    }
}

export 
{
    entries as BestiarySource,
    categories as BestiaryCategories 
};