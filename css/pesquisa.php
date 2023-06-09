<?php
if (isset($_GET['query'])) {
    $searchQuery = $_GET['query'];
    $googleSearchUrl = "https://www.google.com/search?q=" . urlencode($searchQuery);

    // Redirecionar para a pesquisa do Google
    header("Location: " . $googleSearchUrl);
    exit();
}
?>
