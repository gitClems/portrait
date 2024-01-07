
export const skills = [
    {
        id: 1,
        title: "Supply Chain Manager",
        description: "L'informatique décisionnelle au coeur de la Chaîne d'approvisonnement, rien de mieux pour se mettre dans la course des grands enjeux de ce monde concurrentiel."
    },
    {
        id: 2,
        title: "Business Analyst",
        description: "L'esprit d'analyse au seins des processus métiers de votre entreprise. Permettre une prise de décision adéquate face aux risques et maîtriser les activités principales de votre structure."
    },

    {
        id: 3,
        title: "Design Thinking",
        description: "Construire vos idées avec une architecture performante et manager votre équipe dans une logique de création de valeur."
    }
]


export const formation = {
    description : "Durant tout mon parcours universitaire, j'ai pu dévélopper un bon nombre de connaissance aussi bien dans les sciences exactes que celles qui relèvent de l'esprit critique.",
    formationns : [
        {
            id : 1,
            periode : "2021-2024",
            label : " Ecole Nationale d'Informatique et d'Analyse des Systhème de Rabat",
            description :"Avec mon orientation en Smart Supply Chain an Logistics, j'ai eu cette connaissance de l'informatique décisionnelle, du Business Intelligence et de la gestion des projets ainsi que leur suivi. L'utilisation des outils informatiques pour l'optimisation des processus au seins de l'entreprise est l'une de mes casquettes. En outre, une partie de mon orientation est la recherche opérationnelle à travers laquelles un accent est mis sur la résolution des problèmes liés à la logistiques: l'ulisation des mathématiques et des nouvelles technologies pour l'optimisation de la chaine logistique ."
        },
        {
            id : 2,
            periode : "2019-2021",
            label : "  Facuilté des Sciences et Techniques de Monhammedia",
            description :"J'ai su dévélopper des connaissance en analyse numérique et statistiques. Ceci combiné à l'algorithmique m'a donné des solides acquis sur la transformation d'un problème réel en solution mathématique et ensuite son intégration grace à des algorithmes."
        },
    ]
}

export const projects = [
    {
        id: 1,
        title: "Tableau de bord de suivi d'activité logistique",
        image: require("../assets/works/ExpGlobale.png"),
        description: "De la conception à la réalisation, nous avons fait avancé ce travail au cours d'un stage de deux mois au sein d'une entreprise à Casablanca.",
        etapes: [
            {
                id: 1,
                etape: "Définition du problème",
                description: "Comprendre et prendre en main les processus logistiques qui interviennent dans les activités de l’entreprise."
            },
            {
                id: 2,
                etape: "Définition des indicateurs de performance (KPIs)",
                description: "Définir les métriques à mesurer et à mesuer car c’est sur base de ces informations que nous allons annalyser la performance des processus."
            },
            {
                id: 3,
                etape: "Acquisition et modélisation des processus de notre application",
                description: "Définir l’architecture de développment de l’applications (ici notre application de tableau de bord), définir la modélisation multidimensionelle pour les Faits et Dimensions, prendre en compte la gestion des rôles et des intervenant(e)s."
            },
            {
                id: 4,
                etape: "Implémentation d’interfaces interactives",
                description: "Après la mise en place de l’architecture et de la feuille de routes, place a été donné à l’implémentation des graphes et des paramètres régulateurs comme la période des activités, les types de services, les localités…"
            },
        ],
        tools: [
            {
                id: 1,
                keyword: "ETL"
            },
            {
                id: 2,
                keyword: "Business analysis"
            },
            {
                id: 3,
                keyword: "Data Warehouse"
            },
            {
                id: 4,
                keyword: "Chart JS"
            },
            {
                id: 5,
                keyword: "Laravel"
            },
        ]
    },
    {
        id: 2,
        title: "Système d'information pour cliniques vétérinaires",
        image: require("../assets/works/VueAdmin.PNG"),
        description: "Les systèmes d'information font aujourd'hui parti des support indispensables pour les entreprises. Un bon système d'information permet de mieux communiquer, de suivre les les activités et de suivre en temps réel la traçabilité des activités. Ce projet a été l'occasion pour moi et mon équipe lors d'un projet accadémique de développer un SI centralisé pour un réseau de cliniques.",
        etapes: [
            {
                id: 1,
                etape: "Définition du problème",
                description: "Définir avec le cahier de charger mise à notre disposition les frontières du problème et analyser au passages ses avantages et limites. Dans les même moments, faire une critique sur les solutions déjà proposées et ainsi dresser le benchmarking de notre solution."
            },
            {
                id: 2,
                etape: "Définition processus du métier",
                description: "Dresser avec des représntations graphiques et procedurales (UML) les processus qui interviennent dans les cliniques véntérinaire. Exemple : prendre un rendez-vous, examiner un animal, prescrire des médicaments, facturer un client, faire un rapport…"
            },
            {
                id: 3,
                etape: "Acquisition et modélisation des processus de notre application",
                description: "Définir l’architecture de développment de l’applications (ici notre SI), définir la modélisation de la base de données et attributions de rôles dans les interventions."
            },
            {
                id: 4,
                etape: "Implémentation de l’applicaion",
                description: "Après la mise en place de l’architecture et de la feuille de routes, place a été donné à l’implémentation des interfaces utilisateurs et exposition du resultat final."
            },

        ],
        tools: [
            {
                id: 1,
                keyword: "Data modeling"
            },
            {
                id: 2,
                keyword: "SLQ and PL/SQL"
            },
            {
                id: 3,
                keyword: "Oracle Database"
            },
            {
                id: 4,
                keyword: "Oracle Apex"
            },
        ]
    },
    {
        id: 3,
        title: "Application mobile pour activités commerciales",
        image: require("../assets/works/App1.jpg"),
        description: "Au cours de mon premier stage, j'ai réalisé cette application mobile pour une entreprise qui oeuvre dans le consulting. Elle permettrait à l'entreprise de proposer ses servives à des sociétés via l'applications mobile ci contre.",
        etapes: [
            {
                id: 1,
                etape: "Définition du problème",
                description: "Lecture du cahier de charge et définition des frontières du projet."
            },
            {
                id: 2,
                etape: "Proposition de maquettes",
                description: "Proposer des maquettes d’applications mobiles et analysés avec le Product Owner les éventuelles modification à faire."
            },
            {
                id: 3,
                etape: "Acquisition et modélisation des processus de notre application",
                description: "Définition de l’architecture à suivre à traver des diagrammes de décision et de cas d’utilisation."
            },
            {
                id: 4,
                etape: "Implémentation d’interfaces",
                description: "Après la mise en place de l’architecture et de la feuille de routes, place a été donné à l’implémentation des intefaces utilisateurs."
            },
        ],
        tools: [
            {
                id: 1,
                keyword: "Data modeling"
            },
            {
                id: 2,
                keyword: "No Sql database"
            },
            {
                id: 3,
                keyword: "Firebase Database"
            },
            {
                id: 4,
                keyword: "Flutter"
            },
        ]
    },
]

export const person = {
    year: "2023",
    name: "BAMOGO Clément",
    describe: "Elève ingénieur en Supply Chain Management basé au Maroc, à Rabat",
    profile: [require("../assets/profiles/profile-1.png"), require("../assets/profiles/profile-2.jpg")],
    tel: "+212 6 82 41 90 21",
    email: "clement2bamogo@gmail.com",
    adress: "Rabat, Maroc",
    linkedIn: "https://www.linkedin.com/in/cl%C3%A9ment-bamogo-11ab71228/",
    gitHub: "https://github.com/gitClems",
}


export const imgUrl = [
    require("../assets/works/VueAdmin.PNG"),
    require("../assets/works/App1.jpg"),
    require("../assets/works/ExpGlobale.png"),
    require("../assets/profiles/profile-1.png"),
    require("../assets/profiles/profile-2.jpg"),
    require("../assets/backgrounds/bg-footer-dark-800w.jpg"),
    require("../assets/backgrounds/bg-footer-dark-1440w.jpg"),
    require("../assets/backgrounds/bg-main-dark-800w.jpg"),
    require("../assets/backgrounds/bg-main-dark-1440w.jpg"),
    require("../assets/backgrounds/bg-subtle-1-dark-800w.jpg"),
    require("../assets/backgrounds/bg-subtle-1-dark-1440w.jpg"),
    require("../assets/backgrounds/bg-subtle-2-dark-800w.jpg"),
    require("../assets/backgrounds/bg-subtle-2-dark-1440w.jpg"),
]