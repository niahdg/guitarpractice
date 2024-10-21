document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect the selected filters
    const chords = Array.from(document.getElementById('chords').selectedOptions).map(option => option.value);
    const genre = document.getElementById('genre').value;
    const level = document.getElementById('level').value;
    const skills = Array.from(document.getElementById('skill').selectedOptions).map(option => option.value);

    // A simple array of song objects for matching
    const songs = [
        {
            name: "Wonderwall",
            chords: ["C", "G", "D", "Am"],
            genre: "rock",
            level: "beginner",
            skills: ["strumming"],
            video: "https://www.youtube.com/watch?v=6hzrDeceEKc",
            leadsheet: "leadsheets/wonderwall.pdf"
        },
        {
            name: "Let It Be",
            chords: ["C", "G", "Am", "F"],
            genre: "pop",
            level: "beginner",
            skills: ["fingerpicking"],
            video: "https://www.youtube.com/watch?v=2xDzVZcqtYI",
            leadsheet: "leadsheets/letitbe.pdf"
        },
        // Add more songs with different combinations
    ];

    // Filter the songs based on the user input
    const filteredSongs = songs.filter(song => 
        chords.every(chord => song.chords.includes(chord)) &&
        song.genre === genre &&
        song.level === level &&
        skills.every(skill => song.skills.includes(skill))
    );

    // Display the results
    let resultsDiv = document.createElement('div');
    if (filteredSongs.length > 0) {
        filteredSongs.forEach(song => {
            let songElement = `
                <div>
                    <h3>${song.name}</h3>
                    <a href="${song.video}" target="_blank">Watch Video</a><br>
                    <a href="${song.leadsheet}" target="_blank">View Lead Sheet</a>
                </div>
                <hr>
            `;
            resultsDiv.innerHTML += songElement;
        });
    } else {
        resultsDiv.innerHTML = "<p>No songs found that match your criteria.</p>";
    }

    document.body.appendChild(resultsDiv);
});