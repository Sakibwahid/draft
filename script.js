document.addEventListener('DOMContentLoaded', function () {
    const lowerLimitInput = document.getElementById('lowerLimit');
    const upperLimitInput = document.getElementById('upperLimit');
    const generateButton = document.getElementById('generateButton');
    const randomNumberDisplay = document.getElementById('randomNumber');

    generateButton.addEventListener('click', function () {
        const lowerLimit = parseInt(lowerLimitInput.value);
        const upperLimit = parseInt(upperLimitInput.value);

        if (!isNaN(lowerLimit) && !isNaN(upperLimit)) {
            const randomNum = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
            randomNumberDisplay.textContent = `Random Number: ${randomNum}`;
        } else {
            randomNumberDisplay.textContent = 'Invalid input';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('category');
    const playerList = document.getElementById('playerList');

    categorySelect.addEventListener('change', function () {
        const selectedCategory = categorySelect.value;
        const categoryPlayers = getPlayerList(selectedCategory);

        // Clear the previous list
        playerList.innerHTML = '';

        // Populate the player list
        categoryPlayers.forEach(function (player, index) {
            const listItem = document.createElement('li');
            listItem.textContent = `${index + 1}. ${player}`;
            listItem.classList.add('list-group-item'); // Add Bootstrap list group class

            // Add a click event listener to mark the player as done
            listItem.addEventListener('click', function () {
                listItem.classList.toggle('done');
            });

            playerList.appendChild(listItem);
        });
    });

    // Function to get player list based on the selected category
    function getPlayerList(category) {
        const playerLists = {
                RB: [
                  'Kieran Trippier - Newcastle United (84)',
                  'Lucas Vázquez - Real Madrid (81)',
                  'Dani Carvajal - Real Madrid (84)',
                  'Reece James - Chelsea (84)',
                  'Trent Alexander-Arnold - Liverpool (86)',
                  'Achraf Hakimi - Paris Saint-Germain (84)',
                  'Kyle Walker - Manchester City (85)'
                ],
                CB: [
                  'Virgil van Dijk - Liverpool (89)',
                  'Marquinhos - Paris Saint-Germain (88)',
                  'Rúben Dias - Manchester City (88)',
                  'Antonio Rüdiger - Real Madrid (87)',
                  'Kalidou Koulibaly - Al-Hilal (86)',
                  'Aymeric Laporte - Manchester City (86)',
                  'Thiago Silva - Chelsea (86)',
                  'David Alaba - Real Madrid (86)',
                  'Milan Škriniar - Paris Saint-Germain (86)',
                  'Niklas Süle - Borussia Dortmund (85)',
                  'Sergio Ramos - PSG (85)',
                  'Éder Militão - Real Madrid (84)',
                  'Matthijs de Ligt - Bayern Munich (85)',
                  'Lucas Hernández - FC Bayern München (84)',
                  'Jules Koundé - FC Barcelona (84)',
                  'Konate-81',
'Varane-(85)',
'Romero-(83)',
'Fernandez-(82)'
                ],
                
  LB: [
    'Raphael Guerreiro - Borussia Dortmund (82)',
    'Ferland Mendy - Al-Ahli Saudi FC (83)',
    'Alphonso Davies - Bayern Munich (84)',
    'Jordi Alba - Inter Miami CF (85)',
    'Marcos Acuña - Sevilla (85)',
    'Lucas Hernandez - Paris Saint-Germain (85)',
    'Andrew Robertson - Liverpool (87)',
    'João Cancelo - Bayern (87)',
    'Chilwell - (82)',
    'Ake - (80)',
    'Perisic - (82)',
    'Mendes - (81)'
  ],
  RB: [
    'Kieran Trippier - Newcastle United (84)',
    'Lucas Vázquez - Real Madrid (81)',
    'Dani Carvajal - Real Madrid (84)',
    'Reece James - Chelsea (84)',
    'Trent Alexander-Arnold - Liverpool (86)',
    'Achraf Hakimi - Paris Saint-Germain (84)',
    'Kyle Walker - Manchester City (85)',
    'Vázquez - Real Madrid (81)',
    'Porro - (82)'
  ],
                CM: [
                  'Jude Bellingham - Borussia Dortmund (85)',
                  'Luka Modrić - Real Madrid (88)',
                  'Toni Kroos - Real Madrid (88)',
                  'Ilkay Gündogan - Manchester City (85)',
                  'Nicolò Barella - Inter Milan (86)',
                  'Marco Verratti - PSG (87)',
                  'Thiago Alcântara - Liverpool (86)',
                  'Paul Pogba - Juventus FC (85)',
                  'Leon Goretzka - Bayern Munich (87)',
                  'Frenkie de Jong - Barcelona (88)',
                  'Valverde - Real Madrid (86)',
                  'Eduardo Camavinga - Real Madrid (80)',
                  'Pedri (85)',
                  'Gavi (80)',
                  'Rodrigo De Paul (84)',
                  'Jordan Henderson (82)',
                  'Pajero- (86)',
                  'Villarreal - ()'
                ],
                CAM: [
                  'Martin Ødegaard - Arsenal (85)',
                  'Kevin De Bruyne - Manchester City (91)',
                  'Mason Mount - Manchester United (83)',
                  'Marco Reus - Borussia Dortmund (85)',
                  'Thomas Müller - Bayern Munich (86)',
                  'Bernardo Silva - Manchester City (88)',
                  'Bruno Fernandes - Manchester United (86)' ,
                  'Jamal Musiala - Bayern (83)'
                ],
                CDM: [
                  'Rodri - Manchester City (87)',
                  'Joshua Kimmich - Bayern Munich (89)',
                  'N’Golo Kanté - Al-Ittihad Club (88)',
                  'Fabinho - Al-Ittihad Club (86)',
                  'Casemiro - Real Madrid (89)',
                  'Sergio Busquets - Barca (85)',
                  'Marcelo Brozović (86)',
                  'Aurélien Tchouaméni - Real Madrid (83)'
                ],
                ST: [
                  'Romelu Lukaku - AS Roma (85)',
                  'Paulo Dybala - AS Roma (86)',
                  'Lautaro Martínez - Inter Milan (86)',
                  'Karim Benzema - Real Madrid (91)',
                  'Robert Lewandowski - FC Barcelona (91)',
                  'Kylian Mbappé - Paris Saint-Germain (PSG) (91)',
                  'Cristiano Ronaldo - Al-Nassr FC (88)',
                  'Harry Kane - Tottenham Hotspur (89)',
                  'Erling Haaland - Manchester City (89)',
                  'Sadio Mané - FC Bayern München (89)',
                  'Nunez - Bayern (82)',
                  'Oshimen (84)',
                  'Griezmann (85)',
                  'Morata (82)',
                  'Gabriel Jesus (84)',
                  'Firmino (83)',
                  'Jota (85)',
                  'Ibrahimovic (82)',
                  'Alvarez (79)',
                  'Sane - Bayern Munich (84)'
                ],
                LW: [
                  'Neymar Jr - PSG (89)',
                  'Son Heung-min - Tottenham Hotspur (88)',
                  'Vinicius Jr - Real Madrid (86)',
                  'Raheem Sterling - Chelsea FC (85)',
                  'Phil Foden - Manchester City (85)',
                  'Jack Grealish - Manchester City (84)',
                  'Gnabry - Bayern Munich (84)',
                  'Coman - Bayern Munich (85)',
                  'Eden Hazard - Real Madrid (83)',
                  'Gakpo - (83)',
                  'Diaz - (84)',
                  'Rashfor - (83)',
                  'Zaha - (82)'
                ],
                RW: [
                  'Lionel Messi - Paris Saint-Germain (PSG) (91)',
                  'Mohamed Salah - Liverpool (89)',
                  'Riyad Mahrez - Manchester City (85)',
                  'Angel Di Maria - Paris Saint-Germain (PSG)',
                  'Raphinha - Leeds United (83)',
                  'Hakim Ziyech - Chelsea FC',
                  'Marco Asensio - Real Madrid (83)',
                  'Ousmane Dembélé - Barcelona (84)',
                  'Antony - Manchester United (82)',
                  'Rafa - Benfica',
                  'Kvaratskhelia - Rubin Kazan',
                  'Saka - Arsenal (84)',
                  
                ],
                GK: [
                  'Thibaut Courtois - Real Madrid (90)',
                  'Manuel Neuer - Bayern Munich (89)',
                  'Jan Oblak - Athletico (89)',
                  'Ederson -  Man City (89)',
                  'Alisson - Liverpool (89)',
                  'Gianluigi Donnarumma - PSG (88)',
                  'Marc-André ter Stegen - Barca (88)',
                  'Keylor Navas - Real Madrid (87)',
                  'Emiliano Martínez - Arsenal (85)',
                  'Yann Sommer - Bayern (86)' ,
                  'Lloris - (85)'
                ]
              };
              
    

        return playerLists[category] || [];
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const lowerLimitInput = document.getElementById('lowerLimit');
    const upperLimitInput = document.getElementById('upperLimit');
    const generateButton = document.getElementById('generateButton');
    const randomNumberDisplay = document.getElementById('randomNumber');
    const categorySelect = document.getElementById('category');
    const positionDisplay = document.getElementById('randomPosition'); // Add this line

    generateButton.addEventListener('click', function () {
        const lowerLimit = parseInt(lowerLimitInput.value);
        const upperLimit = parseInt(upperLimitInput.value);

        if (!isNaN(lowerLimit) && !isNaN(upperLimit)) {
            const randomNum = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
            randomNumberDisplay.textContent = `Random Number: ${randomNum}`;
        } else {
            randomNumberDisplay.textContent = 'Invalid input';
        }
    });

    // Add event listener to the "Generate Random Position" button
    const generatePositionButton = document.getElementById('generatePositionButton');
    generatePositionButton.addEventListener('click', function () {
        const positions = ['LB', 'RB', 'CB', 'CM', 'CDM', 'CAM', 'CF', 'RW', 'LW', 'ST'];
        const randomPosition = positions[Math.floor(Math.random() * positions.length)];
        positionDisplay.textContent = `Random Position: ${randomPosition}`;
    });
});
