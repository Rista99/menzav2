const order = {
    userID: String,
    dan: Object, // ili danID ili ceo dan objekat, pa preko toga da uzimamo koji je dan u nedelji i datum jer bismo svakako morali upit da pisemo jos jedan da getujemo dan sa tim id-em
    jelo: {
        jeloID: String,
        naziv: String,
        avatar: String,
        tip: Number,
        nutritivneVrednosti: String
    },
}