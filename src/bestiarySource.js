// import wyvern from './assets/images/bestiary/Wyvern.webp'
//import * as images from './assets/images/bestiary/*'
const images = import.meta.glob('./assets/images/bestiary/*');

const categories =
{
    cursed: 
    {
        name: "Cursed One",
        pluralName: "Cursed Ones",
        overview: ["These monsters were once men, or other natural folk, before a magical curse or ancient hex transformed them. In rare cases, their curse may have been passed on from parent to child, or from attacker to victim through a wound. Due to the powerfully magical nature of Cursed Ones, one should take care to approach each case individually, being wary of assumptions or past experiences. Some curses may follow reliable patterns - such as that of the Striga - but even then some details may vary, along with the strength of the curse.", "Many cases can be cured through the proper dispelling of the curse. Some curses have known cures, although enacting them may be tricky, while others often require the meeting of certain conditions unique to the circumstances under which the afflicted was cursed. Gathering information on how they came to be cursed is often vital.", "If all else fails, death is the surest cure, although it may not come easily to them, as their curses often bestow terrible strength upon them."]
    },
    draconid:     
    {
        name: "Draconid",
        pluralName: "Draconids",
        overview: ["Dragon. No other monster is as far-famed or feared as the Dragon. Peasants tell tales of their wrath, kings stitch them on their banners, all covet their legendary hoards of treasure. Despite their extreme lethality, the vast majority of true Dragons have been hunted to near extinction by royal armies, huge bands of hunters, and mages seeking their potent blood and organs.", "Indeed, although they are related, the majority of Draconids are not true Dragons, and many are extremely different. They are however often confused or conflated with Dragons by the uneducated, and by braggarts quick to claim they have slain a Dragon. The Draconids are a broad family of quasi-reptiles that encompasses terrestrial, aerial, and aquatic species.", "Aerial species are the most numerous - and often most dangerous - of these, roosting in mountain caves, rocky crags, cliff-faces, and occasionally ruined structures. Herd animals, particularly sheep, are their most common prey, and are snatched boldly from fields and pens."]
    },
    necrophage:
    {    
        name: "Necrophage",
        pluralName: "Necrophages",
        overview: ["Translating literally as 'Corpse Eaters', these are monsters that feed on the dead, particularly humanoid corpses. Their presence in graveyards and on old battlefields - along with their name - has given rise to the erroneous belief that Necrophages themselves are dead creatures reanimated from the corpses of the slain. This is of course nonsense. Unlike Specters, Necrophages are living creatures that while preternatural, have found an ecological niche as scavengers and carrion-eaters.", "They are drawn to death, particularly large burial grounds, mass graves, and sites of battle, where they can sustain themselves for months on the corpses found there. Necrophages often tolerate others of their kind and many are able to display social behaviour when advantageous, hunting in packs when carrion is unavailable, and forming communal feeding grounds for mutual protection. Several species of Necrophage may coexist in a location, and sometimes Necrophages follow other monsters or beasts to scavenge from their discarded kills.", "As buried corpses are a common food source, digging or burrowing is a commonly reported behaviour. Necrophages are nourished by consuming rotting corpses, and when injured, have been observed to devour those who fall fighting them to recoup their strength and vigor. For this reason, it is often advisable to engage the creatures on ground of your choose, rather than in their carrion-filled lairs."]
    },
    relict:     
    {
        name: "Relict",
        pluralName: "Relicts",
        overview: ["Relicts are ancient beings, the last remains of dying species, driven to the brink of extinction by the long march of time, and the relentless expansion of civilisation. While they may once have been numerous, these creatures are now among the rarest monsters encountered, which combined with the mystery surrounding their origins, leads many simple folk to believe them to be gods ruling over deep woodlands, or demons sent up from some burning hell.", "There is great variety among relicts, with many of them being truly unique, and many of them sapient beings. Great caution is advised when hunting any relict, as even known species may have unique variations, skills, or knowledge from their long lives. Additionally, it is worth noting that there are many relicts that seem to pose little threat, and may even be benevolent in their own way, something worth considering before setting out to kill one.", "Despite their magical nature, relicts are incredibly resilient against both steel and silver weaponry, only being truly threatened by blades deeply imbued with magic."]
    }
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
        category: categories.cursed.name,
        type: types.humanoid,
        size: sizes.medium,
        overview: [""],
        strengths: "",
        weaknesses: "",
        peculiarities: "",
        lures: [""],
        harvesting: [""],
        about: [""]
    },
    catoblepas: 
    {
        active: true,
        name: "Catoblepas",
        image: "./assets/images/bestiary/CatoblepasWoodcut.png",
        category: categories.necrophage.name,
        type: types.monstrosity,
        size: sizes.large,
        overview: ["Stocky, shaggy-haired quadruped with cloven hooves and high shoulders. Long sagging neck with a head like a boar's. Curved tusks. Tail is long and ends in a heavy bone club. Tiny, wrinkled third eye nestled in skin folds on forehead.", "Most often found in Swamps, Battlegrounds, Graveyards"],
        strengths: "Immune to necrosis and poison; resistant to non-silver weaponry, fire, force, cold, thunder, and acid damage; emanates a horrific stench that carries disease and poison; its third eye is extremely dangerous, necrotising the flesh of those it gazes upon, it is said to kill almost instantly; very strong club tail, shaggy hide provides some protection from missiles",
        weaknesses: "Harmed by silver; vulnerable to radiant damage; its heavy head is slow to move, making it difficult for it to bring its third eye to bear quickly, especially when surprised; unintelligent, driven by instinct alone",
        peculiarities: "A garland woven of glovewort picked under the noonday sun is said to protect one from the deadly gaze of the Catoblepas.",
        lures: ["Stomach of a dog filled with rotten intestines", "Scent glands from another Catoblepas"],
        harvesting: ["Catoblepas Eye: Ingredient in anti-necrotic potions, valuable to mages", "Catoblepas Tusks: Potion ingredient, peasants claim the tusks can ward off dark spirits.", "Catoblepas Scent Gland: Valuable to mages"],
        about: ["The Catoblepas is a shambling Necrophage that roams swamps and sites of death, carrying disease and pestilence in its thick shaggy fur, which can range from black to dun. Although it possesses large tusks, these are for rooting through graves and corpses, looking for the choicest part, typically the large and small intestines.", "Instead the Catoblepas will use its powerful tail club to attack any who manage to approach, a difficult task in the first place due to the nauseating and disease-bearing stench that emanates from the beast. If this initial attack fails, the creature will rear its cumbersome neck and open its third eye, which can melt flesh from bone and necrotise tissue in an instant. Superstitious peasants say that its eye is a window into some distant hell, but more rational minds theorise that the Catoblepas simply possesses a powerful magical ability.", "While it lacks the natural burrowing abilities of many Necrophages, the Catoblepas is at home in swamps and marshes, and can sink deep into mud and murky pools to conceal itself while it sleeps between meals."]
    },
    ghast: 
    {
        active: true,
        name: "Ghast",
        image: "./assets/images/bestiary/Ghast.webp",
        category: categories.necrophage.name,
        type: types.aberration,
        size: sizes.medium,
        overview: ["Pale, hairless biped on powerful hind legs with large flat, three-toed feet. Squat and heavyset below the waist, hunched and frail above. Small vestigial arms with tiny claws. Bony, protruding head with bulbous eyes and a wide mouth full of short teeth. Short fleshy tail.", "Found near or within inhabited settlements"],
        strengths: "Immune to poison, charms, exhaustion; resistant to regular weapons, psychic, cold, and necrotic damage; resistant to being frightened, and effects targeting aberrations; able to take on the form, voice, and some memories of those it devours; emits a poisonous stench; agile, paralysing claws",
        weaknesses: "Harmed by silver; dried thistles distress them when close, making them skittish, and their attacks more erratic; tea of banewort, thistle and elderflower laced with gravedirt counteracts the paralysis of its claws",
        peculiarities: "Their true faces can be seen in a silver mirror polished with thistle sap",
        lures: ["Clothes taken from one who died alone within the last month"],
        harvesting: ["Ghast Grease: Contains paralytic agents", "Ghast Hide: Flexible and waterproof", "Tarnowski's Gland: Valuable to mages"],
        about: ["Ghasts are strange, even for necrophages. They seem to have slipped through into our world later than their relatives, and possess human-level intellects. They also seem adapted for predation on human and non-human communities, able to take on the forms of most humanoid corpses that they consume. The ghast then lurks in the community for up to three months - the maximum extent of the transformation - before searching for a new victim. While still disguised, the ghast will often proactively seek out a suitable target, stalk them, and kill them, before taking on their shape and life.", "The ghast's transformation takes place over the course of an hour, during which the ghast's flesh bubbles and stretches, a new layer of skin growing over the old. The transformation is more than skin deep however, with the creature taking on the voice and some memories of the victim as well as their form. Once transformed, the ghast may shed its outer layer in an emergency, slithering out of it like a new-birthed foal.", "When in their natural shape, the ghast moves by hopping on its powerful hind legs, and can make incredible leaps for its size. Like many other necrophages, it emits a powerful corpse-stink, poisonous to those around it, while its claws secrete a paralytic grease that freezes the muscle of those it strikes. It is also unusually fearless, perhaps as a result of its intelligence, and cannot be easily frightened, save by bunches of dried thistles, which it desperately avoids."]
    },
    meijersBasilisk: 
    {
        active: true,
        name: "Meijer's Basilisk",
        image: "/assets/images/bestiary/MeijerBasilisk.png",
        category: categories.draconid.name,
        type: types.monstrosity,
        size: sizes.medium,
        overview: ["Long-bodied eight-legged lizard with wide four-toed claws and a leathery hide, usually slate grey or blue. Reddish spines run the length of the back and thick tail. A blunt, wide head with strong jaws and triangular tearing teeth. Large blue eyes.", "Extremely adaptable with subspecies found in arid, temperate and tropical climes. All prefer rough terrain and mountainous areas. Not found in areas colder than temperate."],
        strengths: "Immune to non-magical weaponry and petrification; resistant to fire, thunder, poison, acid, force, and lightning damage, charmed and frightened; gaze rapidly petrifies victim into stone; powerful jaws with a poisonous bite that often festers; good climber; can squeeze into very small gaps; can sense heat from nearby creatures",
        weaknesses: "Vulnerable to cold damage; sluggish and slow; fairly passive when well fed, as it relies on its petrifying gaze to ward off most threats while it conserves energy; poor eyesight, avoiding its thermal sense leaves it almost blind",
        peculiarities: "Prefers to hunt and eat other draconids, which it identifies by their usually high internal body temperature; Cold-blooded unlike many other species, so it prefers to hunt in the evening, after a long day of heating in the sun; the gullet of Meijer's basilisk contains oils that can be distilled into a poultice that prevents - and may partially cure - petrification; superstitions about the cockatrice and true basilisk assert that a mirror may be used to view the creature safely, or to trick it into attacking itself, however these tales have not been tested against Meijer's basilisk.",
        lures: ["Draconid meat, heated over a fire until scorching hot"],
        harvesting: ["Basilisk Eye", "Gullet Oil: Used to distil potions to prevent or cure petrification", "Pit Organ"],
        about: ["Meijer's basilisk is not a true basilisk, and is named instead for its petrifying gaze, which is so often attributed to cockatrices and true basilisks by the uninformed. Unlike many of its draconid kin, Meijer's basilisk is cold-blooded, sluggish, and lazy. It prefers to bask through long days on hot rocks, shifting only in the evening to hunt. However, this should not be mistaken for an easy kill, the eyes of the creature are terrible, and should one look upon them, one's body shall rapidly begin to turn to stone.", "They can also be difficult to track, as they climb well, and prefer to stick to rocky outcrops where they may lie camouflaged against the stone. Their pit organs allow them to detect a creature's body heat, allowing them to avoid danger or stalk prey in any condition."]
    },
    werewolf: 
    {
        active: true,
        name: "Werewolf",
        image: "/assets/images/bestiary/Werewolf.webp",
        category: categories.cursed.name,
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
        category: categories.draconid.name,
        type: types.dragon,
        size: sizes.large,
        overview: ["Aerial biped with sharp, three-toed claws. Can use wing-tips as forelimbs for crawling and climbing. Long, agile neck with a small snake-like head filled with powerful conical teeth. Long thin tail ending in a very sharp, venomous barb.", "            Found in mountains, cliff-faces, open woodlands. More common in higher altitude areas, but have a wide distribution. Often drawn to pastures and open grassland in search of livestock."],
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