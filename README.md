## Kurulum

1. Repoyu klonlayın:
```bash
git clone https://github.com/<USERNAME>/vue-survey-app.git
cd vue-survey-app
Bağımlılıkları yükleyin:
npm install
.env dosyasını oluşturun:
cp .env.example .env
.env dosyasına kendi Firebase bilgilerinizi ekleyin:
VUE_APP_FIREBASE_URL=https://projeniz.firebaseio.com
VUE_APP_FIREBASE_API_KEY=API_KEYİNİZ
Not: firebase.js dosyasını değiştirmeye gerek yok.
Projeyi çalıştırın:
npm run serve
Tarayıcıdan http://localhost:8080 açın.
