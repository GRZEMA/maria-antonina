import React, { useState, useEffect } from 'react';
import classes from './Offer.module.css'; // Załaduj plik CSS dla stylizacji ofert
import Image from 'next/image';
import { Dancing_Script, Nunito } from 'next/font/google'
import Link from 'next/link';

const nunito = Nunito({ subsets: ['latin-ext'] })
const dancing_script = Dancing_Script({subsets: ['latin-ext']})

const Offer = () => {
  // Dzięki użyciu useState, możemy zainicjować stan lokalny komponentu
  const [offers, setOffers] = useState([]); // Tablica z ofertami

  // Przykładowe dane ofert (uproszczone dla celów demonstracyjnych)
  const sampleOffers = [
    {
      id: 1,
      title: 'Oferta wypoczynkowa',
      imageUrl: '/photos/basen.jpg',
      description: ['Biesiady grillowe', 'Małe Bieszczady','Klub jeździecki','Spa','Basen zewnętrzny'],
    },
    {
      id: 2,
      title: 'Oferta biznesowa' ,
      imageUrl: '/photos/konf.jpg',
      description: ['Imprezy integracyjne','Sale konferencyjne','Szkolenia'],
    },
    {
        id:3,
        title:'Imprezy okolicznościowe',
        imageUrl:'/photos/imprezy.jpg',
        description: ['Wesela','Wypożyczalnia samochodów','Bryczki','Chrzciny','Rocznice','Urodziny','Komunie'],
    }
    // Dodaj więcej ofert, aby uzyskać efekt przewijania na stronie
  ];

  // Symulacja pobrania danych z API przy użyciu useEffect
  useEffect(() => {
    // Tutaj normalnie wywoływalibyśmy zapytanie do API, ale użyjemy przykładowych danych
    // Zaktualizuj stan ofert po "pobraniu" danych
    setOffers(sampleOffers);
  }, []); // Pusta tablica dependencies powoduje, że useEffect wykona się tylko raz po zamontowaniu komponentu

  return (
    <div className={classes.offer_container + ' ' + dancing_script.className}>
      {offers.map((offer) => (
        <div key={offer.id} className={classes.offer_card}>
          <Image src={offer.imageUrl} alt={offer.title} height={200} width={200} className={classes.offer_image} />
          <div className={classes.offer_details}>
            <h3 className={classes.offer_title}>{offer.title}</h3>
            {offer.description.map((desc)=> (
                <Link href="#" className={classes.offer_description + ' ' + nunito.className}>{desc}</Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offer;
