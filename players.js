const players = [
    {
        name:'James(Logan) Howlet',
        alias:'The Wolverine',
        power:'Superhumman healing and senses, metal claws/bones',
        team:'X-men',
        photo:'imgs/wolverine.jpg'
    },
    {
        name:'Steve Rogers',
        alias:'Captain America',
        power:'super strength, super stamina, Great leadership and determination',
        team:'Avengers',
        photo:'imgs/cap.jpg'
    },
    {
        name:'Ben Grimm',
        alias:'The Thing',
        power:'super strength, rock skin',
        team:'Fantastic Four',
        photo:'imgs/the thing.jpg'
    },
    {
        name:'Scott Summers',
        alias:'Cyclops',
        power:'Concusive force optic beam',
        team:'X-men',
        photo:'imgs/cyclops.jpg'
    },
    {
        name:'Johnny Storm',
        alias:'Human Torch',
        power:'FLAME ON!',
        team:'Fantastic Four',
        photo:'imgs/torch.jpg'
    },
    {
        name:'Kurt Wagner',
        alias:'Night Crawler',
        power:'Teleportation, swordplay skills',
        team:'X-men',
        photo:'imgs/kurt.jpg'
    },
    {
        name:'Reed Richards',
        alias:'Mr.Fantastic',
        power:'Stretchy',
        team:'Fantastic Four',
        photo:'imgs/FN.jpg'
    },
    {
        name:'Bruce Banner',
        alias:'The Hulk',
        power:'Super Strength, Super healing, Super Angry',
        team:'Avengers',
        photo:'imgs/hulk.jpg'
    },
    {
        name:'Sue Storm/Richards',
        alias:'Invisible Woman',
        power:'Invisibility, Force Fields',
        team:'Fantastic Four',
        photo:'imgs/invis.jpg'
    },
    {
        name:'Mathew Murdock',
        alias:'Daredevil',
        power:'Enhanced senses(Not Sight)',
        team:'Defenders',
        photo:'imgs/DD.jpg'
    },
    {
        name:'Tony Stark',
        alias:'Iron Man',
        power:'Rich',
        team:'Avengers',
        photo:'imgs/Irron man.jpg'
    },
    {
        name:'Piotr Nikolaievitch Rasputin',
        alias:'Colosus',
        power:'turn skin into metal, super strength, Vodka',
        team:'X-men',
        photo:'imgs/colosus.jpg'
    },
    {
        name:'Luke Cage',
        alias:'Power Man',
        power:'Invulnerability, super strength',
        team:'Defenders',
        photo:'imgs/cage.jpg'
    },
    {
    name:'Peter Quill',
    alias:'Star Lord (Who?)',
    power:'Funny, Guns',
    team:'Guardians of the Galaxy',
    photo:'imgs/star lord.jpg'
    },
    {
        name:'Thor Odinson',
        alias:'Thor',
        power:'God of Thunder',
        team:'Avengers',
        photo:'imgs/thor.jpg'
    },
    {
        name:'Ororo Munroe',
        alias:'Storm',
        power:'Contorls weather',
        team:'X-men',
        photo:'imgs/storm.jpg'
    },
    {
        name:'stephen strange',
        alias:'Doctor Strange',
        power:'sorcerer supreme, Master of the Mystical Arts',
        team:'Defenders',
        photo:'imgs/strange.jpg'
    },
    {
        name:'Hank pym',
        alias:'Giant-Man/Ant-Man',
        power:'size changing',
        team:'Avengers',
        photo:'imgs/ant.jpg'
    },
    {
        name:'Arthur Sampson Douglas',
        alias:'Drax The Destroyer',
        power:'super strength,flight',
        team:'Guardians of the Galaxy',
        photo:'imgs/drax.jpg'
    },
    {
        name:'Frank castle',
        alias:'The Puniher',
        power:'advanced weaponry skills',
        team:'Defenders',
        photo:'imgs/punisher.jpg'
    },
    {
        name:'Remy Lebeau',
        alias:'The Gambit',
        power:'manipulate and store energy within objects',
        team:'X-men',
        photo:'imgs/gambit.jpg'
    },
    {
        name:'Groot',
        alias:'Groot',
        power:'I AM GROOOOOT',
        team:'Guardians of the Galaxy',
        photo:'imgs/groot.jpg'
    },
    {
        name:'Rocket',
        alias:'Rocket Racoon',
        power:'exoskeleton, weapons',
        team:'Guardians of the Galaxy',
        photo:'imgs/rocket.jpg'
    },
    {
        name:'Danny Rand',
        alias:'Iorn-Fist',
        power:'Martial Arts Master, Energy Attacks',
        team:'Defenders',
        photo:'imgs/iorn fist.jpg'
    },
    {
        name:'Peter Parker',
        alias:'Spider-Man',
        power:'Everything a Spider can',
        team:'Avengers',
        photo:'imgs/spidey.jpg'
    },
    {
        name:'Bobby Drake',
        alias:'Iceman',
        power:'creation of ice, ice skin',
        team:'X-men',
        photo:'imgs/iceman.jpg'
    },
    {
        name:'Johnny Blaze',
        alias:'Ghost Rider',
        power:'Spirit of Vengence',
        team:'Defenders',
        photo:'imgs/ghost.jpg'
    },
    {
        name:'Gamora Zen Whoberi Ben Titan',
        alias:'Gamora',
        power:'sword',
        team:'Guardians of the Galaxy',
        photo:'imgs/gamora.jpg'
    },
    {
        name:'Warren Kenneth Worthington III',
        alias:'Angel',
        power:'Pidgeon wings',
        team:'X-men',
        photo:'imgs/angel.jpg'
    },
    {
        name:'Tchala',
        alias:'Black Panther',
        power:'Panther Powers',
        team:'Avengers',
        photo:'imgs/panther.jpg'
    },
    {
        name:'Hank Mcoy',
        alias:'The Beast',
        power:'Blue,Fuzzy,Acrobatic,Stength',
        team:'X-men',
        photo:'imgs/beast.jpg'
    },
    {
        name:'Cosmo',
        alias:'Cosmo',
        power:'Space Dog, Telepathic',
        team:'Guardians of the Galaxy',
        photo:'imgs/cosmo.jpg'
    },
    {
        name:'Marc Spector, Steven Grant, Jake Lockley',
        alias:'Moonknight',
        power:'Skitzo, Avatar of the moon god Knoshu',
        team:'Defenders',
        photo:'imgs/MOOON.jpg'
    },
    {
        name:'Namor McKenzie',
        alias:'Namor the Submariner',
        power:'King of Atlantis',
        team:'Defenders',
        photo:'imgs/namor.jpg'
    },
    {
        name:'Robert "Bob" Reynolds',
        alias:'Sentry',
        power:'strength, flight, also skitzo',
        team:'Avengers',
        photo:'imgs/sentrey.jpg'
    },
    {
        name:'Elizabeth “Betsy” Braddock',
        alias:'Psylocke',
        power:'psionic energy',
        team:'X-men',
        photo:'imgs/psy.jpg'
    },
    {
        name:'Anna Marie LeBeau',
        alias:'Rogue',
        power:'absorb memories, powers, personality traits, physical talents, and strength',
        team:'X-men',
        photo:'imgs/rouge.jpg'
    },
    {
        name:'Vision',
        alias:'Vision',
        power:'flight, strength, laser, transparency',
        team:'Avengers',
        photo:'imgs/vision.jpg'
    },
    {
        name:'Norrin Radd',
        alias:'Silver Surfer',
        power:'wields the Power Cosmic',
        team:'Defenders',
        photo:'imgs/silver.jpg'
    },
    {
        name:'Jean Grey',
        alias:'Marvel girl,Phoenix',
        power:' powerful telekinetic and telepathic abilities',
        team:'X-men',
        photo:'imgs/jean.jpg'
    },
    {
        name:'Clint Bartin',
        alias:'Hawkeye',
        power:'Master Marksemen',
        team:'Avengers',
        photo:'imgs/hawk.jpg'
    },
    {
        name:'Eric Cross Brooks',
        alias:'Blade',
        power:'Daywalking Vampire',
        team:'Defenders',
        photo:'imgs/blade.jpg'
    },
    {
        name:'Pietro Django Maximoff',
        alias:'Quicksilver',
        power:'Super Speed',
        team:'Avengers',
        photo:'imgs/quick.jpg'
    },
    {
        name:'Erik Magnus Lehnsherr',
        alias:'Magneto',
        power:'control metal',
        team:'X-men',
        photo:'imgs/magneto.jpg'
    },
    {
        name:'Cain Marko',
        alias:'juggernaut',
        power:'unstoppable',
        team:'X-men',
        photo:'imgs/jugg.jpg'
    },
    {
        name:' John Aaron',
        alias:'Ares',
        power:'God of War',
        team:'Avengers',
        photo:'imgs/ares.jpg'
    },
    {
        name:'Morgan Michaels',
        alias:'Morbious',
        power:'The living vampire',
        team:'Avengers',
        photo:'imgs/morbious.jpg'
    },
    {
        name:'Simon Williams',
        alias:'Wonder Man',
        power:'Strength, flight, energy projection',
        team:'Avengers',
        photo:'imgs/wonderman.jpg'
    },
    {
        name:'Yondu Udonta',
        alias:'Yondu',
        power:'Magic Arrow Controlled by Whistles',
        team:'Guardians of the Galaxy',
        photo:'imgs/yondu.jpg'
    },
    {
        name:'Adam Warlock',
        alias:'Adam Warlock',
        power:'The perfect being',
        team:'Guardians of the Galaxy',
        photo:'imgs/warlock.jpg'
    },
    {
        name:'Pom Klementieff',
        alias:'Mantis',
        power:'Empath, Able to Sense and Manipulate Emotions',
        team:'Guardians of the Galaxy',
        photo:'imgs/mantis.jpg'
    },
    {
        name:'Nebula',
        alias:'Nebula',
        power:'Cyborg',
        team:'Guardians of the Galaxy',
        photo:'imgs/neb.jpg'
    },
    {
        name:'Hercules',
        alias:'Hercules',
        power:'Demigod',
        team:'Guardians of the Galaxy',
        photo:'imgs/herc.jpg'
    },
    {
        name:'Katherine "Kitty" Pryde',
        alias:'Shadowkat',
        power:'ability to pass through solid matter',
        team:'X-men',
        photo:'imgs/kitty.jpg'
    },
    {
        name:'Charles Xavier',
        alias:'Profesor X',
        power:'Telepath',
        team:'X-men',
        photo:'imgs/prof.jpg'
    },
    {
        name:'Nathan Summers',
        alias:'Cable',
        power:'telepathic and telekinetic + Guns',
        team:'X-men',
        photo:'imgs/cable.jpg'
    },
    {
        name:'Wade Wilson',
        alias:'DeadPool',
        power:'Intense healing abilities, fighting capabilities, insane',
        team:'X-men',
        photo:'imgs/deadpool.jpg'
    },
    {
        name:'Shiro Yoshida',
        alias:'Sunfire',
        power:'Fire',
        team:'X-men',
        photo:'imgs/sunfire.jpg'
    },
    {
        name:'Jennifer Walters',
        alias:'She-Hulk',
        power:'everyone hulk does but girly',
        team:'Defenders',
        photo:'imgs/she.jpg'
    },
    {
        name:'Wanda Maximoff',
        alias:'The Scarlet Witch',
        power:' telekinesis, which allows her to manipulate objects and even matter at the molecular level',
        team:'X-Men',
        photo:'imgs/wanda.jpg'
    },
    {
        name:'Elektra Natchios',
        alias:'Elektra',
        power:'sai',
        team:'Defenders',
        photo:'imgs/elektra.jpg'
    },
    {
        name:'En Sabah Nur',
        alias:'Apocalypse',
        power:'Immortality, Teleportation, Telekinesis, Energy Projection, Power absorption, Energy manipulation, Technopathy',
        team:'X-men',
        photo:'imgs/app.jpg'
    },
    {
        name:'Dane Whitman',
        alias:'Black Knight',
        power:'enhanced strength, speed, agility, and reflexes, along with expert swordsmanship',
        team:'Avengers',
        photo:'imgs/black.jpg'
    },
    {
        name:'Samuel Zachary "Sam" Guthrie',
        alias:'Cannon Ball',
        power:'bodily generate thermo-chemical energy and release it from his skin',
        team:'X-men',
        photo:'imgs/ball.jpg'
    },
    {
        name:'Tyrone "Ty" Johnson',
        alias:'Cloak',
        power:'channel Darkforce, teleport, and become intangible',
        team:'Defenders',
        photo:'imgs/ty.jpg'
    },
    {
        name:'Tandy Bowen',
        alias:'Dagger',
        power:'manipulation of light, creating healing blades, and psionic energy',
        team:'Defenders',
        photo:'imgs/dagger.jpg'
    },
    {
        name:'Illyana Rasputin',
        alias:'Magik',
        power:'powerful sorceress and mutant able to teleport across time and space',
        team:'X-men',
        photo:'imgs/magik.jpg'
    },
    {
        name:'Glob Herman',
        alias:'Glob',
        power:'enhanced durability, resistance to injury, and the ability to regenerate his body if damaged',
        team:'X-men',
        photo:'imgs/glob.jpg'
    },
    {
        name:'Carol Danvers',
        alias:'Captain Marvel',
        power:'cosmic energy manipulation, flight, superhuman strength, speed, agility, and durability',
        team:'Avengers',
        photo:'imgs/captain marvel.jpg'
    },
    {
        name:'Hector Ayala',
        alias:'White Tiger',
        power:'superhuman strength, speed, endurance, agility, and the ability to heal wounds',
        team:'Defenders',
        photo:'imgs/tiger.jpg'
    },
    {
        name:'Ego',
        alias:'Ego The Living Planet',
        power:'nigh-immortality, molecular manipulation, and the ability to create planets',
        team:'Guardians of the Galaxy',
        photo:'imgs/ego.jpg'
    },
    {
        name:'Goose',
        alias:'Goose the Cat',
        power:'shoot large tentacles from its mouth',
        team:'Guardians of the Galaxy',
        photo:'imgs/goose.jpg'
    },
    {
        name:'Jarhead',
        alias:'Jarhead',
        power:'Jar with a brain in it',
        team:'Guardians of the Galaxy',
        photo:'imgs/jarhead.jpg'
    },
    {
        name:'1Sam Wilson',
        alias:'Falcon',
        power:'Winged Jetpack',
        team:'Avengers',
        photo:'imgs/falcon.jpg'
    },
    {
        name:'General Thaddeus E. Ross',
        alias:'Red Hulk',
        power:'Stronger, Redder, Angrier',
        team:'Avengers',
        photo:'imgs/red.jpg'
    },
    {
        name:'Erik Stephan Josten',
        alias:'Atlas',
        power:'size changing',
        team:'Avengers',
        photo:'imgs/atlas.jpg'
    },
    {
        name:'Sean Cassidy',
        alias:'Banshee',
        power:'sonic screams',
        team:'X-men',
        photo:'imgs/banshee.jpg'
    },
    {
        name:'Barnell Bohusk',
        alias:'Beak',
        power:'human vulture',
        team:'X-men',
        photo:'imgs/beak.jpg'
    },
    {
        name:'Doop',
        alias:'Doop',
        power:'Flight Accelerated healing factor Superhuman strength ',
        team:'X-men',
        photo:'imgs/doop.jpg'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    },
    {
        name:'1',
        alias:'2',
        power:'3',
        team:'4',
        photo:'5'
    }
 





]