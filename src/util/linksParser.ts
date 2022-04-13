export default function LinksParser(links: string) {
  let resultsLinks = {
    prev: "",
    next: "",
    last: "",
    first: "",
  };

  let listLinks = links.split(',');
  listLinks.forEach(link => {
    let urlInitial = link.indexOf('<') + 1;
    let urlEnd = link.indexOf('>');
    if (link.includes('prev')) {
      resultsLinks.prev = link.substring(urlInitial, urlEnd);
    } else if (link.includes('next')) {
      resultsLinks.next = link.substring(urlInitial, urlEnd);
    } else if (link.includes('last')) {
      resultsLinks.last = link.substring(urlInitial, urlEnd);
    } else if (link.includes('first')) {
      resultsLinks.first = link.substring(urlInitial, urlEnd);
    }
  })


  return resultsLinks;
}
