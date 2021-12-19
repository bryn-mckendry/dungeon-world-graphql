
INSERT INTO monster_settings (name, description)
VALUES
('Cavern Dwellers', 'At the edges of civilization in the caves and tunnels below the old mountains of the world dwell all sorts of scheming, dangerous monsters. Some are wily and old, like the race of goblins scheming to burn villages and make off with livestock. Others are strange aberrations of nature like the stinking, trash-eating Otyugh. A word of caution, then, to those brave adventurers whose first foray into danger leads them into these dank and shadowy places; bad things live in the dark. Bad things with sharp teeth.'),
('The Lower Depths', 'Ruins dot the countryside of Dungeon World. Old bastions of long- forgotten civilization fallen to decay, to monsters, or to the whim of a vengeful god. These ruins often cover a much more dangerous truth—catacombs and underground complexes lousy with traps and monsters. Gold, too. Which is why you''re here. Why you''re locked in mortal combat with a tribe of spiteful dark elves. Battling stone giants in caverns the size of whole countries. Maybe, though, you''re the noble souls who''ve travelled to the world''s heart to put an end to the Apocalypse Dragon—the beast who, it is said, will one day swallow the sun and kill us all. We appreciate it, really. We''ll all pray for you.'),
('Twisted Experiments', 'For some who learn the arcane arts it''s not merely enough to be able to live for a thousand years or throw lightning bolts that can fry a man. Some aren''t quite satisfied with the power to speak to the dead or draw the angels down from heaven. Hubris calls on those cloaked- and-hooded ''scientists'' to make a strange and unholy life of their own. No mortal children, these. These are the brood of a mind gone foul with strange magic. In this setting you will find such nightmares as the chimera, dripping poison. Here, too, are the protector golems and mutant apes. All sorts of bad ideas await you in the fallen towers of the mad magicians of Dungeon World.'),
('Ravenous Hordes', '''I''ve bested an orc in single combat,'' they crow. ''I''ve fought a gnoll and lived to the tell the tale.'' Which is no small feat and yet, you know the truth of these boasts. Like vermin, spotting but one of these creatures speaks to a greater doom on the horizon. No orc travels alone. No slavering gnoll moves without his pack. You know that soon, the wardrums will sound and the walls will be besieged by the full fury of the warchief and his tusked berserkers. These are the monsters that will bring civilization, screaming and weeping, to its knees. Unless you can stop them. Best of luck.'),
('Denizens of the Swamp', 'All things give way to rot in the end. Food spoils on the table, men''s minds go mad with age and disease. Even the world itself, when left untended and uncared for, can turn to black muck and stinking air. Things dwell in these parts of Dungeon World. Things gone just as a bad as the swirling filth that fills the swamps. In these cesspit lowlands, adventurers will find such creatures as the deadly-eyed basilisk or the famed, unkillable troll. You''ll need more than a dry pair of boots to survive these putrid fens. A sword would be a good start.'),
('Legions of the Undead', 'The sermons of mannish and dwarven gods would tell you that Death is the end of all. They say that once the mortal coil is unwound and a person takes their final breath that all is warmth and song and the white wings of angels. Not so. Not for all. For some, after life''s embrace loses its strength a darker power can take hold. Black magic rips the dead from the ground and gives them shambling unlife full of hate and hunger. Sorcery and witchcraft lend an ancient spell- smith the power to live forever in the husk of a Lich. There are bleak enchantments at play in shadowy corners all throughout Dungeon World. These creatures are the spawn of that fell magic.'),
('The Dark Woods','It would not be a lie to say that there are trees that stand in the deepest groves of Dungeon World that have stood since before man or elf walked amidst their roots. It would be true, too, to say that these ancient trees have long lost the green leaves of spring. In the strands of the dark woods one finds, if one looks in the right place, sylvan monsters old and powerful. Here live the race of savage centaurs and the fey soul-stealing creatures of yore. Under the shadow of the ancient trees, wolf-men howl for blood. Hurry along the old forest road and light no fire for food or warmth for it''s said that flames offend the woods themselves. You wouldn''t want that, would you?'),
('Planar Powers', 'Sometimes, monsters do not come from Dungeon World at all. Beyond the mountains at the edge of the world or below the deepest seas, the sages and wise old priests say that there are gateways to the lands beyond. They speak of elysian fields; rivers of sweet wine and maidens dancing in fields of gold. They tell tales of the paradise of heavens to be found past the Planar Door. Tales tell, too, of the Thousandfold Hell. Of the swirling Elemental Vortex and the devils that wait for the stars to align so they can enter Dungeon World and wreak their bloody havoc. You must be curious to know if these tales are true? What will you see when the passage to the beyond is opened?')
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

('Bulette', 'Bite', 'd10+5', 3, 20, 3, 'A seasoned caravan guard learns to listen for the calls of a scout or sentry with a keen ear. A few extra seconds after the alarm is raised can mean life or death. Different cries mean different responses, too—a call of “orcs!” means draw your sword and steady for blood but a call of “bandits!” says you might be able to bargain. One alarm from the scouts that always, always means it''s time to pack up, whip your horse and run for the hills? “LAND SHARK!”', 'To devour', 3),
('Chimera', 'Bite', 'd10+1', 0, 16, 1, 'Well-known and categorized, the chimera is a perfected creature. From the codices of the Mage''s Guild to the famous pages of Cullaina''s Creature Compendium, there''s no confusion about what chimera means. Two parts lioness, one part serpent, head of a she-goat, and all the vicious magic one can muster. The actual ritual might vary, as might a detail or two—more creative sorcerers switch the flame breath for acid, perhaps. Used as a guardian, an assassin or merely an instrument of chaos unchained, it matters little. The chimera is the worst sort of abomination: an intentional affront to all natural life.', 'To do as commanded', 3),
('Derro', 'Pickaxe', 'd6', 0, 3, 2, 'It''s typical to think that all the malignant arcane monsters made in this world are birthed by wizards, sorcerers, and their ilk. That the colleges and towers of Dungeon World are womb to every bleak experiment. There are mistakes made in the depths of the earth, too. These ones, the derro, are the mistakes of a long-forgotten dwarven alchemist. The derro don''t forget, though. Twisted and hateful, the derro can be spotted by their swollen skulls, brain-matter grown too large. They do not speak except in thoughts to one another and plot in the silent dark to extract sweetest revenge—that of the created on the creator.', 'To replace dwarves', 3),
('Digester', 'Acid', 'd10+1', 0, 16, 1, 'It''s okay, magical experimentation is a messy science. For every beautiful pegasus there''s a half-done creature that wasn''t quite right. We understand. The goblin-elephant you thought was such a great idea. The Gelatinous Drake. Just examples. No judgement here. Anyway, we''ve got something for that. We call it the Digester. Yes, just like it sounds. Strange looking, I know, and the smell isn''t the best, but this thing—it''ll eat magic like Svenloff the Stout drinks ale. Next time one of these unfortunate accidents occurs, just point the Digester at it and all your troubles drain away. Just keep an eye on it. Damn thing ate my wand last week.', 'To digest', 3),
('Ethereal Filcher', 'Stolen dagger', 'w[2d8]', 0, 12, 1, 'Things go missing. A sock, a silver spoon, your dead mother''s bones. We blame the maid, or bad luck, or just a moment of stupid forgetfulness and we move on. We never get to see the real cause of these problems. The spidery thing with human hands and eyes as blue as the deep Ethereal plane from whence the creature comes. We never see the nest it makes of astral silver webbing and stolen objects arranged in some mad pattern. We never watch it assemble its collection of halfling finger-bones, stolen from the hands of the sleeping. We''re lucky, that way.', 'To steal', 3),

('Formian Drone', 'Bite', 'd6', 0, 7, 4, 'With good cause, they say that these creatures (like all insects, really) are claimed by the powers of Law. They are order made flesh—a perfectly stratified society in which every larva, hatchling and adult knows its place in the great hive. The formian is some strange intersection of men and ants. (Though there are winged tribes that look like wasps out in the Western Desert, I''ve heard. And some with great sawtooth arms like mantids in the forests of the east.) Tall, with a hard shell and a harder mind, these particular formians are the bottom caste. They work the hills and honeycombs with single-minded joy that can be known only by such an alien mind.', 'To follow orders', 4),
('Formian Taskmaskter', 'Spiked whip', 'd8', 0, 6, 3, 'It takes two hands to rule an empire: one to wield the scepter and one to crack the whip. These ant-folk are that whip. Lucky for them, with two extra arms, that''s a lot of whip to crack. They oversee the vast swarms of worker drones that set to build the mighty caverns and ziggurats that dot the places that formians can be found. One in a hundred, these brutes stand two or three feet taller than their pale, near-mindless kin and have a sharper, crueler wit to match. They''ll often ignore the soft races (as we''re known) if we don''t interfere in a project, but get in the way of The Great Work and expect nothing less than their full attention. You don''t want their full attention.', 'To command', 4),
('Formian Centurion', 'Barbed spear', 'b[2d6]+2', 0, 7, 3, 'Whether in the form of a legionnaire, part of the formian standing army, or as a praetorian guard to the queen, every formian hive contains a great number of these most dangerous insectoids. Darker in carapace, often scarred with furrows and the ceremonial markings that set them apart from their drones, the formian centurions are their fighting force and rightly so. Born, bred and living for the singular purpose of killing the enemies of their hive, they fight with one mind and a hundred swords. Thus far, the powers of Law have seen fit to spare mankind a great war with these creatures, but we''ve seen them in skirmish—descending sometimes on border towns with their wings flickering in the heat or spilling up from a sandy mound to wipe clean a newly-dug mine. Theirs is an orderly bloodshed, committed with no pleasure but the completion of a goal.', 'To fight as ordered', 4),
('Formian Queen', 'Crushing mandibles', 'd10+5', 0, 24, 3, 'At the heart of every hive, no matter its size or kind, lives a queen. As large as any giant, she sits protected by her guard, served by every drone and taskmaster with her own, singular purpose: to spread her kind and grow the hive. To birth the eggs. To nurture. We do not understand the minds of these creatures but it is known they can communicate with their children, somehow, over vast distances and that they begin to teach them the ways of earth and stone and war while still pale and wriggling larvae, without a word. To kill one is to set chaos on the hive; without their queen, the rest turn on one another in a mad, blind rage.', 'To spread formians', 4),
('Gnoll Tracker', 'Bow', 'd8', 0, 6, 1, 'Once they scent your blood, you can’t escape. Not without intervention from the gods, or the duke’s rangers at least. The desert scrub is a dangerous place to go exploring on your own and if you fall and break your leg or eat the wrong cactus, well, you’ll be lucky if you die of thirst before the gnolls find you. They prefer their prey alive, see—cracking bones and the screams of the dying lend a sort of succulence to a meal. Sickening creatures, no? They’ll hunt you, slow and steady, as you die. If you hear laughter in the desert wind, well, best pray Death comes to take you before they do.', 'To prey on weakness', 4)
;

INSERT INTO monster_tags (name, description)
VALUES
('Amorphous', 'Its anatomy and organs are bizarre and unnatural.'),
('Cautious', 'It prizes survival over aggression.'),
('Construct', 'It was made, not born'),
('Devious', 'Its main danger lies beyond the simple clash of battle.'),
('Divine', 'It was chosen by the gods.'),
('Group', 'Usually seen in small numbers, 3-6 or so.'),
('Horde', 'Where there''s one, there''s more. A lot more.'),
('Huge', 'It''s as big as a small house or larger.'),
('Intelligent', 'It''s smart enough that some individuals pick up other skills. The GM can adapt the monster by adding tags to reflect specific training, like a mage or warrior.'),
('Large', 'It''s much bigger than a human, about as big as a cart.'),
('Magical', 'It is by nature magical through and through.'),
('Organized', 'It has a group structure that aids it in survival. Defeating one may cause the wrath of others. One may sound an alarm.'),
('Planar', 'It''s from beyond this world'),
('Small', 'It''s about halfling size.'),
('Solitary', 'It lives and fights alone.'),
('Stealthy', 'It can avoid detection and prefers to attack with the element of surprise.')
;

INSERT INTO monsters_monster_tags (monster_id, monster_tag_id)
SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Group', 'Large')) t ON 1=1 WHERE m.name = 'Ankheg'
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Horde', 'Small')) t ON 1=1 WHERE m.name = 'Cave Rat'
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Solitary', 'Stealthy', 'Intelligent')) t ON 1=1 WHERE m.name = 'Choker'
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Solitary', 'Stealthy')) t ON 1=1 WHERE m.name = 'Cloaker'
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Horde', 'Organized')) t ON 1=1 WHERE m.name = 'Dwarven Warrior'
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Group', 'Huge', 'Intelligent')) t ON 1=1 WHERE m.name = 'Aboleth'
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Solitary', 'Huge', 'Magical', 'Divine')) t ON 1=1 WHERE m.name = 'Apocalypse Dragon'
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Solitary', 'Amorphous')) t ON 1=1 WHERE m.name = 'Chaos Spawn'
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Group', 'Large', 'Cautious')) t ON 1=1 WHERE m.name = 'Chuul'
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Group', 'Intelligent', 'Organized')) t ON 1=1 WHERE m.name IN ('Deep Elf Assassin', 'Formian Taskmaster', 'Gnoll Tracker')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Solitary', 'Huge', 'Construct')) t ON 1=1 WHERE m.name = 'Bulette'
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Solitary', 'Large', 'Construct')) t ON 1=1 WHERE m.name IN ('Chimera', 'Digester')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Horde', 'Devious', 'Intelligent', 'Organized')) t ON 1=1 WHERE m.name = 'Derro'
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Solitary', 'Devious', 'Planar')) t ON 1=1 WHERE m.name = 'Ethereal Filcher'
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Horde', 'Organized', 'Cautious')) t ON 1=1 WHERE m.name = 'Formian Drone'
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Horde', 'Organized', 'Intelligent')) t ON 1=1 WHERE m.name = 'Formian Centurion'
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_tags t WHERE t.name IN ('Solitary', 'Huge', 'Organized', 'Intelligent', 'Hoarder')) t ON 1=1 WHERE m.name = 'Formian Queen'
;

INSERT INTO monster_qualities (name)
VALUES
('Burrowing'),
('Flexible'),
('Looks like a cloak'),
('Telepathy'),
('Inch-thick metal hide'),
('Supernatural knowledge'),
('Wings'),
('Chaos form'),
('Amphibious'),
('Digest acid secretion'),
('Hive connection'),
('Insectoid'),
('Scent-tracker')
;

INSERT INTO monsters_monster_qualities (monster_id, monster_quality_id)
SELECT m.id, q.id FROM monsters m INNER JOIN (SELECT id FROM monster_qualities q WHERE q.name IN ('Burrowing')) q ON 1=1 WHERE m.name IN ('Ankheg', 'Bulette', 'Ethereal Filcher')
UNION SELECT m.id, q.id FROM monsters m INNER JOIN (SELECT id FROM monster_qualities q WHERE q.name IN ('Flexible')) q ON 1=1 WHERE m.name = 'Choker'
UNION SELECT m.id, q.id FROM monsters m INNER JOIN (SELECT id FROM monster_qualities q WHERE q.name IN ('Looks like a cloak')) q ON 1=1 WHERE m.name = 'Cloaker'
UNION SELECT m.id, q.id FROM monsters m INNER JOIN (SELECT id FROM monster_qualities q WHERE q.name IN ('Telepathy')) q ON 1=1 WHERE m.name IN ('Aboleth', 'Derro')
UNION SELECT m.id, q.id FROM monsters m INNER JOIN (SELECT id FROM monster_qualities q WHERE q.name IN ('Inch-thick metal hide', 'Supernatural knowledge', 'Wings')) q ON 1=1 WHERE m.name = 'Apocalypse Dragon'
UNION SELECT m.id, q.id FROM monsters m INNER JOIN (SELECT id FROM monster_qualities q WHERE q.name IN ('Chaos form')) q ON 1=1 WHERE m.name = 'Chaos Spawn'
UNION SELECT m.id, q.id FROM monsters m INNER JOIN (SELECT id FROM monster_qualities q WHERE q.name IN ('Amphibious')) q ON 1=1 WHERE m.name = 'Chuul'
UNION SELECT m.id, q.id FROM monsters m INNER JOIN (SELECT id FROM monster_qualities q WHERE q.name IN ('Digest acid secretion')) q ON 1=1 WHERE m.name = 'Digester'
UNION SELECT m.id, q.id FROM monsters m INNER JOIN (SELECT id FROM monster_qualities q WHERE q.name IN ('Hive connection', 'Insectoid')) q ON 1=1 WHERE m.name IN ('Formian Drone', 'Formian Taskmaster', 'Formian Centurion', 'Formian Queen')
UNION SELECT m.id, q.id FROM monsters m INNER JOIN (SELECT id FROM monster_qualities q WHERE q.name IN ('Wings')) q ON 1=1 WHERE m.name IN ('Formian Centurion')
UNION SELECT m.id, q.id FROM monsters m INNER JOIN (SELECT id FROM monster_qualities q WHERE q.name IN ('Scent-tracker')) q ON 1=1 WHERE m.name IN ('Gnoll Tracker')
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
SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name IN ('Close', 'Reach')) t ON 1=1 WHERE m.name IN ('Ankheg', 'Choker', 'Chaos Spawn', 'Digester', 'Ethereal Filcher', 'Formian Taskmaster', 'Formian Centurion')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name IN ('Close', 'Messy')) t ON 1=1 WHERE m.name = 'Cave Rat'
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name IN ('Close', 'Ignores Armor')) t ON 1=1 WHERE m.name IN ('Cloaker')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name IN ('Close')) t ON 1=1 WHERE m.name IN ('Dwarven Warrior', 'Deep Elf Assassin', 'Derro', 'Formian Drone')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name IN ('Reach')) t ON 1=1 WHERE m.name IN ('Aboleth', 'Chimera')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name IN ('Reach', 'Forceful', 'Messy')) t ON 1=1 WHERE m.name IN ('Apocalypse Dragon')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name IN ('Close', 'Reach', 'Messy')) t ON 1=1 WHERE m.name IN ('Chuul')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name IN ('Close', 'Forceful')) t ON 1=1 WHERE m.name IN ('Bulette')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name IN ('Reach', 'Forceful')) t ON 1=1 WHERE m.name IN ('Formian Queen')
UNION SELECT m.id, t.id FROM monsters m INNER JOIN (SELECT id FROM monster_attack_tags t WHERE t.name IN ('Near', 'Far')) t ON 1=1 WHERE m.name IN ('Gnoll Tracker')
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
;
