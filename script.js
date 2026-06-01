// ==============================================
//  JAVASCRIPT UNTUK JEDA_BACA BOOKSTORE         
// ==============================================

// --- DATASET BUKU LENGKAP ---
const categories = [
    "Semua", "Novel", "Pengembangan Diri", "Psikologi", "Bisnis & Keuangan", 
    "Pendidikan", "Sejarah", "Agama", "Teknologi", "Komik", "Sastra", "Buku Anak"
];

// Unsplash curated covers so they render properly and beautifully
const reliableCovers = [
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80",
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80",
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80",
    "https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?w=500&q=80",
    "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?w=500&q=80",
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&q=80"
];

// Definisi master books generator untuk memastikan setiap kategori punya minimal 8-10 buku
const generateFullBookData = () => {
    const tempBooks = [];
    let globalId = 1;

    // Template spesifik buku per kategori demi representasi data asli yang menarik
    const categoryDataTemplates = {
        "Novel": [
            { title: "Laut Bercerita", author: "Leila S. Chudori", year: "2017", pages: "379", price: 115000, rating: "4.9", badge: { type: "Rekomendasi", color: "bg-brand-wood" } },
            { title: "Cantik Itu Luka", author: "Eka Kurniawan", year: "2002", pages: "508", price: 145000, rating: "4.8", badge: { type: "Best Seller", color: "bg-red-500" } },
            { title: "Hujan", author: "Tere Liye", year: "2016", pages: "320", price: 95000, rating: "4.7" },
            { title: "Pulang", author: "Leila S. Chudori", year: "2012", pages: "460", price: 110000, rating: "4.8" },
            { title: "Bumi", author: "Tere Liye", year: "2014", pages: "440", price: 95000, rating: "4.6" },
            { title: "Gadis Kretek", author: "Ratih Kumala", year: "2012", pages: "274", price: 89000, rating: "4.7" },
            { title: "Dilan 1990", author: "Pidi Baiq", year: "2014", pages: "330", price: 79000, rating: "4.5" },
            { title: "Ronggeng Dukuh Paruk", author: "Ahmad Tohari", year: "1982", pages: "408", price: 120000, rating: "4.9" }
        ],
        "Pengembangan Diri": [
            { title: "Atomic Habits", author: "James Clear", year: "2018", pages: "320", price: 128000, rating: "4.9", badge: { type: "Best Seller", color: "bg-red-500" } },
            { title: "Filosofi Teras", author: "Henry Manampiring", year: "2018", pages: "320", price: 98000, rating: "4.8", badge: { type: "Rekomendasi", color: "bg-brand-wood" } },
            { title: "Ikigai", author: "Héctor García", year: "2016", pages: "208", price: 115000, rating: "4.6" },
            { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", year: "2016", pages: "224", price: 110000, rating: "4.7" },
            { title: "Start With Why", author: "Simon Sinek", year: "2009", pages: "256", price: 135000, rating: "4.6" },
            { title: "Grit: Kekuatan Passion + Kegigihan", author: "Angela Duckworth", year: "2016", pages: "350", price: 140000, rating: "4.7" },
            { title: "Mindset", author: "Carol S. Dweck", year: "2006", pages: "320", price: 125000, rating: "4.8" },
            { title: "Make Time", author: "Jake Knapp", year: "2018", pages: "280", price: 118000, rating: "4.5" }
        ],
        "Psikologi": [
            { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: "2011", pages: "499", price: 165000, rating: "4.8", badge: { type: "Rekomendasi", color: "bg-brand-wood" } },
            { title: "Man's Search for Meaning", author: "Viktor E. Frankl", year: "1946", pages: "165", price: 85000, rating: "4.9", badge: { type: "Best Seller", color: "bg-red-500" } },
            { title: "Bicara Itu Ada Seninya", author: "Oh Su Hyang", year: "2018", pages: "238", price: 97000, rating: "4.7" },
            { title: "The Psychopath Test", author: "Jon Ronson", year: "2011", pages: "290", price: 130000, rating: "4.5" },
            { title: "Quiet: The Power of Introverts", author: "Susan Cain", year: "2012", pages: "333", price: 145000, rating: "4.7" },
            { title: "Influence: Science and Practice", author: "Robert B. Cialdini", year: "1984", pages: "260", price: 150000, rating: "4.8" },
            { title: "Empathy", author: "Roman Krznaric", year: "2014", pages: "280", price: 110000, rating: "4.6" },
            { title: "The Courage to be Disliked", author: "Ichiro Kishimi", year: "2013", pages: "288", price: 120000, rating: "4.8" }
        ],
        "Bisnis & Keuangan": [
            { title: "The Psychology of Money", author: "Morgan Housel", year: "2020", pages: "242", price: 135000, rating: "4.9", badge: { type: "Best Seller", color: "bg-red-500" } },
            { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", year: "1997", pages: "336", price: 95000, rating: "4.7" },
            { title: "Zero to One", author: "Peter Thiel", year: "2014", pages: "224", price: 140000, rating: "4.8", badge: { type: "Rekomendasi", color: "bg-brand-wood" } },
            { title: "The Intelligent Investor", author: "Benjamin Graham", year: "1949", pages: "640", price: 210000, rating: "4.9" },
            { title: "Blue Ocean Strategy", author: "W. Chan Kim", year: "2005", pages: "240", price: 160000, rating: "4.6" },
            { title: "Principles", author: "Ray Dalio", year: "2017", pages: "592", price: 299000, rating: "4.9" },
            { title: "Good to Great", author: "Jim Collins", year: "2001", pages: "320", price: 175000, rating: "4.7" },
            { title: "The Lean Startup", author: "Eric Ries", year: "2011", pages: "336", price: 155000, rating: "4.8" }
        ],
        "Pendidikan": [
            { title: "Dunia Sophie", author: "Jostein Gaarder", year: "1991", pages: "544", price: 135000, rating: "4.8", badge: { type: "Rekomendasi", color: "bg-brand-wood" } },
            { title: "Pendidikan Kaum Tertindas", author: "Paulo Freire", year: "1968", pages: "260", price: 85000, rating: "4.7" },
            { title: "Sekolah itu Candu", author: "Roem Topatimasang", year: "1998", pages: "180", price: 65000, rating: "4.6" },
            { title: "Totto-chan: Gadis di Jendela", author: "Tetsuko Kuroyanagi", year: "1981", pages: "272", price: 85000, rating: "4.9", badge: { type: "Best Seller", color: "bg-red-500" } },
            { title: "Democracy and Education", author: "John Dewey", year: "1916", pages: "400", price: 140000, rating: "4.7" },
            { title: "Mendidik Pemenang", author: "Prof. Rhenald Kasali", year: "2019", pages: "310", price: 110000, rating: "4.5" },
            { title: "The Element", author: "Ken Robinson", year: "2009", pages: "360", price: 125000, rating: "4.6" },
            { title: "Pedagogy of Hope", author: "Paulo Freire", year: "1992", pages: "240", price: 90000, rating: "4.7" }
        ],
        "Sejarah": [
            { title: "Sapiens: Riwayat Singkat Umat Manusia", author: "Yuval Noah Harari", year: "2011", pages: "520", price: 155000, rating: "4.9", badge: { type: "Best Seller", color: "bg-red-500" } },
            { title: "Homo Deus", author: "Yuval Noah Harari", year: "2015", pages: "480", price: 165000, rating: "4.8" },
            { title: "Guns, Germs & Steel", author: "Jared Diamond", year: "1997", pages: "620", price: 175000, rating: "4.8", badge: { type: "Rekomendasi", color: "bg-brand-wood" } },
            { title: "Madilog", author: "Tan Malaka", year: "1943", pages: "560", price: 110000, rating: "4.8" },
            { title: "Nusantara: Sejarah Indonesia", author: "Bernard H.M. Vlekke", year: "1943", pages: "528", price: 140000, rating: "4.7" },
            { title: "A History of Modern Indonesia", author: "M.C. Ricklefs", year: "1981", pages: "512", price: 185000, rating: "4.6" },
            { title: "Api Sejarah 1", author: "Ahmad Mansur Suryanegara", year: "2009", pages: "584", price: 145000, rating: "4.7" },
            { title: "Silk Roads: Sejarah Baru Dunia", author: "Peter Frankopan", year: "2015", pages: "640", price: 195000, rating: "4.8" }
        ],
        "Agama": [
            { title: "Al-Hikam", author: "Ibnu Atha'illah", year: "1250", pages: "350", price: 95000, rating: "4.9", badge: { type: "Rekomendasi", color: "bg-brand-wood" } },
            { title: "La Tahzan", author: "Dr. 'Aidh al-Qarni", year: "2001", pages: "540", price: 120000, rating: "4.8", badge: { type: "Best Seller", color: "bg-red-500" } },
            { title: "Tafsir Al-Azhar", author: "Buya Hamka", year: "1967", pages: "400", price: 180000, rating: "4.9" },
            { title: "Sejarah Tuhan", author: "Karen Armstrong", year: "1993", pages: "540", price: 145000, rating: "4.7" },
            { title: "Muhammad: Kisah Hidup Nabi", author: "Karen Armstrong", year: "1992", pages: "390", price: 110000, rating: "4.8" },
            { title: "Seni Tinggal di Bumi", author: "Habib Jafar", year: "2022", pages: "210", price: 89000, rating: "4.7" },
            { title: "Filsafat Agama", author: "Louis O. Kattsoff", year: "1986", pages: "300", price: 95000, rating: "4.6" },
            { title: "Fiqih Sunnah", author: "Sayyid Sabiq", year: "1946", pages: "450", price: 160000, rating: "4.8" }
        ],
        "Teknologi": [
            { title: "Clean Code", author: "Robert C. Martin", year: "2008", pages: "464", price: 210000, rating: "4.9", badge: { type: "Best Seller", color: "bg-red-500" } },
            { title: "The Pragmatic Programmer", author: "Andrew Hunt", year: "1999", pages: "352", price: 195000, rating: "4.8" },
            { title: "Introduction to Algorithms", author: "Thomas H. Cormen", year: "1990", pages: "1292", price: 340000, rating: "4.9" },
            { title: "Grokking Algorithms", author: "Aditya Bhargava", year: "2016", pages: "256", price: 155000, rating: "4.8", badge: { type: "Rekomendasi", color: "bg-brand-wood" } },
            { title: "Design Patterns", author: "Erich Gamma", year: "1994", pages: "395", price: 230000, rating: "4.7" },
            { title: "You Don't Know JS Yet", author: "Kyle Simpson", year: "2020", pages: "210", price: 120000, rating: "4.7" },
            { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", year: "2017", pages: "612", price: 280000, rating: "4.9" },
            { title: "The Mythical Man-Month", author: "Fred Brooks", year: "1975", pages: "322", price: 175000, rating: "4.6" }
        ],
        "Komik": [
            { title: "One Piece Vol. 100", author: "Eiichiro Oda", year: "2021", pages: "200", price: 45000, rating: "4.9", badge: { type: "Best Seller", color: "bg-red-500" } },
            { title: "Demon Slayer Vol. 1", author: "Koyoharu Gotouge", year: "2016", pages: "192", price: 45000, rating: "4.8" },
            { title: "Naruto Gaiden", author: "Masashi Kishimoto", year: "2015", pages: "210", price: 40000, rating: "4.7" },
            { title: "Attack on Titan Vol. 34", author: "Hajime Isayama", year: "2021", pages: "240", price: 45000, rating: "4.8" },
            { title: "Jujutsu Kaisen Vol. 1", author: "Gege Akutami", year: "2018", pages: "196", price: 45000, rating: "4.7" },
            { title: "Spy x Family Vol. 1", author: "Tatsuya Endo", year: "2019", pages: "210", price: 45000, rating: "4.8", badge: { type: "Rekomendasi", color: "bg-brand-wood" } },
            { title: "Solo Leveling Vol. 1", author: "Chugong", year: "2019", pages: "300", price: 120000, rating: "4.9" },
            { title: "Slam Dunk Deluxe 1", author: "Takehiko Inoue", year: "1990", pages: "250", price: 85000, rating: "4.8" }
        ],
        "Sastra": [
            { title: "Bumi Manusia", author: "Pramoedya Ananta Toer", year: "1980", pages: "535", price: 125000, rating: "4.9", badge: { type: "Best Seller", color: "bg-red-500" } },
            { title: "Anak Semua Bangsa", author: "Pramoedya Ananta Toer", year: "1981", pages: "462", price: 110000, rating: "4.8" },
            { title: "Tenggelamnya Kapal Van der Wijck", author: "Buya Hamka", year: "1938", pages: "224", price: 85000, rating: "4.7" },
            { title: "Laskar Pelangi", author: "Andrea Hirata", year: "2005", pages: "529", price: 99000, rating: "4.8", badge: { type: "Rekomendasi", color: "bg-brand-wood" } },
            { title: "Saman", author: "Ayu Utami", year: "1998", pages: "194", price: 80000, rating: "4.6" },
            { title: "Supernova: Ksatria, Puteri, dan Bintang Jatuh", author: "Dee Lestari", year: "2001", pages: "312", price: 95000, rating: "4.7" },
            { title: "Robohnya Surau Kami", author: "A.A. Navis", year: "1956", pages: "142", price: 70000, rating: "4.8" },
            { title: "Gadis Pantai", author: "Pramoedya Ananta Toer", year: "1987", pages: "270", price: 89000, rating: "4.7" }
        ],
        "Buku Anak": [
            { title: "Dongeng Fabel Nusantara", author: "Kak Dian", year: "2019", pages: "120", price: 65000, rating: "4.8", badge: { type: "Rekomendasi", color: "bg-brand-wood" } },
            { title: "Cerita Rakyat Indonesia", author: "Yustitia Angelia", year: "2020", pages: "144", price: 75000, rating: "4.7" },
            { title: "Ensiklopedia Anak Pintar", author: "Erlangga Kids", year: "2018", pages: "180", price: 135000, rating: "4.9", badge: { type: "Best Seller", color: "bg-red-500" } },
            { title: "Kisah Nabi Bergambar", author: "Iis Nur'aeni", year: "2021", pages: "96", price: 55000, rating: "4.8" },
            { title: "Kancil dan Teman-Teman", author: "Sujiwo", year: "2017", pages: "64", price: 45000, rating: "4.5" },
            { title: "Belajar Membaca Cepat", author: "Siti Nurjanah", year: "2022", pages: "48", price: 35000, rating: "4.6" },
            { title: "Kamus Bergambar 3 Bahasa", author: "Lutfi Lestari", year: "2020", pages: "80", price: 60000, rating: "4.7" },
            { title: "Kisah Petualangan Luar Angkasa", author: "Andi Wijaya", year: "2021", pages: "112", price: 78000, rating: "4.7" }
        ]
    };

    // Bangun dataset lengkap dengan ID dan detail unik
    Object.keys(categoryDataTemplates).forEach((cat) => {
        const books = categoryDataTemplates[cat];
        books.forEach((b, index) => {
            const sampleCover = reliableCovers[globalId % reliableCovers.length];
            tempBooks.push({
                id: `book-id-${globalId}`,
                title: b.title,
                author: b.author,
                category: cat,
                price: b.price,
                status: Math.random() > 0.08 ? "Tersedia" : "Kosong", // Kebanyakan ready stock
                rating: b.rating,
                image: sampleCover,
                synopsis: `Buku "${b.title}" adalah salah satu mahakarya terpopuler dari kategori ${cat}. Ditulis oleh ${b.author}, buku ini menyajikan wawasan mendalam, kisah memikat, serta pembelajaran esensial yang dibahas secara dinamis dan kaya sudut pandang. Buku setebal ${b.pages} halaman ini sangat kami rekomendasikan untuk melengkapi jajaran koleksi perpustakaan pribadi Anda.`,
                year: b.year,
                pages: b.pages,
                badge: b.badge || null
            });
            globalId++;
        });
    });

    return tempBooks;
};

const booksData = generateFullBookData();
let currentCategory = "Semua";

// --- DEKLARASI ELEMEN DOM ---
const categoryTabsContainer = document.getElementById('categoryTabs');
const bookGrid = document.getElementById('bookGrid');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('bookModal');

// --- SISTEM INISIALISASI ---
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderBooks();
    setupScrollEffect();
    setupMobileMenu();
    closeModal(); // Sembunyikan modal di awal start-up
});

// --- RENDER TAB KATEGORI ---
function renderCategories() {
    categoryTabsContainer.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border 
            ${currentCategory === cat 
                ? 'bg-brand-dark text-white border-brand-dark shadow-md' 
                : 'bg-white text-gray-600 border-gray-200 hover:border-brand-dark hover:text-brand-dark'}`;
        btn.textContent = cat;
        
        btn.onclick = () => {
            currentCategory = cat;
            renderCategories(); // perbarui status active tombol
            renderBooks();      // filter koleksi buku
        };
        categoryTabsContainer.appendChild(btn);
    });
}

// --- FORMAT RUPIAH ---
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
}

// --- RENDER DAFTAR BUKU INTERAKTIF ---
function renderBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    
    // Logika Penyaringan (Kategori & Kolom Pencarian)
    const filteredBooks = booksData.filter(book => {
        const matchCategory = currentCategory === "Semua" || book.category === currentCategory;
        const matchSearch = book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm);
        return matchCategory && matchSearch;
    });

    bookGrid.innerHTML = '';

    if (filteredBooks.length === 0) {
        bookGrid.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        bookGrid.classList.remove('hidden');
        emptyState.classList.add('hidden');

        filteredBooks.forEach(book => {
            const badgeHtml = book.badge 
                ? `<div class="absolute top-3 left-3 ${book.badge.color} text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-sm z-10 uppercase">${book.badge.type}</div>` 
                : '';
            
            const card = document.createElement('div');
            card.className = "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group book-card-hover border border-gray-100 flex flex-col";
            
            card.innerHTML = `
                <div class="relative h-72 overflow-hidden bg-gray-100">
                    ${badgeHtml}
                    <img src="${book.image}" alt="${book.title}" class="w-full h-full object-cover book-cover transition-transform duration-500">
                    <!-- Overlay interaktif hover -->
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button onclick="openModal('${book.id}')" class="bg-white text-brand-dark w-11 h-11 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition shadow-lg" title="Lihat Detail">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button onclick="bookNow('${book.title}')" class="bg-brand-dark text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-brand-wood transition shadow-lg" title="Booking Langsung">
                            <i class="fas fa-bookmark"></i>
                        </button>
                    </div>
                </div>
                <div class="p-5 flex-grow flex flex-col">
                    <div class="text-xs text-brand-wood font-bold uppercase tracking-wider mb-1">${book.category}</div>
                    <h3 class="font-heading font-bold text-lg text-brand-dark leading-tight mb-1 line-clamp-2">${book.title}</h3>
                    <p class="text-gray-500 text-sm mb-4 line-clamp-1">${book.author}</p>
                    
                    <div class="mt-auto flex items-center justify-between">
                        <span class="font-bold text-brand-dark text-md">${formatRupiah(book.price)}</span>
                        <div class="flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                            <i class="fas fa-star text-brand-accent mr-1"></i> ${book.rating}
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-gray-100">
                        <button onclick="openModal('${book.id}')" class="text-xs text-brand-dark bg-gray-100 font-semibold py-2 px-1 rounded-lg hover:bg-gray-200 transition text-center">
                            Lihat Detail
                        </button>
                        <button onclick="bookNow('${book.title}')" class="text-xs text-white bg-brand-dark font-semibold py-2 px-1 rounded-lg hover:bg-brand-wood transition text-center">
                            Pesan Buku
                        </button>
                    </div>
                </div>
            `;
            bookGrid.appendChild(card);
        });
    }
}

// --- KOLOM PENCARIAN (REAL-TIME FILTER) ---
searchInput.addEventListener('input', () => {
    renderBooks();
});

// --- SISTEM MODAL DETAIL BUKU ---
function findBookById(id) {
    if(id === 'featured-1') return booksData.find(b => b.title.includes('Stillness')) || booksData[0];
    if(id === 'featured-2') return booksData.find(b => b.title.includes('Atomic')) || booksData[1];
    if(id === 'featured-3') return booksData.find(b => b.title.includes('Bumi Manusia')) || booksData[2];
    if(id === 'featured-4') return booksData.find(b => b.title.includes('Sapiens')) || booksData[3];
    
    return booksData.find(b => b.id === id);
}

function openModal(id) {
    const book = findBookById(id);
    if (!book) return;

    document.getElementById('modalCover').src = book.image;
    document.getElementById('modalCategory').innerHTML = `<i class="fas fa-tag mr-1"></i> ${book.category}`;
    document.getElementById('modalTitle').textContent = book.title;
    document.getElementById('modalAuthor').textContent = `Karya: ${book.author}`;
    document.getElementById('modalPrice').textContent = formatRupiah(book.price);
    document.getElementById('modalRating').textContent = book.rating;
    document.getElementById('modalSynopsis').textContent = book.synopsis;
    document.getElementById('modalYear').textContent = book.year;
    document.getElementById('modalPages').textContent = `${book.pages} Halaman`;
    
    const badgeEl = document.getElementById('modalBadge');
    if(book.badge) {
        badgeEl.className = `absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full uppercase text-white shadow ${book.badge.color}`;
        badgeEl.textContent = book.badge.type;
        badgeEl.style.display = 'block';
    } else {
        badgeEl.style.display = 'none';
    }

    const statusEl = document.getElementById('modalStatus');
    if(book.status === "Kosong") {
        statusEl.innerHTML = `<div class="w-2 h-2 rounded-full bg-red-500 mr-2"></div> Habis`;
        statusEl.className = "flex items-center text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full font-semibold";
    } else {
        statusEl.innerHTML = `<div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div> ${book.status}`;
        statusEl.className = "flex items-center text-sm text-green-700 bg-green-50 px-3 py-1 rounded-full font-semibold";
    }

    const bookBtn = document.getElementById('modalBookBtn');
    bookBtn.onclick = () => {
        closeModal();
        bookNow(book.title);
    };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// --- SISTEM BOOKING LANGSUNG ---
function bookNow(title) {
    document.getElementById('formBookTitle').value = title;
    showToast(`"${title}" berhasil dipilih! Mengarahkan ke form booking.`);
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => {
        const input = document.getElementById('formBookTitle');
        input.focus();
        input.classList.add('ring-2', 'ring-brand-accent');
        setTimeout(() => input.classList.remove('ring-2', 'ring-brand-accent'), 1500);
    }, 800);
}

// --- PENANGANAN DATA BOOKING (WHATSAPP REDIRECT) ---
function handleBooking(e) {
    e.preventDefault();
    
    const name = document.getElementById('formName').value;
    const whatsapp = document.getElementById('formWhatsApp').value;
    const bookTitle = document.getElementById('formBookTitle').value;
    const quantity = document.getElementById('formQuantity').value;
    const serviceType = document.getElementById('formServiceType').value;
    const notes = document.getElementById('formNotes').value || "-";

    const messageText = `Halo Jeda_Baca! Saya ingin melakukan booking buku:\n\n` + 
                        `• Nama Lengkap: ${name}\n` +
                        `• No. WhatsApp: ${whatsapp}\n` +
                        `• Judul Buku: ${bookTitle}\n` +
                        `• Jumlah Pesanan: ${quantity} pcs\n` +
                        `• Tipe Layanan: ${serviceType}\n` +
                        `• Catatan: ${notes}\n\n` +
                        `Mohon segera dikonfirmasi. Terima kasih!`;

    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(messageText)}`;
    
    showToast('✅ Pemesanan Berhasil! Menghubungkan ke WhatsApp kami...', 'success');
    
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 1500);

    e.target.reset();
}

// --- NOTIFIKASI TOAST CUSTOM ---
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-600' : 'bg-brand-dark';
    toast.className = `fixed bottom-24 left-1/2 transform -translate-x-1/2 ${bgColor} text-white px-6 py-3.5 rounded-xl shadow-2xl z-[70] font-semibold flex items-center gap-3 transition-all duration-300 translate-y-10 opacity-0`;
    
    const icon = type === 'success' ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-info-circle"></i>';
    toast.innerHTML = `${icon} <span>${message}</span>`;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.remove('translate-y-10', 'opacity-0');
    }, 10);
    
    setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// --- ANTARMUKA SCROLL NAVIGASI ---
function setupScrollEffect() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass-nav', 'shadow-md');
            navbar.classList.remove('py-4');
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('glass-nav', 'shadow-md');
            navbar.classList.remove('py-2');
            navbar.classList.add('py-4');
        }
    });
}

// --- SISTEM MENU MOBILE ---
function setupMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    const icon = btn.querySelector('i');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
        if(menu.classList.contains('hidden')) {
            icon.classList.replace('fa-times', 'fa-bars');
        } else {
            icon.classList.replace('fa-bars', 'fa-times');
        }
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
            icon.classList.replace('fa-times', 'fa-bars');
        });
    });
}