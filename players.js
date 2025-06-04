const players = [
    {
        name:'James(Logan) Howlet',
        alias:'The Wolverine',
        power:'Superhumman healing and senses, metal claws/bones',
        team:'X-men',
        photo:'imgs/wolverine.jpg',
        fact:'first appearance was in The Incredible Hulk #180 (1974) but he became iconic with the X-Men'
        
    },
    {
        name:'Steve Rogers',
        alias:'Captain America',
        power:'super strength, super stamina, Great leadership and determination',
        team:'Avengers',
        photo:'imgs/cap.jpg',
        fact:'He was created in 1941, famously punching Hitler on the cover of his debut comic.'
    },
    {
        name:'Ben Grimm',
        alias:'The Thing',
        power:'super strength, rock skin',
        team:'Fantastic Four',
        photo:'imgs/the thing.jpg',
        fact:'“It’s clobberin’ time!'
    },
    {
        name:'Scott Summers',
        alias:'Cyclops',
        power:'Concusive force optic beam',
        team:'X-men',
        photo:'imgs/cyclops.jpg',
        fact:'His optic blasts are powered by solar energy absorbed and stored in his body.'
    },
    {
        name:'Johnny Storm',
        alias:'Human Torch',
        power:'FLAME ON!',
        team:'Fantastic Four',
        photo:'imgs/torch.jpg',
        fact:'Johnny Storm is the second Marvel character with this name; the first was an android from the 1930s.'


    },
    {
        name:'Kurt Wagner',
        alias:'Night Crawler',
        power:'Teleportation, swordplay skills',
        team:'X-men',
        photo:'imgs/kurt.jpg',
        fact:' His teleportation involves briefly traveling through another dimension.'
    },
    {
        name:'Reed Richards',
        alias:'Mr.Fantastic',
        power:'Stretchy',
        team:'Fantastic Four',
        photo:'imgs/FN.jpg',
        fact:'Fantastic FN'
    },
    {
        name:'Bruce Banner',
        alias:'The Hulk',
        power:'Super Strength, Super healing, Super Angry',
        team:'Avengers',
        photo:'imgs/hulk.jpg',
        fact:' Originally, Hulk was gray, but printing issues led to his iconic green color'
    },
    {
        name:'Sue Storm/Richards',
        alias:'Invisible Woman',
        power:'Invisibility, Force Fields',
        team:'Fantastic Four',
        photo:'imgs/invis.jpg',
        fact:'If shes invisible why can she get hurt?'
    },
    {
        name:'Mathew Murdock',
        alias:'Daredevil',
        power:'Enhanced senses(Not Sight)',
        team:'Defenders',
        photo:'imgs/DD.jpg',
        fact:'His heightened senses allow him to “see” through a radar-like sense, compensating for his blindness.'
    },
    {
        name:'Tony Stark',
        alias:'Iron Man',
        power:'Rich',
        team:'Avengers',
        photo:'imgs/Irron man.jpg',
        fact:'Tony Stark’s character was inspired by real-life inventor and businessman Howard Hughes.'
    },
    {
        name:'Piotr Nikolaievitch Rasputin',
        alias:'Colosus',
        power:'turn skin into metal, super strength, Vodka',
        team:'X-men',
        photo:'imgs/colosus.jpg',
        fact:'He can transform his body into organic steel, granting him immense strength and durability.'
    },
    {
        name:'Luke Cage',
        alias:'Power Man',
        power:'Invulnerability, super strength',
        team:'Defenders',
        photo:'imgs/cage.jpg',
        fact:': He was the first Black superhero to headline his own comic book series in 1972.'


    },
    {
    name:'Peter Quill',
    alias:'Star Lord (Who?)',
    power:'Funny, Guns',
    team:'Guardians of the Galaxy',
    photo:'imgs/star lord.jpg',
    fact:'Peter Quill’s mixtape in the Guardians of the Galaxy films sparked renewed interest in 70s pop music'
    },
    {
        name:'Thor Odinson',
        alias:'Thor',
        power:'God of Thunder',
        team:'Avengers',
        photo:'imgs/thor.jpg',
        fact:'Thor reveals that he loves hotdogs and beer'
    },
    {
        name:'Ororo Munroe',
        alias:'Storm',
        power:'Contorls weather',
        team:'X-men',
        photo:'imgs/storm.jpg',
        fact:' She was the first major Black female superhero in comics, debuting in 1975'
    },
    {
        name:'stephen strange',
        alias:'Doctor Strange',
        power:'sorcerer supreme, Master of the Mystical Arts',
        team:'Defenders',
        photo:'imgs/strange.jpg',
        fact:'His Sanctum Sanctorum is located at 177A Bleecker Street in New York City.'
    },
    {
        name:'Hank pym',
        alias:'Giant-Man/Ant-Man',
        power:'size changing',
        team:'Avengers',
        photo:'imgs/ant.jpg',
        fact:'Can shrink to ant-size or grow to giant-size, yet still cant find a comfortable pair of pants.'
    },
    {
        name:'Arthur Sampson Douglas',
        alias:'Drax The Destroyer',
        power:'super strength,flight',
        team:'Guardians of the Galaxy',
        photo:'imgs/drax.jpg',
        fact:'Drax takes everything literally. Sarcasm goes over his head—though hed argue nothing goes over his head, since his reflexes are too fast.'
    },
    {
        name:'Frank castle',
        alias:'The Puniher',
        power:'advanced weaponry skills',
        team:'Defenders',
        photo:'imgs/punisher.jpg',
        fact:'Frank Castles skull emblem has become a symbol of vigilante justice.'
    },
    {
        name:'Remy Lebeau',
        alias:'The Gambit',
        power:'manipulate and store energy within objects',
        team:'X-men',
        photo:'imgs/gambit.jpg',
        fact:'He can charge objects with kinetic energy, causing them to explode; his weapon of choice is a deck of cards.'
    },
    {
        name:'Groot',
        alias:'Groot',
        power:'I AM GROOOOOT',
        team:'I AM GROOT',
        photo:'imgs/groot.jpg',
        fact:'I AM GROOT'
    },
    {
        name:'Rocket',
        alias:'Rocket Racoon',
        power:'exoskeleton, weapons',
        team:'Guardians of the Galaxy',
        photo:'imgs/rocket.jpg',
        fact:'He isnt a racoon'
    },
    {
        name:'Danny Rand',
        alias:'Iorn-Fist',
        power:'Martial Arts Master, Energy Attacks',
        team:'Defenders',
        photo:'imgs/iorn fist.jpg',
        fact:'Danny Rand gained his powers by defeating the dragon Shou-Lao the Undying.'
    },
    {
        name:'Peter Parker',
        alias:'Spider-Man',
        power:'Everything a Spider can',
        team:'Avengers',
        photo:'imgs/spidey.jpg',
        fact:'Peter Parker was the first teenage superhero who wasnt a sidekick.'
    },
    {
        name:'Bobby Drake',
        alias:'Iceman',
        power:'creation of ice, ice skin',
        team:'X-men',
        photo:'imgs/iceman.jpg',
        fact:'He is one of the original five X-Men who can make temp around him way below sub zero'
    },
    {
        name:'Johnny Blaze',
        alias:'Ghost Rider',
        power:'Spirit of Vengence',
        team:'Defenders',
        photo:'imgs/ghost.jpg',
        fact:'His motorcycle can ride up vertical surfaces and across water.'
    },
    {
        name:'Gamora Zen Whoberi Ben Titan',
        alias:'Gamora',
        power:'sword',
        team:'Guardians of the Galaxy',
        photo:'imgs/gamora.jpg',
        fact:'Known as the "deadliest woman in the galaxy," she was raised by Thanos.'


    },
    {
        name:'Warren Kenneth Worthington III',
        alias:'Angel',
        power:'Pidgeon wings',
        team:'X-men',
        photo:'imgs/angel.jpg',
        fact:'who cares'
    },
    {
        name:'Tchala',
        alias:'Black Panther',
        power:'Panther Powers',
        team:'Avengers',
        photo:'imgs/panther.jpg',
        fact:'TREMBLE BEFORE BATHS'
    },
    {
        name:'Hank Mcoy',
        alias:'The Beast',
        power:'Blue,Fuzzy,Acrobatic,Stength',
        team:'X-men',
        photo:'imgs/beast.jpg',
        fact:'Big Hairy Blue Genius'
    },
    {
        name:'Cosmo',
        alias:'Cosmo',
        power:'Space Dog, Telepathic',
        team:'Guardians of the Galaxy',
        photo:'imgs/cosmo.jpg',
        fact:'A telepathic Soviet space dog who serves as the security chief of his own planet'
    },
    {
        name:'Marc Spector, Steven Grant, Jake Lockley',
        alias:'Moonknight',
        power:'Skitzo, Avatar of the moon god Knoshu',
        team:'Defenders',
        photo:'imgs/MOOON.jpg',
        fact:'THE MOOOOOOONNN'
    },
    {
        name:'Namor McKenzie',
        alias:'Namor the Submariner',
        power:'King of Atlantis',
        team:'Defenders',
        photo:'imgs/namor.jpg',
        fact:' He is considered Marvels first mutant, debuting in 1939.'
    },
    {
        name:'Robert "Bob" Reynolds',
        alias:'Sentry',
        power:'strength, flight, also skitzo',
        team:'Avengers',
        photo:'imgs/sentrey.jpg',
        fact:'Possesses the power of a million exploding suns but struggles with a dark alter ego, the Void.'
    },
    {
        name:'Elizabeth “Betsy” Braddock',
        alias:'Psylocke',
        power:'psionic energy',
        team:'X-men',
        photo:'imgs/psy.jpg',
        fact:' Originally a British woman named Betsy Braddock, her mind was transferred into the body of a Japanese ninja.'
    },
    {
        name:'Anna Marie LeBeau',
        alias:'Rogue',
        power:'absorb memories, powers, personality traits, physical talents, and strength',
        team:'X-men',
        photo:'imgs/rouge.jpg',
        fact:'Look but dont touch'
    },
    {
        name:'Vision',
        alias:'Vision',
        power:'flight, strength, laser, transparency',
        team:'Avengers',
        photo:'imgs/vision.jpg',
        fact:'An android created by Ultron but turned good'
    },
    {
        name:'Norrin Radd',
        alias:'Silver Surfer',
        power:'wields the Power Cosmic',
        team:'Defenders',
        photo:'imgs/silver.jpg',
        fact:'Formerly Norrin Radd of Zenn-La, he became Galactuss herald to save his planet.'


    },
    {
        name:'Jean Grey',
        alias:'Marvel girl/Phoenix',
        power:' powerful telekinetic and telepathic abilities',
        team:'X-men',
        photo:'imgs/jean.jpg',
        fact:'Jean Greys transformation into the Phoenix represents one of the most powerful entities in the Marvel Universe.'
    },
    {
        name:'Clint Bartin',
        alias:'Hawkeye',
        power:'Master Marksemen',
        team:'Avengers',
        photo:'imgs/hawk.jpg',
        fact:'also later became the ronin in marvel'
    },
    {
        name:'Eric Cross Brooks',
        alias:'Blade',
        power:'Daywalking Vampire',
        team:'Defenders',
        photo:'imgs/blade.jpg',
        fact:'A half-vampire, Blade has all their strengths but none of their weaknesses.'
    },
    {
        name:'Pietro Django Maximoff',
        alias:'Quicksilver',
        power:'Super Speed',
        team:'Avengers',
        photo:'imgs/quick.jpg',
        fact:'Cant dodge a bullet'
    },
    {
        name:'Erik Magnus Lehnsherr',
        alias:'Magneto',
        power:'control metal',
        team:'X-men',
        photo:'imgs/magneto.jpg',
        fact:'A Holocaust survivor, his experiences shaped his militant advocacy for mutant rights.'
    },
    {
        name:'Cain Marko',
        alias:'juggernaut',
        power:'unstoppable',
        team:'X-men',
        photo:'imgs/jugg.jpg',
        fact:'Once in motion, he is virtually unstoppable due to mystical energies.'


    },
    {
        name:' John Aaron',
        alias:'Ares',
        power:'God of War',
        team:'Avengers',
        photo:'imgs/ares.jpg',
        fact:'The Greek god of war, he has been both an adversary and ally to various heroes.'
    },
    {
        name:'Morgan Michaels',
        alias:'Morbious',
        power:'The living vampire',
        team:'Avengers',
        photo:'imgs/morbious.jpg',
        fact:'A biochemist who transformed into a living vampire while attempting to cure his rare blood disease.'
    },
    {
        name:'Simon Williams',
        alias:'Wonder Man',
        power:'Strength, flight, energy projection',
        team:'Avengers',
        photo:'imgs/wonderman.jpg',
        fact:'Simon Williams is an actor-turned-superhero with ionic energy-based powers.'
    },
    {
        name:'Yondu Udonta',
        alias:'Yondu',
        power:'Magic Arrow Controlled by Whistles',
        team:'Guardians of the Galaxy',
        photo:'imgs/yondu.jpg',
        fact:' In the comics, he is a spiritual warrior from Centauri-IV, differing from his cinematic portrayal.'
    },
    {
        name:'Adam Warlock',
        alias:'Adam Warlock',
        power:'The perfect being',
        team:'Guardians of the Galaxy',
        photo:'imgs/warlock.jpg',
        fact:'He was created to be the perfect human and has a deep connection to the Soul Gem.'
    },
    {
        name:'Pom Klementieff',
        alias:'Mantis',
        power:'Empath, Able to Sense and Manipulate Emotions',
        team:'Guardians of the Galaxy',
        photo:'imgs/mantis.jpg',
        fact:'MANTIS WATCH OUT'
    },
    {
        name:'Nebula',
        alias:'Nebula',
        power:'Cyborg',
        team:'Guardians of the Galaxy',
        photo:'imgs/neb.jpg',
        fact:' Claims to be Thanoss granddaughter'
    },
    {
        name:'Hercules',
        alias:'Hercules',
        power:'Demigod',
        team:'Guardians of the Galaxy',
        photo:'imgs/herc.jpg',
        fact:'Based on the Greek demigod, he is known for his strength and heroism.'
    },
    {
        name:'Katherine "Kitty" Pryde',
        alias:'Shadowkat',
        power:'ability to pass through solid matter',
        team:'X-men',
        photo:'imgs/kitty.jpg',
        fact:'has a pet dragon names lockheed'
    },
    {
        name:'Charles Xavier',
        alias:'Profesor X',
        power:'Telepath',
        team:'X-men',
        photo:'imgs/prof.jpg',
        fact:'greatest enemies: stairs'
    },
    {
        name:'Nathan Summers',
        alias:'Cable',
        power:'telepathic and telekinetic + Guns',
        team:'X-men',
        photo:'imgs/cable.jpg',
        fact:'cyclops son'
    },
    {
        name:'Wade Wilson',
        alias:'DeadPool',
        power:'Intense healing abilities, fighting capabilities, insane',
        team:'X-men',
        photo:'imgs/deadpool.jpg',
        fact:'one of the only characters to break the forth wall in comics'
    },
    {
        name:'Shiro Yoshida',
        alias:'Sunfire',
        power:'Fire',
        team:'X-men',
        photo:'imgs/sunfire.jpg',
        fact:'A Japanese mutant who can generate superheated plasma.'
    },
    {
        name:'Jennifer Walters',
        alias:'She-Hulk',
        power:'everyone hulk does but girly',
        team:'Defenders',
        photo:'imgs/she.jpg',
        fact:'Jennifer Walters gained her powers after receiving a blood transfusion from her cousin, Bruce Banner.'
    },
    {
        name:'Wanda Maximoff',
        alias:'The Scarlet Witch',
        power:' telekinesis, which allows her to manipulate objects and even matter at the molecular level',
        team:'X-Men',
        photo:'imgs/wanda.jpg',
        fact:'daughter of Magneto sister of quicksilver'
    },
    {
        name:'Elektra Natchios',
        alias:'Elektra',
        power:'sai',
        team:'Defenders',
        photo:'imgs/elektra.jpg',
        fact:'A skilled assassin and occasional ally of Daredevil.'
    },
    {
        name:'En Sabah Nur',
        alias:'Apocalypse',
        power:'Immortality, Teleportation, Telekinesis, Energy Projection, Power absorption, Energy manipulation, Technopathy',
        team:'X-men',
        photo:'imgs/app.jpg',
        fact:'One of the first mutants, he believes in survival of the fittest.'
    },
    {
        name:'Dane Whitman',
        alias:'Black Knight',
        power:'enhanced strength, speed, agility, and reflexes, along with expert swordsmanship',
        team:'Avengers',
        photo:'imgs/black.jpg',
        fact:'Wields the Ebony Blade, a mystical sword passed down through his family.'
    },
    {
        name:'Samuel Zachary "Sam" Guthrie',
        alias:'Cannon Ball',
        power:'bodily generate thermo-chemical energy and release it from his skin',
        team:'X-men',
        photo:'imgs/ball.jpg',
        fact:'Sam Guthrie can propel himself through the air like a human rocket.'
    },
    {
        name:'Tyrone "Ty" Johnson',
        alias:'Cloak',
        power:'channel Darkforce, teleport, and become intangible',
        team:'Defenders',
        photo:'imgs/ty.jpg',
        fact:'Can engulf others in darkness and teleport them through the Darkforce Dimension.'
    },
    {
        name:'Tandy Bowen',
        alias:'Dagger',
        power:'manipulation of light, creating healing blades, and psionic energy',
        team:'Defenders',
        photo:'imgs/dagger.jpg',
        fact:'connected to cloak in a way'
    },
    {
        name:'Illyana Rasputin',
        alias:'Magik',
        power:'powerful sorceress and mutant able to teleport across time and space',
        team:'X-men',
        photo:'imgs/magik.jpg',
        fact:'Illyana Rasputin, sister of Colossus'
    },
    {
        name:'Glob Herman',
        alias:'Glob',
        power:'enhanced durability, resistance to injury, and the ability to regenerate his body if damaged',
        team:'X-men',
        photo:'imgs/glob.jpg',
        fact:' basically a walking jelly blob who can absorb impacts like a sponge.'
    },
    {
        name:'Carol Danvers',
        alias:'Captain Marvel',
        power:'cosmic energy manipulation, flight, superhuman strength, speed, agility, and durability',
        team:'Avengers',
        photo:'imgs/captain marvel.jpg',
        fact:'She’s basically a cosmic powerhouse who also rocks a killer hairstyle.'
    },
    {
        name:'Hector Ayala',
        alias:'White Tiger',
        power:'superhuman strength, speed, endurance, agility, and the ability to heal wounds',
        team:'Defenders',
        photo:'imgs/tiger.jpg',
        fact:'Multiple people have taken the White Tiger mantle; they get their powers from mystical amulets granting enhanced strength and agility.'
    },
    {
        name:'Ego',
        alias:'Ego The Living Planet',
        power:'nigh-immortality, molecular manipulation, and the ability to create planets',
        team:'Guardians of the Galaxy',
        photo:'imgs/ego.jpg',
        fact:''
    },
    {
        name:'Goose',
        alias:'Goose the Cat',
        power:'shoot large tentacles from its mouth',
        team:'Guardians of the Galaxy',
        photo:'imgs/goose.jpg',
        fact:''
    },
    {
        name:'Jarhead',
        alias:'Jarhead',
        power:'Jar with a brain in it',
        team:'Guardians of the Galaxy',
        photo:'imgs/jarhead.jpg',
        fact:''
    },
    {
        name:'1Sam Wilson',
        alias:'Falcon',
        power:'Winged Jetpack',
        team:'Avengers',
        photo:'imgs/falcon.jpg',
        fact:''
    },
    {
        name:'General Thaddeus E. Ross',
        alias:'Red Hulk',
        power:'Stronger, Redder, Angrier',
        team:'Avengers',
        photo:'imgs/red.jpg',
        fact:''
    },
    {
        name:'Erik Stephan Josten',
        alias:'Atlas',
        power:'size changing',
        team:'Avengers',
        photo:'imgs/atlas.jpg',
        fact:''
    },
    {
        name:'Sean Cassidy',
        alias:'Banshee',
        power:'sonic screams',
        team:'X-men',
        photo:'imgs/banshee.jpg',
        fact:''
    },
    {
        name:'Barnell Bohusk',
        alias:'Beak',
        power:'human vulture',
        team:'X-men',
        photo:'imgs/beak.jpg',
        fact:''
    },
    {
        name:'Doop',
        alias:'Doop',
        power:'Flight Accelerated healing factor Superhuman strength ',
        team:'X-men',
        photo:'imgs/doop.jpg',
        fact:''
    },
    {
        name:'Jamie Madrox',
        alias:'The Multiple Man',
        power:'Duplication',
        team:'X-men',
        photo:'imgs/madrox.jpg',
        fact:''
    },
    {
        name:'Xabi',
        alias:'ForgetMeNot',
        power:'if you are not in his vision you dont know who he is',
        team:'X-men',
        photo:'imgs/forget.jpg',
        fact:''
    },
    {
        name:'Bucky Barnes',
        alias:'Winter Soilder',
        power:'Metal Arm',
        team:'Avengers',
        photo:'imgs/winter.jpg',
        fact:''
    },
    {
        name:'Ka-Zar',
        alias:'Ka-Zar',
        power:'exceptional physical prowess and survival skills',
        team:'Avengers',
        photo:'imgs/kazar.jpg',
        fact:''
    },
    {
        name:'Doreen Allene Green',
        alias:'Squirrel Girl',
        power:'Undefeatable,tail',
        team:'Avengers',
        photo:'imgs/sq.jpg',
        fact:''
    },
    {
        name:'Dennis Dunphy',
        alias:'Demolition Man',
        power:'Wreslter?',
        team:'Avengers',
        photo:'imgs/dman.jpg',
        fact:''
    },
    {
        name:'Kyle Richmond',
        alias:'Nighthawk',
        power:'night vision, sharp claws, jet-powered flight, lasers, and defensive capabilities',
        team:'Defenders',
        photo:'imgs/night.jpg',
        fact:''
    },
    {
        name:'Richard Rider)',
        alias:'Nova',
        power:'Superhuman strength, speed, stamina, accuracy, agility, reflexes, and durability',
        team:'Defenders',
        photo:'imgs/nova.jpg',
        fact:''
    },
    {
        name:'Eugene "Flash" Thompso',
        alias:'Agent Venom',
        power:'Venom Symbiote',
        team:'Guardians of the Galaxy',
        photo:'imgs/venom.jpg',
        fact:''
    },
    {
        name:'Daniel Lone Eagle',
        alias:'Forge',
        power:'can build anything he thinks of',
        team:'X-men',
        photo:'imgs/forge.jpg',
        fact:''
    },
    {
        name:'Humanoid Experimental Robot B-Type Integrated Electronics',
        alias:'H.E.R.B.I.E.',
        power:'robot',
        team:'Fantastic Four',
        photo:'imgs/herbie.jpg',
        fact:''
    },
    {
        name:'Sarah Rushman',
        alias:'Marrow',
        power:'grow and retract bones from her ody',
        team:'X-men',
        photo:'imgs/marrow.jpg',
        fact:''
    },
    {
        name:'Natasha Romanoff',
        alias:'Black Widow',
        power:'Spy, combat abilities',
        team:'Avengers',
        photo:'imgs/blackwidow.jpg',
        fact:''
    },
    {
        name:'Christopher Powell',
        alias:'DarkHawk',
        power:'Superhuman strength, Retractable glider wings, Force blasts and force fields,',
        team:'Avengers',
        photo:'imgs/darkhawk.jpg',
        fact:''
    },
    {
        name:'Armondo Munoz',
        alias:'Darwin',
        power:'body thats able to adapt to anything',
        team:'X-men',
        photo:'imgs/darwin.jpg',
        fact:''
    },
    {
        name:'Devl Dinosaur',
        alias:'Devl Dinosaur',
        power:'T-Rex Demon',
        team:'Avengers',
        photo:'imgs/devil dino.jpg',
        fact:''
    },
    {
        name:'Fabio Medina',
        alias:'Egg',
        power:'ability to produce limetless golden eggs',
        team:'X-men',
        photo:'imgs/egg.jpg',
        fact:''
    }
 





]