document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        { text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.", author: "Jeremiah 29:11" },
        { text: "I can do all things through him who strengthens me.", author: "Philippians 4:13" },
        { text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.", author: "Galatians 5:22-23" },
        { text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", author: "Romans 8:28" },
        { text: "The Lord is my shepherd; I shall not want.", author: "Psalm 23:1" },
        { text: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.", author: "Proverbs 3:5-6" },
        { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", author: "Joshua 1:9" },
        { text: "And above all these put on love, which binds everything together in perfect harmony.", author: "Colossians 3:14" },
        { text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.", author: "Philippians 4:6" },
        { text: "For we walk by faith, not by sight.", author: "2 Corinthians 5:7" }
    ];

    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function getRandomColor() {
        const colors = ['#D7E9B9', '#FFFBAC', '#DE8F5F', '#EFD595', '#EFB495', '#B5C18E', '#B5C0D0', '#CBFFA9'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function displayRandomQuote() {
        const randomQuote = getRandomQuote();
        document.getElementById('text').textContent = randomQuote.text;
        document.getElementById('author').textContent = randomQuote.author;
        document.body.style.backgroundColor = getRandomColor();
    }

    document.getElementById('new-quote').addEventListener('click', displayRandomQuote);

    // Display a quote when the page loads
    displayRandomQuote();
});
