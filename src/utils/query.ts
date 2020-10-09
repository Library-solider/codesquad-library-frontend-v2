import querystring from "query-string";

function calcUpdatePagination(
  pathname: string,
  pathSearch: string,
  page: number
): string {
  const parsedSearchQueries = querystring.parse(pathSearch);
  parsedSearchQueries.page = String(page);

  const currentPathname =
    pathname + `?${querystring.stringify(parsedSearchQueries)}`;
  return currentPathname;
}

export default calcUpdatePagination;
