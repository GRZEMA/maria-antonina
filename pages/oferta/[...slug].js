// [...slug].js

const getStaticProps = async (context) => {
  const { slug } = context.params;

  return {
    props: {
      singleOffer,
    },
  };
};

export const getStaticPaths = async () => {
  // Pobierz dane wszystkich dostępnych ofert
  const allOffers = await fetchAllOffers();

  // Wygeneruj ścieżki dla wszystkich ofert
  const paths = allOffers.map((offer) => ({
    params: { slug: offer.slug }, // Slug jest unikalnym identyfikatorem oferty
  }));

  return {
    paths,
    fallback: true, // Możesz użyć false, jeśli wszystkie oferty mają być wygenerowane statycznie
  };
};
