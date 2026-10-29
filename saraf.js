// --- SIMULASI ALUR GERAK REFLEKS ---
const btnSimulasi = document.getElementById('btnSimulasi');
const simulasiBox = document.getElementById('simulasiBox');
const teksSimulasi = document.getElementById('teksSimulasi');

const langkahSimulasi = [
    "1. 🖐️ Kulit mendeteksi suhu panas (Reseptor).",
    "2. ⚡ Impuls dikirim melalui Saraf Sensorik.",
    "3. 🧠 Sumsum Tulang Belakang memproses kilat tanpa menunggu otak.",
    "4. ⚡ Perintah dikirim lewat Saraf Motorik ke tangan.",
    "5. 🏃‍♂️ Otot berkontraksi: Tangan langsung ditarik menjauh! (Aman)"
];

btnSimulasi.addEventListener('click', () => {
    simulasiBox.classList.remove('hidden');
    let i = 0;
    teksSimulasi.innerHTML = langkahSimulasi[i];
    
    let interval = setInterval(() => {
        i++;
        if (i < langkahSimulasi.length) {
            teksSimulasi.innerHTML = langkahSimulasi[i];
        } else {
            clearInterval(interval);
        }
    }, 1200);
});


// --- KUIS INTERAKTIF ---
const questions = [
    {
        question: "Bagian otak manakah yang bertindak sebagai pusat koordinasi utama tubuh?",
        options: ["Sumsum tulang belakang", "Otak besar dan otak kecil", "Saraf tepi", "Otot rangka"],
        answer: 1
    },
    {
        question: "Apa fungsi utama dari sumsum tulang belakang pada gerak refleks?",
        options: ["Menyimpan memori jangka panjang", "Memproses respons gerak cepat tanpa menunggu perintah otak", "Mengatur detak jantung secara sadar", "Memproduksi sel darah merah"],
        answer: 1
    },
    {
        question: "Hubungan antar tulang yang memungkinkan terjadinya gerakan fleksi (menekuk) disebut...",
        options: ["Otot", "Sendi", "Tendon", "Ligamen"],
        answer: 1
    },
    {
        question: "Manakah di bawah ini yang termasuk contoh gerak sadar?",
        options: ["Menarik tangan dari panci panas", "Mengetik kode program di laptop", "Lutut menghentak saat dipukul", "Kedip mata otomatis karena debu"],
        answer: 1
    },
    {
        question: "Bagian otot yang bekerja melakukan kontraksi dan relaksasi berfungsi sebagai...",
        options: ["Reseptor", "Pusat saraf", "Efektor gerak", "Penyambung tulang"],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionBox = document.getElementById('question-box');
const resultBox = document.getElementById('result-box');
const scoreText = document.getElementById('score-text');
const restartBtn = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultBox.classList.add('hidden');
    questionBox.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    let currentQ = questions[currentQuestionIndex];
    questionText.innerHTML = `Pertanyaan ${currentQuestionIndex + 1} dari ${questions.length}<br><br>${currentQ.question}`;
    
    optionsContainer.innerHTML = "";
    currentQ.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.classList.add('option-btn');
        btn.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(selectedIndex) {
    let currentQ = questions[currentQuestionIndex];
    if (selectedIndex === currentQ.answer) {
        score += 20; // 5 soal x 20 = 100 poin maksimal
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionBox.classList.add('hidden');
    resultBox.classList.remove('hidden');
    scoreText.innerText = `Skor Anda: ${score} dari 100`;
}

restartBtn.addEventListener('click', startQuiz);

// Jalankan kuis saat pertama kali dimuat
startQuiz();