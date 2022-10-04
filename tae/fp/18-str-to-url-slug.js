// Apply Functional Programming to Convert Strings to URL Slugs

function urlSlug(title) {
    return title.trim().split(/\s+/).join("-").toLowerCase();
  
    return title.split(" ").filter(el => el !== "").join("-").toLowerCase();  
}

console.log(urlSlug("  A Mind Needs    Books Like A    Sword Needs A Whetstone "));