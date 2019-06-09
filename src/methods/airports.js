const airports = [
    {"key": "Nimes", "code": "FNI", "destinations": ["CHARLEROI", "MARRAKESH", "FEZ", "LONDON"]}, {
        "key": "Malta",
        "code": "MLA",
        "destinations": ["TALLINN", "NUREMBERG", "FRANKFURT", "ZURICH", "PERUGIA", "STOCKHOLM", "TUNIS", "EDINBURGH", "VIENNA", "BILLUND", "LEEDS", "BOLOGNA", "VALENCIA", "EAST_MIDLANDS", "PARIS", "TEL_AVIV", "EXETER", "LONDON", "DUSSELDORF", "VILNIUS", "COLOGNE", "SEVILLE", "BARI", "MUNICH", "VENICE", "ROME", "BELFAST", "AMMAN", "GDANSK", "MOSCOW", "KIEV", "MAASTRICHT", "BIRMINGHAM", "WROCLAW", "MADRID", "BUDAPEST", "CAGLIARI", "BOURNEMOUTH", "CHARLEROI", "TURIN", "EINDHOVEN", "AMSTERDAM", "MILAN", "GENEVA", "BERLIN", "LYON", "LAMEZIA", "NAPLES", "GLASGOW", "PISA", "THESSALONIKI", "MARSEILLE", "TRIESTE", "PAPHOS", "LISBON", "CARDIFF", "MANCHESTER", "BRATISLAVA", "SANTIAGO", "PRAGUE", "PESCARA", "TOULOUSE", "KRAKOW", "CATANIA", "LOURDES", "CORK", "PALERMO", "BARCELONA", "COMISO", "LIVERPOOL", "CASABLANCA", "PORTO", "MALAGA", "ALICANTE", "SAINT_PETERSBURG", "KARLSRUHE", "NANTES", "SANDEFJORD", "ABERDEEN", "DUBLIN", "BRISTOL", "ATHENS", "LUXEMBOURG", "RIGA", "GIRONA", "GOTHENBURG", "POZNAN"]
    }, 
    {
        "key": "Newcastle",
        "code": "NCL",
        "destinations": ["LANZAROTE", "PALMA", "TENERIFE", "MALAGA", "ALICANTE", "FARO", "WARSAW", "WROCLAW", "DUBLIN", "MADRID", "GIRONA", "GDANSK"]
    }, 
    {
        "key": "Stuttgart",
        "code": "STR",
        "destinations": ["VERONA", "TENERIFE", "FUERTEVENTURA", "PULA", "KRAKOW", "GRAN_CANARIA", "MILAN", "VENICE", "SPLIT", "VIENNA", "MARRAKESH", "NAPLES", "ALGHERO", "BOLOGNA", "PODGORICA", "ZADAR", "KIEV", "LANZAROTE", "PALMA", "MARSEILLE", "MALAGA", "MANCHESTER", "DUBLIN", "COPENHAGEN", "BUDAPEST", "NICE", "GOTHENBURG"]
    }, 
    {
        "key": "Agadir",
        "code": "AGA",
        "destinations": ["CHARLEROI", "FRANKFURT", "MARSEILLE", "MANCHESTER", "EINDHOVEN", "LONDON", "DUSSELDORF", "MILAN", "VIENNA"]
    }, 
    {"key": "Cuneo", "code": "CUF", "destinations": ["BARI", "CAGLIARI"]}, {
        "key": "Craiova",
        "code": "CRA",
        "destinations": ["VALENCIA"]
    }, 
    {
        "key": "Belfast International",
        "code": "BFS",
        "destinations": ["LANZAROTE", "TENERIFE", "MALAGA", "ALICANTE", "FARO", "MANCHESTER", "LONDON", "KRAKOW", "MILAN", "WARSAW", "BERLIN", "WROCLAW", "MALTA", "GIRONA", "GDANSK"]
    }, 
    {"key": "Paderborn", "code": "PAD", "destinations": ["PALMA"]}, {
        "key": "Rijeka",
        "code": "RJK",
        "destinations": ["CHARLEROI", "BERLIN", "FRANKFURT", "STOCKHOLM", "LONDON"]
    }, 
    {
        "key": "Tours Loire Valley",
        "code": "TUF",
        "destinations": ["PORTO", "DUBLIN", "MARRAKESH", "MARSEILLE", "LONDON"]
    }, 
    {"key": "Biarritz", "code": "BIQ", "destinations": ["CHARLEROI", "DUBLIN", "LONDON"]}, {
        "key": "Billund",
        "code": "BLL",
        "destinations": ["MILAN", "EDINBURGH", "BERLIN", "ROME", "PISA", "PALMA", "MALAGA", "ALICANTE", "MANCHESTER", "LONDON", "DUBLIN", "MALTA", "ATHENS", "BUDAPEST", "PRAGUE", "GIRONA", "POZNAN"]
    }, 
    
    {"key": "Split", "code": "SPU", "destinations": ["STUTTGART", "DUBLIN"]}, {
        "key": "Knock",
        "code": "NOC",
        "destinations": ["LANZAROTE", "TENERIFE", "MALAGA", "ALICANTE", "FARO", "LONDON", "MILAN", "COLOGNE", "BRISTOL", "LIVERPOOL", "GIRONA", "EAST_MIDLANDS"]
    }, 
    {
        "key": "Berlin Schönefeld",
        "code": "SXF",
        "destinations": ["TALLINN", "SANTANDER", "VERONA", "TENERIFE", "FARO", "FUERTEVENTURA", "GRAN_CANARIA", "MILAN", "EDINBURGH", "BRNO", "LAMEZIA", "BILLUND", "NAPLES", "SOFIA", "BOLOGNA", "VALENCIA", "KERRY", "EAST_MIDLANDS", "GLASGOW", "PISA", "ZADAR", "THESSALONIKI", "NIS", "PALMA", "LISBON", "MANCHESTER", "LONDON", "VILNIUS", "COLOGNE", "MALTA", "SEVILLE", "PESCARA", "BRUSSELS", "TOULOUSE", "BARI", "BRINDISI", "KRAKOW", "CATANIA", "VENICE", "PALERMO", "BARCELONA", "COMISO", "MARRAKESH", "BUCHAREST", "ROME", "EILAT", "LAPPEENRANTA", "BELFAST", "PODGORICA", "IBIZA", "PORTO", "KIEV", "LANZAROTE", "MALAGA", "ALICANTE", "DUBLIN", "MADRID", "ATHENS", "BUDAPEST", "RIGA", "CAGLIARI", "BANJA_LUKA"]
    }, 
    {"key": "Munich", "code": "MUC", "destinations": ["MALTA", "PALMA", "ALICANTE", "DUBLIN"]}, {
        "key": "Marrakesh",
        "code": "RAK",
        "destinations": ["HAMBURG", "CHARLEROI", "DOLE", "NUREMBERG", "SANTANDER", "FRANKFURT", "STOCKHOLM", "EINDHOVEN", "MILAN", "BERLIN", "VIENNA", "NAPLES", "TOURS", "VALENCIA", "PISA", "PARIS", "MARSEILLE", "MANCHESTER", "LONDON", "DUSSELDORF", "COLOGNE", "BORDEAUX", "BRATISLAVA", "SEVILLE", "PRAGUE", "PERPIGNAN", "BRUSSELS", "KRAKOW", "CATANIA", "VENICE", "BARCELONA", "COMISO", "LIVERPOOL", "ROME", "MEMMINGEN", "STUTTGART", "PORTO", "MALAGA", "NIMES", "POITIERS", "KARLSRUHE", "SANDEFJORD", "DUBLIN", "MADRID", "ATHENS", "BUDAPEST"]
    }, 
    {
        "key": "Barcelona Girona",
        "code": "GRO",
        "destinations": ["TALLINN", "BOURNEMOUTH", "CHARLEROI", "FRANKFURT", "EINDHOVEN", "MILAN", "EDINBURGH", "BERLIN", "LAMEZIA", "BILLUND", "KAUNAS", "NAPLES", "ALGHERO", "LEEDS", "EAST_MIDLANDS", "GLASGOW", "PISA", "THESSALONIKI", "PARIS", "MANCHESTER", "LONDON", "DUSSELDORF", "BRATISLAVA", "MALTA", "KNOCK", "PESCARA", "RABAT", "BRUSSELS", "KRAKOW", "CORK", "WARSAW", "LIVERPOOL", "MEMMINGEN", "BELFAST", "NEWCASTLE", "ORADEA", "MAASTRICHT", "BIRMINGHAM", "KARLSRUHE", "WROCLAW", "DUBLIN", "BRISTOL", "BUDAPEST", "RIGA", "CAGLIARI", "BREMEN", "POZNAN"]
    }, 
    {"key": "Moscow Sheremetyevo", "code": "SVO", "destinations": ["MALTA"]}, {
        "key": "Venice Treviso",
        "code": "TSF",
        "destinations": ["HAMBURG", "CHARLEROI", "FRANKFURT", "TENERIFE", "STOCKHOLM", "EINDHOVEN", "GRAN_CANARIA", "EDINBURGH", "BERLIN", "LAMEZIA", "NAPLES", "SOFIA", "LEEDS", "VALENCIA", "EAST_MIDLANDS", "PARIS", "MANCHESTER", "LONDON", "VILNIUS", "COLOGNE", "BORDEAUX", "MALTA", "SEVILLE", "PRAGUE", "BRUSSELS", "BARI", "BRINDISI", "KRAKOW", "CATANIA", "PALERMO", "WARSAW", "COMISO", "MARRAKESH", "STUTTGART", "CORFU", "IBIZA", "PORTO", "MALAGA", "FEZ", "DUBLIN", "BUDAPEST", "SOUTHEND_ON_SEA", "CAGLIARI", "BREMEN"]
    }, 
    {
        "key": "Bournemouth",
        "code": "BOH",
        "destinations": ["MURCIA", "PALMA", "TENERIFE", "MALAGA", "ALICANTE", "FARO", "PAPHOS", "KRAKOW", "GRAN_CANARIA", "DUBLIN", "MALTA", "PRAGUE", "GIRONA"]
    }, 
    {
        "key": "Dublin",
        "code": "DUB",
        "destinations": ["TALLINN", "CARCASSONNE", "SANTANDER", "FRANKFURT", "KATOWICE", "DUBROVNIK", "BODRUM", "LA_ROCHELLE", "EDINBURGH", "VIENNA", "BILLUND", "SOFIA", "LEEDS", "BOLOGNA", "VALENCIA", "EAST_MIDLANDS", "PARIS", "PALMA", "LONDON", "VILNIUS", "COLOGNE", "BORDEAUX", "MALTA", "VIGO", "SEVILLE", "BARI", "BRINDISI", "MUNICH", "RZESZOW", "VENICE", "MARRAKESH", "BUCHAREST", "ROME", "MEMMINGEN", "STUTTGART", "DALAMAN", "GDANSK", "BYDGOSZCZ", "BASEL", "MURCIA", "IBIZA", "SALZBURG", "KIEV", "POITIERS", "BIRMINGHAM", "WROCLAW", "MADRID", "BUDAPEST", "CAGLIARI", "BREMEN", "HAMBURG", "BOURNEMOUTH", "CHARLEROI", "TENERIFE", "TURIN", "FARO", "INNSBRUCK", "EINDHOVEN", "FUERTEVENTURA", "AMSTERDAM", "GRAN_CANARIA", "MILAN", "SPLIT", "BERLIN", "SZCZECIN", "LAMEZIA", "KAUNAS", "NAPLES", "REUS", "RODEZ", "TOURS", "GLASGOW", "LUBLIN", "PISA", "ZADAR", "THESSALONIKI", "CHANIA", "BIARRITZ", "GRENOBLE", "PAPHOS", "LISBON", "CARDIFF", "MANCHESTER", "ALMERIA", "BRATISLAVA", "PRAGUE", "BRUSSELS", "TOULOUSE", "KRAKOW", "LOURDES", "PALERMO", "WARSAW", "AARHUS", "BARCELONA", "LIVERPOOL", "NEWCASTLE", "PORTO", "LANZAROTE", "MALAGA", "ALICANTE", "NANTES", "BRISTOL", "ATHENS", "COPENHAGEN", "LUXEMBOURG", "RIGA", "SOUTHEND_ON_SEA", "NICE", "GIRONA", "LODZ", "GOTHENBURG", "POZNAN"]
    }, 
    {"key": "Castellon (Valencia)", "code": "CDT", "destinations": ["SOFIA", "POZNAN", "LONDON"]}, {
        "key": "Zadar",
        "code": "ZAD",
        "destinations": ["HAMBURG", "CHARLEROI", "NUREMBERG", "FRANKFURT", "STOCKHOLM", "EINDHOVEN", "KRAKOW", "MILAN", "BERLIN", "MEMMINGEN", "STUTTGART", "PARIS", "MARSEILLE", "MANCHESTER", "LONDON", "DUSSELDORF", "COLOGNE", "KARLSRUHE", "DUBLIN", "PRAGUE", "GOTHENBURG", "BREMEN", "POZNAN"]
    }, 
    {
        "key": "Perpignan",
        "code": "PGF",
        "destinations": ["CHARLEROI", "BIRMINGHAM", "MARRAKESH", "FRANKFURT", "LONDON"]
    }, 
    {
        "key": "Heraklion Crete",
        "code": "HER",
        "destinations": ["DUSSELDORF", "MILAN", "BERLIN", "VIENNA", "ATHENS", "BOLOGNA"]
    }, 
    {
        "key": "Riga",
        "code": "RIX",
        "destinations": ["CHARLEROI", "FRANKFURT", "MILAN", "EDINBURGH", "BERLIN", "BARCELONA", "VIENNA", "LEEDS", "EAST_MIDLANDS", "GLASGOW", "PAPHOS", "MANCHESTER", "LONDON", "COLOGNE", "DUBLIN", "MALTA", "BURGAS", "PRAGUE", "GIRONA", "BREMEN"]
    }, 
    {
        "key": "Pescara",
        "code": "PSR",
        "destinations": ["CHARLEROI", "IBIZA", "FRANKFURT", "MANCHESTER", "LONDON", "KRAKOW", "DUSSELDORF", "MILAN", "WARSAW", "BERLIN", "MADRID", "BUCHAREST", "MALTA", "ATHENS", "BUDAPEST", "PRAGUE", "GIRONA"]
    }, 
    {
        "key": "Murcia",
        "code": "MJV",
        "destinations": ["GLASGOW", "BOURNEMOUTH", "FRANKFURT", "MANCHESTER", "EINDHOVEN", "LONDON", "BIRMINGHAM", "DUBLIN", "LEEDS", "EAST_MIDLANDS"]
    }, 
    {
        "key": "Oujda",
        "code": "OUD",
        "destinations": ["DUSSELDORF", "CHARLEROI", "TOULOUSE", "BORDEAUX", "PARIS", "MARSEILLE"]
    }, 
    {"key": "Rodez", "code": "RDZ", "destinations": ["CHARLEROI", "DUBLIN", "LONDON"]}, {
        "key": "Aberdeen",
        "code": "ABZ",
        "destinations": ["MALTA", "MALAGA", "ALICANTE", "FARO"]
    }, 
    {
        "key": "Mykonos",
        "code": "JMK",
        "destinations": ["BORDEAUX", "VIENNA", "FRANKFURT", "ATHENS", "BOLOGNA", "PAPHOS"]
    }, 
    {"key": "Lublin", "code": "LUZ", "destinations": ["DUBLIN", "LONDON"]}, {
        "key": "Venice M.Polo",
        "code": "VCE",
        "destinations": ["BRISTOL", "SOUTHEND_ON_SEA", "BARCELONA", "LONDON"]
    }, 
    {"key": "Salzburg", "code": "SZG", "destinations": ["PALMA", "DUBLIN", "LONDON"]}, {
        "key": "Varna",
        "code": "VAR",
        "destinations": ["CHARLEROI"]
    }, 
    {
        "key": "Toulouse",
        "code": "TLS",
        "destinations": ["CHARLEROI", "TANGIER", "OUJDA", "EDINBURGH", "PALERMO", "WARSAW", "BERLIN", "NAPLES", "VALENCIA", "LILLE", "PORTO", "MARSEILLE", "BREST", "ALICANTE", "FEZ", "LISBON", "LONDON", "DUBLIN", "MADRID", "MALTA", "SEVILLE", "LUXEMBOURG", "BUDAPEST"]
    }, 
    {"key": "Erfurt", "code": "ERF", "destinations": ["PALMA"]}, {
        "key": "Kalamata",
        "code": "KLX",
        "destinations": ["PISA", "MILAN", "VIENNA", "SOFIA", "LONDON"]
    }, 
    {
        "key": "Valencia",
        "code": "VLC",
        "destinations": ["HAMBURG", "CHARLEROI", "TANGIER", "SANTANDER", "FRANKFURT", "TENERIFE", "TURIN", "FARO", "EINDHOVEN", "GRAN_CANARIA", "MILAN", "EDINBURGH", "BERLIN", "VIENNA", "LAMEZIA", "NAPLES", "BOLOGNA", "EAST_MIDLANDS", "GLASGOW", "PISA", "ZADAR", "PARIS", "PALMA", "MARSEILLE", "TRIESTE", "LISBON", "MANCHESTER", "LONDON", "DUSSELDORF", "VILNIUS", "COLOGNE", "BORDEAUX", "BRATISLAVA", "SANTIAGO", "MALTA", "SEVILLE", "PRAGUE", "BRUSSELS", "TOULOUSE", "BARI", "KRAKOW", "CATANIA", "VENICE", "PALERMO", "WARSAW", "MARRAKESH", "ROME", "MENORCA", "IBIZA", "PORTO", "KIEV", "LANZAROTE", "FEZ", "NANTES", "DUBLIN", "BRISTOL", "ATHENS", "COPENHAGEN", "BUDAPEST", "CAGLIARI", "CRAIOVA", "BREMEN"]
    }, 
    {
        "key": "Lappeenranta",
        "code": "LPP",
        "destinations": ["MILAN", "THESSALONIKI", "BERLIN", "ATHENS", "BUDAPEST"]
    }, 
    {"key": "Larnaca", "code": "LCA", "destinations": ["BRUSSELS", "VIENNA"]}, {
        "key": "London Southend",
        "code": "SEN",
        "destinations": ["CORFU", "PALMA", "BREST", "MALAGA", "ALICANTE", "FARO", "CLUJ", "MILAN", "VENICE", "BILBAO", "KOSICE", "DUBLIN", "COPENHAGEN", "REUS"]
    }, 
    {
        "key": "Rome Ciampino",
        "code": "CIA",
        "destinations": ["CHARLEROI", "NUREMBERG", "SANTANDER", "FRANKFURT", "STOCKHOLM", "EINDHOVEN", "EDINBURGH", "BERLIN", "BILLUND", "SOFIA", "VALENCIA", "EAST_MIDLANDS", "GLASGOW", "AQABA", "THESSALONIKI", "PARIS", "PALMA", "MARSEILLE", "TRIESTE", "PAPHOS", "LISBON", "MANCHESTER", "LONDON", "DUSSELDORF", "VILNIUS", "COLOGNE", "BORDEAUX", "BRATISLAVA", "MALTA", "SEVILLE", "PRAGUE", "RABAT", "KRAKOW", "LOURDES", "WARSAW", "COMISO", "MARRAKESH", "BUCHAREST", "CORFU", "PORTO", "ALICANTE", "KARLSRUHE", "WROCLAW", "DUBLIN", "MADRID", "ATHENS", "COPENHAGEN", "BUDAPEST", "CAGLIARI", "GOTHENBURG", "POZNAN"]
    }, 
    {
        "key": "Trieste",
        "code": "TRS",
        "destinations": ["CATANIA", "BARI", "COMISO", "MALTA", "ROME", "VALENCIA", "LONDON"]
    }, 
    {
        "key": "Zakynthos", 
        "code": "ZTH", 
        "destinations": ["MILAN", "VIENNA"]
    }, 
    {
        "key": "Nador",
        "code": "NDR",
        "destinations": ["DUSSELDORF", "CHARLEROI", "BORDEAUX", "PARIS", "BARCELONA", "FRANKFURT", "MARSEILLE"]
    }, 
    {
        "key": "Paris Beauvais",
        "code": "BVA",
        "destinations": ["FIGARI", "TANGIER", "BEZIERS", "TENERIFE", "FARO", "STOCKHOLM", "OUJDA", "MILAN", "VIENNA", "SOFIA", "BOLOGNA", "VALENCIA", "PISA", "ZADAR", "THESSALONIKI", "PALMA", "LISBON", "VILNIUS", "BRATISLAVA", "NADOR", "MALTA", "SEVILLE", "ZARAGOZA", "PRAGUE", "RABAT", "BARI", "BRINDISI", "KRAKOW", "VENICE", "PALERMO", "WARSAW", "BARCELONA", "MARRAKESH", "ROME", "PORTO", "ALICANTE", "FEZ", "WROCLAW", "DUBLIN", "MADRID", "BUDAPEST", "CAGLIARI", "GIRONA", "POZNAN"]
    }, 
    {
        "key": "Essaouira",
        "code": "ESU",
        "destinations": ["DUSSELDORF", "BRUSSELS", "MARSEILLE", "LONDON"]
    }, 
    {
        "key": "Glasgow",
        "code": "GLA",
        "destinations": ["CHARLEROI", "DERRY", "CARCASSONNE", "KRAKOW", "GRAN_CANARIA", "WARSAW", "BERLIN", "SOFIA", "VALENCIA", "BYDGOSZCZ", "CHANIA", "LANZAROTE", "MALAGA", "ALICANTE", "LISBON", "LONDON", "WROCLAW", "DUBLIN", "MADRID", "RIGA", "PALANGA"]
    }, 
    {
        "key": "Vigo",
        "code": "VGO",
        "destinations": ["MILAN", "EDINBURGH", "BARCELONA", "DUBLIN", "BOLOGNA", "LONDON"]
    }, 
    {
        "key": "Bratislava",
        "code": "BTS",
        "destinations": ["CHARLEROI", "EINDHOVEN", "CATANIA", "MILAN", "EDINBURGH", "MARRAKESH", "ROME", "ALGHERO", "EILAT", "LEEDS", "BOLOGNA", "VALENCIA", "DALAMAN", "CORFU", "PORTO", "KIEV", "THESSALONIKI", "PARIS", "NIS", "PALMA", "MALAGA", "PAPHOS", "MANCHESTER", "LONDON", "BIRMINGHAM", "DUBLIN", "MADRID", "MALTA", "ATHENS", "BURGAS", "CAGLIARI", "GIRONA"]
    }, 
    {"key": "Münster", "code": "FMO", "destinations": ["PALMA", "VIENNA"]}, {
        "key": "Manchester",
        "code": "MAN",
        "destinations": ["HAMBURG", "CHARLEROI", "CARCASSONNE", "NUREMBERG", "BEZIERS", "FRANKFURT", "KATOWICE", "TENERIFE", "FARO", "EINDHOVEN", "FUERTEVENTURA", "GRAN_CANARIA", "MILAN", "BERLIN", "LAMEZIA", "BILLUND", "NAPLES", "REUS", "BOLOGNA", "VALENCIA", "ZADAR", "SHANNON", "THESSALONIKI", "CHANIA", "PALMA", "MARSEILLE", "RHODES", "LISBON", "ALMERIA", "COLOGNE", "BORDEAUX", "BRATISLAVA", "MALTA", "SEVILLE", "PRAGUE", "PESCARA", "BARI", "BRINDISI", "LIMOGES", "RZESZOW", "KRAKOW", "VENICE", "PALERMO", "WARSAW", "BARCELONA", "MARRAKESH", "ROME", "BELFAST", "STUTTGART", "AGADIR", "GDANSK", "MURCIA", "PONTA_DELGADA", "CORFU", "IBIZA", "PORTO", "KIEV", "LANZAROTE", "MALAGA", "ALICANTE", "POITIERS", "NANTES", "SANDEFJORD", "WROCLAW", "DUBLIN", "MADRID", "ATHENS", "BUDAPEST", "RIGA", "CAGLIARI", "GIRONA", "GOTHENBURG"]
    }, 
    {
        "key": "Oslo Torp",
        "code": "TRF",
        "destinations": ["HAMBURG", "KATOWICE", "TENERIFE", "MALAGA", "ALICANTE", "MANCHESTER", "LONDON", "KRAKOW", "GRAN_CANARIA", "MILAN", "WARSAW", "WROCLAW", "VIENNA", "MARRAKESH", "MALTA", "GDANSK", "POZNAN"]
    }, 
    {
        "key": "Shannon",
        "code": "SNN",
        "destinations": ["SANTANDER", "TENERIFE", "FARO", "FUERTEVENTURA", "KRAKOW", "EDINBURGH", "WARSAW", "LIVERPOOL", "KAUNAS", "ROME", "REUS", "EAST_MIDLANDS", "IBIZA", "LANZAROTE", "PALMA", "MALAGA", "ALICANTE", "MANCHESTER", "LONDON", "BIRMINGHAM", "WROCLAW", "BRISTOL"]
    }, 
    {
        "key": "Tenerife South",
        "code": "TFS",
        "destinations": ["BOURNEMOUTH", "CHARLEROI", "SANTANDER", "FRANKFURT", "STOCKHOLM", "EINDHOVEN", "MILAN", "EDINBURGH", "VITORIA-GASTEIZ", "BERLIN", "VIENNA", "LAMEZIA", "NAPLES", "LEEDS", "BOLOGNA", "VALENCIA", "EAST_MIDLANDS", "GLASGOW", "PISA", "SHANNON", "PARIS", "CARDIFF", "MANCHESTER", "LONDON", "DUSSELDORF", "COLOGNE", "SANTIAGO", "KNOCK", "SEVILLE", "PRAGUE", "BARI", "BRINDISI", "KRAKOW", "CATANIA", "CORK", "VENICE", "PALERMO", "WARSAW", "BARCELONA", "LIVERPOOL", "MEMMINGEN", "BELFAST", "STUTTGART", "NEWCASTLE", "PORTO", "BIRMINGHAM", "SANDEFJORD", "WROCLAW", "DUBLIN", "MADRID", "BRISTOL", "COPENHAGEN", "CAGLIARI", "BREMEN"]
    }, 
    {
        "key": "Edinburgh",
        "code": "EDI",
        "destinations": ["TALLINN", "HAMBURG", "CHARLEROI", "DERRY", "CARCASSONNE", "SANTANDER", "BEZIERS", "FRANKFURT", "KATOWICE", "TENERIFE", "FARO", "STOCKHOLM", "EINDHOVEN", "FUERTEVENTURA", "GRAN_CANARIA", "MILAN", "BERLIN", "SZCZECIN", "VIENNA", "BILLUND", "KAUNAS", "NAPLES", "SOFIA", "BOLOGNA", "VALENCIA", "PISA", "SHANNON", "PALMA", "MARSEILLE", "LISBON", "LONDON", "DUSSELDORF", "BORDEAUX", "BRATISLAVA", "MALTA", "VIGO", "SEVILLE", "PRAGUE", "TOULOUSE", "BARI", "BRINDISI", "KRAKOW", "CATANIA", "CORK", "VENICE", "PALERMO", "WARSAW", "BARCELONA", "ROME", "MEMMINGEN", "GDANSK", "CORFU", "IBIZA", "PORTO", "LANZAROTE", "MALAGA", "ALICANTE", "POITIERS", "KARLSRUHE", "NANTES", "WROCLAW", "DUBLIN", "COPENHAGEN", "LUXEMBOURG", "BUDAPEST", "RIGA", "CAGLIARI", "GIRONA", "GOTHENBURG", "POZNAN"]
    }, 
    {
        "key": "Fuerteventura",
        "code": "FUE",
        "destinations": ["CHARLEROI", "MILAN", "EDINBURGH", "WARSAW", "BERLIN", "BARCELONA", "VIENNA", "LIVERPOOL", "LEEDS", "BOLOGNA", "STUTTGART", "EAST_MIDLANDS", "GLASGOW", "PISA", "SHANNON", "MANCHESTER", "LONDON", "DUSSELDORF", "BIRMINGHAM", "DUBLIN", "MADRID", "SEVILLE", "BREMEN"]
    }, 
    {
        "key": "Kefalonia",
        "code": "EFL",
        "destinations": ["PISA", "MILAN", "BERLIN", "FRANKFURT", "LONDON"]
    }, 
    {
        "key": "Vilnius",
        "code": "VNO",
        "destinations": ["CHARLEROI", "NUREMBERG", "BARI", "FRANKFURT", "BRINDISI", "CATANIA", "MILAN", "VENICE", "PALERMO", "BERLIN", "BARCELONA", "VIENNA", "LIVERPOOL", "NAPLES", "ROME", "KHARKIV", "TRAPANI", "LEEDS", "AMMAN", "VALENCIA", "CORFU", "KIEV", "PARIS", "CHANIA", "TEL_AVIV", "LONDON", "OSLO", "COLOGNE", "BIRMINGHAM", "DUBLIN", "MADRID", "MALTA", "ATHENS", "CAGLIARI", "BREMEN"]
    }, 
    {
        "key": "Tallinn",
        "code": "TLL",
        "destinations": ["PAPHOS", "LONDON", "DUSSELDORF", "MILAN", "EDINBURGH", "BERLIN", "DUBLIN", "MALTA", "GIRONA", "BREMEN"]
    }, 
    {
        "key": "Rzeszow",
        "code": "RZE",
        "destinations": ["GLASGOW", "CORFU", "MANCHESTER", "LONDON", "DUBLIN", "BRISTOL", "ATHENS", "BURGAS", "EAST_MIDLANDS"]
    }, 
    {
        "key": "Bremen",
        "code": "BRE",
        "destinations": ["TALLINN", "BARI", "TENERIFE", "FARO", "STOCKHOLM", "FUERTEVENTURA", "CATANIA", "TAMPERE", "MILAN", "VENICE", "PALERMO", "LAMEZIA", "NAPLES", "TRAPANI", "EILAT", "VALENCIA", "ZADAR", "PORTO", "THESSALONIKI", "CHANIA", "PALMA", "MALAGA", "ALICANTE", "FEZ", "LISBON", "LONDON", "VILNIUS", "DUBLIN", "RIGA", "CAGLIARI", "GIRONA"]
    }, 
    {
        "key": "Valladolid",
        "code": "VLL",
        "destinations": ["PALMA", "SEVILLE", "BARCELONA"]
    }, 
    {"key": "Stockholm Västerås", "code": "VST", "destinations": ["MALAGA", "ALICANTE", "LONDON"]}, {
        "key": "Catania",
        "code": "CTA",
        "destinations": ["CHARLEROI", "FRANKFURT", "KATOWICE", "TENERIFE", "TURIN", "PERUGIA", "EINDHOVEN", "MILAN", "EDINBURGH", "BERLIN", "VIENNA", "BOLOGNA", "VALENCIA", "EAST_MIDLANDS", "PISA", "PALMA", "MARSEILLE", "TRIESTE", "RHODES", "VILNIUS", "BRATISLAVA", "MALTA", "SEVILLE", "PRAGUE", "BRUSSELS", "BARI", "KRAKOW", "VENICE", "BARCELONA", "MARRAKESH", "ROME", "IBIZA", "LANZAROTE", "MALAGA", "ALICANTE", "MADRID", "BRISTOL", "ATHENS", "BUDAPEST", "CAGLIARI", "BREMEN"]
    }, 
    {
        "key": "Frankfurt Hahn",
        "code": "HHN",
        "destinations": ["TANGIER", "TENERIFE", "FARO", "PULA", "GRAN_CANARIA", "EDINBURGH", "LAMEZIA", "NAPLES", "ALGHERO", "NEWQUAY", "TRAPANI", "REUS", "KERRY", "PISA", "THESSALONIKI", "CHANIA", "PALMA", "LISBON", "LONDON", "VILNIUS", "NADOR", "SANTIAGO", "BURGAS", "PESCARA", "BARI", "MONTPELLIER", "PALERMO", "COMISO", "MARRAKESH", "ROME", "EILAT", "PONTA_DELGADA", "CORFU", "IBIZA", "KIEV", "LANZAROTE", "MALAGA", "ALICANTE", "FEZ", "JEREZ", "DUBLIN", "RIGA", "CAGLIARI", "GIRONA"]
    }, 
    {
        "key": "Comiso",
        "code": "CIY",
        "destinations": ["CHARLEROI", "FRANKFURT", "TURIN", "PERUGIA", "EINDHOVEN", "MILAN", "VENICE", "WARSAW", "BERLIN", "BARCELONA", "MARRAKESH", "ROME", "BOLOGNA", "PISA", "ALICANTE", "TRIESTE", "LONDON", "DUSSELDORF", "MADRID", "MALTA", "ATHENS", "SEVILLE", "CAGLIARI"]
    }, 
    {
        "key": "Burgas",
        "code": "BOJ",
        "destinations": ["TEL_AVIV", "FRANKFURT", "RZESZOW", "KRAKOW", "DUSSELDORF", "MILAN", "WARSAW", "BRATISLAVA", "KAUNAS", "MEMMINGEN", "RIGA"]
    },
    {
        "key": "Eilat Ramon",
        "code": "ETM",
        "destinations": ["KRAKOW", "MILAN", "WARSAW", "BERLIN", "BRATISLAVA", "KAUNAS", "BUDAPEST", "PRAGUE", "POZNAN"]
    }, 
    {
        "key": "Cagliari",
        "code": "CAG",
        "destinations": ["HAMBURG", "CHARLEROI", "NUREMBERG", "VERONA", "FRANKFURT", "TENERIFE", "GRAN_CANARIA", "MILAN", "EDINBURGH", "BERLIN", "TRAPANI", "BOLOGNA", "VALENCIA", "PISA", "PARIS", "LISBON", "MANCHESTER", "LONDON", "DUSSELDORF", "VILNIUS", "BRATISLAVA", "SANTIAGO", "MALTA", "SEVILLE", "PRAGUE", "BARI", "KRAKOW", "CATANIA", "VENICE", "WARSAW", "BARCELONA", "COMISO", "ROME", "IBIZA", "PORTO", "LANZAROTE", "CUNEO", "MALAGA", "ALICANTE", "PARMA", "KARLSRUHE", "DUBLIN", "MADRID", "BRISTOL", "ATHENS", "BUDAPEST", "GIRONA", "BREMEN"]
    }, 
    {
        "key": "Lviv",
        "code": "LWO",
        "destinations": ["KRAKOW", "DUSSELDORF", "WARSAW", "MEMMINGEN", "LONDON"]
    }, 
    {"key": "Ancona", "code": "AOI", "destinations": ["DUSSELDORF", "CHARLEROI", "LONDON"]}, {
        "key": "Kyiv",
        "code": "KBP",
        "destinations": ["NUREMBERG", "FRANKFURT", "KATOWICE", "STOCKHOLM", "KRAKOW", "WARSAW", "BERLIN", "BARCELONA", "VIENNA", "SOFIA", "STUTTGART", "VALENCIA", "GDANSK", "BYDGOSZCZ", "PAPHOS", "MANCHESTER", "LONDON", "DUSSELDORF", "VILNIUS", "KARLSRUHE", "WROCLAW", "BRATISLAVA", "DUBLIN", "MADRID", "MALTA", "ATHENS", "POZNAN"]
    }, 
    {"key": "Geneva", "code": "GVA", "destinations": ["MALTA"]}, {
        "key": "Parma",
        "code": "PMF",
        "destinations": ["CAGLIARI"]
    }, 
    {"key": "Palanga", "code": "PLQ", "destinations": ["GLASGOW", "LONDON"]}, {
        "key": "Graz",
        "code": "GRZ",
        "destinations": ["PALMA"]
    }, 
    {
        "key": "Cologne",
        "code": "CGN",
        "destinations": ["KATOWICE", "TENERIFE", "FARO", "GRAN_CANARIA", "MILAN", "VITORIA-GASTEIZ", "BERLIN", "LAMEZIA", "KAUNAS", "NAPLES", "SOFIA", "BOLOGNA", "VALENCIA", "ZADAR", "AQABA", "PALMA", "LISBON", "MANCHESTER", "LONDON", "VILNIUS", "BORDEAUX", "MALTA", "KNOCK", "SEVILLE", "BARI", "BRINDISI", "VENICE", "PALERMO", "WARSAW", "BARCELONA", "MARRAKESH", "ROME", "CORFU", "IBIZA", "PORTO", "MALAGA", "ALICANTE", "DUBLIN", "MADRID", "BRISTOL", "COPENHAGEN", "RIGA"]
    }, 
    {"key": "Pardubice", "code": "PED", "destinations": ["ALICANTE", "LONDON"]}, {
        "key": "Brive",
        "code": "BVE",
        "destinations": ["PORTO", "LONDON"]
    }, {"key": "Newquay Cornwall", "code": "NQY", "destinations": ["FRANKFURT", "ALICANTE", "FARO"]}, {
        "key": "Malaga",
        "code": "AGP",
        "destinations": ["HAMBURG", "BOURNEMOUTH", "CHARLEROI", "NUREMBERG", "SANTANDER", "FRANKFURT", "HAUGESUND", "STOCKHOLM", "EINDHOVEN", "AMSTERDAM", "MILAN", "EDINBURGH", "BERLIN", "VIENNA", "LAMEZIA", "BILLUND", "NAPLES", "TETOUAN", "LEEDS", "BOLOGNA", "EAST_MIDLANDS", "GLASGOW", "PISA", "SHANNON", "THESSALONIKI", "PALMA", "MARSEILLE", "LISBON", "CARDIFF", "MANCHESTER", "EXETER", "LONDON", "DUSSELDORF", "COLOGNE", "BORDEAUX", "BRATISLAVA", "SANTIAGO", "MALTA", "KNOCK", "PRAGUE", "BRUSSELS", "KRAKOW", "CATANIA", "CORK", "VENICE", "PALERMO", "WARSAW", "BARCELONA", "MARRAKESH", "LIVERPOOL", "ROME", "MEMMINGEN", "BELFAST", "STUTTGART", "NEWCASTLE", "IBIZA", "PORTO", "BIRMINGHAM", "KARLSRUHE", "SANDEFJORD", "WROCLAW", "ABERDEEN", "DUBLIN", "BRISTOL", "ATHENS", "COPENHAGEN", "DORTMUND", "BUDAPEST", "SOUTHEND_ON_SEA", "CAGLIARI", "GOTHENBURG", "BREMEN"]
    }, 
    {
        "key": "Marseille",
        "code": "MRS",
        "destinations": ["CHARLEROI", "ESSAOUIRA", "TANGIER", "FRANKFURT", "STRASBOURG", "FARO", "OUJDA", "EINDHOVEN", "MILAN", "EDINBURGH", "VIENNA", "NAPLES", "SOFIA", "BOLOGNA", "TOURS", "VALENCIA", "ZADAR", "TEL_AVIV", "PALMA", "BREST", "LISBON", "MANCHESTER", "LONDON", "BORDEAUX", "NADOR", "MALTA", "SEVILLE", "PRAGUE", "RABAT", "TOULOUSE", "KRAKOW", "CATANIA", "PALERMO", "WARSAW", "MARRAKESH", "BUCHAREST", "ROME", "STUTTGART", "AGADIR", "LILLE", "IBIZA", "PORTO", "MALAGA", "ALICANTE", "FEZ", "OUARZAZATE", "POITIERS", "NANTES", "MADRID", "ATHENS", "COPENHAGEN", "BUDAPEST"]
    }, 
    {
        "key": "Rostock", 
        "code": "RLG", 
        "destinations": ["PALMA"]
    }, 
    {
        "key": "Trapani",
        "code": "TPS",
        "destinations": ["PISA", "FRANKFURT", "VILNIUS", "MILAN", "KARLSRUHE", "MADRID", "ATHENS", "PRAGUE", "BOLOGNA", "CAGLIARI", "BREMEN"]
    }, 
    {
        "key": "Almeria",
        "code": "LEI",
        "destinations": ["CHARLEROI", "MILAN", "DUBLIN", "MANCHESTER", "LONDON"]
    }, 
    {"key": "Santorini", "code": "JTR", "destinations": ["FRANKFURT", "ATHENS", "VIENNA"]}, {
        "key": "Athens",
        "code": "ATH",
        "destinations": ["CHARLEROI", "NUREMBERG", "FRANKFURT", "KATOWICE", "TURIN", "FARO", "MYKONOS", "EINDHOVEN", "MILAN", "BERLIN", "VIENNA", "LAMEZIA", "BILLUND", "NAPLES", "SOFIA", "TRAPANI", "BOLOGNA", "VALENCIA", "AQABA", "THESSALONIKI", "TEL_AVIV", "MARSEILLE", "MANCHESTER", "LONDON", "VILNIUS", "BRATISLAVA", "MALTA", "ZARAGOZA", "PRAGUE", "PESCARA", "SANTORINI", "BARI", "BRINDISI", "RZESZOW", "KRAKOW", "CATANIA", "PALERMO", "WARSAW", "BARCELONA", "COMISO", "MARRAKESH", "HERAKLION", "BUCHAREST", "ROME", "MEMMINGEN", "LAPPEENRANTA", "GDANSK", "IBIZA", "KIEV", "LANZAROTE", "MALAGA", "ALICANTE", "KARLSRUHE", "WROCLAW", "DUBLIN", "MADRID", "BRISTOL", "BUDAPEST", "CAGLIARI", "LODZ", "POZNAN"]
    }, 
    {
        "key": "Faro",
        "code": "FAO",
        "destinations": ["HAMBURG", "BOURNEMOUTH", "CHARLEROI", "NUREMBERG", "FRANKFURT", "STOCKHOLM", "EINDHOVEN", "MILAN", "EDINBURGH", "BERLIN", "VIENNA", "NEWQUAY", "LEEDS", "BOLOGNA", "VALENCIA", "KERRY", "EAST_MIDLANDS", "GLASGOW", "SHANNON", "PARIS", "MARSEILLE", "CARDIFF", "MANCHESTER", "LONDON", "DUSSELDORF", "COLOGNE", "BORDEAUX", "KNOCK", "BRUSSELS", "BARI", "KRAKOW", "CORK", "WARSAW", "BARCELONA", "LIVERPOOL", "MEMMINGEN", "BELFAST", "NEWCASTLE", "PORTO", "BIRMINGHAM", "WROCLAW", "ABERDEEN", "DUBLIN", "BRISTOL", "ATHENS", "BUDAPEST", "SOUTHEND_ON_SEA", "BREMEN"]
    }, 
    {
        "key": "Alghero",
        "code": "AHO",
        "destinations": ["PISA", "CHARLEROI", "PORTO", "FRANKFURT", "EINDHOVEN", "LONDON", "MILAN", "BERLIN", "BRATISLAVA", "DORTMUND", "MEMMINGEN", "BOLOGNA", "STUTTGART", "GIRONA"]
    }, 
    {"key": "Hannover", "code": "HAJ", "destinations": ["PALMA"]}, {
        "key": "Beziers",
        "code": "BZR",
        "destinations": ["DUSSELDORF", "CHARLEROI", "EDINBURGH", "PARIS", "BRISTOL", "STOCKHOLM", "MANCHESTER", "LONDON"]
    }, 
    {
        "key": "Birmingham",
        "code": "BHX",
        "destinations": ["PERPIGNAN", "VERONA", "KATOWICE", "TENERIFE", "FARO", "FUERTEVENTURA", "KRAKOW", "GRAN_CANARIA", "CORK", "WARSAW", "BARCELONA", "VIENNA", "SOFIA", "REUS", "GDANSK", "BYDGOSZCZ", "SHANNON", "MURCIA", "CORFU", "IBIZA", "PORTO", "CHANIA", "LANZAROTE", "PALMA", "MALAGA", "ALICANTE", "VILNIUS", "BRATISLAVA", "DUBLIN", "MADRID", "MALTA", "GIRONA"]
    }, 
    {
        "key": "Tunis", 
        "code": "TUN", 
        "destinations": ["MALTA"]
    }, 
    {
        "key": "Amman Jordan",
        "code": "AMM",
        "destinations": ["BRUSSELS", "THESSALONIKI", "PAPHOS", "KRAKOW", "VILNIUS", "MILAN", "WARSAW", "VIENNA", "BUCHAREST", "MALTA", "BUDAPEST", "MEMMINGEN", "PRAGUE", "BOLOGNA"]
    }, 
    {
        "key": "Odesa International",
        "code": "ODS",
        "destinations": ["KRAKOW", "BERLIN", "WROCLAW", "KATOWICE", "GDANSK", "POZNAN"]
    }, 
    {"key": "Oslo", "code": "OSL", "destinations": ["VILNIUS", "LONDON"]}, {
        "key": "Paphos",
        "code": "PFO",
        "destinations": ["TALLINN", "BOURNEMOUTH", "KATOWICE", "MYKONOS", "STOCKHOLM", "KRAKOW", "MILAN", "BERLIN", "VIENNA", "LIVERPOOL", "BUCHAREST", "KAUNAS", "SOFIA", "ROME", "AMMAN", "KIEV", "THESSALONIKI", "CHANIA", "TEL_AVIV", "LONDON", "BRATISLAVA", "DUBLIN", "MALTA", "BUDAPEST", "RIGA"]
    }, 
    {"key": "Exeter", "code": "EXT", "destinations": ["MALTA", "NAPLES", "MALAGA", "ALICANTE"]}, {
        "key": "Bristol",
        "code": "BRS",
        "destinations": ["BERGERAC", "BEZIERS", "TENERIFE", "FARO", "GRAN_CANARIA", "MILAN", "LAMEZIA", "KAUNAS", "NAPLES", "SOFIA", "REUS", "BOLOGNA", "VALENCIA", "SHANNON", "CHANIA", "PALMA", "COLOGNE", "MALTA", "KNOCK", "SEVILLE", "BARI", "BRINDISI", "LIMOGES", "RZESZOW", "KRAKOW", "CATANIA", "VENICE", "PALERMO", "WARSAW", "BUCHAREST", "GDANSK", "IBIZA", "LANZAROTE", "MALAGA", "ALICANTE", "WROCLAW", "DUBLIN", "ATHENS", "BUDAPEST", "CAGLIARI", "GIRONA", "POZNAN"]
    }, 
    {
        "key": "Bydgoszcz",
        "code": "BZG",
        "destinations": ["GLASGOW", "DUSSELDORF", "BIRMINGHAM", "KIEV", "DUBLIN", "LONDON"]
    }, 
    {
        "key": "Dubrovnik", 
        "code": "DBV", 
        "destinations": ["DUBLIN"]
    }, 
    {
        "key": "Nantes",
        "code": "NTE",
        "destinations": ["MARSEILLE", "FEZ", "MANCHESTER", "LONDON", "EDINBURGH", "BORDEAUX", "DUBLIN", "MALTA", "NAPLES", "SEVILLE", "VALENCIA", "EAST_MIDLANDS"]
    }, {
        "key": "Aqaba Jordan",
        "code": "AQJ",
        "destinations": ["MILAN", "COLOGNE", "SOFIA", "ATHENS", "ROME"]
    }, 
    {"key": "Kavala International", "code": "KVA", "destinations": ["POZNAN"]}, {
        "key": "Clermont",
        "code": "CFE",
        "destinations": ["PORTO", "LISBON", "LONDON"]
    }, 
    {
        "key": "Nuremberg",
        "code": "NUE",
        "destinations": ["BARI", "FARO", "KRAKOW", "MILAN", "PALERMO", "MARRAKESH", "KAUNAS", "NAPLES", "ROME", "PISA", "ZADAR", "PORTO", "KIEV", "THESSALONIKI", "TEL_AVIV", "PALMA", "MALAGA", "ALICANTE", "MANCHESTER", "LONDON", "VILNIUS", "MADRID", "CROTONE", "MALTA", "ATHENS", "COPENHAGEN", "BUDAPEST", "CAGLIARI"]
    }, 
    {
        "key": "Ibiza",
        "code": "IBZ",
        "destinations": ["CHARLEROI", "FRANKFURT", "TURIN", "EINDHOVEN", "MILAN", "EDINBURGH", "BERLIN", "VIENNA", "LAMEZIA", "NAPLES", "LEEDS", "BOLOGNA", "VALENCIA", "EAST_MIDLANDS", "GLASGOW", "PISA", "SHANNON", "MARSEILLE", "MANCHESTER", "LONDON", "DUSSELDORF", "COLOGNE", "SEVILLE", "PESCARA", "BARI", "BRINDISI", "CATANIA", "VENICE", "PALERMO", "WARSAW", "BARCELONA", "LIVERPOOL", "ROME", "MALAGA", "BIRMINGHAM", "DUBLIN", "MADRID", "BRISTOL", "ATHENS", "BUDAPEST", "CAGLIARI"]
    }, 
    {
        "key": "Luxembourg",
        "code": "LUX",
        "destinations": ["PORTO", "TOULOUSE", "PALMA", "LISBON", "LONDON", "MILAN", "EDINBURGH", "BERLIN", "BARCELONA", "DUBLIN", "MADRID", "MALTA", "SEVILLE", "BUDAPEST"]
    }, 
    {
        "key": "Cork",
        "code": "ORK",
        "destinations": ["CARCASSONNE", "SANTANDER", "KATOWICE", "TENERIFE", "FARO", "GRAN_CANARIA", "MILAN", "EDINBURGH", "LIVERPOOL", "NAPLES", "REUS", "GDANSK", "LANZAROTE", "PALMA", "MALAGA", "ALICANTE", "LONDON", "BIRMINGHAM", "BORDEAUX", "WROCLAW", "MALTA", "BUDAPEST", "GIRONA", "POZNAN"]
    }, 
    {"key": "Montpellier", "code": "MPL", "destinations": ["FRANKFURT", "CHARLEROI"]}, {
        "key": "Santander",
        "code": "SDR",
        "destinations": ["CHARLEROI", "TENERIFE", "GRAN_CANARIA", "CORK", "MILAN", "EDINBURGH", "BERLIN", "BARCELONA", "MARRAKESH", "ROME", "BOLOGNA", "VALENCIA", "SHANNON", "LANZAROTE", "PALMA", "MALAGA", "LONDON", "DUSSELDORF", "DUBLIN", "BUDAPEST"]
    }, 
    {
        "key": "Poitiers",
        "code": "PIS",
        "destinations": ["EDINBURGH", "PORTO", "DUBLIN", "MARRAKESH", "MARSEILLE", "MANCHESTER", "LONDON"]
    }, 
    {"key": "Dole", "code": "DLE", "destinations": ["FEZ", "PORTO", "MARRAKESH", "LONDON"]}, {
        "key": "Bucharest",
        "code": "OTP",
        "destinations": ["CHARLEROI", "TIMISOARA", "MILAN", "PALERMO", "BERLIN", "VIENNA", "ROME", "BOLOGNA", "AMMAN", "PISA", "CHANIA", "TEL_AVIV", "MARSEILLE", "PAPHOS", "LONDON", "DUBLIN", "MADRID", "BRISTOL", "ATHENS", "PESCARA"]
    }, 
    {
        "key": "Kaunas",
        "code": "KUN",
        "destinations": ["NUREMBERG", "MILAN", "EDINBURGH", "NAPLES", "EILAT", "BOLOGNA", "RIMINI", "SHANNON", "TEL_AVIV", "PALMA", "ALICANTE", "PAPHOS", "RHODES", "LONDON", "COLOGNE", "DUBLIN", "BRISTOL", "COPENHAGEN", "BURGAS", "GIRONA"]
    }, {
        "key": "Plovdiv",
        "code": "PDV",
        "destinations": ["CHARLEROI", "MILAN", "LONDON"]
    }, {
        "key": "Vitoria (Basque Country)",
        "code": "VIT",
        "destinations": ["MILAN", "COLOGNE", "PALMA", "TENERIFE", "SEVILLE"]
    }, {
        "key": "Menorca",
        "code": "MAH",
        "destinations": ["VALENCIA", "BARCELONA", "EAST_MIDLANDS", "MADRID"]
    }, {
        "key": "Terceira Lajes",
        "code": "TER",
        "destinations": ["MILAN", "PORTO", "KARLSRUHE", "BARCELONA", "LISBON"]
    }, {"key": "Dalaman", "code": "DLM", "destinations": ["BRATISLAVA", "DUBLIN"]}, {
        "key": "Poznan",
        "code": "POZ",
        "destinations": ["ODESSA", "STOCKHOLM", "CORK", "MILAN", "EDINBURGH", "LIVERPOOL", "BILLUND", "ROME", "KHARKIV", "EILAT", "ZADAR", "KAVALA", "CORFU", "CASTELLON", "KIEV", "PARIS", "TEL_AVIV", "ALICANTE", "LONDON", "SANDEFJORD", "DUBLIN", "MADRID", "BRISTOL", "MALTA", "ATHENS", "BUDAPEST", "GIRONA"]
    }, {
        "key": "Verona",
        "code": "VRN",
        "destinations": ["HAMBURG", "CHARLEROI", "BRINDISI", "LONDON", "BIRMINGHAM", "PALERMO", "BERLIN", "MADRID", "SEVILLE", "STUTTGART", "CAGLIARI"]
    }, {
        "key": "Dusseldorf Int.",
        "code": "DUS",
        "destinations": ["TENERIFE", "FARO", "INNSBRUCK", "STOCKHOLM", "FUERTEVENTURA", "GRAN_CANARIA", "MILAN", "PALERMO", "MARRAKESH", "HERAKLION", "NAPLES", "CORFU", "IBIZA", "LANZAROTE", "PALMA", "MALAGA", "ALICANTE", "KOS", "RHODES", "MALTA", "COPENHAGEN"]
    }, {
        "key": "East Midlands",
        "code": "EMA",
        "destinations": ["CARCASSONNE", "BERGERAC", "TENERIFE", "FARO", "FUERTEVENTURA", "GRAN_CANARIA", "MILAN", "BERLIN", "LAMEZIA", "NAPLES", "REUS", "VALENCIA", "PISA", "SHANNON", "DINARD", "CHANIA", "PALMA", "RHODES", "MALTA", "KNOCK", "SEVILLE", "LIMOGES", "RZESZOW", "KRAKOW", "CATANIA", "VENICE", "PALERMO", "WARSAW", "BARCELONA", "ROME", "MENORCA", "MURCIA", "CORFU", "IBIZA", "LANZAROTE", "MALAGA", "ALICANTE", "NANTES", "WROCLAW", "DUBLIN", "BUDAPEST", "RIGA", "GIRONA", "LODZ"]
    }, {"key": "Nice", "code": "NCE", "destinations": ["STUTTGART", "DUBLIN", "LONDON"]}, {
        "key": "Olsztyn - Mazury",
        "code": "SZY",
        "destinations": ["LONDON"]
    }, {
        "key": "Ovda",
        "code": "VDA",
        "destinations": ["CHARLEROI", "FRANKFURT", "KRAKOW", "DUSSELDORF", "MILAN", "KARLSRUHE", "WARSAW", "BERLIN", "BRATISLAVA", "KAUNAS", "BUDAPEST", "PRAGUE", "BREMEN", "GDANSK", "POZNAN"]
    }, {
        "key": "Ponta Delgada",
        "code": "PDL",
        "destinations": ["BRUSSELS", "PORTO", "FRANKFURT", "LISBON", "MANCHESTER", "LONDON", "DUSSELDORF", "MILAN", "BARCELONA"]
    }, {"key": "Jerez", "code": "XRY", "destinations": ["FRANKFURT", "BARCELONA", "LONDON"]}, {
        "key": "Alicante",
        "code": "ALC",
        "destinations": ["HAMBURG", "BOURNEMOUTH", "CHARLEROI", "NUREMBERG", "FRANKFURT", "HAUGESUND", "STOCKHOLM", "EINDHOVEN", "MILAN", "EDINBURGH", "BERLIN", "VIENNA", "LAMEZIA", "BILLUND", "KAUNAS", "NAPLES", "NEWQUAY", "LEEDS", "BOLOGNA", "KERRY", "EAST_MIDLANDS", "GLASGOW", "SHANNON", "THESSALONIKI", "PARIS", "PALMA", "MARSEILLE", "MANCHESTER", "EXETER", "LONDON", "DUSSELDORF", "VAXJO", "COLOGNE", "BORDEAUX", "SANTIAGO", "MALTA", "KNOCK", "SEVILLE", "BRUSSELS", "TOULOUSE", "PARDUBICE", "BRINDISI", "MUNICH", "KRAKOW", "CATANIA", "CORK", "PALERMO", "WARSAW", "COMISO", "LIVERPOOL", "ROME", "MEMMINGEN", "BELFAST", "GDANSK", "NEWCASTLE", "PORTO", "MAASTRICHT", "BIRMINGHAM", "KARLSRUHE", "SANDEFJORD", "WROCLAW", "ABERDEEN", "DUBLIN", "BRISTOL", "ATHENS", "COPENHAGEN", "SOUTHEND_ON_SEA", "CAGLIARI", "GOTHENBURG", "BREMEN", "POZNAN"]
    }, {"key": "Basel", "code": "BSL", "destinations": ["PALMA", "DUBLIN", "LONDON"]}, {
        "key": "Wroclaw",
        "code": "WRO",
        "destinations": ["CHARLEROI", "TENERIFE", "FARO", "ODESSA", "MILAN", "EDINBURGH", "NAPLES", "LEEDS", "BOLOGNA", "EAST_MIDLANDS", "GLASGOW", "SHANNON", "PARIS", "CHANIA", "PALMA", "LISBON", "MANCHESTER", "LONDON", "MALTA", "CORK", "PALERMO", "LIVERPOOL", "ROME", "BELFAST", "GDANSK", "NEWCASTLE", "PODGORICA", "KIEV", "MALAGA", "ALICANTE", "SANDEFJORD", "DUBLIN", "MADRID", "BRISTOL", "ATHENS", "GIRONA"]
    }, {
        "key": "Liverpool",
        "code": "LPL",
        "destinations": ["DERRY", "BERGERAC", "TENERIFE", "FARO", "FUERTEVENTURA", "GRAN_CANARIA", "MILAN", "SZCZECIN", "VIENNA", "SOFIA", "REUS", "PISA", "SHANNON", "PALMA", "PAPHOS", "VILNIUS", "MALTA", "KNOCK", "PRAGUE", "BARI", "KRAKOW", "CORK", "WARSAW", "BARCELONA", "MARRAKESH", "CORFU", "IBIZA", "PORTO", "LANZAROTE", "MALAGA", "ALICANTE", "WROCLAW", "DUBLIN", "MADRID", "COPENHAGEN", "DORTMUND", "GIRONA", "POZNAN"]
    }, {
        "key": "Katowice",
        "code": "KTW",
        "destinations": ["HAMBURG", "BRINDISI", "ODESSA", "CATANIA", "CORK", "MILAN", "EDINBURGH", "BOLOGNA", "CORFU", "KIEV", "PAPHOS", "MANCHESTER", "LONDON", "COLOGNE", "BIRMINGHAM", "SANDEFJORD", "DUBLIN", "ATHENS", "DORTMUND", "GOTHENBURG"]
    }, {
        "key": "Podgorica",
        "code": "TGD",
        "destinations": ["CHARLEROI", "STOCKHOLM", "LONDON", "BERLIN", "WROCLAW", "BARCELONA", "BOLOGNA", "STUTTGART"]
    }, {"key": "Malmo", "code": "MMX", "destinations": ["KRAKOW"]}, {
        "key": "Tétouan",
        "code": "TTU",
        "destinations": ["MALAGA"]
    }, {
        "key": "Fez",
        "code": "FEZ",
        "destinations": ["CHARLEROI", "DOLE", "TOULOUSE", "FRANKFURT", "TURIN", "EINDHOVEN", "MILAN", "VENICE", "BARCELONA", "MEMMINGEN", "VALENCIA", "PISA", "PARIS", "MARSEILLE", "BREST", "LONDON", "DUSSELDORF", "NIMES", "KARLSRUHE", "BORDEAUX", "NANTES", "MADRID", "SEVILLE", "BREMEN"]
    }, {"key": "St. Petersburg", "code": "LED", "destinations": ["MALTA"]}, {
        "key": "Hamburg",
        "code": "HAM",
        "destinations": ["BARI", "VERONA", "KATOWICE", "BRINDISI", "FARO", "KRAKOW", "GRAN_CANARIA", "MILAN", "EDINBURGH", "VENICE", "PALERMO", "BARCELONA", "MARRAKESH", "LAMEZIA", "NAPLES", "SOFIA", "VALENCIA", "GDANSK", "ZADAR", "PORTO", "THESSALONIKI", "PALMA", "MALAGA", "ALICANTE", "LISBON", "MANCHESTER", "LONDON", "SANDEFJORD", "DUBLIN", "MADRID", "SEVILLE", "CAGLIARI"]
    }, {"key": "Kosice", "code": "KSC", "destinations": ["SOUTHEND_ON_SEA"]}, {
        "key": "Vienna",
        "code": "VIE",
        "destinations": ["CHARLEROI", "TENERIFE", "FARO", "MYKONOS", "STOCKHOLM", "ZAKYNTHOS", "EINDHOVEN", "FUERTEVENTURA", "GRAN_CANARIA", "MILAN", "EDINBURGH", "LARNACA", "SOFIA", "BOLOGNA", "VALENCIA", "PISA", "THESSALONIKI", "PARIS", "CHANIA", "TEL_AVIV", "PALMA", "MARSEILLE", "PAPHOS", "RHODES", "LISBON", "LONDON", "VILNIUS", "BORDEAUX", "MALTA", "SEVILLE", "MUNSTER", "SANTORINI", "BRINDISI", "KRAKOW", "CATANIA", "BARCELONA", "MARRAKESH", "HERAKLION", "LIVERPOOL", "BUCHAREST", "ROME", "STUTTGART", "AMMAN", "AGADIR", "CORFU", "IBIZA", "PORTO", "KIEV", "KALAMATA", "LANZAROTE", "MALAGA", "ALICANTE", "KOS", "BIRMINGHAM", "SANDEFJORD", "DUBLIN", "MADRID", "ATHENS", "COPENHAGEN", "RIGA", "GOTHENBURG"]
    }, {
        "key": "London Luton",
        "code": "LTN",
        "destinations": ["BEZIERS", "TENERIFE", "FARO", "RZESZOW", "FUERTEVENTURA", "KRAKOW", "GRAN_CANARIA", "CORK", "BARCELONA", "MARRAKESH", "KAUNAS", "BOLOGNA", "KERRY", "BYDGOSZCZ", "MURCIA", "LANZAROTE", "MALAGA", "ALICANTE", "VILNIUS", "NIMES", "DUBLIN", "MALTA", "ATHENS", "COPENHAGEN", "KNOCK", "GIRONA"]
    }, {"key": "Amsterdam", "code": "AMS", "destinations": ["MALTA", "MALAGA", "DUBLIN"]}, {
        "key": "Bari",
        "code": "BRI",
        "destinations": ["HAMBURG", "CHARLEROI", "NUREMBERG", "FRANKFURT", "TENERIFE", "TURIN", "FARO", "GRAN_CANARIA", "MILAN", "EDINBURGH", "BERLIN", "BOLOGNA", "VALENCIA", "PISA", "THESSALONIKI", "PARIS", "TRIESTE", "LISBON", "MANCHESTER", "LONDON", "DUSSELDORF", "VILNIUS", "GENOA", "COLOGNE", "BORDEAUX", "SANTIAGO", "MALTA", "SEVILLE", "PRAGUE", "KRAKOW", "CATANIA", "VENICE", "PALERMO", "BARCELONA", "LIVERPOOL", "ROME", "IBIZA", "PORTO", "LANZAROTE", "CUNEO", "MAASTRICHT", "KARLSRUHE", "DUBLIN", "MADRID", "BRISTOL", "BUDAPEST", "CAGLIARI", "BREMEN"]
    }, {"key": "Cluj", "code": "CLJ", "destinations": ["SOUTHEND_ON_SEA"]}, {
        "key": "Preveza - Aktion",
        "code": "PVK",
        "destinations": ["BUDAPEST"]
    }, {"key": "Paris Vatry", "code": "XCR", "destinations": ["FEZ", "PORTO", "MARRAKESH"]}, {
        "key": "Brno",
        "code": "BRQ",
        "destinations": ["MILAN", "BERLIN", "LONDON"]
    }, {"key": "Innsbruck", "code": "INN", "destinations": ["DUSSELDORF", "DUBLIN", "PALMA", "LONDON"]}, {
        "key": "Limoges",
        "code": "LIG",
        "destinations": ["BRISTOL", "LEEDS", "MANCHESTER", "EAST_MIDLANDS", "LONDON"]
    }, {"key": "Dinard", "code": "DNR", "destinations": ["EAST_MIDLANDS", "LONDON"]}, {
        "key": "Dusseldorf Weeze",
        "code": "NRN",
        "destinations": ["TALLINN", "ESSAOUIRA", "TANGIER", "SANTANDER", "BEZIERS", "LVIV", "TENERIFE", "FARO", "STOCKHOLM", "OUJDA", "FUERTEVENTURA", "GRAN_CANARIA", "MILAN", "EDINBURGH", "LAMEZIA", "ANCONA", "VALENCIA", "PISA", "ZADAR", "THESSALONIKI", "CHANIA", "NIS", "PALMA", "LISBON", "LONDON", "NADOR", "BURGAS", "PESCARA", "RABAT", "BARI", "PALERMO", "COMISO", "MARRAKESH", "ROME", "EILAT", "AGADIR", "BYDGOSZCZ", "PONTA_DELGADA", "CORFU", "IBIZA", "PORTO", "KIEV", "LANZAROTE", "MALAGA", "ALICANTE", "FEZ", "CAGLIARI", "GIRONA"]
    }, {"key": "Figari", "code": "FSC", "destinations": ["CHARLEROI", "PARIS"]}, {
        "key": "Rimini",
        "code": "RMI",
        "destinations": ["KRAKOW", "WARSAW", "KAUNAS", "BUDAPEST", "LONDON"]
    }, {
        "key": "Kerry",
        "code": "KIR",
        "destinations": ["BERLIN", "FRANKFURT", "ALICANTE", "FARO", "LONDON"]
    }, {"key": "Linz", "code": "LNZ", "destinations": ["PALMA", "LONDON"]}, {
        "key": "Murcia International",
        "code": "RMU",
        "destinations": ["GLASGOW", "BOURNEMOUTH", "PALMA", "MANCHESTER", "LONDON", "BIRMINGHAM", "DUBLIN", "LEEDS", "EAST_MIDLANDS"]
    }, {
        "key": "Lisbon",
        "code": "LIS",
        "destinations": ["HAMBURG", "CHARLEROI", "FRANKFURT", "EINDHOVEN", "MILAN", "EDINBURGH", "BERLIN", "VIENNA", "LAMEZIA", "NAPLES", "BOLOGNA", "CLERMONT_FERRAND", "VALENCIA", "GLASGOW", "PISA", "PARIS", "PALMA", "MARSEILLE", "MANCHESTER", "LONDON", "DUSSELDORF", "COLOGNE", "BORDEAUX", "TERCEIRA", "MALTA", "SEVILLE", "PRAGUE", "BRUSSELS", "TOULOUSE", "BARI", "BRINDISI", "KRAKOW", "LOURDES", "PALERMO", "WARSAW", "BARCELONA", "ROME", "MEMMINGEN", "PONTA_DELGADA", "PORTO", "MALAGA", "KARLSRUHE", "WROCLAW", "DUBLIN", "MADRID", "DORTMUND", "LUXEMBOURG", "BUDAPEST", "CAGLIARI", "BREMEN"]
    }, {"key": "Lyon", "code": "LYS", "destinations": ["MALTA"]}, {
        "key": "Oradea",
        "code": "OMR",
        "destinations": ["MILAN", "MEMMINGEN", "GIRONA", "EINDHOVEN"]
    }, {
        "key": "Brussels Charleroi",
        "code": "CRL",
        "destinations": ["FIGARI", "CARCASSONNE", "BERGERAC", "TANGIER", "SANTANDER", "BEZIERS", "PERUGIA", "STOCKHOLM", "LA_ROCHELLE", "EDINBURGH", "VIENNA", "SOFIA", "ALGHERO", "BOLOGNA", "VALENCIA", "RIJEKA", "TEL_AVIV", "PALMA", "RHODES", "VILNIUS", "BORDEAUX", "MALTA", "SEVILLE", "ZARAGOZA", "RABAT", "BARI", "BRINDISI", "VENICE", "MARRAKESH", "BUCHAREST", "ROME", "AGADIR", "PODGORICA", "IBIZA", "WROCLAW", "MADRID", "BUDAPEST", "CAGLIARI", "BANJA_LUKA", "VARNA", "VERONA", "TENERIFE", "TURIN", "FARO", "OUJDA", "FUERTEVENTURA", "PULA", "GRAN_CANARIA", "MILAN", "LAMEZIA", "NAPLES", "REUS", "RODEZ", "ANCONA", "GLASGOW", "PISA", "ZADAR", "THESSALONIKI", "CHANIA", "BIARRITZ", "MARSEILLE", "LISBON", "MANCHESTER", "ALMERIA", "BRATISLAVA", "NADOR", "PRAGUE", "PESCARA", "PERPIGNAN", "TOULOUSE", "KRAKOW", "MONTPELLIER", "CATANIA", "PALERMO", "WARSAW", "BARCELONA", "COMISO", "EILAT", "CORFU", "PORTO", "LANZAROTE", "MALAGA", "ALICANTE", "FEZ", "PLOVDIV", "NIMES", "DUBLIN", "ATHENS", "COPENHAGEN", "RIGA", "GIRONA"]
    }, {
        "key": "Barcelona Reus",
        "code": "REU",
        "destinations": ["SHANNON", "CHARLEROI", "THESSALONIKI", "FRANKFURT", "MANCHESTER", "EINDHOVEN", "LONDON", "CORK", "MILAN", "BIRMINGHAM", "DUBLIN", "BRISTOL", "LIVERPOOL", "SOUTHEND_ON_SEA", "GDANSK", "EAST_MIDLANDS"]
    }, {
        "key": "Karlsruhe / Baden-Baden",
        "code": "FKB",
        "destinations": ["BARI", "EDINBURGH", "WARSAW", "MARRAKESH", "LAMEZIA", "SOFIA", "ROME", "TRAPANI", "EILAT", "ZADAR", "PORTO", "KIEV", "THESSALONIKI", "TEL_AVIV", "PALMA", "MALAGA", "ALICANTE", "FEZ", "LISBON", "LONDON", "MALTA", "ATHENS", "SEVILLE", "CAGLIARI", "GIRONA"]
    }, {
        "key": "Nis",
        "code": "INI",
        "destinations": ["DUSSELDORF", "MILAN", "BERLIN", "BRATISLAVA", "STOCKHOLM"]
    }, {
        "key": "Lodz",
        "code": "LCJ",
        "destinations": ["DUBLIN", "ATHENS", "EAST_MIDLANDS", "LONDON"]
    }, {
        "key": "Palma de Mallorca",
        "code": "PMI",
        "destinations": ["HAMBURG", "BOURNEMOUTH", "CHARLEROI", "NUREMBERG", "SANTANDER", "FRANKFURT", "STRASBOURG", "INNSBRUCK", "STOCKHOLM", "EINDHOVEN", "MILAN", "EDINBURGH", "VITORIA-GASTEIZ", "BERLIN", "VIENNA", "LAMEZIA", "BILLUND", "KAUNAS", "NAPLES", "LEEDS", "BOLOGNA", "VALENCIA", "EAST_MIDLANDS", "GLASGOW", "SHANNON", "HANNOVER", "LINZ", "PARIS", "MARSEILLE", "LISBON", "MANCHESTER", "LONDON", "DUSSELDORF", "COLOGNE", "BRATISLAVA", "SANTIAGO", "SEVILLE", "ZARAGOZA", "PRAGUE", "BRUSSELS", "MUNSTER", "DRESDEN", "PADERBORN", "MUNICH", "KRAKOW", "ROSTOCK", "CATANIA", "CORK", "WARSAW", "BARCELONA", "LIVERPOOL", "ROME", "MEMMINGEN", "STUTTGART", "NEWCASTLE", "BASEL", "MURCIA", "PORTO", "SALZBURG", "MALAGA", "ALICANTE", "ERFURT", "GRAZ", "BIRMINGHAM", "KARLSRUHE", "FRIEDRICHSHAFEN", "WROCLAW", "DUBLIN", "MADRID", "BRISTOL", "VALLADOLID", "DORTMUND", "LUXEMBOURG", "BUDAPEST", "SOUTHEND_ON_SEA", "GOTHENBURG", "BREMEN"]
    }, {
        "key": "Warsaw Modlin",
        "code": "WMI",
        "destinations": ["CHARLEROI", "LVIV", "TENERIFE", "FARO", "STOCKHOLM", "EINDHOVEN", "FUERTEVENTURA", "GRAN_CANARIA", "MILAN", "EDINBURGH", "NAPLES", "LEEDS", "BOLOGNA", "VALENCIA", "EAST_MIDLANDS", "GLASGOW", "PISA", "SHANNON", "THESSALONIKI", "PARIS", "CHANIA", "TEL_AVIV", "PALMA", "MARSEILLE", "LISBON", "MANCHESTER", "LONDON", "COLOGNE", "SEVILLE", "BURGAS", "PESCARA", "TOULOUSE", "VENICE", "BARCELONA", "COMISO", "LIVERPOOL", "ROME", "EILAT", "MEMMINGEN", "BELFAST", "AMMAN", "RIMINI", "NEWCASTLE", "CORFU", "IBIZA", "PORTO", "KIEV", "MALAGA", "ALICANTE", "BIRMINGHAM", "KARLSRUHE", "SANDEFJORD", "DUBLIN", "MADRID", "BRISTOL", "ATHENS", "CAGLIARI", "GIRONA", "GOTHENBURG"]
    }, {
        "key": "Gdansk",
        "code": "GDN",
        "destinations": ["HAMBURG", "ODESSA", "STOCKHOLM", "KRAKOW", "CORK", "MILAN", "EDINBURGH", "AARHUS", "NAPLES", "EILAT", "LEEDS", "REUS", "BELFAST", "NEWCASTLE", "PISA", "KIEV", "TEL_AVIV", "ALICANTE", "MANCHESTER", "LONDON", "VAXJO", "BIRMINGHAM", "SANDEFJORD", "WROCLAW", "DUBLIN", "BRISTOL", "MALTA", "ATHENS", "COPENHAGEN", "GOTHENBURG"]
    }, {
        "key": "Zaragoza",
        "code": "ZAZ",
        "destinations": ["CHARLEROI", "PARIS", "LANZAROTE", "PALMA", "LONDON", "MILAN", "LAMEZIA", "NAPLES", "ATHENS"]
    }, {
        "key": "Bergerac",
        "code": "EGC",
        "destinations": ["CHARLEROI", "BRISTOL", "LIVERPOOL", "EAST_MIDLANDS", "LONDON"]
    }, {
        "key": "Brindisi",
        "code": "BDS",
        "destinations": ["HAMBURG", "CHARLEROI", "VERONA", "FRANKFURT", "KATOWICE", "TENERIFE", "TURIN", "EINDHOVEN", "KRAKOW", "GRAN_CANARIA", "MILAN", "EDINBURGH", "VENICE", "BERLIN", "BARCELONA", "VIENNA", "ROME", "MEMMINGEN", "BOLOGNA", "PISA", "IBIZA", "PORTO", "PARIS", "LANZAROTE", "ALICANTE", "LISBON", "MANCHESTER", "LONDON", "VILNIUS", "COLOGNE", "DUBLIN", "BRISTOL", "SANTIAGO", "ATHENS", "BUDAPEST", "PRAGUE"]
    }, {
        "key": "Chania",
        "code": "CHQ",
        "destinations": ["CHARLEROI", "FRANKFURT", "EINDHOVEN", "KRAKOW", "MILAN", "WARSAW", "VIENNA", "BUCHAREST", "NAPLES", "SOFIA", "ROME", "MEMMINGEN", "LEEDS", "BOLOGNA", "EAST_MIDLANDS", "GLASGOW", "PISA", "THESSALONIKI", "PAPHOS", "MANCHESTER", "LONDON", "DUSSELDORF", "VILNIUS", "BIRMINGHAM", "WROCLAW", "DUBLIN", "BRISTOL", "BREMEN"]
    }, {"key": "Casablanca", "code": "CMN", "destinations": ["MALTA"]}, {
        "key": "Szczecin",
        "code": "SZZ",
        "destinations": ["KRAKOW", "EDINBURGH", "WARSAW", "DUBLIN", "LIVERPOOL", "LONDON"]
    }, {
        "key": "Brest",
        "code": "BES",
        "destinations": ["PORTO", "TOULOUSE", "BORDEAUX", "MARSEILLE", "FEZ", "SOUTHEND_ON_SEA"]
    }, {
        "key": "Bologna",
        "code": "BLQ",
        "destinations": ["CHARLEROI", "SANTANDER", "KATOWICE", "TENERIFE", "FARO", "MYKONOS", "EINDHOVEN", "FUERTEVENTURA", "GRAN_CANARIA", "EDINBURGH", "BERLIN", "VIENNA", "LAMEZIA", "KAUNAS", "NAPLES", "ALGHERO", "TRAPANI", "VALENCIA", "THESSALONIKI", "PARIS", "CHANIA", "TEL_AVIV", "PALMA", "MARSEILLE", "RHODES", "LISBON", "MANCHESTER", "LONDON", "COLOGNE", "BORDEAUX", "BRATISLAVA", "MALTA", "VIGO", "SEVILLE", "PRAGUE", "BARI", "BRINDISI", "KRAKOW", "CATANIA", "PALERMO", "WARSAW", "BARCELONA", "COMISO", "HERAKLION", "BUCHAREST", "STUTTGART", "AMMAN", "PODGORICA", "CORFU", "IBIZA", "PORTO", "LANZAROTE", "MALAGA", "ALICANTE", "KOS", "WROCLAW", "DUBLIN", "MADRID", "BRISTOL", "CROTONE", "ATHENS", "COPENHAGEN", "CAGLIARI"]
    }, {
        "key": "Lanzarote",
        "code": "ACE",
        "destinations": ["CHARLEROI", "BARI", "SANTANDER", "FRANKFURT", "BRINDISI", "EINDHOVEN", "CATANIA", "CORK", "MILAN", "EDINBURGH", "PALERMO", "BERLIN", "VIENNA", "LIVERPOOL", "ROME", "LEEDS", "BOLOGNA", "BELFAST", "STUTTGART", "VALENCIA", "EAST_MIDLANDS", "NEWCASTLE", "GLASGOW", "SHANNON", "MANCHESTER", "LONDON", "DUSSELDORF", "BIRMINGHAM", "DUBLIN", "MADRID", "BRISTOL", "SANTIAGO", "ATHENS", "KNOCK", "SEVILLE", "ZARAGOZA", "CAGLIARI"]
    }, {"key": "Warsaw Chopin", "code": "WAW", "destinations": ["SZCZECIN"]}, {
        "key": "Göteborg Landvetter",
        "code": "GOT",
        "destinations": ["KATOWICE", "KRAKOW", "MILAN", "EDINBURGH", "WARSAW", "BARCELONA", "VIENNA", "ROME", "STUTTGART", "GDANSK", "PISA", "ZADAR", "THESSALONIKI", "PALMA", "MALAGA", "ALICANTE", "MANCHESTER", "LONDON", "DUBLIN", "MALTA", "BUDAPEST", "PRAGUE"]
    }, {"key": "Haugesund", "code": "HAU", "destinations": ["MALAGA", "ALICANTE"]}, {
        "key": "Madrid",
        "code": "MAD",
        "destinations": ["HAMBURG", "CHARLEROI", "TANGIER", "NUREMBERG", "VERONA", "FRANKFURT", "TENERIFE", "EINDHOVEN", "FUERTEVENTURA", "GRAN_CANARIA", "MILAN", "BERLIN", "VIENNA", "LAMEZIA", "NAPLES", "SOFIA", "TRAPANI", "BOLOGNA", "GLASGOW", "PISA", "PARIS", "PALMA", "MARSEILLE", "LISBON", "MANCHESTER", "LONDON", "VILNIUS", "COLOGNE", "BRATISLAVA", "SANTIAGO", "MALTA", "PRAGUE", "PESCARA", "RABAT", "BRUSSELS", "TOULOUSE", "BARI", "KRAKOW", "CATANIA", "PALERMO", "WARSAW", "COMISO", "MARRAKESH", "LIVERPOOL", "BUCHAREST", "ROME", "MENORCA", "NEWCASTLE", "IBIZA", "PORTO", "KIEV", "LANZAROTE", "FEZ", "OUARZAZATE", "BIRMINGHAM", "WROCLAW", "DUBLIN", "ATHENS", "COPENHAGEN", "LUXEMBOURG", "BUDAPEST", "CAGLIARI", "POZNAN"]
    }, {
        "key": "Lourdes",
        "code": "LDE",
        "destinations": ["KRAKOW", "MILAN", "DUBLIN", "MALTA", "ROME", "LISBON", "LONDON"]
    }, {"key": "Bilbao", "code": "BIO", "destinations": ["SOUTHEND_ON_SEA"]}, {
        "key": "Friedrichshafen",
        "code": "FDH",
        "destinations": ["PALMA"]
    }, {"key": "Växjö Småland", "code": "VXO", "destinations": ["ALICANTE", "GDANSK"]}, {
        "key": "Aarhus",
        "code": "AAR",
        "destinations": ["GDANSK", "DUBLIN", "LONDON"]
    }, {
        "key": "La Rochelle",
        "code": "LRH",
        "destinations": ["CHARLEROI", "PORTO", "DUBLIN", "LONDON"]
    }, {
        "key": "Thessaloniki",
        "code": "SKG",
        "destinations": ["HAMBURG", "CHARLEROI", "NUREMBERG", "FRANKFURT", "STOCKHOLM", "EINDHOVEN", "MILAN", "BERLIN", "VIENNA", "LAMEZIA", "NAPLES", "REUS", "BOLOGNA", "PARIS", "CHANIA", "TEL_AVIV", "PAPHOS", "MANCHESTER", "LONDON", "DUSSELDORF", "BRATISLAVA", "MALTA", "BARI", "KRAKOW", "PALERMO", "WARSAW", "BARCELONA", "ROME", "MEMMINGEN", "LAPPEENRANTA", "AMMAN", "PORTO", "MALAGA", "ALICANTE", "KARLSRUHE", "DUBLIN", "ATHENS", "COPENHAGEN", "DORTMUND", "BUDAPEST", "GIRONA", "GOTHENBURG", "BREMEN"]
    }, {
        "key": "Brussels",
        "code": "BRU",
        "destinations": ["ESSAOUIRA", "FARO", "KRAKOW", "CATANIA", "MILAN", "VENICE", "PALERMO", "BERLIN", "BARCELONA", "LARNACA", "MARRAKESH", "ROME", "AMMAN", "VALENCIA", "PISA", "PONTA_DELGADA", "PORTO", "PALMA", "MALAGA", "ALICANTE", "LISBON", "DUBLIN", "MADRID", "SEVILLE", "GIRONA"]
    }, {"key": "Dresden", "code": "DRS", "destinations": ["PALMA", "LONDON"]}, {
        "key": "Seville",
        "code": "SVQ",
        "destinations": ["HAMBURG", "CHARLEROI", "TANGIER", "VERONA", "FRANKFURT", "TENERIFE", "EINDHOVEN", "FUERTEVENTURA", "GRAN_CANARIA", "MILAN", "EDINBURGH", "VITORIA-GASTEIZ", "BERLIN", "VIENNA", "NAPLES", "BOLOGNA", "VALENCIA", "EAST_MIDLANDS", "PISA", "PARIS", "PALMA", "MARSEILLE", "LISBON", "MANCHESTER", "LONDON", "COLOGNE", "BORDEAUX", "SANTIAGO", "MALTA", "RABAT", "BRUSSELS", "TOULOUSE", "BARI", "KRAKOW", "CATANIA", "VENICE", "WARSAW", "BARCELONA", "COMISO", "MARRAKESH", "ROME", "MEMMINGEN", "IBIZA", "PORTO", "LANZAROTE", "ALICANTE", "FEZ", "KARLSRUHE", "NANTES", "DUBLIN", "BRISTOL", "VALLADOLID", "COPENHAGEN", "LUXEMBOURG", "BUDAPEST", "CAGLIARI"]
    }, {
        "key": "Banja Luka",
        "code": "BNX",
        "destinations": ["CHARLEROI", "MEMMINGEN", "STOCKHOLM", "BERLIN"]
    }, {
        "key": "Rhodes",
        "code": "RHO",
        "destinations": ["PISA", "CHARLEROI", "STOCKHOLM", "MANCHESTER", "LONDON", "DUSSELDORF", "CATANIA", "MILAN", "BERLIN", "VIENNA", "KAUNAS", "NAPLES", "ROME", "BOLOGNA", "EAST_MIDLANDS"]
    }, 
    {
        "key": "Memmingen",
        "code": "FMM",
        "destinations": ["LVIV", "TENERIFE", "BRINDISI", "FARO", "STOCKHOLM", "EDINBURGH", "PALERMO", "WARSAW", "MARRAKESH", "SOFIA", "ALGHERO", "AMMAN", "ZADAR", "PORTO", "ORADEA", "THESSALONIKI", "CHANIA", "TEL_AVIV", "PALMA", "MALAGA", "ALICANTE", "FEZ", "LISBON", "LONDON", "DUBLIN", "ATHENS", "SEVILLE", "BURGAS", "GIRONA", "BANJA_LUKA"]
    }, 
    {
        "key": "Rabat",
        "code": "RBA",
        "destinations": ["CHARLEROI", "PARIS", "MARSEILLE", "EINDHOVEN", "LONDON", "DUSSELDORF", "MADRID", "ROME", "SEVILLE", "GIRONA"]
    }, 
    {
        "key": "Tampere", 
        "code": "TMP", 
        "destinations": ["BUDAPEST", "BREMEN"]
    }, 
    {
        "key": "Ouarzazate",
        "code": "OZZ",
        "destinations": ["MARSEILLE", "BORDEAUX", "MADRID"]
    }, 
    {
        "key": "Budapest",
        "code": "BUD",
        "destinations": ["CHARLEROI", "NUREMBERG", "SANTANDER", "FARO", "GRAN_CANARIA", "MILAN", "EDINBURGH", "BERLIN", "LAMEZIA", "BILLUND", "NAPLES", "VALENCIA", "EAST_MIDLANDS", "PISA", "THESSALONIKI", "PARIS", "TEL_AVIV", "PALMA", "MARSEILLE", "PAPHOS", "LISBON", "MANCHESTER", "LONDON", "BORDEAUX", "MALTA", "SEVILLE", "PRAGUE", "PESCARA", "TOULOUSE", "BARI", "BRINDISI", "CATANIA", "CORK", "TAMPERE", "VENICE", "PALERMO", "BARCELONA", "MARRAKESH", "ROME", "EILAT", "LAPPEENRANTA", "STUTTGART", "AMMAN", "RIMINI", "CORFU", "IBIZA", "PORTO", "MALAGA", "DUBLIN", "MADRID", "BRISTOL", "ATHENS", "PREVEZA", "COPENHAGEN", "LUXEMBOURG", "CAGLIARI", "GIRONA", "GOTHENBURG", "POZNAN"]
    }, 
    {
        "key": "Sofia",
        "code": "SOF",
        "destinations": ["HAMBURG", "CHARLEROI", "STOCKHOLM", "EINDHOVEN", "MILAN", "EDINBURGH", "VENICE", "BERLIN", "BARCELONA", "VIENNA", "LIVERPOOL", "ROME", "MEMMINGEN", "GLASGOW", "PISA", "AQABA", "CASTELLON", "KIEV", "PARIS", "CHANIA", "KALAMATA", "TEL_AVIV", "MARSEILLE", "PAPHOS", "LONDON", "COLOGNE", "BIRMINGHAM", "KARLSRUHE", "DUBLIN", "MADRID", "BRISTOL", "ATHENS"]
    }, 
    {
        "key": "Prague",
        "code": "PRG",
        "destinations": ["BOURNEMOUTH", "CHARLEROI", "TENERIFE", "STOCKHOLM", "EINDHOVEN", "MILAN", "EDINBURGH", "LAMEZIA", "BILLUND", "NAPLES", "TRAPANI", "BOLOGNA", "VALENCIA", "PISA", "ZADAR", "PARIS", "PALMA", "MARSEILLE", "LISBON", "MANCHESTER", "LONDON", "BORDEAUX", "MALTA", "PESCARA", "BARI", "BRINDISI", "KRAKOW", "CATANIA", "VENICE", "PALERMO", "BARCELONA", "MARRAKESH", "LIVERPOOL", "ROME", "EILAT", "AMMAN", "PORTO", "MALAGA", "DUBLIN", "MADRID", "ATHENS", "COPENHAGEN", "BUDAPEST", "RIGA", "CAGLIARI", "GOTHENBURG"]
    }, 
    {
        "key": "Naples",
        "code": "NAP",
        "destinations": ["HAMBURG", "CHARLEROI", "NUREMBERG", "FRANKFURT", "TENERIFE", "STOCKHOLM", "EINDHOVEN", "GRAN_CANARIA", "MILAN", "EDINBURGH", "BERLIN", "KAUNAS", "BOLOGNA", "VALENCIA", "EAST_MIDLANDS", "THESSALONIKI", "CHANIA", "PALMA", "MARSEILLE", "RHODES", "LISBON", "MANCHESTER", "EXETER", "LONDON", "DUSSELDORF", "VILNIUS", "COLOGNE", "BORDEAUX", "MALTA", "SEVILLE", "ZARAGOZA", "PRAGUE", "TOULOUSE", "KRAKOW", "CORK", "VENICE", "WARSAW", "BARCELONA", "MARRAKESH", "STUTTGART", "GDANSK", "CORFU", "IBIZA", "PORTO", "MALAGA", "ALICANTE", "NANTES", "WROCLAW", "DUBLIN", "MADRID", "BRISTOL", "ATHENS", "COPENHAGEN", "BUDAPEST", "GIRONA", "BREMEN"]
    }, 
    {
        "key": "Maastricht",
        "code": "MST",
        "destinations": ["BARI", "MALTA", "ALICANTE", "GIRONA"]
    }, 
    {
        "key": "Frankfurt International",
        "code": "FRA",
        "destinations": ["KEFALONIA", "TENERIFE", "FARO", "PERUGIA", "MYKONOS", "PULA", "GRAN_CANARIA", "MILAN", "VALENCIA", "PISA", "ZADAR", "RIJEKA", "CHANIA", "PALMA", "MARSEILLE", "LISBON", "MANCHESTER", "LONDON", "MALTA", "SEVILLE", "PERPIGNAN", "SANTORINI", "BRINDISI", "KRAKOW", "CATANIA", "VENICE", "BARCELONA", "COMISO", "AGADIR", "MURCIA", "CORFU", "PORTO", "LANZAROTE", "MALAGA", "ALICANTE", "DUBLIN", "MADRID", "ATHENS", "GIRONA"]
    }, 
    {"key": "Ostrava", "code": "OSR", "destinations": ["MILAN", "LONDON"]}, {
        "key": "Santiago",
        "code": "SCQ",
        "destinations": ["BARI", "LANZAROTE", "FRANKFURT", "PALMA", "TENERIFE", "MALAGA", "ALICANTE", "BRINDISI", "LONDON", "GRAN_CANARIA", "MILAN", "BARCELONA", "MADRID", "MALTA", "SEVILLE", "CAGLIARI", "VALENCIA"]
    }, 
    {
        "key": "Turin",
        "code": "TRN",
        "destinations": ["CHARLEROI", "IBIZA", "BARI", "BRINDISI", "FEZ", "LONDON", "CATANIA", "PALERMO", "BARCELONA", "COMISO", "DUBLIN", "MALTA", "ATHENS", "VALENCIA"]
    }, 
    {
        "key": "Cardiff",
        "code": "CWL",
        "destinations": ["BARCELONA", "DUBLIN", "MALTA", "TENERIFE", "MALAGA", "FARO"]
    }, 
    {
        "key": "Berlin Tegel",
        "code": "TXL",
        "destinations": ["BARI", "KEFALONIA", "TENERIFE", "BRINDISI", "FARO", "ODESSA", "FUERTEVENTURA", "PULA", "KRAKOW", "GRAN_CANARIA", "MILAN", "MARRAKESH", "HERAKLION", "LAMEZIA", "NAPLES", "ALGHERO", "CORFU", "IBIZA", "RIJEKA", "TEL_AVIV", "LANZAROTE", "PALMA", "MALAGA", "ALICANTE", "KOS", "PAPHOS", "RHODES", "LUXEMBOURG", "GIRONA"]
    }, 
    {
        "key": "Lamezia",
        "code": "SUF",
        "destinations": ["HAMBURG", "CHARLEROI", "FRANKFURT", "TENERIFE", "GRAN_CANARIA", "MILAN", "BERLIN", "BOLOGNA", "VALENCIA", "EAST_MIDLANDS", "PISA", "THESSALONIKI", "PALMA", "LISBON", "MANCHESTER", "LONDON", "DUSSELDORF", "COLOGNE", "BORDEAUX", "MALTA", "ZARAGOZA", "PRAGUE", "KRAKOW", "VENICE", "BARCELONA", "CORFU", "IBIZA", "MALAGA", "ALICANTE", "KARLSRUHE", "DUBLIN", "MADRID", "BRISTOL", "ATHENS", "BUDAPEST", "GIRONA", "BREMEN"]
    }, 
    {
        "key": "Lille", 
        "code": "LIL", 
        "destinations": ["MARSEILLE", "PORTO", "TOULOUSE", "BORDEAUX"]
    }, 
    {
        "key": "Aalborg",
        "code": "AAL",
        "destinations": ["LONDON"]
    }, 
    {
        "key": "Porto",
        "code": "OPO",
        "destinations": ["HAMBURG", "CHARLEROI", "DOLE", "CARCASSONNE", "NUREMBERG", "FRANKFURT", "STRASBOURG", "TENERIFE", "FARO", "EINDHOVEN", "GRAN_CANARIA", "LA_ROCHELLE", "MILAN", "EDINBURGH", "BERLIN", "VIENNA", "NAPLES", "ALGHERO", "BOLOGNA", "CLERMONT_FERRAND", "TOURS", "VALENCIA", "THESSALONIKI", "PARIS", "PALMA", "MARSEILLE", "BREST", "LISBON", "MANCHESTER", "LONDON", "DUSSELDORF", "COLOGNE", "BORDEAUX", "TERCEIRA", "BRATISLAVA", "LORIENT", "MALTA", "SEVILLE", "PRAGUE", "BRUSSELS", "TOULOUSE", "BARI", "BRIVE", "BRINDISI", "KRAKOW", "VENICE", "PALERMO", "WARSAW", "BARCELONA", "MARRAKESH", "LIVERPOOL", "ROME", "MEMMINGEN", "LILLE", "PONTA_DELGADA", "MALAGA", "ALICANTE", "POITIERS", "BIRMINGHAM", "KARLSRUHE", "DUBLIN", "MADRID", "COPENHAGEN", "DORTMUND", "LUXEMBOURG", "BUDAPEST", "CAGLIARI", "BREMEN"]
    }, 
    {
        "key": "Bordeaux",
        "code": "BOD",
        "destinations": ["CHARLEROI", "TANGIER", "STRASBOURG", "FARO", "MYKONOS", "OUJDA", "MILAN", "EDINBURGH", "VIENNA", "LAMEZIA", "NAPLES", "BOLOGNA", "VALENCIA", "MARSEILLE", "BREST", "LISBON", "MANCHESTER", "LONDON", "COLOGNE", "NADOR", "SEVILLE", "PRAGUE", "BARI", "KRAKOW", "CORK", "VENICE", "PALERMO", "MARRAKESH", "ROME", "LILLE", "PORTO", "MALAGA", "ALICANTE", "FEZ", "OUARZAZATE", "NANTES", "DUBLIN", "COPENHAGEN", "BUDAPEST"]
    }, 
    {
        "key": "Eindhoven",
        "code": "EIN",
        "destinations": ["TANGIER", "TENERIFE", "FARO", "STOCKHOLM", "GRAN_CANARIA", "MILAN", "EDINBURGH", "VIENNA", "NAPLES", "SOFIA", "ALGHERO", "REUS", "BOLOGNA", "VALENCIA", "PISA", "ZADAR", "THESSALONIKI", "CHANIA", "PALMA", "MARSEILLE", "LISBON", "MANCHESTER", "LONDON", "BRATISLAVA", "MALTA", "SEVILLE", "PRAGUE", "RABAT", "BRINDISI", "KRAKOW", "CATANIA", "VENICE", "WARSAW", "COMISO", "MARRAKESH", "ROME", "AGADIR", "MURCIA", "CORFU", "IBIZA", "PORTO", "ORADEA", "LANZAROTE", "MALAGA", "ALICANTE", "FEZ", "DUBLIN", "MADRID", "ATHENS", "GIRONA"]
    }, 
    {
        "key": "Carcassonne",
        "code": "CCF",
        "destinations": ["GLASGOW", "CHARLEROI", "PORTO", "MANCHESTER", "LONDON", "CORK", "EDINBURGH", "DUBLIN", "EAST_MIDLANDS"]
    }, 
    {
        "key": "Strasbourg",
        "code": "SXB",
        "destinations": ["PORTO", "BORDEAUX", "PALMA", "MARSEILLE", "LONDON"]
    }, 
    {
        "key": "Timisoara", 
        "code": "TSR", 
        "destinations": ["BUCHAREST", "MILAN"]
    }, {
        "key": "Kharkiv International",
        "code": "HRK",
        "destinations": ["KRAKOW", "VILNIUS", "POZNAN"]
    }, 
    {
        "key": "Perugia",
        "code": "PEG",
        "destinations": ["CHARLEROI", "CATANIA", "COMISO", "FRANKFURT", "MALTA", "LONDON"]
    }, 
    {
        "key": "Gran Canaria",
        "code": "LPA",
        "destinations": ["HAMBURG", "BOURNEMOUTH", "CHARLEROI", "SANTANDER", "FRANKFURT", "STOCKHOLM", "EINDHOVEN", "MILAN", "EDINBURGH", "BERLIN", "VIENNA", "LAMEZIA", "NAPLES", "LEEDS", "BOLOGNA", "VALENCIA", "EAST_MIDLANDS", "GLASGOW", "PISA", "MANCHESTER", "LONDON", "DUSSELDORF", "COLOGNE", "SANTIAGO", "SEVILLE", "BARI", "BRINDISI", "KRAKOW", "CORK", "VENICE", "PALERMO", "WARSAW", "BARCELONA", "LIVERPOOL", "STUTTGART", "PORTO", "BIRMINGHAM", "SANDEFJORD", "DUBLIN", "MADRID", "BRISTOL", "BUDAPEST", "CAGLIARI"]
    }, 
    {
        "key": "Tangier",
        "code": "TNG",
        "destinations": ["CHARLEROI", "TOULOUSE", "PARIS", "FRANKFURT", "MARSEILLE", "EINDHOVEN", "DUSSELDORF", "MILAN", "BORDEAUX", "MADRID", "SEVILLE", "VALENCIA"]
    }, 
    {
        "key": "Genoa", 
        "code": "GOA", 
        "destinations": ["BARI", "LONDON"]
    }, 
    {
        "key": "Derry",
        "code": "LDY",
        "destinations": ["GLASGOW", "LIVERPOOL", "EDINBURGH"]
    }, 
    {
        "key": "Copenhagen",
        "code": "CPH",
        "destinations": ["CHARLEROI", "NUREMBERG", "TENERIFE", "KRAKOW", "MILAN", "EDINBURGH", "VIENNA", "LIVERPOOL", "KAUNAS", "NAPLES", "ROME", "BOLOGNA", "STUTTGART", "VALENCIA", "GDANSK", "PORTO", "THESSALONIKI", "MARSEILLE", "MALAGA", "ALICANTE", "LONDON", "DUSSELDORF", "COLOGNE", "BORDEAUX", "DUBLIN", "MADRID", "SEVILLE", "BUDAPEST", "PRAGUE", "SOUTHEND_ON_SEA"]
    }, 
    {
        "key": "Bodrum", 
        "code": "BJV", 
        "destinations": ["DUBLIN"]
    }, 
    {
        "key": "Corfu",
        "code": "CFU",
        "destinations": ["CHARLEROI", "FRANKFURT", "KATOWICE", "RZESZOW", "EINDHOVEN", "MILAN", "EDINBURGH", "VENICE", "PALERMO", "WARSAW", "BERLIN", "BARCELONA", "VIENNA", "LIVERPOOL", "LAMEZIA", "NAPLES", "ROME", "LEEDS", "BOLOGNA", "EAST_MIDLANDS", "PISA", "MANCHESTER", "LONDON", "DUSSELDORF", "VILNIUS", "COLOGNE", "BIRMINGHAM", "BRATISLAVA", "BUDAPEST", "SOUTHEND_ON_SEA", "POZNAN"]
    }, 
    {
        "key": "Barcelona",
        "code": "BCN",
        "destinations": ["HAMBURG", "CHARLEROI", "SANTANDER", "FRANKFURT", "TENERIFE", "TURIN", "FARO", "STOCKHOLM", "FUERTEVENTURA", "GRAN_CANARIA", "MILAN", "EDINBURGH", "BERLIN", "VIENNA", "LAMEZIA", "NAPLES", "SOFIA", "BOLOGNA", "EAST_MIDLANDS", "GLASGOW", "THESSALONIKI", "PARIS", "PALMA", "LISBON", "CARDIFF", "MANCHESTER", "LONDON", "VILNIUS", "COLOGNE", "TERCEIRA", "NADOR", "SANTIAGO", "MALTA", "VIGO", "SEVILLE", "PRAGUE", "BRUSSELS", "BARI", "BRINDISI", "KRAKOW", "CATANIA", "VENICE", "PALERMO", "WARSAW", "COMISO", "MARRAKESH", "LIVERPOOL", "ROME", "MENORCA", "PODGORICA", "PONTA_DELGADA", "CORFU", "IBIZA", "PORTO", "KIEV", "MALAGA", "FEZ", "JEREZ", "BIRMINGHAM", "DUBLIN", "VALLADOLID", "ATHENS", "LUXEMBOURG", "BUDAPEST", "RIGA", "CAGLIARI", "GOTHENBURG"]
    }, 
    {
        "key": "Stockholm Skavsta",
        "code": "NYO",
        "destinations": ["CHARLEROI", "BEZIERS", "TENERIFE", "FARO", "EINDHOVEN", "GRAN_CANARIA", "MILAN", "EDINBURGH", "VIENNA", "NAPLES", "SOFIA", "PISA", "ZADAR", "RIJEKA", "THESSALONIKI", "PARIS", "NIS", "PALMA", "PAPHOS", "RHODES", "LONDON", "DUSSELDORF", "MALTA", "PRAGUE", "KRAKOW", "VENICE", "WARSAW", "BARCELONA", "MARRAKESH", "ROME", "MEMMINGEN", "GDANSK", "PODGORICA", "KIEV", "MALAGA", "ALICANTE", "BANJA_LUKA", "BREMEN", "POZNAN"]
    }, 
    {
        "key": "Pisa",
        "code": "PSA",
        "destinations": ["CHARLEROI", "NUREMBERG", "KEFALONIA", "FRANKFURT", "TENERIFE", "STOCKHOLM", "EINDHOVEN", "FUERTEVENTURA", "GRAN_CANARIA", "EDINBURGH", "BERLIN", "VIENNA", "LAMEZIA", "BILLUND", "SOFIA", "ALGHERO", "TRAPANI", "LEEDS", "VALENCIA", "EAST_MIDLANDS", "GLASGOW", "PARIS", "CHANIA", "RHODES", "LISBON", "LONDON", "DUSSELDORF", "MALTA", "SEVILLE", "PRAGUE", "BRUSSELS", "BARI", "BRINDISI", "KRAKOW", "CATANIA", "PALERMO", "WARSAW", "COMISO", "MARRAKESH", "LIVERPOOL", "BUCHAREST", "GDANSK", "CORFU", "IBIZA", "KALAMATA", "MALAGA", "FEZ", "DUBLIN", "MADRID", "CROTONE", "BUDAPEST", "CAGLIARI", "GIRONA", "GOTHENBURG"]
    }, 
    {
        "key": "Leeds Bradford",
        "code": "LBA",
        "destinations": ["TENERIFE", "FARO", "LIMOGES", "FUERTEVENTURA", "KRAKOW", "GRAN_CANARIA", "VENICE", "WARSAW", "GDANSK", "PISA", "MURCIA", "CORFU", "IBIZA", "CHANIA", "LANZAROTE", "PALMA", "MALAGA", "ALICANTE", "VILNIUS", "WROCLAW", "BRATISLAVA", "DUBLIN", "MALTA", "RIGA", "GIRONA"]
    }, 
    {
        "key": "London Stansted",
        "code": "STN",
        "destinations": ["TALLINN", "DOLE", "CARCASSONNE", "BERGERAC", "NUREMBERG", "SANTANDER", "BEZIERS", "KEFALONIA", "FRANKFURT", "KATOWICE", "PERUGIA", "STOCKHOLM", "LA_ROCHELLE", "EDINBURGH", "VIENNA", "BILLUND", "SOFIA", "ALGHERO", "BOLOGNA", "CLERMONT_FERRAND", "VALENCIA", "SHANNON", "RIJEKA", "CASTELLON", "OLSZTYN", "PALMA", "RHODES", "DUSSELDORF", "VILNIUS", "GENOA", "COLOGNE", "BORDEAUX", "MALTA", "VIGO", "SEVILLE", "ZARAGOZA", "RABAT", "BARI", "DRESDEN", "PARDUBICE", "BRINDISI", "LIMOGES", "RZESZOW", "VENICE", "MARRAKESH", "BUCHAREST", "ROME", "MEMMINGEN", "BELFAST", "AGADIR", "RIMINI", "GDANSK", "BYDGOSZCZ", "PODGORICA", "BASEL", "MURCIA", "IBIZA", "SALZBURG", "KIEV", "KALAMATA", "OSLO", "JEREZ", "POITIERS", "WROCLAW", "MADRID", "BUDAPEST", "CAGLIARI", "PALANGA", "BREMEN", "HAMBURG", "ESSAOUIRA", "VERONA", "LVIV", "STRASBOURG", "TENERIFE", "TURIN", "FARO", "INNSBRUCK", "EINDHOVEN", "FUERTEVENTURA", "PULA", "GRAN_CANARIA", "MILAN", "BERLIN", "SZCZECIN", "BRNO", "LAMEZIA", "KAUNAS", "NAPLES", "REUS", "RODEZ", "ANCONA", "TOURS", "KERRY", "GLASGOW", "LUBLIN", "PISA", "ZADAR", "DINARD", "THESSALONIKI", "LINZ", "CHANIA", "BIARRITZ", "GRENOBLE", "MARSEILLE", "TRIESTE", "PAPHOS", "LISBON", "ALMERIA", "OSTRAVA", "BRATISLAVA", "SANTIAGO", "KNOCK", "PRAGUE", "PESCARA", "PERPIGNAN", "TOULOUSE", "AALBORG", "BRIVE", "KRAKOW", "LOURDES", "CORK", "PALERMO", "WARSAW", "AARHUS", "BARCELONA", "COMISO", "PONTA_DELGADA", "CORFU", "PORTO", "LANZAROTE", "MALAGA", "ALICANTE", "FEZ", "PLOVDIV", "NIMES", "KARLSRUHE", "NANTES", "SANDEFJORD", "DUBLIN", "LEIPZIG", "ATHENS", "COPENHAGEN", "DORTMUND", "LUXEMBOURG", "RIGA", "NICE", "GIRONA", "LODZ", "GOTHENBURG", "POZNAN"]
    }, 
    {
        "key": "Zurich", 
        "code": "ZRH", 
        "destinations": ["MALTA"]
    }, 
    {
        "key": "Milan Bergamo",
        "code": "BGY",
        "destinations": ["TALLINN", "TANGIER", "NUREMBERG", "SANTANDER", "KEFALONIA", "FRANKFURT", "KATOWICE", "STOCKHOLM", "ZAKYNTHOS", "EDINBURGH", "VITORIA-GASTEIZ", "VIENNA", "BILLUND", "SOFIA", "ALGHERO", "VALENCIA", "EAST_MIDLANDS", "PARIS", "TEL_AVIV", "NIS", "PALMA", "RHODES", "LONDON", "DUSSELDORF", "VILNIUS", "COLOGNE", "BORDEAUX", "TERCEIRA", "MALTA", "VIGO", "SEVILLE", "ZARAGOZA", "BURGAS", "BARI", "BRINDISI", "MARRAKESH", "HERAKLION", "BUCHAREST", "LAPPEENRANTA", "BELFAST", "STUTTGART", "AMMAN", "AGADIR", "GDANSK", "IBIZA", "KALAMATA", "WROCLAW", "MADRID", "CROTONE", "BUDAPEST", "CAGLIARI", "BREMEN", "HAMBURG", "CHARLEROI", "TENERIFE", "FARO", "EINDHOVEN", "FUERTEVENTURA", "GRAN_CANARIA", "TIMISOARA", "BERLIN", "BRNO", "LAMEZIA", "NAPLES", "TRAPANI", "REUS", "ZADAR", "AQABA", "THESSALONIKI", "CHANIA", "MARSEILLE", "PAPHOS", "LISBON", "MANCHESTER", "OSTRAVA", "BRATISLAVA", "SANTIAGO", "KNOCK", "PRAGUE", "PESCARA", "KRAKOW", "CATANIA", "LOURDES", "CORK", "PALERMO", "WARSAW", "BARCELONA", "COMISO", "EILAT", "PONTA_DELGADA", "CORFU", "PORTO", "ORADEA", "LANZAROTE", "MALAGA", "ALICANTE", "FEZ", "PLOVDIV", "SANDEFJORD", "DUBLIN", "BRISTOL", "ATHENS", "COPENHAGEN", "LUXEMBOURG", "RIGA", "SOUTHEND_ON_SEA", "GIRONA", "GOTHENBURG", "POZNAN"]
    }, 
    {
        "key": "Tel Aviv",
        "code": "TLV",
        "destinations": ["CHARLEROI", "NUREMBERG", "KRAKOW", "MILAN", "WARSAW", "BERLIN", "VIENNA", "BUCHAREST", "KAUNAS", "SOFIA", "ROME", "MEMMINGEN", "BOLOGNA", "GDANSK", "THESSALONIKI", "MARSEILLE", "PAPHOS", "VILNIUS", "KARLSRUHE", "MALTA", "ATHENS", "BUDAPEST", "BURGAS", "POZNAN"]
    }, 
    {
        "key": "Leipzig", 
        "code": "LEJ", 
        "destinations": ["LONDON"]
    }, 
    {
        "key": "Pula",
        "code": "PUY",
        "destinations": ["CHARLEROI", "BERLIN", "FRANKFURT", "STUTTGART", "LONDON"]
    }, 
    {
        "key": "Kos",
        "code": "KGS",
        "destinations": ["DUSSELDORF", "BERLIN", "VIENNA", "ROME", "BOLOGNA"]
    }, 
    {
        "key": "Crotone", 
        "code": "CRV", 
        "destinations": ["PISA", "MILAN", "NUREMBERG", "BOLOGNA"]
    }, 
    {
        "key": "Palermo",
        "code": "PMO",
        "destinations": ["HAMBURG", "CHARLEROI", "NUREMBERG", "VERONA", "FRANKFURT", "TENERIFE", "TURIN", "GRAN_CANARIA", "MILAN", "EDINBURGH", "BERLIN", "BOLOGNA", "VALENCIA", "EAST_MIDLANDS", "PISA", "THESSALONIKI", "PARIS", "MARSEILLE", "LISBON", "MANCHESTER", "LONDON", "DUSSELDORF", "VILNIUS", "COLOGNE", "BORDEAUX", "MALTA", "PRAGUE", "BRUSSELS", "TOULOUSE", "BARI", "KRAKOW", "VENICE", "BARCELONA", "BUCHAREST", "ROME", "MEMMINGEN", "CORFU", "IBIZA", "PORTO", "LANZAROTE", "MALAGA", "ALICANTE", "WROCLAW", "DUBLIN", "MADRID", "BRISTOL", "ATHENS", "BUDAPEST", "BREMEN"]
    }, 
    {
        "key": "Dortmund",
        "code": "DTM",
        "destinations": ["PORTO", "THESSALONIKI", "PALMA", "KATOWICE", "MALAGA", "LISBON", "LONDON", "KRAKOW", "LIVERPOOL", "ALGHERO"]
    }, {
        "key": "Grenoble", 
        "code": "GNB", 
        "destinations": ["DUBLIN", "LONDON"]
    }, 
    {
        "key": "London Gatwick",
        "code": "LGW",
        "destinations": ["SHANNON", "CORK", "ALICANTE", "DUBLIN"]
    }, 
    {
        "key": "Lorient", 
        "code": "LRT", 
        "destinations": ["PORTO"]
    }, 
    {
        "key": "Krakow",
        "code": "KRK",
        "destinations": ["NUREMBERG", "FRANKFURT", "ODESSA", "STOCKHOLM", "EDINBURGH", "VIENNA", "LEEDS", "BOLOGNA", "VALENCIA", "EAST_MIDLANDS", "SHANNON", "PARIS", "TEL_AVIV", "PALMA", "LONDON", "BORDEAUX", "MALTA", "SEVILLE", "BURGAS", "BARI", "BRINDISI", "VENICE", "MALMO", "MARRAKESH", "ROME", "KHARKIV", "BELFAST", "STUTTGART", "AMMAN", "RIMINI", "GDANSK", "KIEV", "BIRMINGHAM", "MADRID", "CAGLIARI", "HAMBURG", "BOURNEMOUTH", "CHARLEROI", "LVIV", "TENERIFE", "FARO", "EINDHOVEN", "GRAN_CANARIA", "MILAN", "BERLIN", "SZCZECIN", "LAMEZIA", "NAPLES", "GLASGOW", "PISA", "ZADAR", "THESSALONIKI", "CHANIA", "MARSEILLE", "PAPHOS", "LISBON", "MANCHESTER", "PRAGUE", "PESCARA", "BRUSSELS", "CATANIA", "LOURDES", "PALERMO", "BARCELONA", "LIVERPOOL", "EILAT", "PORTO", "MALAGA", "ALICANTE", "SANDEFJORD", "DUBLIN", "BRISTOL", "ATHENS", "COPENHAGEN", "DORTMUND", "GIRONA", "GOTHENBURG"]
    }, 
    {
        "key": "Glasgow Prestwick",
        "code": "PIK",
        "destinations": ["PISA", "MURCIA", "IBIZA", "LANZAROTE", "PALMA", "TENERIFE", "MALAGA", "ALICANTE", "FARO", "RZESZOW", "FUERTEVENTURA", "GRAN_CANARIA", "BARCELONA", "MALTA", "ROME", "GIRONA", "BYDGOSZCZ"]
    }, 
    {
        "key": "Rome Fiumicino",
        "code": "FCO",
        "destinations": ["BRUSSELS", "BARI", "BRINDISI", "CATANIA", "PALERMO", "BARCELONA", "VIENNA", "COMISO", "SHANNON", "CORFU", "IBIZA", "CHANIA", "TEL_AVIV", "LANZAROTE", "MARSEILLE", "MALAGA", "ALICANTE", "KOS", "RHODES", "MALTA", "SEVILLE"]
    }, 
    {
        "key": "Milan Malpensa",
        "code": "MXP",
        "destinations": ["BRUSSELS", "BARI", "KATOWICE", "TENERIFE", "BRINDISI", "EINDHOVEN", "GRAN_CANARIA", "CATANIA", "PALERMO", "BERLIN", "COMISO", "HERAKLION", "LIVERPOOL", "BUCHAREST", "LAMEZIA", "KAUNAS", "SOFIA", "VALENCIA", "PORTO", "PALMA", "MALAGA", "ALICANTE", "LISBON", "MANCHESTER", "ALMERIA", "LONDON", "DUBLIN", "MADRID", "BRISTOL", "SEVILLE"]
    }, 
    {
        "key": "Tenerife North", 
        "code": "TFN", 
        "destinations": ["BARCELONA", "MADRID"]
    }
]

export default airports;
