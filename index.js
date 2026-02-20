let points = 0;
let points_per_click = 1;
let secretaty_count = 0;
let secretary_efficiency = 0.1;

function RefreshVisual() {
    document.getElementById("points").innerHTML = points.toFixed(1);

    if (points_per_click < 10)
        document.getElementById("buy-upgrade").innerHTML = "kup ulepszenie: " + (points_per_click * 30).toFixed(1);
    else
        document.getElementById("buy-upgrade").innerHTML = "ulepszono!";

    document.getElementById("buy-secretary").innerHTML = "zatrudnij sekretarza DIP: " + ((secretaty_count + 1) * 150).toFixed(1);
    if (secretary_efficiency <= 1.9)
        document.getElementById("upgrade-secretary").innerHTML = "kup monstera sekretarzom DIP: " + ((secretary_efficiency * 10) * 200).toFixed(1);
    else
        document.getElementById("upgrade-secretary").innerHTML = "ulepszono!";

    document.getElementById("stats").innerHTML = "pt/click: " + points_per_click.toFixed(1) + ", pt/s: " + (secretaty_count * points_per_click * secretary_efficiency).toFixed(1);
}

function Refresh() {
    RefreshVisual();
    points += secretaty_count * points_per_click * secretary_efficiency;
}

function AddPoints() {
    points += points_per_click;

    RefreshVisual();
}

function BuyUpgrade() {
    if (points_per_click < 10 && points >= points_per_click * 30) {
        points -= points_per_click * 30;
        points_per_click += 1;
    }

    RefreshVisual();
}

function BuySecretary() {
    if (points >= (secretaty_count + 1) * 150) {
        points -= (secretaty_count + 1) * 150;
        secretaty_count += 1;
    }

    RefreshVisual();
}

function UpgradeSecretary() {
    if (secretary_efficiency <= 1.9 && points >= (secretary_efficiency * 10) * 200) {
        points -= (secretary_efficiency * 10) * 200;
        secretary_efficiency += 0.1;
    }

    RefreshVisual();
}

Refresh();
setInterval(Refresh, 1000);