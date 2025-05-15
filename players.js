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
        power:'Super Strength, Super healing, Very Angry',
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


]