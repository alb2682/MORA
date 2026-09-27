// ==========================================
// MORA - ANA SİSTEM
// ==========================================

let selectedRole = "teacher";


// ==========================================
// HESAP TÜRLERİ
// ==========================================

const accounts = {

    teacher: {
        username: "ogretmen",
        password: "1234"
    },

    student: {
        username: "ahmet",
        password: "1234"
    },

    parent: {
        username: "veli",
        password: "1234"
    }

};


// ==========================================
// MENÜLER
// ==========================================

const menus = {

    teacher: [
        "⌂ Ana Sayfa",
        "👥 Öğrenciler",
        "📅 Program",
        "✓ Ödevler",
        "◈ Denemeler",
        "📚 Kaynaklar",
        "📊 Raporlar"
    ],

    student: [
        "⌂ Genel Bakış",
        "📅 Programım",
        "✓ Ödevlerim",
        "◈ Denemelerim",
        "📚 Kaynaklarım",
        "📊 Gelişimim"
    ],

    parent: [
        "⌂ Genel Bakış",
        "📅 Program",
        "✓ Ödevler",
        "◈ Denemeler",
        "📚 Kaynaklar",
        "💬 Öğretmen Notları"
    ]

};


// ==========================================
// ROL SEÇ
// ==========================================

function selectRole(role) {

    selectedRole = role;

    document
        .querySelectorAll(".role-buttons button")
        .forEach(button => {

            button.classList.remove("active");

        });


    document
        .getElementById(role + "Role")
        .classList.add("active");

}


// ==========================================
// GİRİŞ
// ==========================================

function login() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;


    const account =
        accounts[selectedRole];


    if (
        username === account.username &&
        password === account.password
    ) {

        openApp();

    }

    else {

        alert(
            "Kullanıcı adı veya şifre yanlış."
        );

    }

}


// ==========================================
// UYGULAMAYI AÇ
// ==========================================

function openApp() {

    document
        .getElementById("loginPage")
        .classList.add("hidden");


    document
        .getElementById("appPage")
        .classList.remove("hidden");


    createMenu();

    showDashboard();

}


// ==========================================
// MENÜ OLUŞTUR
// ==========================================

function createMenu() {

    const menu =
        document.getElementById("menu");


    menu.innerHTML = "";


    menus[selectedRole].forEach(
        (item, index) => {

            const button =
                document.createElement("button");


            button.innerHTML = item;


            if (index === 0) {

                button.classList.add("active");

            }


            button.onclick = () => {

                document
                    .querySelectorAll("#menu button")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );


                button.classList.add("active");


                menuAction(item);

            };


            menu.appendChild(button);

        }
    );


    const accountType =
        document.getElementById("accountType");


    if (selectedRole === "teacher") {

        accountType.innerHTML =
            "👨‍🏫 ÖĞRETMEN";

    }

    else if (selectedRole === "student") {

        accountType.innerHTML =
            "👨‍🎓 ÖĞRENCİ";

    }

    else {

        accountType.innerHTML =
            "👨‍👩‍👦 VELİ";

    }

}


// ==========================================
// MENÜ İŞLEMLERİ
// ==========================================

function menuAction(item) {

    if (item.includes("Öğrenciler")) {

        showStudents();

    }

    else if (item.includes("Program")) {

        showProgram();

    }

    else if (item.includes("Ödev")) {

        showHomework();

    }

    else if (item.includes("Deneme")) {

        showExams();

    }

    else if (item.includes("Kaynak")) {

        showResources();

    }

    else {

        showDashboard();

    }

}


// ==========================================
// BAŞLIK
// ==========================================

function setHeader(title, category) {

    document
        .getElementById("pageTitle")
        .innerText = title;


    document
        .getElementById("pageCategory")
        .innerText = category;

}


// ==========================================
// DASHBOARD
// ==========================================

function showDashboard() {

    setHeader(
        selectedRole === "teacher"
            ? "Öğretmen Paneli 👋"
            : selectedRole === "student"
            ? "Merhaba Ahmet 👋"
            : "Merhaba, Ahmet'in Velisi 👋",

        "ANA PANEL"
    );


    document.getElementById("content").innerHTML = `

        <div class="hero">

            <div class="avatar">
                AY
            </div>

            <div>

                <h2>Ahmet Yılmaz</h2>

                <p>
                    9. Sınıf • Öğrenci No: 001
                </p>

            </div>

            <div class="hero-right">

                MORA Akademik Programı<br>

                <strong>2026–2027</strong>

            </div>

        </div>


        <div class="stats">

            <div class="stat">
                <small>GENEL ORTALAMA</small>
                <b>94.2</b>
                <span class="green">
                    ↑ 3.8 puan
                </span>
            </div>

            <div class="stat">
                <small>ÖDEV TAMAMLAMA</small>
                <b>100%</b>
                <span class="green">
                    12 / 12 görev
                </span>
            </div>

            <div class="stat">
                <small>SON DENEME</small>
                <b>96</b>
                <span class="green">
                    ↑ 5 puan
                </span>
            </div>

            <div class="stat">
                <small>DEVAM</small>
                <b>100%</b>
                <span class="green">
                    0 devamsızlık
                </span>
            </div>

        </div>


        <div class="grid">

            ${performanceCard()}

            ${examCard()}

        </div>


        <div class="grid">

            ${homeworkCard()}

            ${studentCard()}

        </div>


        ${scheduleCard()}

    `;

}


// ==========================================
// PERFORMANS
// ==========================================

function performanceCard() {

    const lessons = [

        ["Matematik", "94"],
        ["Edebiyat", "93"],
        ["Fizik", "86"],
        ["Kimya", "90"],
        ["Biyoloji", "97"]

    ];


    return `

        <div class="card">

            <div class="card-title">

                <h3>📚 Ders Performansı</h3>

            </div>

            ${lessons.map(
                lesson => `

                <div class="item">

                    <div class="icon">
                        ${lesson[0][0]}
                    </div>

                    <div style="flex:1">

                        <b>${lesson[0]}</b>

                        <div class="progress">
                            <span
                                style="width:${lesson[1]}%"
                            ></span>
                        </div>

                    </div>

                    <strong>
                        ${lesson[1]}
                    </strong>

                </div>

            `).join("")}

        </div>

    `;

}


// ==========================================
// DENEME
// ==========================================

function examCard() {

    return `

        <div class="card">

            <div class="card-title">

                <h3>◈ Deneme Gelişimi</h3>

                <span class="badge">
                    +15 puan
                </span>

            </div>

            <div class="item">

                <div class="icon">D1</div>

                <div>
                    <b>Başlangıç Denemesi</b>
                    <small>81 puan</small>
                </div>

                <strong>81</strong>

            </div>

            <div class="item">

                <div class="icon">D2</div>

                <div>
                    <b>Karma Deneme</b>
                    <small>84 puan</small>
                </div>

                <strong>84</strong>

            </div>

            <div class="item">

                <div class="icon">D3</div>

                <div>
                    <b>Normal Deneme</b>
                    <small>87 puan</small>
                </div>

                <strong>87</strong>

            </div>

            <div class="item">

                <div class="icon">D4</div>

                <div>
                    <b>Mini Deneme</b>
                    <small>91 puan</small>
                </div>

                <strong>91</strong>

            </div>

            <div class="item">

                <div class="icon">D5</div>

                <div>
                    <b>Son Deneme</b>
                    <small>96 puan</small>
                </div>

                <strong>96</strong>

            </div>

        </div>

    `;

}


// ==========================================
// ÖDEV
// ==========================================

function homeworkCard() {

    return `

        <div class="card">

            <div class="card-title">

                <h3>✓ Bu Haftaki Ödevler</h3>

            </div>


            <div class="item">

                <div class="icon">M</div>

                <div>

                    <b>Matematik</b>

                    <small>
                        Sayfa 12–18 • 20 soru
                    </small>

                </div>

                <span class="badge">
                    Tamamlandı
                </span>

            </div>


            <div class="item">

                <div class="icon">E</div>

                <div>

                    <b>Edebiyat</b>

                    <small>
                        Sayfa 8–14 • 15 soru
                    </small>

                </div>

                <span class="badge">
                    Tamamlandı
                </span>

            </div>


            <div class="item">

                <div class="icon">F</div>

                <div>

                    <b>Fizik</b>

                    <small>
                        Sayfa 6–11 • 15 soru
                    </small>

                </div>

                <span class="badge wait">
                    Bekliyor
                </span>

            </div>

        </div>

    `;

}


// ==========================================
// ÖĞRENCİLER
// ==========================================

function studentCard() {

    return `

        <div class="card">

            <div class="card-title">

                <h3>👥 Öğrenci Durumu</h3>

            </div>


            <div class="item">

                <div class="icon">AY</div>

                <div>

                    <b>Ahmet Yılmaz</b>

                    <small>
                        9. Sınıf
                    </small>

                </div>

                <strong>94.2</strong>

            </div>


            <div class="item">

                <div class="icon">EK</div>

                <div>

                    <b>Elif Kaya</b>

                    <small>
                        9. Sınıf
                    </small>

                </div>

                <strong>91.8</strong>

            </div>


            <div class="item">

                <div class="icon">MD</div>

                <div>

                    <b>Mehmet Demir</b>

                    <small>
                        9. Sınıf
                    </small>

                </div>

                <strong>88.6</strong>

            </div>

        </div>

    `;

}


// ==========================================
// PROGRAM
// ==========================================

function scheduleCard() {

    return `

        <div class="card">

            <div class="card-title">

                <h3>📅 Haftalık Program</h3>

            </div>


            <div class="schedule">

                <div class="day">
                    <strong>Pazartesi</strong>
                    <small>
                        Matematik<br>
                        Edebiyat<br>
                        Fizik
                    </small>
                </div>

                <div class="day">
                    <strong>Salı</strong>
                    <small>
                        Kimya<br>
                        Matematik<br>
                        İngilizce
                    </small>
                </div>

                <div class="day">
                    <strong>Çarşamba</strong>
                    <small>
                        Edebiyat<br>
                        Fizik<br>
                        Biyoloji
                    </small>
                </div>

                <div class="day">
                    <strong>Perşembe</strong>
                    <small>
                        Matematik<br>
                        Kimya<br>
                        İngilizce
                    </small>
                </div>

                <div class="day">
                    <strong>Cuma</strong>
                    <small>
                        Deneme<br>
                        Analiz<br>
                        Etüt
                    </small>
                </div>

            </div>

        </div>

    `;

}


// ==========================================
// ÖĞRENCİLER SAYFASI
// ==========================================

function showStudents() {

    setHeader(
        "Öğrenciler",
        "ÖĞRENCİ YÖNETİMİ"
    );


    document.getElementById("content").innerHTML = `

        <div class="card">

            <div class="card-title">

                <h3>👥 9. Sınıf Öğrencileri</h3>

            </div>

            <table>

                <tr>
                    <th>No</th>
                    <th>Öğrenci</th>
                    <th>Ortalama</th>
                    <th>Ödev</th>
                    <th>Durum</th>
                </tr>

                <tr>
                    <td>001</td>
                    <td>Ahmet Yılmaz</td>
                    <td>94.2</td>
                    <td>%100</td>
                    <td>Aktif</td>
                </tr>

                <tr>
                    <td>002</td>
                    <td>Elif Kaya</td>
                    <td>91.8</td>
                    <td>%92</td>
                    <td>Aktif</td>
                </tr>

                <tr>
                    <td>003</td>
                    <td>Mehmet Demir</td>
                    <td>88.6</td>
                    <td>%85</td>
                    <td>Aktif</td>
                </tr>

                <tr>
                    <td>004</td>
                    <td>Zeynep Arslan</td>
                    <td>95.1</td>
                    <td>%100</td>
                    <td>Aktif</td>
                </tr>

                <tr>
                    <td>005</td>
                    <td>Can Yıldız</td>
                    <td>89.4</td>
                    <td>%88</td>
                    <td>Aktif</td>
                </tr>

            </table>

        </div>

    `;

}


// ==========================================
// ÖDEV SAYFASI
// ==========================================

function showHomework() {

    setHeader(
        "Ödev Yönetimi",
        "ÖDEV SİSTEMİ"
    );


    document.getElementById("content").innerHTML = `

        <div class="grid">

            ${homeworkCard()}

            <div class="card">

                <div class="card-title">

                    <h3>📝 Yeni Ödev</h3>

                </div>

                <div class="item">

                    <div>

                        <b>
                            Matematik
                        </b>

                        <small>
                            Sayfa 20–25
                        </small>

                    </div>

                </div>

                <div class="item">

                    <div>

                        <b>
                            Edebiyat
                        </b>

                        <small>
                            Sayfa 15–20
                        </small>

                    </div>

                </div>

            </div>

        </div>

    `;

}


// ==========================================
// DENEMELER
// ==========================================

function showExams() {

    setHeader(
        "Denemeler",
        "DENEME SİSTEMİ"
    );


    document.getElementById("content").innerHTML = `

        <div class="grid">

            ${examCard()}

            <div class="card">

                <div class="card-title">

                    <h3>📋 Deneme Türleri</h3>

                </div>

                <div class="item">
                    <div class="icon">N</div>
                    <div>
                        <b>Normal Deneme</b>
                        <small>Tüm dersler</small>
                    </div>
                </div>

                <div class="item">
                    <div class="icon">K</div>
                    <div>
                        <b>Karma Deneme</b>
                        <small>Karışık konular</small>
                    </div>
                </div>

                <div class="item">
                    <div class="icon">M</div>
                    <div>
                        <b>Mini Test</b>
                        <small>Kısa değerlendirme</small>
                    </div>
                </div>

            </div>

        </div>

    `;

}


// ==========================================
// KAYNAKLAR
// ==========================================

function showResources() {

    setHeader(
        "Kaynaklar",
        "KAYNAK SİSTEMİ"
    );


    document.getElementById("content").innerHTML = `

        <div class="card">

            <div class="card-title">

                <h3>📚 Kullanılan Kaynaklar</h3>

            </div>


            <div class="item">

                <div class="icon">M</div>

                <div>

                    <b>Matematik Kaynağı</b>

                    <small>
                        Bu hafta: Sayfa 12–18
                    </small>

                </div>

            </div>


            <div class="item">

                <div class="icon">E</div>

                <div>

                    <b>Edebiyat Kaynağı</b>

                    <small>
                        Bu hafta: Sayfa 8–14
                    </small>

                </div>

            </div>


            <div class="item">

                <div class="icon">F</div>

                <div>

                    <b>Fizik Kaynağı</b>

                    <small>
                        Bu hafta: Sayfa 6–11
                    </small>

                </div>

            </div>

        </div>

    `;

}


// ==========================================
// PROGRAM SAYFASI
// ==========================================

function showProgram() {

    setHeader(
        "Haftalık Program",
        "PROGRAM"
    );


    document.getElementById("content").innerHTML =
        scheduleCard();

}


// ==========================================
// ÇIKIŞ
// ==========================================

function logout() {

    document
        .getElementById("appPage")
        .classList.add("hidden");


    document
        .getElementById("loginPage")
        .classList.remove("hidden");


    document
        .getElementById("username")
        .value = "";

    document
        .getElementById("password")
        .value = "";

}