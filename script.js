
// 1. თბილისის რუკის შექმნა

const map = L.map('map').setView([41.7151, 44.8000], 12);


// 2. რუკის ვიზუალური ფენის დამატება

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// 3. სამი განსხვავებული აიქონის შექმნა

const icons = {

    center: L.divIcon({
        className: '',
        html: '<div class="custom-marker">🎨</div>',
        iconSize: [38, 38],
        iconAnchor: [19, 19]
    }),

    middle: L.divIcon({
        className: '',
        html: '<div class="custom-marker">🖌️</div>',
        iconSize: [38, 38],
        iconAnchor: [19, 19]
    }),

    outskirts: L.divIcon({
        className: '',
        html: '<div class="custom-marker">🧩</div>',
        iconSize: [38, 38],
        iconAnchor: [19, 19]
    })

};


// 4. ქუჩის ხელოვნების ნამუშევრების მონაცემები

const artworks = [

    {
        name: "The Last Bell",
        address: "ლადო ასათიანის ქუჩა 36",
        description: "ქუჩის ხელოვნების ნამუშევარი, რომელიც თბილისის ურბანული ვიზუალური კულტურის ნაწილია.",
        coords: [41.6907, 44.7988],
        type: "center"
    },

    {
        name: "Supportive Girls",
        address: "კორნელი კეკელიძის ქუჩა 2",
        description: "თბილისის ქუჩის ხელოვნების კატალოგში შეტანილი ნამუშევარი, რომელიც ქალაქის არტსივრცეს ამდიდრებს.",
        coords: [41.7080, 44.7570],
        type: "middle"
    },

    {
        name: "Girl in a Dream",
        address: "ვახუშტი ბაგრატიონის ქუჩა 16",
        description: "მაშოლენდის ნამუშევარი NIKO Street Art-ის ფარგლებში. გამოსახულია დახუჭული თვალების მქონე გოგონა.",
        coords: [41.7250, 44.7780],
        type: "middle"
    },

    {
        name: "Hold Me Tight",
        address: "თორნიკე ერისთავის ქუჩა 7",
        description: "JDL-ის (Judith de Leeuw) ქუჩის ხელოვნების ნამუშევარი, რომელიც თბილისის მურალების კოლექციას ეკუთვნის.",
        coords: [41.7400, 44.7770],
        type: "outskirts"
    },

    {
        name: "My Moon (Monkey)",
        address: "ირაკლი აბაშიძის ქუჩა 68",
        description: "ქუჩის ხელოვნების ნამუშევარი ვაკის უბანში, რომელიც თბილისის ურბანული ხელოვნების ნაწილია.",
        coords: [41.7090, 44.7560],
        type: "middle"
    },

    {
        name: "One Mother",
        address: "არჩილ ცაგარელის ქუჩა 1",
        description: "ქუჩის ხელოვნების ნამუშევარი საბურთალოს ტერიტორიაზე.",
        coords: [41.7270, 44.7630],
        type: "middle"
    },

    {
        name: "Rebel",
        address: "ნუცუბიძის III მიკრორაიონი",
        description: "ქუჩის ხელოვნების ნიმუში, რომელიც თბილისის საცხოვრებელი უბნის ურბანულ სივრცეს აფერადებს.",
        coords: [41.7240, 44.7350],
        type: "outskirts"
    },

    {
        name: "Gangster Feast",
        address: "ჩოლოყაშვილის გამზირი 3/5",
        description: "თბილისის ქუჩის ხელოვნების კატალოგში წარმოდგენილი ურბანული ნამუშევარი.",
        coords: [41.7250, 44.7580],
        type: "middle"
    },

    {
        name: "Big Face",
        address: "ვაზისუბნის II მიკრორაიონი",
        description: "ვაზისუბანში მდებარე ქუჩის ხელოვნების ნამუშევარი, რომელიც ქალაქის საჯარო სივრცეს ამშვენებს.",
        coords: [41.6920, 44.8760],
        type: "outskirts"
    },

    {
        name: "Champions",
        address: "გლდანის V მიკრორაიონი",
        description: "გლდანში მდებარე ქუჩის ხელოვნების ნამუშევარი, რომელიც თბილისის ურბანული ხელოვნების ნაწილია.",
        coords: [41.7970, 44.8160],
        type: "outskirts"
    }

];


// 5. ათივე მარკერის დამატება რუკაზე

artworks.forEach(function(artwork) {

    const marker = L.marker(artwork.coords, {
        icon: icons[artwork.type]
    }).addTo(map);


    // მარკერზე დაკლიკებისას ინფორმაციის ჩვენება

    marker.on('click', function() {

        document.getElementById('place-info').innerHTML = `
            <h3>${artwork.name}</h3>
            <p><strong>მისამართი:</strong> ${artwork.address}</p>
            <p>${artwork.description}</p>
        `;

    });

});
