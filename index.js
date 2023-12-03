// fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
// .then(response => response.json())
// .then(json => json.results.map(data => {
//     console.log(data.name);
// }))
const pokedex = document.getElementById('Pokemon');
let template = document.getElementById('getPokemon');

// Fetching pokemon's data from PokeAPI
for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
        const getData =  document.importNode(template.content, true);

             // Mengatur atribut src dan alt untuk gambar Pokemon
             getData.querySelector('img').src = data.sprites['front_default'];
             getData.querySelector('img').alt = data.name;

             // Mengatur teks nama Pokemon
             getData.querySelector('h2').textContent = data.name;

             // Mengatur teks tipe Pokemon
             getData.querySelector('p').textContent += data.types.map((type) => type.type.name).join(', ');

             // Menambahkan card Pokemon yang sudah dibuat ke dalam elemen ul
             pokedex.appendChild(getData);
        }).catch((error) => {
            console.error('Error fetching Pokemon data:', error);
        });
}