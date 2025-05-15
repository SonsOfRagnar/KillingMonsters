let images = new Map();
ImportBestiaryImages();

console.log("Import Bestiary images.");
console.log(images);

function ImportBestiaryImages()
{
    const imagesImport = Object.values(import.meta.glob('./assets/images/bestiary/*.{png,jpg,jpeg,PNG,JPEG,webp}', { eager: true, query: '?url', import: 'default' }));

    imagesImport.forEach(element => {
        let splitURL = element.split("/");
        let imageName = splitURL[splitURL.length - 1];
        let imageExtension = "." + imageName.split(".")[1]; // image .extension
        imageName = imageName.split(".")[0]; // image name with no extension
        let sanitisedImageName = imageName.split("-")[0] + imageExtension; // we remove any -id added by the vite build process to ensure our name matches the entries.
    
        // via map
        images.set(sanitisedImageName, element);
    }) 
}

function GetImage(imageName)
{
    console.log("GetImage called for " + imageName);
    console.log(images.get(imageName));
    return images.get(imageName);
}

const categories =
{
    beast:
    {
        active: true,
        name: "Beast",
        pluralName: "Beasts",
        image: GetImage("BeastsDiagram.png"),
        overview: ["Beasts are natural creatures, evolved over time due to natural selection and mutation, without magical aid or outside influence. As such, silver as no effect on them.", "Common animals such as wolves, bears, birds, et al. are themselves beasts, but are omitted from this bestiary for brevity, since they are of a common nature, and easily warded off by fire, and other ordinary means.", "There are however divers beasts both strange and monstrous, whom by virtue of their rarity, natural ferocity, or incredible strengths are oft the subject of contracts for monster hunters. They are set down within this section."]
    },
    cursed: 
    {
        active: true,
        name: "Cursed One",
        pluralName: "Cursed Ones",
        image: GetImage("CursedOnesDiagram.png"),
        overview: ["These monsters were once men, or other natural folk, before a magical curse or ancient hex transformed them. In rare cases, their curse may have been passed on from parent to child, or from attacker to victim through a wound. Due to the powerfully magical nature of Cursed Ones, one should take care to approach each case individually, being wary of assumptions or past experiences. Some curses may follow reliable patterns - such as that of the Striga - but even then some details may vary, along with the strength of the curse.", "Many cases can be cured through the proper dispelling of the curse. Some curses have known cures, although enacting them may be tricky, while others often require the meeting of certain conditions unique to the circumstances under which the afflicted was cursed. Gathering information the exact nature of the curse is usually vital. How were they cursed, by whom, and why? The wording of curses can be especially important, as finding ways to fulfil a curse's parameters while subverting the intended effects can break their power. There is more power in words than many know, and one does not need to be a great mage to invoke powers beyond their understanding with and ill-spoken curse or threat.", "If all else fails, death is a swift cure for most cursed ones, although it may not come easily to them, as their curses often bestow terrible strength upon them."]
    },
    draconid:     
    {
        active: true,
        name: "Draconid",
        pluralName: "Draconids",
        image: GetImage("DraconidDiagram.png"),
        overview: ["Dragon. No other monster is as far-famed or feared as the Dragon. Peasants tell tales of their wrath, kings stitch them on their banners, all covet their legendary hoards of treasure. Despite their extreme lethality, the vast majority of true Dragons have been hunted to near extinction by royal armies, huge bands of hunters, and mages seeking their potent blood and organs.", "Indeed, although they are related, the majority of Draconids are not true Dragons, and many are extremely different. They are however often confused or conflated with Dragons by the uneducated, and by braggarts quick to claim they have slain a Dragon. The Draconids are a broad family of quasi-reptiles that encompasses terrestrial, aerial, and aquatic species.", "Aerial species are the most numerous - and often most dangerous - of these, roosting in mountain caves, rocky crags, cliff-faces, and occasionally ruined structures. Herd animals, particularly sheep, are their most common prey, and are snatched boldly from fields and pens."]
    },
    elementa:
    {
        active: false,
        name: "Elemental",
        pluralName: "Elementa",
        overview: []
    },
    hybrid:
    {
        active: false,
        name: "Hybrid",
        pluralName: "Hybrids",
        overview: []
    },
    insectoid:
    {
        active: true,
        name: "Insectoid",
        pluralName: "Insectoids",
        image: GetImage("InsectoidsDiagram.png"),
        overview: ["A broad family of large and dangerous arthropods, which often resemble outsized versions of their more mundane relatives. Like smaller insects, Insectoid monsters often form large colonies and display complex organisational behaviours, often seperated by caste: drones, warriors, queens, etc. Although some Insectoids are solitary creatures, one would always be wise to assume there may be others. If one is lax in exterminating a colony, they can quickly repair their numbers and become far more aggressive than before.", "Apart from their strength in numbers, the vast majority of Insectoids are protected by strong, chitinous exoskeletons that can resist even the sharpest blades. Many can survive the loss of limbs, and some have secondary organs and decentralised nervous systems that make them exceptionally resilient. Fire is often effective against them, although it is not a foolproof solution.", "Most insectoids burrow and climb exceptionally well, are fast, hardy, and blindly obedient to their colony, making them highly dangerous."]
    },
    necrophage:
    {    
        active: true,
        name: "Necrophage",
        pluralName: "Necrophages",
        image: GetImage("NecrophagesDiagram.png"),
        overview: ["Translating literally as 'Corpse Eaters', these are monsters that feed on the dead, particularly humanoid corpses. Their presence in graveyards and on old battlefields - along with their name - has given rise to the erroneous belief that Necrophages themselves are dead creatures reanimated from the corpses of the slain. This is of course nonsense. Unlike Specters, Necrophages are living creatures that while preternatural, have found an ecological niche as scavengers and carrion-eaters.", "They are drawn to death, particularly large burial grounds, mass graves, and sites of battle, where they can sustain themselves for months on the corpses found there. Necrophages often tolerate others of their kind and many are able to display social behaviour when advantageous, hunting in packs when carrion is unavailable, and forming communal feeding grounds for mutual protection. Several species of Necrophage may coexist in a location, and sometimes Necrophages follow other monsters or beasts to scavenge from their discarded kills.", "As buried corpses are a common food source, digging or burrowing is a commonly reported behaviour. Necrophages are nourished by consuming rotting corpses, and when injured, have been observed to devour those who fall fighting them to recoup their strength and vigor. For this reason, it is often advisable to engage the creatures on ground of your choose, rather than in their carrion-filled lairs."]
    },
    ogroid:
    {
        active: false,
        name: "Ogroid",
        pluralName: "Ogroids",
        overview: []
    },
    relict:     
    {
        active: true,
        name: "Relict",
        pluralName: "Relicts",
        image: GetImage("RelictsDiagram.png"),
        overview: ["Relicts are ancient beings, the last remains of dying species, driven to the brink of extinction by the long march of time, and the relentless expansion of civilisation. While they may once have been numerous, these creatures are now among the rarest monsters encountered, which combined with the mystery surrounding their origins, leads many simple folk to believe them to be gods ruling over deep woodlands, or demons sent up from some burning hell.", "There is great variety among relicts, with many of them being truly unique, and many of them sapient beings. Great caution is advised when hunting any relict, as even known species may have unique variations, skills, or knowledge from their long lives. Additionally, it is worth noting that there are many relicts that seem to pose little threat, and may even be benevolent in their own way, something worth considering before setting out to kill one.", "Despite their magical nature, relicts are incredibly resilient against both steel and silver weaponry, only being truly threatened by blades deeply imbued with magic."]
    },
    spectre:
    {
        active: true,
        name: "Spectre",
        pluralName: "Spectres",
        image: GetImage("Spectres.webp"),
        overview: ["Spectres is a broad term for the undead, the restless spirits of the deceased who cannot - or will not - give up their grip on life. Spectres take many forms, and even within a given classification there may be significant variety. The undead are not species of creature, like most of the monsters covered within these pages, but a projection of the spirit onto the material world. They are shaped more by their own experience, memories, and trauma than they are by rules of nature, and their abilities, motivations, and weaknesses may vary accordingly.", "Many Spectres retain some level of sentience and can be reasoned with, communicated with, and even collaborated with, as some may wish to peacefully move on at last. Others are violent and bloodthirsty, or bring pestilence, nightmares, and sorrow. One should be wary of jumping straight to a drawn sword however, as not all Spectres can be simply defeated. Many require the meeting of certain conditions - much like the lifting of a curse - to be dispelled."]
    },
    vampire:
    {
        active: true,
        name: "Vampire",
        pluralName: "Vampires",
        image: GetImage("Vampires.webp"),
        overview: ["Vampires are an enigmatic and elusive family of creatures, about which little is known. Even the extent to which the different kinds of vampires are related to one another is contested, however they all share in common one trait, a desire - sometimes a need - to drink blood, particularly the blood of humanoids. In some Vampires this is necessary for their survival, and they subsist on little else, while in others blood is merely a delicacy, or craving, which is satiated at their whim.", "Vampires can be roughly divided into two categories, Greater and Lesser, based on their intelligence. Generally speaking, Greater Vampires possess full intelligence and are usually able to assume a humanoid form. Most of these Vampires still need to feed on blood to survive, while being able to control their thirst and feed only when necessary or advantageous. Greater Vampires are also less likely to be susceptible to sunlight. In contrast, Lesser Vampires are animalistic, driven by a predator's instincts and their need to feed. Lesser Vampires generally have only one form - usually monstrous -  and are also nocturnal, being either highly sensitive to sunlight, or completely unable to stand it without death.", "Of the Greater Vampires, one type stand apart: the Higher - or True - Vampires. Higher Vampires are vastly more powerful than their brethren, nigh indestructible, and are fully detached from the necessity of drinking blood to survive - though that does not stop them from indulging despite this. No author, scholar, or warrior is qualified to teach one how to defeat a Higher Vampire, or even to survive an encounter with one that wishes you harm. Should you ever meet one, pray they are amicable."]
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
        image: GetImage(""),
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
    aeschna: 
    {
        active: true,
        name: "Aeschna",
        image: GetImage("Aeschna.webp"),
        category: categories.insectoid.name,
        type: types.monstrosity,
        size: sizes.large,
        overview: ["An aquatic arthropod, up to twelve feet long, with ten sharp, pointed legs, the front two of which are adapted into large grasping pincers like those of a crab. Thick, mottled shell plating on the top of its body, with a long, flat tail. Jaws are large and flanked by sickle-shaped mandibles.", "Found in slow-flowing or stagnant water, river deltas, swamps, and other wetlands. Often found in areas frequented by boats and fishermen, where refuse and waste products provide accessible food."],
        strengths: "Shell is immune to all weaponry; resistant to poison, acid,  necrotic damage; strong swimmers but can also haul their body up onto boats or riverbanks with claws; claws are very strong and can grab prey; sharp mandibles rapidly shred anything brought close to them, causing massive bleeding; when inactive, very hard to distinguish from floating logs or other detritus",
        weaknesses: "Vulnerable to piercing damage; soft underbelly can be exposed if knocked prone, or attacked from underneath in the water",
        peculiarities: "Aeschna prefer to hunt during the dawn, when morning mists conceal them from their prey, and they are much more wary of emerging from the water during the rest of the day; their eyes are placed near the top of their heads and see far better upwards out of the water than downwards into the water below",
        lures: ["Porpoise or seal meat rubbed in fermented fish guts"],
        harvesting: ["Chitin", "Aeschna Claws"],
        about: ["The Aeschna - known more colloquially as the Glustyworp - is a large, aquatic arthropod resembling in many ways an overgrown prawn. From above, they are easily mistaken for floating logs, as their shells are usually overgrown with moss and weeds, and they drift lazily in the water when not active. Their shell provides protection as well as camouflage, being incredibly resilient. The creatures possess a soft underbelly however, and if one is able to reach it, a spear or other thrusting weapon can easily penetrate their vital organs.", "They hunt primarily with their enlarged forelimbs, which end in sharp claws which can grip with vice-like strength. Once prey is grasped, it is brought to the creatures jaws, where two pairs of mandibles, razor-sharp and sickle-like eviscerate the victim so the creature can feed. Despite their size, they are surprisingly fast and can burst from the water to catch prey on boats, bridges, and riverbanks. If caught in the creature's grip, one's first priority should be escape, as the Aeschna will ignore any futile attacks on its hard shell, and simply devour you.", "Although their primary prey has traditionally been river porpoises, as cities have expanded and overfishing has reduced porpoise numbers, Aeschna have learned to hunt livestock, as well as human passengers on boats crossing crowded waterways. In between actively hunting, Aeschna also feed off sewage and waste from cities, growing larger and larger each year."]
    },
    bruxa: 
    {
        active: true,
        name: "Bruxa",
        image: GetImage("Bruxa.webp"),
        category: categories.vampire.name,
        type: types.monstrosity,
        size: sizes.medium,
        overview: ["Greater vampire appearing as either a pale humanoid or large bat. Most commonly they appear as female, although this is not guaranteed. They live in the wild, usually in forests, although they may be drawn nearer to inhabited areas in order to prey on dreamers."],
        strengths: "Immune to non-silver weaponry, cold, necrotic, psychic, poison, and thunder damage; resistant to slashing damage; completely unaffected by the sun; strong, and extremely fast; their shrill screams can fracture bones and leave those who hear it stunned; able to shape-shift into a large bat; ability to hypnotise people during their dreams, inducing sleepwalking",
        weaknesses: "Application of Moon Dust can dampen their regenerative abilities; they are averse to monkshood - also called wolfsbane - especially when burnt on a fire; some of the effect of their screams may be mitigated if one cannot hear it, although the sheer force can still cause damage; massive piercing damage with a wooden object - especially rowan wood - may weaken them",
        peculiarities: "Though they are intelligent, and in theory capable of speech, Bruxae rarely do so, instead preferring to sing after they feed, usually in their own language; they love birds, and birds seem undaunted by their presence; they possess a form of telepathy and can project their words or song directly into one's mind",
        lures: ["Sleeping Humanoid - Bruxae are individuals, and what draws them to a potential victim is unique. Some might prefer the rich and powerful for their value as thralls, others might take pleasure in draining the life from strong warriors. If a Bruxa already has a favourite victim however, they can be used much more reliably as a lure, for the Bruxa will likely return to them regularly to feed and reestablish their bond."],
        harvesting: ["Vampire Dust"],
        about: ["Perhaps the most dangerous of the Greater Vampires, excepting of course the Higher Vampire, Bruxae are at first glance very similar to many of their kindred, especially Alps and Mulas. Bruxae are extremely durable, and difficult to kill and even silver weaponry may have a minimal effect on them. Luckily they are rare creatures, even for Vampires, and are very wary, preferring to stay hidden and only engaging on their own terms, or when their territory is threatened.", "They usually appear in humanoid form - typically that of a pale young woman - although they can more rarely appear as male. When they need to travel longer distances, or when threatened, they may transform into a large, bat-like form, able to fly and climb with ease - an ability they share with Katakans and Nosferats. Unlike these however, Bruxae are completely unaffected by the sun, and are active during both the day and the night, although they prefer to feed during the night. Unlike some other Vampires, Bruxae also change form extremely quickly, and can easily shift back and forth between bat and humanoid with little delay.", "Their ability to infiltrate the dreams of sleeping people is used to ensure a victim stays sleeping while the Bruxa feeds, but can also be used to bend the individual to their will, causing them to sleepwalk and do the Bruxa's bidding, awaking the next morning completely unaware of their actions during the night, although they may find their feet muddy and leaf-covered. A Bruxa's motivations can be hard to quantify due to their secretive nature, though access to a ready supply of humanoid blood is always a likely possibility. Some may seek more power however, and use their dreaming thralls to exert their influence over a village or town, a terrifying prospect.", "Like many Vampires, they detest Wolfsbane, especially when dried and burnt, and they prefer to avoid it when possible. However, unlike lesser Vampires, it does not weaken them and will not prevent a determined attack."]
    },
    catoblepas: 
    {
        active: true,
        name: "Catoblepas",
        image: GetImage("Catoblepas.png"),
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
    chort: 
    {
        active: true,
        name: "Chort",
        image: GetImage("Chort.png"),
        category: categories.relict.name,
        type: types.fiend,
        size: sizes.large,
        overview: ["Bristle-furred biped on cloven-hoofed hind legs, often walks on all fours, with claw-like hands. Curling horns like a ram's above three yellow eyes like those of a goat. The third is set into the forehead. A long, furry tail.", "Found in deep forests, old hills, and near settlements built on crossroads."],
        strengths: "Immune to psychic damage, charmed, and frightened; resistant to non-magical weapons, fire, cold, thunder, and lightning damage; thick hide provides protection against spells; very strong; agile, and cunning; powerful third eye, variably said to bestow curses, charm the unwary, blind those who see it, etc.",
        weaknesses: "Vulnerable to poison; a net woven of dodder cast backwards over the left shoulder may be able to hold the chort for a handful of seconds; likewise a dodder vine stretched across a road may trip the chort and send it sprawling; a potion of mulberry root and vitriol may impart some resistance to its third eye",
        peculiarities: "Chorts are intelligent monsters that can hold conversation, however unlike Sylvans (whom they are often mistake for) the chort is usually malevolent and extremely dangerous; its third eye is strongest during the dark of the moon, and weakest during the full moon - as such the chort often remains sleeping in its lair during the full moon",
        lures: ["A baby (two years or younger) left at a crossroads on a moonless night"],
        harvesting: ["Chort Eye: Potent magical powers. Valuable to mages.", "Chort Horn: Powdered as an alchemy ingredient, aphrodisiac."],
        about: ["Chorts are highly dangerous and very old creatures, close brethren to bies - or fiends as they are commonly known - and bukavacs, these monsters are often believed to be evil gods or demons of the deep forests. This is obviously untrue, for a chort can be slain sure as any monster, however the tales of their power are not to be dismissed. While not as deadly as bies, the chort is extremely strong while still displaying remarkable agility, able to leap upon their victims with alarming speed. It is also very hard to kill, with even magic seeming to glance off its bristly hide, and the third eye is capable of bewitching or cursing those it falls upon.", "Chorts are particularly reviled for their love of stealing babies, something they seem to take great delight in. In is unknown why they do this, as they do not seem to eat them. Nevertheless, an infant taken by a chort has never been found. Villages build near crossroads seem to be disproportionally affected by this behaviour. When not taking children, a chort is often secretive and elusive, only rarely attacking humanoids for food, preferring to survive off large game such as deer and boar. A chort will use their third eye to charm targets, and quickly finish them with their claws.", "Some claim that chorts do not steal children, but are in fact given them by evil souls who wish to bargain with the monster for terrible powers."]
    },
    forktail:
    {
        active: true,
        name: "Forktail",
        image: GetImage("Forktail.webp"),
        category: categories.draconid.name,
        type: types.dragon,
        size: sizes.large,
        overview: ["Aerial biped with sharp, three-toed claws. Short, heavy neck and large blunt head with conical teeth. Extremely long, whip-like tail with forked end. Females are larger with longer tails, while males have coloured neck-frills.", "Found in mountains, cliff-faces, open woodlands. More common in higher altitude areas, but have a wide distribution. Often drawn to pastures and open grassland in search of livestock."],
        strengths: "Immune to lightning, slashing damage; resistant to poison, bludgeoning damage; tail is very fast and sharp, often causing copious bleeding; strong bite that can be very hard to release; hunt in pairs or groups",
        weaknesses: "Vulnerable to thunder damage;  far slower and more vulnerable while on the ground; weighted nets or firmly anchored bear traps may be able to keep it grounded; Pairs or groups are led by the oldest, largest female, killing them may cause the group to lose cohesion",
        peculiarities: "Often found in mated pairs, although larger groups may also form; they dislike thunderstorms and fly poorly in them, preferring to stay on the ground",
        lures: ["Live goat or sheep"],
        harvesting: ["Draconid Scales", "Draconid Claws"],
        about: ["The Forktail is a winged Draconid that is often mistaken for their close kin the Wyvern. They derive their name from their tails, which split into two very long, whip-like sections of sharp, scaly ridges. These whips can measure up to six feet long, and strike with deadly, accuracy, opening terrible slashing wounds and cause horrible bleeding. Strikes with this tail is the Forktail's preferred method of attack, usually severing a vital artery, allowing the Forktail to remain airborne until the prey has bled out.", "Unlike Wyverns, the Forktail has a short neck and legs, and they rarely carry their prey aloft, instead alighting nearby once their prey is dead and tearing chunks from the carcass. They are also more social animals than many Draconids, commonly forming mated pairs, or even larger groups, which hunt together and share kills. In a given pair or group, the largest, oldest female is the leader and eats first after kills are made. She coordinates hunting efforts and keeps younger members in line, preventing infighting. In a mated pair, the female is always the more dangerous and fearless of the two."]
    },
    ghast: 
    {
        active: true,
        name: "Ghast",
        image: GetImage("Ghast.webp"),
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
    gorgon: 
    {
        active: true,
        name: "Gorgon",
        image: GetImage("GorgonClean.webp"),
        category: categories.beast.name,
        type: types.monstrosity,
        size: sizes.large,
        overview: ["Muscular bovine quadruped with cloven hooves. Covered in overlapping iron scales. Massive shoulders supporting a stocky neck and short, heavy head. Usually possesses horns, which may range in size and shape. Smooth muscular tail.", "Most often found in Forests, Grasslands, Hills"],
        strengths: "Immune to petrification; natural iron scales provide resistance against non-magical weapons; resistant to acid, poison, fire, and cold; strong and tireless; breath can petrify its prey.",
        weaknesses: "Vulnerable to lightning; eyes and nostrils are unarmoured; petrifying breath neutralised by a powder of goat's horn and vermilion, cast upon the snout before it has exhaled",
        peculiarities: "Highly sensitive to magnetism, even gentle magnets can cause discomfort while strong magnetic fields can cause aggression, pain, and spasming of the scales, leaving the gorgon vulnerable.",
        lures: ["Raw red meat rolled in iron powder."],
        harvesting: ["Gorgon Scales: High-quality iron"],
        about: ["Once thought to be magical in nature, these large bovines merely have unique natural adaptations. They have evolved hard iron scales that protect them from harm, which they maintain by ingesting magnetite deposits inside caves. While their sharp horns and strong kicks are usually enough to deter or maim any that threaten them, they can also exhale petrifying fumes from a sac deep inside the throat. These vapours will rapidly turn any caught within them to stone.", "Due to their iron scales, the Gorgon is extremely sensitive to magnetic fields."]
    },
    kruthik: 
    {
        active: true,
        name: "Kruthik",
        image: GetImage("AdultKruthik.png"),
        category: categories.insectoid.name,
        type: types.monstrosity,
        size: sizes.medium,
        overview: ["Small - Large Insectoid (Monstrosity): Communal burrowing hexapod. Front and rear leg pairs are long and very sharp, while central leg pair is shorter and more dextrous. Legs and upper side of body covered in dark blue-black chitin, underbelly is softer. Long, narrow head with needle-like teeth.", "Found in mountains, hills, deserts, and underground cave systems. Prefers hot climates, but can inhabit temperate ones."],
        strengths: "Immune to bludgeoning damage; Resistant to piercing, poison, acid damage; attack in coordinated groups using superior numbers; fast, agile, and exceptional climbers; adults can shoot spines up to sixty feet away; larger specimens may be able to spray corrosive acid",
        weaknesses: "Vulnerable to slashing damage; collapsing tunnel entrances can delay them, or divert their paths; killing the queen will send them into a confused and uncoordinated frenzy where they are easier to hunt down; large quantities of smoke from burning bay leaves and bark can be used to send the young, and some adults into a stupor if it can be concentrated enough",
        peculiarities: "Rely on pheromones from their queen, and from other hive members, to navigate. Kruthik pheromones can be used to lead them astray or confuse the hive for a short time; smearing oneself in Kruthik pheromones can also disguise oneself for up to an hour, preventing unprovoked aggression; a powder of dried stapelia, cloves, and saltpetre can also cover the scent of their pheromones",
        lures: ["Poultry rolled in cane sugar", "Kruthik pheromones, especially those of a queen"],
        harvesting: ["Chitin", "Acid Sac", "Pheromone Gland"],
        about: ["Like their cousins, the Endrega, Kruthik are hive creatures that live in extensive tunnel networks surrounding a large central chamber containing a queen. Communicating via pheromones, large numbers of Kruthik cooperate to forage food, build tunnels, and defend the hive. Unlike Endrega, the Kruthik do not have rigid castes, but are instead divided by age, with the newly hatched young digging new tunnels and secreting resins to reinforce the hive walls. Adult Kruthik venture out of the hive to search for food and kill prey, while large, older Kruthik remain within the hive, ready to defend it at any moment.", "Individually, a Kruthik poses little threat to a professional, however even a small nest can contain overwhelming numbers of the creatures. It is advised to use every trick at your disposal to even the odds against them, before attempting to kill the queen. Smoke from the bay tree can be used to subdue the younger members of a hive, while clever use of traps, lures, bombs, and other tactics may be able to give you an edge before the hive can overwhelm you."]
    },
    leucrotta:
    {
        active: true,
        name: "Leucrotta",
        image: GetImage("Leucrotta.png"),
        category: categories.necrophage.name,
        type: types.monstrosity,
        size: sizes.large,
        overview: ["Short-furred quadruped with cloven hooves and a long tail. Blunt head with short snout like an ugly dog, and a thick hairless skull. Sharp, ridged bone plates instead of teeth.", "Most often found in Graveyards, Swamps, Forests, Caves."],
        strengths: "Immune to necrosis; resistant to regular weapons, poison, and cold damage; resistant to restrained and grappled; emanates a poisonous stench; able to mimic the call of any beast, or the voice of a humanoid; fast and agile; dangerous bite that aims for vital arteries",
        weaknesses: "Harmed by silver; vulnerable to acid damage; hearing the yowl of a cat frightens the leucrotta",
        peculiarities: "Often accompanied by packs of lesser necrophages with whom the leucrotta has a symbiotic relationship - the leucrotta lures victims with its mimicry, and the pack kills them; it cannot mimic the sound of a cat",
        lures: ["The song of a young girl, usually between the ages of 10 and 14."],
        harvesting: ["Leucrotta Voicebox: Valued by mages", "Leucrotta Tooth-Ridge: Very hard bone, valuable"],
        about: ["The leucrotta is an interesting species, for they often work together with other necrophages, taking on a leadership role in their pack. They have been reported to lead packs of ghouls, rotfiends, and drowners. They possess a cunning intelligence and lure victims into the pack via mimicry, using animal sounds to entice hunters, or the voices of children and loved ones to lead others astray. Once their pack kills the victims, the leucrotta is able to feed, without ever having to endanger itself. They are wary and skittish monsters, with a strong self-preservation instinct, and will flee if wounded, only to return after a few months have passed.", "They are fast and agile creatures, deft at escaping snares and traps. If a trap is to be used against them, deep pitfalls may be the most effective, compared to snares and nets."]
    },
    meijersBasilisk: 
    {
        active: true,
        name: "Meijer's Basilisk",
        image: GetImage("MeijerBasilisk.png"),
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
    plumard: 
    {
        active: true,
        name: "Plumard",
        image: GetImage("Plumard.webp"),
        category: categories.vampire.name,
        type: types.monstrosity,
        size: sizes.small,
        overview: ["Lesser Vampire in the form of a small bat-like creature with leathery wings and a hairless rat-like tail. Covered in short, thick fur, with large ears and sharp needle-like teeth. Found in large flocks that roost in a dark location out of the sun, such as caves, mines, barns, or ruins."],
        strengths: "Resistant to non-silver weaponry, necrotic, cold damage; quick and agile in the air; nest in large numbers which swarm victims together to overwhelm them; sharp teeth drain blood from their victims",
        weaknesses: "Vulnerable to radiant damage; extremely sensitive to sunlight, rapidly charring and burning until death; least intelligent of all Vampires, driven by very instincts",
        peculiarities: "If a member of a Plumard flock is captured, the flock will usually seek them out after a few days, attempting to free them if possible.",
        lures: ["Fresh blood from a pig"],
        harvesting: ["Nothing of value"],
        about: ["The least of all Vampires, the humble Plumard is little more than a flying rat, far removed from the terrifying power of their more famous kin. Driven by base instinct, they hunt by night for unwary livestock, or unfortunate travellers to drain of blood, latching on with claws and wings and refusing to dislodge until they have drunk their fill. Although a single Plumard is little threat to even an untrained peasant with a net, Plumards swarm together in flocks that may range in size from barely ten to over sixty. When hunting together, the flock will overwhelm even larger victims with sheer numbers, so many creatures latching on to their prey that the unfortunate victim may not even be able to stand under their combined weight. Against such numbers, it may be necessary to find other ways of dealing with a flock instead of confronting them head-on, as every Plumard felled will be quickly replaced by many more.", "Since they cannot endure the light of the sun for long, a flock of Plumards hunts in only a relatively small area around their lair, which by necessity will be some dark, sunless corner of a cave or building. If a flock becomes large enough that the area cannot support their feeding requirements, the flock may migrate - sometimes splitting into multiple groups - to find new territory."]
    },
    slyzard:
    {
        active: true,
        name: "Slyzard",
        image: GetImage("Slyzard.webp"),
        category: categories.draconid.name,
        type: types.dragon,
        size: sizes.huge,
        overview: ["Aerial biped with sharp, three-toed claws. Can use wing-tips as forelimbs for crawling and climbing. Powerful build with a heavy spiked tail and large elongated head with massive jaws that swallow prey whole and breath forth fire.", "Found in tall, open forests - where they have enough room to take off and land - and wetland, but may roam farther afield. They are so large that their nests are often made on the forest floor, or in swamps, rather than lofty cliff-faces."],
        strengths: "Immune to fire, thunder, lightning damage; resistant to bludgeoning, slashing, poison, radiant, cold damage; potent fire breath; powerful tail with vicious spikes; wing bones are strong and sharp; loud roar can stagger or daze at short range; extremely aggressive and fearless; surprisingly fast and agile on the ground",
        weaknesses: "Vulnerable to acid damage; slow to take off from the ground, requiring a running start; they swallow prey whole and are more lethargic while digesting; blocking one's ears may reduce the effects of their roars; they are less agile in the air than their smaller relatives, making them an easier target for projectiles, especially siege weaponry",
        peculiarities: "They require a high sulphur intake and have been observed ingesting raw sulphur when it is available; approximately one hour after fighting, the Slyzard's adrenaline rush will subside, leaving it tired and less alert for up to 12 hours",
        lures: ["Large bovine carcass stuffed with sulphur"],
        harvesting: ["Draconid Claws", "Adrenal Gland", "Sulphur"],
        about: ["The Slyzard, also called a Dracolizard is the largest Draconid, excepting True Dragons, with the oldest recorded specimens nearly reaching the size of a Green Dragon. Unlike Dragons however, the Slyzard is not truly intelligent, and is extremely aggressive, seeing all creatures as prey. They have enlarged adrenal glands and an extremely high pain tolerance, causing them to act with unrelenting fearlessness. Once engaged, a Slyzard will not flee, but will fight bitterly until either it or its opponents are dead.", "When not mistake for a Dragon, the Slyzard can be confused with the Wyvern or Forktail by the layman, but this is a dangerous error for the Slyzard is far more dangerous than its smaller relatives. Although not venomous, its tail is heavy and spiked and can easily break one's body with a single strike. Their huge jaws can swallow prey whole, and their wings can be used offensively, striking with sharp bone spurs to ward off attackers while on the ground. Above all however, it is their fiery breath that makes the Slyzard so dangerous. While not as devastating as the breath of a true Red Dragon, the heat from their breath can easily roast a knight in their armour, or turn a village into ash.", "They have rarely been observed eating raw sulphur, firmly disproving any notions of killing them with sulphur-stuffed carcasses, as folktales would have one do with Dragons. It has been suggested that their high sulphur intake is connected to their ability to breath fire. Whatever the reason, their lairs - and the beasts themselves - often stink of sulphur."]
    },
    umberHulk: 
    {
        active: true,
        name: "Umber Hulk",
        image: GetImage("UmberHulkHead.png"),
        category: categories.insectoid.name,
        type: types.monstrosity,
        size: sizes.large,
        overview: ["Burrowing biped with large spade-like feet. Usually moves with the knuckles of the forelimbs on the ground, like a great ape. Chitinous armour plating and sparse short hairs. Distinctive head with bulbous eyes, huge curved mandibles and smaller psychic organs on the forehead.", "Found where underground caves and tunnels surface, or intersect with cellars. They dislike water and marshy terrain."],
        strengths: "Immune to slashing weaponry; resistant to bludgeoning, fire, psychic, radiant, and poison damage; excellent darkvision; antennae pick up vibrations to sense surroundings and nearby creatures even in total absence of light or through cover; hypnotic gaze.",
        weaknesses: "Vulnerable to thunder damage; cutting off antennae removes it's ability to sense vibrations and disorients the creature.",
        peculiarities: "They dislike bright light and will prefer to avoid it unless enraged; chewing Valerian root makes it easier to resist the hypnotic gaze.",
        lures: ["Gnome Meat", "Deep Mushrooms soaked in mead"],
        harvesting: ["Chitin", "Corpora Cardiaca (Psychic Gland): used in potions", "Mandibles"],
        about: ["An umber hulk is a solitary creature and fiercely territorial, aggressively defending a large underground network of tunnels and chambers. It can burrow through soil, sand, and sedimentary rock at an alarming rate leaving behind large tunnels, approximately five foot wide by eight foot high. This behaviour is responsible for much of the contact between humans and this creature. An umber hulk will often burrow through the walls of basements and cellars, finding a warm, dry chamber filled with food. Any poor fool who stumbles upon the creature, or finds their way into the tunnels does not last long.", "When attacking, the hulk uses the short but powerful claws on its forelimbs to harass its victim, while moving in to finish them with its huge mandibles. The most dangerous part of the creature however, is the eyes, as these can generate a powerful hypnotic effect that muddles even keen minds. Simply averting one's eyes is enough to avoid this, however that in turn makes fighting the beast difficult. Chewing on valerian root fortifies the mind against the creatures psychic powers, although the danger remains present."]
    },
    werewolf: 
    {
        active: true,
        name: "Werewolf",
        image: GetImage("Werewolf.webp"),
        category: categories.cursed.name,
        type: types.humanoid,
        size: sizes.medium,
        overview: ["Wolf-like bipeds with large hind paws and elongated limbs. Can run on all fours with long, clawed hands. Mix of leathery skin and thick wolf fur. Wolf's head and ruff protruding from shoulders. Standard canine jaw configuration, exceptionally strong bite. Found usually in settlements living as ordinary people when not transformed. More feral specimens may lair in forests or high tundra."],
        strengths: "Immune to non-silver weaponry, cold damage, frightened; resistant to poison, necrotic, thunder, force damage, charmed; excellent hearing and smell; rapid regeneration; very fast, strong, and agile; very fast aggressive attacks; intelligent",
        weaknesses: "Harmed by Silver; vulnerable to a silver spear tipped with a sprig of Wolfsbane, left under the full moon for an hour; application of Moondust can halt their regenerative ability",
        peculiarities: "Potion of Wolfsbane, Hemlock, and silver powder can prevent transformation for 1 - 4 hours; some cases of lycanthropy may be cured by removing the curse that first transformed them; bites should be treated with a poultice of rue, wormwood, and silver powder, although the chance of infection is low; cats hate werewolves while dogs may show enthusiasm, fearful respect, or obedient loyalty to them;",
        lures: ["Blood of a child under five years of age", "Heart of one the werewolf loves"],
        harvesting: ["Werewolf Teeth: valuable", "Werewolf Blood: used in potions"],
        about: ["A humanoid cursed with lycanthropy, instilling a thirst for blood and granting the ability to transform into a terrible wolf. Lycanthropes may be either direct results of a magical Curse, born as the offspring of two lycanthropes, or infected when bitten by one already afflicted by lycanthropy. However this last is far rarer than superstition would have you believe as most bites do not transmit the disease. However it is still a possibility and one especially relevant to those who may encounter and fight lycanthropes often.", "In the case of cursed werewolves, there is a possibility of lifting the curse, although as with all curses, it will be likely be unique, and require a unique solution to lift it, if it is at all possible to lift. Those cursed with lycanthropy - rather than being born to it - have little control over their transformation, and are driven by a terrible bloodlust and hunger. Most have no recollection of their actions while under its effects (perhaps a blessing) and only a few with iron wills are able to restrain themselves enough to communicate while transformed.", "Regardless of the source of their lycanthropy, each werewolf is invariably unique, as they are humanoids cursed or diseased with a terrible burden. Some may be unwilling hosts to the bloodlust, while others may embrace it, or even deliberately use it to their advantage. Some may be fully lucid during transformation, while others may remember only fragments, or believing the episodes to be vivid dreams.", "In combat, a werewolf is very dangerous, and possessed of an apex predator's murderous instincts. They have been recorded to single out weak foes and viciously focus on them until they fall, slowly picking apart a group until the stronger members stand alone. They can leap great distances and seize upon any weakness to strike swiftly, preferring bites to the throat to quickly finish an opponent, although they are said to rip out the hearts of those they kill as well. They are not known to flee."]
    },
    wraith: 
    {
        active: true,
        name: "Wraith",
        image: GetImage("Wraith.webp"),
        category: categories.spectre.name,
        type: types.undead,
        size: sizes.medium,
        overview: ["The spectre of a dead humanoid who has lingered beyond their time due to trauma, a desire for vengeance, a curse, or some other reason. Manifest in diverse forms, usually similar to the form they had in life, twisted to some extent by the force that keeps them from their rest. Often appear shrouded, hooded, or cloaked.", "Found near their bodies, commonly in graveyards, crypts, and battlefields."],
        strengths: "Immune to non-silver weaponry, cold, necrotic, poison damage, frightened, charmed, exhaustion; resistant to acid, lightning damage; short-range teleportation; ability to turn intangible, becoming invulnerable to harm; can move through walls and other objects; attacks carry the freezing chill of the grave and can sap the strength from victims",
        weaknesses: "Vulnerable to fire damage; unable to move too far from where their body lies; burning a lock of the wraith's hair while speaking their true name will anchor them more firmly to the world of the living, preventing them from becoming intangible; burning fresh rosemary and rue can weaken a wraith, shrouding them in memory and sorrow",
        peculiarities: "If a wraith is not manifest, ringing a silver bell and calling the deceased name will summon them if they are present; wraiths move very slowly over running water and cannot become intangible while crossing, they cannot teleport over running water",
        lures: ["Wraiths are not lured as conventionally as many other creatures. The wraith is already bound to a location, near its body and cannot roam too far beyond that, no matter the lure. Items, smells, sounds etc. that were important to the wraith in life, or are related to its reason for lingering can potentially attract it and keep it present for a time."],
        harvesting: ["Essence of Death", "Grave Dirt"],
        about: ["Wraiths are the quintessential Spectre, a deceased humanoid that has for whatever reason, been unable to pass on in peace, instead lingering and haunting the final resting place of their material bodies. The disposition of a Wraith may depend on the reason for its existence. Wraiths born of violent deaths, vengeful rage, unfinished vendettas, or a love of war are likely to be more aggressive, while those lingering from sorrows, lost loves, unfinished business, or unresolved trauma may be communicative and non-hostile. In this way, Wraiths - like many Spectres - exhibit considerable overlap with Cursed Ones, as many can be dealt with by resolving their reason for lingering. They can of course also be the direct product of a curse, which may bind a Wraith to this world long after they are ready to move on. If a Wraith is not cooperative, it may need to be defeated first, to dispel it for long enough for you to work.", "Wraiths - more so than other Spectres - are directly bound to earthly remains, unable to stray too far from them. They still have a substantial range, enough to haunt a village or city quarter, or area of woodland but cannot for travel to a different city or village for example. Within this range, the Wraith can move at will, both moving through solid objects with ease and even vanishing in place, only to reappear somewhere else. They prefer to linger in places of personal significance (most commonly their resting place), and can be compelled to stay in one place by invoking memories from life, usually through belongings, scents, etc.", "In addition to this, a Wraith may not always be physically manifest, instead resting in a form of sleep-like trance, completely invisible and undetectable to the human eye. They can be woken simply by speaking to them, or intruding upon their resting place, but a silver bell and their name can be used to compel them to reveal themselves even against their will. This is not to be confused with Necromancy. The Wraith is not summoned up from death, but merely woken from their resting place to converse with the caller. As a final note of caution, one may be tempted to simply destroy the remains of a Wraith, thinking that this will force it to move on. This would be a grave error. Destroying a Wraith's physical remains merely strips it of the little humanity it had left, leaving an undead husk that will return in time as another, more twisted form of Spectre, no longer to be reasoned with."]
    },
    wyvern:
    {
        active: true,
        name: "Wyvern",
        image: GetImage("Wyvern.webp"),
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
    //images as images
};