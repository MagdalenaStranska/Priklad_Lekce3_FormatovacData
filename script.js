// Formátovač data
// Vypište do stránky hezky zformátované datum.
// Vytvořte stránku, která se zeptá uživatele na den, měsíc a rok a vypíše do stránky datum v hezkém formátu.

// 1. Založte nový JavaScriptový program a v něm si pomocí funkce prompt zeptejte uživatele na den, měsíc a rok.
// 2. Jakmile uživatel zadá patřičné údaje, vypište do stránky datum v tomto formátu.
// 28. 4. 2021
// 3. Vypisujte datum do webové stránky jako následující HTML kód.
// <p class="date">
//   <span class="day">28</span>. <span class="month">4</span>.
//   <span class="year">2021</span>
// </p>
// Bonus
// Zkuste tyto prvky lehce nastylovat pomocí CSS, aby vypadaly hezky.

const day = prompt('Zadej den');
const month = prompt('Zadej měsíc');
const year = prompt('Zadej rok');
document.body.innerHTML += '<p>' + day + '. ' + month + '. ' + year + '</p>';

