const categories =
{
    cursed: "Cursed Ones",
    draconids: "Draconids",
    necrophages: "Necrophages",
    relicts: "Relicts"
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

const BestiarySource =
{
    entries: 
    {
        template: 
        {
            name: "Template",
            image: "",
            category: categories.cursed,
            type: types.humanoid,
            size: "Medium",
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
            name: "Werewolf",
            image: "/images/bestiary/Werewolf.webp",
            category: categories.cursed,
            type: types.humanoid,
            size: "Medium",
            overview: "Wolf-like bipeds with large hind paws and elongated limbs. Can run on all fours with long, clawed hands. Mix of leathery skin and thick wolf fur. Wolf's head and ruff protruding from shoulders. Standard canine jaw configuration, exceptionally strong bite. Found usually in settlements living as ordinary people when not transformed. More feral specimens may lair in forests or high tundra.",
            strengths: "Immune to non-silver weapons, cold damage; resistant to poison, necrotic, thunder, force damage, frightened, charmed. Excellent hearing and smell; rapid regeneration; very fast, strong, and agile; very fast agressive attacks; intelligent",
            weaknesses: "Harmed by silver, vulnerable to a spear tipped with a sprig of Aconite, left under the full moon for an hour.",
            peculiarities: "Potion of Aconite, Hemlock, and silver powder can prevent transformation for one - four hours; some cases of lycanthropy may be cured by removing the curse that first transformed them; bites should be treated with a poultice of rue, wormwood, and silver powder, although chance of infection is low.",
            lures: ["Blood of a child under five years of age", "Heart of one the werewolf loves"],
            harvesting: ["Werewolf Teeth: valuable", "Werewolf Blood: used in potions"],
            about: ["A humanoid cursed with lycanthropy, instilling a thirst for blood and granting the ability to transform into a terrible wolf. Lycanthropes may be either direct results of a magical Curse, born as the offspring of two lycanthropes, or infected when bitten by one already afflicted by lycanthropy. However this last is far rarer than superstition would have you believe as most bites do not transmit the disease. However it is still a possibility and one especially relevant to those who may encounter and fight lycanthropes often.", "In the case of cursed werewolves, there is a possibility of lifting the curse, although as with all curses, it will be likely be unique, and require a unique solution to lift it, if it is at all possible to lift.", "Regardless of the source of their lycanthropy, each werewolf is invariably unique, as they are humanoids cursed or diseased with a terrible burden. Some may be unwilling hosts to the bloodlust, while others may embrace it, or even deliberately use it to their advantage. Some may be fully lucid during transformation, while others may remember only fragments, or believing the episodes to be vivid dreams."]
        },
        wyvern:
        {

        }
    }

}

export default BestiarySource;