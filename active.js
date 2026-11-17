/* ===========================================================================
   WHICH COUNTRIES ARE LIVE ON THE SITE
   ---------------------------------------------------------------------------
   THIS IS THE ONLY LINE YOU EDIT TO PUBLISH A NEW COUNTRY.

   Nothing is deleted. All 39 countries' data is still sitting in data.js,
   universities-more.js, immigration.js, work.js and programs.js, exactly as it
   was. A country simply does not appear anywhere on the site until its slug is
   listed below.

   TO PUBLISH A COUNTRY:
     1. Verify its facts the way Romania was verified — at minimum:
          · how many intakes, and the real application months
          · the English rule (is MOI accepted? what replaces IELTS?)
          · who is eligible to apply at all
          · work hours
          · what it costs to get there
     2. Add its slug to the list below.
     3. Commit. Two minutes later it is live.

   TO TAKE A COUNTRY DOWN: remove its slug. Its data stays safe in the files.

   The slugs, for when you are ready:
     romania · italy · germany · poland · hungary · czechia · netherlands
     france · spain · portugal · sweden · finland · denmark · ireland
     austria · belgium · lithuania · latvia · estonia · slovakia · slovenia
     croatia · greece · cyprus · bulgaria · malta · usa · uk · canada
     australia · malaysia · china · japan · south-korea · turkey · uae
     north-cyprus · georgia · russia

   Publishing a country you have not checked is the one thing this site exists
   to prevent. An empty site is honest. A full site of guesses is not.
   =========================================================================== */

window.ACTIVE = ['romania'];


/* --- everything below is plumbing; you do not need to touch it ------------ */
(function () {
  var on = function (slug) { return window.ACTIVE.indexOf(slug) > -1; };

  window.COUNTRIES = window.COUNTRIES.filter(function (c) { return on(c.slug); });
  window.UNIVERSITIES = window.UNIVERSITIES.filter(function (u) { return on(u.country); });

  var liveUnis = {};
  window.UNIVERSITIES.forEach(function (u) { liveUnis[u.name] = true; });
  Object.keys(window.PROGRAMS).forEach(function (k) {
    if (!liveUnis[k]) delete window.PROGRAMS[k];
  });

  Object.keys(window.IMMIG).forEach(function (k) { if (!on(k)) delete window.IMMIG[k]; });
  Object.keys(window.WORK).forEach(function (k) { if (!on(k)) delete window.WORK[k]; });

  var liveRegions = {};
  window.COUNTRIES.forEach(function (c) { liveRegions[c.region] = true; });
  window.REGIONS = window.REGIONS.filter(function (r) {
    return r.id === 'all' || liveRegions[r.id];
  });

  window.TRENDING = window.TRENDING.filter(on);
  window.COUNTRIES.forEach(function (c) {
    c.trending = window.TRENDING.indexOf(c.slug) > -1;
    c.trendRank = c.trending ? window.TRENDING.indexOf(c.slug) : 999;
  });

  /* Tools that only make sense when there is something to compare against.
     They come back on their own once three countries are live. */
  window.MULTI = window.COUNTRIES.length >= 3;
})();
