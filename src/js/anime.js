export const getTrending = async () => {
  const response = await fetch("https://kitsu.io/api/edge/trending/anime");
  const data = await response.json();
  return data.data;
};

export const getCategories = async () => {
  let categories = [];
  let currentLink =
    "https://kitsu.io/api/edge/categories?page[limit]=20&sort=-totalMediaCount";
  let response = await fetch(currentLink);
  let data = await response.json();
  categories = categories.concat(data.data);
  while (categories.length < 60) {
    currentLink = data.links.next;
    response = await fetch(currentLink);
    data = await response.json();
    categories = categories.concat(data.data);
  }
  return categories;
};

export const getPopularCategories = async () => {
  let response = await fetch(
    "https://kitsu.io/api/edge/categories/?sort=-childCount"
  );
  let data = await response.json();
  return data.data;
};

export const getAnimeById = async (id) => {
  const response = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
  const data = await response.json();
  return data.data;
};

export const getSearch = async (keyword, pgnum) => {
  let response = await fetch(
    `https://kitsu.io/api/edge/anime?filter%5Btext%5D=${keyword}&page%5Blimit%5D=20&page%5Boffset%5D=${
      (pgnum - 1) * 20
    }`
  );
  let data = await response.json();

  return data;
};

export const getCharacters = async (link) => {
  let charactersData = [];
  let currentLink = link;
  let response = await fetch(currentLink);
  let data = await response.json();
  charactersData = charactersData.concat(data.data);
  while (charactersData.length !== data.meta.count) {
    currentLink = data.links.next;
    response = await fetch(currentLink);
    data = await response.json();
    charactersData = charactersData.concat(data.data);
  }
  return charactersData;
};

export const getCharacter = async (link) => {
  const response = await fetch(link);
  const data = await response.json();
  return data.data;
};

export const getEpisodes = async (link) => {
  let episodesData = [];
  let currentLink = link;
  let response = await fetch(currentLink);
  let data = await response.json();
  episodesData = episodesData.concat(data.data);
  while (episodesData.length !== data.meta.count) {
    currentLink = data.links.next;
    response = await fetch(currentLink);
    data = await response.json();
    episodesData = episodesData.concat(data.data);
  }
  return episodesData;
};

export const getCategory = async (id, pgnum) => {
  const response = await fetch(
    `https://kitsu.io/api/edge/categories/${id}/anime?page%5Blimit%5D=20&page%5Boffset%5D=${
      (pgnum - 1) * 20
    }`
  );
  let data = await response.json();

  const nameResponse = await fetch(
    `https://kitsu.io/api/edge/categories/${id}`
  );
  const nameData = await nameResponse.json();
  data["title"] = nameData.data.attributes.title;
  return data;
};
