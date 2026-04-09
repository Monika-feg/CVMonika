# CVMonika

Välkommen till **mitt digitala CV** en modern och personlig webbapplikation som visar vem jag är, vad jag kan och vad jag har gjort.

Byggd med **Laravel 13**, **Inertia.js v3** och **React**. Teknikstacken för mina projekt hämtas automatiskt från mina publika GitHub-repositorier så att CV:t alltid är uppdaterat.

## Funktioner

- Modern SPA med Laravel + Inertia + React
- Dynamisk CV-data från `config/cv.php`
- Live-hämtning av språkstack för GitHub-repon
- Snygg och responsiv design med Tailwind CSS
- Testning med Pest
- Docker-stöd för enkel utveckling och drift

## Kom igång

### Utan Docker

1. **Kloning**
	```bash
	git clone git@github.com:Monika-feg/CVMonika.git
	cd CVMonika
	```

2. **Installera beroenden**
	```bash
	composer install
	npm install
	```

3. **Kopiera miljöfil och generera nyckel**
	```bash
	cp .env.example .env
	php artisan key:generate
	```

4. **Bygg frontend**
	```bash
	npm run build
	```

5. **Starta utvecklingsserver**
	```bash
	php artisan serve
	```

6. **(Valfritt) Starta Vite för hot reload**
	```bash
	npm run dev
	```

### Med Docker

1. **Bygg och starta containrar**
	```bash
	docker compose up --build
	```

2. **Installera beroenden i containern** (om inte automatiskt)
	```bash
	docker compose exec app composer install
	docker compose exec app npm install
	```

3. **Kopiera miljöfil och generera nyckel**
	```bash
	docker compose exec app cp .env.example .env
	docker compose exec app php artisan key:generate
	```

4. **Bygg frontend**
	```bash
	docker compose exec app npm run build
	```

5. **Öppna i webbläsaren**
	Besök http://localhost:8000 eller enligt din Docker-konfiguration.

## Konfiguration

All information som visas på CV:t (utbildning, erfarenhet, projekt med mera) ligger i config/cv.php.
Vill du aktivera live-hämtning av språk från GitHub? Lägg till din GitHub-token i .env-filen.

## Testning

Kör tester med:
```bash
php artisan test
```
eller
```bash
./vendor/bin/pest
```

Med Docker:
```bash
docker compose exec app php artisan test
```

## Licens

MIT

Tack för att du tittar på mitt projekt!
Har du frågor eller feedback är du varmt välkommen att höra av dig.
Made with ❤️ by Monika