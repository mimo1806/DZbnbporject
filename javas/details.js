
// ── Dles donnees des logements  ────────────
const LOGEMENTS_DATA = [
  {"id":1,"nom":"Villa Méditerranéenne","wilaya":"Tipaza","type":"Villa","prix":12000,"note":4.9,"commentaires":128,"chambres":4,"wifi":true,"piscine":true,"parking":true,"plage":"100m","description":"Somptueuse villa avec vue panoramique sur la Méditerranée, piscine privée et jardin luxuriant. Un havre de paix absolu à deux pas de la plage.","image":"../image/image1.png","populaire":true,"emplacement":"Tipaza, Algérie — À 100m de la plage"},
    {"id":2,"nom":"Studio Vue Mer","wilaya":"Tipaza","type":"Studio","prix":4500,"note":4.5,"commentaires":42,"chambres":1,"wifi":true,"piscine":false,"parking":false,"plage":"100m","description":"Studio cosy avec vue imprenable sur la Méditerranée. Idéal pour un couple souhaitant profiter de la mer et du calme.","image":"../image/image2.png","populaire":false,"emplacement":"Tipaza, Algérie — Plage à 100m"},
    {"id":3,"nom":"Appartement Tipaza Centre","wilaya":"Tipaza","type":"Appartement","prix":7800,"note":4.6,"commentaires":67,"chambres":3,"wifi":true,"piscine":false,"parking":true,"plage":"500m","description":"Bel appartement moderne au cœur de Tipaza, proche des ruines romaines et de toutes commodités. Terrasse avec vue sur la mer.","image":"../image/image3.png","populaire":false,"emplacement":"Centre Tipaza — Proche ruines romaines"},
    {"id":4,"nom":"Villa Romaine","wilaya":"Tipaza","type":"Villa","prix":15000,"note":4.8,"commentaires":89,"chambres":5,"wifi":true,"piscine":true,"parking":true,"plage":"200m","description":"Grande villa de style romain avec colonnes, piscine extérieure et jardin méditerranéen. Capacité pour familles ou groupes.","image":"../image/image5.png","populaire":true,"emplacement":"Tipaza — Quartier résidentiel calme"},
    {"id":5,"nom":"Bungalow Chenoua","wilaya":"Tipaza","type":"Bungalow","prix":6500,"note":4.4,"commentaires":34,"chambres":2,"wifi":true,"piscine":false,"parking":false,"plage":"50m","description":"Charmant bungalow au pied du Chenoua, face à la mer. Ambiance authentique et nature préservée pour un séjour ressourçant.","image":"../image/image4.png","populaire":false,"emplacement":"Chenoua, Tipaza — Bord de mer"},
    {"id":6,"nom":"Maison du Port","wilaya":"Tipaza","type":"Maison","prix":9000,"note":4.7,"commentaires":56,"chambres":3,"wifi":true,"piscine":false,"parking":true,"plage":"300m","description":"Belle maison blanche aux volets bleus, à deux pas du port de Tipaza. Vue sur les bateaux et accès facile à la plage.","image":"../image/image6.png","populaire":false,"emplacement":"Port de Tipaza — Vue sur la mer"},
    
    {"id":8,"nom":"Villa Hydra","wilaya":"Alger","type":"Villa","prix":18000,"note":4.9,"commentaires":112,"chambres":5,"wifi":true,"piscine":true,"parking":true,"plage":"2km","description":"Majestueuse villa dans le quartier chic d'Hydra, avec piscine, jardin et vue sur la baie d'Alger. Standing exceptionnel pour séjours d'affaires ou de loisirs.","image":"../image/image8.png","populaire":true,"emplacement":"Hydra, Alger — Quartier résidentiel huppé"},
    {"id":9,"nom":"Appartement Centre-Ville","wilaya":"Alger","type":"Appartement","prix":8000,"note":4.7,"commentaires":95,"chambres":3,"wifi":true,"piscine":false,"parking":true,"plage":"1km","description":"Appartement haussmannien rénové en plein centre d'Alger, à deux pas de la Grande Poste. Vue sur la mer et accès direct à tous les monuments.","image":"../image/image9.png","populaire":false,"emplacement":"Centre Alger — Proche Grande Poste"},
    {"id":10,"nom":"Suite Bord de Mer El Djamila","wilaya":"Alger","type":"Appartement","prix":11000,"note":4.8,"commentaires":73,"chambres":2,"wifi":true,"piscine":false,"parking":true,"plage":"direct","description":"Suite luxueuse en front de mer à El Djamila, accès direct à la plage privée. Décoration contemporaine et vue mer depuis toutes les pièces.","image":"../image/image10.png","populaire":true,"emplacement":"El Djamila, Alger — Accès plage direct"},
    {"id":11,"nom":"Riad Alger Casbah","wilaya":"Alger","type":"Riad","prix":9500,"note":4.6,"commentaires":58,"chambres":3,"wifi":true,"piscine":false,"parking":false,"plage":"2km","description":"Riad authentique au cœur de la Casbah d'Alger, classée UNESCO. Patio fleuri, fontaine et décoration traditionnelle algéroise pour une immersion culturelle unique.","image":"../image/image11.png","populaire":false,"emplacement":"La Casbah, Alger — Patrimoine UNESCO"},
    {"id":12,"nom":"Studio Moderniste Ben Aknoun","wilaya":"Alger","type":"Studio","prix":5500,"note":4.3,"commentaires":29,"chambres":1,"wifi":true,"piscine":false,"parking":true,"plage":"5km","description":"Studio design dans la résidence arborée de Ben Aknoun. Calme, verdure et accès rapide au centre-ville. Idéal pour séjour professionnel.","image":"../image/image12.png","populaire":false,"emplacement":"Ben Aknoun, Alger — Quartier résidentiel vert"},
    {"id":13,"nom":"Penthouse Vue Baie","wilaya":"Alger","type":"Penthouse","prix":22000,"note":5.0,"commentaires":18,"chambres":4,"wifi":true,"piscine":true,"parking":true,"plage":"500m","description":"Penthouse d'exception avec vue à 180° sur la Baie d'Alger. Piscine sur le toit, domotique complète et finitions luxe. Le summum du séjour algérois.","image":"../image/image13.png","populaire":true,"emplacement":"Bord de mer Alger — Vue baie panoramique"},
    {"id":14,"nom":"Maison Coloniale Mustapha","wilaya":"Alger","type":"Maison","prix":13000,"note":4.7,"commentaires":44,"chambres":4,"wifi":true,"piscine":false,"parking":true,"plage":"1.5km","description":"Magnifique maison coloniale rénovée dans le quartier Mustapha Supérieur. Hauts plafonds, moulures d'époque et jardin ombragé avec vue sur la mer.","image":"../image/image14.png","populaire":false,"emplacement":"Mustapha, Alger — Quartier historique"},
    {"id":15,"nom":"Villa Paradis Ain El Turk","wilaya":"Oran","type":"Villa","prix":13500,"note":4.8,"commentaires":87,"chambres":4,"wifi":true,"piscine":true,"parking":true,"plage":"50m","description":"Villa de rêve à Ain El Turk avec piscine privée et accès direct à l'une des plus belles plages d'Oran. Architecture andalouse et vue mer imprenable.","image":"../image/image15.png","populaire":true,"emplacement":"Ain El Turk, Oran — Front de mer"},
    {"id":16,"nom":"Appartement Les Falaises","wilaya":"Oran","type":"Appartement","prix":7200,"note":4.5,"commentaires":53,"chambres":2,"wifi":true,"piscine":false,"parking":true,"plage":"200m","description":"Appartement perché sur les falaises d'Oran avec vue spectaculaire sur la mer. Décoration moderne, terrasse privée et couchers de soleil inoubliables.","image":"../image/image16.png","populaire":false,"emplacement":"Les Falaises, Oran — Vue mer panoramique"},
    {"id":17,"nom":"Riad Oran Medina","wilaya":"Oran","type":"Riad","prix":8500,"note":4.6,"commentaires":41,"chambres":3,"wifi":true,"piscine":false,"parking":false,"plage":"1km","description":"Riad traditionnel au cœur de la vieille ville d'Oran, à deux pas de la Grande Mosquée. Décoration andalouse et patio avec fontaine.","image":"../image/image17.png","populaire":false,"emplacement":"Medina, Oran — Centre historique"},
    {"id":18,"nom":"Chalet Les Andalouses","wilaya":"Oran","type":"Bungalow","prix":6000,"note":4.4,"commentaires":62,"chambres":2,"wifi":true,"piscine":false,"parking":true,"plage":"100m","description":"Chalet cosy aux Andalouses, plage réputée de la région oranaise. Ambiance familiale, barbecue extérieur et accès direct à la mer.","image":"../image/image18.png","populaire":false,"emplacement":"Les Andalouses, Oran — Station balnéaire"},
    {"id":19,"nom":"Studio Santa Cruz","wilaya":"Oran","type":"Studio","prix":4800,"note":4.3,"commentaires":27,"chambres":1,"wifi":true,"piscine":false,"parking":false,"plage":"800m","description":"Studio vue sur le fort Santa Cruz et la baie d'Oran. Situation idéale pour explorer la ville, proche de la corniche et du centre.","image":"../image/image19.png","populaire":false,"emplacement":"Santa Cruz, Oran — Vue sur le fort"},
    {"id":20,"nom":"Villa Gammarth Oran","wilaya":"Oran","type":"Villa","prix":16000,"note":4.9,"commentaires":35,"chambres":5,"wifi":true,"piscine":true,"parking":true,"plage":"300m","description":"Villa de prestige dans la zone résidentielle la plus prisée d'Oran. Piscine chauffée, home cinéma et salle de sport. Pour séjours d'exception.","image":"../image/image20.png","populaire":true,"emplacement":"Résidence Prestige, Oran"},
    {"id":21,"nom":"Penthouse Corniche","wilaya":"Oran","type":"Penthouse","prix":19000,"note":4.8,"commentaires":22,"chambres":3,"wifi":true,"piscine":false,"parking":true,"plage":"100m","description":"Penthouse d'exception sur la corniche oranaise. Grande terrasse avec jacuzzi extérieur et vue à couper le souffle sur la Méditerranée.","image":"../image/image21.png","populaire":true,"emplacement":"Corniche, Oran — Vue mer directe"},
    {"id":22,"nom":"Chalet Djurdjura","wilaya":"Tizi Ouzou","type":"Chalet","prix":7500,"note":4.7,"commentaires":68,"chambres":3,"wifi":true,"piscine":false,"parking":true,"plage":"N/A","description":"Chalet de montagne niché dans les forêts du Djurdjura. Cheminée, terrasse avec vue sur les sommets enneigés et sentiers de randonnée au départ du logement.","image":"../image/image22.png","populaire":true,"emplacement":"Djurdjura, Tizi Ouzou — Altitude 1200m"},
    {"id":23,"nom":"Maison Kabyle Traditionnelle","wilaya":"Tizi Ouzou","type":"Maison","prix":5500,"note":4.8,"commentaires":91,"chambres":4,"wifi":true,"piscine":false,"parking":true,"plage":"N/A","description":"Authentique maison kabyle rénovée avec goût, dans un village perché offrant une vue imprenable sur la vallée. Accueil chaleureux et cuisine locale.","image":"../image/image23.png","populaire":true,"emplacement":"Village Aït Yenni, Tizi Ouzou"},
    {"id":24,"nom":"Studio Tizi Centre","wilaya":"Tizi Ouzou","type":"Studio","prix":3800,"note":4.2,"commentaires":33,"chambres":1,"wifi":true,"piscine":false,"parking":false,"plage":"N/A","description":"Studio pratique en plein centre-ville de Tizi Ouzou. Idéal pour séjour d'affaires ou étudiant, proche université et commerces.","image":"../image/image24.png","populaire":false,"emplacement":"Centre-ville Tizi Ouzou"},
    {"id":25,"nom":"Villa Forêt Yakouren","wilaya":"Tizi Ouzou","type":"Villa","prix":9000,"note":4.6,"commentaires":47,"chambres":4,"wifi":true,"piscine":false,"parking":true,"plage":"N/A","description":"Grande villa entourée de forêts de chênes-lièges à Yakouren. Pétanque, barbecue et terrasses panoramiques. Idéal pour familles en quête de nature.","image":"../image/image25.png","populaire":false,"emplacement":"Yakouren, Tizi Ouzou — Forêt de chênes"},
    {"id":26,"nom":"Gîte Aït Hichem","wilaya":"Tizi Ouzou","type":"Gîte","prix":4200,"note":4.9,"commentaires":54,"chambres":2,"wifi":false,"piscine":false,"parking":true,"plage":"N/A","description":"Gîte rural authentique au village d'Aït Hichem. Déconnexion totale garantie, cuisine kabyle maison et vue sur la chaîne du Djurdjura.","image":"../image/image26.png","populaire":false,"emplacement":"Aït Hichem, Tizi Ouzou — Montagne"},
    {"id":27,"nom":"Appartement Oued Aissi","wilaya":"Tizi Ouzou","type":"Appartement","prix":4800,"note":4.4,"commentaires":28,"chambres":2,"wifi":true,"piscine":false,"parking":true,"plage":"N/A","description":"Appartement moderne à Oued Aissi avec vue sur la rivière et les montagnes kabyles. Calme et verdure, à 15 min de Tizi Ouzou.","image":"../image/image12.png","populaire":false,"emplacement":"Oued Aissi, Tizi Ouzou"},
    {"id":28,"nom":"Chalet Vue Corniche","wilaya":"Tizi Ouzou","type":"Chalet","prix":6500,"note":4.5,"commentaires":39,"chambres":3,"wifi":true,"piscine":false,"parking":true,"plage":"N/A","description":"Chalet moderne avec terrasse panoramique sur la vallée de la Soummam et les crêtes kabyles. Parfait pour randonneurs et amoureux de la nature.","image":"../image/image21.png","populaire":false,"emplacement":"Ighil Ali, Tizi Ouzou — Vue vallée"},
    {"id":29,"nom":"Villa Jijel Corniche","wilaya":"Jijel","type":"Villa","prix":11000,"note":4.7,"commentaires":63,"chambres":4,"wifi":true,"piscine":true,"parking":true,"plage":"100m","description":"Superbe villa sur la corniche de Jijel, l'une des côtes les plus sauvages d'Algérie. Piscine avec vue mer et accès direct aux criques rocheuses.","image":"../image/image22.png","populaire":true,"emplacement":"Corniche de Jijel — Côte sauvage"},
    {"id":30,"nom":"Bungalow Cap Carbon","wilaya":"Jijel","type":"Bungalow","prix":5800,"note":4.6,"commentaires":48,"chambres":2,"wifi":true,"piscine":false,"parking":true,"plage":"50m","description":"Bungalow isolé au pied du Cap Carbon, entre forêt et mer turquoise. Snorkeling, randonnée côtière et quiétude absolue au programme.","image":"../image/image23.png","populaire":false,"emplacement":"Cap Carbon, Jijel — Nature préservée"},
    {"id":31,"nom":"Maison Oued Zhour","wilaya":"Jijel","type":"Maison","prix":6800,"note":4.5,"commentaires":37,"chambres":3,"wifi":true,"piscine":false,"parking":true,"plage":"200m","description":"Maison familiale à Oued Zhour, station balnéaire réputée de Jijel. Grande terrasse, jardin fleuri et plage de sable blanc à 200m.","image":"../image/image24.png","populaire":false,"emplacement":"Oued Zhour, Jijel — Plage de sable blanc"},
    {"id":32,"nom":"Appartement Ziama Mansouriah","wilaya":"Jijel","type":"Appartement","prix":5000,"note":4.4,"commentaires":25,"chambres":2,"wifi":true,"piscine":false,"parking":false,"plage":"300m","description":"Appartement face aux montagnes verdoyantes et à la mer de Ziama. Cadre féerique entre forêts de cèdres et plages sauvages.","image":"../image/image23.png ","populaire":false,"emplacement":"Ziama Mansouriah, Jijel"},
    {"id":33,"nom":"Chalet Forêt Jijel","wilaya":"Jijel","type":"Chalet","prix":7000,"note":4.8,"commentaires":52,"chambres":3,"wifi":false,"piscine":false,"parking":true,"plage":"5km","description":"Chalet en bois au cœur de la forêt jijelienne. Rivière à proximité, oiseaux exotiques et silence de la nature pour un séjour totalement dépaysant.","image":"../image/image26.png","populaire":false,"emplacement":"Forêt de Jijel — Nature sauvage"},
    {"id":34,"nom":"Villa Les Oliviers","wilaya":"Jijel","type":"Villa","prix":8500,"note":4.6,"commentaires":31,"chambres":4,"wifi":true,"piscine":false,"parking":true,"plage":"1km","description":"Villa entourée d'oliviers centenaires avec vue sur la mer de Jijel. Ambiance rurale raffinée et production d'huile d'olive maison.","image":"../image/image25.png","populaire":false,"emplacement":"Jijel — Domaine oléicole"},
    {"id":35,"nom":"Studio Plage Kotama","wilaya":"Jijel","type":"Studio","prix":3500,"note":4.3,"commentaires":19,"chambres":1,"wifi":true,"piscine":false,"parking":false,"plage":"direct","description":"Studio simple et propre avec accès direct à la plage Kotama. Idéal pour couple ou solo cherchant une parenthèse balnéaire économique.","image":"../image/image28.png","populaire":false,"emplacement":"Plage Kotama, Jijel"},
    {"id":36,"nom":"Villa Bord de Mer Salamandre","wilaya":"Mostaganem","type":"Villa","prix":10500,"note":4.7,"commentaires":76,"chambres":4,"wifi":true,"piscine":true,"parking":true,"plage":"direct","description":"Villa exclusive sur la plage de la Salamandre, avec piscine privée et accès direct à la mer. L'une des plus belles plages de la côte oranaise.","image":"../image/image16.png","populaire":true,"emplacement":"Plage Salamandre, Mostaganem — Front de mer"},
    {"id":37,"nom":"Appartement Vue Mer Tigditt","wilaya":"Mostaganem","type":"Appartement","prix":6500,"note":4.5,"commentaires":43,"chambres":2,"wifi":true,"piscine":false,"parking":true,"plage":"400m","description":"Appartement rénové à Tigditt avec belle vue mer et accès rapide aux plages de Mostaganem. Proche du port et du marché.","image":"../image/image29.png","populaire":false,"emplacement":"Tigditt, Mostaganem — Vue mer"},
    {"id":40,"nom":"Studio Saïda Chorfa","wilaya":"Mostaganem","type":"Studio","prix":3900,"note":4.2,"commentaires":21,"chambres":1,"wifi":true,"piscine":false,"parking":false,"plage":"600m","description":"Studio moderne à Saïda Chorfa, petite station balnéaire tranquille près de Mostaganem. Plage peu fréquentée et eaux cristallines.","image":"../image/image32.png","populaire":false,"emplacement":"Saïda Chorfa, Mostaganem"},
    {"id":41,"nom":"Villa Les Dunes","wilaya":"Mostaganem","type":"Villa","prix":12000,"note":4.8,"commentaires":49,"chambres":5,"wifi":true,"piscine":true,"parking":true,"plage":"200m","description":"Grande villa familiale entourée de dunes dorées, avec piscine et jardin méditerranéen. Vue sur mer depuis la terrasse du dernier étage.","image":"../image/image35.png","populaire":true,"emplacement":"Les Dunes, Mostaganem — Plage naturelle"},
    {"id":42,"nom":"Appartement Mazagran","wilaya":"Mostaganem","type":"Appartement","prix":5800,"note":4.5,"commentaires":34,"chambres":2,"wifi":true,"piscine":false,"parking":true,"plage":"300m","description":"Appartement cosy à Mazagran, célèbre pour sa plage et son festival de musique. Vue sur la mer et accès rapide au centre estival.","image":"../image/image34.png","populaire":false,"emplacement":"Mazagran, Mostaganem — Plage et festival"},
    {"id":44,"nom":"Villa Tichy","wilaya":"Béjaïa","type":"Villa","prix":11500,"note":4.8,"commentaires":71,"chambres":4,"wifi":true,"piscine":true,"parking":true,"plage":"100m","description":"Belle villa à Tichy, station balnéaire animée de Béjaïa. Piscine privée, jardin et accès aux plages réputées de la région.","image":"../image/image39.png","populaire":true,"emplacement":"Tichy, Béjaïa — Station balnéaire"},
    {"id":45,"nom":"Chalet Cap Carbon","wilaya":"Béjaïa","type":"Chalet","prix":7500,"note":4.6,"commentaires":44,"chambres":3,"wifi":false,"piscine":false,"parking":true,"plage":"50m","description":"Chalet de charme au Cap Carbon, site naturel protégé de Béjaïa. Randonnées, plongée et criques isolées. Un vrai retour à la nature.","image":"../image/image36.png","populaire":false,"emplacement":"Cap Carbon, Béjaïa — Site naturel protégé"},
    {"id":46,"nom":"Studio Soummam","wilaya":"Béjaïa","type":"Studio","prix":4200,"note":4.3,"commentaires":29,"chambres":1,"wifi":true,"piscine":false,"parking":false,"plage":"2km","description":"Studio confortable en centre-ville de Béjaïa, proche de l'université et du marché. Idéal pour séjours courts et déplacements professionnels.","image":"../image/image37.png","populaire":false,"emplacement":"Centre-ville Béjaïa — Proche université"},
    {"id":49,"nom":"Gîte Forêt Aokas","wilaya":"Béjaïa","type":"Gîte","prix":4800,"note":4.4,"commentaires":23,"chambres":2,"wifi":false,"piscine":false,"parking":true,"plage":"3km","description":"Gîte rustique entouré de pins et d'eucalyptus à l'arrière de la côte de Béjaïa. Randonnées, cueillette et nuits étoilées sans lumière artificielle.","image":"../image/image38.png","populaire":false,"emplacement":"Forêt d'Aokas, Béjaïa — Nature préservée"},
    {"id":50,"nom":"Annaba Palace Vue Mer","wilaya":"Annaba","type":"Appartement","prix":9500,"note":4.7,"commentaires":84,"chambres":3,"wifi":true,"piscine":false,"parking":true,"plage":"200m","description":"Appartement de standing avec vue sur la mer d'Annaba et la basilique Saint-Augustin. Proche des plages réputées de la Corniche Hippone.","image":"../image/image41.png","populaire":true,"emplacement":"Corniche Hippone, Annaba — Vue mer"},
    {"id":51,"nom":"Villa Seraïdi","wilaya":"Annaba","type":"Villa","prix":14000,"note":4.8,"commentaires":67,"chambres":5,"wifi":true,"piscine":true,"parking":true,"plage":"20km","description":"Villa coloniale dans la montagne de Seraïdi, à 900m d'altitude. Fraîcheur, forêts de chênes-lièges et vue magnifique sur Annaba et la mer.","image":"../image/image42.png","populaire":true,"emplacement":"Seraïdi, Annaba — Altitude 900m"},
    {"id":52,"nom":"Appartement Plage Chapuis","wilaya":"Annaba","type":"Appartement","prix":7000,"note":4.5,"commentaires":51,"chambres":2,"wifi":true,"piscine":false,"parking":true,"plage":"100m","description":"Appartement lumineux face à la plage Chapuis, l'une des plus belles d'Annaba. Vue mer directe depuis le salon et la terrasse.","image":"../image/image43.png","populaire":false,"emplacement":"Plage Chapuis, Annaba — Vue mer directe"},
    {"id":53,"nom":"Studio Hippone Centre","wilaya":"Annaba","type":"Studio","prix":4500,"note":4.3,"commentaires":32,"chambres":1,"wifi":true,"piscine":false,"parking":false,"plage":"1km","description":"Studio moderne en centre-ville d'Annaba, proche des ruines romaines d'Hippone et du musée archéologique. Idéal pour amateurs d'histoire.","image":"../image/image44.png","populaire":false,"emplacement":"Centre Annaba — Proche ruines d'Hippone"},
    {"id":54,"nom":"Chalet El Bouni","wilaya":"Annaba","type":"Chalet","prix":6200,"note":4.4,"commentaires":28,"chambres":2,"wifi":true,"piscine":false,"parking":true,"plage":"500m","description":"Chalet paisible à El Bouni avec jardin arboré et accès facile aux plages d'Annaba. Barbecue et terrasse ombragée pour soirées en famille.","image":"../image/image45.png","populaire":false,"emplacement":"El Bouni, Annaba"},
    {"id":55,"nom":"Maison Bord de Mer La Caroube","wilaya":"Annaba","type":"Maison","prix":8200,"note":4.6,"commentaires":42,"chambres":3,"wifi":true,"piscine":false,"parking":true,"plage":"direct","description":"Maison familiale au bord de la mer avec accès direct à la plage La Caroube. Grands espaces, cuisine équipée et ambiance familiale chaleureuse.","image":"../image/image46.png","populaire":false,"emplacement":"Plage La Caroube, Annaba"},
    {"id":56,"nom":"Villa Luxe Corniche Annaba","wilaya":"Annaba","type":"Villa","prix":16000,"note":4.9,"commentaires":39,"chambres":5,"wifi":true,"piscine":true,"parking":true,"plage":"300m","description":"Villa d'exception sur la corniche d'Annaba avec piscine à débordement sur la mer. Prestations 5 étoiles et service de conciergerie inclus.","image":"../image/image47.png","populaire":true,"emplacement":"Corniche d'Annaba — Résidence prestige"},
    {"id":57,"nom":"Ksar Sahari Ghardaïa","wilaya":"Ghardaïa","type":"Riad","prix":8000,"note":4.9,"commentaires":103,"chambres":4,"wifi":true,"piscine":true,"parking":true,"plage":"N/A","description":"Ksar traditionnel mozabite au cœur de la Pentapole du M'zab, classée UNESCO. Architecture ancestrale, patio en étoile et silence du désert.","image":"../image/image49.png","populaire":true,"emplacement":"Ghardaïa — Vallée du M'zab, UNESCO"},
    {"id":58,"nom":"Camp Désert Djanet","wilaya":"Ghardaïa","type":"Campement","prix":6500,"note":4.8,"commentaires":77,"chambres":2,"wifi":false,"piscine":false,"parking":true,"plage":"N/A","description":"Campement de luxe sous les étoiles du Sahara, au cœur du Tassili n'Ajjer. Tentes berbères équipées, cuisine saharienne et excursions en 4x4.","image":"../image/image50.png","populaire":true,"emplacement":"Tassili n'Ajjer — Grand Sud Algérien"},
    {"id":59,"nom":"Auberge El Golea","wilaya":"Ghardaïa","type":"Auberge","prix":4500,"note":4.6,"commentaires":58,"chambres":2,"wifi":true,"piscine":true,"parking":true,"plage":"N/A","description":"Auberge authentique à El Golea, oasis verdoyante du Sahara algérien. Source d'eau naturelle, jardins de palmiers et ciel étoilé exceptionnel.","image":"../image/image51.png","populaire":false,"emplacement":"El Golea, Ghardaïa — Oasis du Sahara"},
    {"id":60,"nom":"Villa Oasis Beni Isguen","wilaya":"Ghardaïa","type":"Villa","prix":9500,"note":4.7,"commentaires":44,"chambres":3,"wifi":true,"piscine":true,"parking":true,"plage":"N/A","description":"Villa dans une oasis à Beni Isguen, cité sainte du M'zab. Palmiers, fraîcheur naturelle et architecture mozabite unique au monde.","image":"../image/image52.png","populaire":false,"emplacement":"Beni Isguen, Ghardaïa — Cité sainte"},
    {"id":61,"nom":"Tente Berbère Tamanrasset","wilaya":"Ghardaïa","type":"Campement","prix":5500,"note":4.8,"commentaires":66,"chambres":1,"wifi":false,"piscine":false,"parking":true,"plage":"N/A","description":"Tente touareg de luxe à Tamanrasset, aux portes du Hoggar. Couchers de soleil sur les Atakor, randonnées chamelières et nuits sous les étoiles.","image":"../image/image53.png","populaire":false,"emplacement":"Tamanrasset — Massif du Hoggar"},
    {"id":62,"nom":"Maison Touggourt","wilaya":"Ghardaïa","type":"Maison","prix":5000,"note":4.4,"commentaires":31,"chambres":3,"wifi":true,"piscine":false,"parking":true,"plage":"N/A","description":"Maison traditionnelle à Touggourt, au cœur des palmeraies sahariennes. Idéale pour découvrir les ksour environnants et les dunes de sable doré.","image":"../image/image54.png","populaire":false,"emplacement":"Touggourt, Ghardaïa — Palmeraie saharienne"},
    {"id":63,"nom":"Écolodge Hoggar","wilaya":"Ghardaïa","type":"Écolodge","prix":7200,"note":4.9,"commentaires":48,"chambres":2,"wifi":false,"piscine":false,"parking":true,"plage":"N/A","description":"Écolodge construit en pierre volcanique au cœur du Hoggar. Énergie solaire, cuisine berbère maison et excursions guidées dans les paysages lunaires.","image":"../image/image55.png","populaire":true,"emplacement":"Assekrem, Hoggar — Sommet du Sahara"}
  ];
document.addEventListener('DOMContentLoaded', () => {
  const u = JSON.parse(localStorage.getItem('dzbnb_user') || 'null');
  if (u) {
    const btn = document.querySelector('.btn-connexion');
    if (btn) {
      btn.innerHTML = '👤 ' + (u.nom || u.email);
      btn.onclick = () => {
        if (confirm('Voulez-vous vous déconnecter ?')) {
          localStorage.removeItem('dzbnb_user');
          location.reload();
        }
      };
    }
  }
});


// ── les fake comments ─────
const SAMPLE_COMMENTS = [
  { name: "Ines G.", avatar: "https://randomuser.me/api/portraits/women/44.jpg", date: "Mai 2026", stars: 4, text: "Séjour très agréable, logement conforme aux photos. Hôte réactif et accueillant." },
  { name: "Malik A.", avatar: "https://randomuser.me/api/portraits/men/32.jpg", date: "Avril 2026", stars: 5, text: "Excellent rapport qualité-prix ! Endroit bien équipé, on reviendra sans hésiter." },
  { name: "Samira K.", avatar: "https://randomuser.me/api/portraits/women/68.jpg", date: "Mars 2026", stars: 5, text: "Un coup de cœur absolu. La vue était spectaculaire et l'ambiance parfaite." },
  { name: "Yacine H.", avatar: "https://randomuser.me/api/portraits/men/55.jpg", date: "Février 2026", stars: 4, text: "Très beau logement, emplacement idéal. Quelques petits détails à améliorer mais dans l'ensemble parfait." },
  { name: "Nadia B.", avatar: "https://randomuser.me/api/portraits/women/22.jpg", date: "Janvier 2026", stars: 5, text: "Magnifique séjour en famille. Les enfants ont adoré. Cuisine bien équipée." },
];

function getComments(logement) {
  const count = Math.min(2, Math.max(1, logement.commentaires > 0 ? 2 : 1));
  return SAMPLE_COMMENTS.slice(0, count);
}

function getRatingDist(note, total) {
  const five  = Math.round(total * (note >= 4.8 ? .65 : note >= 4.5 ? .50 : .35));
  const four  = Math.round(total * (note >= 4.5 ? .25 : .30));
  const three = Math.round(total * .06);
  const two   = Math.round(total * .02);
  const one   = Math.max(0, total - five - four - three - two);
  return [five, four, three, two, one];
}


const counters = { adultes: 1, enfants: 0 };

window.updateCounter = function(key, delta) {
  counters[key] = Math.max(key === 'adultes' ? 1 : 0, counters[key] + delta);
  document.getElementById('val-' + key).textContent = counters[key];
  document.getElementById('dec-' + key).disabled = counters[key] <= (key === 'adultes' ? 1 : 0);
};


function loadDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const root = document.getElementById('details-root');

  const data = LOGEMENTS_DATA.find(l => l.id === id);

  if (!data) {
    root.innerHTML = `<div class="not-found"><h2>Logement introuvable</h2><p>Ce logement n'existe pas.</p><a href="../html/logements.html">← Retour aux logements</a></div>`;
    return;
  }

  document.title = 'DZbnb — ' + data.nom;

  const amenities = [
    { label: data.chambres + ' Chambre' + (data.chambres > 1 ? 's' : ''), icon: '🛏️', ok: true },
    { label: data.wifi ? 'WiFi gratuit' : 'Pas de WiFi', icon: '📶', ok: data.wifi },
    { label: data.parking ? 'Parking inclus' : 'Pas de parking', icon: '🅿️', ok: data.parking },
    { label: data.piscine ? 'Piscine' : 'Pas de piscine', icon: '🏊', ok: data.piscine },
    { label: data.type, icon: '🏠', ok: true, sub: 'Type de logement' },
    { label: data.plage !== 'N/A' ? 'Plage à ' + data.plage : 'Pas de plage', icon: '🏖️', ok: data.plage !== 'N/A', sub: 'À proximité' },
  ];

  const dist   = getRatingDist(data.note, data.commentaires);
  const labels = ['5 étoiles', '4 étoiles', '3 étoiles', '2 étoiles', '1 étoile'];
  const comments = getComments(data);
  const stars  = n => '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n));

  root.innerHTML = `
    <div class="detail-wrap">

      <div class="detail-hero">
        <img src="${data.image}" alt="${data.nom}">
        <span class="photos-badge">📷 1 photo</span>
      </div>

      <div class="detail-body">

        <!-- LEFT -->
        <div class="detail-left">

          <div class="detail-title-row">
            <h1 class="detail-title">${data.nom}</h1>
            <div class="detail-price-inline">
              <strong>${data.prix.toLocaleString('fr-FR')}</strong>
              <span> DZD /nuit</span>
            </div>
          </div>
          <p class="detail-subtitle">
            📍 ${data.wilaya} &nbsp;·&nbsp;
            <span class="rating">⭐ ${data.note}</span>
            &nbsp;(${data.commentaires} commentaires)
          </p>

          <div class="detail-section">
            <h2>À propos de ce logement</h2>
            <p class="detail-desc">${data.description}</p>
          </div>

          <div class="detail-section">
            <h2>Équipements</h2>
            <div class="amenities-grid">
              ${amenities.map(a => `
                <div class="amenity-item ${!a.ok ? 'unavailable' : ''}">
                  <span class="amenity-icon">${a.icon}</span>
                  <div>
                    <div style="font-weight:600">${a.label}</div>
                    ${a.sub ? `<div style="font-size:.72rem;color:var(--grey)">${a.sub}</div>` : ''}
                  </div>
                </div>`).join('')}
            </div>
          </div>

          <div class="detail-section">
            <h2>Emplacement</h2>
            <div class="location-box">
              <div class="location-dot">📍</div>
              <div>
                <strong>${data.nom}, ${data.wilaya}</strong>
                <p>${data.emplacement}</p>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <h2>Hôte</h2>
            <div class="host-box">
              <div class="host-avatar">👤</div>
              <div class="host-info">
                <strong>Hôte DZbnb</strong>
                <p class="host-badge">✓ Hôte vérifié · Membre depuis 2024</p>
                <p class="host-meta">✓ Taux de réponse : 98% &nbsp; ⏱ Répond en moins d'une heure</p>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <h2>Commentaires (${data.commentaires})</h2>
            <div class="rating-summary">
              <div class="rating-big">
                <div class="big-num">${data.note}</div>
                <div class="stars-row">${stars(data.note)}</div>
                <div class="rev-count">${data.commentaires} commentaires</div>
              </div>
              <div class="rating-bars">
                ${labels.map((lbl, i) => {
                  const cnt = dist[i];
                  const pct = data.commentaires > 0 ? Math.round(cnt / data.commentaires * 100) : 0;
                  return `<div class="bar-row">
                    <span>${lbl}</span>
                    <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
                    <span>${cnt}</span>
                  </div>`;
                }).join('')}
              </div>
            </div>
          </div>

          <div class="detail-section">
            <div class="comment-list">
              ${comments.map(c => `
                <div class="comment-item">
                  <div class="comment-header">
                    <img class="comment-avatar" src="${c.avatar}" alt="${c.name}">
                    <div>
                      <div class="comment-name">${c.name}</div>
                      <div class="comment-date">${c.date}</div>
                    </div>
                  </div>
                  <div class="comment-stars">${stars(c.stars)}</div>
                  <p class="comment-text">${c.text}</p>
                </div>`).join('')}
            </div>
            <button class="btn-add-comment" onclick="openCommentModal()">💬 Ajouter un commentaire</button>
          </div>

        </div>

        <!-- RIGHT — Booking -->
        <div class="booking-card">
          <div class="booking-price">${data.prix.toLocaleString('fr-FR')} <span>DZD /nuit</span></div>
          <p class="booking-rating"><strong>⭐ ${data.note}</strong> · ${data.commentaires} commentaires</p>

          <div class="booking-label">DATES</div>
          <div class="date-row">
            <div class="date-field">
              <label>ARRIVÉE</label>
              <input type="date" id="dateArrivee">
            </div>
            <div class="date-field">
              <label>DÉPART</label>
              <input type="date" id="dateDepart">
            </div>
          </div>

          <div class="voyageurs-block">
            <div class="booking-label">VOYAGEURS</div>
            <div class="counter-row">
              <span class="counter-label">Adultes</span>
              <div class="counter-btns">
                <button class="counter-btn" id="dec-adultes" onclick="updateCounter('adultes',-1)" disabled>−</button>
                <span class="counter-val" id="val-adultes">1</span>
                <button class="counter-btn" id="inc-adultes" onclick="updateCounter('adultes',1)">+</button>
              </div>
            </div>
            <div class="counter-row">
              <span class="counter-label">Enfants</span>
              <div class="counter-btns">
                <button class="counter-btn" id="dec-enfants" onclick="updateCounter('enfants',-1)" disabled>−</button>
                <span class="counter-val" id="val-enfants">0</span>
                <button class="counter-btn" id="inc-enfants" onclick="updateCounter('enfants',1)">+</button>
              </div>
            </div>
            <div class="toggle-row" style="margin-top:.6rem">
              <span class="counter-label">Animaux</span>
              <label class="toggle-switch">
                <input type="checkbox" id="animaux">
                <span class="toggle-track"></span>
                <span class="toggle-thumb"></span>
              </label>
            </div>
          </div>

          <button class="btn-reserver" onclick="handleReserver(${data.prix}, LOGEMENTS_DATA.find(l=>l.id===${data.id}))">Réserver</button>
          <p class="booking-note">Aucun frais ne sera débité pour le moment.</p>
        </div>

      </div>
    </div>`;
}

window.handleReserver = function(prix) {
  // ── 1. Vérifier les dates ──────────────────────────────
  const a = document.getElementById('dateArrivee').value;
  const d = document.getElementById('dateDepart').value;
  if (!a || !d) {
    showToast("⚠️ Veuillez choisir vos dates d'arrivée et de départ.", 'warn');
    return;
  }
  const d1 = new Date(a), d2 = new Date(d);
  if (d2 <= d1) {
    showToast("⚠️ La date de départ doit être après l'arrivée.", 'warn');
    return;
  }

  // ── 2. Vérifier si connecté ───────────────────────────
  const userRaw = localStorage.getItem('dzbnb_user');
  if (!userRaw) {
    // Pas connecté → afficher le modal de redirection
    showAuthModal();
    return;
  }

  // ── 3. Connecté → construire l'URL de paiement ────────
  const logement = LOGEMENTS_DATA.find(l => l.id === parseInt(new URLSearchParams(window.location.search).get('id')));
  const params = new URLSearchParams({
    name:     logement.nom,
    loc:      logement.wilaya,
    rating:   logement.note,
    type:     logement.type,
    rooms:    logement.chambres,
    price:    prix,
    checkin:  a,
    checkout: d,
    adults:   counters.adultes,
    children: counters.enfants,
    pets:     document.getElementById('animaux') ? document.getElementById('animaux').checked : false,
    img:      encodeURIComponent(logement.image),
  });

  window.location.href = '../html/paiement.html?' + params.toString();
};


function showToast(msg, type) {
  let toast = document.getElementById('dzbnb-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'dzbnb-toast';
    toast.style.cssText = `
      position:fixed; bottom:2rem; left:50%; transform:translateX(-50%) translateY(20px);
      background:#1a1008; color:#fff; padding:.8rem 1.6rem; border-radius:30px;
      font-size:.88rem; font-weight:500; z-index:9999; opacity:0;
      transition:all .3s ease; white-space:nowrap; box-shadow:0 4px 20px rgba(0,0,0,.25);
    `;
    document.body.appendChild(toast);
  }
  if (type === 'warn') toast.style.background = '#c8903a';
  if (type === 'error') toast.style.background = '#c0392b';
  if (type === 'ok') toast.style.background = '#2b6e2b';
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 3000);
}


function showAuthModal() {
  // Remove existing
  const old = document.getElementById('auth-modal');
  if (old) old.remove();

  const currentUrl = window.location.href;

  const modal = document.createElement('div');
  modal.id = 'auth-modal';
  modal.style.cssText = `
    position:fixed; inset:0; z-index:10000;
    display:flex; align-items:center; justify-content:center;
    background:rgba(0,0,0,.5); backdrop-filter:blur(4px);
    animation:fadeInModal .25s ease;
  `;

  modal.innerHTML = `
    <style>
      @keyframes fadeInModal { from{opacity:0;transform:scale(.95)} to{opacity:1;transform:scale(1)} }
      #auth-modal-box { background:#fff; border-radius:20px; padding:2.5rem 2rem; max-width:420px; width:90%; text-align:center; box-shadow:0 20px 60px rgba(0,0,0,.2); font-family:'DM Sans',sans-serif; }
      #auth-modal-box .modal-icon { font-size:3rem; margin-bottom:1rem; }
      #auth-modal-box h2 { font-family:'Playfair Display',serif; font-size:1.5rem; font-weight:900; color:#1a1008; margin-bottom:.5rem; }
      #auth-modal-box p { font-size:.9rem; color:#777; line-height:1.6; margin-bottom:1.8rem; }
      #auth-modal-box .modal-btns { display:flex; flex-direction:column; gap:.75rem; }
      #auth-modal-box .btn-login { background:#2b6e2b; color:#fff; border:none; padding:.85rem; border-radius:12px; font-size:.95rem; font-weight:700; cursor:pointer; font-family:'DM Sans',sans-serif; transition:background .2s; }
      #auth-modal-box .btn-login:hover { background:#3a8a3a; }
      #auth-modal-box .btn-register { background:transparent; color:#2b6e2b; border:2px solid #2b6e2b; padding:.8rem; border-radius:12px; font-size:.9rem; font-weight:600; cursor:pointer; font-family:'DM Sans',sans-serif; transition:all .2s; }
      #auth-modal-box .btn-register:hover { background:#edf6ed; }
      #auth-modal-box .btn-cancel { background:none; border:none; color:#aaa; font-size:.82rem; cursor:pointer; margin-top:.3rem; font-family:'DM Sans',sans-serif; }
      #auth-modal-box .btn-cancel:hover { color:#555; }
    </style>
    <div id="auth-modal-box">
      <div class="modal-icon">🔒</div>
      <h2>Connexion requise</h2>
      <p>Pour réserver ce logement, vous devez être connecté à votre compte DZbnb.</p>
      <div class="modal-btns">
        <button class="btn-login" id="go-login">Se connecter</button>
        <button class="btn-register" id="go-register">Créer un compte</button>
        <button class="btn-cancel" id="close-modal">Annuler</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Encode current page to come back after login
  const redirectEncoded = encodeURIComponent(currentUrl);

  document.getElementById('go-login').onclick = () => {
    window.location.href = '../html/connexion.html?redirect=' + redirectEncoded;
  };
  document.getElementById('go-register').onclick = () => {
    window.location.href = '../html/connexion.html?tab=register&redirect=' + redirectEncoded;
  };
  document.getElementById('close-modal').onclick = () => modal.remove();
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

window.openCommentModal = function() {
  const t = prompt('Votre commentaire :');
  if (t && t.trim()) alert('✅ Merci ! Votre commentaire sera publié après modération.');
};

loadDetail();
	



