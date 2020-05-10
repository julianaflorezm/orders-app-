import FetchData from "data_fetcher";

function getProducts() {

  return FetchData()
      .then((response) => {
    return response;
  });
}

export default getProducts;
