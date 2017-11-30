// Fetch mock heroes:
export default function fetchHeroes() {
  return fetch('/dev/data/mock-heroes.js')
  .then(function(response) {
    return response.json()
  })
}