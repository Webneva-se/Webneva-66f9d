<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <title>Kontakta oss</title>
</head>
<body>
  <h1>Kontakta oss</h1>

  <form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />

    <label for="name">Namn:</label><br>
    <input type="text" name="name" id="name" required><br><br>

    <label for="phone">Telefonnummer:</label><br>
    <input type="tel" name="phone" id="phone" required><br><br>

    <label for="message">Meddelande:</label><br>
    <textarea name="message" id="message" required></textarea><br><br>

    <button type="submit">Skicka</button>
  </form>
</body>
</html>
