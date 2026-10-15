"use strict";
(() => {
  var ls = Object.defineProperty;
  var h = (n, s) => {
    for (var e in s) ls(n, e, { get: s[e], enumerable: true });
  };
  var Bt = {};
  h(Bt, { PagefindConfig: () => Re, PagefindElement: () => f, PagefindFilterDropdown: () => Me, PagefindFilterPane: () => Ne, PagefindInput: () => ke, PagefindKeyboardHints: () => Le, PagefindModal: () => Oe, PagefindModalBody: () => Ie, PagefindModalFooter: () => Ue, PagefindModalHeader: () => we, PagefindModalTrigger: () => He, PagefindResults: () => Se, PagefindSearchbox: () => Fe, PagefindSummary: () => Ae, configureInstance: () => Qt, getInstanceManager: () => Ce });
  var os = "a[href], button, input, [tabindex]";
  function Kt(n) {
    let s = n.querySelectorAll(os);
    for (let e of s) if (!(e.tabIndex < 0) && !e.disabled && !e.hasAttribute("hidden") && window.getComputedStyle(e).display !== "none") return true;
    return false;
  }
  function $t(n, s) {
    let e = null;
    for (let t of s) t.contains(n) || !(n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING) || Kt(t) && (e === null || t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING) && (e = t);
    return e;
  }
  function Pe(n, s) {
    let e = null;
    for (let t of s) t.contains(n) || !(n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_PRECEDING) || Kt(t) && (e === null || t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING) && (e = t);
    return e;
  }
  var Ve = {};
  h(Ve, { comments: () => us, default: () => ps, direction: () => ds, strings: () => hs, thanks_to: () => cs });
  var cs = "Jan Claasen <jan@cloudcannon.com>", us = "", ds = "ltr", hs = { placeholder: "Soek", clear_search: "Opruim", load_more: "Laai nog resultate", search_label: "Soek hierdie webwerf", filters_label: "Filters", zero_results: "Geen resultate vir [SEARCH_TERM]", many_results: "[COUNT] resultate vir [SEARCH_TERM]", one_result: "[COUNT] resultate vir [SEARCH_TERM]", total_zero_results: "Geen resultate", total_one_result: "[COUNT] resultaat", total_many_results: "[COUNT] resultate", alt_search: "Geen resultate vir [SEARCH_TERM]. Toon resultate vir [DIFFERENT_TERM] in plaas daarvan", search_suggestion: "Geen resultate vir [SEARCH_TERM]. Probeer eerder een van die volgende terme:", searching: "Soek vir [SEARCH_TERM]", results_label: "Soekresultate", keyboard_navigate: "navigeer", keyboard_select: "kies", keyboard_clear: "wis", keyboard_close: "sluit", keyboard_search: "soek", error_search: "Soek het misluk", filter_selected_one: "[COUNT] gekies", filter_selected_many: "[COUNT] gekies", input_hint: "Resultate sal verskyn terwyl jy tik", loading: "Laai" }, ps = { thanks_to: cs, comments: us, direction: ds, strings: hs };
  var qe = {};
  h(qe, { comments: () => _s, default: () => Es, direction: () => fs, strings: () => gs, thanks_to: () => ms });
  var ms = "Jermanuts", _s = "", fs = "rtl", gs = { placeholder: "بحث", clear_search: "امسح", load_more: "حمِّل المزيد من النتائج", search_label: "ابحث في هذا الموقع", filters_label: "تصفيات", zero_results: "لا توجد نتائج ل [SEARCH_TERM]", many_results: "[COUNT] نتائج ل [SEARCH_TERM]", one_result: "[COUNT] نتيجة ل [SEARCH_TERM]", total_zero_results: "لا توجد نتائج", total_one_result: "[COUNT] نتيجة", total_many_results: "[COUNT] نتائج", alt_search: "لا توجد نتائج ل [SEARCH_TERM]. يعرض النتائج ل [DIFFERENT_TERM] بدلاً من ذلك", search_suggestion: "لا توجد نتائج ل [SEARCH_TERM]. جرب أحد عمليات البحث التالية:", searching: "يبحث عن [SEARCH_TERM]...", results_label: "نتائج البحث", keyboard_navigate: "تنقل", keyboard_select: "اختيار", keyboard_clear: "امسح", keyboard_close: "إغلاق", keyboard_search: "بحث", error_search: "فشل البحث", filter_selected_one: "[COUNT] محدد", filter_selected_many: "[COUNT] محدد", input_hint: "ستظهر النتائج أثناء الكتابة", loading: "جارٍ التحميل" }, Es = { thanks_to: ms, comments: _s, direction: fs, strings: gs };
  var Ge = {};
  h(Ge, { comments: () => Ts, default: () => vs, direction: () => Cs, strings: () => ys, thanks_to: () => bs });
  var bs = "Maruf Alom <mail@marufalom.com>", Ts = "", Cs = "ltr", ys = { placeholder: "অনুসন্ধান করুন", clear_search: "মুছে ফেলুন", load_more: "আরো ফলাফল দেখুন", search_label: "এই ওয়েবসাইটে অনুসন্ধান করুন", filters_label: "ফিল্টার", zero_results: "[SEARCH_TERM] এর জন্য কিছু খুঁজে পাওয়া যায়নি", many_results: "[COUNT]-টি ফলাফল পাওয়া গিয়েছে [SEARCH_TERM] এর জন্য", one_result: "[COUNT]-টি ফলাফল পাওয়া গিয়েছে [SEARCH_TERM] এর জন্য", total_zero_results: "কোন ফলাফল নেই", total_one_result: "[COUNT]-টি ফলাফল", total_many_results: "[COUNT]-টি ফলাফল", alt_search: "কোন কিছু খুঁজে পাওয়া যায়নি [SEARCH_TERM] এর জন্য. পরিবর্তে [DIFFERENT_TERM] এর জন্য দেখানো হচ্ছে", search_suggestion: "কোন কিছু খুঁজে পাওয়া যায়নি [SEARCH_TERM] এর বিষয়ে. নিন্মের বিষয়বস্তু খুঁজে দেখুন:", searching: "অনুসন্ধান চলছে [SEARCH_TERM]...", results_label: "অনুসন্ধানের ফলাফল", keyboard_navigate: "নেভিগেট", keyboard_select: "নির্বাচন", keyboard_clear: "মুছুন", keyboard_close: "বন্ধ", keyboard_search: "অনুসন্ধান", error_search: "অনুসন্ধান ব্যর্থ", filter_selected_one: "[COUNT]-টি নির্বাচিত", filter_selected_many: "[COUNT]-টি নির্বাচিত", input_hint: "টাইপ করার সাথে সাথে ফলাফল দেখা যাবে", loading: "লোড হচ্ছে" }, vs = { thanks_to: bs, comments: Ts, direction: Cs, strings: ys };
  var We = {};
  h(We, { comments: () => ks, default: () => Ns, direction: () => As, strings: () => Ss, thanks_to: () => Rs });
  var Rs = "Pablo Villaverde <https://github.com/pvillaverde>", ks = "", As = "ltr", Ss = { placeholder: "Cerca", clear_search: "Netejar", load_more: "Veure més resultats", search_label: "Cerca en aquest lloc", filters_label: "Filtres", zero_results: "No es van trobar resultats per [SEARCH_TERM]", many_results: "[COUNT] resultats trobats per [SEARCH_TERM]", one_result: "[COUNT] resultat trobat per [SEARCH_TERM]", total_zero_results: "Sense resultats", total_one_result: "[COUNT] resultat", total_many_results: "[COUNT] resultats", alt_search: "No es van trobar resultats per [SEARCH_TERM]. Mostrant al seu lloc resultats per [DIFFERENT_TERM]", search_suggestion: "No es van trobar resultats per [SEARCH_TERM]. Proveu una de les cerques següents:", searching: "Cercant [SEARCH_TERM]...", results_label: "Resultats de la cerca", keyboard_navigate: "navegar", keyboard_select: "triar", keyboard_clear: "netejar", keyboard_close: "tancar", keyboard_search: "cercar", error_search: "Error en la cerca", filter_selected_one: "[COUNT] seleccionat", filter_selected_many: "[COUNT] seleccionats", input_hint: "Els resultats apareixeran mentre escriviu", loading: "Carregant" }, Ns = { thanks_to: Rs, comments: ks, direction: As, strings: Ss };
  var Ye = {};
  h(Ye, { comments: () => Os, default: () => ws, direction: () => xs, strings: () => Hs, thanks_to: () => Ms });
  var Ms = "Dalibor Hon <https://github.com/dallyh>", Os = "", xs = "ltr", Hs = { placeholder: "Hledat", clear_search: "Smazat", load_more: "Načíst další výsledky", search_label: "Prohledat tuto stránku", filters_label: "Filtry", zero_results: "Žádné výsledky pro [SEARCH_TERM]", many_results: "[COUNT] výsledků pro [SEARCH_TERM]", one_result: "[COUNT] výsledek pro [SEARCH_TERM]", total_zero_results: "Žádné výsledky", total_one_result: "[COUNT] výsledek", total_many_results: "[COUNT] výsledků", alt_search: "Žádné výsledky pro [SEARCH_TERM]. Zobrazují se výsledky pro [DIFFERENT_TERM]", search_suggestion: "Žádné výsledky pro [SEARCH_TERM]. Související výsledky hledání:", searching: "Hledám [SEARCH_TERM]...", results_label: "Výsledky hledání", keyboard_navigate: "navigovat", keyboard_select: "vybrat", keyboard_clear: "smazat", keyboard_close: "zavřít", keyboard_search: "hledat", error_search: "Hledání selhalo", filter_selected_one: "[COUNT] vybraný", filter_selected_many: "[COUNT] vybraných", input_hint: "Výsledky se zobrazí během psaní", loading: "Načítání" }, ws = { thanks_to: Ms, comments: Os, direction: xs, strings: Hs };
  var Je = {};
  h(Je, { comments: () => Us, default: () => Ps, direction: () => Ls, strings: () => Fs, thanks_to: () => Is });
  var Is = "Jonas Smedegaard <dr@jones.dk>", Us = "", Ls = "ltr", Fs = { placeholder: "Søg", clear_search: "Nulstil", load_more: "Indlæs flere resultater", search_label: "Søg på dette website", filters_label: "Filtre", zero_results: "Ingen resultater for [SEARCH_TERM]", many_results: "[COUNT] resultater for [SEARCH_TERM]", one_result: "[COUNT] resultat for [SEARCH_TERM]", total_zero_results: "Ingen resultater", total_one_result: "[COUNT] resultat", total_many_results: "[COUNT] resultater", alt_search: "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet", search_suggestion: "Ingen resultater for [SEARCH_TERM]. Prøv et af disse søgeord i stedet:", searching: "Søger efter [SEARCH_TERM]...", results_label: "Søgeresultater", keyboard_navigate: "naviger", keyboard_select: "vælg", keyboard_clear: "ryd", keyboard_close: "luk", keyboard_search: "søg", error_search: "Søgning mislykkedes", filter_selected_one: "[COUNT] valgt", filter_selected_many: "[COUNT] valgte", input_hint: "Resultater vises mens du skriver", loading: "Indlæser" }, Ps = { thanks_to: Is, comments: Us, direction: Ls, strings: Fs };
  var Ze = {};
  h(Ze, { comments: () => Ds, default: () => Ks, direction: () => js, strings: () => Bs, thanks_to: () => zs });
  var zs = "Jan Claasen <jan@cloudcannon.com>", Ds = "", js = "ltr", Bs = { placeholder: "Suche", clear_search: "Löschen", load_more: "Mehr Ergebnisse laden", search_label: "Suche diese Seite", filters_label: "Filter", zero_results: "Keine Ergebnisse für [SEARCH_TERM]", many_results: "[COUNT] Ergebnisse für [SEARCH_TERM]", one_result: "[COUNT] Ergebnis für [SEARCH_TERM]", total_zero_results: "Keine Ergebnisse", total_one_result: "[COUNT] Ergebnis", total_many_results: "[COUNT] Ergebnisse", alt_search: "Keine Ergebnisse für [SEARCH_TERM]. Stattdessen werden Ergebnisse für [DIFFERENT_TERM] angezeigt", search_suggestion: "Keine Ergebnisse für [SEARCH_TERM]. Versuchen Sie eine der folgenden Suchen:", searching: "Suche nach [SEARCH_TERM] …", results_label: "Suchergebnisse", keyboard_navigate: "navigieren", keyboard_select: "auswählen", keyboard_clear: "löschen", keyboard_close: "schließen", keyboard_search: "suchen", error_search: "Suche fehlgeschlagen", filter_selected_one: "[COUNT] ausgewählt", filter_selected_many: "[COUNT] ausgewählt", input_hint: "Ergebnisse werden während der Eingabe angezeigt", loading: "Wird geladen" }, Ks = { thanks_to: zs, comments: Ds, direction: js, strings: Bs };
  var Xe = {};
  h(Xe, { comments: () => Vs, default: () => Ws, direction: () => qs, strings: () => Gs, thanks_to: () => $s });
  var $s = "George Papadopoulos", Vs = "", qs = "ltr", Gs = { placeholder: "Αναζήτηση", clear_search: "Καθαρισμός", load_more: "Φόρτωση περισσότερων αποτελεσμάτων", search_label: "Αναζήτηση σε αυτόν τον ιστότοπο", filters_label: "Φίλτρα", zero_results: "Δεν βρέθηκαν αποτελέσματα για [SEARCH_TERM]", many_results: "[COUNT] αποτελέσματα για [SEARCH_TERM]", one_result: "[COUNT] αποτέλεσμα για [SEARCH_TERM]", total_zero_results: "Δεν βρέθηκαν αποτελέσματα", total_one_result: "[COUNT] αποτέλεσμα", total_many_results: "[COUNT] αποτελέσματα", alt_search: "Δεν βρέθηκαν αποτελέσματα για [SEARCH_TERM]. Εμφανίζονται αποτελέσματα για [DIFFERENT_TERM]", search_suggestion: "Δεν βρέθηκαν αποτελέσματα για [SEARCH_TERM]. Δοκιμάστε μία από τις παρακάτω αναζητήσεις:", searching: "Αναζήτηση για [SEARCH_TERM]...", results_label: "Αποτελέσματα αναζήτησης", keyboard_navigate: "πλοήγηση", keyboard_select: "επιλογή", keyboard_clear: "καθαρισμός", keyboard_close: "κλείσιμο", keyboard_search: "αναζήτηση", error_search: "Η αναζήτηση απέτυχε", filter_selected_one: "[COUNT] επιλεγμένο", filter_selected_many: "[COUNT] επιλεγμένα", input_hint: "Τα αποτελέσματα θα εμφανίζονται καθώς πληκτρολογείτε", loading: "Φόρτωση" }, Ws = { thanks_to: $s, comments: Vs, direction: qs, strings: Gs };
  var Qe = {};
  h(Qe, { comments: () => Js, default: () => Qs, direction: () => Zs, strings: () => Xs, thanks_to: () => Ys });
  var Ys = "Liam Bigelow <liam@cloudcannon.com>", Js = "", Zs = "ltr", Xs = { placeholder: "Search", clear_search: "Clear", load_more: "Load more results", search_label: "Search this site", filters_label: "Filters", zero_results: "No results for [SEARCH_TERM]", many_results: "[COUNT] results for [SEARCH_TERM]", one_result: "[COUNT] result for [SEARCH_TERM]", total_zero_results: "No results", total_one_result: "[COUNT] result", total_many_results: "[COUNT] results", alt_search: "No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead", search_suggestion: "No results for [SEARCH_TERM]. Try one of the following searches:", searching: "Searching for [SEARCH_TERM]...", results_label: "Search results", keyboard_navigate: "navigate", keyboard_select: "select", keyboard_clear: "clear", keyboard_close: "close", keyboard_search: "search", error_search: "Search failed", filter_selected_one: "[COUNT] selected", filter_selected_many: "[COUNT] selected", input_hint: "Results will appear as you type", loading: "Loading" }, Qs = { thanks_to: Ys, comments: Js, direction: Zs, strings: Xs };
  var et = {};
  h(et, { comments: () => tr, default: () => ir, direction: () => sr, strings: () => rr, thanks_to: () => er });
  var er = "Pablo Villaverde <https://github.com/pvillaverde>", tr = "", sr = "ltr", rr = { placeholder: "Buscar", clear_search: "Limpiar", load_more: "Ver más resultados", search_label: "Buscar en este sitio", filters_label: "Filtros", zero_results: "No se encontraron resultados para [SEARCH_TERM]", many_results: "[COUNT] resultados encontrados para [SEARCH_TERM]", one_result: "[COUNT] resultado encontrado para [SEARCH_TERM]", total_zero_results: "Sin resultados", total_one_result: "[COUNT] resultado", total_many_results: "[COUNT] resultados", alt_search: "No se encontraron resultados para [SEARCH_TERM]. Mostrando en su lugar resultados para [DIFFERENT_TERM]", search_suggestion: "No se encontraron resultados para [SEARCH_TERM]. Prueba una de las siguientes búsquedas:", searching: "Buscando [SEARCH_TERM]...", results_label: "Resultados de búsqueda", keyboard_navigate: "navegar", keyboard_select: "elegir", keyboard_clear: "limpiar", keyboard_close: "cerrar", keyboard_search: "buscar", error_search: "Error en la búsqueda", filter_selected_one: "[COUNT] seleccionado", filter_selected_many: "[COUNT] seleccionados", input_hint: "Los resultados aparecerán mientras escribe", loading: "Cargando" }, ir = { thanks_to: er, comments: tr, direction: sr, strings: rr };
  var tt = {};
  h(tt, { comments: () => ar, default: () => cr, direction: () => lr, strings: () => or, thanks_to: () => nr });
  var nr = "Mikel Larreategi <mlarreaegi@codesyntax.com>", ar = "", lr = "ltr", or = { placeholder: "Bilatu", clear_search: "Garbitu", load_more: "Kargatu emaitza gehiagi", search_label: "Bilatu", filters_label: "Iragazkiak", zero_results: "Ez dago emaitzarik [SEARCH_TERM] bilaketarentzat", many_results: "[COUNT] emaitza [SEARCH_TERM] bilaketarentzat", one_result: "Emaitza bat [COUNT] [SEARCH_TERM] bilaketarentzat", total_zero_results: "Emaitzarik ez", total_one_result: "[COUNT] emaitza", total_many_results: "[COUNT] emaitza", alt_search: "Ez dago emaitzarik [SEARCH_TERM] bilaketarentzat. [DIFFERENT_TERM] bilaketaren emaitzak erakusten", search_suggestion: "Ez dago emaitzarik [SEARCH_TERM] bilaketarentzat. Saiatu hauetako beste bateikin:", searching: "[SEARCH_TERM] bilatzen...", results_label: "Bilaketaren emaitzak", keyboard_navigate: "nabigatu", keyboard_select: "hautatu", keyboard_clear: "garbitu", keyboard_close: "itxi", keyboard_search: "bilatu", error_search: "Bilaketak huts egin du", filter_selected_one: "[COUNT] hautatuta", filter_selected_many: "[COUNT] hautatuta", input_hint: "Emaitzak idatzi ahala agertuko dira", loading: "Kargatzen" }, cr = { thanks_to: nr, comments: ar, direction: lr, strings: or };
  var st = {};
  h(st, { comments: () => dr, default: () => mr, direction: () => hr, strings: () => pr, thanks_to: () => ur });
  var ur = "Ali Khaleqi Yekta <https://yekta.dev>", dr = "", hr = "rtl", pr = { placeholder: "جستجو", clear_search: "پاکسازی", load_more: "بارگذاری نتایج بیشتر", search_label: "جستجو در سایت", filters_label: "فیلترها", zero_results: "نتیجه‌ای برای [SEARCH_TERM] یافت نشد", many_results: "[COUNT] نتیجه برای [SEARCH_TERM] یافت شد", one_result: "[COUNT] نتیجه برای [SEARCH_TERM] یافت شد", total_zero_results: "نتیجه‌ای یافت نشد", total_one_result: "[COUNT] نتیجه", total_many_results: "[COUNT] نتیجه", alt_search: "نتیجه‌ای برای [SEARCH_TERM] یافت نشد. در عوض نتایج برای [DIFFERENT_TERM] نمایش داده می‌شود", search_suggestion: "نتیجه‌ای برای [SEARCH_TERM] یافت نشد. یکی از جستجوهای زیر را امتحان کنید:", searching: "در حال جستجوی [SEARCH_TERM]...", results_label: "نتایج جستجو", keyboard_navigate: "پیمایش", keyboard_select: "انتخاب", keyboard_clear: "پاکسازی", keyboard_close: "بستن", keyboard_search: "جستجو", error_search: "جستجو ناموفق بود", filter_selected_one: "[COUNT] انتخاب شده", filter_selected_many: "[COUNT] انتخاب شده", input_hint: "نتایج هنگام تایپ نمایش داده می‌شوند", loading: "در حال بارگذاری" }, mr = { thanks_to: ur, comments: dr, direction: hr, strings: pr };
  var rt = {};
  h(rt, { comments: () => fr, default: () => br, direction: () => gr, strings: () => Er, thanks_to: () => _r });
  var _r = "Valtteri Laitinen <dev@valtlai.fi>", fr = "", gr = "ltr", Er = { placeholder: "Haku", clear_search: "Tyhjennä", load_more: "Lataa lisää tuloksia", search_label: "Hae tältä sivustolta", filters_label: "Suodattimet", zero_results: "Ei tuloksia haulle [SEARCH_TERM]", many_results: "[COUNT] tulosta haulle [SEARCH_TERM]", one_result: "[COUNT] tulos haulle [SEARCH_TERM]", total_zero_results: "Ei tuloksia", total_one_result: "[COUNT] tulos", total_many_results: "[COUNT] tulosta", alt_search: "Ei tuloksia haulle [SEARCH_TERM]. Näytetään tulokset sen sijaan haulle [DIFFERENT_TERM]", search_suggestion: "Ei tuloksia haulle [SEARCH_TERM]. Kokeile jotain seuraavista:", searching: "Haetaan [SEARCH_TERM]...", results_label: "Hakutulokset", keyboard_navigate: "siirry", keyboard_select: "valitse", keyboard_clear: "tyhjennä", keyboard_close: "sulje", keyboard_search: "hae", error_search: "Haku epäonnistui", filter_selected_one: "[COUNT] valittu", filter_selected_many: "[COUNT] valittu", input_hint: "Tulokset näkyvät kirjoittaessasi", loading: "Ladataan" }, br = { thanks_to: _r, comments: fr, direction: gr, strings: Er };
  var it = {};
  h(it, { comments: () => Cr, default: () => Rr, direction: () => yr, strings: () => vr, thanks_to: () => Tr });
  var Tr = "Nicolas Friedli <nicolas@theologique.ch>", Cr = "", yr = "ltr", vr = { placeholder: "Rechercher", clear_search: "Nettoyer", load_more: "Charger plus de résultats", search_label: "Recherche sur ce site", filters_label: "Filtres", zero_results: "Pas de résultat pour [SEARCH_TERM]", many_results: "[COUNT] résultats pour [SEARCH_TERM]", one_result: "[COUNT] résultat pour [SEARCH_TERM]", total_zero_results: "Pas de résultat", total_one_result: "[COUNT] résultat", total_many_results: "[COUNT] résultats", alt_search: "Pas de résultat pour [SEARCH_TERM]. Montre les résultats pour [DIFFERENT_TERM] à la place", search_suggestion: "Pas de résultat pour [SEARCH_TERM]. Essayer une des recherches suivantes:", searching: "Recherche [SEARCH_TERM]...", results_label: "Résultats de recherche", keyboard_navigate: "naviguer", keyboard_select: "choisir", keyboard_clear: "effacer", keyboard_close: "fermer", keyboard_search: "rechercher", error_search: "Échec de la recherche", filter_selected_one: "[COUNT] sélectionné", filter_selected_many: "[COUNT] sélectionnés", input_hint: "Les résultats apparaîtront au fur et à mesure de la saisie", loading: "Chargement" }, Rr = { thanks_to: Tr, comments: Cr, direction: yr, strings: vr };
  var nt = {};
  h(nt, { comments: () => Ar, default: () => Mr, direction: () => Sr, strings: () => Nr, thanks_to: () => kr });
  var kr = "Pablo Villaverde <https://github.com/pvillaverde>", Ar = "", Sr = "ltr", Nr = { placeholder: "Buscar", clear_search: "Limpar", load_more: "Ver máis resultados", search_label: "Buscar neste sitio", filters_label: "Filtros", zero_results: "Non se atoparon resultados para [SEARCH_TERM]", many_results: "[COUNT] resultados atopados para [SEARCH_TERM]", one_result: "[COUNT] resultado atopado para [SEARCH_TERM]", total_zero_results: "Sen resultados", total_one_result: "[COUNT] resultado", total_many_results: "[COUNT] resultados", alt_search: "Non se atoparon resultados para [SEARCH_TERM]. Amosando no seu lugar resultados para [DIFFERENT_TERM]", search_suggestion: "Non se atoparon resultados para [SEARCH_TERM]. Probe unha das seguintes pesquisas:", searching: "Buscando [SEARCH_TERM]...", results_label: "Resultados da busca", keyboard_navigate: "navegar", keyboard_select: "escoller", keyboard_clear: "limpar", keyboard_close: "pechar", keyboard_search: "buscar", error_search: "Erro na busca", filter_selected_one: "[COUNT] seleccionado", filter_selected_many: "[COUNT] seleccionados", input_hint: "Os resultados aparecerán mentres escribe", loading: "Cargando" }, Mr = { thanks_to: kr, comments: Ar, direction: Sr, strings: Nr };
  var at = {};
  h(at, { comments: () => xr, default: () => Ir, direction: () => Hr, strings: () => wr, thanks_to: () => Or });
  var Or = "Nir Tamir <nirtamir2@gmail.com>", xr = "", Hr = "rtl", wr = { placeholder: "חיפוש", clear_search: "ניקוי", load_more: "עוד תוצאות", search_label: "חיפוש באתר זה", filters_label: "מסננים", zero_results: "לא נמצאו תוצאות עבור [SEARCH_TERM]", many_results: "נמצאו [COUNT] תוצאות עבור [SEARCH_TERM]", one_result: "נמצאה תוצאה אחת עבור [SEARCH_TERM]", total_zero_results: "לא נמצאו תוצאות", total_one_result: "תוצאה [COUNT]", total_many_results: "[COUNT] תוצאות", alt_search: "לא נמצאו תוצאות עבור [SEARCH_TERM]. מוצגות תוצאות עבור [DIFFERENT_TERM]", search_suggestion: "לא נמצאו תוצאות עבור [SEARCH_TERM]. נסו אחד מהחיפושים הבאים:", searching: "מחפש את [SEARCH_TERM]...", results_label: "תוצאות חיפוש", keyboard_navigate: "ניווט", keyboard_select: "בחירה", keyboard_clear: "ניקוי", keyboard_close: "סגירה", keyboard_search: "חיפוש", error_search: "החיפוש נכשל", filter_selected_one: "[COUNT] נבחר", filter_selected_many: "[COUNT] נבחרו", input_hint: "התוצאות יופיעו תוך כדי הקלדה", loading: "טוען" }, Ir = { thanks_to: Or, comments: xr, direction: Hr, strings: wr };
  var lt = {};
  h(lt, { comments: () => Lr, default: () => zr, direction: () => Fr, strings: () => Pr, thanks_to: () => Ur });
  var Ur = "Amit Yadav <amit@thetechbasket.com>", Lr = "", Fr = "ltr", Pr = { placeholder: "खोजें", clear_search: "साफ करें", load_more: "और अधिक परिणाम लोड करें", search_label: "इस साइट में खोजें", filters_label: "फ़िल्टर", zero_results: "कोई परिणाम [SEARCH_TERM] के लिए नहीं मिला", many_results: "[COUNT] परिणाम [SEARCH_TERM] के लिए मिले", one_result: "[COUNT] परिणाम [SEARCH_TERM] के लिए मिला", total_zero_results: "कोई परिणाम नहीं", total_one_result: "[COUNT] परिणाम", total_many_results: "[COUNT] परिणाम", alt_search: "[SEARCH_TERM] के लिए कोई परिणाम नहीं मिला। इसके बजाय [DIFFERENT_TERM] के लिए परिणाम दिखा रहा है", search_suggestion: "[SEARCH_TERM] के लिए कोई परिणाम नहीं मिला। निम्नलिखित खोजों में से कोई एक आज़माएं:", searching: "[SEARCH_TERM] की खोज की जा रही है...", results_label: "खोज परिणाम", keyboard_navigate: "नेविगेट", keyboard_select: "चुनें", keyboard_clear: "साफ़ करें", keyboard_close: "बंद करें", keyboard_search: "खोजें", error_search: "खोज विफल", filter_selected_one: "[COUNT] चयनित", filter_selected_many: "[COUNT] चयनित", input_hint: "टाइप करते समय परिणाम दिखाई देंगे", loading: "लोड हो रहा है" }, zr = { thanks_to: Ur, comments: Lr, direction: Fr, strings: Pr };
  var ot = {};
  h(ot, { comments: () => jr, default: () => $r, direction: () => Br, strings: () => Kr, thanks_to: () => Dr });
  var Dr = "Diomed <https://github.com/diomed>", jr = "", Br = "ltr", Kr = { placeholder: "Traži", clear_search: "Očisti", load_more: "Učitaj više rezultata", search_label: "Pretraži ovu stranicu", filters_label: "Filteri", zero_results: "Nema rezultata za [SEARCH_TERM]", many_results: "[COUNT] rezultata za [SEARCH_TERM]", one_result: "[COUNT] rezultat za [SEARCH_TERM]", total_zero_results: "Nema rezultata", total_one_result: "[COUNT] rezultat", total_many_results: "[COUNT] rezultata", alt_search: "Nema rezultata za [SEARCH_TERM]. Prikazujem rezultate za [DIFFERENT_TERM]", search_suggestion: "Nema rezultata za [SEARCH_TERM]. Pokušaj s jednom od ovih pretraga:", searching: "Pretražujem [SEARCH_TERM]...", results_label: "Rezultati pretrage", keyboard_navigate: "navigiraj", keyboard_select: "odaberi", keyboard_clear: "očisti", keyboard_close: "zatvori", keyboard_search: "traži", error_search: "Pretraga nije uspjela", filter_selected_one: "[COUNT] odabran", filter_selected_many: "[COUNT] odabranih", input_hint: "Rezultati će se pojaviti dok tipkate", loading: "Učitavanje" }, $r = { thanks_to: Dr, comments: jr, direction: Br, strings: Kr };
  var ct = {};
  h(ct, { comments: () => qr, default: () => Yr, direction: () => Gr, strings: () => Wr, thanks_to: () => Vr });
  var Vr = "Adam Laki <info@adamlaki.com>", qr = "", Gr = "ltr", Wr = { placeholder: "Keresés", clear_search: "Törlés", load_more: "További találatok betöltése", search_label: "Keresés az oldalon", filters_label: "Szűrés", zero_results: "Nincs találat a(z) [SEARCH_TERM] kifejezésre", many_results: "[COUNT] db találat a(z) [SEARCH_TERM] kifejezésre", one_result: "[COUNT] db találat a(z) [SEARCH_TERM] kifejezésre", total_zero_results: "Nincs találat", total_one_result: "[COUNT] találat", total_many_results: "[COUNT] találat", alt_search: "Nincs találat a(z) [SEARCH_TERM] kifejezésre. Találatok mutatása inkább a(z) [DIFFERENT_TERM] kifejezésre", search_suggestion: "Nincs találat a(z) [SEARCH_TERM] kifejezésre. Próbáld meg a következő keresések egyikét:", searching: "Keresés a(z) [SEARCH_TERM] kifejezésre...", results_label: "Keresési találatok", keyboard_navigate: "navigálás", keyboard_select: "kiválasztás", keyboard_clear: "törlés", keyboard_close: "bezárás", keyboard_search: "keresés", error_search: "A keresés sikertelen", filter_selected_one: "[COUNT] kiválasztva", filter_selected_many: "[COUNT] kiválasztva", input_hint: "A találatok gépelés közben jelennek meg", loading: "Betöltés" }, Yr = { thanks_to: Vr, comments: qr, direction: Gr, strings: Wr };
  var ut = {};
  h(ut, { comments: () => Zr, default: () => ei, direction: () => Xr, strings: () => Qr, thanks_to: () => Jr });
  var Jr = "Nixentric", Zr = "", Xr = "ltr", Qr = { placeholder: "Cari", clear_search: "Bersihkan", load_more: "Muat lebih banyak hasil", search_label: "Telusuri situs ini", filters_label: "Filter", zero_results: "[SEARCH_TERM] tidak ditemukan", many_results: "Ditemukan [COUNT] hasil untuk [SEARCH_TERM]", one_result: "Ditemukan [COUNT] hasil untuk [SEARCH_TERM]", total_zero_results: "Tidak ada hasil", total_one_result: "[COUNT] hasil", total_many_results: "[COUNT] hasil", alt_search: "[SEARCH_TERM] tidak ditemukan. Menampilkan hasil [DIFFERENT_TERM] sebagai gantinya", search_suggestion: "[SEARCH_TERM] tidak ditemukan. Coba salah satu pencarian berikut ini:", searching: "Mencari [SEARCH_TERM]...", results_label: "Hasil pencarian", keyboard_navigate: "navigasi", keyboard_select: "pilih", keyboard_clear: "bersihkan", keyboard_close: "tutup", keyboard_search: "cari", error_search: "Pencarian gagal", filter_selected_one: "[COUNT] dipilih", filter_selected_many: "[COUNT] dipilih", input_hint: "Hasil akan muncul saat Anda mengetik", loading: "Memuat" }, ei = { thanks_to: Jr, comments: Zr, direction: Xr, strings: Qr };
  var dt = {};
  h(dt, { comments: () => si, default: () => ni, direction: () => ri, strings: () => ii, thanks_to: () => ti });
  var ti = "Cosette Bruhns Alonso, Andrew Janco <apjanco@upenn.edu>", si = "", ri = "ltr", ii = { placeholder: "Cerca", clear_search: "Cancella la cronologia", load_more: "Mostra più risultati", search_label: "Cerca nel sito", filters_label: "Filtri di ricerca", zero_results: "Nessun risultato per [SEARCH_TERM]", many_results: "[COUNT] risultati per [SEARCH_TERM]", one_result: "[COUNT] risultato per [SEARCH_TERM]", total_zero_results: "Nessun risultato", total_one_result: "[COUNT] risultato", total_many_results: "[COUNT] risultati", alt_search: "Nessun risultato per [SEARCH_TERM]. Mostrando risultati per [DIFFERENT_TERM] come alternativa.", search_suggestion: "Nessun risultato per [SEARCH_TERM]. Prova una delle seguenti ricerche:", searching: "Cercando [SEARCH_TERM]...", results_label: "Risultati della ricerca", keyboard_navigate: "naviga", keyboard_select: "seleziona", keyboard_clear: "cancella", keyboard_close: "chiudi", keyboard_search: "cerca", error_search: "Ricerca fallita", filter_selected_one: "[COUNT] selezionato", filter_selected_many: "[COUNT] selezionati", input_hint: "I risultati appariranno durante la digitazione", loading: "Caricamento" }, ni = { thanks_to: ti, comments: si, direction: ri, strings: ii };
  var ht = {};
  h(ht, { comments: () => li, default: () => ui, direction: () => oi, strings: () => ci, thanks_to: () => ai });
  var ai = "Tate", li = "", oi = "ltr", ci = { placeholder: "検索", clear_search: "クリア", load_more: "次を読み込む", search_label: "このサイトを検索", filters_label: "フィルタ", zero_results: "[SEARCH_TERM]の検索に一致する情報はありませんでした", many_results: "[SEARCH_TERM]の[COUNT]件の検索結果", one_result: "[SEARCH_TERM]の[COUNT]件の検索結果", total_zero_results: "結果なし", total_one_result: "[COUNT]件の結果", total_many_results: "[COUNT]件の結果", alt_search: "[SEARCH_TERM]の検索に一致する情報はありませんでした。[DIFFERENT_TERM]の検索結果を表示しています", search_suggestion: "[SEARCH_TERM]の検索に一致する情報はありませんでした。次のいずれかの検索を試してください", searching: "[SEARCH_TERM]を検索しています", results_label: "検索結果", keyboard_navigate: "移動", keyboard_select: "選択", keyboard_clear: "クリア", keyboard_close: "閉じる", keyboard_search: "検索", error_search: "検索に失敗しました", filter_selected_one: "[COUNT]件選択中", filter_selected_many: "[COUNT]件選択中", input_hint: "入力中に検索結果が表示されます", loading: "読み込み中" }, ui = { thanks_to: ai, comments: li, direction: oi, strings: ci };
  var pt = {};
  h(pt, { comments: () => hi, default: () => _i, direction: () => pi, strings: () => mi, thanks_to: () => di });
  var di = "Seokho Son <https://github.com/seokho-son>", hi = "", pi = "ltr", mi = { placeholder: "검색어", clear_search: "비우기", load_more: "검색 결과 더 보기", search_label: "사이트 검색", filters_label: "필터", zero_results: "[SEARCH_TERM]에 대한 결과 없음", many_results: "[SEARCH_TERM]에 대한 결과 [COUNT]건", one_result: "[SEARCH_TERM]에 대한 결과 [COUNT]건", total_zero_results: "결과 없음", total_one_result: "결과 [COUNT]건", total_many_results: "결과 [COUNT]건", alt_search: "[SEARCH_TERM]에 대한 결과 없음. [DIFFERENT_TERM]에 대한 결과", search_suggestion: "[SEARCH_TERM]에 대한 결과 없음. 추천 검색어: ", searching: "[SEARCH_TERM] 검색 중...", results_label: "검색 결과", keyboard_navigate: "이동", keyboard_select: "선택", keyboard_clear: "비우기", keyboard_close: "닫기", keyboard_search: "검색", error_search: "검색 실패", filter_selected_one: "[COUNT]개 선택됨", filter_selected_many: "[COUNT]개 선택됨", input_hint: "입력하는 동안 결과가 표시됩니다", loading: "로딩 중" }, _i = { thanks_to: di, comments: hi, direction: pi, strings: mi };
  var mt = {};
  h(mt, { comments: () => gi, default: () => Ti, direction: () => Ei, strings: () => bi, thanks_to: () => fi });
  var fi = "", gi = "", Ei = "ltr", bi = { placeholder: "Rapu", clear_search: "Whakakore", load_more: "Whakauta ētahi otinga kē", search_label: "Rapu", filters_label: "Tātari", zero_results: "Otinga kore ki [SEARCH_TERM]", many_results: "[COUNT] otinga ki [SEARCH_TERM]", one_result: "[COUNT] otinga ki [SEARCH_TERM]", total_zero_results: "Kāore he otinga", total_one_result: "[COUNT] otinga", total_many_results: "[COUNT] ngā otinga", alt_search: "Otinga kore ki [SEARCH_TERM]. Otinga kē ki [DIFFERENT_TERM]", search_suggestion: "Otinga kore ki [SEARCH_TERM]. whakamātau ki ngā mea atu:", searching: "Rapu ki [SEARCH_TERM]...", results_label: "Ngā otinga rapu", keyboard_navigate: "whakatere", keyboard_select: "tīpako", keyboard_clear: "whakakore", keyboard_close: "kati", keyboard_search: "rapu", error_search: "Kāore i eke te rapu", filter_selected_one: "[COUNT] kua tīpakohia", filter_selected_many: "[COUNT] kua tīpakohia", input_hint: "Ka puta ngā otinga i a koe e patopato ana", loading: "E uta ana" }, Ti = { thanks_to: fi, comments: gi, direction: Ei, strings: bi };
  var _t = {};
  h(_t, { comments: () => yi, default: () => ki, direction: () => vi, strings: () => Ri, thanks_to: () => Ci });
  var Ci = "Harry Min Khant <https://harrymkt.github.io>", yi = "", vi = "ltr", Ri = { placeholder: "ရှာရန်", clear_search: "ရှာဖွေမှုကို ရှင်းလင်းပါ။", load_more: "နောက်ထပ်ရလဒ်များကို တင်ပါ။", search_label: "ဤဆိုက်တွင်ရှာဖွေပါ။", filters_label: "စစ်ထုတ်မှုများ", zero_results: "[SEARCH_TERM] အတွက် ရလဒ်များ မရှိပါ", many_results: "[SEARCH_TERM] အတွက် ရလဒ် [COUNT] ခု", one_result: "[SEARCH_TERM] အတွက် ရလဒ် [COUNT]", total_zero_results: "ရလဒ်များ မရှိပါ", total_one_result: "ရလဒ် [COUNT] ခု", total_many_results: "ရလဒ် [COUNT] ခု", alt_search: "[SEARCH_TERM] အတွက် ရလဒ်မရှိပါ။ ၎င်းအစား [DIFFERENT_TERM] အတွက် ရလဒ်များကို ပြသသည်။", search_suggestion: "[SEARCH_TERM] အတွက် ရလဒ်မရှိပါ။ အောက်ပါရှာဖွေမှုများထဲမှ တစ်ခုကို စမ်းကြည့်ပါ:", searching: "[SEARCH_TERM] ကို ရှာဖွေနေသည်...", results_label: "ရှာဖွေမှု ရလဒ်များ", keyboard_navigate: "လမ်းညွှန်", keyboard_select: "ရွေးချယ်", keyboard_clear: "ရှင်းလင်း", keyboard_close: "ပိတ်", keyboard_search: "ရှာရန်", error_search: "ရှာဖွေမှု မအောင်မြင်ပါ", filter_selected_one: "[COUNT] ခု ရွေးချယ်ထားသည်", filter_selected_many: "[COUNT] ခု ရွေးချယ်ထားသည်", input_hint: "ရိုက်နေစဉ် ရလဒ်များ ပေါ်လာပါမည်", loading: "တင်နေသည်" }, ki = { thanks_to: Ci, comments: yi, direction: vi, strings: Ri };
  var ft = {};
  h(ft, { comments: () => Si, default: () => Oi, direction: () => Ni, strings: () => Mi, thanks_to: () => Ai });
  var Ai = "Eirik Mikkelsen", Si = "", Ni = "ltr", Mi = { placeholder: "Søk", clear_search: "Fjern", load_more: "Last flere resultater", search_label: "Søk på denne siden", filters_label: "Filtre", zero_results: "Ingen resultater for [SEARCH_TERM]", many_results: "[COUNT] resultater for [SEARCH_TERM]", one_result: "[COUNT] resultat for [SEARCH_TERM]", total_zero_results: "Ingen resultater", total_one_result: "[COUNT] resultat", total_many_results: "[COUNT] resultater", alt_search: "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet", search_suggestion: "Ingen resultater for [SEARCH_TERM]. Prøv en av disse søkeordene i stedet:", searching: "Søker etter [SEARCH_TERM]", results_label: "Søkeresultater", keyboard_navigate: "naviger", keyboard_select: "velg", keyboard_clear: "fjern", keyboard_close: "lukk", keyboard_search: "søk", error_search: "Søk feilet", filter_selected_one: "[COUNT] valgt", filter_selected_many: "[COUNT] valgte", input_hint: "Resultater vises mens du skriver", loading: "Laster" }, Oi = { thanks_to: Ai, comments: Si, direction: Ni, strings: Mi };
  var gt = {};
  h(gt, { comments: () => Hi, default: () => Ui, direction: () => wi, strings: () => Ii, thanks_to: () => xi });
  var xi = "Paul van Brouwershaven", Hi = "", wi = "ltr", Ii = { placeholder: "Zoeken", clear_search: "Reset", load_more: "Meer resultaten laden", search_label: "Doorzoek deze site", filters_label: "Filters", zero_results: "Geen resultaten voor [SEARCH_TERM]", many_results: "[COUNT] resultaten voor [SEARCH_TERM]", one_result: "[COUNT] resultaat voor [SEARCH_TERM]", total_zero_results: "Geen resultaten", total_one_result: "[COUNT] resultaat", total_many_results: "[COUNT] resultaten", alt_search: "Geen resultaten voor [SEARCH_TERM]. In plaats daarvan worden resultaten voor [DIFFERENT_TERM] weergegeven", search_suggestion: "Geen resultaten voor [SEARCH_TERM]. Probeer een van de volgende zoekopdrachten:", searching: "Zoeken naar [SEARCH_TERM]...", results_label: "Zoekresultaten", keyboard_navigate: "navigeren", keyboard_select: "selecteren", keyboard_clear: "wissen", keyboard_close: "sluiten", keyboard_search: "zoeken", error_search: "Zoeken mislukt", filter_selected_one: "[COUNT] geselecteerd", filter_selected_many: "[COUNT] geselecteerd", input_hint: "Resultaten verschijnen terwijl u typt", loading: "Laden" }, Ui = { thanks_to: xi, comments: Hi, direction: wi, strings: Ii };
  var Et = {};
  h(Et, { comments: () => Fi, default: () => Di, direction: () => Pi, strings: () => zi, thanks_to: () => Li });
  var Li = "Eirik Mikkelsen", Fi = "", Pi = "ltr", zi = { placeholder: "Søk", clear_search: "Fjern", load_more: "Last fleire resultat", search_label: "Søk på denne sida", filters_label: "Filter", zero_results: "Ingen resultat for [SEARCH_TERM]", many_results: "[COUNT] resultat for [SEARCH_TERM]", one_result: "[COUNT] resultat for [SEARCH_TERM]", total_zero_results: "Ingen resultat", total_one_result: "[COUNT] resultat", total_many_results: "[COUNT] resultat", alt_search: "Ingen resultat for [SEARCH_TERM]. Viser resultat for [DIFFERENT_TERM] i staden", search_suggestion: "Ingen resultat for [SEARCH_TERM]. Prøv eitt av desse søkeorda i staden:", searching: "Søker etter [SEARCH_TERM]", results_label: "Søkeresultat", keyboard_navigate: "naviger", keyboard_select: "vel", keyboard_clear: "fjern", keyboard_close: "lukk", keyboard_search: "søk", error_search: "Søk feila", filter_selected_one: "[COUNT] vald", filter_selected_many: "[COUNT] valde", input_hint: "Resultat visast medan du skriv", loading: "Lastar" }, Di = { thanks_to: Li, comments: Fi, direction: Pi, strings: zi };
  var bt = {};
  h(bt, { comments: () => Bi, default: () => Vi, direction: () => Ki, strings: () => $i, thanks_to: () => ji });
  var ji = "Christopher Wingate", Bi = "", Ki = "ltr", $i = { placeholder: "Søk", clear_search: "Fjern", load_more: "Last flere resultater", search_label: "Søk på denne siden", filters_label: "Filtre", zero_results: "Ingen resultater for [SEARCH_TERM]", many_results: "[COUNT] resultater for [SEARCH_TERM]", one_result: "[COUNT] resultat for [SEARCH_TERM]", total_zero_results: "Ingen resultater", total_one_result: "[COUNT] resultat", total_many_results: "[COUNT] resultater", alt_search: "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet", search_suggestion: "Ingen resultater for [SEARCH_TERM]. Prøv en av disse søkeordene i stedet:", searching: "Søker etter [SEARCH_TERM]", results_label: "Søkeresultater", keyboard_navigate: "naviger", keyboard_select: "velg", keyboard_clear: "fjern", keyboard_close: "lukk", keyboard_search: "søk", error_search: "Søk feilet", filter_selected_one: "[COUNT] valgt", filter_selected_many: "[COUNT] valgte", input_hint: "Resultater vises mens du skriver", loading: "Laster" }, Vi = { thanks_to: ji, comments: Bi, direction: Ki, strings: $i };
  var Tt = {};
  h(Tt, { comments: () => Gi, default: () => Ji, direction: () => Wi, strings: () => Yi, thanks_to: () => qi });
  var qi = "", Gi = "", Wi = "ltr", Yi = { placeholder: "Szukaj", clear_search: "Wyczyść", load_more: "Załaduj więcej", search_label: "Przeszukaj tę stronę", filters_label: "Filtry", zero_results: "Brak wyników dla [SEARCH_TERM]", many_results: "[COUNT] wyników dla [SEARCH_TERM]", one_result: "[COUNT] wynik dla [SEARCH_TERM]", total_zero_results: "Brak wyników", total_one_result: "[COUNT] wynik", total_many_results: "[COUNT] wyników", alt_search: "Brak wyników dla [SEARCH_TERM]. Wyświetlam wyniki dla [DIFFERENT_TERM]", search_suggestion: "Brak wyników dla [SEARCH_TERM]. Pokrewne wyniki wyszukiwania:", searching: "Szukam [SEARCH_TERM]...", results_label: "Wyniki wyszukiwania", keyboard_navigate: "nawiguj", keyboard_select: "wybierz", keyboard_clear: "wyczyść", keyboard_close: "zamknij", keyboard_search: "szukaj", error_search: "Wyszukiwanie nie powiodło się", filter_selected_one: "[COUNT] wybrany", filter_selected_many: "[COUNT] wybranych", input_hint: "Wyniki pojawią się podczas pisania", loading: "Ładowanie" }, Ji = { thanks_to: qi, comments: Gi, direction: Wi, strings: Yi };
  var Ct = {};
  h(Ct, { comments: () => Xi, default: () => tn, direction: () => Qi, strings: () => en, thanks_to: () => Zi });
  var Zi = "Jonatah", Xi = "", Qi = "ltr", en = { placeholder: "Pesquisar", clear_search: "Limpar", load_more: "Ver mais resultados", search_label: "Pesquisar", filters_label: "Filtros", zero_results: "Nenhum resultado encontrado para [SEARCH_TERM]", many_results: "[COUNT] resultados encontrados para [SEARCH_TERM]", one_result: "[COUNT] resultado encontrado para [SEARCH_TERM]", total_zero_results: "Nenhum resultado", total_one_result: "[COUNT] resultado", total_many_results: "[COUNT] resultados", alt_search: "Nenhum resultado encontrado para [SEARCH_TERM]. Exibindo resultados para [DIFFERENT_TERM]", search_suggestion: "Nenhum resultado encontrado para [SEARCH_TERM]. Tente uma das seguintes pesquisas:", searching: "Pesquisando por [SEARCH_TERM]...", results_label: "Resultados da pesquisa", keyboard_navigate: "navegar", keyboard_select: "selecionar", keyboard_clear: "limpar", keyboard_close: "fechar", keyboard_search: "pesquisar", error_search: "Falha na pesquisa", filter_selected_one: "[COUNT] selecionado", filter_selected_many: "[COUNT] selecionados", input_hint: "Os resultados aparecerão enquanto você digita", loading: "Carregando" }, tn = { thanks_to: Zi, comments: Xi, direction: Qi, strings: en };
  var yt = {};
  h(yt, { comments: () => rn, default: () => ln, direction: () => nn, strings: () => an, thanks_to: () => sn });
  var sn = "Bogdan Mateescu <bogdan@surfverse.com>", rn = "", nn = "ltr", an = { placeholder: "Căutare", clear_search: "Ştergeţi", load_more: "Încărcați mai multe rezultate", search_label: "Căutați în acest site", filters_label: "Filtre", zero_results: "Niciun rezultat pentru [SEARCH_TERM]", many_results: "[COUNT] rezultate pentru [SEARCH_TERM]", one_result: "[COUNT] rezultat pentru [SEARCH_TERM]", total_zero_results: "Niciun rezultat", total_one_result: "[COUNT] rezultat", total_many_results: "[COUNT] rezultate", alt_search: "Niciun rezultat pentru [SEARCH_TERM]. Se afișează în schimb rezultatele pentru [DIFFERENT_TERM]", search_suggestion: "Niciun rezultat pentru [SEARCH_TERM]. Încercați una dintre următoarele căutări:", searching: "Se caută după: [SEARCH_TERM]...", results_label: "Rezultatele căutării", keyboard_navigate: "navigare", keyboard_select: "selectare", keyboard_clear: "ștergere", keyboard_close: "închidere", keyboard_search: "căutare", error_search: "Căutarea a eșuat", filter_selected_one: "[COUNT] selectat", filter_selected_many: "[COUNT] selectate", input_hint: "Rezultatele vor apărea pe măsură ce tastați", loading: "Se încarcă" }, ln = { thanks_to: sn, comments: rn, direction: nn, strings: an };
  var vt = {};
  h(vt, { comments: () => cn, default: () => hn, direction: () => un, strings: () => dn, thanks_to: () => on });
  var on = "Aleksandr Gordeev", cn = "", un = "ltr", dn = { placeholder: "Поиск", clear_search: "Очистить поле", load_more: "Загрузить еще", search_label: "Поиск по сайту", filters_label: "Фильтры", zero_results: "Ничего не найдено по запросу: [SEARCH_TERM]", many_results: "[COUNT] результатов по запросу: [SEARCH_TERM]", one_result: "[COUNT] результат по запросу: [SEARCH_TERM]", total_zero_results: "Ничего не найдено", total_one_result: "[COUNT] результат", total_many_results: "[COUNT] результатов", alt_search: "Ничего не найдено по запросу: [SEARCH_TERM]. Показаны результаты по запросу: [DIFFERENT_TERM]", search_suggestion: "Ничего не найдено по запросу: [SEARCH_TERM]. Попробуйте один из следующих вариантов", searching: "Поиск по запросу: [SEARCH_TERM]", results_label: "Результаты поиска", keyboard_navigate: "навигация", keyboard_select: "выбрать", keyboard_clear: "очистить", keyboard_close: "закрыть", keyboard_search: "поиск", error_search: "Ошибка поиска", filter_selected_one: "[COUNT] выбран", filter_selected_many: "[COUNT] выбрано", input_hint: "Результаты будут появляться по мере ввода", loading: "Загрузка" }, hn = { thanks_to: on, comments: cn, direction: un, strings: dn };
  var Rt = {};
  h(Rt, { comments: () => mn, default: () => gn, direction: () => _n, strings: () => fn, thanks_to: () => pn });
  var pn = "Andrija Sagicc", mn = "", _n = "ltr", fn = { placeholder: "Претрага", clear_search: "Брисање", load_more: "Приказ више резултата", search_label: "Претрага сајта", filters_label: "Филтери", zero_results: "Нема резултата за [SEARCH_TERM]", many_results: "[COUNT] резултата за [SEARCH_TERM]", one_result: "[COUNT] резултата за [SEARCH_TERM]", total_zero_results: "Нема резултата", total_one_result: "[COUNT] резултат", total_many_results: "[COUNT] резултата", alt_search: "Нема резултата за [SEARCH_TERM]. Приказ додатник резултата за [DIFFERENT_TERM]", search_suggestion: "Нема резултата за [SEARCH_TERM]. Покушајте са неком од следећих претрага:", searching: "Претрага термина [SEARCH_TERM]...", results_label: "Резултати претраге", keyboard_navigate: "навигација", keyboard_select: "изабери", keyboard_clear: "обриши", keyboard_close: "затвори", keyboard_search: "претрага", error_search: "Претрага није успела", filter_selected_one: "[COUNT] изабран", filter_selected_many: "[COUNT] изабраних", input_hint: "Резултати ће се појављивати док куцате", loading: "Учитавање" }, gn = { thanks_to: pn, comments: mn, direction: _n, strings: fn };
  var kt = {};
  h(kt, { comments: () => bn, default: () => yn, direction: () => Tn, strings: () => Cn, thanks_to: () => En });
  var En = "Montazar Al-Jaber <montazar@nanawee.tech>", bn = "", Tn = "ltr", Cn = { placeholder: "Sök", clear_search: "Rensa", load_more: "Visa fler träffar", search_label: "Sök på denna sida", filters_label: "Filter", zero_results: "[SEARCH_TERM] gav inga träffar", many_results: "[SEARCH_TERM] gav [COUNT] träffar", one_result: "[SEARCH_TERM] gav [COUNT] träff", total_zero_results: "Inga träffar", total_one_result: "[COUNT] träff", total_many_results: "[COUNT] träffar", alt_search: "[SEARCH_TERM] gav inga träffar. Visar resultat för [DIFFERENT_TERM] istället", search_suggestion: "[SEARCH_TERM] gav inga träffar. Försök igen med en av följande sökord:", searching: "Söker efter [SEARCH_TERM]...", results_label: "Sökresultat", keyboard_navigate: "navigera", keyboard_select: "välj", keyboard_clear: "rensa", keyboard_close: "stäng", keyboard_search: "sök", error_search: "Sökningen misslyckades", filter_selected_one: "[COUNT] vald", filter_selected_many: "[COUNT] valda", input_hint: "Resultat visas medan du skriver", loading: "Läser in" }, yn = { thanks_to: En, comments: bn, direction: Tn, strings: Cn };
  var At = {};
  h(At, { comments: () => Rn, default: () => Sn, direction: () => kn, strings: () => An, thanks_to: () => vn });
  var vn = "Anonymous", Rn = "", kn = "ltr", An = { placeholder: "Tafuta", clear_search: "Futa", load_more: "Pakia matokeo zaidi", search_label: "Tafuta tovuti hii", filters_label: "Vichujio", zero_results: "Hakuna matokeo ya [SEARCH_TERM]", many_results: "Matokeo [COUNT] ya [SEARCH_TERM]", one_result: "Tokeo [COUNT] la [SEARCH_TERM]", total_zero_results: "Hakuna matokeo", total_one_result: "Tokeo [COUNT]", total_many_results: "Matokeo [COUNT]", alt_search: "Hakuna mayokeo ya [SEARCH_TERM]. Badala yake, inaonyesha matokeo ya [DIFFERENT_TERM]", search_suggestion: "Hakuna matokeo ya [SEARCH_TERM]. Jaribu mojawapo ya utafutaji ufuatao:", searching: "Kutafuta [SEARCH_TERM]...", results_label: "Matokeo ya utafutaji", keyboard_navigate: "sogeza", keyboard_select: "chagua", keyboard_clear: "futa", keyboard_close: "funga", keyboard_search: "tafuta", error_search: "Utafutaji umeshindwa", filter_selected_one: "[COUNT] imechaguliwa", filter_selected_many: "[COUNT] zimechaguliwa", input_hint: "Matokeo yataonekana unapoandika", loading: "Inapakia" }, Sn = { thanks_to: vn, comments: Rn, direction: kn, strings: An };
  var St = {};
  h(St, { comments: () => Mn, default: () => Hn, direction: () => On, strings: () => xn, thanks_to: () => Nn });
  var Nn = "", Mn = "", On = "ltr", xn = { placeholder: "தேடுக", clear_search: "அழிக்குக", load_more: "மேலும் முடிவுகளைக் காட்டுக", search_label: "இந்த தளத்தில் தேடுக", filters_label: "வடிகட்டல்கள்", zero_results: "[SEARCH_TERM] க்கான முடிவுகள் இல்லை", many_results: "[SEARCH_TERM] க்கான [COUNT] முடிவுகள்", one_result: "[SEARCH_TERM] க்கான முடிவு", total_zero_results: "முடிவுகள் இல்லை", total_one_result: "[COUNT] முடிவு", total_many_results: "[COUNT] முடிவுகள்", alt_search: "[SEARCH_TERM] இத்தேடலுக்கான முடிவுகள் இல்லை, இந்த தேடல்களுக்கான ஒத்த முடிவுகள் [DIFFERENT_TERM]", search_suggestion: "[SEARCH_TERM] இத் தேடலுக்கான முடிவுகள் இல்லை.இதற்கு பதிலீடான தேடல்களை தேடுக:", searching: "[SEARCH_TERM] தேடப்படுகின்றது", results_label: "தேடல் முடிவுகள்", keyboard_navigate: "வழிநடத்து", keyboard_select: "தேர்ந்தெடு", keyboard_clear: "அழி", keyboard_close: "மூடு", keyboard_search: "தேடு", error_search: "தேடல் தோல்வி", filter_selected_one: "[COUNT] தேர்ந்தெடுக்கப்பட்டது", filter_selected_many: "[COUNT] தேர்ந்தெடுக்கப்பட்டன", input_hint: "நீங்கள் தட்டச்சு செய்யும்போது முடிவுகள் தோன்றும்", loading: "ஏற்றுகிறது" }, Hn = { thanks_to: Nn, comments: Mn, direction: On, strings: xn };
  var Nt = {};
  h(Nt, { comments: () => In, default: () => Fn, direction: () => Un, strings: () => Ln, thanks_to: () => wn });
  var wn = "Patiphon Loetsuthakun <ptphon@gmail.com>", In = "", Un = "ltr", Ln = { placeholder: "ค้นหา", clear_search: "ล้าง", load_more: "โหลดผลลัพธ์เพิ่มเติม", search_label: "ค้นหาบนเว็บไซต์", filters_label: "ตัวกรอง", zero_results: "ไม่พบผลลัพธ์สำหรับ [SEARCH_TERM]", many_results: "พบ [COUNT] ผลการค้นหาสำหรับ [SEARCH_TERM]", one_result: "พบ [COUNT] ผลการค้นหาสำหรับ [SEARCH_TERM]", total_zero_results: "ไม่พบผลลัพธ์", total_one_result: "[COUNT] ผลลัพธ์", total_many_results: "[COUNT] ผลลัพธ์", alt_search: "ไม่พบผลลัพธ์สำหรับ [SEARCH_TERM] แสดงผลลัพธ์จากการค้นหา [DIFFERENT_TERM] แทน", search_suggestion: "ไม่พบผลลัพธ์สำหรับ [SEARCH_TERM] ลองคำค้นหาเหล่านี้แทน:", searching: "กำลังค้นหา [SEARCH_TERM]...", results_label: "ผลการค้นหา", keyboard_navigate: "นำทาง", keyboard_select: "เลือก", keyboard_clear: "ล้าง", keyboard_close: "ปิด", keyboard_search: "ค้นหา", error_search: "การค้นหาล้มเหลว", filter_selected_one: "เลือกแล้ว [COUNT] รายการ", filter_selected_many: "เลือกแล้ว [COUNT] รายการ", input_hint: "ผลลัพธ์จะปรากฏขณะที่คุณพิมพ์", loading: "กำลังโหลด" }, Fn = { thanks_to: wn, comments: In, direction: Un, strings: Ln };
  var Mt = {};
  h(Mt, { comments: () => zn, default: () => Bn, direction: () => Dn, strings: () => jn, thanks_to: () => Pn });
  var Pn = "Taylan Özgür Bildik", zn = "", Dn = "ltr", jn = { placeholder: "Araştır", clear_search: "Temizle", load_more: "Daha fazla sonuç", search_label: "Site genelinde arama", filters_label: "Filtreler", zero_results: "[SEARCH_TERM] için sonuç yok", many_results: "[SEARCH_TERM] için [COUNT] sonuç bulundu", one_result: "[SEARCH_TERM] için [COUNT] sonuç bulundu", total_zero_results: "Sonuç yok", total_one_result: "[COUNT] sonuç", total_many_results: "[COUNT] sonuç", alt_search: "[SEARCH_TERM] için sonuç yok. Bunun yerine [DIFFERENT_TERM] için sonuçlar gösteriliyor", search_suggestion: "[SEARCH_TERM] için sonuç yok. Alternatif olarak aşağıdaki kelimelerden birini deneyebilirsiniz:", searching: "[SEARCH_TERM] araştırılıyor...", results_label: "Arama sonuçları", keyboard_navigate: "gezin", keyboard_select: "seç", keyboard_clear: "temizle", keyboard_close: "kapat", keyboard_search: "ara", error_search: "Arama başarısız", filter_selected_one: "[COUNT] seçili", filter_selected_many: "[COUNT] seçili", input_hint: "Sonuçlar siz yazarken görünecektir", loading: "Yükleniyor" }, Bn = { thanks_to: Pn, comments: zn, direction: Dn, strings: jn };
  var Ot = {};
  h(Ot, { comments: () => $n, default: () => Gn, direction: () => Vn, strings: () => qn, thanks_to: () => Kn });
  var Kn = "Vladyslav Lyshenko <vladdnepr1989@gmail.com>", $n = "", Vn = "ltr", qn = { placeholder: "Пошук", clear_search: "Очистити поле", load_more: "Завантажити ще", search_label: "Пошук по сайту", filters_label: "Фільтри", zero_results: "Нічого не знайдено за запитом: [SEARCH_TERM]", many_results: "[COUNT] результатів на запит: [SEARCH_TERM]", one_result: "[COUNT] результат за запитом: [SEARCH_TERM]", total_zero_results: "Нічого не знайдено", total_one_result: "[COUNT] результат", total_many_results: "[COUNT] результатів", alt_search: "Нічого не знайдено на запит: [SEARCH_TERM]. Показано результати на запит: [DIFFERENT_TERM]", search_suggestion: "Нічого не знайдено на запит: [SEARCH_TERM]. Спробуйте один із таких варіантів", searching: "Пошук за запитом: [SEARCH_TERM]", results_label: "Результати пошуку", keyboard_navigate: "навігація", keyboard_select: "вибрати", keyboard_clear: "очистити", keyboard_close: "закрити", keyboard_search: "пошук", error_search: "Помилка пошуку", filter_selected_one: "[COUNT] вибрано", filter_selected_many: "[COUNT] вибрано", input_hint: "Результати з'являтимуться під час введення", loading: "Завантаження" }, Gn = { thanks_to: Kn, comments: $n, direction: Vn, strings: qn };
  var xt = {};
  h(xt, { comments: () => Yn, default: () => Xn, direction: () => Jn, strings: () => Zn, thanks_to: () => Wn });
  var Wn = "Long Nhat Nguyen", Yn = "", Jn = "ltr", Zn = { placeholder: "Tìm kiếm", clear_search: "Xóa", load_more: "Nhiều kết quả hơn", search_label: "Tìm kiếm trong trang này", filters_label: "Bộ lọc", zero_results: "Không tìm thấy kết quả cho [SEARCH_TERM]", many_results: "[COUNT] kết quả cho [SEARCH_TERM]", one_result: "[COUNT] kết quả cho [SEARCH_TERM]", total_zero_results: "Không có kết quả", total_one_result: "[COUNT] kết quả", total_many_results: "[COUNT] kết quả", alt_search: "Không tìm thấy kết quả cho [SEARCH_TERM]. Kiểm thị kết quả thay thế với [DIFFERENT_TERM]", search_suggestion: "Không tìm thấy kết quả cho [SEARCH_TERM]. Thử một trong các tìm kiếm:", searching: "Đang tìm kiếm cho [SEARCH_TERM]...", results_label: "Kết quả tìm kiếm", keyboard_navigate: "chuyển", keyboard_select: "chọn", keyboard_clear: "xóa", keyboard_close: "đóng", keyboard_search: "tìm kiếm", error_search: "Tìm kiếm thất bại", filter_selected_one: "Đã chọn [COUNT]", filter_selected_many: "Đã chọn [COUNT]", input_hint: "Kết quả sẽ xuất hiện khi bạn nhập", loading: "Đang tải" }, Xn = { thanks_to: Wn, comments: Yn, direction: Jn, strings: Zn };
  var Ht = {};
  h(Ht, { comments: () => ea, default: () => ra, direction: () => ta, strings: () => sa, thanks_to: () => Qn });
  var Qn = "Amber Song", ea = "", ta = "ltr", sa = { placeholder: "搜索", clear_search: "清除", load_more: "加载更多结果", search_label: "站内搜索", filters_label: "筛选", zero_results: "未找到 [SEARCH_TERM] 的相关结果", many_results: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果", one_result: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果", total_zero_results: "无结果", total_one_result: "[COUNT] 个结果", total_many_results: "[COUNT] 个结果", alt_search: "未找到 [SEARCH_TERM] 的相关结果。改为显示 [DIFFERENT_TERM] 的相关结果", search_suggestion: "未找到 [SEARCH_TERM] 的相关结果。请尝试以下搜索。", searching: "正在搜索 [SEARCH_TERM]...", results_label: "搜索结果", keyboard_navigate: "导航", keyboard_select: "选择", keyboard_clear: "清除", keyboard_close: "关闭", keyboard_search: "搜索", error_search: "搜索失败", filter_selected_one: "已选择 [COUNT] 个", filter_selected_many: "已选择 [COUNT] 个", input_hint: "输入时将显示结果", loading: "加载中" }, ra = { thanks_to: Qn, comments: ea, direction: ta, strings: sa };
  var wt = {};
  h(wt, { comments: () => na, default: () => oa, direction: () => aa, strings: () => la, thanks_to: () => ia });
  var ia = "Amber Song", na = "", aa = "ltr", la = { placeholder: "搜尋", clear_search: "清除", load_more: "載入更多結果", search_label: "站內搜尋", filters_label: "篩選", zero_results: "找不到 [SEARCH_TERM] 的相關結果", many_results: "找到 [COUNT] 個 [SEARCH_TERM] 的相關結果", one_result: "找到 [COUNT] 個 [SEARCH_TERM] 的相關結果", total_zero_results: "無結果", total_one_result: "[COUNT] 個結果", total_many_results: "[COUNT] 個結果", alt_search: "未找到 [SEARCH_TERM] 的相關結果。改為顯示 [DIFFERENT_TERM] 的相關結果", search_suggestion: "找不到 [SEARCH_TERM] 的相關結果。請嘗試以下的建議之一。", searching: "正在搜尋[SEARCH_TERM]...", results_label: "搜尋結果", keyboard_navigate: "導覽", keyboard_select: "選擇", keyboard_clear: "清除", keyboard_close: "關閉", keyboard_search: "搜尋", error_search: "搜尋失敗", filter_selected_one: "已選擇 [COUNT] 個", filter_selected_many: "已選擇 [COUNT] 個", input_hint: "輸入時將顯示結果", loading: "載入中" }, oa = { thanks_to: ia, comments: na, direction: aa, strings: la };
  var It = {};
  h(It, { comments: () => ua, default: () => pa, direction: () => da, strings: () => ha, thanks_to: () => ca });
  var ca = "Amber Song", ua = "", da = "ltr", ha = { placeholder: "搜索", clear_search: "清除", load_more: "加载更多结果", search_label: "站内搜索", filters_label: "筛选", zero_results: "未找到 [SEARCH_TERM] 的相关结果", many_results: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果", one_result: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果", total_zero_results: "无结果", total_one_result: "[COUNT] 个结果", total_many_results: "[COUNT] 个结果", alt_search: "未找到 [SEARCH_TERM] 的相关结果。改为显示 [DIFFERENT_TERM] 的相关结果", search_suggestion: "未找到 [SEARCH_TERM] 的相关结果。请尝试以下搜索。", searching: "正在搜索 [SEARCH_TERM]...", results_label: "搜索结果", keyboard_navigate: "导航", keyboard_select: "选择", keyboard_clear: "清除", keyboard_close: "关闭", keyboard_search: "搜索", error_search: "搜索失败", filter_selected_one: "已选择 [COUNT] 个", filter_selected_many: "已选择 [COUNT] 个", input_hint: "输入时将显示结果", loading: "加载中" }, pa = { thanks_to: ca, comments: ua, direction: da, strings: ha };
  var ma = [Ve, qe, Ge, We, Ye, Je, Ze, Xe, Qe, et, tt, st, rt, it, nt, at, lt, ot, ct, ut, dt, ht, pt, mt, _t, ft, gt, Et, bt, Tt, Ct, yt, vt, Rt, kt, At, St, Nt, Mt, Ot, xt, Ht, wt, It], Vt = ma, qt = ["../../translations/af.json", "../../translations/ar.json", "../../translations/bn.json", "../../translations/ca.json", "../../translations/cs.json", "../../translations/da.json", "../../translations/de.json", "../../translations/el.json", "../../translations/en.json", "../../translations/es.json", "../../translations/eu.json", "../../translations/fa.json", "../../translations/fi.json", "../../translations/fr.json", "../../translations/gl.json", "../../translations/he.json", "../../translations/hi.json", "../../translations/hr.json", "../../translations/hu.json", "../../translations/id.json", "../../translations/it.json", "../../translations/ja.json", "../../translations/ko.json", "../../translations/mi.json", "../../translations/my.json", "../../translations/nb.json", "../../translations/nl.json", "../../translations/nn.json", "../../translations/no.json", "../../translations/pl.json", "../../translations/pt.json", "../../translations/ro.json", "../../translations/ru.json", "../../translations/sr.json", "../../translations/sv.json", "../../translations/sw.json", "../../translations/ta.json", "../../translations/th.json", "../../translations/tr.json", "../../translations/uk.json", "../../translations/vi.json", "../../translations/zh-cn.json", "../../translations/zh-tw.json", "../../translations/zh.json"];
  function b(n) {
    let s = typeof n == "string" ? n.charCodeAt(0) : n;
    return s >= 97 && s <= 122 || s >= 65 && s <= 90;
  }
  function A(n) {
    let s = typeof n == "string" ? n.charCodeAt(0) : n;
    return s >= 48 && s <= 57;
  }
  function k(n) {
    return b(n) || A(n);
  }
  var Gt = ["art-lojban", "cel-gaulish", "no-bok", "no-nyn", "zh-guoyu", "zh-hakka", "zh-min", "zh-min-nan", "zh-xiang"];
  var Ut = { "en-gb-oed": "en-GB-oxendict", "i-ami": "ami", "i-bnn": "bnn", "i-default": null, "i-enochian": null, "i-hak": "hak", "i-klingon": "tlh", "i-lux": "lb", "i-mingo": null, "i-navajo": "nv", "i-pwn": "pwn", "i-tao": "tao", "i-tay": "tay", "i-tsu": "tsu", "sgn-be-fr": "sfb", "sgn-be-nl": "vgt", "sgn-ch-de": "sgg", "art-lojban": "jbo", "cel-gaulish": null, "no-bok": "nb", "no-nyn": "nn", "zh-guoyu": "cmn", "zh-hakka": "hak", "zh-min": null, "zh-min-nan": "nan", "zh-xiang": "hsn" };
  var fa = {}.hasOwnProperty;
  function ze(n, s = {}) {
    let e = Wt(), t = String(n), r = t.toLowerCase(), i = 0;
    if (n == null) throw new Error("Expected string, got `" + n + "`");
    if (fa.call(Ut, r)) {
      let l = Ut[r];
      return (s.normalize === void 0 || s.normalize === null || s.normalize) && typeof l == "string" ? ze(l) : (e[Gt.includes(r) ? "regular" : "irregular"] = t, e);
    }
    for (; b(r.charCodeAt(i)) && i < 9; ) i++;
    if (i > 1 && i < 9) {
      if (e.language = t.slice(0, i), i < 4) {
        let l = 0;
        for (; r.charCodeAt(i) === 45 && b(r.charCodeAt(i + 1)) && b(r.charCodeAt(i + 2)) && b(r.charCodeAt(i + 3)) && !b(r.charCodeAt(i + 4)); ) {
          if (l > 2) return a(i, 3, "Too many extended language subtags, expected at most 3 subtags");
          e.extendedLanguageSubtags.push(t.slice(i + 1, i + 4)), i += 4, l++;
        }
      }
      for (r.charCodeAt(i) === 45 && b(r.charCodeAt(i + 1)) && b(r.charCodeAt(i + 2)) && b(r.charCodeAt(i + 3)) && b(r.charCodeAt(i + 4)) && !b(r.charCodeAt(i + 5)) && (e.script = t.slice(i + 1, i + 5), i += 5), r.charCodeAt(i) === 45 && (b(r.charCodeAt(i + 1)) && b(r.charCodeAt(i + 2)) && !b(r.charCodeAt(i + 3)) ? (e.region = t.slice(i + 1, i + 3), i += 3) : A(r.charCodeAt(i + 1)) && A(r.charCodeAt(i + 2)) && A(r.charCodeAt(i + 3)) && !A(r.charCodeAt(i + 4)) && (e.region = t.slice(i + 1, i + 4), i += 4)); r.charCodeAt(i) === 45; ) {
        let l = i + 1, o = l;
        for (; k(r.charCodeAt(o)); ) {
          if (o - l > 7) return a(o, 1, "Too long variant, expected at most 8 characters");
          o++;
        }
        if (o - l > 4 || o - l > 3 && A(r.charCodeAt(l))) e.variants.push(t.slice(l, o)), i = o;
        else break;
      }
      for (; r.charCodeAt(i) === 45 && !(r.charCodeAt(i + 1) === 120 || !k(r.charCodeAt(i + 1)) || r.charCodeAt(i + 2) !== 45 || !k(r.charCodeAt(i + 3))); ) {
        let l = i + 2, o = 0;
        for (; r.charCodeAt(l) === 45 && k(r.charCodeAt(l + 1)) && k(r.charCodeAt(l + 2)); ) {
          let c = l + 1;
          for (l = c + 2, o++; k(r.charCodeAt(l)); ) {
            if (l - c > 7) return a(l, 2, "Too long extension, expected at most 8 characters");
            l++;
          }
        }
        if (!o) return a(l, 4, "Empty extension, extensions must have at least 2 characters of content");
        e.extensions.push({ singleton: t.charAt(i + 1), extensions: t.slice(i + 3, l).split("-") }), i = l;
      }
    } else i = 0;
    if (i === 0 && r.charCodeAt(i) === 120 || r.charCodeAt(i) === 45 && r.charCodeAt(i + 1) === 120) {
      i = i ? i + 2 : 1;
      let l = i;
      for (; r.charCodeAt(l) === 45 && k(r.charCodeAt(l + 1)); ) {
        let o = i + 1;
        for (l = o; k(r.charCodeAt(l)); ) {
          if (l - o > 7) return a(l, 5, "Too long private-use area, expected at most 8 characters");
          l++;
        }
        e.privateuse.push(t.slice(i + 1, l)), i = l;
      }
    }
    if (i !== t.length) return a(i, 6, "Found superfluous content after tag");
    return e;
    function a(l, o, c) {
      return s.warning && s.warning(c, o, l), s.forgiving ? e : Wt();
    }
  }
  function Wt() {
    return { language: null, extendedLanguageSubtags: [], script: null, region: null, variants: [], extensions: [], privateuse: [], irregular: null, regular: null };
  }
  var be = {}, Yt = qt, Jt = Vt;
  for (let n = 0; n < Yt.length; n++) {
    let s = Yt[n].match(/([^\/]+)\.json$/);
    if (!s) continue;
    let e = s[1];
    be[e] = { language: e, direction: Jt[n].direction || "ltr", ...Jt[n].strings };
  }
  function Zt(n) {
    if (!n) return be.en;
    let s = ze(n.toLowerCase()), e = [];
    s.language && s.script && s.region && e.push(`${s.language}-${s.script}-${s.region}`), s.language && s.region && e.push(`${s.language}-${s.region}`), s.language && e.push(s.language);
    for (let t of e) if (be[t]) return be[t];
    return be.en;
  }
  function Xt(n, s = {}, e) {
    if (!n) return "";
    let t = n;
    for (let [r, i] of Object.entries(s)) {
      let a = typeof i == "number" && e ? new Intl.NumberFormat(e).format(i) : String(i);
      t = t.replace(new RegExp(`\\[${r}\\]`, "g"), a);
    }
    return t;
  }
  var De = class {
    constructor(s) {
      this.regions = null;
      this.politeIndex = 0;
      this.assertiveIndex = 0;
      this.clearTimeoutId = null;
      this.idGenerator = s, this.containerId = s("pf-announcer"), this.createRegions();
    }
    createRegions() {
      if (typeof document > "u") return;
      let s = document.createElement("div");
      s.id = this.containerId, s.setAttribute("data-pagefind-announcer", "");
      let e = (t) => {
        let r = [];
        for (let i = 0; i < 2; i++) {
          let a = document.createElement("div");
          a.id = this.idGenerator(`pf-${t}-region`), a.setAttribute("role", "status"), a.setAttribute("aria-live", t), a.setAttribute("aria-atomic", "true"), a.setAttribute("data-pf-sr-hidden", ""), s.appendChild(a), r.push(a);
        }
        return r;
      };
      this.regions = { polite: e("polite"), assertive: e("assertive") }, document.body.appendChild(s);
    }
    announce(s, e = "polite") {
      if (!this.regions || !s) return;
      this.clearTimeoutId && (clearTimeout(this.clearTimeoutId), this.clearTimeoutId = null);
      let t = e === "polite" ? this.politeIndex : this.assertiveIndex, r = this.regions[e][t];
      e === "polite" ? this.politeIndex = t === 0 ? 1 : 0 : this.assertiveIndex = t === 0 ? 1 : 0;
      let i = e === "polite" ? this.politeIndex : this.assertiveIndex;
      this.regions[e][i].textContent = "", setTimeout(() => {
        r.textContent = s, this.clearTimeoutId = setTimeout(() => {
          r.textContent = "", this.clearTimeoutId = null;
        }, 350);
      }, 100);
    }
    clear() {
      if (this.regions) {
        this.clearTimeoutId && (clearTimeout(this.clearTimeoutId), this.clearTimeoutId = null);
        for (let s of ["polite", "assertive"]) for (let e of this.regions[s]) e.textContent = "";
      }
    }
    destroy() {
      if (this.clear(), typeof document < "u") {
        let s = document.getElementById(this.containerId);
        s && s.remove();
      }
      this.regions = null;
    }
  };
  var Lt;
  try {
    if ((document == null ? void 0 : document.currentScript) && document.currentScript.tagName.toUpperCase() === "SCRIPT") {
      let n = new URL(document.currentScript.src).pathname.match(/^(.*\/)(?:pagefind[-_])?component[-_]?ui.js.*$/);
      n && (Lt = n[1]);
    }
  } catch (e) {
    Lt = "/breakegg-guide/pagefind/";
  }
  var Te = class {
    constructor(s, e = {}) {
      var _a, _b, _c;
      this.__pagefind__ = null;
      this.__loadPromise__ = null;
      this.__searchID__ = 0;
      this._translations = null;
      this._userTranslations = {};
      this._direction = "ltr";
      this._languageSet = false;
      this.components = [];
      this.componentsByType = {};
      this.searchTerm = "";
      this.searchFilters = {};
      this.searchResult = { results: [] };
      this.availableFilters = null;
      this.totalFilters = null;
      this.activeShortcuts = [];
      this.faceted = false;
      this.generatedIds = /* @__PURE__ */ new Set();
      this.name = s, this.__hooks__ = { search: [], filters: [], loading: [], results: [], error: [], translations: [] }, this.options = { bundlePath: (_b = (_a = e.bundlePath) != null ? _a : Lt) != null ? _b : "/breakegg-guide/pagefind/", mergeIndex: (_c = e.mergeIndex) != null ? _c : [] };
      let t = { ...e };
      delete t.bundlePath, delete t.mergeIndex, this.pagefindOptions = t, this._announcer = new De(this.generateId.bind(this));
    }
    generateId(s, e = 2) {
      let t = "abcdef", r = (o = 3) => {
        let c = "";
        for (let u = 0; u < o; u++) c += t[Math.floor(Math.random() * t.length)];
        return c;
      }, i = this.name !== "default" ? `${this.name}-` : "", a = Array.from({ length: e }, () => r()).join("-"), l = `${s}-${i}${a}`;
      return this.generatedIds.has(l) || document.getElementById(l) ? this.generateId(s, e + 1) : (this.generatedIds.add(l), l);
    }
    add(s) {
      var _a;
      (_a = s == null ? void 0 : s.register) == null ? void 0 : _a.call(s, this), this.components.push(s);
    }
    registerInput(s, e = {}) {
      this._registerComponent(s, "input", null, e);
    }
    registerResults(s, e = {}) {
      this._registerComponent(s, "results", null, e);
    }
    registerSummary(s, e = {}) {
      this._registerComponent(s, "summary", null, e);
    }
    registerFilter(s, e = {}) {
      this._registerComponent(s, "filter", null, e);
    }
    registerSort(s, e = {}) {
      this._registerComponent(s, "sort", null, e);
    }
    registerUtility(s, e = null, t = {}) {
      this._registerComponent(s, "utility", e, t);
    }
    _registerComponent(s, e, t = null, r = {}) {
      if (this.componentsByType[e] || (this.componentsByType[e] = []), this._languageSet || this.setLanguage(), this.components.includes(s)) {
        s.capabilities = r, this.reconcileAria();
        return;
      }
      s.componentType = e, s.componentSubtype = t, s.capabilities = r, this.componentsByType[e].push(s), this.components.push(s), this.reconcileAria();
    }
    getInputs(s = null) {
      let e = this.componentsByType.input || [];
      return s ? e.filter((t) => {
        var _a;
        return (_a = t.capabilities) == null ? void 0 : _a[s];
      }) : e;
    }
    getResults(s = null) {
      let e = this.componentsByType.results || [];
      return s ? e.filter((t) => {
        var _a;
        return (_a = t.capabilities) == null ? void 0 : _a[s];
      }) : e;
    }
    getSummaries(s = null) {
      let e = this.componentsByType.summary || [];
      return s ? e.filter((t) => {
        var _a;
        return (_a = t.capabilities) == null ? void 0 : _a[s];
      }) : e;
    }
    getFilters(s = null) {
      let e = this.componentsByType.filter || [];
      return s ? e.filter((t) => {
        var _a;
        return (_a = t.capabilities) == null ? void 0 : _a[s];
      }) : e;
    }
    getSorts(s = null) {
      let e = this.componentsByType.sort || [];
      return s ? e.filter((t) => {
        var _a;
        return (_a = t.capabilities) == null ? void 0 : _a[s];
      }) : e;
    }
    getUtilities(s = null, e = null) {
      let t = this.componentsByType.utility || [];
      return s !== null && (t = t.filter((r) => r.componentSubtype === s)), e && (t = t.filter((r) => {
        var _a;
        return (_a = r.capabilities) == null ? void 0 : _a[e];
      })), t;
    }
    hasAnnouncementCapability() {
      return this.components.some((s) => {
        var _a;
        return ((_a = s.capabilities) == null ? void 0 : _a.announcements) === true;
      });
    }
    registerShortcut(s, e) {
      let t = { ...s, owner: e };
      this.activeShortcuts.push(t), this.notifyShortcutsChanged();
    }
    deregisterShortcut(s, e) {
      this.activeShortcuts = this.activeShortcuts.filter((t) => !(t.label === s && t.owner === e)), this.notifyShortcutsChanged();
    }
    deregisterAllShortcuts(s) {
      this.activeShortcuts = this.activeShortcuts.filter((e) => e.owner !== s), this.notifyShortcutsChanged();
    }
    getActiveShortcuts() {
      return this.activeShortcuts;
    }
    notifyShortcutsChanged() {
      this.getUtilities("keyboard-hints").forEach((e) => {
        var _a;
        return (_a = e.render) == null ? void 0 : _a.call(e);
      });
    }
    focusNextResults(s) {
      let e = this.getResults("keyboardNavigation"), t = $t(s, e);
      if (!t) return false;
      let r = t.querySelector("a");
      return r ? (r.focus(), true) : false;
    }
    focusPreviousInput(s) {
      let e = this.getInputs("keyboardNavigation"), t = Pe(s, e);
      if (!t) return false;
      if (t.focus) return t.focus(), true;
      let r = t.querySelector("input");
      return r ? (r.focus(), true) : false;
    }
    focusInputAndType(s, e) {
      let t = this.getInputs("keyboardNavigation"), r = Pe(s, t), i = (r == null ? void 0 : r.inputEl) || (r == null ? void 0 : r.querySelector("input"));
      i && (i.value += e, i.focus(), i.dispatchEvent(new Event("input", { bubbles: true })));
    }
    focusInputAndDelete(s) {
      let e = this.getInputs("keyboardNavigation"), t = Pe(s, e), r = (t == null ? void 0 : t.inputEl) || (t == null ? void 0 : t.querySelector("input"));
      r && (r.value = r.value.slice(0, -1), r.focus(), r.dispatchEvent(new Event("input", { bubbles: true })));
    }
    reconcileAria() {
      this.components.forEach((s) => {
        var _a;
        return (_a = s.reconcileAria) == null ? void 0 : _a.call(s);
      });
    }
    get direction() {
      return this._direction;
    }
    setLanguage(s) {
      var _a;
      s || (s = ((_a = document == null ? void 0 : document.documentElement) == null ? void 0 : _a.lang) || "en"), this._translations = Zt(s), this._direction = this._translations.direction || "ltr", this._languageSet = true, this.__dispatch__("translations", this._translations, this._direction);
    }
    setTranslations(s) {
      this._userTranslations = { ...this._userTranslations, ...s }, this.__dispatch__("translations", this._translations, this._direction);
    }
    translate(s, e = {}) {
      var _a, _b, _c;
      let t = (_b = this._userTranslations[s]) != null ? _b : (_a = this._translations) == null ? void 0 : _a[s];
      return Xt(typeof t == "string" ? t : void 0, e, (_c = this._translations) == null ? void 0 : _c.language);
    }
    announce(s, e = {}, t = "polite") {
      let r = this.translate(s, e);
      r && this._announcer.announce(r, t);
    }
    announceRaw(s, e = "polite") {
      this._announcer.announce(s, e);
    }
    clearAnnouncements() {
      this._announcer.clear();
    }
    on(s, e, t = null) {
      if (!this.__hooks__[s]) {
        let r = Object.keys(this.__hooks__).join(", ");
        console.error(`[Pagefind Component UI]: Unknown event type ${s}. Supported events: [${r}]`);
        return;
      }
      if (typeof e != "function") {
        console.error(`[Pagefind Component UI]: Expected callback to be a function, received ${typeof e}`);
        return;
      }
      if (t) {
        let r = this.__hooks__[s].findIndex((i) => typeof i == "object" && i.owner === t);
        if (r !== -1) {
          this.__hooks__[s][r] = { callback: e, owner: t };
          return;
        }
        this.__hooks__[s].push({ callback: e, owner: t });
      } else this.__hooks__[s].push(e);
    }
    triggerLoad() {
      return this.__load__();
    }
    triggerSearch(s) {
      this.searchTerm = s, this.__dispatch__("search", s, this.searchFilters), this.__search__(s, this.searchFilters);
    }
    triggerSearchWithFilters(s, e) {
      this.searchTerm = s, this.searchFilters = e, this.__dispatch__("search", s, e), this.__search__(s, e);
    }
    triggerFilters(s) {
      this.searchFilters = s, this.__dispatch__("search", this.searchTerm, s), this.__search__(this.searchTerm, s);
    }
    triggerFilter(s, e) {
      this.searchFilters = this.searchFilters || {}, this.searchFilters[s] = e, this.__dispatch__("search", this.searchTerm, this.searchFilters), this.__search__(this.searchTerm, this.searchFilters);
    }
    __dispatch__(s, ...e) {
      var _a;
      (_a = this.__hooks__[s]) == null ? void 0 : _a.forEach((t) => {
        typeof t == "function" ? t(...e) : (t == null ? void 0 : t.callback) && t.callback(...e);
      });
    }
    async __clear__() {
      this.__dispatch__("results", { results: [], unfilteredTotalCount: 0 }), this.__pagefind__ && (this.availableFilters = await this.__pagefind__.filters(), this.totalFilters = this.availableFilters, this.__dispatch__("filters", { available: this.availableFilters, total: this.totalFilters }));
    }
    async __search__(s, e) {
      var _a, _b, _c, _d;
      this.__dispatch__("loading"), await this.__load__();
      let t = ++this.__searchID__;
      if ((!s || !s.length) && !this.faceted) return this.__clear__();
      if (!this.__pagefind__) return;
      let r = s && s.length ? s : null, i = await this.__pagefind__.search(r, { filters: e });
      if (i && this.__searchID__ === t && (i.filters && ((_a = Object.keys(i.filters)) == null ? void 0 : _a.length) && (this.availableFilters = i.filters, this.totalFilters = (_b = i.totalFilters) != null ? _b : null, this.__dispatch__("filters", { available: this.availableFilters, total: this.totalFilters })), this.searchResult = i, this.__dispatch__("results", this.searchResult), !this.hasAnnouncementCapability() && s)) {
        let a = (_d = (_c = i.results) == null ? void 0 : _c.length) != null ? _d : 0, l = a === 0 ? "zero_results" : a === 1 ? "one_result" : "many_results", o = a === 0 ? "assertive" : "polite";
        this.announce(l, { SEARCH_TERM: s, COUNT: a }, o);
      }
    }
    async __load__() {
      if (!this.__pagefind__) {
        if (this.__loadPromise__) return this.__loadPromise__;
        this.__loadPromise__ = this.__doLoad__();
        try {
          await this.__loadPromise__;
        } finally {
          this.__loadPromise__ = null;
        }
      }
    }
    async __doLoad__() {
      var _a, _b;
      if (this.__pagefind__) return;
      let s;
      try {
        s = await import(`${this.options.bundlePath}pagefind.js?v=ecffba502d`);
      } catch (t) {
        console.error(t), console.error([`Pagefind couldn't be loaded from ${this.options.bundlePath}pagefind.js?v=ecffba502d`, "You can configure this by passing a bundlePath option to the Pagefind Component UI"].join(`
`)), (document == null ? void 0 : document.currentScript) && document.currentScript.tagName.toUpperCase() === "SCRIPT" ? console.error(`[DEBUG: Loaded from ${(_b = (_a = document.currentScript) == null ? void 0 : _a.src) != null ? _b : "bad script location"}]`) : console.error("no known script location"), this.__dispatch__("error", { type: "bundle_load_failed", message: "Could not load search bundle", bundlePath: this.options.bundlePath, error: t }), this.hasAnnouncementCapability() || this.announce("error_search", {}, "assertive");
        return;
      }
      let e = s.createInstance(this.pagefindOptions || {});
      for (let t of this.options.mergeIndex) {
        if (!t.bundlePath) throw new Error("mergeIndex requires a bundlePath parameter");
        let { bundlePath: r, ...i } = t;
        await e.mergeIndex(r, i);
      }
      this.__pagefind__ = e, this.availableFilters = await this.__pagefind__.filters(), this.totalFilters = this.availableFilters, this.__dispatch__("filters", { available: this.availableFilters, total: this.totalFilters }), this.faceted && this.__searchID__ === 0 && this.triggerSearch("");
    }
    thinSubResults(s, e = 3) {
      if (s.length <= e) return s;
      let t = [...s].sort((r, i) => {
        var _a, _b, _c, _d;
        return ((_b = (_a = i.locations) == null ? void 0 : _a.length) != null ? _b : 0) - ((_d = (_c = r.locations) == null ? void 0 : _c.length) != null ? _d : 0);
      }).slice(0, e).map((r) => r.url);
      return s.filter((r) => t.includes(r.url));
    }
    getDisplaySubResults(s, e = 3) {
      var _a, _b;
      if (!Array.isArray(s.sub_results)) return [];
      let r = ((_a = s.sub_results[0]) == null ? void 0 : _a.url) === (((_b = s.meta) == null ? void 0 : _b.url) || s.url) ? s.sub_results.slice(1) : s.sub_results;
      return this.thinSubResults(r, e);
    }
  };
  var Pt = class {
    constructor() {
      this.instances = /* @__PURE__ */ new Map();
      this.defaultOptions = { bundlePath: this.detectBundlePath() };
    }
    detectBundlePath() {
      try {
        if ((document == null ? void 0 : document.currentScript) && document.currentScript.tagName.toUpperCase() === "SCRIPT") {
          let s = new URL(document.currentScript.src).pathname.match(/^(.*\/)(?:pagefind[-_])?.*\.js.*$/);
          if (s) return s[1];
        }
      } catch (e) {
      }
      return "/breakegg-guide/pagefind/";
    }
    getInstance(s = "default", e = {}) {
      let t = this.instances.get(s);
      if (t) return t;
      let r = { ...this.defaultOptions, ...e }, i = new Te(s, r);
      return this.instances.set(s, i), i;
    }
    hasInstance(s) {
      return this.instances.has(s);
    }
    removeInstance(s) {
      this.instances.delete(s);
    }
    getInstanceNames() {
      return Array.from(this.instances.keys());
    }
  }, Ft = null;
  function Ce() {
    return Ft || (Ft = new Pt()), Ft;
  }
  function Qt(n, s) {
    let e = Ce();
    return e.hasInstance(n) ? (console.warn(`[Pagefind Component UI]: Instance "${n}" already exists, configuration ignored`), e.getInstance(n)) : e.getInstance(n, s);
  }
  var ye = (n) => !(n == null || n === false || n === 0 || n === "" || Number.isNaN(n) || Array.isArray(n) && n.length === 0 || typeof n == "object" && n !== null && !Array.isArray(n) && Object.keys(n).length === 0), T = (n, s, e) => n.length < s ? `[Error: ${e}() needs ${s} args]` : null, es = { eq: (n, ...s) => {
    var _a;
    return (_a = T(s, 2, "eq")) != null ? _a : m(s[0], n) === m(s[1], n);
  }, ne: (n, ...s) => {
    var _a;
    return (_a = T(s, 2, "ne")) != null ? _a : m(s[0], n) !== m(s[1], n);
  }, gt: (n, ...s) => {
    var _a;
    return (_a = T(s, 2, "gt")) != null ? _a : Number(m(s[0], n)) > Number(m(s[1], n));
  }, lt: (n, ...s) => {
    var _a;
    return (_a = T(s, 2, "lt")) != null ? _a : Number(m(s[0], n)) < Number(m(s[1], n));
  }, gte: (n, ...s) => {
    var _a;
    return (_a = T(s, 2, "gte")) != null ? _a : Number(m(s[0], n)) >= Number(m(s[1], n));
  }, lte: (n, ...s) => {
    var _a;
    return (_a = T(s, 2, "lte")) != null ? _a : Number(m(s[0], n)) <= Number(m(s[1], n));
  }, and: (n, ...s) => {
    let e = true;
    for (let t of s) if (e = m(t, n), !ye(e)) return e;
    return e;
  }, or: (n, ...s) => {
    let e = false;
    for (let t of s) if (e = m(t, n), ye(e)) return e;
    return e;
  }, not: (n, ...s) => {
    var _a;
    return (_a = T(s, 1, "not")) != null ? _a : !ye(m(s[0], n));
  }, lowercase: (n, ...s) => String(m(s[0], n)).toLowerCase(), uppercase: (n, ...s) => String(m(s[0], n)).toUpperCase(), trim: (n, ...s) => String(m(s[0], n)).trim(), truncate: (n, ...s) => {
    let e = T(s, 2, "truncate");
    if (e) return e;
    let t = String(m(s[0], n)), r = Number(m(s[1], n)), i = s[2] ? String(m(s[2], n)) : "...";
    return t.length > r ? t.slice(0, r) + i : t;
  }, replace: (n, ...s) => {
    var _a;
    return (_a = T(s, 3, "replace")) != null ? _a : String(m(s[0], n)).split(String(m(s[1], n))).join(String(m(s[2], n)));
  }, limit: (n, ...s) => {
    let e = T(s, 2, "limit");
    if (e) return e;
    let t = m(s[0], n), r = m(s[1], n);
    return Array.isArray(t) ? t.slice(0, r < 0 ? 0 : r) : t;
  }, first: (n, ...s) => {
    let e = T(s, 1, "first");
    if (e) return e;
    let t = m(s[0], n);
    return Array.isArray(t) ? t[0] : t;
  }, last: (n, ...s) => {
    let e = T(s, 1, "last");
    if (e) return e;
    let t = m(s[0], n);
    return Array.isArray(t) ? t[t.length - 1] : t;
  }, length: (n, ...s) => {
    let e = T(s, 1, "length");
    if (e) return e;
    let t = m(s[0], n);
    return Array.isArray(t) ? t.length : String(t).length;
  }, join: (n, ...s) => {
    var _a;
    return (_a = T(s, 2, "join")) != null ? _a : ((e) => Array.isArray(e) ? e.join(String(m(s[1], n))) : String(e))(m(s[0], n));
  }, default: (n, ...s) => {
    let e = T(s, 2, "default");
    if (e) return e;
    let t = m(s[0], n);
    return ye(t) ? t : m(s[1], n);
  }, safeUrl: (n, ...s) => {
    var _a;
    let e = String((_a = m(s[0], n)) != null ? _a : "").trim();
    return e && /^(?:\.{0,2}\/|[#?]|(?:https?|ftp):\/\/|(?:mailto|tel):)/i.test(e) ? e : "";
  } }, m = (n, s) => {
    if (!n) return;
    if (n.t === "L") return n.val;
    if (n.t === "V") {
      let t = (i, a) => Object.prototype.hasOwnProperty.call(i, a), r = s;
      for (let i of n.path) {
        if (r == null || !t(r, i)) return;
        r = r[i];
      }
      return r;
    }
    let e = es[n.fn];
    return e ? n.t === "C" ? e(s, ...n.args) : e(s, n.left, ...n.args) : `[Error: unknown ${n.fn}()]`;
  }, ga = (n) => n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"), ve = (n, s) => {
    let e = "";
    for (let t of n) {
      if (t.t === "T") {
        e += t.val;
        continue;
      }
      if (t.t === "I") {
        let r = m(t.expr, s);
        if (Array.isArray(r)) e += "[Error: use #each for arrays]";
        else if (typeof r == "object" && r !== null) e += "[Error: cannot render object]";
        else {
          let i = String(r != null ? r : "");
          e += t.raw ? i : ga(i);
        }
        continue;
      }
      if (t.t === "F") {
        let r = false;
        for (let i of t.branches) if (ye(m(i.cond, s))) {
          e += ve(i.body, s), r = true;
          break;
        }
        !r && t.else && (e += ve(t.else, s));
        continue;
      }
      if (t.t === "E") {
        let r = m(t.arr, s);
        if (!Array.isArray(r)) {
          e += "[Error: #each needs array]";
          continue;
        }
        if (!r.length && t.else) e += ve(t.else, s);
        else for (let i = 0; i < r.length; i++) {
          let a = { ...s, [t.as]: r[i] };
          t.idx && (a[t.idx] = i), e += ve(t.body, a);
        }
      }
    }
    return e;
  }, R = (n) => {
    let s = n, e = 0, t = () => {
      for (; e < s.length && ` 	
\r`.includes(s[e]); ) e++;
    }, r = (u) => s.slice(e, e + u.length) === u, i = (u) => {
      r(u) && (e += u.length);
    }, a = () => {
      let u = "";
      for (; e < s.length && /\w/.test(s[e]); ) u += s[e++];
      return u;
    }, l = () => {
      t();
      let u = e, d, _ = s[e];
      if (_ === '"' || _ === "'") {
        let p = s[e++], g = "";
        for (; e < s.length && s[e] !== p; ) {
          if (s[e] === "\\" && e + 1 < s.length) {
            e++;
            let E = s[e];
            g += E === "n" ? `
` : E === "t" ? "	" : E === "r" ? "\r" : E, e++;
            continue;
          }
          g += s[e++];
        }
        e < s.length ? e++ : g = "", d = { t: "L", val: g };
      } else if (/[-0-9.]/.test(_)) {
        let p = "", g = 0;
        for (s[e] === "-" && (p += s[e++]), s[e] === "." && (p += s[e++], g = 1); e < s.length && (/[0-9]/.test(s[e]) || s[e] === "." && !g++); ) p += s[e++];
        d = p === "-" || p === "." || p === "" ? { t: "V", path: [p || "-"] } : { t: "L", val: parseFloat(p) };
      } else {
        let p = a();
        if (p === "true") d = { t: "L", val: true };
        else if (p === "false") d = { t: "L", val: false };
        else if (p === "null") d = { t: "L", val: null };
        else if (t(), s[e] === "(") {
          e++;
          let g = [];
          for (t(); e < s.length && s[e] !== ")" && s[e] !== "}"; ) g.push(l()), t(), s[e] === "," && (e++, t());
          s[e] === ")" && e++, d = { t: "C", fn: p, args: g };
        } else {
          let g = [p];
          for (; s[e] === "."; ) e++, g.push(a());
          d = { t: "V", path: g };
        }
      }
      for (t(); s[e] === "|"; ) {
        e++, t();
        let p = a();
        t();
        let g = [];
        if (s[e] === "(") {
          for (e++, t(); e < s.length && s[e] !== ")" && s[e] !== "}"; ) g.push(l()), t(), s[e] === "," && (e++, t());
          s[e] === ")" && e++;
        }
        d = { t: "P", left: d, fn: p, args: g }, t();
      }
      return e === u && e < s.length && e++, d;
    }, o = (u = []) => {
      let d = [];
      e: for (; e < s.length; ) {
        for (let p of u) if (r(p)) break e;
        if (s[e] === "\\" && r("\\{{")) {
          e++, d.push({ t: "T", val: "{{" }), e += 2;
          continue;
        }
        if (r("{{")) {
          if (e += 2, t(), s[e] === "+") {
            e++, t();
            let g = l();
            for (t(), i("+"), t(); e < s.length && !r("}}"); ) e++;
            i("}}"), d.push({ t: "I", expr: g, raw: 1 });
            continue;
          }
          if (s[e] === "#") {
            e++;
            let g = a();
            if (t(), g === "if") {
              let E = [], C = l();
              for (t(), i("}}"), E.push({ cond: C, body: o(["{{:else if", "{{:elseif", "{{:else}}", "{{/if}}"]) }); r("{{:else if") || r("{{:elseif"); ) {
                e += r("{{:elseif") ? 9 : 10, t();
                let v = l();
                t(), i("}}"), E.push({ cond: v, body: o(["{{:else if", "{{:elseif", "{{:else}}", "{{/if}}"]) });
              }
              let y;
              r("{{:else}}") && (e += 9, y = o(["{{/if}}"])), i("{{/if}}"), d.push({ t: "F", branches: E, else: y });
              continue;
            }
            if (g === "each") {
              let E = l();
              t();
              let C = a();
              if (t(), C !== "as") {
                d.push({ t: "T", val: "[Error: #each missing 'as']" });
                continue;
              }
              let y = a();
              t();
              let v;
              s[e] === "," && (e++, t(), v = a(), t()), i("}}");
              let $e = o(["{{:else}}", "{{/each}}"]), N;
              r("{{:else}}") && (e += 9, N = o(["{{/each}}"])), i("{{/each}}"), d.push({ t: "E", arr: E, as: y, idx: v, body: $e, else: N });
              continue;
            }
            d.push({ t: "T", val: `[Error: unknown #${g}]` }), t(), i("}}");
            continue;
          }
          let p = l();
          for (t(); e < s.length && !r("}}"); ) e++;
          i("}}"), d.push({ t: "I", expr: p });
          continue;
        }
        let _ = "";
        for (; e < s.length; ) {
          for (let p of u) if (r(p)) {
            _ && d.push({ t: "T", val: _ });
            continue e;
          }
          if (s[e] === "\\" && r("\\{{") || r("{{")) break;
          _ += s[e++];
        }
        _ && d.push({ t: "T", val: _ });
      }
      return d;
    }, c = o();
    return (u) => ve(c, u);
  };
  var ts = (n, s) => {
    es[n] = (e, ...t) => s(...t.map((r) => m(r, e)));
  };
  var f = class extends HTMLElement {
    constructor() {
      super();
      this.instance = null;
      this._initialized = false;
    }
    connectedCallback() {
      if (this._initialized) return;
      this._initialized = true;
      let e = this.getAttribute("instance") || "default", t = Ce();
      this.instance = t.getInstance(e), this.init(), this.register && typeof this.register == "function" && this.register(this.instance);
    }
    disconnectedCallback() {
      this.cleanup && typeof this.cleanup == "function" && this.cleanup(), this._initialized = false;
    }
    attributeChangedCallback(e, t, r) {
      if (!this._initialized || t === r) return;
      let i = this.kebabToCamel(e);
      r === "false" ? this[i] = false : r === "true" ? this[i] = true : r == null ? this[i] = false : this[i] = r, this.update && typeof this.update == "function" && this.update();
    }
    kebabToCamel(e) {
      return e.replace(/-([a-z])/g, (t) => t[1].toUpperCase());
    }
    ensureId(e = "pagefind") {
      return !this.id && this.instance && (this.id = this.instance.generateId(e)), this.id;
    }
    init() {
    }
    reconcileAria() {
    }
    register(e) {
    }
    cleanup() {
    }
    update() {
    }
    showError(e) {
      let t = document.createElement("div");
      t.className = "pf-error", t.innerHTML = `
            <strong>Pagefind Error:</strong> ${this.escapeHtml(e.message || "Unknown error")}
            ${e.details ? `<br><small>${this.escapeHtml(e.details)}</small>` : ""}
        `, this.appendChild(t), this.dispatchEvent(new CustomEvent("pagefind-error", { detail: e, bubbles: true, composed: true }));
    }
    escapeHtml(e) {
      let t = document.createElement("div");
      return t.textContent = e, t.innerHTML;
    }
  };
  var Re = class extends f {
    init() {
      this.setAttribute("hidden", "");
    }
    register(s) {
      s.registerUtility(this);
      let e = this.getAttribute("bundle-path");
      e && (s.options.bundlePath = e);
      let t = this.getAttribute("base-url");
      t && (s.pagefindOptions.baseUrl = t);
      let r = this.getAttribute("excerpt-length");
      r && (s.pagefindOptions.excerptLength = parseInt(r, 10));
      let i = this.getAttribute("lang");
      i && s.setLanguage(i);
      let a = this.getAttribute("meta-cache-tag");
      a && (s.pagefindOptions.metaCacheTag = a);
      let l = this.getAttribute("highlight-param");
      l && (s.pagefindOptions.highlightParam = l), this.hasAttribute("exact-diacritics") && (s.pagefindOptions.exactDiacritics = true), this.hasAttribute("no-worker") && (s.pagefindOptions.noWorker = true), this.hasAttribute("faceted") && (s.faceted = true), this.hasAttribute("preload") && s.triggerLoad();
    }
  };
  customElements.get("pagefind-config") || customElements.define("pagefind-config", Re);
  var Ea = (n = 100) => new Promise((s) => setTimeout(s, n)), ke = class extends f {
    constructor() {
      super();
      this.inputEl = null;
      this.clearEl = null;
      this.searchID = 0;
      this.placeholder = "";
      this.debounce = 300;
      this.autofocus = false;
    }
    static get observedAttributes() {
      return ["placeholder", "debounce", "autofocus"];
    }
    readAttributes() {
      this.hasAttribute("placeholder") && (this.placeholder = this.getAttribute("placeholder") || ""), this.hasAttribute("debounce") && (this.debounce = parseInt(this.getAttribute("debounce") || "300", 10) || 300), this.hasAttribute("autofocus") && (this.autofocus = this.hasAttribute("autofocus"));
    }
    init() {
      this.readAttributes(), this.render();
    }
    render() {
      var _a, _b, _c, _d, _e;
      this.innerHTML = "";
      let e = this.instance.generateId("pfmod-input"), t = ((_a = this.instance) == null ? void 0 : _a.translate("search_label")) || "Search this site", r = ((_b = this.instance) == null ? void 0 : _b.translate("clear_search")) || "Clear", i = this.placeholder || ((_c = this.instance) == null ? void 0 : _c.translate("placeholder")) || "Search";
      ((_d = this.instance) == null ? void 0 : _d.direction) === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir");
      let a = document.createElement("search");
      a.className = "pf-input-wrapper", a.setAttribute("role", "search"), a.setAttribute("aria-label", t);
      let l = document.createElement("label");
      l.setAttribute("for", e), l.setAttribute("data-pf-sr-hidden", "true"), l.textContent = t, a.appendChild(l), this.inputEl = document.createElement("input"), this.inputEl.id = e, this.inputEl.className = "pf-input", this.inputEl.setAttribute("type", "search"), this.inputEl.setAttribute("autocomplete", "off"), this.inputEl.setAttribute("autocapitalize", "none"), this.inputEl.setAttribute("enterkeyhint", "search"), this.inputEl.setAttribute("placeholder", i), this.autofocus && this.inputEl.setAttribute("autofocus", "autofocus");
      let o = this.instance.generateId("pf-input-hint"), c = ((_e = this.instance) == null ? void 0 : _e.translate("input_hint")) || "Results will appear as you type", u = document.createElement("span");
      u.id = o, u.setAttribute("data-pf-sr-hidden", "true"), u.textContent = c, this.inputEl.setAttribute("aria-describedby", o), a.appendChild(this.inputEl), a.appendChild(u), this.clearEl = document.createElement("button"), this.clearEl.className = "pf-input-clear", this.clearEl.setAttribute("type", "button"), this.clearEl.setAttribute("data-pf-suppressed", "true"), this.clearEl.textContent = r, a.appendChild(this.clearEl), this.appendChild(a), this.setupEventHandlers();
    }
    setupEventHandlers() {
      !this.inputEl || !this.clearEl || (this.inputEl.addEventListener("input", async (e) => {
        var _a;
        let t = e.target;
        if (this.instance && typeof (t == null ? void 0 : t.value) == "string") {
          this.updateState(t.value);
          let r = ++this.searchID;
          if (await Ea(this.debounce), r !== this.searchID) return;
          (_a = this.instance) == null ? void 0 : _a.triggerSearch(t.value);
        }
      }), this.inputEl.addEventListener("keydown", (e) => {
        var _a, _b;
        e.key === "Escape" && (++this.searchID, this.inputEl && (this.inputEl.value = ""), (_a = this.instance) == null ? void 0 : _a.triggerSearch(""), this.updateState("")), e.key === "ArrowDown" && (e.preventDefault(), this.inputEl && ((_b = this.instance) == null ? void 0 : _b.focusNextResults(this.inputEl)));
      }), this.inputEl.addEventListener("focus", () => {
        var _a, _b, _c, _d, _e;
        (_a = this.instance) == null ? void 0 : _a.triggerLoad();
        let e = ((_b = this.instance) == null ? void 0 : _b.translate("keyboard_navigate")) || "navigate", t = ((_c = this.instance) == null ? void 0 : _c.translate("keyboard_clear")) || "clear";
        (_d = this.instance) == null ? void 0 : _d.registerShortcut({ label: "↓", description: e }, this), (_e = this.instance) == null ? void 0 : _e.registerShortcut({ label: "esc", description: t }, this);
      }), this.inputEl.addEventListener("blur", () => {
        var _a;
        (_a = this.instance) == null ? void 0 : _a.deregisterAllShortcuts(this);
      }), this.clearEl.addEventListener("click", () => {
        var _a;
        this.inputEl && (this.inputEl.value = "", (_a = this.instance) == null ? void 0 : _a.triggerSearch(""), this.updateState(""), this.inputEl.focus());
      }));
    }
    updateState(e) {
      this.clearEl && (e && (e == null ? void 0 : e.length) ? this.clearEl.removeAttribute("data-pf-suppressed") : this.clearEl.setAttribute("data-pf-suppressed", "true"));
    }
    register(e) {
      e.registerInput(this, { keyboardNavigation: true }), e.on("search", (t) => {
        this.inputEl && document.activeElement !== this.inputEl && (this.inputEl.value = t, this.updateState(t));
      }, this), e.on("error", (t) => {
        let r = t;
        this.showError({ message: r.message || "Search initialization failed", details: r.bundlePath ? `Bundle path: ${r.bundlePath}` : void 0 });
      }, this), e.on("translations", () => {
        var _a;
        let t = ((_a = this.inputEl) == null ? void 0 : _a.value) || "";
        this.render(), this.inputEl && t && (this.inputEl.value = t, this.updateState(t));
      }, this);
    }
    update() {
      this.render();
    }
    focus() {
      this.inputEl && this.inputEl.focus();
    }
  };
  customElements.get("pagefind-input") || customElements.define("pagefind-input", ke);
  var Ae = class extends f {
    constructor() {
      super();
      this.containerEl = null;
      this.term = "";
      this.defaultMessage = "";
    }
    static get observedAttributes() {
      return ["default-message"];
    }
    init() {
      this.hasAttribute("default-message") && (this.defaultMessage = this.getAttribute("default-message") || ""), this.render();
    }
    render() {
      var _a;
      this.innerHTML = "", ((_a = this.instance) == null ? void 0 : _a.direction) === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir"), this.containerEl = document.createElement("div"), this.containerEl.className = "pf-summary", this.containerEl.textContent = this.defaultMessage, this.appendChild(this.containerEl);
    }
    reconcileAria() {
    }
    register(e) {
      e.registerSummary(this), e.on("search", (t) => {
        this.term = t;
      }, this), e.on("results", (t) => {
        var _a, _b;
        if (!this.containerEl || !t) return;
        let i = (_b = (_a = t == null ? void 0 : t.results) == null ? void 0 : _a.length) != null ? _b : 0;
        if (!this.term) {
          if (e.faceted) {
            let o = i === 0 ? "total_zero_results" : i === 1 ? "total_one_result" : "total_many_results", c = e.translate(o, { COUNT: i });
            this.containerEl.textContent = c || `${i} result${i === 1 ? "" : "s"}`;
          } else this.containerEl.textContent = this.defaultMessage;
          return;
        }
        let a = i === 0 ? "zero_results" : i === 1 ? "one_result" : "many_results", l = e.translate(a, { SEARCH_TERM: this.term, COUNT: i });
        this.containerEl.textContent = l || `${i} result${i === 1 ? "" : "s"} for ${this.term}`;
      }, this), e.on("loading", () => {
        if (!this.containerEl) return;
        let t = e.translate("searching", { SEARCH_TERM: this.term });
        this.containerEl.textContent = t || `Searching for ${this.term}...`;
      }, this), e.on("error", (t) => {
        if (!this.containerEl) return;
        let r = t, i = e.translate("error_search") || "Search failed";
        this.containerEl.textContent = `Error: ${r.message || i}`;
      }, this), e.on("translations", () => {
        this.render();
      }, this);
    }
    update() {
      this.hasAttribute("default-message") && (this.defaultMessage = this.getAttribute("default-message") || "", !this.term && this.containerEl && (this.containerEl.textContent = this.defaultMessage));
    }
  };
  customElements.get("pagefind-summary") || customElements.define("pagefind-summary", Ae);
  var ss = (n) => {
    if (n instanceof Element) return [n];
    if (Array.isArray(n) && n.every((s) => s instanceof Element)) return n;
    if (typeof n == "string" || n instanceof String) {
      let s = document.createElement("div");
      return s.innerHTML = n, [...s.childNodes];
    }
    return console.error(`[Pagefind Results]: Expected template to return HTML element or string, got ${typeof n}`), [];
  }, ba = `<li class="pf-result">
  <div class="pf-result-card">
    {{#if and(options.show_images, meta.image)}}
    <img class="pf-result-image" src="{{ meta.image | resolveUrl(meta.url | default(url)) }}" alt="{{ meta.image_alt | default(meta.title) }}">
    {{/if}}
    <div class="pf-result-content">
      <p class="pf-result-title">
        <a class="pf-result-link" href="{{ meta.url | default(url) | safeUrl }}"{{#if options.link_target}} target="{{ options.link_target }}"{{/if}}{{#if eq(options.link_target, "_blank")}} rel="noopener"{{/if}}>{{ meta.title }}</a>
      </p>
      {{#if excerpt}}
      <p class="pf-result-excerpt">{{+ excerpt +}}</p>
      {{/if}}
    </div>
  </div>
  {{#if sub_results}}
  <ul class="pf-heading-chips">
    {{#each sub_results as sub}}
    <li class="pf-heading-chip">
      <a class="pf-heading-link" href="{{ sub.url | safeUrl }}"{{#if options.link_target}} target="{{ options.link_target }}"{{/if}}{{#if eq(options.link_target, "_blank")}} rel="noopener"{{/if}}>{{ sub.title }}</a>
      <p class="pf-heading-excerpt">{{+ sub.excerpt +}}</p>
    </li>
    {{/each}}
  </ul>
  {{/if}}
</li>`, Ta = `<li class="pf-result" aria-hidden="true">
  <div class="pf-result-card">
    <div class="pf-skeleton pf-skeleton-image"></div>
    <div class="pf-result-content">
      <p class="pf-result-title pf-skeleton pf-skeleton-title"></p>
      <p class="pf-result-excerpt pf-skeleton pf-skeleton-excerpt"></p>
    </div>
  </div>
</li>`, Ca = R(ba), ya = R(Ta), rs = (n, s) => {
    for (let e of n) if (e instanceof Element) {
      e.setAttribute("data-pf-result-index", String(s));
      break;
    }
  }, zt = (n) => {
    if (!(n instanceof HTMLElement)) return null;
    let s = window.getComputedStyle(n).overflowY;
    return s !== "visible" && s !== "hidden" ? n : zt(n.parentNode);
  }, Dt = class {
    constructor(s) {
      this.result = null;
      this.loading = false;
      this.observer = null;
      this.rawResult = s.result, this.index = s.index, this.placeholderNodes = s.placeholderNodes, this.resultFn = s.resultFn, this.intersectionEl = s.intersectionEl, this.showImages = s.showImages, this.showSubResults = s.showSubResults, this.maxSubResults = s.maxSubResults, this.linkTarget = s.linkTarget, this.onLoad = s.onLoad, this.setupObserver();
    }
    setupObserver() {
      var _a;
      if (this.result !== null || this.observer !== null || !((_a = this.placeholderNodes) == null ? void 0 : _a.length)) return;
      let s = { root: this.intersectionEl, rootMargin: "50px", threshold: 0.01 };
      this.observer = new IntersectionObserver((e, t) => {
        var _a2;
        this.result === null && ((_a2 = e == null ? void 0 : e[0]) == null ? void 0 : _a2.isIntersecting) && (this.load(), t.disconnect(), this.observer = null);
      }, s), this.observer.observe(this.placeholderNodes[0]);
    }
    async load() {
      var _a, _b;
      if (((_a = this.placeholderNodes) == null ? void 0 : _a.length) && !(this.result !== null || this.loading)) {
        this.loading = true;
        try {
          this.result = await this.rawResult.data();
          let s = this.resultFn(this.result, { showImages: this.showImages, showSubResults: this.showSubResults, maxSubResults: this.maxSubResults, linkTarget: this.linkTarget }), e = ss(s);
          for (rs(e, this.index); this.placeholderNodes.length > 1; ) {
            let r = this.placeholderNodes.pop();
            r instanceof Element && r.remove();
          }
          let t = this.placeholderNodes[0];
          t instanceof Element && t.replaceWith(...e);
        } catch (e) {
          this.loading = false;
        }
        (_b = this.onLoad) == null ? void 0 : _b.call(this);
      }
    }
    cleanup() {
      this.observer && (this.observer.disconnect(), this.observer = null);
    }
  }, Se = class extends f {
    constructor() {
      super();
      this.containerEl = null;
      this.intersectionEl = document.body;
      this.results = [];
      this.showImages = false;
      this.hideSubResults = false;
      this.maxSubResults = 3;
      this.maxResults = 0;
      this.linkTarget = null;
      this.resultTemplate = null;
      this.compiledResultTemplate = null;
      this.compiledPlaceholderTemplate = null;
      this.selectedIndex = -1;
      this.selectedAnchor = null;
      this.loadingAnnouncementTimeout = null;
    }
    static get observedAttributes() {
      return ["show-images", "hide-sub-results", "max-sub-results", "max-results", "link-target"];
    }
    init() {
      this.hasAttribute("show-images") && (this.showImages = this.getAttribute("show-images") !== "false"), this.hasAttribute("hide-sub-results") && (this.hideSubResults = this.getAttribute("hide-sub-results") !== "false"), this.hasAttribute("max-sub-results") && (this.maxSubResults = parseInt(this.getAttribute("max-sub-results") || "3", 10) || 3), this.hasAttribute("max-results") && (this.maxResults = parseInt(this.getAttribute("max-results") || "0", 10)), this.hasAttribute("link-target") && (this.linkTarget = this.getAttribute("link-target")), this.checkForTemplates(), this.render();
    }
    checkForTemplates() {
      let e = this.querySelector('script[type="text/pagefind-template"]:not([data-template]), script[type="text/pagefind-template"][data-template="result"]');
      e && (this.compiledResultTemplate = R((e.textContent || "").trim()));
      let t = this.querySelector('script[type="text/pagefind-template"][data-template="placeholder"]');
      t && (this.compiledPlaceholderTemplate = R((t.textContent || "").trim()));
    }
    buildTemplateData(e, t) {
      let r = t.showSubResults ? this.instance.getDisplaySubResults(e, t.maxSubResults) : [];
      return { meta: e.meta || {}, excerpt: e.excerpt || "", url: e.url || "", sub_results: r.map((i) => ({ title: i.title, url: i.url, excerpt: i.excerpt })), options: { link_target: t.linkTarget, show_images: t.showImages } };
    }
    getResultRenderer() {
      if (this.resultTemplate) {
        let e = this.resultTemplate;
        return (t, r) => e(t);
      }
      if (this.compiledResultTemplate) {
        let e = this.compiledResultTemplate;
        return (t, r) => {
          let i = this.buildTemplateData(t, r);
          return e(i);
        };
      }
      return (e, t) => {
        let r = this.buildTemplateData(e, t);
        return Ca(r);
      };
    }
    getPlaceholder() {
      return this.compiledPlaceholderTemplate ? this.compiledPlaceholderTemplate({}) : ya({});
    }
    render() {
      var _a, _b;
      let e = [];
      this.querySelectorAll('script[type="text/pagefind-template"]').forEach((r) => {
        e.push(r);
      }), this.innerHTML = "", e.forEach((r) => this.appendChild(r));
      let t = ((_a = this.instance) == null ? void 0 : _a.translate("results_label")) || "Search results";
      ((_b = this.instance) == null ? void 0 : _b.direction) === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir"), this.containerEl = document.createElement("ul"), this.containerEl.className = "pf-results", this.containerEl.setAttribute("aria-label", t), this.containerEl.setAttribute("aria-busy", "false"), this.appendChild(this.containerEl), this.setupKeyboardHandlers();
    }
    appendResults(e) {
      if (this.containerEl) for (let t of e) this.containerEl.appendChild(t);
    }
    register(e) {
      e.registerResults(this, { keyboardNavigation: true, announcements: true }), e.on("results", (t) => {
        if (!this.containerEl) return;
        let r = t;
        for (let c of this.results) c.cleanup();
        this.containerEl.innerHTML = "", this.containerEl.setAttribute("aria-busy", "false"), this.intersectionEl = zt(this.containerEl), this.selectedIndex = -1, this.selectedAnchor = null;
        let i = this.maxResults > 0 ? r.results.slice(0, this.maxResults) : r.results, a = i.length, l = e.searchTerm;
        if (l) {
          let c = a === 0 ? "zero_results" : a === 1 ? "one_result" : "many_results", u = a === 0 ? "assertive" : "polite";
          e.announce(c, { SEARCH_TERM: l, COUNT: a }, u);
        } else if (e.faceted) {
          let c = a === 0 ? "total_zero_results" : a === 1 ? "total_one_result" : "total_many_results", u = a === 0 ? "assertive" : "polite";
          e.announce(c, { COUNT: a }, u);
        }
        let o = this.getResultRenderer();
        this.results = i.map((c, u) => {
          let d = ss(this.getPlaceholder());
          rs(d, u), this.appendResults(d);
          let _ = new Dt({ result: c, index: u, placeholderNodes: d, resultFn: o, intersectionEl: this.intersectionEl, showImages: this.showImages, showSubResults: !this.hideSubResults, maxSubResults: this.maxSubResults, linkTarget: this.linkTarget, onLoad: () => {
            _.result && this.clearLoadingAnnouncement();
          } });
          return _;
        });
      }, this), e.on("loading", () => {
        this.containerEl && (this.containerEl.innerHTML = "", this.containerEl.setAttribute("aria-busy", "true"), this.selectedIndex = -1, this.selectedAnchor = null);
      }, this), e.on("error", (t) => {
        let r = t;
        this.containerEl && this.containerEl.setAttribute("aria-busy", "false"), e.announce("error_search", {}, "assertive"), this.showError({ message: r.message || e.translate("error_search") || "Failed to load search results", details: r.bundlePath ? `Bundle path: ${r.bundlePath}` : void 0 });
      }, this), e.on("translations", () => {
        this.render();
      }, this);
    }
    findNeighborAnchor(e, t) {
      if (!this.containerEl) return null;
      let r = document.createTreeWalker(this.containerEl, NodeFilter.SHOW_ELEMENT, { acceptNode: (l) => l.tagName === "A" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
      r.currentNode = e;
      let i = t > 0 ? r.nextNode() : r.previousNode();
      if (!i || !(i instanceof HTMLAnchorElement)) return null;
      let a = this.resultIndexForNode(i);
      return { anchor: i, resultIndex: a };
    }
    resultIndexForNode(e) {
      if (!this.containerEl) return -1;
      let t = e;
      for (; t && t.parentNode !== this.containerEl; ) t = t.parentNode;
      if (!t || !(t instanceof Element)) return -1;
      let r = t.getAttribute("data-pf-result-index");
      if (r === null) return -1;
      let i = parseInt(r, 10);
      return Number.isNaN(i) ? -1 : i;
    }
    setupKeyboardHandlers() {
      this.containerEl && (this.containerEl.addEventListener("keydown", (e) => {
        var _a, _b, _c, _d;
        let t = e.target.closest("a");
        if (t) if (e.key === "ArrowDown") {
          e.preventDefault();
          let r = this.findNeighborAnchor(t, 1);
          if (r) r.anchor.focus(), this.scrollToCenter(r.anchor, e.repeat), r.resultIndex !== -1 && this.preloadAhead(r.resultIndex, 1);
          else {
            let a = this.resultIndexForNode(t) + 1;
            if (a > 0 && a < this.results.length) {
              let l = this.results[a];
              l && !l.result && (l.load(), this.scheduleLoadingAnnouncement()), this.preloadAhead(a, 1);
            }
          }
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          let r = this.findNeighborAnchor(t, -1);
          r ? (r.anchor.focus(), this.scrollToCenter(r.anchor, e.repeat), r.resultIndex !== -1 && this.preloadAhead(r.resultIndex, -1)) : (_a = this.instance) == null ? void 0 : _a.focusPreviousInput(document.activeElement);
        } else e.key === "Backspace" ? (e.preventDefault(), (_b = this.instance) == null ? void 0 : _b.focusInputAndDelete(document.activeElement)) : e.key === "/" ? (e.preventDefault(), (_c = this.instance) == null ? void 0 : _c.focusPreviousInput(document.activeElement)) : e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey && (e.preventDefault(), (_d = this.instance) == null ? void 0 : _d.focusInputAndType(document.activeElement, e.key));
      }), this.containerEl.addEventListener("focusin", (e) => {
        var _a, _b, _c, _d, _e, _f;
        let t = e.target.closest("a");
        if (!t) return;
        this.clearSelection(), t.setAttribute("data-pf-selected", ""), this.selectedAnchor = t;
        let r = ((_a = this.instance) == null ? void 0 : _a.translate("keyboard_navigate")) || "navigate", i = ((_b = this.instance) == null ? void 0 : _b.translate("keyboard_select")) || "select", a = ((_c = this.instance) == null ? void 0 : _c.translate("keyboard_search")) || "search";
        (_d = this.instance) == null ? void 0 : _d.registerShortcut({ label: "↑↓", description: r }, this), (_e = this.instance) == null ? void 0 : _e.registerShortcut({ label: "↵", description: i }, this), (_f = this.instance) == null ? void 0 : _f.registerShortcut({ label: "/", description: a }, this);
      }), this.containerEl.addEventListener("focusout", (e) => {
        var _a, _b;
        let t = e;
        ((_a = this.containerEl) == null ? void 0 : _a.contains(t.relatedTarget)) || (this.clearSelection(), (_b = this.instance) == null ? void 0 : _b.deregisterAllShortcuts(this));
      }));
    }
    scrollToCenter(e, t = false) {
      let r = this.intersectionEl || zt(e);
      if (!r || !(r instanceof HTMLElement) || r === document.body || r === document.documentElement) return;
      let i = e.getBoundingClientRect(), a = r.getBoundingClientRect(), o = i.top - a.top + r.scrollTop - r.clientHeight / 2 + e.offsetHeight / 2;
      r.scrollTo({ top: o, behavior: t ? "instant" : "smooth" });
    }
    preloadAhead(e, t) {
      let r = t > 0 ? 1 : -1;
      for (let i = 1; i <= 3; i++) {
        let a = e + r * i;
        if (a >= 0 && a < this.results.length) {
          let l = this.results[a];
          l && !l.result && l.load();
        }
      }
    }
    scheduleLoadingAnnouncement() {
      this.loadingAnnouncementTimeout || (this.loadingAnnouncementTimeout = window.setTimeout(() => {
        var _a;
        this.loadingAnnouncementTimeout = null, (_a = this.instance) == null ? void 0 : _a.announce("loading", {}, "polite");
      }, 800));
    }
    clearLoadingAnnouncement() {
      this.loadingAnnouncementTimeout && (clearTimeout(this.loadingAnnouncementTimeout), this.loadingAnnouncementTimeout = null);
    }
    clearSelection() {
      this.selectedAnchor && (this.selectedAnchor.removeAttribute("data-pf-selected"), this.selectedAnchor = null);
    }
    cleanup() {
      this.clearLoadingAnnouncement();
      for (let e of this.results) e.cleanup();
      this.results = [], this.selectedAnchor = null;
    }
    update() {
      this.render();
    }
  };
  customElements.get("pagefind-results") || customElements.define("pagefind-results", Se);
  var Ne = class extends f {
    constructor() {
      super();
      this.containerEl = null;
      this.showEmpty = false;
      this.expanded = false;
      this.openFilters = [];
      this.sortOption = "default";
      this.autoOpenThreshold = 6;
      this.selectedFilters = {};
      this.availableFilters = null;
      this.totalFilters = null;
      this.filterElements = /* @__PURE__ */ new Map();
      this.groupElements = /* @__PURE__ */ new Map();
      this.groupVisibleCounts = /* @__PURE__ */ new Map();
      this.isRendered = false;
    }
    static get observedAttributes() {
      return ["show-empty", "expanded", "open", "sort", "auto-open-threshold"];
    }
    init() {
      if (this.hasAttribute("show-empty") && (this.showEmpty = this.getAttribute("show-empty") !== "false"), this.hasAttribute("expanded") && (this.expanded = this.getAttribute("expanded") !== "false"), this.hasAttribute("open") && (this.openFilters = (this.getAttribute("open") || "").split(",").map((e) => e.trim().toLowerCase()).filter((e) => e.length > 0)), this.hasAttribute("sort")) {
        let e = this.getAttribute("sort");
        ["default", "alphabetical", "count-desc", "count-asc"].includes(e) && (this.sortOption = e);
      }
      this.hasAttribute("auto-open-threshold") && (this.autoOpenThreshold = parseInt(this.getAttribute("auto-open-threshold") || "6", 10)), this.render();
    }
    sortValues(e, t) {
      if (this.sortOption === "default") return e;
      let r = [...e];
      switch (this.sortOption) {
        case "alphabetical":
          r.sort((i, a) => i[0].localeCompare(a[0]));
          break;
        case "count-desc":
          r.sort((i, a) => {
            var _a, _b;
            let l = (_a = t[i[0]]) != null ? _a : i[1];
            return ((_b = t[a[0]]) != null ? _b : a[1]) - l;
          });
          break;
        case "count-asc":
          r.sort((i, a) => {
            var _a, _b;
            let l = (_a = t[i[0]]) != null ? _a : i[1], o = (_b = t[a[0]]) != null ? _b : a[1];
            return l - o;
          });
          break;
      }
      return r;
    }
    render() {
      var _a;
      this.innerHTML = "", ((_a = this.instance) == null ? void 0 : _a.direction) === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir"), this.containerEl = document.createElement("div"), this.containerEl.className = "pf-filter-pane", this.appendChild(this.containerEl);
    }
    getSelectedText(e) {
      return String(e);
    }
    shouldGroupStartOpen(e, t, r) {
      return this.openFilters.length > 0 ? this.openFilters.includes(e.toLowerCase()) : this.autoOpenThreshold > 0 && r === 1 && t <= this.autoOpenThreshold;
    }
    hasStructureChanged() {
      if (!this.totalFilters) return false;
      let e = new Set(Object.keys(this.totalFilters)), t = new Set(this.groupElements.keys());
      if (e.size !== t.size) return true;
      for (let r of e) if (!t.has(r)) return true;
      for (let [r, i] of Object.entries(this.totalFilters)) {
        let a = new Set(Object.keys(i));
        for (let l of a) if (!this.filterElements.has(`${r}:${l}`)) return true;
      }
      return false;
    }
    handleFiltersUpdate() {
      if (!this.containerEl || !this.totalFilters) return;
      if (Object.keys(this.totalFilters).length === 0) {
        this.containerEl.setAttribute("data-pf-hidden", "true");
        return;
      }
      this.containerEl.removeAttribute("data-pf-hidden"), !this.isRendered || this.hasStructureChanged() ? this.renderFilters() : this.updateFilters();
    }
    renderFilters() {
      var _a;
      if (!this.containerEl || !this.totalFilters) return;
      this.containerEl.innerHTML = "", this.filterElements.clear(), this.groupElements.clear(), this.groupVisibleCounts.clear();
      let e = Object.keys(this.totalFilters);
      for (let t of e) {
        let r = this.totalFilters[t], i = ((_a = this.availableFilters) == null ? void 0 : _a[t]) || {}, a = this.renderFilterGroup(t, r, i, e.length);
        a && this.containerEl.appendChild(a);
      }
      this.isRendered = true;
    }
    updateFilters() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i2, _j, _k;
      for (let [e, t] of this.filterElements) {
        let r = e.indexOf(":"), i = e.slice(0, r), a = e.slice(r + 1), l = (_c = (_b = (_a = this.availableFilters) == null ? void 0 : _a[i]) == null ? void 0 : _b[a]) != null ? _c : 0, o = (_f = (_e = (_d = this.totalFilters) == null ? void 0 : _d[i]) == null ? void 0 : _e[a]) != null ? _f : 0, c = (_g = this.selectedFilters[i]) == null ? void 0 : _g.has(a), u = c ? o : l;
        t.countSpan.textContent = String(u);
        let d = this.showEmpty || l > 0 || c, _ = t.label.hasAttribute("data-pf-hidden");
        t.label.toggleAttribute("data-pf-hidden", !d), d && _ ? this.groupVisibleCounts.set(i, ((_h = this.groupVisibleCounts.get(i)) != null ? _h : 0) + 1) : !d && !_ && this.groupVisibleCounts.set(i, ((_i2 = this.groupVisibleCounts.get(i)) != null ? _i2 : 1) - 1), t.checkbox.checked = c || false;
      }
      for (let [e, t] of this.groupElements) {
        let r = ((_j = this.selectedFilters[e]) == null ? void 0 : _j.size) || 0;
        t.selectedCountSpan && (r > 0 ? (t.selectedCountSpan.textContent = this.getSelectedText(r), t.selectedCountSpan.removeAttribute("data-pf-hidden")) : t.selectedCountSpan.setAttribute("data-pf-hidden", "true"));
        let i = (_k = this.groupVisibleCounts.get(e)) != null ? _k : 0;
        t.group.toggleAttribute("data-pf-hidden", i === 0);
      }
    }
    renderFilterGroup(e, t, r, i) {
      var _a, _b, _c;
      let a = Object.entries(t);
      if (a.length === 0) return null;
      let l = this.sortValues(a, r), o = e.charAt(0).toUpperCase() + e.slice(1), c = ((_a = this.selectedFilters[e]) == null ? void 0 : _a.size) || 0, u = this.expanded || this.shouldGroupStartOpen(e, l.length, i), d, _, p = null;
      if (this.expanded) {
        d = document.createElement("fieldset"), d.className = "pf-filter-group";
        let E = document.createElement("legend");
        E.className = "pf-filter-group-title";
        let C = document.createElement("span");
        C.className = "pf-filter-group-name", C.textContent = o, E.appendChild(C), d.appendChild(E), _ = document.createElement("div"), _.className = "pf-filter-options", d.appendChild(_);
      } else {
        d = document.createElement("details"), d.className = "pf-filter-group", d.dataset.filterName = e, u && (d.open = true);
        let E = document.createElement("summary");
        E.className = "pf-filter-group-title";
        let C = document.createElement("span");
        C.className = "pf-filter-group-name", C.textContent = o, E.appendChild(C), p = document.createElement("span"), p.className = "pf-filter-group-count", p.setAttribute("aria-hidden", "true"), c > 0 ? p.textContent = this.getSelectedText(c) : p.setAttribute("data-pf-hidden", "true"), E.appendChild(p), d.appendChild(E);
        let y = document.createElement("fieldset");
        y.className = "pf-filter-fieldset";
        let v = document.createElement("legend");
        v.setAttribute("data-pf-sr-hidden", ""), v.textContent = o, y.appendChild(v), _ = document.createElement("div"), _.className = "pf-filter-options", y.appendChild(_), d.appendChild(y);
      }
      this.groupElements.set(e, { group: d, optionsContainer: _, selectedCountSpan: p });
      let g = 0;
      for (let [E, C] of l) {
        let y = (_b = r[E]) != null ? _b : 0, v = ((_c = this.selectedFilters[e]) == null ? void 0 : _c.has(E)) || false, $e = v ? C : y, N = this.showEmpty || y > 0 || v;
        N && g++, this.renderCheckbox(_, e, E, $e, v, N);
      }
      return this.groupVisibleCounts.set(e, g), d;
    }
    renderCheckbox(e, t, r, i, a, l) {
      let o = this.instance.generateId(`pf-filter-${t}-${r}`), c = document.createElement("label");
      c.className = "pf-filter-checkbox", c.setAttribute("for", o), l || c.setAttribute("data-pf-hidden", "true");
      let u = document.createElement("input");
      u.type = "checkbox", u.className = "pf-checkbox-input", u.id = o, u.name = t, u.value = r, u.checked = a, u.addEventListener("change", (p) => {
        this.handleCheckboxChange(t, r, p.target.checked);
      }), c.appendChild(u);
      let d = document.createTextNode(r);
      c.appendChild(d);
      let _ = document.createElement("span");
      _.className = "pf-filter-checkbox-count", _.textContent = String(i), c.appendChild(_), e.appendChild(c), this.filterElements.set(`${t}:${r}`, { label: c, countSpan: _, checkbox: u });
    }
    handleCheckboxChange(e, t, r) {
      var _a, _b;
      this.selectedFilters[e] || (this.selectedFilters[e] = /* @__PURE__ */ new Set()), r ? this.selectedFilters[e].add(t) : this.selectedFilters[e].delete(t);
      let i = this.groupElements.get(e);
      if (i == null ? void 0 : i.selectedCountSpan) {
        let l = this.selectedFilters[e].size;
        l > 0 ? (i.selectedCountSpan.textContent = this.getSelectedText(l), i.selectedCountSpan.removeAttribute("data-pf-hidden")) : i.selectedCountSpan.setAttribute("data-pf-hidden", "true");
      }
      let a = Array.from(this.selectedFilters[e]);
      if (a.length === 0) {
        delete this.selectedFilters[e];
        let l = {};
        for (let [o, c] of Object.entries(this.selectedFilters)) l[o] = Array.from(c);
        (_a = this.instance) == null ? void 0 : _a.triggerFilters(l);
      } else (_b = this.instance) == null ? void 0 : _b.triggerFilter(e, a);
    }
    register(e) {
      e.registerFilter(this), e.on("filters", (t) => {
        let r = t;
        this.availableFilters = r.available, this.totalFilters = r.total, this.handleFiltersUpdate();
      }, this), e.on("search", (t, r) => {
        this.selectedFilters = {};
        let i = r;
        if (i) for (let [a, l] of Object.entries(i)) Array.isArray(l) && l.length > 0 && (this.selectedFilters[a] = new Set(l));
        this.isRendered && this.updateFilters();
      }, this), e.on("error", (t) => {
        let r = t;
        this.showError({ message: r.message || "Failed to load filters", details: r.bundlePath ? `Bundle path: ${r.bundlePath}` : void 0 });
      }, this), e.on("translations", () => {
        this.render(), this.isRendered = false, this.handleFiltersUpdate();
      }, this);
    }
    update() {
      this.hasAttribute("show-empty") && (this.showEmpty = this.getAttribute("show-empty") !== "false"), this.hasAttribute("expanded") && (this.expanded = this.getAttribute("expanded") !== "false"), this.hasAttribute("open") && (this.openFilters = (this.getAttribute("open") || "").split(",").map((e) => e.trim().toLowerCase()).filter((e) => e.length > 0)), this.isRendered && (this.isRendered = false, this.handleFiltersUpdate());
    }
  };
  customElements.get("pagefind-filter-pane") || customElements.define("pagefind-filter-pane", Ne);
  var Me = class extends f {
    constructor() {
      super();
      this.isOpen = false;
      this.activeIndex = -1;
      this.selectedValues = /* @__PURE__ */ new Set();
      this.isRendered = false;
      this.filtersLoaded = false;
      this.filterName = null;
      this.availableFilters = {};
      this.totalFilters = {};
      this.singleSelect = false;
      this.showEmpty = false;
      this.wrapLabels = false;
      this.hideClear = false;
      this.sortOption = "default";
      this.wrapperEl = null;
      this.triggerEl = null;
      this.menuEl = null;
      this.optionsEl = null;
      this.clearEl = null;
      this.badgeEl = null;
      this.optionElements = [];
      this.focusedOptionEl = null;
      this.typeAheadBuffer = "";
      this.typeAheadTimeout = null;
      this._handleClickOutside = this._handleClickOutside.bind(this);
    }
    static get observedAttributes() {
      return ["filter", "label", "single-select", "show-empty", "wrap", "sort", "hide-clear"];
    }
    init() {
      if (this.filterName = this.getAttribute("filter"), !this.filterName) {
        this.showError({ message: "filter attribute is required on <pagefind-filter-dropdown>" });
        return;
      }
      if (this.singleSelect = this.hasAttribute("single-select"), this.showEmpty = this.hasAttribute("show-empty"), this.wrapLabels = this.hasAttribute("wrap"), this.hideClear = this.hasAttribute("hide-clear"), this.hasAttribute("sort")) {
        let e = this.getAttribute("sort");
        ["default", "alphabetical", "count-desc", "count-asc"].includes(e) && (this.sortOption = e);
      }
      this.render();
    }
    sortValues(e) {
      if (this.sortOption === "default") return e;
      let t = [...e];
      switch (this.sortOption) {
        case "alphabetical":
          t.sort((r, i) => r.localeCompare(i));
          break;
        case "count-desc":
          t.sort((r, i) => {
            var _a, _b, _c, _d;
            let a = (_b = (_a = this.availableFilters[r]) != null ? _a : this.totalFilters[r]) != null ? _b : 0;
            return ((_d = (_c = this.availableFilters[i]) != null ? _c : this.totalFilters[i]) != null ? _d : 0) - a;
          });
          break;
        case "count-asc":
          t.sort((r, i) => {
            var _a, _b, _c, _d;
            let a = (_b = (_a = this.availableFilters[r]) != null ? _a : this.totalFilters[r]) != null ? _b : 0, l = (_d = (_c = this.availableFilters[i]) != null ? _c : this.totalFilters[i]) != null ? _d : 0;
            return a - l;
          });
          break;
      }
      return t;
    }
    render() {
      var _a, _b;
      this.innerHTML = "";
      let e = this.ensureId("pf-dropdown"), t = `${e}-trigger`, r = `${e}-menu`;
      this.wrapperEl = document.createElement("div"), this.wrapperEl.className = "pf-dropdown-wrapper", this.triggerEl = document.createElement("button"), this.triggerEl.type = "button", this.triggerEl.id = t, this.triggerEl.className = "pf-dropdown-trigger", this.wrapLabels && this.triggerEl.classList.add("wrap"), this.triggerEl.setAttribute("role", "combobox"), this.triggerEl.setAttribute("aria-haspopup", "listbox"), this.triggerEl.setAttribute("aria-expanded", "false"), this.triggerEl.setAttribute("aria-controls", r);
      let i = document.createElement("span");
      i.className = "pf-dropdown-trigger-label", this.wrapLabels && i.classList.add("wrap"), i.textContent = this.getAttribute("label") || this.filterName || "", this.triggerEl.appendChild(i), this.badgeEl = document.createElement("span"), this.badgeEl.className = "pf-dropdown-selected-badge", this.badgeEl.setAttribute("data-pf-hidden", "true"), this.badgeEl.setAttribute("aria-hidden", "true"), this.badgeEl.textContent = "0", this.triggerEl.appendChild(this.badgeEl);
      let a = document.createElement("span");
      a.className = "pf-dropdown-arrow", a.setAttribute("aria-hidden", "true"), this.triggerEl.appendChild(a), this.wrapperEl.appendChild(this.triggerEl), this.menuEl = document.createElement("div"), this.menuEl.id = r, this.menuEl.className = "pf-dropdown-menu", this.menuEl.hidden = true, this.optionsEl = document.createElement("div"), this.optionsEl.className = "pf-dropdown-options", this.optionsEl.setAttribute("role", "listbox"), this.optionsEl.setAttribute("aria-multiselectable", this.singleSelect ? "false" : "true"), this.optionsEl.setAttribute("aria-labelledby", t), this.menuEl.appendChild(this.optionsEl), this.wrapperEl.appendChild(this.menuEl), this.hideClear || (this.clearEl = document.createElement("button"), this.clearEl.type = "button", this.clearEl.className = "pf-dropdown-clear", this.clearEl.setAttribute("aria-disabled", "true"), this.clearEl.setAttribute("aria-label", (((_a = this.instance) == null ? void 0 : _a.translate("clear_search")) || "Clear") + " " + (this.getAttribute("label") || this.filterName || "")), this.clearEl.textContent = ((_b = this.instance) == null ? void 0 : _b.translate("clear_search")) || "Clear", this.wrapperEl.appendChild(this.clearEl), this.clearEl.addEventListener("click", () => this.clearAll())), this.appendChild(this.wrapperEl), this.triggerEl.addEventListener("click", () => this.toggle()), this.triggerEl.addEventListener("focus", () => {
        var _a2;
        return (_a2 = this.instance) == null ? void 0 : _a2.triggerLoad();
      }), this.triggerEl.addEventListener("keydown", (l) => {
        this.isOpen ? this.handleMenuKeydown(l) : this.handleTriggerKeydown(l);
      }), this.isRendered = true;
    }
    toggle() {
      this.isOpen ? this.close() : this.open();
    }
    open() {
      var _a, _b, _c, _d, _e, _f, _g;
      if ((_a = this.instance) == null ? void 0 : _a.triggerLoad(), this.isOpen || !this.menuEl || !this.triggerEl || !this.optionsEl) return;
      if (this.isOpen = true, this.filtersLoaded || this.showLoadingState(), this.menuEl.hidden = false, this.triggerEl.setAttribute("aria-expanded", "true"), this.triggerEl.classList.add("open"), this.optionElements.length > 0) {
        let i = this.activeIndex >= 0 ? this.activeIndex : 0;
        this.setActiveIndex(i);
      }
      let e = ((_b = this.instance) == null ? void 0 : _b.translate("keyboard_navigate")) || "navigate", t = ((_c = this.instance) == null ? void 0 : _c.translate("keyboard_select")) || "select", r = ((_d = this.instance) == null ? void 0 : _d.translate("keyboard_close")) || "close";
      (_e = this.instance) == null ? void 0 : _e.registerShortcut({ label: "↑↓", description: e }, this), (_f = this.instance) == null ? void 0 : _f.registerShortcut({ label: "↵", description: t }, this), (_g = this.instance) == null ? void 0 : _g.registerShortcut({ label: "esc", description: r }, this), setTimeout(() => {
        document.addEventListener("click", this._handleClickOutside);
      }, 0);
    }
    close(e = true) {
      var _a, _b;
      !this.isOpen || !this.menuEl || !this.triggerEl || !this.optionsEl || (this.isOpen = false, this.menuEl.hidden = true, this.triggerEl.setAttribute("aria-expanded", "false"), this.triggerEl.classList.remove("open"), (_a = this.triggerEl) == null ? void 0 : _a.removeAttribute("aria-activedescendant"), this.focusedOptionEl && (this.focusedOptionEl.classList.remove("pf-dropdown-option-focused"), this.focusedOptionEl = null), (_b = this.instance) == null ? void 0 : _b.deregisterAllShortcuts(this), document.removeEventListener("click", this._handleClickOutside), e && this.triggerEl.focus());
    }
    _handleClickOutside(e) {
      this.wrapperEl && !this.wrapperEl.contains(e.target) && this.close(false);
    }
    handleTriggerKeydown(e) {
      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault(), this.open();
          break;
        case "ArrowDown":
          e.preventDefault(), this.open(), this.setActiveIndex(0);
          break;
        case "ArrowUp":
          e.preventDefault(), this.open(), this.setActiveIndex(this.optionElements.length - 1);
          break;
      }
    }
    handleMenuKeydown(e) {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), this.moveActiveIndex(1);
          break;
        case "ArrowUp":
          e.preventDefault(), this.moveActiveIndex(-1);
          break;
        case "Home":
          e.preventDefault(), this.setActiveIndex(0);
          break;
        case "End":
          e.preventDefault(), this.setActiveIndex(this.optionElements.length - 1);
          break;
        case "Enter":
        case " ":
          if (e.preventDefault(), this.activeIndex >= 0 && this.activeIndex < this.optionElements.length) {
            let t = this.optionElements[this.activeIndex];
            t && this.toggleOption(t.value);
          }
          break;
        case "Escape":
          e.preventDefault(), this.close();
          break;
        case "Tab":
          this.close(false);
          break;
        default:
          e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey && this.handleTypeAhead(e.key);
      }
    }
    setActiveIndex(e) {
      var _a;
      if (e < 0 || e >= this.optionElements.length || !this.optionsEl) return;
      this.focusedOptionEl && this.focusedOptionEl.classList.remove("pf-dropdown-option-focused"), this.activeIndex = e;
      let t = this.optionElements[e];
      t.el.classList.add("pf-dropdown-option-focused"), this.focusedOptionEl = t.el, (_a = this.triggerEl) == null ? void 0 : _a.setAttribute("aria-activedescendant", t.el.id), this.scrollToCenter(t.el);
    }
    scrollToCenter(e) {
      if (!this.optionsEl) return;
      let t = this.optionsEl, r = e.offsetTop, i = e.offsetHeight, a = t.clientHeight, l = r - a / 2 + i / 2;
      t.scrollTo({ top: l, behavior: "smooth" });
    }
    moveActiveIndex(e) {
      let t = this.activeIndex + e;
      t < 0 ? t = this.optionElements.length - 1 : t >= this.optionElements.length && (t = 0), this.setActiveIndex(t);
    }
    handleTypeAhead(e) {
      this.typeAheadBuffer += e.toLowerCase(), this.typeAheadTimeout && clearTimeout(this.typeAheadTimeout);
      let t = this.optionElements.findIndex(({ value: r }) => r.toLowerCase().startsWith(this.typeAheadBuffer));
      t >= 0 && this.setActiveIndex(t), this.typeAheadTimeout = setTimeout(() => {
        this.typeAheadBuffer = "";
      }, 500);
    }
    showLoadingState() {
      if (!this.optionsEl) return;
      this.optionsEl.innerHTML = "", this.optionsEl.setAttribute("aria-busy", "true");
      let e = document.createElement("div");
      e.setAttribute("data-pf-sr-hidden", "true"), e.textContent = "Loading filter options...", this.optionsEl.appendChild(e);
      for (let t = 0; t < 3; t++) {
        let r = document.createElement("div");
        r.className = "pf-dropdown-option pf-dropdown-option-loading", r.setAttribute("aria-hidden", "true");
        let i = document.createElement("span");
        i.className = "pf-dropdown-checkbox pf-skeleton", r.appendChild(i);
        let a = document.createElement("span");
        a.className = "pf-dropdown-option-label pf-skeleton", a.style.width = `${60 + t * 15}%`, a.innerHTML = "&nbsp;", r.appendChild(a), this.optionsEl.appendChild(r);
      }
    }
    updateOptions() {
      var _a;
      if (!this.optionsEl) return;
      this.filtersLoaded = true, this.optionsEl.removeAttribute("aria-busy");
      let e = Object.keys(this.totalFilters || {}), t = this.sortValues(e);
      if (e.length === 0) {
        this.optionsEl.innerHTML = "";
        let i = document.createElement("div");
        i.className = "pf-dropdown-error", i.setAttribute("role", "alert"), i.textContent = `No filter "${this.filterName}" found`, this.optionsEl.appendChild(i), this.optionElements = [], this.focusedOptionEl = null;
        return;
      }
      (_a = this.wrapperEl) == null ? void 0 : _a.removeAttribute("data-pf-hidden"), this.optionsEl.innerHTML = "", this.optionElements = [], this.focusedOptionEl = null;
      let r = this.id || this.ensureId("pf-dropdown");
      t.forEach((i, a) => {
        var _a2, _b, _c;
        let l = (_b = (_a2 = this.availableFilters) == null ? void 0 : _a2[i]) != null ? _b : 0, o = (_c = this.totalFilters[i]) != null ? _c : 0, c = this.selectedValues.has(i);
        if (!(this.showEmpty || l > 0 || c)) return;
        let d = c ? o : l, _ = `${r}-option-${a}`, p = this.createOption(_, i, d, c);
        this.optionsEl.appendChild(p), this.optionElements.push({ el: p, value: i });
      }), this.isOpen && this.optionElements.length > 0 && (this.activeIndex >= this.optionElements.length ? this.setActiveIndex(this.optionElements.length - 1) : this.activeIndex < 0 ? this.setActiveIndex(0) : this.setActiveIndex(this.activeIndex)), this.updateBadge();
    }
    createOption(e, t, r, i) {
      let a = document.createElement("div");
      a.id = e, a.className = "pf-dropdown-option", this.wrapLabels && a.classList.add("wrap"), a.setAttribute("role", "option"), a.setAttribute("aria-selected", String(i)), a.dataset.value = t;
      let l = document.createElement("span");
      l.className = "pf-dropdown-checkbox", l.setAttribute("aria-hidden", "true"), a.appendChild(l);
      let o = document.createElement("span");
      o.className = "pf-dropdown-option-label", this.wrapLabels && o.classList.add("wrap"), o.textContent = t, a.appendChild(o);
      let c = document.createElement("span");
      c.className = "pf-dropdown-option-count", c.setAttribute("aria-hidden", "true"), c.textContent = String(r), a.appendChild(c);
      let u = r === 1 ? "result" : "results";
      return a.setAttribute("aria-label", `${t}, ${r} ${u}`), a.addEventListener("click", (d) => {
        d.stopPropagation(), this.toggleOption(t);
      }), a;
    }
    toggleOption(e) {
      var _a;
      let t = this.selectedValues.has(e);
      this.singleSelect ? (this.selectedValues.has(e) ? this.selectedValues.clear() : (this.selectedValues.clear(), this.selectedValues.add(e)), this.close()) : this.selectedValues.has(e) ? this.selectedValues.delete(e) : this.selectedValues.add(e);
      let r = this.selectedValues.has(e);
      if (r !== t) {
        let i = r ? "selected" : "deselected";
        (_a = this.instance) == null ? void 0 : _a.announceRaw(`${e} ${i}`);
      }
      this.updateOptionStates(), this.updateBadge(), this.dispatchFilterChange();
    }
    clearAll() {
      this.selectedValues.size !== 0 && (this.selectedValues.clear(), this.updateOptionStates(), this.updateBadge(), this.dispatchFilterChange());
    }
    dispatchFilterChange() {
      var _a, _b;
      if (!this.filterName) return;
      let e = Array.from(this.selectedValues);
      e.length === 0 ? (_a = this.instance) == null ? void 0 : _a.triggerFilter(this.filterName, []) : (_b = this.instance) == null ? void 0 : _b.triggerFilter(this.filterName, e);
    }
    updateBadge() {
      if (!this.badgeEl || !this.triggerEl) return;
      let e = this.selectedValues.size;
      if (e > 0) {
        this.badgeEl.textContent = String(e), this.badgeEl.removeAttribute("data-pf-hidden");
        let t = this.getAttribute("label") || this.filterName || "", r = e === 1 ? "filter" : "filters";
        this.triggerEl.setAttribute("aria-label", `${t}, ${e} ${r} selected`), this.clearEl && this.clearEl.removeAttribute("aria-disabled");
      } else this.badgeEl.setAttribute("data-pf-hidden", "true"), this.triggerEl.removeAttribute("aria-label"), this.clearEl && this.clearEl.setAttribute("aria-disabled", "true");
    }
    updateOptionStates() {
      for (let { el: e, value: t } of this.optionElements) {
        let r = this.selectedValues.has(t);
        e.setAttribute("aria-selected", String(r));
      }
    }
    register(e) {
      this.filterName && (e.registerFilter(this), e.on("filters", (t) => {
        var _a, _b;
        let r = t;
        this.availableFilters = ((_a = r.available) == null ? void 0 : _a[this.filterName]) || {}, this.totalFilters = ((_b = r.total) == null ? void 0 : _b[this.filterName]) || {}, this.isRendered && this.updateOptions();
      }, this), e.on("search", (t, r) => {
        let a = (r == null ? void 0 : r[this.filterName]) || [];
        this.selectedValues = new Set(a), this.isRendered && (this.updateOptionStates(), this.updateBadge());
      }, this), e.on("error", (t) => {
        let r = t;
        this.showError({ message: r.message || "Failed to load filters", details: r.bundlePath ? `Bundle path: ${r.bundlePath}` : void 0 });
      }, this));
    }
    update() {
      var _a;
      let e = this.getAttribute("filter");
      if (e !== this.filterName && (this.filterName = e, this.selectedValues.clear(), this.updateOptions()), this.singleSelect = this.hasAttribute("single-select"), this.showEmpty = this.hasAttribute("show-empty"), this.wrapLabels = this.hasAttribute("wrap"), this.hideClear = this.hasAttribute("hide-clear"), this.hasAttribute("sort")) {
        let r = this.getAttribute("sort");
        ["default", "alphabetical", "count-desc", "count-asc"].includes(r) && (this.sortOption = r);
      } else this.sortOption = "default";
      this.optionsEl && this.optionsEl.setAttribute("aria-multiselectable", this.singleSelect ? "false" : "true");
      let t = (_a = this.triggerEl) == null ? void 0 : _a.querySelector(".pf-dropdown-trigger-label");
      t && (t.textContent = this.getAttribute("label") || this.filterName || ""), this.updateOptions();
    }
    cleanup() {
      var _a;
      document.removeEventListener("click", this._handleClickOutside), (_a = this.instance) == null ? void 0 : _a.deregisterAllShortcuts(this), this.focusedOptionEl = null, this.typeAheadTimeout && clearTimeout(this.typeAheadTimeout);
    }
  };
  customElements.get("pagefind-filter-dropdown") || customElements.define("pagefind-filter-dropdown", Me);
  var Oe = class extends f {
    constructor() {
      super();
      this.dialogEl = null;
      this.resetOnClose = false;
      this._isOpen = false;
      this._closeHandler = null;
    }
    static get observedAttributes() {
      return ["reset-on-close"];
    }
    init() {
      this.hasAttribute("reset-on-close") && (this.resetOnClose = this.getAttribute("reset-on-close") !== "false"), this.render();
    }
    render() {
      var _a, _b;
      let e = this.children.length > 0, t = e ? Array.from(this.children) : null;
      this.innerHTML = "";
      let r = this.id || this.instance.generateId("pagefind-modal"), i = ((_a = this.instance) == null ? void 0 : _a.translate("keyboard_search")) || "search";
      if (((_b = this.instance) == null ? void 0 : _b.direction) === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir"), this.dialogEl = document.createElement("dialog"), this.dialogEl.className = "pf-modal", this.dialogEl.id = r, this.dialogEl.setAttribute("aria-label", i), e && t) t.forEach((a) => this.dialogEl.appendChild(a));
      else {
        let a = this.getAttribute("instance"), l = document.createElement("pagefind-modal-header"), o = document.createElement("pagefind-input");
        a && o.setAttribute("instance", a), l.appendChild(o);
        let c = document.createElement("pagefind-modal-body"), u = document.createElement("pagefind-summary"), d = document.createElement("pagefind-results");
        a && (u.setAttribute("instance", a), d.setAttribute("instance", a)), c.append(u, d);
        let _ = document.createElement("pagefind-modal-footer"), p = document.createElement("pagefind-keyboard-hints");
        a && p.setAttribute("instance", a), _.appendChild(p), this.dialogEl.append(l, c, _);
      }
      this.appendChild(this.dialogEl), this.setupEventHandlers();
    }
    setupEventHandlers() {
      this.dialogEl && (this._closeHandler = () => {
        this._isOpen = false, this.handleClose();
      }, this.dialogEl.addEventListener("close", this._closeHandler), this.dialogEl.addEventListener("keydown", (e) => {
        e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), this.close());
      }, true), this.dialogEl.addEventListener("click", (e) => {
        e.target === this.dialogEl && this.close();
      }));
    }
    open() {
      var _a, _b, _c;
      if (this._isOpen || !this.dialogEl) return;
      this._isOpen = true, this.dialogEl.showModal();
      let e = ((_a = this.instance) == null ? void 0 : _a.translate("keyboard_close")) || "close";
      (_b = this.instance) == null ? void 0 : _b.registerShortcut({ label: "esc", description: e }, this), requestAnimationFrame(() => {
        let r = this.querySelector("pagefind-input");
        if (r && typeof r.focus == "function") r.focus();
        else {
          let i = this.querySelector("input");
          i && i.focus();
        }
      }), (((_c = this.instance) == null ? void 0 : _c.getUtilities("modal-trigger")) || []).forEach((r) => {
        var _a2;
        return (_a2 = r.buttonEl) == null ? void 0 : _a2.setAttribute("aria-expanded", "true");
      });
    }
    close() {
      !this._isOpen || !this.dialogEl || this.dialogEl.close();
    }
    handleClose() {
      var _a, _b;
      (_a = this.instance) == null ? void 0 : _a.deregisterAllShortcuts(this), this.resetOnClose && this.instance && this.instance.triggerSearch("");
      let t = (((_b = this.instance) == null ? void 0 : _b.getUtilities("modal-trigger")) || [])[0];
      t && typeof t.handleModalClose == "function" && t.handleModalClose();
    }
    get isOpen() {
      return this._isOpen;
    }
    register(e) {
      e.registerUtility(this, "modal"), e.on("translations", () => {
        let t = this._isOpen;
        this.render(), t && this.open();
      }, this);
    }
    reconcileAria() {
      var _a;
      (((_a = this.instance) == null ? void 0 : _a.getUtilities("modal-trigger")) || []).forEach((t) => {
        var _a2;
        t.buttonEl && ((_a2 = this.dialogEl) == null ? void 0 : _a2.id) && t.buttonEl.setAttribute("aria-controls", this.dialogEl.id);
      });
    }
    cleanup() {
      var _a;
      this.dialogEl && this._closeHandler && this.dialogEl.removeEventListener("close", this._closeHandler), (_a = this.instance) == null ? void 0 : _a.deregisterAllShortcuts(this);
    }
    update() {
      this.hasAttribute("reset-on-close") && (this.resetOnClose = this.getAttribute("reset-on-close") !== "false");
    }
  };
  customElements.get("pagefind-modal") || customElements.define("pagefind-modal", Oe);
  var S = null;
  function is() {
    if (S !== null) return S;
    try {
      let n = navigator.userAgentData;
      if (n == null ? void 0 : n.platform) return S = n.platform.toLowerCase().includes("mac"), S;
    } catch (e) {
    }
    return S = /mac/i.test(navigator.userAgent), S;
  }
  function je(n) {
    let s = n.toLowerCase().split("+"), e = { mod: false, ctrl: false, shift: false, alt: false, meta: false, key: "" };
    for (let t of s) switch (t) {
      case "mod":
        e.mod = true;
        break;
      case "ctrl":
        e.ctrl = true;
        break;
      case "shift":
        e.shift = true;
        break;
      case "alt":
        e.alt = true;
        break;
      case "meta":
      case "cmd":
      case "command":
        e.meta = true;
        break;
      default:
        e.key = t;
    }
    return e;
  }
  function Be(n, s) {
    let e = is(), t = s.key.toLowerCase() === n.key, r = n.mod ? !e : n.ctrl, i = n.mod ? e : n.meta, a = r ? s.ctrlKey : !s.ctrlKey, l = i ? s.metaKey : !s.metaKey, o = n.shift ? s.shiftKey : !s.shiftKey, c = n.alt ? s.altKey : !s.altKey;
    return t && a && l && o && c;
  }
  function xe(n) {
    let s = is(), e = [], t = [];
    return n.mod && (e.push(s ? "⌘" : "Ctrl"), t.push(s ? "Meta" : "Control")), n.meta && (e.push(s ? "⌘" : "Win"), t.push("Meta")), n.ctrl && (e.push("Ctrl"), t.push("Control")), n.shift && (e.push("Shift"), t.push("Shift")), n.alt && (e.push("Alt"), t.push("Alt")), e.push(n.key.toUpperCase()), t.push(n.key), { keys: e, aria: t.join("+") };
  }
  var He = class extends f {
    constructor() {
      super();
      this.buttonEl = null;
      this._userPlaceholder = null;
      this.shortcut = "mod+k";
      this.hideShortcut = false;
      this.compact = false;
      this._keydownHandler = null;
      this._keyBinding = null;
    }
    static get observedAttributes() {
      return ["placeholder", "shortcut", "hide-shortcut", "compact"];
    }
    get placeholder() {
      var _a;
      return this._userPlaceholder || ((_a = this.instance) == null ? void 0 : _a.translate("keyboard_search")) || "Search";
    }
    init() {
      this.readAttributes(), this.render(), this.setupKeyboardShortcut();
    }
    readAttributes() {
      this.hasAttribute("placeholder") && (this._userPlaceholder = this.getAttribute("placeholder")), this.hasAttribute("shortcut") && (this.shortcut = this.getAttribute("shortcut") || "mod+k"), this.hasAttribute("hide-shortcut") && (this.hideShortcut = this.getAttribute("hide-shortcut") !== "false"), this.hasAttribute("compact") && (this.compact = this.getAttribute("compact") !== "false"), this._keyBinding = je(this.shortcut);
    }
    render() {
      var _a;
      if (this.innerHTML = "", ((_a = this.instance) == null ? void 0 : _a.direction) === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir"), this.buttonEl = document.createElement("button"), this.buttonEl.className = "pf-trigger-btn", this.buttonEl.type = "button", this.buttonEl.setAttribute("aria-haspopup", "dialog"), this.buttonEl.setAttribute("aria-expanded", "false"), this.buttonEl.setAttribute("aria-label", this.placeholder || "Search"), this._keyBinding) {
        let t = xe(this._keyBinding);
        this.buttonEl.setAttribute("aria-keyshortcuts", t.aria);
      }
      let e = document.createElement("span");
      if (e.className = "pf-trigger-icon", e.setAttribute("aria-hidden", "true"), this.buttonEl.appendChild(e), !this.compact) {
        let t = document.createElement("span");
        t.className = "pf-trigger-text", t.textContent = this.placeholder, this.buttonEl.appendChild(t);
      }
      if (!this.hideShortcut && this._keyBinding) {
        let t = document.createElement("span");
        t.className = "pf-trigger-shortcut", t.setAttribute("aria-hidden", "true");
        let r = xe(this._keyBinding);
        for (let i of r.keys) {
          let a = document.createElement("span");
          a.className = "pf-trigger-key", a.textContent = i, t.appendChild(a);
        }
        this.buttonEl.appendChild(t);
      }
      this.appendChild(this.buttonEl), this.buttonEl.addEventListener("click", () => {
        this.openModal();
      });
    }
    setupKeyboardShortcut() {
      this._keydownHandler = (e) => {
        if (!this._keyBinding || !Be(this._keyBinding, e)) return;
        let t = document.activeElement;
        t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) || (e.preventDefault(), this.openModal());
      }, document.addEventListener("keydown", this._keydownHandler);
    }
    openModal() {
      var _a;
      let t = (((_a = this.instance) == null ? void 0 : _a.getUtilities("modal")) || [])[0];
      t && typeof t.open == "function" && (t.open(), this.buttonEl && this.buttonEl.setAttribute("aria-expanded", "true"));
    }
    handleModalClose() {
      this.buttonEl && (this.buttonEl.setAttribute("aria-expanded", "false"), this.buttonEl.focus());
    }
    register(e) {
      e.registerUtility(this, "modal-trigger"), e.on("translations", () => {
        this.render();
      }, this);
    }
    reconcileAria() {
      var _a, _b;
      let t = (((_a = this.instance) == null ? void 0 : _a.getUtilities("modal")) || [])[0];
      ((_b = t == null ? void 0 : t.dialogEl) == null ? void 0 : _b.id) && this.buttonEl && this.buttonEl.setAttribute("aria-controls", t.dialogEl.id);
    }
    cleanup() {
      this._keydownHandler && (document.removeEventListener("keydown", this._keydownHandler), this._keydownHandler = null);
    }
    update() {
      this.readAttributes(), this.render();
    }
  };
  customElements.get("pagefind-modal-trigger") || customElements.define("pagefind-modal-trigger", He);
  var we = class extends f {
    constructor() {
      super(...arguments);
      this.closeBtn = null;
    }
    init() {
      var _a;
      this.classList.add("pf-modal-header");
      let e = document.createElement("div");
      for (e.className = "pf-modal-header-content"; this.firstChild; ) e.appendChild(this.firstChild);
      this.closeBtn = document.createElement("button"), this.closeBtn.type = "button", this.closeBtn.className = "pf-modal-close", this.closeBtn.setAttribute("aria-label", ((_a = this.instance) == null ? void 0 : _a.translate("keyboard_close")) || "Close"), this.closeBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 5L5 15M5 5l10 10"/></svg>', this.closeBtn.addEventListener("click", () => {
        let t = this.closest("pagefind-modal");
        t && typeof t.close == "function" && t.close();
      }), this.append(e, this.closeBtn);
    }
    register(e) {
      e.registerUtility(this, "modal-header"), e.on("translations", () => {
        this.closeBtn && this.closeBtn.setAttribute("aria-label", e.translate("keyboard_close") || "Close");
      }, this);
    }
  };
  customElements.get("pagefind-modal-header") || customElements.define("pagefind-modal-header", we);
  var Ie = class extends f {
    init() {
      this.classList.add("pf-modal-body"), this.setAttribute("tabindex", "-1");
    }
    register(s) {
    }
  };
  customElements.get("pagefind-modal-body") || customElements.define("pagefind-modal-body", Ie);
  var Ue = class extends f {
    init() {
      this.classList.add("pf-modal-footer");
    }
    register(s) {
    }
  };
  customElements.get("pagefind-modal-footer") || customElements.define("pagefind-modal-footer", Ue);
  var Le = class extends f {
    init() {
      this.classList.add("pf-keyboard-hints"), this.setAttribute("aria-hidden", "true");
    }
    render() {
      var _a, _b;
      this.innerHTML = "", ((_a = this.instance) == null ? void 0 : _a.direction) === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir");
      let s = ((_b = this.instance) == null ? void 0 : _b.getActiveShortcuts()) || [];
      if (s.length === 0) return;
      let e = /* @__PURE__ */ new Set();
      for (let t of s) {
        if (e.has(t.label)) continue;
        e.add(t.label);
        let r = document.createElement("div");
        r.className = "pf-keyboard-hint";
        let i = document.createElement("kbd");
        i.className = "pf-keyboard-key", i.textContent = t.label, r.appendChild(i), r.appendChild(document.createTextNode(` ${t.description}`)), this.appendChild(r);
      }
    }
    register(s) {
      s.registerUtility(this, "keyboard-hints"), this.render(), s.on("translations", () => {
        this.render();
      }, this);
    }
  };
  customElements.get("pagefind-keyboard-hints") || customElements.define("pagefind-keyboard-hints", Le);
  var va = (n = 100) => new Promise((s) => setTimeout(s, n)), as = (n, s) => {
    let e = n.getAttribute("role") === "option" ? [n] : Array.from(n.querySelectorAll('[role="option"]'));
    for (let t = 0; t < e.length; t++) e[t].setAttribute("data-pf-result-index", String(s)), e[t].setAttribute("data-pf-option-offset", String(t));
  }, Ke = (n) => {
    if (n instanceof Element) return [n];
    if (Array.isArray(n) && n.every((s) => s instanceof Element)) return n;
    if (typeof n == "string" || n instanceof String) {
      let s = document.createElement("div");
      return s.innerHTML = n, [...s.childNodes];
    }
    return console.error(`[Pagefind Searchbox]: Expected template to return HTML element or string, got ${typeof n}`), [];
  }, Ra = `{{#if and(options.show_sub_results, sub_results)}}<div class="pf-searchbox-group" role="group" aria-label="{{ meta.title | default('Untitled') }}">{{/if}}<a class="pf-searchbox-result" id="{{ aria.result_id }}" href="{{ meta.url | default(url) | safeUrl }}" role="option" aria-selected="false" aria-labelledby="{{ aria.title_id }}"{{#if excerpt}} aria-describedby="{{ aria.excerpt_id }}"{{/if}}>
  <p class="pf-searchbox-result-title" id="{{ aria.title_id }}">{{ meta.title | default("Untitled") }}</p>
  {{#if excerpt}}
  <p class="pf-searchbox-result-excerpt" id="{{ aria.excerpt_id }}">{{+ excerpt +}}</p>
  {{/if}}
</a>{{#if and(options.show_sub_results, sub_results)}}
{{#each sub_results as sub}}
<a class="pf-searchbox-result pf-searchbox-subresult" id="{{ sub.aria.result_id }}" href="{{ sub.url | safeUrl }}" role="option" aria-selected="false" aria-labelledby="{{ sub.aria.title_id }}"{{#if sub.excerpt}} aria-describedby="{{ sub.aria.excerpt_id }}"{{/if}}>
  <p class="pf-searchbox-result-title" id="{{ sub.aria.title_id }}">{{ sub.title | default("Section") }}</p>
  {{#if sub.excerpt}}
  <p class="pf-searchbox-result-excerpt" id="{{ sub.aria.excerpt_id }}">{{+ sub.excerpt +}}</p>
  {{/if}}
</a>
{{/each}}
</div>{{/if}}`, ns = R(Ra), ka = `<div class="pf-searchbox-result pf-searchbox-placeholder" aria-hidden="true">
  <p class="pf-searchbox-result-title pf-skeleton pf-skeleton-title"></p>
  <p class="pf-searchbox-result-excerpt pf-skeleton pf-skeleton-excerpt"></p>
</div>`, Aa = R(ka), jt = class {
    constructor(s) {
      this.data = null;
      this.cachedOptions = null;
      this.loading = false;
      this.retryDelay = 0;
      this.observer = null;
      this.rawResult = s.rawResult, this.placeholderEl = s.placeholderEl, this.renderFn = s.renderFn, this.intersectionRoot = s.intersectionRoot, this.index = s.index, this.onLoad = s.onLoad, this.setupObserver();
    }
    setupObserver() {
      if (this.data !== null || this.observer !== null) return;
      let s = { root: this.intersectionRoot, rootMargin: "50px", threshold: 0.01 };
      this.observer = new IntersectionObserver((e, t) => {
        var _a;
        this.data === null && ((_a = e == null ? void 0 : e[0]) == null ? void 0 : _a.isIntersecting) && (this.load(), t.disconnect(), this.observer = null);
      }, s), this.observer.observe(this.placeholderEl);
    }
    async load() {
      var _a;
      if (!(this.data !== null || this.loading)) {
        this.loading = true;
        try {
          this.data = await this.rawResult.data();
          let s = this.renderFn(this.data), e = Ke(s);
          if (e.length > 0 && this.placeholderEl.parentNode) {
            let t = e.find((r) => r instanceof Element);
            this.placeholderEl.replaceWith(...e), t instanceof Element && (this.placeholderEl = t, as(t, this.index), this.cacheOptions());
          }
        } catch (e) {
          await new Promise((s) => setTimeout(s, this.retryDelay || 100)), this.retryDelay = Math.min((this.retryDelay || 100) * 2, 1e4), this.loading = false;
        }
        (_a = this.onLoad) == null ? void 0 : _a.call(this);
      }
    }
    cacheOptions() {
      if (!this.data || !this.placeholderEl) {
        this.cachedOptions = null;
        return;
      }
      this.placeholderEl.getAttribute("role") === "group" ? this.cachedOptions = Array.from(this.placeholderEl.querySelectorAll('[role="option"]')) : this.placeholderEl.getAttribute("role") === "option" ? this.cachedOptions = [this.placeholderEl] : this.cachedOptions = [];
    }
    cleanup() {
      this.observer && (this.observer.disconnect(), this.observer = null), this.cachedOptions = null;
    }
  }, Fe = class extends f {
    constructor() {
      super();
      this.containerEl = null;
      this.inputEl = null;
      this.dropdownEl = null;
      this.resultsEl = null;
      this.statusEl = null;
      this.footerEl = null;
      this.isOpen = false;
      this.isLoading = false;
      this.results = [];
      this.activeIndex = -1;
      this.activeOptionOffset = 0;
      this.searchID = 0;
      this.searchTerm = "";
      this.pendingNavigation = 0;
      this.loadingAnnouncementTimeout = null;
      this.selectedEl = null;
      this._userPlaceholder = null;
      this.debounce = 150;
      this.autofocus = false;
      this.showSubResults = false;
      this.maxResults = 0;
      this.showKeyboardHints = true;
      this.shortcut = "mod+k";
      this.hideShortcut = false;
      this.resultTemplate = null;
      this.compiledResultTemplate = null;
      this.compiledPlaceholderTemplate = null;
      this._documentClickHandler = null;
      this._shortcutKeyHandler = null;
      this._keyBinding = null;
      this._shortcutEl = null;
    }
    static get observedAttributes() {
      return ["placeholder", "debounce", "autofocus", "show-sub-results", "max-results", "show-keyboard-hints", "shortcut", "hide-shortcut"];
    }
    get placeholder() {
      var _a;
      return this._userPlaceholder || ((_a = this.instance) == null ? void 0 : _a.translate("placeholder")) || "Search...";
    }
    readAttributes() {
      this.hasAttribute("placeholder") && (this._userPlaceholder = this.getAttribute("placeholder")), this.hasAttribute("debounce") && (this.debounce = parseInt(this.getAttribute("debounce") || "150", 10) || 150), this.hasAttribute("autofocus") && (this.autofocus = this.hasAttribute("autofocus")), this.hasAttribute("show-sub-results") && (this.showSubResults = this.getAttribute("show-sub-results") !== "false"), this.hasAttribute("max-results") && (this.maxResults = parseInt(this.getAttribute("max-results") || "0", 10)), this.hasAttribute("show-keyboard-hints") && (this.showKeyboardHints = this.getAttribute("show-keyboard-hints") !== "false"), this.hasAttribute("shortcut") && (this.shortcut = this.getAttribute("shortcut") || "mod+k"), this.hasAttribute("hide-shortcut") && (this.hideShortcut = this.getAttribute("hide-shortcut") !== "false"), this._keyBinding = je(this.shortcut);
    }
    init() {
      this.readAttributes(), this.checkForTemplates(), this.render(), this.setupOutsideClickHandler(), this.setupShortcutHandler();
    }
    checkForTemplates() {
      let e = this.querySelector('script[type="text/pagefind-template"]:not([data-template]), script[type="text/pagefind-template"][data-template="result"]');
      e && (this.compiledResultTemplate = R((e.textContent || "").trim()));
      let t = this.querySelector('script[type="text/pagefind-template"][data-template="placeholder"]');
      t && (this.compiledPlaceholderTemplate = R((t.textContent || "").trim()));
    }
    getPlaceholder() {
      return this.compiledPlaceholderTemplate ? this.compiledPlaceholderTemplate({}) : Aa({});
    }
    render() {
      var _a, _b;
      let e = [];
      this.querySelectorAll('script[type="text/pagefind-template"]').forEach((l) => {
        e.push(l);
      }), this.innerHTML = "", e.forEach((l) => this.appendChild(l));
      let t = this.instance.generateId("pf-sb-input"), r = this.instance.generateId("pf-sb-results");
      this.containerEl = document.createElement("div"), this.containerEl.className = "pf-searchbox", this.appendChild(this.containerEl);
      let i = document.createElement("div");
      if (i.className = "pf-searchbox-input-wrapper", this.containerEl.appendChild(i), this.inputEl = document.createElement("input"), this.inputEl.id = t, this.inputEl.className = "pf-searchbox-input", this.inputEl.type = "text", this.inputEl.setAttribute("role", "combobox"), this.inputEl.setAttribute("aria-autocomplete", "list"), this.inputEl.setAttribute("aria-controls", r), this.inputEl.setAttribute("aria-expanded", "false"), this.inputEl.setAttribute("autocomplete", "off"), this.inputEl.setAttribute("autocapitalize", "none"), this.inputEl.placeholder = this.placeholder, this.autofocus && this.inputEl.setAttribute("autofocus", "autofocus"), i.appendChild(this.inputEl), !this.hideShortcut && this._keyBinding) {
        this._shortcutEl = document.createElement("span"), this._shortcutEl.className = "pf-trigger-shortcut", this._shortcutEl.setAttribute("aria-hidden", "true");
        let l = xe(this._keyBinding);
        for (let o of l.keys) {
          let c = document.createElement("span");
          c.className = "pf-trigger-key", c.textContent = o, this._shortcutEl.appendChild(c);
        }
        i.appendChild(this._shortcutEl), this.inputEl.setAttribute("aria-keyshortcuts", l.aria);
      }
      this.dropdownEl = document.createElement("div"), this.dropdownEl.className = "pf-searchbox-dropdown", this.containerEl.appendChild(this.dropdownEl);
      let a = ((_a = this.instance) == null ? void 0 : _a.translate("results_label")) || "Search results";
      ((_b = this.instance) == null ? void 0 : _b.direction) === "rtl" ? this.setAttribute("dir", "rtl") : this.removeAttribute("dir"), this.resultsEl = document.createElement("div"), this.resultsEl.id = r, this.resultsEl.className = "pf-searchbox-results", this.resultsEl.setAttribute("role", "listbox"), this.resultsEl.setAttribute("aria-label", a), this.dropdownEl.appendChild(this.resultsEl), this.statusEl = document.createElement("div"), this.statusEl.className = "pf-searchbox-status", this.statusEl.hidden = true, this.dropdownEl.appendChild(this.statusEl), this.showKeyboardHints && (this.footerEl = document.createElement("div"), this.footerEl.className = "pf-searchbox-footer", this.footerEl.setAttribute("aria-hidden", "true"), this.dropdownEl.appendChild(this.footerEl), this.renderFooterHints()), this.setupEventHandlers();
    }
    renderFooterHints() {
      var _a, _b, _c;
      if (!this.footerEl) return;
      this.footerEl.innerHTML = "";
      let e = ((_a = this.instance) == null ? void 0 : _a.translate("keyboard_navigate")) || "navigate", t = ((_b = this.instance) == null ? void 0 : _b.translate("keyboard_select")) || "select", r = ((_c = this.instance) == null ? void 0 : _c.translate("keyboard_close")) || "close", i = document.createElement("div");
      i.className = "pf-searchbox-footer-hint";
      let a = document.createElement("span");
      a.className = "pf-searchbox-footer-key", a.textContent = "↑", i.appendChild(a);
      let l = document.createElement("span");
      l.className = "pf-searchbox-footer-key", l.textContent = "↓", i.appendChild(l), i.appendChild(document.createTextNode(` ${e}`)), this.footerEl.appendChild(i);
      let o = document.createElement("div");
      o.className = "pf-searchbox-footer-hint";
      let c = document.createElement("span");
      c.className = "pf-searchbox-footer-key", c.textContent = "↵", o.appendChild(c), o.appendChild(document.createTextNode(` ${t}`)), this.footerEl.appendChild(o);
      let u = document.createElement("div");
      u.className = "pf-searchbox-footer-hint";
      let d = document.createElement("span");
      d.className = "pf-searchbox-footer-key", d.textContent = "esc", u.appendChild(d), u.appendChild(document.createTextNode(` ${r}`)), this.footerEl.appendChild(u);
    }
    setupEventHandlers() {
      !this.inputEl || !this.resultsEl || (this.inputEl.addEventListener("input", async (e) => {
        var _a, _b;
        let t = e.target.value;
        if (this.searchTerm = t, !t || !t.trim()) {
          this.closeDropdown(), this.results = [], (_a = this.instance) == null ? void 0 : _a.triggerSearch("");
          return;
        }
        this.openDropdown(), this.showLoadingState();
        let r = ++this.searchID;
        await va(this.debounce), r === this.searchID && ((_b = this.instance) == null ? void 0 : _b.triggerSearch(t));
      }), this.inputEl.addEventListener("keydown", (e) => {
        var _a, _b, _c;
        switch (e.key) {
          case "ArrowDown":
            e.preventDefault(), !this.isOpen && ((_a = this.inputEl) == null ? void 0 : _a.value.trim()) && this.openDropdown(), this.isOpen && this.results.length > 0 && this.moveSelection(1);
            break;
          case "ArrowUp":
            e.preventDefault(), this.isOpen && this.results.length > 0 && this.moveSelection(-1);
            break;
          case "Enter":
            this.isOpen && this.activeIndex >= 0 ? (e.preventDefault(), this.activateCurrentSelection(e)) : !this.isOpen && ((_b = this.inputEl) == null ? void 0 : _b.value.trim()) && (e.preventDefault(), this.openDropdown(), this.results.length > 0 ? (this.rerenderLoadedResults(), this.activeIndex = 0, this.activeOptionOffset = 0, this.updateSelectionUI()) : (_c = this.instance) == null ? void 0 : _c.triggerSearch(this.inputEl.value));
            break;
          case "Escape":
            this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.isOpen && (e.preventDefault(), this.closeDropdown());
            break;
          case "Tab":
            this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.isOpen && this.closeDropdown();
            break;
        }
      }), this.inputEl.addEventListener("focus", () => {
        var _a;
        (_a = this.instance) == null ? void 0 : _a.triggerLoad();
      }), this.resultsEl.addEventListener("click", (e) => {
        e.target.closest("a") && this.closeDropdown();
      }), this.resultsEl.addEventListener("mousemove", (e) => {
        let t = e.target.closest("a");
        if (t) {
          let r = this.getResultAndOffsetFromElement(t);
          r && (r.resultIndex !== this.activeIndex || r.optionOffset !== this.activeOptionOffset) && (this.activeIndex = r.resultIndex, this.activeOptionOffset = r.optionOffset, this.updateSelectionUI(false));
        }
      }));
    }
    setupOutsideClickHandler() {
      this._documentClickHandler = (e) => {
        this.isOpen && !this.contains(e.target) && this.closeDropdown();
      }, document.addEventListener("click", this._documentClickHandler);
    }
    setupShortcutHandler() {
      this._keyBinding && (this._shortcutKeyHandler = (e) => {
        var _a;
        if (!this._keyBinding || !Be(this._keyBinding, e)) return;
        let t = document.activeElement;
        t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) || (e.preventDefault(), (_a = this.inputEl) == null ? void 0 : _a.focus());
      }, document.addEventListener("keydown", this._shortcutKeyHandler));
    }
    openDropdown() {
      this.isOpen || !this.containerEl || !this.inputEl || (this.isOpen = true, this.containerEl.classList.add("open"), this.inputEl.setAttribute("aria-expanded", "true"));
    }
    closeDropdown() {
      !this.isOpen || !this.containerEl || !this.inputEl || (this.isOpen = false, this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.containerEl.classList.remove("open"), this.inputEl.setAttribute("aria-expanded", "false"), this.inputEl.removeAttribute("aria-activedescendant"), this.activeIndex = -1, this.activeOptionOffset = 0, this.selectedEl = null);
    }
    showLoadingState() {
      var _a;
      if (!this.resultsEl || !this.statusEl) return;
      this.isLoading = true, this.resultsEl.innerHTML = "", this.selectedEl = null, this.resultsEl.setAttribute("aria-busy", "true");
      let e = ((_a = this.instance) == null ? void 0 : _a.translate("searching", { SEARCH_TERM: this.searchTerm })) || "Searching...";
      this.statusEl.textContent = e, this.statusEl.className = "pf-searchbox-status pf-searchbox-loading", this.statusEl.hidden = false;
    }
    showEmptyState() {
      var _a, _b;
      if (!this.resultsEl || !this.statusEl) return;
      this.resultsEl.innerHTML = "", this.selectedEl = null, this.resultsEl.removeAttribute("aria-busy");
      let e = ((_a = this.instance) == null ? void 0 : _a.translate("zero_results", { SEARCH_TERM: this.searchTerm })) || `No results for "${this.searchTerm}"`;
      this.statusEl.textContent = e, this.statusEl.className = "pf-searchbox-status pf-searchbox-empty", this.statusEl.hidden = false, (_b = this.instance) == null ? void 0 : _b.announce("zero_results", { SEARCH_TERM: this.searchTerm }, "assertive");
    }
    getOptionsForResult(e) {
      return e.cachedOptions !== null ? e.cachedOptions : !e.data || !e.placeholderEl ? [] : e.placeholderEl.getAttribute("role") === "group" ? Array.from(e.placeholderEl.querySelectorAll('[role="option"]')) : e.placeholderEl.getAttribute("role") === "option" ? [e.placeholderEl] : [];
    }
    moveSelection(e) {
      let t = this.results.length;
      if (t === 0) return;
      if (e < 0) {
        if (this.activeIndex === -1) return;
        if (this.activeOptionOffset > 0) {
          this.activeOptionOffset--, this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.updateSelectionUI(true);
          return;
        }
        let o = this.activeIndex - 1;
        if (o < 0) {
          this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.activeIndex = -1, this.activeOptionOffset = 0, this.updateSelectionUI(true);
          return;
        }
        let c = this.results[o];
        if (!c || !c.data) return;
        let u = this.getOptionsForResult(c);
        this.activeIndex = o, this.activeOptionOffset = Math.max(0, u.length - 1), this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.updateSelectionUI(true), this.preloadAhead(o, e);
        return;
      }
      if (this.activeIndex === -1) {
        if (this.results[0] && !this.results[0].data) {
          this.pendingNavigation += e, this.results[0].load(), this.scheduleLoadingAnnouncement(), this.preloadAhead(0, e);
          return;
        }
        this.activeIndex = 0, this.activeOptionOffset = 0, this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.updateSelectionUI(true), this.preloadAhead(0, e);
        return;
      }
      let r = this.results[this.activeIndex];
      if (!(r == null ? void 0 : r.data)) {
        r && (this.pendingNavigation += e, r.load(), this.scheduleLoadingAnnouncement(), this.preloadAhead(this.activeIndex, e));
        return;
      }
      let i = this.getOptionsForResult(r);
      if (this.activeOptionOffset < i.length - 1) {
        this.activeOptionOffset++, this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.updateSelectionUI(true);
        return;
      }
      let a = this.activeIndex + 1;
      if (a >= t) return;
      let l = this.results[a];
      if (l && !l.data) {
        this.pendingNavigation += e, l.load(), this.scheduleLoadingAnnouncement(), this.preloadAhead(a, e);
        return;
      }
      this.activeIndex = a, this.activeOptionOffset = 0, this.pendingNavigation = 0, this.clearLoadingAnnouncement(), this.updateSelectionUI(true), this.preloadAhead(a, e);
    }
    preloadAhead(e, t) {
      let r = t > 0 ? 1 : -1, i = Math.abs(this.pendingNavigation) + 3;
      for (let a = 1; a <= i; a++) {
        let l = e + r * a;
        if (l >= 0 && l < this.results.length) {
          let o = this.results[l];
          o && !o.data && o.load();
        }
      }
    }
    scheduleLoadingAnnouncement() {
      this.loadingAnnouncementTimeout || (this.loadingAnnouncementTimeout = window.setTimeout(() => {
        var _a;
        this.loadingAnnouncementTimeout = null, (_a = this.instance) == null ? void 0 : _a.announce("loading", {}, "polite");
      }, 800));
    }
    clearLoadingAnnouncement() {
      this.loadingAnnouncementTimeout && (clearTimeout(this.loadingAnnouncementTimeout), this.loadingAnnouncementTimeout = null);
    }
    handleResultLoaded() {
      if (this.clearLoadingAnnouncement(), this.pendingNavigation === 0) {
        this.updateSelectionUI();
        return;
      }
      let e = this.pendingNavigation > 0 ? 1 : -1, t = this.activeIndex, r = this.activeOptionOffset;
      for (; this.pendingNavigation !== 0; ) if (e > 0) {
        let i = this.results[t];
        if (i == null ? void 0 : i.data) {
          let o = this.getOptionsForResult(i);
          if (r < o.length - 1) {
            r++, this.pendingNavigation--;
            continue;
          }
        }
        let a = t + 1;
        if (a >= this.results.length) {
          this.pendingNavigation = 0;
          break;
        }
        let l = this.results[a];
        if (l == null ? void 0 : l.data) t = a, r = 0, this.pendingNavigation--;
        else {
          l && (l.load(), this.scheduleLoadingAnnouncement(), this.preloadAhead(a, e));
          break;
        }
      } else {
        if (r > 0) {
          r--, this.pendingNavigation++;
          continue;
        }
        let i = t - 1;
        if (i < 0) {
          this.pendingNavigation = 0;
          break;
        }
        let a = this.results[i];
        if (a == null ? void 0 : a.data) {
          let l = this.getOptionsForResult(a);
          t = i, r = Math.max(0, l.length - 1), this.pendingNavigation++;
        } else break;
      }
      (t !== this.activeIndex || r !== this.activeOptionOffset) && (this.activeIndex = t, this.activeOptionOffset = r, this.updateSelectionUI(true));
    }
    updateSelectionUI(e = false) {
      if (!this.resultsEl || !this.inputEl) return;
      this.selectedEl && (this.selectedEl.removeAttribute("data-pf-selected"), this.selectedEl.setAttribute("aria-selected", "false"), this.selectedEl = null);
      let t = this.activeIndex >= 0 ? this.results[this.activeIndex] : null, i = (t ? this.getOptionsForResult(t) : [])[this.activeOptionOffset];
      i ? (i.setAttribute("data-pf-selected", ""), i.setAttribute("aria-selected", "true"), this.selectedEl = i, this.inputEl.setAttribute("aria-activedescendant", i.id), e && this.scrollToCenter(i)) : this.inputEl.removeAttribute("aria-activedescendant");
    }
    scrollToCenter(e) {
      if (!this.resultsEl) return;
      let t = this.resultsEl, r = e.offsetTop, i = e.offsetHeight, a = t.clientHeight, l = r - a / 2 + i / 2;
      t.scrollTo({ top: l, behavior: "smooth" });
    }
    getResultAndOffsetFromElement(e) {
      let t = e.closest("[data-pf-result-index]");
      if (!t) return null;
      let r = parseInt(t.getAttribute("data-pf-result-index"), 10), i = parseInt(t.getAttribute("data-pf-option-offset") || "0", 10);
      return Number.isNaN(r) || Number.isNaN(i) ? null : { resultIndex: r, optionOffset: i };
    }
    activateCurrentSelection(e) {
      if (this.activeIndex < 0 || this.activeIndex >= this.results.length) return;
      let t = this.results[this.activeIndex];
      if (!t || !t.data) return;
      let i = this.getOptionsForResult(t)[this.activeOptionOffset];
      !i || !i.href || (e.metaKey || e.ctrlKey || e.shiftKey ? window.open(i.href, "_blank") : window.location.href = i.href, this.closeDropdown());
    }
    handleResults(e) {
      this.isLoading = false, this.resultsEl && this.resultsEl.removeAttribute("aria-busy"), this.statusEl && (this.statusEl.hidden = true);
      for (let i of this.results) i.cleanup();
      if (this.pendingNavigation = 0, this.clearLoadingAnnouncement(), !e.results || e.results.length === 0) {
        this.results = [], this.showEmptyState();
        return;
      }
      let t = this.maxResults > 0 ? e.results.slice(0, this.maxResults) : e.results;
      this.resultsEl && (this.resultsEl.innerHTML = "", this.selectedEl = null);
      let r = this.getResultRenderer();
      this.results = t.map((i, a) => {
        let l = this.getPlaceholder(), c = Ke(l)[0];
        this.resultsEl && c && this.resultsEl.appendChild(c);
        let u = new jt({ rawResult: i, placeholderEl: c, renderFn: r, intersectionRoot: this.resultsEl, index: a, onLoad: () => {
          this.results[a] === u && this.handleResultLoaded();
        } });
        return u;
      }), this.activeIndex = 0, this.activeOptionOffset = 0, this.updateSelectionUI(), this.announceResults();
    }
    buildTemplateData(e) {
      let t = this.showSubResults ? this.instance.getDisplaySubResults(e) : [], r = this.instance.generateId("pf-sb-result");
      return { meta: e.meta || {}, excerpt: e.excerpt || "", url: e.url || "", sub_results: t.map((i) => {
        let a = this.instance.generateId("pf-sb-result");
        return { title: i.title, url: i.url, excerpt: i.excerpt, aria: { result_id: a, title_id: `${a}-title`, excerpt_id: `${a}-excerpt` } };
      }), options: { show_sub_results: this.showSubResults }, aria: { result_id: r, title_id: `${r}-title`, excerpt_id: `${r}-excerpt` } };
    }
    getResultRenderer() {
      if (this.resultTemplate) return this.resultTemplate;
      if (this.compiledResultTemplate) {
        let e = this.compiledResultTemplate;
        return (t) => {
          let r = this.buildTemplateData(t);
          return e(r);
        };
      }
      return (e) => {
        let t = this.buildTemplateData(e);
        return ns(t);
      };
    }
    rerenderLoadedResults() {
      if (this.resultsEl) {
        this.resultsEl.innerHTML = "", this.selectedEl = null;
        for (let e = 0; e < this.results.length; e++) {
          let t = this.results[e];
          if (t.data) {
            let r = this.buildTemplateData(t.data), i;
            this.resultTemplate ? i = this.resultTemplate(t.data) : this.compiledResultTemplate ? i = this.compiledResultTemplate(r) : i = ns(r);
            let a = Ke(i);
            for (let l of a) if (l instanceof Element) {
              this.resultsEl.appendChild(l), t.placeholderEl = l, as(l, e), t.cacheOptions();
              break;
            }
            for (let l of a.slice(1)) this.resultsEl.appendChild(l);
          } else {
            let r = this.getPlaceholder(), a = Ke(r)[0];
            a && (this.resultsEl.appendChild(a), t.placeholderEl = a, t.cleanup(), t.setupObserver());
          }
        }
      }
    }
    announceResults() {
      var _a, _b;
      let e = this.results.length;
      if (e === 0) (_a = this.instance) == null ? void 0 : _a.announce("zero_results", { SEARCH_TERM: this.searchTerm }, "assertive");
      else {
        let t = e === 1 ? "one_result" : "many_results";
        (_b = this.instance) == null ? void 0 : _b.announce(t, { SEARCH_TERM: this.searchTerm, COUNT: e });
      }
    }
    register(e) {
      e.registerInput(this, { keyboardNavigation: true }), e.registerResults(this, { keyboardNavigation: true, announcements: true }), e.on("loading", () => {
        this.searchTerm && this.searchTerm.trim() && (this.openDropdown(), this.showLoadingState());
      }, this), e.on("results", (t) => {
        this.handleResults(t);
      }, this), e.on("error", (t) => {
        let r = t;
        this.isLoading = false;
        let i = e.translate("error_search") || "Search failed";
        this.showError({ message: r.message || i, details: r.bundlePath ? `Bundle path: ${r.bundlePath}` : void 0 }), e.announce("error_search", {}, "assertive");
      }, this), e.on("search", (t) => {
        this.inputEl && document.activeElement !== this.inputEl && (this.inputEl.value = t, this.searchTerm = t);
      }, this), e.on("translations", () => {
        var _a;
        let t = ((_a = this.inputEl) == null ? void 0 : _a.value) || "", r = this.isOpen;
        this.render(), this.inputEl && t && (this.inputEl.value = t), r && (this.openDropdown(), this.results.length > 0 && (this.rerenderLoadedResults(), this.updateSelectionUI()));
      }, this);
    }
    cleanup() {
      this.clearLoadingAnnouncement();
      for (let e of this.results) e.cleanup();
      this.results = [], this.selectedEl = null, this._documentClickHandler && (document.removeEventListener("click", this._documentClickHandler), this._documentClickHandler = null), this._shortcutKeyHandler && (document.removeEventListener("keydown", this._shortcutKeyHandler), this._shortcutKeyHandler = null);
    }
    update() {
      this.readAttributes(), this._documentClickHandler && (document.removeEventListener("click", this._documentClickHandler), this._documentClickHandler = null), this._shortcutKeyHandler && (document.removeEventListener("keydown", this._shortcutKeyHandler), this._shortcutKeyHandler = null), this.render(), this.setupOutsideClickHandler(), this.setupShortcutHandler();
    }
    focus() {
      this.inputEl && this.inputEl.focus();
    }
  };
  customElements.get("pagefind-searchbox") || customElements.define("pagefind-searchbox", Fe);
  ts("resolveUrl", (n, s) => {
    let e = String(n != null ? n : "");
    if (!e || /^[a-z][a-z0-9+.-]*:/i.test(e) || /^\/\//.test(e) || e.startsWith("/")) return e;
    try {
      return new URL(e, new URL(String(s != null ? s : "/"), "https://p")).pathname;
    } catch (e2) {
      return e;
    }
  });
  typeof window < "u" && (window.PagefindComponents = Bt);
})();
