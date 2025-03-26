import jsonServerProvider from "ra-data-json-server";

export const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL);