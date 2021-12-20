

INSERT INTO monster_settings (name, description)
VALUES
('Cavern Dwellers', 'At the edges of civilization in the caves and tunnels below the old mountains of the world dwell all sorts of scheming, dangerous monsters. Some are wily and old, like the race of goblins scheming to burn villages and make off with livestock. Others are strange aberrations of nature like the stinking, trash-eating Otyugh. A word of caution, then, to those brave adventurers whose first foray into danger leads them into these dank and shadowy places; bad things live in the dark. Bad things with sharp teeth.'),
('The Lower Depths', 'Ruins dot the countryside of Dungeon World. Old bastions of long- forgotten civilization fallen to decay, to monsters, or to the whim of a vengeful god. These ruins often cover a much more dangerous truth—catacombs and underground complexes lousy with traps and monsters. Gold, too. Which is why you''re here. Why you''re locked in mortal combat with a tribe of spiteful dark elves. Battling stone giants in caverns the size of whole countries. Maybe, though, you''re the noble souls who''ve travelled to the world''s heart to put an end to the Apocalypse Dragon—the beast who, it is said, will one day swallow the sun and kill us all. We appreciate it, really. We''ll all pray for you.'),
('Twisted Experiments', 'For some who learn the arcane arts it''s not merely enough to be able to live for a thousand years or throw lightning bolts that can fry a man. Some aren''t quite satisfied with the power to speak to the dead or draw the angels down from heaven. Hubris calls on those cloaked- and-hooded ''scientists'' to make a strange and unholy life of their own. No mortal children, these. These are the brood of a mind gone foul with strange magic. In this setting you will find such nightmares as the chimera, dripping poison. Here, too, are the protector golems and mutant apes. All sorts of bad ideas await you in the fallen towers of the mad magicians of Dungeon World.'),
('Ravenous Hordes', '''I''ve bested an orc in single combat,'' they crow. ''I''ve fought a gnoll and lived to the tell the tale.'' Which is no small feat and yet, you know the truth of these boasts. Like vermin, spotting but one of these creatures speaks to a greater doom on the horizon. No orc travels alone. No slavering gnoll moves without his pack. You know that soon, the wardrums will sound and the walls will be besieged by the full fury of the warchief and his tusked berserkers. These are the monsters that will bring civilization, screaming and weeping, to its knees. Unless you can stop them. Best of luck.'),
('Planar Powers', 'Sometimes, monsters do not come from Dungeon World at all. Beyond the mountains at the edge of the world or below the deepest seas, the sages and wise old priests say that there are gateways to the lands beyond. They speak of elysian fields; rivers of sweet wine and maidens dancing in fields of gold. They tell tales of the paradise of heavens to be found past the Planar Door. Tales tell, too, of the Thousandfold Hell. Of the swirling Elemental Vortex and the devils that wait for the stars to align so they can enter Dungeon World and wreak their bloody havoc. You must be curious to know if these tales are true? What will you see when the passage to the beyond is opened?'),
('Denizens of the Swamp', 'All things give way to rot in the end. Food spoils on the table, men''s minds go mad with age and disease. Even the world itself, when left untended and uncared for, can turn to black muck and stinking air. Things dwell in these parts of Dungeon World. Things gone just as a bad as the swirling filth that fills the swamps. In these cesspit lowlands, adventurers will find such creatures as the deadly-eyed basilisk or the famed, unkillable troll. You''ll need more than a dry pair of boots to survive these putrid fens. A sword would be a good start.'),
('Legions of the Undead', 'The sermons of mannish and dwarven gods would tell you that Death is the end of all. They say that once the mortal coil is unwound and a person takes their final breath that all is warmth and song and the white wings of angels. Not so. Not for all. For some, after life''s embrace loses its strength a darker power can take hold. Black magic rips the dead from the ground and gives them shambling unlife full of hate and hunger. Sorcery and witchcraft lend an ancient spell- smith the power to live forever in the husk of a Lich. There are bleak enchantments at play in shadowy corners all throughout Dungeon World. These creatures are the spawn of that fell magic.'),
('The Dark Woods','It would not be a lie to say that there are trees that stand in the deepest groves of Dungeon World that have stood since before man or elf walked amidst their roots. It would be true, too, to say that these ancient trees have long lost the green leaves of spring. In the strands of the dark woods one finds, if one looks in the right place, sylvan monsters old and powerful. Here live the race of savage centaurs and the fey soul-stealing creatures of yore. Under the shadow of the ancient trees, wolf-men howl for blood. Hurry along the old forest road and light no fire for food or warmth for it''s said that flames offend the woods themselves. You wouldn''t want that, would you?')
;

INSERT INTO monsters (name, attack, damage, piercing, hp, armor, description, instinct, setting_id)
VALUES
('Ankheg', 'Bite', 'd8+1 ', 0, 10, 3, 'A hide like plate armor and great crushing mandibles are problematic. A stomach full of acid that can burn a hole through a stone wall makes them all the worse. They''d be bad enough if they were proper insect-sized, but these things have the gall to be as long as any given horse. It''s just not natural! Good thing they tend to stick to one place? Easy for you to say—you don''t have an ankheg living under your corn field.', 'To undermine', 1),
('Cave Rat', 'Gnaw', 'd6', 1, 7, 1, 'Who hasn''t seen a rat before? It''s like that, but nasty and big and not afraid of you anymore. Maybe this one was a cousin to that one you caught in a trap or the one you killed with a knife in that filthy tavern in Darrow. Maybe he''s looking for a little ratty revenge.', 'To Devour', 1),
('Choker', 'Choke', 'd10', 0, 15, 2, 'Some say these things descended from the family of a cruel wizard who forced them to live out their lives underground. They say his experiments led him to fear the sun and ages passed while he descended into unlife, dragging his folk along with him. These things resemble men, in a way. Head, four limbs and all that. Only their skin is wet and rubbery and their arms long and fingers grasping. They hate all life that bears the stink of the sun''s touch, as one might expect. Jealousy, long-instilled, is hard to shake.', 'To deny light', 1),
('Cloaker', 'Constrict', 'd10 ', 0, 12, 1, 'Don''t put on that cloak, Gareth. Don''t. You don''t know where it''s been. I tell you, it''s no good. See! It moved! I''m not mad, Gareth, it moved! Don''t do it! No! GARETH!', 'To engulf', 1),
('Dwarven Warrior', 'Axe', 'd6', 0, 7, 2, 'For ages, men believed all dwarves were male and all were of this ilk: stoic and proud warriors. Axe-wielding and plate-wearing. Stout bearded battle-hungry dwarves who would push them, time and time again, back up out of their mines and tunnels with ferocity. It just goes to show how little men know about the elder races. These folk are merely a vanguard, and they bravely do their duty to protect the riches of the Dwarven realm. Earn their trust and you''ve an ally for life. Earn their ire and you''re not likely to regret it very long.', 'To defend', 1),

('Aboleth', 'Tentacle', 'd10+3', 0, 18, 0, 'Deep below the surface of the world, in freshwater seas untouched by the sun, dwell the aboleth. Fish the size of whales, with strange growths of gelatinous feelers used to probe the lightless shores. They''re served by slaves: blind albino victims of any race unfortunate enough to stumble on them, drained of thought and life by the powers of the aboleth''s alien mind. In the depths they plot against each other, fishy cultists building and digging upward towards the surface until someday, they''ll breach it. For now, they sleep and dream and guide their pallid minions to do their bidding.', 'To command', 2),
('Apocalypse Dragon', 'Bite', 'b[2d12]+9', 4, 26, 5, 'The end of all things shall be a burning—of tree and earth and of the air itself. It shall come upon the plains and mountains not from beyond this world but from within it. Birthed from the womb of deepest earth shall come the Dragon that Will End the World. In its passing all will become ash and bile and the Dungeon World a dying thing will drift through planar space devoid of life. They say to worship the Apocalypse Dragon is to invite madness. They say to love it is to know oblivion. The awakening is coming.', 'To end the world', 2),
('Chaos Spawn', 'Chaotic touch', 'd10', 0, 19, 1, 'Driven from the city, a cultist finds sanctuary in towns and villages. Discovered there, he flees to the hills and scratches his devotion on the cave walls. Found out again, he is chased with knife and torch into the depths, crawling deeper and deeper until, in the deepest places, he loses his way. First, he forgets his name. Then he forgets his shape. His chaos gods, most beloved, bless him with a new one.', 'To undermine the established order', 2),
('Chuul', 'Claws', 'd8+1', 3, 10, 4, 'Your worst seafood nightmare come to life. A vicious sort of half-man half-crawdad, cursed with primal intelligence and blessed with a pair of razor-sharp claws. Strange things lurk in the stinking pools in caverns best forgotten and the chuul is one of them. If you spot one, your best hope is a heavy mace to crack its shell and maybe a little garlic butter. Mmmm.', 'To split', 2),
('Deep Elf Assassin', 'Poisoned blade', 'd8', 1, 6, 1, 'It was not so simple a thing as a war over religion or territory. No disagreement of queens led to the great sundering of the elves. It was sadness. It was the very diminishing of the world by the lesser races. The glory of all the elves had built was cracking and turning to glass. Some, then, chose to separate themselves from the world; wracked with tears they turned their backs on men and dwarves. There were others, though, that were overcome with something new. A feeling no elf had felt before. Spite. Hatred filled these elves and twisted them and they turned on their weaker cousins. Some still remain after the great exodus below. Some hide amongst us with spider-poisoned blades, meting out that strangest of punishments: elven vengeance.', 'To spite the surface races', 2),

('Bulette', 'Bite', 'd10+5', 3, 20, 3, 'A seasoned caravan guard learns to listen for the calls of a scout or sentry with a keen ear. A few extra seconds after the alarm is raised can mean life or death. Different cries mean different responses, too—a call of “orcs!" means draw your sword and steady for blood but a call of “bandits!" says you might be able to bargain. One alarm from the scouts that always, always means it''s time to pack up, whip your horse and run for the hills? “LAND SHARK!"', 'To devour', 3),
('Chimera', 'Bite', 'd10+1', 0, 16, 1, 'Well-known and categorized, the chimera is a perfected creature. From the codices of the Mage''s Guild to the famous pages of Cullaina''s Creature Compendium, there''s no confusion about what chimera means. Two parts lioness, one part serpent, head of a she-goat, and all the vicious magic one can muster. The actual ritual might vary, as might a detail or two—more creative sorcerers switch the flame breath for acid, perhaps. Used as a guardian, an assassin or merely an instrument of chaos unchained, it matters little. The chimera is the worst sort of abomination: an intentional affront to all natural life.', 'To do as commanded', 3),
('Derro', 'Pickaxe', 'd6', 0, 3, 2, 'It''s typical to think that all the malignant arcane monsters made in this world are birthed by wizards, sorcerers, and their ilk. That the colleges and towers of Dungeon World are womb to every bleak experiment. There are mistakes made in the depths of the earth, too. These ones, the derro, are the mistakes of a long-forgotten dwarven alchemist. The derro don''t forget, though. Twisted and hateful, the derro can be spotted by their swollen skulls, brain-matter grown too large. They do not speak except in thoughts to one another and plot in the silent dark to extract sweetest revenge—that of the created on the creator.', 'To replace dwarves', 3),
('Digester', 'Acid', 'd10+1', 0, 16, 1, 'It''s okay, magical experimentation is a messy science. For every beautiful pegasus there''s a half-done creature that wasn''t quite right. We understand. The goblin-elephant you thought was such a great idea. The Gelatinous Drake. Just examples. No judgement here. Anyway, we''ve got something for that. We call it the Digester. Yes, just like it sounds. Strange looking, I know, and the smell isn''t the best, but this thing—it''ll eat magic like Svenloff the Stout drinks ale. Next time one of these unfortunate accidents occurs, just point the Digester at it and all your troubles drain away. Just keep an eye on it. Damn thing ate my wand last week.', 'To digest', 3),
('Ethereal Filcher', 'Stolen dagger', 'w[2d8]', 0, 12, 1, 'Things go missing. A sock, a silver spoon, your dead mother''s bones. We blame the maid, or bad luck, or just a moment of stupid forgetfulness and we move on. We never get to see the real cause of these problems. The spidery thing with human hands and eyes as blue as the deep Ethereal plane from whence the creature comes. We never see the nest it makes of astral silver webbing and stolen objects arranged in some mad pattern. We never watch it assemble its collection of halfling finger-bones, stolen from the hands of the sleeping. We''re lucky, that way.', 'To steal', 3),

('Formian Drone', 'Bite', 'd6', 0, 7, 4, 'With good cause, they say that these creatures (like all insects, really) are claimed by the powers of Law. They are order made flesh—a perfectly stratified society in which every larva, hatchling and adult knows its place in the great hive. The formian is some strange intersection of men and ants. (Though there are winged tribes that look like wasps out in the Western Desert, I''ve heard. And some with great sawtooth arms like mantids in the forests of the east.) Tall, with a hard shell and a harder mind, these particular formians are the bottom caste. They work the hills and honeycombs with single-minded joy that can be known only by such an alien mind.', 'To follow orders', 4),
('Formian Taskmaskter', 'Spiked whip', 'd8', 0, 6, 3, 'It takes two hands to rule an empire: one to wield the scepter and one to crack the whip. These ant-folk are that whip. Lucky for them, with two extra arms, that''s a lot of whip to crack. They oversee the vast swarms of worker drones that set to build the mighty caverns and ziggurats that dot the places that formians can be found. One in a hundred, these brutes stand two or three feet taller than their pale, near-mindless kin and have a sharper, crueler wit to match. They''ll often ignore the soft races (as we''re known) if we don''t interfere in a project, but get in the way of The Great Work and expect nothing less than their full attention. You don''t want their full attention.', 'To command', 4),
('Formian Centurion', 'Barbed spear', 'b[2d6]+2', 0, 7, 3, 'Whether in the form of a legionnaire, part of the formian standing army, or as a praetorian guard to the queen, every formian hive contains a great number of these most dangerous insectoids. Darker in carapace, often scarred with furrows and the ceremonial markings that set them apart from their drones, the formian centurions are their fighting force and rightly so. Born, bred and living for the singular purpose of killing the enemies of their hive, they fight with one mind and a hundred swords. Thus far, the powers of Law have seen fit to spare mankind a great war with these creatures, but we''ve seen them in skirmish—descending sometimes on border towns with their wings flickering in the heat or spilling up from a sandy mound to wipe clean a newly-dug mine. Theirs is an orderly bloodshed, committed with no pleasure but the completion of a goal.', 'To fight as ordered', 4),
('Formian Queen', 'Crushing mandibles', 'd10+5', 0, 24, 3, 'At the heart of every hive, no matter its size or kind, lives a queen. As large as any giant, she sits protected by her guard, served by every drone and taskmaster with her own, singular purpose: to spread her kind and grow the hive. To birth the eggs. To nurture. We do not understand the minds of these creatures but it is known they can communicate with their children, somehow, over vast distances and that they begin to teach them the ways of earth and stone and war while still pale and wriggling larvae, without a word. To kill one is to set chaos on the hive; without their queen, the rest turn on one another in a mad, blind rage.', 'To spread formians', 4),
('Gnoll Tracker', 'Bow', 'd8', 0, 6, 1, 'Once they scent your blood, you can''t escape. Not without intervention from the gods, or the duke''s rangers at least. The desert scrub is a dangerous place to go exploring on your own and if you fall and break your leg or eat the wrong cactus, well, you''ll be lucky if you die of thirst before the gnolls find you. They prefer their prey alive, see—cracking bones and the screams of the dying lend a sort of succulence to a meal. Sickening creatures, no? They''ll hunt you, slow and steady, as you die. If you hear laughter in the desert wind, well, best pray Death comes to take you before they do.', 'To prey on weakness', 4),

('Angel', 'Sword of flames', 'b[2d10]+4', 0, 18, 4, 'So was it written that the heavens opened up to Avra''hal and did an angel from the clouds emerge to speak unto her and so did it appear to her as her firstborn daughter—beautiful, of ebon skin and golden eyes—and did Avra''hal weep to see it. ''Be not afraid,'' it commanded her. ''Go to the villages I have shown you in your dreams and unto them show the word I have written on your soul.'' Avra''hal wept and wept and did agree to do this and did take up her sword and tome and did into the villages go, a great thirst for blood on her lips for the word the angel wrote upon the soul of Avra''hal was ''kill''."', 'To share divine will', 5),
('Barbed Devil', 'Spines', 'd10+3', 3, 16, 3, 'There are a thousand forms of devil, maybe more. Some common and some unique. Each time the Inquisitors discover a new one they write it into the Tormentors Codex and the knowledge is shared among the abbeys in the hope that atrocities of that particular sort won''t find their way into the world again. The barbed devil has long been known to the brothers and sisters of the Inquisition. It appears only at a site of great violence or when called by a wayward summoner. Covered in sharp quills, this particular demon revels in the spilling of blood, preferably by impaling victims piecemeal or in whole upon its thorns and letting them die there. Cruel but not particularly effective beyond slaughter. A low inquisitorial priority.', 'To rend flesh and spill blood', 5),
('Chain Devil', 'Crush', 'd10', 0, 12, 3, 'Do you think the phrase “drag him to hell” means nothing? It is unfortunately literal, in the case of the chain devil. Appearing differently to each victim, this summoned creature has but a single purpose: to wrap its victim up in binding coils and take it away to a place of torment. Sometimes it will come as a man-shaped mass of rusting iron, hooks and coils of mismatched links. Other times, a roiling tangle of rope or kelp or twisted bloody bedsheets. The results are always the same.', 'To capture', 5),
('Concept Elemental', null, null, null, null, null, 'The planes are not as literal as our world. Clothed in the elemental chaos are places of stranger stuff than air and water. Here, rivers of time crash upon shores of crystal fear. Bleak storms of nightmare roil and churn in a laughter-bright sky. Sometimes, the spirits of these places can be lured into our world, though they are infinitely more unpredictable and strange than mere fire or earth might be. Easier to make mistakes, too—one might try calling up a wealth elemental and be surprised to find a murder elemental instead.', 'To perfect its concept', 5),
('Corrupter', 'Secret dagger', 'w[2d8]', 0, 12, 0, '“Surely, my good man, you must know why I am here. Must know who I am. You said the words. You spilled the blood and followed the instructions almost to the letter. Your pronunciation was a bit off but that''s to be expected. I''ve come to give you what you''ve always wanted, friend. Glory, love, money? Paltry things when you''ve the vaults of hell to plumb. Don''t look so shocked, you knew what this was. You have but one thing we desire. Promise it to us, and the world shall be yours for the taking. Trust me.”', 'To bargain', 5),

('Bakunawa', 'Bite', 'd10+3', 1, 16, 2, 'Dragon-Turtle''s sister is a mighty serpent queen. Ten yards of scales and muscle, they say she wakes with a hunger when the sun disappears from the sky. She is attracted by bright light in the darkness and like any snake, the Bakunawa is sneaky. She will seek first to beguile and mislead and will only strike out with violence when no other option is available. When she does, though, her jaws are strong enough to crack the hull of any swamp-boat and certainly enough to slice through a steel breastplate or two. Give the greedy snake your treasures and she might just leave you alone.', 'To devour', 6),
('Basilisk', 'Bite', 'd10', 0, 12, 2, '“Few have seen a basilisk and lived to tell the tale. Get it? Seen a basilisk? Little bit of basilisk humor there. Sorry, I know you''re looking for something helpful, sirs. Serious stuff, I understand. The basilisk, even without its ability to turn your flesh to stone with a gaze, is a dangerous creature. A bit like a frog, bulbous eyes and six muscled legs built for leaping. A bit like an alligator, with snapping jaws and sawing teeth. Covered in stony scales and very hard to kill. Best avoided, if possible.”', 'To create new statuary', 6),
('Black Pudding', 'Corrosive touch', 'd10', 0, 15, 1, 'How do you kill a pile of goo? A great, squishy pile of goo that also happens to want to dissolve you and slurp you up? That is a good question to which I have no answer. Do let us know when you find out.', 'To dissolve', 6),
('Coutal', 'Light ray', 'd8', 0, 12, 2, 'As if in direct defiance of the decay and filth of the world, the gods granted us the coutal. As if to say, “there is beauty, even in this grim place.” A serpent in flight on jeweled wings, these beautiful creatures glow with a soft light, as the sun does through stained glass. Bright, wise, and calm, a coutal often knows many things and sees many more. You might be able to make a trade with it in exchange for some favor. They seek to cleanse and to purge and to make of this dark world a better one. Shame we have so few. The gods are cruel.', 'To cleanse', 6),
('Crocodilian', 'Bite', 'd8+3', 0, 10, 2, 'It''s a really, really big crocodile. Seriously.', 'To eat', 6),

('Abomination', 'Slam', 'd10+3', 0, 20, 1, 'Corpses sewn onto corpses make up the bulk of these shambling masses of dark magic. Most undead are crafted to be controlled—made to serve some purpose like building a tower or serving as guardians. Not so the abomination. The last aspect of the ritual used to grant fire to their hellish limbs invokes a hatred so severe that the abomination knows but one task: to tear and rend at the very thing it cannot have—life. Many students of the black arts learn to their mortal dismay the most important fact about these hulks; an abomination knows no master.', 'To end life', 7),
('Banshee', 'Scream', 'd10', 0, 16, 0, 'Come away from an encounter with one of these vengeful spirits merely deaf and count yourself lucky for the rest of your peaceful, silent days. Often mistaken at first glance for a ghost or wandering spirit, the banshee reveals a far more deadly talent for sonic assault when angered. And her anger comes easy. A victim of betrayal (often by a loved one) the banshee makes known her displeasure with a roar or scream that can putrefy flesh and rend the senses. If you can help her get her vengeance, they say she might grant rewards. Whether the affection of a spurned spirit is a thing you''d want, well, that''s another question.', 'To get revenge', 7),
('Devourer', 'Smash', 'd10+3', 0, 16, 1, 'Most folk know that the undead feed on flesh. The warmth, blood and living tissue continue their unholy existence. This is true for most of the mindless dead, animated by black sorcery. Not so the devourer. When a particularly wicked person (often a manipulator of men, an apostate priest or the like) dies in a gruesome way, the dark powers of Dungeon World might bring them back to a kind of life. The devourer, however, does not feed on the flesh of men or elves. The devourer eats souls. It kills with a pleasure only the sentient can enjoy and in the moments of its victims'' expiry, draws breath like a drowning man and swallows a soul. What does it mean to have your soul eaten by such a creature? None dare ask for fear of finding out.', 'To feast on souls', 7),
('Dragonbone', 'Bite', 'd10+3', 3, 20, 2, 'Mystical sorcerers debate: is this creature truly undead or is it a golem made of a particularly rare and blasphemous material? The bones, sinews and scales of a dead dragon make up this bleak automaton. Winged but flightless, dragon-shaped but without the mighty fire of such a noble thing, the dragonbone serves its master with a twisted devotion and is often set to assault the keeps and towers of rival necromancers. It would take a being of some considerable evil to twist the remains of a dragon thus.', 'To serve', 7),
('Draugr', 'Rusty sword', 'd6+1', 0, 7, 2, 'In the Nordemark, the men and women tell tales in their wooden halls of a place where the noble dead go. A mead hall atop their heavenly mountain where men of valor go to await the final battle for the world. It is a goodly place. It is a place where one hopes to go after death. And the inglorious dead? Those who fall to poison or in an act of cowardice, warriors though they may be? Well, those mead halls aren''t open to all and sundry. Some come back, frozen and twisted and empowered by jealous rage and wage their eternal war not on the forces of giants or trolls but on the towns of the men they once knew.', 'To take from the living', 7),

('Assassin Vine', 'Thorns', 'd10', 1, 15, 1, 'Among the animals there exists a clear division ''tween hunter and hunted. All it takes is a glance to know—by fangs and glowing eyes or claws or venomous sting—which of the creatures of this world are meant to kill and which stand to be killed. Such a split, if you have the eyes to see it, cuts the world of leaves and flowers in twain, as well. Druids in their forest circles know it. Rangers, too, might spot such a plant before it''s too late. Lay folk, though, they wander where they oughtn''t—paths into the deep woods covered in creeping vines and with a snap, these hungry ropes snap tight, dragging their meaty prey into the underbrush. Mind your feet, traveller.', 'To grow', 8),
('Blink Dog', 'Bite', 'd8', 0, 6, 4, 'Now you see it, now you don''t. Hounds once owned by a sorcerer lord and imbued with a kind of illusory cloak, they escaped into the woods around his lair and began to breed with wolves and wild dogs of the forest. You can spot them, if you''re lucky, by the glittering silver of their coats and their strange, ululating howls. They have a remarkable talent for being not quite where they appear to be and use it to take down prey much stronger than themselves. If you find yourself facing a pack of blink dogs you might as well close your eyes and fight. You''ll have an easier time when not betrayed by your natural sight. By such sorceries are the natural places of the world polluted with unnatural things.', 'To hunt', 8),
('Centaur', 'Bow', 'd6+2', 1, 11, 1, '“It will be a gathering of clans unseen in this age. Call Stormhoof and Brightspear. Summon Whitemane and Ironflanks. Sound the horn and we shall begin our meeting—we shall speak the words and bind our people together. Too long have the men cut the ancient trees for their ships. The elves are weak and cowardly, friend to these mannish slime. It will be a cleansing fire from the darkest woods. Raise the red banner of war! Today we strike back against these apes and retake what is ours!”', 'To rage', 8),
('Chaos Ooze', 'Warping touch', 'd10', 0, 23, 1, 'The barrier between Dungeon World and the elemental planes is not, as you might hope, a wall of stone. It''s much more porous. Places where the civil races do not often tread can sometimes, how to put this, spring a leak. Like a dam come just a little loose. Bits and pieces of the chaos spill out. Sometimes, they''ll congeal like an egg on a pan—that''s where we get the material for many of the Guild''s magical trinkets. Useful, right? Sometimes, though, it squirms and squishes around a bit and stays that way, warping all it touches into some other, strange form. Chaos begets chaos, and it grows.', 'To change', 8),
('Cockatrice', 'Beak', 'd8', 0, 6, 1, '“I ain''t ever seen such a thing, sir. Rodrick thought it a chicken, maybe. Poor Rodrick. I figured it to be a lizard of a sort, though he was right—it had a beak and gray feathers like a chicken. Right, well, see, we found it in the woods, in a nest at the foot of a tree while we were out with the sow. Looking for mushrooms, sir. I told Rodrick we were—yes, sir, right sir, the bird—see, it was glaring at Rodrick and he tried to scare it off with a stick to steal the eggs but the thing pecked his hand. Quick it was, too. I tried to get him away but he just got slower and slower and yes, as you see him now, sir. All frozen up like when we left the dog out overnight in winter two years back. Poor, stupid Rodrick. Weren''t no bird nor lizard, were it, sir?”', 'To defend the nest', 8)
;

INSERT INTO monster_tags (name, description)
VALUES
('Amorphous', 'Its anatomy and organs are bizarre and unnatural.'),
('Cautious', 'It prizes survival over aggression.'),
('Construct', 'It was made, not born'),
('Devious', 'Its main danger lies beyond the simple clash of battle.'),
('Divine', 'It was chosen by the gods.'),
('Group', 'Usually seen in small numbers, 3-6 or so.'),
('Hoader', 'It almost certainly has treasure.'),
('Horde', 'Where there''s one, there''s more. A lot more.'),
('Huge', 'It''s as big as a small house or larger.'),
('Intelligent', 'It''s smart enough that some individuals pick up other skills. The GM can adapt the monster by adding tags to reflect specific training, like a mage or warrior.'),
('Large', 'It''s much bigger than a human, about as big as a cart.'),
('Magical', 'It is by nature magical through and through.'),
('Organized', 'It has a group structure that aids it in survival. Defeating one may cause the wrath of others. One may sound an alarm.'),
('Planar', 'It''s from beyond this world'),
('Small', 'It''s about halfling size.'),
('Solitary', 'It lives and fights alone.'),
('Stealthy', 'It can avoid detection and prefers to attack with the element of surprise.'),
('Terrifying', 'Its presence and appearance evoke fear.')
;


INSERT INTO monsters_monster_tags (monster_id, monster_tag_id)
SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Amorphous') t ON 1=1 WHERE m.name IN ('Chaos Spawn', 'Black Pudding', 'Barbed Devil', 'Concept Elemental', 'Assassin Vine', 'Chaos Ooze')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Cautious') t ON 1=1 WHERE m.name IN ('Chuul', 'Formian Drone')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Construct') t ON 1=1 WHERE m.name IN ('Bulette', 'Chimera', 'Digester', 'Abomination')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Devious') t ON 1=1 WHERE m.name IN ('Derro', 'Ethereal Filcher', 'Concept Elemental', 'Corrupter', 'Coutal')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Divine') t ON 1=1 WHERE m.name IN ('Apocalypse Dragon', 'Angel')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Group') t ON 1=1 WHERE m.name IN ('Ankheg', 'Aboleth', 'Chuul', 'Deep Elf Assassin', 'Formian Taskmaster', 'Gnoll Tracker', 'Crocodilian', 'Blink Dog', 'Cockatrice')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Hoarder') t ON 1=1 WHERE m.name IN ('Formian Queen', 'Corrupter', 'Basilisk', 'Devourer', 'Cockatrice')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Horde') t ON 1=1 WHERE m.name IN ('Cave Rat', 'Dwarven Warrior', 'Derro', 'Formian Drone', 'Formian Centurion', 'Draugr', 'Centaur')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Huge') t ON 1=1 WHERE m.name IN ('Aboleth', 'Apocalypse Dragon', 'Bulette', 'Formian Queen', 'Dragonbone')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Intelligent') t ON 1=1 WHERE m.name IN ('Choker', 'Aboleth', 'Deep Elf Assassin', 'Formian Taskmaster', 'Gnoll Tracker', 'Derro', 'Formian Centurion', 'Formian Queen', 'Angel', 'Bakunawa', 'Coutal', 'Devourer', 'Banshee', 'Centaur')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Large') t ON 1=1 WHERE m.name IN ('Ankheg', 'Chuul', 'Chimera', 'Digester', 'Barbed Devil', 'Bakunawa', 'Crocodilian', 'Devourer', 'Abomination', 'Centaur')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Magical') t ON 1=1 WHERE m.name IN ('Apocalypse Dragon', 'Banshee', 'Blink Dog')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Organized') t ON 1=1 WHERE m.name IN ('Dwarven Warrior', 'Deep Elf Assassin', 'Formian Taskmaster', 'Gnoll Tracker', 'Derro', 'Formian Drone', 'Formian Centurion', 'Formian Queen', 'Angel', 'Draugr', 'Blink Dog', 'Centaur')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Planar') t ON 1=1 WHERE m.name IN ('Ethereal Filcher', 'Barbed Devil', 'Chain Devil', 'Concept Elemental', 'Corrupter', 'Chaos Ooze')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Small') t ON 1=1 WHERE m.name IN ('Cave Rat', 'Blink Dog', 'Cockatrice')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Solitary') t ON 1=1 WHERE m.name IN ('Choker', 'Cloaker', 'Apocalypse Dragon', 'Chaos Spawn', 'Black Pudding', 'Bulette', 'Chimera', 'Digester', 'Ethereal Filcher', 'Formian Queen', 'Angel', 'Barbed Devil', 'Chain Devil', 'Concept Elemental', 'Corrupter', 'Bakunawa', 'Basilisk', 'Coutal', 'Dragonbone', 'Devourer', 'Banshee', 'Abomination', 'Assassin Vine', 'Chaos Ooze')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Stealthy') t ON 1=1 WHERE m.name IN ('Choker', 'Cloaker', 'Assassin Vine')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name  = 'Terrifying') t ON 1=1 WHERE m.name IN ('Angel', 'Abomination', 'Chaos Ooze')
;

INSERT INTO monster_qualities (name, monster_id)
SELECT 'Amphibious', m.id FROM monsters m WHERE m.name IN ('Chuul', 'Bakunawa', 'Crocodilian')
UNION SELECT 'Burrowing', m.id FROM monsters m WHERE m.name IN ('Ankheg', 'Bulette', 'Ethereal Filcher')
UNION SELECT 'Camouflage', m.id FROM monsters m WHERE m.name IN ('Crocodilian')
UNION SELECT 'Chaos form', m.id FROM monsters m WHERE m.name = 'Chaos Spawn'
UNION SELECT 'Digest acid secretion', m.id FROM monsters m WHERE m.name = 'Digester'
UNION SELECT 'Flexible', m.id FROM monsters m WHERE m.name = 'Choker'
UNION SELECT 'Fragments of other planes embedded in it', m.id FROM monsters m WHERE m.name IN ('Chaos Ooze')
UNION SELECT 'Half-horse', m.id FROM monsters m WHERE m.name = 'Centaur'
UNION SELECT 'Half-man', m.id FROM monsters m WHERE m.name = 'Centaur'
UNION SELECT 'Halo', m.id FROM monsters m WHERE m.name IN ('Coutal')
UNION SELECT 'Hive connection', m.id FROM monsters m WHERE m.name IN ('Formian Drone', 'Formian Taskmaster', 'Formian Centurion', 'Formian Queen')
UNION SELECT 'Icy touch', m.id FROM monsters m WHERE m.name = 'Draugr'
UNION SELECT 'Illusion', m.id FROM monsters m WHERE m.name = 'Blink Dog'
UNION SELECT 'Inch-thick metal hide', m.id FROM monsters m WHERE m.name = 'Apocalypse Dragon'
UNION SELECT 'Insectoid', m.id FROM monsters m WHERE m.name IN ('Formian Drone', 'Formian Taskmaster', 'Formian Centurion', 'Formian Queen')
UNION SELECT 'Insubstantial', m.id FROM monsters m WHERE m.name = 'Banshee'
UNION SELECT 'Looks like a cloak', m.id FROM monsters m WHERE m.name = 'Cloaker'
UNION SELECT 'Many limbs, heads, and so on', m.id FROM monsters m WHERE m.name IN ('Abomination')
UNION SELECT 'Ooze', m.id FROM monsters m WHERE m.name IN ('Chaos Ooze')
UNION SELECT 'Plant', m.id FROM monsters m WHERE m.name IN ('Assassin Vine')
UNION SELECT 'Scent-tracker', m.id FROM monsters m WHERE m.name IN ('Gnoll Tracker')
UNION SELECT 'Spines', m.id FROM monsters m WHERE m.name IN ('Barbed Devil')
UNION SELECT 'Stone touch', m.id FROM monsters m WHERE m.name = 'Cockatrice'
UNION SELECT 'Supernatural knowledge', m.id FROM monsters m WHERE m.name = 'Apocalypse Dragon'
UNION SELECT 'Telepathy', m.id FROM monsters m WHERE m.name IN ('Aboleth', 'Derro')
UNION SELECT 'Wings', m.id FROM monsters m WHERE m.name IN ('Formian Centurion', 'Angel', 'Apocalypse Dragon', 'Coutal')
;

INSERT INTO monster_attack_tags (name, description)
VALUES
('Close', 'It''s useful for attacking something at arm''s reach plus a foot or two.'),
('Far', 'It''s useful for attacking if you can see the whites of their eyes.'),
('Forceful', 'It can knock someone back a pace, maybe even off their feet.'),
('Ignores Armor', 'Don''t subtract armor from the damage taken.'),
('Messy', 'It does damage in a particularly destructive way, ripping people and things apart.'),
('Near', 'It''s useful for attacking something in shouting distance.'),
('Reach', 'It''s useful for attacking something that''s several feet away—maybe as far as ten.')
;

INSERT INTO monsters_monster_attack_tags (monster_id, monster_attack_tag_id)
SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name = 'Close') t ON 1=1 WHERE m.name IN ('Ankheg', 'Cave Rat', 'Choker', 'Cloaker', 'Chaos Spawn', 'Digester', 'Ethereal Filcher', 'Formian Taskmaster', 'Formian Centurion', 'Chain Devil', 'Dwarven Warrior', 'Deep Elf Assassin', 'Derro', 'Formian Drone', 'Corrupter', 'Chuul', 'Barbed Devil', 'Bulette', 'Angel', 'Black Pudding', 'Bakunawa', 'Basilisk', 'Coutal', 'Crocodilian', 'Abomination', 'Devourer', 'Draugr', 'Assassin Vine', 'Blink Dog', 'Centaur', 'Chaos Ooze', 'Cockatrice')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name = 'Far') t ON 1=1 WHERE m.name IN ('Gnoll Tracker')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name = 'Forceful') t ON 1=1 WHERE m.name IN ('Apocalypse Dragon', 'Bulette', 'Angel', 'Formian Queen', 'Abomination', 'Devourer')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name = 'Ignores Armor') t ON 1=1 WHERE m.name IN ('Cloaker', 'Chain Devil', 'Angel', 'Black Pudding', 'Coutal')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name = 'Messy') t ON 1=1 WHERE m.name IN ('Cave Rat', 'Apocalypse Dragon', 'Chuul', 'Barbed Devil', 'Dragonbone', 'Assassin Vine')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name = 'Near') t ON 1=1 WHERE m.name IN ('Gnoll Tracker', 'Banshee', 'Centaur')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name = 'Reach') t ON 1=1 WHERE m.name IN ('Ankheg', 'Choker', 'Chaos Spawn', 'Digester', 'Ethereal Filcher', 'Formian Taskmaster', 'Formian Centurion', 'Chain Devil', 'Aboleth', 'Chimera', 'Apocalypse Dragon', 'Chuul', 'Barbed Devil', 'Formian Queen', 'Bakunawa', 'Crocodilian', 'Abomination', 'Devourer', 'Dragonbone', 'Draugr', 'Assassin Vine', 'Centaur')
;

INSERT INTO monster_actions (name, monster_id)
SELECT 'Undermine the ground', m.id FROM monsters m WHERE m.name = 'Ankheg'
UNION SELECT 'Burst from the earth', m.id FROM monsters m WHERE m.name IN ('Ankheg', 'Bulette')
UNION SELECT 'Spray forth acid, eating away at metal flesh', m.id FROM monsters m WHERE m.name = 'Ankheg'
UNION SELECT 'Swarm', m.id FROM monsters m WHERE m.name = 'Cave Rat'
UNION SELECT 'Rip something (or someone) apart', m.id FROM monsters m WHERE m.name = 'Cave Rat'
UNION SELECT 'Hold someone, wringing the breath from them', m.id FROM monsters m WHERE m.name = 'Choker'
UNION SELECT 'Fling a held creature', m.id FROM monsters m WHERE m.name = 'Choker'
UNION SELECT 'Engulf the unsuspecting', m.id FROM monsters m WHERE m.name = 'Cloaker'
UNION SELECT 'Drive them back', m.id FROM monsters m WHERE m.name = 'Dwarven Warrior'
UNION SELECT 'Call up reinforcements', m.id FROM monsters m WHERE m.name IN ('Dwarven Warrior', 'Deep Elf Assassin')
UNION SELECT 'Invade a mind', m.id FROM monsters m WHERE m.name = 'Aboleth'
UNION SELECT 'Turn minions on them', m.id FROM monsters m WHERE m.name = 'Aboleth'
UNION SELECT 'Put a plan into motion', m.id FROM monsters m WHERE m.name = 'Aboleth'
UNION SELECT 'Set a disaster in motion', m.id FROM monsters m WHERE m.name = 'Apocalypse Dragon'
UNION SELECT 'Breathe forth the elements', m.id FROM monsters m WHERE m.name = 'Apocalypse Dragon'
UNION SELECT 'Act with perfect foresight', m.id FROM monsters m WHERE m.name = 'Apocalypse Dragon'
UNION SELECT 'Rewrite reality', m.id FROM monsters m WHERE m.name = 'Chaos Spawn'
UNION SELECT 'Unleash chaos from containment', m.id FROM monsters m WHERE m.name = 'Chaos Spawn'
UNION SELECT 'Split something in two with mighty claws', m.id FROM monsters m WHERE m.name = 'Chuul'
UNION SELECT 'Retreat into water', m.id FROM monsters m WHERE m.name = 'Chuul'
UNION SELECT 'Poison them', m.id FROM monsters m WHERE m.name IN ('Deep Elf Assassin', 'Chimera')
UNION SELECT 'Unleash an ancient spell', m.id FROM monsters m WHERE m.name = 'Deep Elf Assassin'
UNION SELECT 'Swallow whole', m.id FROM monsters m WHERE m.name = 'Bulette'
UNION SELECT 'Drag prey into rough tunnels', m.id FROM monsters m WHERE m.name = 'Bulette'
UNION SELECT 'Belch forth flame', m.id FROM monsters m WHERE m.name = 'Chimera'
UNION SELECT 'Run them over', m.id FROM monsters m WHERE m.name = 'Chimera'
UNION SELECT 'Fill a mind with foreign thoughts', m.id FROM monsters m WHERE m.name = 'Derro'
UNION SELECT 'Take control of a beast''s mind', m.id FROM monsters m WHERE m.name = 'Derro'
UNION SELECT 'Eat away at something', m.id FROM monsters m WHERE m.name = 'Digester'
UNION SELECT 'Draw sustenance', m.id FROM monsters m WHERE m.name = 'Digester'
UNION SELECT 'Take something important to its planar lair', m.id FROM monsters m WHERE m.name = 'Ethereal Filcher'
UNION SELECT 'Retreat to the Ethereal plane', m.id FROM monsters m WHERE m.name = 'Ethereal Filcher'
UNION SELECT 'Use an item from its lair', m.id FROM monsters m WHERE m.name = 'Ethereal Filcher'
UNION SELECT 'Raise the alarm', m.id FROM monsters m WHERE m.name = 'Formian Drone'
UNION SELECT 'Create value for the hive', m.id FROM monsters m WHERE m.name = 'Formian Drone'
UNION SELECT 'Assimilate', m.id FROM monsters m WHERE m.name = 'Formian Drone'
UNION SELECT 'Order drones into battle', m.id FROM monsters m WHERE m.name = 'Formian Taskmaster'
UNION SELECT 'Set great numbers into motion', m.id FROM monsters m WHERE m.name = 'Formian Taskmaster'
UNION SELECT 'Call every formian it spawned', m.id FROM monsters m WHERE m.name = 'Formian Queen'
UNION SELECT 'Release a half-formed larval mutation', m.id FROM monsters m WHERE m.name = 'Formian Queen'
UNION SELECT 'Organize and issue orders', m.id FROM monsters m WHERE m.name = 'Formian Queen'
UNION SELECT 'Doggedly track prey', m.id FROM monsters m WHERE m.name = 'Gnoll Tracker'
UNION SELECT 'Strike at a moment of weakness', m.id FROM monsters m WHERE m.name = 'Gnoll Tracker'
UNION SELECT 'Deliver visions and prophecy', m.id FROM monsters m WHERE m.name = 'Angel'
UNION SELECT 'Stir mortals to action', m.id FROM monsters m WHERE m.name = 'Angel'
UNION SELECT 'Expose sin and injustice', m.id FROM monsters m WHERE m.name = 'Angel'
UNION SELECT 'Impale someone', m.id FROM monsters m WHERE m.name = 'Barbed Devil'
UNION SELECT 'Kill indiscriminately', m.id FROM monsters m WHERE m.name = 'Barbed Devil'
UNION SELECT 'Take a captive', m.id FROM monsters m WHERE m.name = 'Chain Devil'
UNION SELECT 'Return to whence it came', m.id FROM monsters m WHERE m.name = 'Chain Devil'
UNION SELECT 'Torture with glee', m.id FROM monsters m WHERE m.name = 'Chain Devil'
UNION SELECT 'Demonstrate its concept in its purest form', m.id FROM monsters m WHERE m.name = 'Concept Elemental'
UNION SELECT 'Offer a deal with horrible consequences', m.id FROM monsters m WHERE m.name = 'Corrupter'
UNION SELECT 'Plumb the vaults of hell for a bargaining chip', m.id FROM monsters m WHERE m.name = 'Corrupter'
UNION SELECT 'Make a show of power', m.id FROM monsters m WHERE m.name = 'Corrupter'
UNION SELECT 'Lure prey with lies and illusions', m.id FROM monsters m WHERE m.name = 'Bakunawa'
UNION SELECT 'Lash out at light', m.id FROM monsters m WHERE m.name = 'Bakunawa'
UNION SELECT 'Devour', m.id FROM monsters m WHERE m.name = 'Bakunawa'
UNION SELECT 'Turn flesh to stone with a gaze', m.id FROM monsters m WHERE m.name = 'Basilisk'
UNION SELECT 'Retreat into a maze of stone', m.id FROM monsters m WHERE m.name = 'Basilisk'
UNION SELECT 'Eat away metal, flesh, or wood', m.id FROM monsters m WHERE m.name = 'Black Pudding'
UNION SELECT 'Ooze into a troubling place: food, armor, stomach', m.id FROM monsters m WHERE m.name = 'Black Pudding'
UNION SELECT 'Pass judgment on a person or place', m.id FROM monsters m WHERE m.name = 'Coutal'
UNION SELECT 'Summon divine forces to cleanse', m.id FROM monsters m WHERE m.name = 'Coutal'
UNION SELECT 'Offer information in exchange for service', m.id FROM monsters m WHERE m.name = 'Coutal'
UNION SELECT 'Attack an unsuspecting victim', m.id FROM monsters m WHERE m.name = 'Crocodilian'
UNION SELECT 'Escape into the water', m.id FROM monsters m WHERE m.name = 'Crocodilian'
UNION SELECT 'Hold something tight in its jaws', m.id FROM monsters m WHERE m.name = 'Crocodilian'
UNION SELECT 'Tear flesh apart', m.id FROM monsters m WHERE m.name = 'Abomination'
UNION SELECT 'Spill forth putrid guts', m.id FROM monsters m WHERE m.name = 'Abomination'
UNION SELECT 'Drown out all other sound with a ceaseless scream', m.id FROM monsters m WHERE m.name = 'Banshee'
UNION SELECT 'Unleash a skull-splitting noise', m.id FROM monsters m WHERE m.name = 'Banshee'
UNION SELECT 'Disappear into the mists', m.id FROM monsters m WHERE m.name = 'Banshee'
UNION SELECT 'Devour or trap a dying soul', m.id FROM monsters m WHERE m.name = 'Devourer'
UNION SELECT 'Bargain for a soul''s return', m.id FROM monsters m WHERE m.name = 'Devourer'
UNION SELECT 'Attack unrelentingly', m.id FROM monsters m WHERE m.name = 'Dragonbone'
UNION SELECT 'Freeze flesh', m.id FROM monsters m WHERE m.name = 'Draugr'
UNION SELECT 'Call on the unworthy dead', m.id FROM monsters m WHERE m.name = 'Draugr'
UNION SELECT 'Shoot forth new growth', m.id FROM monsters m WHERE m.name = 'Assassin Vine'
UNION SELECT 'Attack the unwary', m.id FROM monsters m WHERE m.name = 'Assassin Vine'
UNION SELECT 'Give the appearance of being somewhere they''re not', m.id FROM monsters m WHERE m.name = 'Blink Dog'
UNION SELECT 'Summon the pack', m.id FROM monsters m WHERE m.name = 'Blink Dog'
UNION SELECT 'Move with amazing speed', m.id FROM monsters m WHERE m.name = 'Blink Dog'
UNION SELECT 'Overrun them', m.id FROM monsters m WHERE m.name = 'Centaur'
UNION SELECT 'Fire a perfect bullseye', m.id FROM monsters m WHERE m.name = 'Centaur'
UNION SELECT 'Move with unrelenting speed', m.id FROM monsters m WHERE m.name = 'Centaur'
UNION SELECT 'Cause a change in appearance or substance', m.id FROM monsters m WHERE m.name = 'Chaos Ooze'
UNION SELECT 'Briefly bridge the planes', m.id FROM monsters m WHERE m.name = 'Chaos Ooze'
UNION SELECT 'Start a slow transformation to stone', m.id FROM monsters m WHERE m.name = 'Cockatrice'
;
