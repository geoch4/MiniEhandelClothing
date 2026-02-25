## UI-prototyp (HTML/CSS/JS)

Prototypen är byggd som statiska sidor (öppnas lokalt utan server). För att ändå visa ett “flöde” och ett delat state mellan sidor används **LocalStorage**:

- När användaren klickar “Lägg i varukorg” sparas en räknare i LocalStorage.
- Navbar visar `Cart: X` genom att läsa samma värde vid sidladdning.
- Detta simulerar hur ett riktigt system skulle hålla state (t.ex. via backend/API eller session), men utan externa beroenden.
Detta gör att use caset (Välj storlek → Lägg i varukorg → uppdaterad varukorg) syns tydligt även utan backend.

# AI_LOG

## Prompt 1
**Jag frågade:**
"Skapa en enkel UI-prototyp för mini e-handel med två sidor (lista + produktdetalj), semantisk HTML och minimal JS (live filter)."

**AI gav:**
Förslag på struktur för `index.html`, `page2.html`, `components.html`, samt CSS-klasser och en enkel filter-funktion i JS.

**Jag ändrade manuellt:**
Anpassade text, knappnamn och layout för att matcha mitt use case (Lista → Detalj → Välj storlek → Lägg i varukorg).

---

## Prompt 2
**Jag frågade:**
"Kan du hjälpa mig lägga till en micro interaction som känns relevant för use caset?"

**AI gav:**
Förslag på live filter och en “Cart counter” i navbar.

**Jag ändrade manuellt:**
Valde att använda **LocalStorage** för att spara cart-count så att värdet finns kvar mellan sidor utan backend.

---

## Prompt 3
**Jag frågade:**
"Jag ser att CSS skrivs ut som text i sidan – vad är felet och hur fixar jag det?"

**AI gav:**
Förklarade att jag råkat lägga CSS-kod i `index.html` efter `</html>` och att det ska ligga i `style.css`.

**Jag ändrade manuellt:**
Tog bort CSS-blocket från HTML, flyttade allt till `style.css` och rensade även dubblerad kod i `script.js` genom att samla logiken i tydliga init-funktioner.

---

## Reflektion
Jag lärde mig vikten av att separera ansvar: HTML för struktur, CSS för styling och JS för interaktion. Jag såg också hur lätt det är att få “dubblerad kod”, och hur mycket tydligare det blir när man delar upp funktionalitet i små init-funktioner.

## Change note (denna vecka)
1) Flyttade CSS från `index.html` till `style.css` eftersom webbläsaren annars renderade CSS som text. Detta gav korrekt separation och enklare underhåll.
2) Rensade dubblerad kod i `script.js` och delade upp funktioner i `initLiveFilter()`, `initThemeToggle()` och `initAddToCart()` för bättre struktur och mindre risk för buggar.