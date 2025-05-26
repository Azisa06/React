import './ReadingList.css'; // Lembre-se de criar esse arquivo!
const books = [
  {
    id: 1,
    title: "Corte de Asas e Ruína (Vol. 3)",
    mainLink: "https://cortedeespinhoserosas.fandom.com/pt-br/wiki/Wiki_Corte_de_Espinhos_e_Rosas",
    buyLink: "https://www.amazon.com.br/Corte-asas-ru%C3%ADna-espinhos-rosas/dp/6559811913/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2E62NW3PUJB9F&dib=eyJ2IjoiMSJ9.hexfKduqZUnIdEKgTmJoZJ-GCfVqM5kbW59IgrYfUC5bhAW3glkhcc5f8YiKKIzItG4Ba-QSkOPycKpJSND5oAlyuxcf2ugziPS3kC91KVy0wOs-_mb-FzbRKLl_qO7rsBGc511fT84c1wGQ6767veyC5NN8NcX8ludot1Y2uQRsLkgsj8usZCTxp3F8irk_Gtd-uK7a3YzW02ElvfvFZU-_tUS0tHUVDmzuEkQvUzpYMDXfSl2ruJH-rKEQWn2qCXbUdwh3cN6uawi5y5fc_MK0AuhkhRQZ4hyrwlmt07o.aZBvWSaOH7ibItVYRQiERfdiWZNVm71_ApGtKHVwByc&dib_tag=se&keywords=corte+de+asas+e+ruina+edi%C3%A7%C3%A3o+especial&qid=1748204418&sprefix=corte+de+asas+e+ruina+edi%C3%A7%C3%A3o+especial%2Caps%2C219&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
    pdfLink: "https://bskbooksmania.wixsite.com/booksmania/post/corte-de-asas-e-ru%C3%ADna-vol-3-corte-de-espinhos-e-rosas-sarah-j-maas"
  },
  {
    id: 2,
    title: "Corte de Gelo e Estrelas (Vol. 4)",
    mainLink: "https://cortedeespinhoserosas.fandom.com/pt-br/wiki/Wiki_Corte_de_Espinhos_e_Rosas",
    buyLink: "https://www.amazon.com.br/Corte-gelo-estrelas-espinhos-rosas/dp/6559814955/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2E62NW3PUJB9F&dib=eyJ2IjoiMSJ9.hexfKduqZUnIdEKgTmJoZJ-GCfVqM5kbW59IgrYfUC5bhAW3glkhcc5f8YiKKIzItG4Ba-QSkOPycKpJSND5oAlyuxcf2ugziPS3kC91KVy0wOs-_mb-FzbRKLl_qO7rsBGc511fT84c1wGQ6767veyC5NN8NcX8ludot1Y2uQRsLkgsj8usZCTxp3F8irk_Gtd-uK7a3YzW02ElvfvFZU-_tUS0tHUVDmzuEkQvUzpYMDXfSl2ruJH-rKEQWn2qCXbUdwh3cN6uawi5y5fc_MK0AuhkhRQZ4hyrwlmt07o.aZBvWSaOH7ibItVYRQiERfdiWZNVm71_ApGtKHVwByc&dib_tag=se&keywords=corte+de+asas+e+ruina+edi%C3%A7%C3%A3o+especial&qid=1748204418&sprefix=corte+de+asas+e+ruina+edi%C3%A7%C3%A3o+especial%2Caps%2C219&sr=8-2&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
    pdfLink: "https://bskbooksmania.wixsite.com/booksmania/post/corte-de-espinhos-e-rosas-vol-4-corte-de-espinhos-e-rosas-sarah-j-maas"
  },
  {
    id: 3,
    title: "Corte de Chamas Prateadas (Vol. 5)",
    mainLink: "https://cortedeespinhoserosas.fandom.com/pt-br/wiki/Wiki_Corte_de_Espinhos_e_Rosas",
    buyLink: "https://www.amazon.com.br/Corte-chamas-prateadas-Vol-especial/dp/6559812456/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2E62NW3PUJB9F&dib=eyJ2IjoiMSJ9.hexfKduqZUnIdEKgTmJoZJ-GCfVqM5kbW59IgrYfUC5bhAW3glkhcc5f8YiKKIzItG4Ba-QSkOPycKpJSND5oAlyuxcf2ugziPS3kC91KVy0wOs-_mb-FzbRKLl_qO7rsBGc511fT84c1wGQ6767veyC5NN8NcX8ludot1Y2uQRsLkgsj8usZCTxp3F8irk_Gtd-uK7a3YzW02ElvfvFZU-_tUS0tHUVDmzuEkQvUzpYMDXfSl2ruJH-rKEQWn2qCXbUdwh3cN6uawi5y5fc_MK0AuhkhRQZ4hyrwlmt07o.aZBvWSaOH7ibItVYRQiERfdiWZNVm71_ApGtKHVwByc&dib_tag=se&keywords=corte+de+asas+e+ruina+edi%C3%A7%C3%A3o+especial&qid=1748204418&sprefix=corte+de+asas+e+ruina+edi%C3%A7%C3%A3o+especial%2Caps%2C219&sr=8-4&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
    pdfLink: "https://bskbooksmania.wixsite.com/booksmania/post/corte-de-chamas-prateadas-vol-4-corte-de-espinhos-e-rosas-sarah-j-maas"
  }
];

export default function ReadingList() {
  return (
    <section className="reading-section">
      <h2>Sua Lista de Leitura</h2>
      <div className="reading-columns">
        {books.map((book) => (
          <a
            key={book.id}
            href={book.mainLink}
            className="reading-card-link"
            target="_blank"
            rel="noreferrer"
          >
            <div className="reading-card">
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <div className="reading-buttons">
                <a
                  href={book.buyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="reading-button buy"
                  onClick={(e) => e.stopPropagation()}
                >
                  Comprar
                </a>
                <a
                  href={book.pdfLink}
                  target="_blank"
                  rel="noreferrer"
                  className="reading-button pdf"
                  onClick={(e) => e.stopPropagation()}
                >
                  Ler PDF
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}