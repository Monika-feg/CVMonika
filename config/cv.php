<?php

return [
    'hero' => [
        'greeting' => 'Hej! jag är Monika Engström',
    ],

    'profile' => [
        'name' => 'Monika Engström',
        'title' => 'Javautvecklarstudent med examen 31 maj 2026',
        'location' => 'Tidaholm, Sverige',
        'summary' => 'Jag trivs i projekt där jag får kombinera struktur, problemlösning och användarfokus. Just nu vill jag fortsätta utvecklas inom både backend och frontend och bygga lösningar som känns tydliga, genomtänkta och användbara.',
        'intro' => 'Disciplinerad envishet genomsyrarar mitt arbetssätt, och jag ser motgångar och uppkommna problem som hinder som tids nog kommer överkommas. Jag oroar mig inte för att göra fel och ser eventuella svårigheter som möjligheter till att hitta och pröva nya kreativa lösningar.  ',
    ],

    'education' => [
        [
            'title' => 'Javautveckling Campus Värnamo',
            'period' => '2024 - 2026',
            'details' => '2-årig utbildning till Javautvecklare.',
        ],
        [
            'title' => 'Kriminalvårdsutbildningen',
            'period' => '2013',
            'details' => 'Yrkesutbildning till kriminalvårdare, 20 veckor.',
        ],
    ],

    'experience' => [
        [
            'title' => 'LIA 2',
            'period' => '2026-02-16 - 2026-05-31',
            'details' => [
                'Arbetar i ett internt projekt som en del av min pågående LIA-period.',
                'Får praktisk erfarenhet av PHP och Laravel och utvecklar min förståelse för hur ramverket används i ett verkligt projekt.',
            ],
        ],
        [
            'title' => 'LIA 1',
            'period' => '2025-11-03 - 2026-01-11',
            'details' => [
                'Arbetade med att gå igenom och dokumentera befintlig kod, vilket gav mig praktisk erfarenhet av att sätta mig in i andras lösningar.',
                'Utvecklade min förmåga att kodgranska och förstå struktur, logik och flöden i kod, även när jag inte förstod varje detalj direkt.',
            ],
        ],
        [
            'title' => 'Dometic AB - Operatör',
            'period' => '2017 -',
            'details' => [
                'Godkänd mäster vid formningsstationerna, formar akrylfönsterrutor till husvagnar och husbilar med fokus på hög kvalitet och leveransprecision.',
                'Utvecklat god problemlösningsförmåga genom att snabbt identifiera och lösa problem i det dagliga arbetet, alltid med stor noggrannhet.',
            ],
        ],
        [
            'title' => 'Kriminalvården - Kriminalvårdare',
            'period' => '2011 - 2016',
            'details' => [
                'Genomförde bevakning och dynamisk säkerhet samt hanterade konflikter och krissituationer i nära samarbete med kollegor, vilket bidrog till tryggare arbetsmiljö.',
                'Utvecklat kompetens inom konflikthantering, krishantering, samarbete och kommunikation.',
            ],
        ],
    ],

    'repositories' => [
        [
            'name' => 'IMAGE-RESIZER',
            'description' => 'Ett eget desktopprojekt byggt i Electron för lokal bildhantering. Jag utvecklade flödet för att välja bild, läsa in originalmått automatiskt, ange ny storlek, spara resultatet i en output-mapp och öppna mappen direkt i appen. Lösningen hanterar även status- och felmeddelanden och stödjer PNG, JPG, JPEG och GIF.',
            'extraLanguages' => ['Electron', 'Node.js', 'resize-img', 'Toastify'],
            'url' => 'https://github.com/Monika-feg/IMAGE-RESIZER',
        ],
        [
            'name' => 'KawaiiCanvasApi',
            'description' => 'Ett eget backendprojekt för en webbshop, byggt med Spring Boot och MongoDB Atlas. Jag utvecklade API:et för produkter, kundvagn och ordrar samt funktioner för realtidsuppdatering via WebSocket, betalningsflöde med Stripe, autentisering och säkerhet med Spring Security och en enklare kundtjänstkoppling med OpenAI. Projektet är kopplat till mitt frontendrepo KawaiiCanvasClient.',
            'extraLanguages' => ['Java 21', 'Spring Boot 3.5', 'MongoDB Atlas', 'Maven', 'Docker', 'Stripe', 'OpenAI', 'WebSocket'],
            'url' => 'https://github.com/Monika-feg/KawaiiCanvasApi',
        ],
        [
            'name' => 'KawaiiCanvasClient',
            'description' => 'Ett eget frontendprojekt till KawaiiCanvas, dar jag byggde gränssnittet för en kawaii-inspirerad webbshop för tavlor. Jag utvecklade funktioner för produktvisning med bilder, pris och lagerstatus, realtidsuppdateringar via WebSocket, varningar vid lågt lager, varukorg och beställning, Stripe-betalning samt en chatbot med egen personlighet. Projektet ar kopplat till mitt backendrepo KawaiiCanvasApi.',
            'extraLanguages' => ['React', 'TypeScript', 'Vite', 'Bootstrap', 'Material UI', 'WebSocket', 'Stripe'],
            'url' => 'https://github.com/Monika-feg/KawaiiCanvasClient',
        ],

    ],

    'skills' => [
        'Java',
        'Spring Boot',
        'React',
        'JavaScript',
        'TypeScript',
        'SQL',
        'Git',
        'Agila arbetssätt',
        'Angular',
        'MongoDB',
        'Docker',

    ],

    'strengths' => [
        'Problemlösning',
        'Teamarbete',
        'Kodläsning',
        'Strukturerat arbetssätt',
    ],

    'languages' => [
        'Svenska - flytande i tal och skrift',
        'Engelska - goda kunskaper i tal och skrift',
    ],

    'links' => [
        [
            'label' => 'E-post',
            'value' => 'monika.engstrom.88@gmail.com',
            'href' => 'mailto:monika.engstrom.88@gmail.com',
        ],
        [
            'label' => 'Telefon',
            'value' => '0722255705',
        ],
        [
            'label' => 'GitHub',
            'value' => 'github.com/Monika-feg',
            'href' => 'https://github.com/Monika-feg',
        ],
        [
            'label' => 'LinkedIn',
            'value' => 'linkedin.com/in/monika-engstrom-81a872131',
            'href' => 'https://www.linkedin.com/in/monika-engstrom-81a872131/',
        ],
    ],
];
