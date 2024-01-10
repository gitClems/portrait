
export const domains = [
    {
        id: 1,
        title: "Supply Chain Management",
        description: "L'informatique décisionnelle au coeur de la Chaîne d'approvisonnement, rien de mieux pour se mettre dans la course des grands enjeux de ce monde concurrentiel."
    },
    {
        id: 2,
        title: "Recherche opérationnelle",
        description: "Toujours en quête d'optimisation, la recherche (dans le domain logisque) offre un cardre de réflexion pour l'utilisation des nouvelle méthodes et outils dans les processus métiers."
    },
    {
        id: 3,
        title: "Business analysis",
        description: "L'esprit d'analyse au seins des processus métiers de votre entreprise. Permettre une prise de décision adéquate et suivre les activités principales de votre structure."
    },
]

export const skills = [
    {
        id: 1,
        title: "Supply Chain Management"
    },
    {
        id: 2,
        title: "Business analysis"
    },
    {
        id: 3,
        title: "Récherche opérationelle"
    },
    {
        id: 4,
        title: "Web and Mobile App dev"
    },
    {
        id: 5,
        title: "Dessign thinking"
    },
    {
        id: 6,
        title: "Amélioration continue"
    },
]


export const formations = [
    {
        id: 1,
        periode: "2021-2024",
        label: "Ecole Nationale d'Informatique et d'Analyse des Systhème de Rabat (ENSIAS)",
        description: "Avec mon orientation en Smart Supply Chain an Logistics, j'ai eu cette connaissance de l'informatique décisionnelle, du Business Intelligence et de la gestion des projets ainsi que leur suivi. En outre, une partie de mon orientation est la recherche opérationnelle à travers laquelles un accent est mis sur la résolution des problèmes liés à l'optimisation logistiques: ulisation des méthodes mathématiques et approchées, les technologies de l'IA.",
        tools: [
            {
                id: 1,
                keyword: "ERP/CRM/MRP"
            },
            {
                id: 2,
                keyword: "IA/Deep Learning"
            },
            {
                id: 3,
                keyword: "Gestion d'entrepôt"
            },
            {
                id: 4,
                keyword: "Algorithme génétique"
            },
            {
                id: 5,
                keyword: "Power BI"
            },
            {
                id: 6,
                keyword: "BPMN"
            },
            {
                id: 7,
                keyword: "salesforce lightning"
            },
        ]
    },
    {
        id: 2,
        periode: "2019-2021",
        label: "Faculté des Sciences et Techniques de Monhammedia(FSTM)",
        description: "J'ai su dévélopper des connaissance en analyse numérique et statistiques. Ceci combiné à l'algorithmique m'a donné des solides acquis sur la transformation d'un problème réel en solution mathématique et ensuite son intégration grace à des algorithmes.",
        tools: [
            {
                id: 1,
                keyword: "Algorithmique",
            },
            {
                id: 2,
                keyword: "Programmation C/C++"
            },
            {
                id: 3,
                keyword: "Base de données"
            },
            {
                id: 4,
                keyword: "Structure de données"
            },
            {
                id: 5,
                keyword: "Algèbre"
            },
            {
                id: 4,
                keyword: "Analyse numérique"
            },
        ],
    },
]

export const projects = [
    {
        id: 1,
        title: "Conception de tableau de bord pour la suivi d'activités de livraisons par consigne",
        periode: "Juil. 2023 - Août 2023",
        location: "CEOS Technology, Casablanca",
        image: require("../assets/works/ExpGlobale.png"),
        description: "Pour la bonne suivie des performances d'une activité, les tableaux de bords dynamiques paraissent très optimal dans le sens où ils offrent une vue aussi bien macroscopique que détaillée.",
        etapes: [
            {
                id: 1,
                etape: "Définition du problème et définition du cahier de charge",
                description: "Comprendre les processus logistiques qui sont en jeu et définir les frontières du projet."
            },
            {
                id: 2,
                etape: "Définition des indicateurs de performance (KPIs)",
                description: "Définir les métriques à mesurer et à suivre par des processus de Benchmarking et d'analytiques."
            },
            {
                id: 3,
                etape: "Préparation des données et modélisation des processus de notre application",
                description: "Par le processus de l'ETL, extraire les données, les transformer et les charger dans le datawarehouse suivi d'une modélisation multidimensionnelle pour les rélation entre les mésures(les Faits) et les dimensions."
            },
            {
                id: 4,
                etape: "Implémentation d’interfaces interactives",
                description: "Après la feuille de routes et la mise en place de l’architecture, place a été donné à l’implémentation des graphes et des paramètres régulateurs qui permettent de visualiser les graphes de manière dynamique."
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
        title: "Conception de système d'information centralisé",
        location: "ENSIAS",
        periode: "Oct. 2022 - Nov. 2022",
        image: require("../assets/works/VueAdmin.PNG"),
        description: "Les systèmes d'information font aujourd'hui parti des support assez importants pour la communication, le partage de fichiers, la plannification, le reporting etc. Un bon système d'information permet de mieux communiquer, de suivre les les activités et de suivre en temps réel la traçabilité des activités. Ce projet a été l'occasion pour moi et mon équipe lors d'un projet accadémique de développer un SI centralisé pour un réseau de cliniques.",
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
        title: "Développement d'application mobile pour comme vitrine de publications de service",
        periode: "Août 2022",
        location: "OBAAS Consulting",
        image: require("../assets/works/App1.jpg"),
        description: "Au cours de mon premier stage, j'ai réalisé cette application mobile pour une entreprise qui œuvre dans le consulting. Elle permettrait à l'entreprise de proposer ses servives à des sociétés via l'applications tout en ayant un suivi de la progressions de réalisation.",
        etapes: [
            {
                id: 1,
                etape: "Définition du problème",
                description: "Définir du cahier de charge et les frontières du projet."
            },
            {
                id: 2,
                etape: "Proposition de maquettes",
                description: "Proposer des maquettes d’applications mobiles et analyser avec le Product Owner les éventuelles modifications à faire."
            },
            {
                id: 3,
                etape: "Modélisation des processus fonctionnels",
                description: "Définition de l’architecture à suivre à traver des diagrammes de décision et UML."
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
    describe: "Elève ingénieur en Supply Chain Management basé à Rabat, au Maroc",
    about: "Durant tout mon parcours universitaire et ingénieur, j'ai pu dévélopper un bon nombre de connaissance aussi bien dans les sciences exactes que celles qui relèvent de l'esprit qui définissent l'état d'un ingénieur.",
    profile: [require("../assets/profiles/profile-1.png"), require("../assets/profiles/profile-3-mini.jpg")],
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
    require("../assets/profiles/profile-3.jpg"),
    require("../assets/profiles/profile-3-mini.jpg"),
    require("../assets/backgrounds/bg-footer-dark-800w.jpg"),
    require("../assets/backgrounds/bg-footer-dark-1440w.jpg"),
    require("../assets/backgrounds/bg-main-dark-800w.jpg"),
    require("../assets/backgrounds/bg-main-dark-1440w.jpg"),
    require("../assets/backgrounds/bg-subtle-1-dark-800w.jpg"),
    require("../assets/backgrounds/bg-subtle-1-dark-1440w.jpg"),
    require("../assets/backgrounds/bg-subtle-2-dark-800w.jpg"),
    require("../assets/backgrounds/bg-subtle-2-dark-1440w.jpg"),
]