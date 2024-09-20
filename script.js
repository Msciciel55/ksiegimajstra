document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    const zamawiajacy = document.getElementById("zamawiajacy").value;
    const przedmiot = document.getElementById("przedmiot").value;
    const ustalonaCena = document.getElementById("ustalonaCena").value;
    const platnosc = document.getElementById("platnosc").value;

    const table = document.getElementById("ordersTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5); // Nowa komórka na przycisk

    cell1.innerHTML = formattedDate;
    cell2.innerHTML = zamawiajacy;
    cell3.innerHTML = przedmiot;
    cell4.innerHTML = ustalonaCena;
    cell5.innerHTML = platnosc;
    cell6.innerHTML = '<button class="finish-button">Zakończ</button>'; // Przycisk Zakończ

    document.getElementById("orderForm").reset();

    // Dodaj event listener do przycisku "Zakończ"
    const finishButton = newRow.querySelector('.finish-button');
    finishButton.addEventListener('click', function() {
        newRow.classList.add('finished'); // Dodaj klasę do skreślenia
        setTimeout(() => {
            table.deleteRow(newRow.rowIndex - 1); // Archiwizuj wiersz po 60 sekundach
        }, 60000); // 60000 ms = 60 sekund
    });
    const tbody = document.querySelector("#ordersTable tbody");
});
const tbody = document.querySelector("#ordersTable tbody");

Sortable.create(tbody, {
    animation: 150, // Animacja podczas przeciągania
    handle: 'tr',   // Chwytanie za wiersze
    ghostClass: 'sortable-ghost', // Stylizacja dla elementu, który jest przeciągany
});
