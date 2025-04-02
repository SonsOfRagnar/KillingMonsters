import{O as y}from"./bootstrap.esm-GSlfSkng.js";const b="/KillingMonsters/assets/AdultKruthik-DjRmGeGh.png",v="/KillingMonsters/assets/BeastsDiagram-E1WeTTNb.png",w="/KillingMonsters/assets/Catoblepas-CLZxyfNG.png",k="/KillingMonsters/assets/Chort-CXzTU0wF.png",_="/KillingMonsters/assets/CursedOnesDiagram-CTS5W2XQ.png",C="/KillingMonsters/assets/DraconidDiagram-BuLIj8Dj.png",T="/KillingMonsters/assets/Ghast-CqUfoi74.webp",M="/KillingMonsters/assets/GorgonClean-DU5cHCE0.webp",I="/KillingMonsters/assets/InsectoidsDiagram-CtYs1zGh.png",L="/KillingMonsters/assets/Leucrotta-CjEK8cuZ.png",D="/KillingMonsters/assets/MeijerBasilisk-Xdxtl7e9.png",x="/KillingMonsters/assets/NecrophagesDiagram-JcxxpEIe.png",S="/KillingMonsters/assets/RelictsDiagram-Srnm5wSn.png",j="/KillingMonsters/assets/UmberHulkHead-Xj0DMDU6.png",G="/KillingMonsters/assets/Werewolf-ClZjecPG.webp",H="/KillingMonsters/assets/Wyvern-Cvv3puj-.webp";let d=new Map;B();console.log("Import Bestiary images.");console.log(d);function B(){Object.values([b,v,w,k,_,C,T,M,I,L,D,x,S,j,G,H]).forEach(e=>{let t=e.split("/"),s=t[t.length-1],o="."+s.split(".")[1];s=s.split(".")[0];let h=s.split("-")[0]+o;d.set(h,e)})}function i(a){return console.log("GetImage called for "+a),console.log(d.get(a)),d.get(a)}const n={beast:{name:"Beast",pluralName:"Beasts",image:i("BeastsDiagram.png"),overview:["Beasts are natural creatures, evolved over time due to natural selection and mutation, without magical aid or outside influence. As such, silver as no effect on them.","Common animals such as wolves, bears, birds, et al. are themselves beasts, but are omitted from this bestiary for brevity, since they are of a common nature, and easily warded off by fire, and other ordinary means.","There are however divers beasts both strange and monstrous, whom by virtue of their rarity, natural ferocity, or incredible strengths are oft the subject of contracts for monster hunters. They are set down within this section."]},cursed:{name:"Cursed One",pluralName:"Cursed Ones",image:i("CursedOnesDiagram.png"),overview:["These monsters were once men, or other natural folk, before a magical curse or ancient hex transformed them. In rare cases, their curse may have been passed on from parent to child, or from attacker to victim through a wound. Due to the powerfully magical nature of Cursed Ones, one should take care to approach each case individually, being wary of assumptions or past experiences. Some curses may follow reliable patterns - such as that of the Striga - but even then some details may vary, along with the strength of the curse.","Many cases can be cured through the proper dispelling of the curse. Some curses have known cures, although enacting them may be tricky, while others often require the meeting of certain conditions unique to the circumstances under which the afflicted was cursed. Gathering information on how they came to be cursed is often vital.","If all else fails, death is the surest cure, although it may not come easily to them, as their curses often bestow terrible strength upon them."]},draconid:{name:"Draconid",pluralName:"Draconids",image:i("DraconidDiagram.png"),overview:["Dragon. No other monster is as far-famed or feared as the Dragon. Peasants tell tales of their wrath, kings stitch them on their banners, all covet their legendary hoards of treasure. Despite their extreme lethality, the vast majority of true Dragons have been hunted to near extinction by royal armies, huge bands of hunters, and mages seeking their potent blood and organs.","Indeed, although they are related, the majority of Draconids are not true Dragons, and many are extremely different. They are however often confused or conflated with Dragons by the uneducated, and by braggarts quick to claim they have slain a Dragon. The Draconids are a broad family of quasi-reptiles that encompasses terrestrial, aerial, and aquatic species.","Aerial species are the most numerous - and often most dangerous - of these, roosting in mountain caves, rocky crags, cliff-faces, and occasionally ruined structures. Herd animals, particularly sheep, are their most common prey, and are snatched boldly from fields and pens."]},elementa:{name:"Elemental",pluralName:"Elementa",overview:[]},hybrid:{name:"Hybrid",pluralName:"Hybrids",overview:[]},insectoid:{name:"Insectoid",pluralName:"Insectoids",image:i("InsectoidsDiagram.png"),overview:["A broad family of large and dangerous arthropods, which often resemble outsized versions of their more mundane relatives. Like smaller insects, Insectoid monsters often form large colonies and display complex organisational behaviours, often seperated by caste: drones, warriors, queens, etc. Although some Insectoids are solitary creatures, one would always be wise to assume there may be others. If one is lax in exterminating a colony, they can quickly repair their numbers and become far more aggressive than before.","Apart from their strength in numbers, the vast majority of Insectoids are protected by strong, chitinous exoskeletons that can resist even the sharpest blades. Many can survive the loss of limbs, and some have secondary organs and decentralised nervous systems that make them exceptionally resilient. Fire is often effective against them, although it is not a foolproof solution.","Most insectoids burrow and climb exceptionally well, are fast, hardy, and blindly obedient to their colony, making them highly dangerous."]},necrophage:{name:"Necrophage",pluralName:"Necrophages",image:i("NecrophagesDiagram.png"),overview:["Translating literally as 'Corpse Eaters', these are monsters that feed on the dead, particularly humanoid corpses. Their presence in graveyards and on old battlefields - along with their name - has given rise to the erroneous belief that Necrophages themselves are dead creatures reanimated from the corpses of the slain. This is of course nonsense. Unlike Specters, Necrophages are living creatures that while preternatural, have found an ecological niche as scavengers and carrion-eaters.","They are drawn to death, particularly large burial grounds, mass graves, and sites of battle, where they can sustain themselves for months on the corpses found there. Necrophages often tolerate others of their kind and many are able to display social behaviour when advantageous, hunting in packs when carrion is unavailable, and forming communal feeding grounds for mutual protection. Several species of Necrophage may coexist in a location, and sometimes Necrophages follow other monsters or beasts to scavenge from their discarded kills.","As buried corpses are a common food source, digging or burrowing is a commonly reported behaviour. Necrophages are nourished by consuming rotting corpses, and when injured, have been observed to devour those who fall fighting them to recoup their strength and vigor. For this reason, it is often advisable to engage the creatures on ground of your choose, rather than in their carrion-filled lairs."]},ogroid:{name:"Ogroid",pluralName:"Ogroids",overview:[]},relict:{name:"Relict",pluralName:"Relicts",image:i("RelictsDiagram.png"),overview:["Relicts are ancient beings, the last remains of dying species, driven to the brink of extinction by the long march of time, and the relentless expansion of civilisation. While they may once have been numerous, these creatures are now among the rarest monsters encountered, which combined with the mystery surrounding their origins, leads many simple folk to believe them to be gods ruling over deep woodlands, or demons sent up from some burning hell.","There is great variety among relicts, with many of them being truly unique, and many of them sapient beings. Great caution is advised when hunting any relict, as even known species may have unique variations, skills, or knowledge from their long lives. Additionally, it is worth noting that there are many relicts that seem to pose little threat, and may even be benevolent in their own way, something worth considering before setting out to kill one.","Despite their magical nature, relicts are incredibly resilient against both steel and silver weaponry, only being truly threatened by blades deeply imbued with magic."]},spectre:{name:"Spectre",pluralName:"Spectres",overview:[]},vampire:{name:"Vampire",pluralName:"Vampires",overview:[]}},r={aberration:"Aberration",dragon:"Dragon",fiend:"Fiend",humanoid:"Humanoid",monstrosity:"Monstrosity"},l={medium:"Medium",large:"Large"},g={template:{active:!1,name:"Template",image:i(""),category:n.cursed.name,type:r.humanoid,size:l.medium,overview:[""],strengths:"",weaknesses:"",peculiarities:"",lures:[""],harvesting:[""],about:[""]},catoblepas:{active:!0,name:"Catoblepas",image:i("Catoblepas.png"),category:n.necrophage.name,type:r.monstrosity,size:l.large,overview:["Stocky, shaggy-haired quadruped with cloven hooves and high shoulders. Long sagging neck with a head like a boar's. Curved tusks. Tail is long and ends in a heavy bone club. Tiny, wrinkled third eye nestled in skin folds on forehead.","Most often found in Swamps, Battlegrounds, Graveyards"],strengths:"Immune to necrosis and poison; resistant to non-silver weaponry, fire, force, cold, thunder, and acid damage; emanates a horrific stench that carries disease and poison; its third eye is extremely dangerous, necrotising the flesh of those it gazes upon, it is said to kill almost instantly; very strong club tail, shaggy hide provides some protection from missiles",weaknesses:"Harmed by silver; vulnerable to radiant damage; its heavy head is slow to move, making it difficult for it to bring its third eye to bear quickly, especially when surprised; unintelligent, driven by instinct alone",peculiarities:"A garland woven of glovewort picked under the noonday sun is said to protect one from the deadly gaze of the Catoblepas.",lures:["Stomach of a dog filled with rotten intestines","Scent glands from another Catoblepas"],harvesting:["Catoblepas Eye: Ingredient in anti-necrotic potions, valuable to mages","Catoblepas Tusks: Potion ingredient, peasants claim the tusks can ward off dark spirits.","Catoblepas Scent Gland: Valuable to mages"],about:["The Catoblepas is a shambling Necrophage that roams swamps and sites of death, carrying disease and pestilence in its thick shaggy fur, which can range from black to dun. Although it possesses large tusks, these are for rooting through graves and corpses, looking for the choicest part, typically the large and small intestines.","Instead the Catoblepas will use its powerful tail club to attack any who manage to approach, a difficult task in the first place due to the nauseating and disease-bearing stench that emanates from the beast. If this initial attack fails, the creature will rear its cumbersome neck and open its third eye, which can melt flesh from bone and necrotise tissue in an instant. Superstitious peasants say that its eye is a window into some distant hell, but more rational minds theorise that the Catoblepas simply possesses a powerful magical ability.","While it lacks the natural burrowing abilities of many Necrophages, the Catoblepas is at home in swamps and marshes, and can sink deep into mud and murky pools to conceal itself while it sleeps between meals."]},chort:{active:!0,name:"Chort",image:i("Chort.png"),category:n.relict.name,type:r.fiend,size:l.large,overview:["Bristle-furred biped on cloven-hoofed hind legs, often walks on all fours, with claw-like hands. Curling horns like a ram's above three yellow eyes like those of a goat. The third is set into the forehead. A long, furry tail.","Found in deep forests, old hills, and near settlements built on crossroads."],strengths:"Immune to psychic damage, charmed, and frightened; resistant to non-magical weapons, fire, cold, thunder, and lightning damage; thick hide provides protection against spells; very strong; agile, and cunning; powerful third eye, variably said to bestow curses, charm the unwary, blind those who see it, etc.",weaknesses:"Vulnerable to poison; a net woven of dodder cast backwards over the left shoulder may be able to hold the chort for a handful of seconds; likewise a dodder vine stretched across a road may trip the chort and send it sprawling; a potion of mulberry root and vitriol may impart some resistance to its third eye",peculiarities:"Chorts are intelligent monsters that can hold conversation, however unlike Sylvans (whom they are often mistake for) the chort is usually malevolent and extremely dangerous; its third eye is strongest during the dark of the moon, and weakest during the full moon - as such the chort often remains sleeping in its lair during the full moon",lures:["A baby (two years or younger) left at a crossroads on a moonless night"],harvesting:["Chort Eye: Potent magical powers. Valuable to mages.","Chort Horn: Powdered as an alchemy ingredient, aphrodisiac."],about:["Chorts are highly dangerous and very old creatures, close brethren to bies - or fiends as they are commonly known - and bukavacs, these monsters are often believed to be evil gods or demons of the deep forests. This is obviously untrue, for a chort can be slain sure as any monster, however the tales of their power are not to be dismissed. While not as deadly as bies, the chort is extremely strong while still displaying remarkable agility, able to leap upon their victims with alarming speed. It is also very hard to kill, with even magic seeming to glance off its bristly hide, and the third eye is capable of bewitching or cursing those it falls upon.","Chorts are particularly reviled for their love of stealing babies, something they seem to take great delight in. In is unknown why they do this, as they do not seem to eat them. Nevertheless, an infant taken by a chort has never been found. Villages build near crossroads seem to be disproportionally affected by this behaviour. When not taking children, a chort is often secretive and elusive, only rarely attacking humanoids for food, preferring to survive off large game such as deer and boar. A chort will use their third eye to charm targets, and quickly finish them with their claws.","Some claim that chorts do not steal children, but are in fact given them by evil souls who wish to bargain with the monster for terrible powers."]},ghast:{active:!0,name:"Ghast",image:i("Ghast.webp"),category:n.necrophage.name,type:r.aberration,size:l.medium,overview:["Pale, hairless biped on powerful hind legs with large flat, three-toed feet. Squat and heavyset below the waist, hunched and frail above. Small vestigial arms with tiny claws. Bony, protruding head with bulbous eyes and a wide mouth full of short teeth. Short fleshy tail.","Found near or within inhabited settlements"],strengths:"Immune to poison, charms, exhaustion; resistant to regular weapons, psychic, cold, and necrotic damage; resistant to being frightened, and effects targeting aberrations; able to take on the form, voice, and some memories of those it devours; emits a poisonous stench; agile, paralysing claws",weaknesses:"Harmed by silver; dried thistles distress them when close, making them skittish, and their attacks more erratic; tea of banewort, thistle and elderflower laced with gravedirt counteracts the paralysis of its claws",peculiarities:"Their true faces can be seen in a silver mirror polished with thistle sap",lures:["Clothes taken from one who died alone within the last month"],harvesting:["Ghast Grease: Contains paralytic agents","Ghast Hide: Flexible and waterproof","Tarnowski's Gland: Valuable to mages"],about:["Ghasts are strange, even for necrophages. They seem to have slipped through into our world later than their relatives, and possess human-level intellects. They also seem adapted for predation on human and non-human communities, able to take on the forms of most humanoid corpses that they consume. The ghast then lurks in the community for up to three months - the maximum extent of the transformation - before searching for a new victim. While still disguised, the ghast will often proactively seek out a suitable target, stalk them, and kill them, before taking on their shape and life.","The ghast's transformation takes place over the course of an hour, during which the ghast's flesh bubbles and stretches, a new layer of skin growing over the old. The transformation is more than skin deep however, with the creature taking on the voice and some memories of the victim as well as their form. Once transformed, the ghast may shed its outer layer in an emergency, slithering out of it like a new-birthed foal.","When in their natural shape, the ghast moves by hopping on its powerful hind legs, and can make incredible leaps for its size. Like many other necrophages, it emits a powerful corpse-stink, poisonous to those around it, while its claws secrete a paralytic grease that freezes the muscle of those it strikes. It is also unusually fearless, perhaps as a result of its intelligence, and cannot be easily frightened, save by bunches of dried thistles, which it desperately avoids."]},gorgon:{active:!0,name:"Gorgon",image:i("GorgonClean.webp"),category:n.beast.name,type:r.monstrosity,size:l.large,overview:["Muscular bovine quadruped with cloven hooves. Covered in overlapping iron scales. Massive shoulders supporting a stocky neck and short, heavy head. Usually possesses horns, which may range in size and shape. Smooth muscular tail.","Most often found in Forests, Grasslands, Hills"],strengths:"Immune to petrification; natural iron scales provide resistance against non-magical weapons; resistant to acid, poison, fire, and cold; strong and tireless; breath can petrify its prey.",weaknesses:"Vulnerable to lightning; eyes and nostrils are unarmoured; petrifying breath neutralised by a powder of goat's horn and vermilion, cast upon the snout before it has exhaled",peculiarities:"Highly sensitive to magnetism, even gentle magnets can cause discomfort while strong magnetic fields can cause aggression, pain, and spasming of the scales, leaving the gorgon vulnerable.",lures:["Raw red meat rolled in iron powder."],harvesting:["Gorgon Scales: High-quality iron"],about:["Once thought to be magical in nature, these large bovines merely have unique natural adaptations. They have evolved hard iron scales that protect them from harm, which they maintain by ingesting magnetite deposits inside caves. While their sharp horns and strong kicks are usually enough to deter or maim any that threaten them, they can also exhale petrifying fumes from a sac deep inside the throat. These vapours will rapidly turn any caught within them to stone.","Due to their iron scales, the Gorgon is extremely sensitive to magnetic fields."]},leucrotta:{active:!0,name:"Leucrotta",image:i("Leucrotta.png"),category:n.necrophage.name,type:r.monstrosity,size:l.large,overview:["Short-furred quadruped with cloven hooves and a long tail. Blunt head with short snout like an ugly dog, and a thick hairless skull. Sharp, ridged bone plates instead of teeth.","Most often found in Graveyards, Swamps, Forests, Caves."],strengths:"Immune to necrosis; resistant to regular weapons, poison, and cold damage; resistant to restrained and grappled; emanates a poisonous stench; able to mimic the call of any beast, or the voice of a humanoid; fast and agile; dangerous bite that aims for vital arteries",weaknesses:"Harmed by silver; vulnerable to acid damage; hearing the yowl of a cat frightens the leucrotta",peculiarities:"Often accompanied by packs of lesser necrophages with whom the leucrotta has a symbiotic relationship - the leucrotta lures victims with its mimicry, and the pack kills them; it cannot mimic the sound of a cat",lures:["The song of a young girl, usually between the ages of 10 and 14."],harvesting:["Leucrotta Voicebox: Valued by mages","Leucrotta Tooth-Ridge: Very hard bone, valuable"],about:["The leucrotta is an interesting species, for they often work together with other necrophages, taking on a leadership role in their pack. They have been reported to lead packs of ghouls, rotfiends, and drowners. They possess a cunning intelligence and lure victims into the pack via mimicry, using animal sounds to entice hunters, or the voices of children and loved ones to lead others astray. Once their pack kills the victims, the leucrotta is able to feed, without ever having to endanger itself. They are wary and skittish monsters, with a strong self-preservation instinct, and will flee if wounded, only to return after a few months have passed.","They are fast and agile creatures, deft at escaping snares and traps. If a trap is to be used against them, deep pitfalls may be the most effective, compared to snares and nets."]},meijersBasilisk:{active:!0,name:"Meijer's Basilisk",image:i("MeijerBasilisk.png"),category:n.draconid.name,type:r.monstrosity,size:l.medium,overview:["Long-bodied eight-legged lizard with wide four-toed claws and a leathery hide, usually slate grey or blue. Reddish spines run the length of the back and thick tail. A blunt, wide head with strong jaws and triangular tearing teeth. Large blue eyes.","Extremely adaptable with subspecies found in arid, temperate and tropical climes. All prefer rough terrain and mountainous areas. Not found in areas colder than temperate."],strengths:"Immune to non-magical weaponry and petrification; resistant to fire, thunder, poison, acid, force, and lightning damage, charmed and frightened; gaze rapidly petrifies victim into stone; powerful jaws with a poisonous bite that often festers; good climber; can squeeze into very small gaps; can sense heat from nearby creatures",weaknesses:"Vulnerable to cold damage; sluggish and slow; fairly passive when well fed, as it relies on its petrifying gaze to ward off most threats while it conserves energy; poor eyesight, avoiding its thermal sense leaves it almost blind",peculiarities:"Prefers to hunt and eat other draconids, which it identifies by their usually high internal body temperature; Cold-blooded unlike many other species, so it prefers to hunt in the evening, after a long day of heating in the sun; the gullet of Meijer's basilisk contains oils that can be distilled into a poultice that prevents - and may partially cure - petrification; superstitions about the cockatrice and true basilisk assert that a mirror may be used to view the creature safely, or to trick it into attacking itself, however these tales have not been tested against Meijer's basilisk.",lures:["Draconid meat, heated over a fire until scorching hot"],harvesting:["Basilisk Eye","Gullet Oil: Used to distil potions to prevent or cure petrification","Pit Organ"],about:["Meijer's basilisk is not a true basilisk, and is named instead for its petrifying gaze, which is so often attributed to cockatrices and true basilisks by the uninformed. Unlike many of its draconid kin, Meijer's basilisk is cold-blooded, sluggish, and lazy. It prefers to bask through long days on hot rocks, shifting only in the evening to hunt. However, this should not be mistaken for an easy kill, the eyes of the creature are terrible, and should one look upon them, one's body shall rapidly begin to turn to stone.","They can also be difficult to track, as they climb well, and prefer to stick to rocky outcrops where they may lie camouflaged against the stone. Their pit organs allow them to detect a creature's body heat, allowing them to avoid danger or stalk prey in any condition."]},umberHulk:{active:!0,name:"Umber Hulk",image:i("UmberHulkHead.png"),category:n.insectoid.name,type:r.monstrosity,size:l.large,overview:["Burrowing biped with large spade-like feet. Usually moves with the knuckles of the forelimbs on the ground, like a great ape. Chitinous armour plating and sparse short hairs. Distinctive head with bulbous eyes, huge curved mandibles and smaller psychic organs on the forehead.","Found where underground caves and tunnels surface, or intersect with cellars. They dislike water and marshy terrain."],strengths:"Immune to slashing weaponry; resistant to bludgeoning, fire, psychic, radiant, and poison damage; excellent darkvision; antennae pick up vibrations to sense surroundings and nearby creatures even in total absence of light or through cover; hypnotic gaze.",weaknesses:"Vulnerable to thunder damage; cutting off antennae removes it's ability to sense vibrations and disorients the creature.",peculiarities:"They dislike bright light and will prefer to avoid it unless enraged; chewing Valerian root makes it easier to resist the hypnotic gaze.",lures:["Gnome Meat","Deep Mushrooms soaked in mead"],harvesting:["Chitin","Corpora Cardiaca (Psychic Gland): used in potions","Mandibles"],about:["An umber hulk is a solitary creature and fiercely territorial, aggressively defending a large underground network of tunnels and chambers. It can burrow through soil, sand, and sedimentary rock at an alarming rate leaving behind large tunnels, approximately five foot wide by eight foot high. This behaviour is responsible for much of the contact between humans and this creature. An umber hulk will often burrow through the walls of basements and cellars, finding a warm, dry chamber filled with food. Any poor fool who stumbles upon the creature, or finds their way into the tunnels does not last long.","When attacking, the hulk uses the short but powerful claws on its forelimbs to harass its victim, while moving in to finish them with its huge mandibles. The most dangerous part of the creature however, is the eyes, as these can generate a powerful hypnotic effect that muddles even keen minds. Simply averting one's eyes is enough to avoid this, however that in turn makes fighting the beast difficult. Chewing on valerian root fortifies the mind against the creatures psychic powers, although the danger remains present."]},werewolf:{active:!0,name:"Werewolf",image:i("Werewolf.webp"),category:n.cursed.name,type:r.humanoid,size:l.medium,overview:["Wolf-like bipeds with large hind paws and elongated limbs. Can run on all fours with long, clawed hands. Mix of leathery skin and thick wolf fur. Wolf's head and ruff protruding from shoulders. Standard canine jaw configuration, exceptionally strong bite. Found usually in settlements living as ordinary people when not transformed. More feral specimens may lair in forests or high tundra."],strengths:"Immune to non-silver weapons, cold damage; resistant to poison, necrotic, thunder, force damage, frightened, charmed. Excellent hearing and smell; rapid regeneration; very fast, strong, and agile; very fast agressive attacks; intelligent",weaknesses:"Harmed by silver, vulnerable to a spear tipped with a sprig of Aconite, left under the full moon for an hour.",peculiarities:"Potion of Aconite, Hemlock, and silver powder can prevent transformation for one - four hours; some cases of lycanthropy may be cured by removing the curse that first transformed them; bites should be treated with a poultice of rue, wormwood, and silver powder, although chance of infection is low.",lures:["Blood of a child under five years of age","Heart of one the werewolf loves"],harvesting:["Werewolf Teeth: valuable","Werewolf Blood: used in potions"],about:["A humanoid cursed with lycanthropy, instilling a thirst for blood and granting the ability to transform into a terrible wolf. Lycanthropes may be either direct results of a magical Curse, born as the offspring of two lycanthropes, or infected when bitten by one already afflicted by lycanthropy. However this last is far rarer than superstition would have you believe as most bites do not transmit the disease. However it is still a possibility and one especially relevant to those who may encounter and fight lycanthropes often.","In the case of cursed werewolves, there is a possibility of lifting the curse, although as with all curses, it will be likely be unique, and require a unique solution to lift it, if it is at all possible to lift.","Regardless of the source of their lycanthropy, each werewolf is invariably unique, as they are humanoids cursed or diseased with a terrible burden. Some may be unwilling hosts to the bloodlust, while others may embrace it, or even deliberately use it to their advantage. Some may be fully lucid during transformation, while others may remember only fragments, or believing the episodes to be vivid dreams."]},wyvern:{active:!0,name:"Wyvern",image:i("Wyvern.webp"),category:n.draconid.name,type:r.dragon,size:l.large,overview:["Aerial biped with sharp, three-toed claws. Can use wing-tips as forelimbs for crawling and climbing. Long, agile neck with a small snake-like head filled with powerful conical teeth. Long thin tail ending in a very sharp, venomous barb.","            Found in mountains, cliff-faces, open woodlands. More common in higher altitude areas, but have a wide distribution. Often drawn to pastures and open grassland in search of livestock."],strengths:"Immune to poison, lightning damage; resistant to bludgeoning, slashing, thunder, fire damage; very fast flying speed; very dangerous tail stinger; long neck can dart down while flying to attack at long range; extremely aggressive when threatened",weaknesses:"Vulnerable to cold damage; far slower and more vulnerable while on the ground; weighted nets or firmly anchored bear traps may be able to keep it grounded",peculiarities:"Although warm-blooded, wyverns are poorly insulated and prefer to hunt during the day, especially around midday; wyvern venom, birthwort and  white gull to create an antivenom; lacking true antivenom, golden oriole should be used instead",lures:["Live goat or sheep"],harvesting:["Wyvern Venom Gland: Used to make antivenom","Wyvern Skin: Valuable"],about:["Wyverns are voracious and highly aggressive winged draconids that prefer to dive down upon prey from a great height and snatch it in their claws. Much like a tortoise in the claws of an eagle, those caught by a wyvern will soon find themselves lifted to a great height and bourn away to some lofty nest where they are dropped to dash against the rocks. The wyvern can then pick the - often still living - victim apart at its leisure, feeding morsels to their hatchlings.","One of the wyvern's distinctive characteristics that set it apart from other draconids is their tail. The long tail of a wyvern ends in a foot-long razor sharp hollow spine, that can inject an excruciatingly painful venom into those it pierces. Should one be struck by the tail-spine, their death is almost certain, unless they have access to the correct antivenom."]}};let N=document.getElementById("bestiary-sidebar-col");E();document.addEventListener("DOMContentLoaded",function(){var a=document.getElementById("offcanvasResponsive-bestiary");if(a==null){console.log("No offCanvas found!");return}var e=new y(a);document.getElementById("btn-open-bestiary-offcanvas").addEventListener("click",function(t){console.log("Offcanvas button clicked."),t.preventDefault(),t.stopPropagation(),e.toggle()}),document.getElementById("offcanvasResponsive-bestiary").addEventListener("hide.bs.offcanvas",function(t){console.log("Offcanvas hide event."),N.classList.remove("show")})});function E(){A(),$()}function $(){for(const[a,e]of Object.entries(g)){if(!e.active||e.name==null)continue;let t=e.category.toLowerCase().split(" ").join("-"),s=document.getElementById(`bestiary-content-category-${t}`);if(s==null){console.log(t);continue}s.appendChild(z(a))}}function z(a){if(a==null||a=="")return;let e=Object.getOwnPropertyDescriptor(g,a).value,t=document.createElement("div"),s=e.name.toLowerCase().split(" ").join("-").split("'").join("");t.id="bestiary-"+s,t.classList.add("bestiary-entry","anchor");let o=`
    <h2 class="bestiary-heading2">${e.name}</h2>

    <img src="${e.image}" class="img-fluid" alt="${e.name}">

    <h4>${e.size} ${e.type} (${e.category})</h4>
        ${u(e.overview)}
    
    <h4 class="bestiary-heading4">Strengths</h4>
    <p>
        ${e.strengths}
    </p>
    <h4 class="bestiary-heading4">Weaknesses</h4>
    <p>
        ${e.weaknesses}
    </p>
    <h4 class="bestiary-heading4">Peculiarities</h4>
    <p>
        ${e.peculiarities}            
    </p>
    <h4 class="bestiary-heading4">Lures</h4>
    <ul>
        ${m(e.lures)}
    </ul>

    <h4 class="bestiary-heading4">Ingredients & Materials</h4>
    <ul>
        ${m(e.harvesting)}
    </ul>

    <h4 class="bestiary-heading4">About</h4>
        ${u(e.about)}
    `;return t.innerHTML=o,t}function m(a){let e="";for(let t=0;t<a.length;t++)t!=0?e=e+`
<li>${a[t]}</li>`:e=e+`<li>${a[t]}</li>`;return e}function u(a){let e="";for(let t=0;t<a.length;t++)t!=0?e=e+`
<p>
  ${a[t]}
</p>`:e=e+`<p>
    ${a[t]}
</p>`;return e}function O(){for(const[a,e]of Object.entries(g)){if(!e.active)continue;let t=e.category.toLowerCase().split(" ").join("-"),s=e.name.toLowerCase().split(" ").join("-").split("'").join(""),o=document.getElementById(`bestiary-sidebar-${t}`),h=document.createElement("li");h.classList.add("bestiary-category-sublist"),h.innerHTML=`<a href="#bestiary-${s}" class="bestiary-link rounded">${e.name}</a>`,o.appendChild(h)}}function A(){let a=document.getElementById("bestiary-sidebar-list");a.innerHTML="";let e="";for(const[t,s]of Object.entries(n)){let o=s.name.toLowerCase().split(" ").join("-"),h=`
        <li>
            <a href="#bestiary-${o}" class="bestiary-link-heading rounded">
                ${s.pluralName}
            </a>
            <ul id="bestiary-sidebar-${o}" class="list-unstyled">
            </ul>
        </li>
        `;e=e+h;let f=document.getElementById("bestiary-entries"),c=document.createElement("div");f.appendChild(c),c.id=`bestiary-content-category-${o}`;let p=`
        <div id="bestiary-${o}" class="bestiary-entry bestiary-category-entry anchor">
            <div class="divider bottom-arrow div-transparent"></div>    
            <div id="bestiary-overview-row" class="row">
                <div class="col test-border">
                    <h1 class="bestiary-heading1">${s.pluralName}</h1>
                    ${u(s.overview)}
                </div>

                <div class="col test-border">
                    <img src="${s.image}" class="img-fluid" alt="${s.pluralName}"> 
                </div>
            </div>
            <div class="divider top-arrow div-transparent"></div>
        </div>
        `;c.innerHTML=p}a.innerHTML=e,O()}
//# sourceMappingURL=bestiary-DTtseJix.js.map
