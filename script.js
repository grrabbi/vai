// JavaScript for Search Bar Interactivity
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    if (query.trim() === "") {
        alert('Please enter a search term.');
    } else {
        alert(`Searching for: "${query}"`);
        // Add your search functionality here
    }
});