/* ===========================================================================
   UNIVERSITIES — part 2
   ---------------------------------------------------------------------------
   The rule for this list: a university belongs here only if Bangladeshi
   students realistically go there. Not "every university in the world" —
   a list of three thousand institutions that do not take Bangladeshi
   applicants is not help, it is noise.

   Add a row with the same shape as the rest and it appears everywhere
   automatically: country page, course finder, counts.

     U('Name', 'country-slug', 'City', 'public'|'private',
       [subject ids], [levels], { moi:true })

   subject ids and levels come from data.js.
   =========================================================================== */
(function () {
  const U = (name, country, city, type, subjects, levels, o) => Object.assign({
    name, country, city, type, subjects, levels, verified: false
  }, o || {});

  window.UNIVERSITIES.push(

  /* ================= ROMANIA ================= */
  U('Alexandru Ioan Cuza University of Iași', 'romania', 'Iași', 'public', ['business','cs','law','social'], ['bachelor','master','phd'], {moi:true}),
  U('Technical University of Cluj-Napoca', 'romania', 'Cluj-Napoca', 'public', ['engineering','cs'], ['bachelor','master','phd'], {moi:true}),
  U('Politehnica University of Timișoara', 'romania', 'Timișoara', 'public', ['engineering','cs'], ['bachelor','master','phd'], {moi:true}),
  U('Lucian Blaga University of Sibiu', 'romania', 'Sibiu', 'public', ['engineering','business','social'], ['bachelor','master'], {moi:true}),
  U('Ovidius University of Constanța', 'romania', 'Constanța', 'public', ['medicine','business','science'], ['bachelor','master'], {moi:true}),
  U('University of Craiova', 'romania', 'Craiova', 'public', ['engineering','business','agri'], ['bachelor','master'], {moi:true}),
  U('University of Oradea', 'romania', 'Oradea', 'public', ['engineering','medicine','business'], ['bachelor','master'], {moi:true}),
  U('Dunărea de Jos University of Galați', 'romania', 'Galați', 'public', ['engineering','agri','science'], ['bachelor','master'], {moi:true}),
  U('Ștefan cel Mare University of Suceava', 'romania', 'Suceava', 'public', ['cs','engineering','business'], ['bachelor','master'], {moi:true}),
  U('Valahia University of Târgoviște', 'romania', 'Târgoviște', 'public', ['engineering','business','social'], ['bachelor','master'], {moi:true}),

  /* ================= ITALY ================= */
  U('University of Milan', 'italy', 'Milan', 'public', ['business','medicine','law','science'], ['bachelor','master','phd']),
  U('University of Pisa', 'italy', 'Pisa', 'public', ['engineering','cs','science'], ['bachelor','master','phd']),
  U('University of Florence', 'italy', 'Florence', 'public', ['arts','engineering','business'], ['bachelor','master','phd']),
  U('University of Trento', 'italy', 'Trento', 'public', ['cs','engineering','social'], ['bachelor','master','phd']),
  U('University of Pavia', 'italy', 'Pavia', 'public', ['medicine','engineering','science'], ['bachelor','master','phd']),
  U('Ca\' Foscari University of Venice', 'italy', 'Venice', 'public', ['business','arts','social'], ['bachelor','master','phd']),
  U('University of Parma', 'italy', 'Parma', 'public', ['agri','medicine','engineering'], ['bachelor','master']),
  U('University of Verona', 'italy', 'Verona', 'public', ['business','medicine','arts'], ['bachelor','master']),
  U('University of Genoa', 'italy', 'Genoa', 'public', ['engineering','science','medicine'], ['bachelor','master']),
  U('University of Camerino', 'italy', 'Camerino', 'public', ['science','cs','law'], ['bachelor','master','phd']),

  /* ================= GERMANY ================= */
  U('University of Stuttgart', 'germany', 'Stuttgart', 'public', ['engineering','cs'], ['master','phd']),
  U('TU Dresden', 'germany', 'Dresden', 'public', ['engineering','cs','science'], ['master','phd']),
  U('TU Chemnitz', 'germany', 'Chemnitz', 'public', ['engineering','cs'], ['bachelor','master']),
  U('Otto von Guericke University Magdeburg', 'germany', 'Magdeburg', 'public', ['engineering','cs','medicine'], ['bachelor','master']),
  U('University of Duisburg-Essen', 'germany', 'Duisburg', 'public', ['engineering','business','cs'], ['bachelor','master']),
  U('Schmalkalden University of Applied Sciences', 'germany', 'Schmalkalden', 'public', ['business','cs','engineering'], ['bachelor','master']),
  U('Anhalt University of Applied Sciences', 'germany', 'Köthen', 'public', ['engineering','business','arts'], ['bachelor','master']),
  U('Furtwangen University', 'germany', 'Furtwangen', 'public', ['cs','engineering','business'], ['bachelor','master']),
  U('Brandenburg University of Technology', 'germany', 'Cottbus', 'public', ['engineering','cs'], ['bachelor','master']),
  U('University of Siegen', 'germany', 'Siegen', 'public', ['engineering','cs','social'], ['bachelor','master']),

  /* ================= POLAND ================= */
  U('Lazarski University', 'poland', 'Warsaw', 'private', ['business','law','medicine'], ['bachelor','master'], {moi:true}),
  U('Collegium Civitas', 'poland', 'Warsaw', 'private', ['social','business','arts'], ['bachelor','master'], {moi:true}),
  U('University of Information Technology and Management', 'poland', 'Rzeszów', 'private', ['cs','business'], ['bachelor','master'], {moi:true}),
  U('AGH University of Science and Technology', 'poland', 'Kraków', 'public', ['engineering','cs','science'], ['bachelor','master','phd']),
  U('Wrocław University of Science and Technology', 'poland', 'Wrocław', 'public', ['engineering','cs'], ['bachelor','master','phd']),
  U('University of Łódź', 'poland', 'Łódź', 'public', ['business','social','law'], ['bachelor','master'], {moi:true}),
  U('WSB Merito University', 'poland', 'Poznań', 'private', ['business','cs','hospitality'], ['bachelor','master'], {moi:true}),
  U('Poznań University of Technology', 'poland', 'Poznań', 'public', ['engineering','cs'], ['bachelor','master']),
  U('University of Gdańsk', 'poland', 'Gdańsk', 'public', ['business','social','science'], ['bachelor','master'], {moi:true}),

  /* ================= HUNGARY ================= */
  U('University of Pécs', 'hungary', 'Pécs', 'public', ['medicine','engineering','business'], ['bachelor','master','phd'], {moi:true}),
  U('Óbuda University', 'hungary', 'Budapest', 'public', ['engineering','cs'], ['bachelor','master'], {moi:true}),
  U('Széchenyi István University', 'hungary', 'Győr', 'public', ['engineering','business','law'], ['bachelor','master'], {moi:true}),
  U('University of Miskolc', 'hungary', 'Miskolc', 'public', ['engineering','business','science'], ['bachelor','master'], {moi:true}),
  U('Hungarian University of Agriculture and Life Sciences', 'hungary', 'Gödöllő', 'public', ['agri','science','business'], ['bachelor','master','phd'], {moi:true}),

  /* ================= CYPRUS ================= */
  U('European University Cyprus', 'cyprus', 'Nicosia', 'private', ['business','medicine','cs','law'], ['bachelor','master','phd'], {moi:true}),
  U('Frederick University', 'cyprus', 'Nicosia', 'private', ['engineering','business','arts'], ['bachelor','master','phd'], {moi:true}),
  U('Cyprus University of Technology', 'cyprus', 'Limassol', 'public', ['engineering','business','hospitality'], ['bachelor','master','phd'], {moi:true}),
  U('UCLan Cyprus', 'cyprus', 'Larnaca', 'private', ['business','law','cs'], ['bachelor','master'], {moi:true}),
  U('Neapolis University Pafos', 'cyprus', 'Paphos', 'private', ['business','law','arts'], ['bachelor','master'], {moi:true}),
  U('Cyprus Institute of Marketing (CIM)', 'cyprus', 'Nicosia', 'private', ['business'], ['bachelor','master'], {moi:true}),

  /* ================= GREECE ================= */
  U('National and Kapodistrian University of Athens', 'greece', 'Athens', 'public', ['medicine','law','science','arts'], ['bachelor','master','phd'], {moi:true}),
  U('National Technical University of Athens', 'greece', 'Athens', 'public', ['engineering','cs'], ['bachelor','master','phd']),
  U('Athens University of Economics and Business', 'greece', 'Athens', 'public', ['business','cs','social'], ['bachelor','master','phd'], {moi:true}),
  U('University of Patras', 'greece', 'Patras', 'public', ['engineering','medicine','science'], ['bachelor','master','phd'], {moi:true}),
  U('University of the Aegean', 'greece', 'Mytilene', 'public', ['hospitality','social','science'], ['bachelor','master'], {moi:true}),
  U('University of Macedonia', 'greece', 'Thessaloniki', 'public', ['business','social','cs'], ['bachelor','master'], {moi:true}),
  U('University of Piraeus', 'greece', 'Piraeus', 'public', ['business','cs','social'], ['bachelor','master'], {moi:true}),
  U('Hellenic Mediterranean University', 'greece', 'Heraklion', 'public', ['engineering','hospitality','agri'], ['bachelor','master'], {moi:true}),
  U('The American College of Greece', 'greece', 'Athens', 'private', ['business','arts','cs'], ['bachelor','master'], {moi:true}),

  /* ================= MALAYSIA ================= */
  U('Limkokwing University', 'malaysia', 'Cyberjaya', 'private', ['arts','business','cs'], ['bachelor','master'], {moi:true}),
  U('INTI International University', 'malaysia', 'Nilai', 'private', ['business','engineering','cs'], ['bachelor','master'], {moi:true}),
  U('SEGi University', 'malaysia', 'Kota Damansara', 'private', ['business','medicine','cs'], ['bachelor','master'], {moi:true}),
  U('Management and Science University (MSU)', 'malaysia', 'Shah Alam', 'private', ['business','medicine','cs'], ['bachelor','master'], {moi:true}),
  U('Infrastructure University Kuala Lumpur', 'malaysia', 'Kajang', 'private', ['engineering','business'], ['bachelor','master'], {moi:true}),
  U('City University Malaysia', 'malaysia', 'Petaling Jaya', 'private', ['business','cs','engineering'], ['bachelor','master'], {moi:true}),
  U('Lincoln University College', 'malaysia', 'Petaling Jaya', 'private', ['medicine','business','cs'], ['bachelor','master'], {moi:true}),
  U('Universiti Teknologi Malaysia (UTM)', 'malaysia', 'Johor Bahru', 'public', ['engineering','cs','science'], ['bachelor','master','phd'], {moi:true}),
  U('Universiti Sains Malaysia (USM)', 'malaysia', 'Penang', 'public', ['science','engineering','medicine'], ['bachelor','master','phd'], {moi:true}),
  U('Universiti Putra Malaysia (UPM)', 'malaysia', 'Serdang', 'public', ['agri','engineering','business'], ['bachelor','master','phd'], {moi:true}),
  U('UNITEN', 'malaysia', 'Kajang', 'private', ['engineering','cs','business'], ['bachelor','master'], {moi:true}),
  U('Nilai University', 'malaysia', 'Nilai', 'private', ['hospitality','business','medicine'], ['bachelor','master'], {moi:true}),
  U('Albukhary International University', 'malaysia', 'Alor Setar', 'private', ['business','cs','social'], ['bachelor'], {moi:true}),

  /* ================= CHINA ================= */
  U('Nanjing University', 'china', 'Nanjing', 'public', ['science','business','social'], ['bachelor','master','phd']),
  U('Wuhan University of Technology', 'china', 'Wuhan', 'public', ['engineering','cs','business'], ['bachelor','master','phd']),
  U('Southeast University', 'china', 'Nanjing', 'public', ['engineering','cs','medicine'], ['bachelor','master','phd']),
  U('Hohai University', 'china', 'Nanjing', 'public', ['engineering','science'], ['bachelor','master','phd']),
  U('Shandong University', 'china', 'Jinan', 'public', ['medicine','engineering','business'], ['bachelor','master','phd']),
  U('Donghua University', 'china', 'Shanghai', 'public', ['engineering','arts','business'], ['bachelor','master','phd']),
  U('Harbin Institute of Technology', 'china', 'Harbin', 'public', ['engineering','cs'], ['bachelor','master','phd']),
  U('Central South University', 'china', 'Changsha', 'public', ['engineering','medicine','science'], ['bachelor','master','phd']),
  U('Jiangsu University of Science and Technology', 'china', 'Zhenjiang', 'public', ['engineering','cs'], ['bachelor','master']),
  U('Xiamen University', 'china', 'Xiamen', 'public', ['business','science','social'], ['bachelor','master','phd']),

  /* ================= UK ================= */
  U('University of Greenwich', 'uk', 'London', 'public', ['business','engineering','cs'], ['bachelor','master'], {moi:true}),
  U('University of Sunderland', 'uk', 'Sunderland', 'public', ['business','cs','medicine'], ['bachelor','master'], {moi:true}),
  U('Teesside University', 'uk', 'Middlesbrough', 'public', ['cs','engineering','business'], ['bachelor','master'], {moi:true}),
  U('University of Bedfordshire', 'uk', 'Luton', 'public', ['business','cs','social'], ['bachelor','master'], {moi:true}),
  U('University of Portsmouth', 'uk', 'Portsmouth', 'public', ['cs','business','engineering'], ['bachelor','master'], {moi:true}),
  U('Northumbria University', 'uk', 'Newcastle', 'public', ['business','cs','law'], ['bachelor','master'], {moi:true}),
  U('Middlesex University', 'uk', 'London', 'public', ['business','cs','arts'], ['bachelor','master'], {moi:true}),
  U('University of East London', 'uk', 'London', 'public', ['business','cs','social'], ['bachelor','master'], {moi:true}),
  U('Birmingham City University', 'uk', 'Birmingham', 'public', ['business','arts','engineering'], ['bachelor','master'], {moi:true}),
  U('University of Chester', 'uk', 'Chester', 'public', ['business','social','medicine'], ['bachelor','master'], {moi:true}),
  U('Ulster University', 'uk', 'Belfast', 'public', ['business','cs','engineering'], ['bachelor','master'], {moi:true}),
  U('University of Bolton', 'uk', 'Bolton', 'public', ['business','engineering','cs'], ['bachelor','master'], {moi:true}),

  /* ================= USA ================= */
  U('Texas Tech University', 'usa', 'Lubbock', 'public', ['engineering','business','agri'], ['bachelor','master','phd'], {moi:true}),
  U('University of Memphis', 'usa', 'Memphis', 'public', ['business','cs','engineering'], ['bachelor','master','phd'], {moi:true}),
  U('Kent State University', 'usa', 'Kent', 'public', ['business','arts','cs'], ['bachelor','master'], {moi:true}),
  U('Missouri University of Science and Technology', 'usa', 'Rolla', 'public', ['engineering','cs'], ['bachelor','master','phd'], {moi:true}),
  U('Southern Illinois University Carbondale', 'usa', 'Carbondale', 'public', ['engineering','business','science'], ['bachelor','master','phd'], {moi:true}),
  U('Lamar University', 'usa', 'Beaumont', 'public', ['engineering','business','cs'], ['bachelor','master'], {moi:true}),
  U('Youngstown State University', 'usa', 'Youngstown', 'public', ['engineering','business','cs'], ['bachelor','master'], {moi:true}),
  U('North Dakota State University', 'usa', 'Fargo', 'public', ['engineering','agri','cs'], ['bachelor','master','phd'], {moi:true}),
  U('Western Michigan University', 'usa', 'Kalamazoo', 'public', ['engineering','business','cs'], ['bachelor','master','phd'], {moi:true}),
  U('University of Alabama in Huntsville', 'usa', 'Huntsville', 'public', ['engineering','cs','science'], ['bachelor','master','phd'], {moi:true}),

  /* ================= CANADA ================= */
  U('Memorial University of Newfoundland', 'canada', 'St. John\'s', 'public', ['engineering','business','science'], ['bachelor','master','phd']),
  U('University of Regina', 'canada', 'Regina', 'public', ['engineering','business','cs'], ['bachelor','master']),
  U('Lakehead University', 'canada', 'Thunder Bay', 'public', ['engineering','business','science'], ['bachelor','master']),
  U('University of New Brunswick', 'canada', 'Fredericton', 'public', ['engineering','cs','business'], ['bachelor','master','phd']),
  U('Brock University', 'canada', 'St. Catharines', 'public', ['business','social','science'], ['bachelor','master']),
  U('Thompson Rivers University', 'canada', 'Kamloops', 'public', ['business','cs','hospitality'], ['bachelor','master']),
  U('University of Saskatchewan', 'canada', 'Saskatoon', 'public', ['agri','engineering','medicine'], ['bachelor','master','phd']),
  U('Trent University', 'canada', 'Peterborough', 'public', ['science','business','social'], ['bachelor','master']),

  /* ================= NORTH CYPRUS ================= */
  U('Eastern Mediterranean University (EMU)', 'north-cyprus', 'Famagusta', 'public', ['engineering','business','arts'], ['bachelor','master','phd'], {moi:true}),
  U('Girne American University', 'north-cyprus', 'Kyrenia', 'private', ['business','cs','arts'], ['bachelor','master'], {moi:true}),
  U('Final International University', 'north-cyprus', 'Kyrenia', 'private', ['business','cs','law'], ['bachelor','master'], {moi:true}),
  U('European University of Lefke', 'north-cyprus', 'Lefke', 'private', ['business','engineering','arts'], ['bachelor','master'], {moi:true}),
  U('University of Kyrenia', 'north-cyprus', 'Kyrenia', 'private', ['medicine','business','engineering'], ['bachelor','master'], {moi:true}),

  /* ================= GEORGIA ================= */
  U('David Tvildiani Medical University', 'georgia', 'Tbilisi', 'private', ['medicine'], ['bachelor','master'], {moi:true}),
  U('Caucasus University', 'georgia', 'Tbilisi', 'private', ['business','law','cs'], ['bachelor','master'], {moi:true}),
  U('Georgian American University', 'georgia', 'Tbilisi', 'private', ['business','law','social'], ['bachelor','master'], {moi:true}),
  U('New Vision University', 'georgia', 'Tbilisi', 'private', ['medicine','business'], ['bachelor','master'], {moi:true}),
  U('Batumi Shota Rustaveli State University', 'georgia', 'Batumi', 'public', ['medicine','business','social'], ['bachelor','master'], {moi:true}),
  U('Ilia State University', 'georgia', 'Tbilisi', 'public', ['science','social','business'], ['bachelor','master','phd'], {moi:true}),

  /* ================= TURKEY ================= */
  U('Istanbul Aydin University', 'turkey', 'Istanbul', 'private', ['business','engineering','medicine'], ['bachelor','master'], {moi:true}),
  U('Istanbul Gelisim University', 'turkey', 'Istanbul', 'private', ['business','engineering','hospitality'], ['bachelor','master'], {moi:true}),
  U('Bahçeşehir University', 'turkey', 'Istanbul', 'private', ['business','cs','arts'], ['bachelor','master'], {moi:true}),
  U('Karabük University', 'turkey', 'Karabük', 'public', ['engineering','business','cs'], ['bachelor','master','phd'], {moi:true}),
  U('Sakarya University', 'turkey', 'Sakarya', 'public', ['engineering','business','social'], ['bachelor','master'], {moi:true}),
  U('Ege University', 'turkey', 'Izmir', 'public', ['medicine','agri','engineering'], ['bachelor','master','phd'], {moi:true}),

  /* ================= FINLAND ================= */
  U('LUT University', 'finland', 'Lappeenranta', 'public', ['engineering','business','science'], ['bachelor','master','phd']),
  U('Tampere University', 'finland', 'Tampere', 'public', ['engineering','cs','medicine'], ['bachelor','master','phd']),
  U('University of Turku', 'finland', 'Turku', 'public', ['science','medicine','business'], ['master','phd']),
  U('Metropolia University of Applied Sciences', 'finland', 'Helsinki', 'public', ['engineering','business','medicine'], ['bachelor','master']),
  U('Centria University of Applied Sciences', 'finland', 'Kokkola', 'public', ['business','engineering','cs'], ['bachelor','master']),
  U('Laurea University of Applied Sciences', 'finland', 'Vantaa', 'public', ['business','medicine','social'], ['bachelor','master']),

  /* ================= SWEDEN ================= */
  U('Chalmers University of Technology', 'sweden', 'Gothenburg', 'public', ['engineering','cs'], ['master','phd']),
  U('Linköping University', 'sweden', 'Linköping', 'public', ['engineering','cs','medicine'], ['master','phd']),
  U('University of Gothenburg', 'sweden', 'Gothenburg', 'public', ['business','social','science'], ['master','phd']),
  U('Jönköping University', 'sweden', 'Jönköping', 'public', ['business','engineering','cs'], ['bachelor','master']),
  U('Linnaeus University', 'sweden', 'Växjö', 'public', ['business','cs','social'], ['bachelor','master']),
  U('Dalarna University', 'sweden', 'Falun', 'public', ['business','cs','hospitality'], ['bachelor','master']),

  /* ================= NETHERLANDS ================= */
  U('University of Twente', 'netherlands', 'Enschede', 'public', ['engineering','cs','business'], ['bachelor','master','phd']),
  U('Eindhoven University of Technology', 'netherlands', 'Eindhoven', 'public', ['engineering','cs'], ['bachelor','master','phd']),
  U('Maastricht University', 'netherlands', 'Maastricht', 'public', ['business','medicine','social'], ['bachelor','master','phd']),
  U('Tilburg University', 'netherlands', 'Tilburg', 'public', ['business','law','social'], ['bachelor','master','phd']),
  U('Wageningen University', 'netherlands', 'Wageningen', 'public', ['agri','science'], ['bachelor','master','phd']),
  U('Hanze University of Applied Sciences', 'netherlands', 'Groningen', 'public', ['business','engineering','arts'], ['bachelor','master']),
  U('Saxion University of Applied Sciences', 'netherlands', 'Enschede', 'public', ['business','engineering','cs'], ['bachelor','master']),

  /* ================= IRELAND ================= */
  U('University College Cork', 'ireland', 'Cork', 'public', ['business','medicine','science'], ['bachelor','master','phd'], {moi:true}),
  U('Dublin City University', 'ireland', 'Dublin', 'public', ['business','cs','engineering'], ['bachelor','master','phd'], {moi:true}),
  U('University of Limerick', 'ireland', 'Limerick', 'public', ['engineering','business','cs'], ['bachelor','master'], {moi:true}),
  U('Technological University Dublin', 'ireland', 'Dublin', 'public', ['engineering','business','hospitality'], ['bachelor','master'], {moi:true}),
  U('Griffith College', 'ireland', 'Dublin', 'private', ['business','cs','law'], ['bachelor','master'], {moi:true}),
  U('Dublin Business School', 'ireland', 'Dublin', 'private', ['business','cs','social'], ['bachelor','master'], {moi:true}),

  /* ================= LITHUANIA / LATVIA / ESTONIA ================= */
  U('Vilnius Gediminas Technical University (VILNIUS TECH)', 'lithuania', 'Vilnius', 'public', ['engineering','cs','business'], ['bachelor','master','phd'], {moi:true}),
  U('Vytautas Magnus University', 'lithuania', 'Kaunas', 'public', ['business','social','agri'], ['bachelor','master'], {moi:true}),
  U('Mykolas Romeris University', 'lithuania', 'Vilnius', 'public', ['law','business','social'], ['bachelor','master'], {moi:true}),
  U('LCC International University', 'lithuania', 'Klaipėda', 'private', ['business','social','arts'], ['bachelor','master'], {moi:true}),
  U('Riga Stradiņš University', 'latvia', 'Riga', 'public', ['medicine','social'], ['bachelor','master','phd'], {moi:true}),
  U('Turiba University', 'latvia', 'Riga', 'private', ['business','law','hospitality'], ['bachelor','master'], {moi:true}),
  U('Transport and Telecommunication Institute', 'latvia', 'Riga', 'private', ['engineering','cs','business'], ['bachelor','master'], {moi:true}),
  U('Estonian University of Life Sciences', 'estonia', 'Tartu', 'public', ['agri','science','engineering'], ['bachelor','master','phd'], {moi:true}),
  U('Estonian Business School', 'estonia', 'Tallinn', 'private', ['business'], ['bachelor','master'], {moi:true}),

  /* ================= CZECHIA / SLOVAKIA / SLOVENIA / CROATIA ================= */
  U('Brno University of Technology', 'czechia', 'Brno', 'public', ['engineering','cs'], ['bachelor','master','phd']),
  U('Czech University of Life Sciences', 'czechia', 'Prague', 'public', ['agri','business','science'], ['bachelor','master','phd']),
  U('VSB – Technical University of Ostrava', 'czechia', 'Ostrava', 'public', ['engineering','cs','business'], ['bachelor','master']),
  U('Palacký University Olomouc', 'czechia', 'Olomouc', 'public', ['medicine','science','social'], ['bachelor','master','phd']),
  U('Technical University of Košice', 'slovakia', 'Košice', 'public', ['engineering','cs'], ['bachelor','master','phd']),
  U('University of Žilina', 'slovakia', 'Žilina', 'public', ['engineering','cs','business'], ['bachelor','master']),
  U('University of Maribor', 'slovenia', 'Maribor', 'public', ['engineering','business','agri'], ['bachelor','master','phd']),
  U('University of Primorska', 'slovenia', 'Koper', 'public', ['hospitality','business','science'], ['bachelor','master']),
  U('University of Rijeka', 'croatia', 'Rijeka', 'public', ['engineering','medicine','business'], ['bachelor','master']),
  U('RIT Croatia', 'croatia', 'Dubrovnik', 'private', ['business','hospitality','cs'], ['bachelor'], {moi:true}),

  /* ================= BULGARIA / MALTA / PORTUGAL / SPAIN ================= */
  U('Technical University of Sofia', 'bulgaria', 'Sofia', 'public', ['engineering','cs'], ['bachelor','master','phd'], {moi:true}),
  U('American University in Bulgaria', 'bulgaria', 'Blagoevgrad', 'private', ['business','cs','social'], ['bachelor','master'], {moi:true}),
  U('Medical University of Varna', 'bulgaria', 'Varna', 'public', ['medicine'], ['bachelor','master'], {moi:true}),
  U('Medical University of Plovdiv', 'bulgaria', 'Plovdiv', 'public', ['medicine'], ['bachelor','master'], {moi:true}),
  U('MCAST', 'malta', 'Paola', 'public', ['engineering','business','arts'], ['bachelor','master'], {moi:true}),
  U('NOVA University Lisbon', 'portugal', 'Lisbon', 'public', ['business','cs','science'], ['bachelor','master','phd'], {moi:true}),
  U('University of Minho', 'portugal', 'Braga', 'public', ['engineering','business','social'], ['bachelor','master','phd'], {moi:true}),
  U('University of Aveiro', 'portugal', 'Aveiro', 'public', ['engineering','cs','science'], ['bachelor','master','phd'], {moi:true}),
  U('Autonomous University of Barcelona', 'spain', 'Barcelona', 'public', ['science','social','business'], ['bachelor','master','phd']),
  U('Autonomous University of Madrid', 'spain', 'Madrid', 'public', ['science','law','business'], ['bachelor','master','phd']),
  U('Universidad Carlos III de Madrid', 'spain', 'Madrid', 'public', ['business','engineering','law'], ['bachelor','master','phd']),
  U('University of Granada', 'spain', 'Granada', 'public', ['arts','science','medicine'], ['bachelor','master','phd']),

  /* ================= FRANCE / AUSTRIA / BELGIUM / DENMARK ================= */
  U('University of Strasbourg', 'france', 'Strasbourg', 'public', ['science','law','business'], ['bachelor','master','phd']),
  U('University of Lille', 'france', 'Lille', 'public', ['business','science','social'], ['bachelor','master','phd']),
  U('Aix-Marseille University', 'france', 'Marseille', 'public', ['science','medicine','social'], ['bachelor','master','phd']),
  U('University of Montpellier', 'france', 'Montpellier', 'public', ['science','medicine','engineering'], ['bachelor','master','phd']),
  U('University of Graz', 'austria', 'Graz', 'public', ['business','law','science'], ['bachelor','master','phd']),
  U('TU Graz', 'austria', 'Graz', 'public', ['engineering','cs'], ['bachelor','master','phd']),
  U('Johannes Kepler University Linz', 'austria', 'Linz', 'public', ['business','cs','law'], ['bachelor','master','phd']),
  U('University of Antwerp', 'belgium', 'Antwerp', 'public', ['business','medicine','social'], ['master','phd']),
  U('Vrije Universiteit Brussel', 'belgium', 'Brussels', 'public', ['engineering','business','social'], ['master','phd']),
  U('University of Copenhagen', 'denmark', 'Copenhagen', 'public', ['science','medicine','social'], ['master','phd']),
  U('Aalborg University', 'denmark', 'Aalborg', 'public', ['engineering','cs','business'], ['master','phd']),
  U('Copenhagen Business School', 'denmark', 'Copenhagen', 'private', ['business'], ['bachelor','master']),

  /* ================= AUSTRALIA / JAPAN / KOREA / UAE / RUSSIA ================= */
  U('RMIT University', 'australia', 'Melbourne', 'public', ['engineering','business','arts'], ['bachelor','master','phd']),
  U('University of Technology Sydney', 'australia', 'Sydney', 'public', ['engineering','business','cs'], ['bachelor','master','phd']),
  U('Griffith University', 'australia', 'Brisbane', 'public', ['business','hospitality','science'], ['bachelor','master']),
  U('Curtin University', 'australia', 'Perth', 'public', ['engineering','business','science'], ['bachelor','master','phd']),
  U('La Trobe University', 'australia', 'Melbourne', 'public', ['business','medicine','social'], ['bachelor','master']),
  U('Western Sydney University', 'australia', 'Sydney', 'public', ['business','cs','social'], ['bachelor','master']),
  U('Ritsumeikan Asia Pacific University (APU)', 'japan', 'Beppu', 'private', ['business','social','hospitality'], ['bachelor','master'], {moi:true}),
  U('University of Tsukuba', 'japan', 'Tsukuba', 'public', ['science','engineering','social'], ['bachelor','master','phd']),
  U('Hokkaido University', 'japan', 'Sapporo', 'public', ['agri','engineering','science'], ['master','phd']),
  U('Hanyang University', 'south-korea', 'Seoul', 'private', ['engineering','business','cs'], ['bachelor','master','phd']),
  U('Kyung Hee University', 'south-korea', 'Seoul', 'private', ['business','hospitality','social'], ['bachelor','master']),
  U('Sungkyunkwan University', 'south-korea', 'Seoul', 'private', ['engineering','business','cs'], ['bachelor','master','phd']),
  U('Middlesex University Dubai', 'uae', 'Dubai', 'private', ['business','cs','arts'], ['bachelor','master'], {moi:true}),
  U('Amity University Dubai', 'uae', 'Dubai', 'private', ['business','engineering','cs'], ['bachelor','master'], {moi:true}),
  U('University of Wollongong in Dubai', 'uae', 'Dubai', 'private', ['business','cs','engineering'], ['bachelor','master'], {moi:true}),
  U('Canadian University Dubai', 'uae', 'Dubai', 'private', ['business','engineering','arts'], ['bachelor','master'], {moi:true}),
  U('Moscow State University', 'russia', 'Moscow', 'public', ['science','social','medicine'], ['bachelor','master','phd'], {moi:true}),
  U('Saint Petersburg State University', 'russia', 'Saint Petersburg', 'public', ['science','law','social'], ['bachelor','master','phd'], {moi:true}),
  U('ITMO University', 'russia', 'Saint Petersburg', 'public', ['cs','engineering','science'], ['bachelor','master','phd'], {moi:true}),
  U('Kursk State Medical University', 'russia', 'Kursk', 'public', ['medicine'], ['bachelor','master'], {moi:true})

  );
})();
