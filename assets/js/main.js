
const berechnen = () => {
    const körpergröße = document.getElementById('körpergröße').value;
    const alter = document.getElementById('alter').value;
    const gewicht = document.getElementById('gewicht').value;
    const radioButtonWeiblich = document.getElementById('radioButtonWeiblich');
    const radioButtonMale = document.getElementById('radioButtonMale');
    const aktivität = document.getElementById('aktivität').value;
    const GrundUmsatzKcal = document.getElementById('GrundUmsatzKcal');
    const GrundUmsatzKj = document.getElementById('GrundUmsatzKj');
    const GesamtUmsatzKcal = document.getElementById('GesamtUmsatzKcal')
    const GesamtUmsatzKj = document.getElementById('GesamtUmsatzKj');
    let zusammenRechnen;

    const maleKalorien = (664.7 + (13.7 * gewicht) + (5 * körpergröße) - (6.8 * alter).toFixed(2));
    zusammenRechnen = maleKalorien * aktivität;
    const femKalorien = (655.1 + (9.6 * gewicht) + (1.8 * körpergröße) - 4.7 * alter)
    zusammenRechnen = femKalorien * aktivität;


    if (radioButtonMale.checked) {
        GrundUmsatzKcal.innerHTML = maleKalorien.toFixed(0);
        GrundUmsatzKj.innerHTML = maleKalorien * 4.1868.toFixed(0);
        GesamtUmsatzKcal.innerHTML = zusammenRechnen.toFixed(0)
        GesamtUmsatzKj.innerHTML = (zusammenRechnen * 4.1868).toFixed(0)
    } else if (radioButtonWeiblich.checked) {
        GrundUmsatzKcal.innerHTML = femKalorien.toFixed(0);
        GrundUmsatzKj.innerHTML = femKalorien * 4.1868.toFixed(0);
        GesamtUmsatzKcal.innerHTML = zusammenRechnen.toFixed(0)
        GesamtUmsatzKj.innerHTML = (zusammenRechnen * 4.1868).toFixed(0)
    }
}




