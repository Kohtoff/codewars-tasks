// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
  let domain = url.replace("http://", "");
  domain = domain.replace("https://", "");
  domain = domain.replace("www.", "");
  domain = domain.split(".")[0];
  return domain;
}
