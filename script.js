document.getElementById('inscriptionForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche l'envoi du formulaire

    const login = document.getElementById('login').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const adresse = document.getElementById('adresse').value.trim();
    const email = document.getElementById('email').value.trim();
    const telephone = document.getElementById('telephone').value.trim();
    const dateNaissance = document.getElementById('dateNaissance').value;

    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';

    // Vérification des champs requis
    if (!login || !password || !confirmPassword || !nom || !prenom || !adresse || !email || !telephone || !dateNaissance) {
        errorMessage.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    // Vérification de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Adresse email invalide.";
        return;
    }

    // Vérification des mots de passe
    if (password !== confirmPassword) {
        errorMessage.textContent = "Les mots de passe ne correspondent pas.";
        return;
    }

    // Si tout est valide : afficher le récapitulatif
    document.getElementById('inscriptionForm').classList.add('hidden');
    document.getElementById('recapitulatif').classList.remove('hidden');

    document.getElementById('r-login').textContent = login;
    document.getElementById('r-nom').textContent = nom;
    document.getElementById('r-prenom').textContent = prenom;
    document.getElementById('r-adresse').textContent = adresse;
    document.getElementById('r-email').textContent = email;
    document.getElementById('r-telephone').textContent = telephone;
    document.getElementById('r-dateNaissance').textContent = dateNaissance;
});
