# Envisio (envisio.studio) — Teknik & Ticari Denetim Raporu

**Tarih:** 2026-07-27
**Kapsam:** `index.html`, `impressum.html`, `datenschutz.html`, `css/`, `js/`, `fonts/`, `assets/`
**Yöntem:** Kaynak kod incelemesi + Chromium (Playwright) ile canlı ölçüm — masaüstü 1440×900 ve mobil 390×844, JavaScript açık ve kapalı senaryolar.

> Bu rapordaki her sayı ölçülmüştür, tahmin değildir. Ölçüm ortamında üçüncü taraf kaynaklar (Vimeo, Unsplash, unpkg) proxy tarafından engellendi; bu yüzden aşağıdaki transfer rakamları **gerçek dünyada olacağından düşüktür**.

---

## Yönetici Özeti

Site görsel dil ve marka tonu açısından hedefe uygun. Ancak üç ayrı alanda **iş riski** taşıyor:

1. **Erişilebilirlik/çalışabilirlik riski:** Ziyaretçi ilk 5,1 saniye boyunca siteyi göremiyor; belirli koşullarda **hiç göremiyor** (siyah ekranda kalıyor). Ölçülerek doğrulandı.
2. **Hukuki risk (Almanya):** Rıza öncesi üçüncü taraf veri aktarımı (DSGVO/TDDDG) ve uydurma müşteri yorumları (UWG §5) — ikisi de Almanya'da klasik Abmahnung konusu.
3. **Performans/SEO kaybı:** Ana sayfa video hariç **2,26 MB** indiriyor; bunun **1,63 MB'ı gereksiz font formatı**. Türkçe sürüm arama motorları için görünmez.

Aşağıdaki P0 maddeleri düzeltilmeden reklam bütçesi harcamak, dolu kovaya su taşımaktır.

---

## Uygulama Durumu (2026-07-27)

Aşama 1 ve 2 uygulandı. Aşağıdaki tabloda her maddenin güncel durumu var;
detaylı gerekçeler ilgili bölümlerde duruyor.

| # | Bulgu | Durum |
|---|---|---|
| 1 | Preloader kilidi / JS'siz boş sayfa | ✅ Düzeltildi |
| 2 | Rıza öncesi üçüncü taraf yüklemesi | ✅ Düzeltildi |
| 3 | Uydurma referanslar | ✅ Kaldırıldı |
| 4 | `playsinline` yok, ölü `.mov` kaynağı | ✅ Düzeltildi |
| 5 | TTF yerine woff2 | ✅ Düzeltildi |
| 6 | Sahte `.min` dosyaları | ✅ Düzeltildi |
| 7 | 455 KB favicon | ✅ Düzeltildi |
| 8 | Kullanılmayan font aileleri | ✅ Kaldırıldı |
| 9 | 4 Vimeo iframe'i aynı anda | ✅ Düzeltildi (en fazla 1) |
| 23 | Üç ölü kod bloğu | ✅ Kaldırıldı / düzeltildi |
| 24 | Tanımsız CSS değişkenleri | ✅ Tanımlandı |
| 28 | Depo hijyeni (`files.zip`, `fix_css.py`) | ✅ Temizlendi |
| 6 (video) | 36 MB videonun yeniden kodlanması | ⚠️ **Açık** — ortamda ffmpeg yok, komut aşağıda |
| — | Unsplash/Lottie bağımlılığı | ✅ **Ortadan kalktı** — Leistungen bölümü görselsiz/Lottie'siz yeniden tasarlandı |
| 16 | `prefers-reduced-motion` desteği | ✅ Eklendi |
| 10 | TR sürümün SEO'ya kapalı olması | ✅ Düzeltildi (`?lang=tr` + hreflang) |
| 11 | HTML hero metni ≠ ekrandaki metin | ✅ Düzeltildi |
| 13 | Kimlik çelişkileri (e-posta, sosyal hesaplar) | ✅ Tekleştirildi |
| 14 | İki `<h1>` | ✅ Tek `<h1>` |
| 15 | `og:image` stok fotoğraf, twitter card yok | ✅ Kendi OG kartı üretildi |
| 17 | Sitemap `lastmod` donmuş | ✅ Güncellendi + hreflang eklendi |
| 18 | `<main>` ve atlama bağlantısı yok | ✅ Eklendi |
| 19 | Mobil menü ARIA / Escape | ✅ Eklendi |
| 20 | Dil butonlarında `aria-pressed` | ✅ Eklendi |
| 22 | Mobil menü + WhatsApp balonu çevrilmiyor | ✅ Düzeltildi |
| 25 | `<strong>` vurgularının silinmesi | ✅ Düzeltildi (`data-i18n-html`) |
| 26 | Ctrl/Cmd+tık yeni sekmede açmıyor | ✅ Düzeltildi |
| 27 | Passive olmayan scroll, sonsuz imleç döngüsü | ✅ Düzeltildi |
| — | ~10,5 KB ölü CSS + 4 ölü çeviri anahtarı | ✅ Temizlendi |
| 21, 29-35 | Kalan erişilebilirlik + dönüşüm işleri | ⏳ Sırada |
| — | **`favicon.ico` eski marka logosu (IMPULSE)** | ⚠️ **Yeni bulgu** — aşağıya bakın |

### Ölçülen sonuç

| | Önce | Sonra | Fark |
|---|---|---|---|
| Transfer (mobil, video hariç) | 2.260 KB | **391 KB** | **−83%** |
| İçerik görünene kadar | 5.132 ms | **1.369 ms** | **−73%** |
| Rıza öncesi üçüncü taraf isteği | 12 | **0** | — |
| Aynı anda çalışan Vimeo oynatıcı | 4 | **1** | — |
| JS kapalıyken site | Kalıcı siyah ekran | **Tam çalışıyor** | — |
| 404 hatası | 1 | **0** | — |
| `fonts/` klasörü | 3,6 MB | **312 KB** | **−91%** |
| `favicon.ico` | 465 KB | **1,4 KB** | **−99,7%** |

### ⚠️ Yeni bulgu: favicon hâlâ eski marka

`favicon.ico` dosyası açıldığında içinden **"IMPULSE PRODUCTION"** logosu çıkıyor —
rebranding sırasında güncellenmemiş. Yani tarayıcı sekmesinde, yer imlerinde ve
telefon ana ekranında ziyaretçi hâlâ eski markayı görüyor.

Bu bir tasarım varlığı olduğu için kendiliğimden değiştirmedim. Envisio logosunun
kaynak dosyasını (tercihen SVG veya en az 512×512 PNG) verirseniz favicon,
apple-touch-icon ve OG kartını ondan üretirim.

Bu arada `og:image` için sitenin kendi tipografisiyle (Playfair Display + Inter,
şampanya altını) geçici bir kart ürettim: `assets/img/og-cover.png`. Eski hali
Unsplash'ten alınmış, başka bir stüdyoya ait bir stok fotoğraftı.

### Kalan iki iş (sizin yapmanız gerekiyor)

**1. Hero videosunu yeniden kodlayın.** Bu ortamda ffmpeg yok. Yerel makinenizde:

```bash
ffmpeg -i assets/video/hero-bg-opt.mp4 -t 10 -an \
  -vf "scale=1920:-2" -c:v libx264 -crf 30 -preset slow -movflags +faststart \
  assets/video/hero-1080.mp4

ffmpeg -i assets/video/hero-bg-opt.mp4 -t 10 -an \
  -vf "scale=1920:-2" -c:v libvpx-vp9 -crf 40 -b:v 0 \
  assets/video/hero-1080.webm

# poster karesi (artık uzak Unsplash görseli yerine yerel dosya)
ffmpeg -i assets/video/hero-bg-opt.mp4 -ss 2 -frames:v 1 assets/img/hero-poster.jpg
```
Hedef 2-4 MB. Yeni dosyaları `index.html` içindeki `<source>` etiketlerine bağlayın.
Şu an `preload="none"` ve mobilde video hiç yüklenmiyor, yani 36 MB kritik yolda
değil — ama masaüstünde hâlâ 36 MB.

**2. `og:image` hâlâ Unsplash'e işaret ediyor** (`index.html:14`). Bu bir meta
etiketi olduğu için tarayıcı isteği doğurmuyor, yani DSGVO sorunu değil — ama
paylaşım kartınızda hâlâ stok fotoğraf çıkıyor. Kendi işinizden bir kareyi
`assets/img/og-cover.jpg` olarak koyup bu satırı güncelleyin. Aşama 3'te
ele alınacak.

> Not: Leistungen bölümü görselsiz ve Lottie'siz yeniden tasarlandığı için
> `images.unsplash.com`, `lottie.host` ve `unpkg.com` bağımlılıkları siteden
> tamamen kalktı. Rıza gerektiren tek üçüncü taraf artık Vimeo (portfolyo).

---

## P0 — Kritik (yayında bırakılmamalı)

### 1. Preloader siteyi kilitliyor; JS yoksa site tamamen boş

**Ölçüm:** Mobil 390px'de içerik **5.132 ms** sonra göründü. FCP 180 ms — yani site 180 ms'de hazırdı, kullanıcıya 5 saniye siyah ekran gösterildi.

Kaynak: `js/main.js:222-249`. Preloader `window.load` olayında kapanıyor ve üstüne **zorunlu 3.500 ms + 1.200 ms fade** ekleniyor.

İki ayrı arıza modu:

- **JS kapalı / script yüklenemedi:** Preloader `display:flex`, `z-index:10000`, tam ekran olarak **kalıcı** kalıyor. Doğrulandı — site tamamen kullanılamaz hale geliyor. Reklam engelleyici bir uzantı `main.min.js`'i engellerse aynı sonuç.
- **Üçüncü taraf yavaşsa:** `window.load`, sayfadaki 4 Vimeo iframe'i ve 7 Unsplash görselini bekler. Bunlar *hata vermeyip yavaş* çalışırsa (mobil şebeke, Vimeo kesintisi, kurumsal firewall), preloader süresiz açık kalır. Bu bir "kırılırsa hiç açılmaz" tasarımı.

**Düzeltme:**
```js
// Fail-safe: load olayına bağlı kalma
const hidePreloader = () => { /* mevcut fade-out mantığı */ };
window.addEventListener('load', hidePreloader);
setTimeout(hidePreloader, 2500);          // her koşulda kapan
```
Ayrıca `<noscript><style>#preloader{display:none!important}</style></noscript>` ekleyin ve minimum bekleme süresini **3.500 ms → 800 ms**'ye indirin. Marka etkisi 5 saniye ekran tutmakla kurulmuyor; hemen görünen kaliteli bir hero ile kuruluyor.

---

### 2. DSGVO / TDDDG: rıza bandı dekoratif, veri rıza öncesi ABD'ye gidiyor

`js/cookie-banner.js` (tamamı 21 satır) yalnızca `localStorage`'a `cookieConsent=true` yazıp bandı gizliyor. Hiçbir şeyi engellemiyor — kod içindeki kendi yorumu da bunu söylüyor: *"For now, it just hides the banner for premium UX."*

Sayfa açılır açılmaz, **rıza alınmadan** şu isteklerin gittiği doğrulandı:

| Alıcı | Ne | Konum |
|---|---|---|
| `player.vimeo.com` | 4 iframe, hepsi `autoplay=1` | ABD |
| `images.unsplash.com` | 7 görsel | Kanada |
| `unpkg.com` | Lottie player script | CDN |
| `lottie.host` | 6 animasyon dosyası | CDN |

Berlin merkezli bir işletme için bu, TDDDG §25 ve DSGVO Art. 6/44 kapsamında doğrudan açık. Ayrıca bandın **"Ablehnen" (Reddet) butonu yok** — DSGVO'ya göre reddetmek kabul etmek kadar kolay olmak zorunda; mevcut haliyle bu banner geçerli bir rıza üretmiyor, sadece riski belgeliyor.

`datenschutz.html` Vimeo için "Einwilligung bzw. berechtigtes Interesse" diyor; ancak rıza hiç sorulmuyor, dolayısıyla dayanak fiilen yok.

**Düzeltme (öncelik sırasıyla):**
1. Vimeo iframe'lerini `src` yerine `data-src` ile yükleyin, ancak rıza sonrası enjekte edin. **Not:** `js/main.js:617-633`'te bunun için yazılmış kod zaten var — fakat `.lazy-vimeo` sınıfını arıyor, HTML'de böyle bir sınıf yok. Kod ölü. Sınıfı eklemek tek satırlık iş.
2. Unsplash görsellerini **kendi sunucunuza indirin** (zaten telif açısından da doğrusu bu — bir prodüksiyon stüdyosunun vitrininde stok fotoğraf olması ayrı bir sorun).
3. Lottie player'ı `unpkg` yerine yerel dosyadan servis edin (aynı zamanda tedarik zinciri riskini kaldırır).
4. Bandı iki butonlu hale getirin: *Akzeptieren* / *Ablehnen* + *Einstellungen*.

Bu dördü yapılırsa site **rıza gerektirmeyen** bir siteye dönüşür ve banner'a duyulan ihtiyaç neredeyse tamamen ortadan kalkar — en temiz çözüm budur.

---

### 3. Uydurma müşteri yorumları — UWG §5 riski

`index.html:365-385`: "Marco Rossi, Inhaber Fine Dining Group" ve "Sarah Schmidt, Marketing Direktorin Luxury Estate" — profil fotoğrafları Unsplash stok görselleri (`photo-1560250097-...`, `photo-1573496359142-...`).

Almanya'da uydurma referans, **UWG §5 irreführende Werbung** kapsamındadır ve AB Omnibus Direktifi (2019/2161) sahte değerlendirmeleri açıkça yasaklar. Rakip veya Abmahnverein tarafından ihtar edilmesi tipik senaryodur; masrafı genellikle dört haneli.

Ayrıca ticari olarak da zayıf: potansiyel müşteri "Luxury Estate" diye bir firma aradığında hiçbir şey bulamayacak.

**Düzeltme:** Ya gerçek müşterilerden yazılı izinle isim + logo alın, ya da bölümü kaldırıp yerine **anonim ama doğrulanabilir sonuç** koyun ("Bir Berlin fine-dining müşterisinde 3 ay içinde rezervasyon talebi +%40 — referans talep üzerine paylaşılır"). İkincisi hukuken güvenli, ticari olarak yine güçlü.

---

### 4. 36 MB hero video + iOS'ta hiç oynamıyor

`assets/video/hero-bg-opt.mp4` = **36,4 MB**. Dosya adı "opt" (optimize) diyor ama optimize değil. Almanya'da mobil veriyle giren bir kullanıcı, henüz tek satır yazı okumadan 36 MB indiriyor.

Ayrıca `index.html:119`'daki `<video>` etiketinde **`playsinline` yok** (ölçümle doğrulandı). iOS Safari `playsinline` olmadan satır içi otomatik oynatmaz — yani iPhone kullanıcılarının **tamamı** hero videoyu hiç görmüyor, sadece poster görselini görüyor. Poster da harici bir Unsplash fotoğrafı.

`index.html:123` ayrıca var olmayan bir dosyaya işaret ediyor: `assets/video/hero-bg.mov` → **404** (ölçümle doğrulandı).

**Düzeltme:**
```html
<video id="heroVideo" class="hero-video" autoplay muted loop playsinline
       preload="none" poster="assets/img/hero-poster.webp">
  <source src="assets/video/hero-1080.webm" type="video/webm">
  <source src="assets/video/hero-1080.mp4"  type="video/mp4">
</video>
```
Hedef: 1080p, ~8-10 sn döngü, CRF 28-30, ses yok → **2-4 MB**. Mobilde (`max-width: 768px`) videoyu tamamen kapatıp yerine poster görseli kullanın. Ölü `.mov` kaynağını silin.

---

## P1 — Yüksek (performans, doğrudan para kaybı)

### 5. Fontlar: 1,63 MB gereksiz indirme — kendi elimizle açtığımız yara

**Ölçüm (mobil, üçüncü taraflar engelli):**

| Kaynak | Boyut |
|---|---|
| `favicon.ico` | 455 KB |
| 4× Inter `.ttf` | 1.275 KB |
| 3× PlayfairDisplay `.ttf` | 351 KB |
| `style.min.css` | 57 KB |
| `main.min.js` | 40 KB |
| **Toplam** | **2.260 KB** |

Depoda bu fontların **woff2 sürümleri zaten mevcut** ve toplam ~250 KB. Ama `css/style.css` yalnızca `.ttf` yüklüyor.

Sebebi depoda duruyor: **`fix_css.py`** adlı script, CSS'ten tüm woff2 satırlarını silmiş:
```python
fonts = ["url('../fonts/Inter-normal-300.woff2') format('woff2'),", ...]
for p in fonts:
    c1 = c1.replace(p, '')   # woff2'yi CSS'ten sildi
```
Bu ~**1,4 MB** net kayıp demek. Tek başına en yüksek getirili düzeltme bu.

Ek olarak `fonts/fonts.css` dosyası **hiçbir yerde çağrılmıyor** ve içeriği de hatalı — `.ttf` dosyalarını `format('woff2')` olarak tanımlıyor:
```css
src: url('CormorantGaramond-normal-400.ttf') format('woff2');  /* yanlış */
```

**Düzeltme:** `fix_css.py`'ı silin, `style.css`'te her `@font-face` için woff2'yi ilk sıraya koyun:
```css
src: url('../fonts/Inter-normal-400.woff2') format('woff2'),
     url('../fonts/Inter-normal-400.ttf')   format('truetype');
```
Ayrıca `.ttf` dosyalarını depodan tamamen çıkarın — woff2 tüm güncel tarayıcılarda desteklenir.

### 6. `.min` dosyaları minify edilmemiş

| Dosya | Kaynak | "Minified" |
|---|---|---|
| `css/style.css` → `style.min.css` | 57.657 B | 57.657 B (**bayt bayt aynı**) |
| `js/main.js` → `main.min.js` | 40.456 B | 40.455 B (**1 bayt fark**) |

İsim var, iş yok. Gerçek minify + gzip/brotli ile ~%70 kazanç. Basit çözüm: build adımı yoksa `.min` uzantılarını kaldırıp sunucu tarafında brotli açın.

### 7. `favicon.ico` = 455 KB

Toplam sayfa ağırlığının %20'si favicon. 32×32 + 180×180 PNG/ICO ile **< 15 KB** olmalı.

### 8. Kullanılmayan font ailesi: ~1,1 MB

`Montserrat` ve `Cormorant Garamond` dosyaları depoda (ttf + woff2), ancak `css/style.css` içinde **0 referans** var. Sadece `impressum.html` / `datenschutz.html` içindeki inline CSS kullanıyor — ve orada da `.ttf` çekiyor.

### 9. 4 Vimeo iframe'i aynı anda, hepsi `autoplay=1`

Slider'da yalnızca 1 slayt görünürken **4 video oynatıcı da** yükleniyor ve otomatik oynuyor (ölçümle doğrulandı: `loading: "auto"`, 4 istek de anında). CPU, batarya, veri ve DSGVO — dördü birden.

**Düzeltme:** `data-src` + `.lazy-vimeo` sınıfı (kod zaten yazılmış, madde 2'ye bakın) ve yalnızca aktif slaydı yükleyin.

---

## P2 — SEO ve içerik tutarlılığı

### 10. Türkçe sürüm arama motorları için yok hükmünde

Dil değiştirici tamamen istemci taraflı. Ölçümle doğrulandı:

| | DE | TR'ye geçince |
|---|---|---|
| Görünen metin | Almanca | **Türkçe** ✅ |
| `<html lang>` | `de` | **`de`** ❌ |
| `<title>` | Almanca | **Almanca** ❌ |
| `<meta description>` | Almanca | **Almanca** ❌ |
| URL | `/` | **`/`** ❌ |

Sonuç: Türkçe içerik indekslenmiyor, `hreflang` yok, paylaşım kartları hep Almanca. Ekran okuyucu da Türkçe metni Almanca fonetikle okur (WCAG 3.1.2 ihlali).

**Düzeltme:** Minimum olarak `document.documentElement.lang = lang` ve `document.title` güncellemesi. Doğrusu ise `/tr/` altında ayrı bir sayfa + karşılıklı `hreflang` etiketleri.

### 11. HTML'deki hero metni ile ekrandaki metin farklı

| | HTML kaynağı | Kullanıcının gördüğü |
|---|---|---|
| Satır 1 | "Ihre Geschichte" | "Ihre Vision." |
| Satır 2 | "Filmisch **Erzählt**" | "Filmisch **Vollendet.**" |

`index.html:130-133` ile `js/main.js:13-15` çelişiyor; JS her yüklemede HTML'i eziyor. Tarayıcı çevirileri, önizleme botları ve JS'siz tarama hep yanlış metni görüyor.

### 12. Almanca sayfada Türkçe metin — ✅ giderildi

`index.html`'de `service-desc-6` anahtarının altında Türkçe bir cümle duruyordu
(JS yüklenmeden önce Alman ziyaretçi bunu görüyordu). Leistungen bölümü yeniden
yazılırken tüm hizmet metinleri Almanca kaynaktan kuruldu; bu anahtar da
Webdesign/Landingpage birleşmesiyle birlikte kalktı.

### 13. Kimlik bilgileri kendi içinde çelişiyor

| Alan | Değer 1 | Değer 2 |
|---|---|---|
| E-posta | `info@envisio.de` (schema.org, satır 38) | `info@envisio.studio` (form + Impressum) |
| Instagram | `impulse.prod1` (schema sameAs) | `envisio.prod` (footer) |
| Vimeo | `vimeo.com/impulseproduction` (schema) | `vimeo.com/envisioproduction` (footer) |
| Analytics domain | `envisio.de` (satır 50) | site `envisio.studio` |

Rebranding yarım kalmış. Google için NAP (Name-Address-Phone) tutarlılığı yerel SEO'nun temel sinyalidir; bu çelişkiler doğrudan sıralamaya zarar verir. Ayrıca schema'daki sosyal hesaplar muhtemelen artık mevcut değil.

### 14. Sayfada iki `<h1>`

`index.html:130` ve `133` — ikisi de `<h1>`. Tek `<h1>` olmalı; ikinci satır `<span>` veya `<p class="hero-title">` olmalı.

### 15. Diğer SEO açıkları

- `og:image` genel bir Unsplash stok fotoğrafı — **bir video prodüksiyon stüdyosunun paylaşım kartında kendi işi olmalı**. `og:image:width/height`, `twitter:card`, `og:locale` de eksik.
- Schema.org'da `telephone`, `openingHours`, `geo`, `priceRange`, `image`, `logo` yok. WhatsApp numarası sitede var (`+491787277867`) ama schema'da yok.
- `sitemap.xml` `lastmod` değerleri `2026-05-11`'de donmuş.
- Bölüm `id="referenzen"` menüde yok — hiçbir yerden erişilemiyor.

---

## P3 — Erişilebilirlik (WCAG 2.2 AA)

| # | Bulgu | Kriter |
|---|---|---|
| 16 | `prefers-reduced-motion` desteği **hiç yok** (2.698 satır CSS'te 0 eşleşme). Parallax + 3D tilt + partikül + özel imleç aynı anda çalışıyor. Vestibüler rahatsızlığı olan kullanıcı için ciddi. | 2.3.3 |
| 17 | 2.698 satır CSS'te yalnızca **3** `:focus` kuralı. Klavye kullanıcısı nerede olduğunu göremiyor. | 2.4.7 |
| 18 | Özel imleç yerel imleci gizliyor, klavye karşılığı yok. | 2.1.1 |
| 19 | Mobil menü: `aria-expanded` / `aria-controls` yok, kapalıyken `aria-hidden` değil, odak hapsi (focus trap) yok, Escape kapatmıyor. | 4.1.2 |
| 20 | Dil butonlarında `aria-pressed` yok. | 4.1.2 |
| 21 | `<main>` etiketi, atlama bağlantısı (skip link) ve landmark rolleri yok. | 2.4.1 |
| 22 | Mobil menü bağlantıları ve WhatsApp balonu (`Kostenlose Beratung`) `data-i18n` taşımıyor → TR modunda Almanca kalıyor. | 3.1.2 |

Almanya'da BFSG (Barrierefreiheitsstärkungsgesetz) 28.06.2025'te yürürlüğe girdi. Salt B2B hizmet sitesi olarak muhtemelen kapsam dışısınız, ama **müşterileriniz için site yapıyorsanız** bu bilgi doğrudan satılabilir bir yetkinlik.

---

## P4 — Kod kalitesi ve bakım

### 23. Ölü kod: hiç çalışmayan üç blok

| Konum | Aradığı | Gerçek |
|---|---|---|
| `main.js:617-633` | `.lazy-vimeo` | HTML'de yok → iframe'ler tembel yüklenmiyor |
| `main.js:636-650` | `window.pJSDom` (particles.js) | Kütüphane kullanılmıyor → partikül optimizasyonu çalışmıyor |
| `main.js:595-614` | `.whatsapp-float` | Gerçek sınıf `.floating-cta` → mıknatıs efekti hiç çalışmıyor |

Yani "lazy loading yaptık", "partikülleri optimize ettik" diye yazılan üç iyileştirmenin **üçü de fiilen devre dışı**.

### 24. Tanımsız CSS değişkenleri

`var(--font-heading)`, `var(--font-secondary)`, `var(--text-light)`, `var(--text-white)` kullanılıyor ama **hiçbiri tanımlı değil**. Sonuç: Montserrat/Cormorant başlık tipografisi asla uygulanmıyor — portfolyo slayt başlıkları (`style.css:2032`) ve logo (`style.css:1559`) tasarlanandan farklı görünüyor.

### 25. `<strong>` vurguları her yüklemede siliniyor

`updateContent()` (`main.js:160`) `el.textContent = ...` kullanıyor. `index.html:352` ve `395`'teki `<strong>Premium</strong>` / `<strong>Premium-Level</strong>` vurguları sayfa açılır açılmaz düz metne dönüşüyor. Doğrulandı — o vurgu hiç render edilmiyor.

### 26. Sayfa geçiş katmanı bağlantıları bozuyor

`main.js:848-863` tüm dahili bağlantılarda `e.preventDefault()` yapıp **500 ms** bekliyor. Sonuçlar:
- Cmd/Ctrl+tık ve orta tık ile yeni sekmede açma **çalışmıyor**
- Her sayfa geçişine yarım saniye eklendi
- Tarayıcının kendi yükleme göstergesi devre dışı

Görsel kazanç, işlevsel kayıptan küçük.

### 27. Performans hijyeni

- `main.js:266` — scroll dinleyicisi `{passive: true}` değil (diğerleri öyle). Kaydırma akıcılığını düşürür.
- `main.js:517-522` — partikül `requestAnimationFrame` döngüsü, hero ekrandan çıksa bile **hiç durmuyor**. Aynı şey özel imleç döngüsü için de geçerli (`main.js:435-441`). Dizüstünde batarya, mobilde ısınma.
- `main.js:697-712` — parallax her karede `getBoundingClientRect()` çağırıyor (layout thrashing).

### 28. Depo hijyeni

- `files.zip` (3,7 KB) ve `fix_css.py` — üretim deposunda işi yok
- 9 adet `.ttf` + `.woff2` çifti, ~2,7 MB gereksiz
- Git pack boyutu **81,45 MB** — video geçmişte birden çok kez commit edilmiş
- `.vscode/settings.json` kişisel editör ayarı

### 29. Güvenlik

- `unpkg.com` üzerinden yüklenen script'te **SRI (integrity) yok** — CDN ele geçirilirse siteye keyfi kod girer. En azından `integrity` + `crossorigin` ekleyin, tercihen dosyayı yerelleştirin.
- CSP, `X-Content-Type-Options`, `Referrer-Policy` başlıkları yok. GitHub Pages'te başlık ayarlanamaz — Cloudflare veya Netlify'a taşınırsa çözülür (aynı hamle brotli sıkıştırmayı da getirir).
- Web3Forms `access_key` HTML'de açıkta. Bu servis için tasarım gereği böyle, ancak anahtarınız spam'lenirse form kotanız tükenir — Web3Forms panelinden domain kısıtlaması açın.

---

## Dönüşüm (satış) perspektifi

| # | Bulgu | Etki |
|---|---|---|
| 30 | 5 sn preloader → 2 sn çerez bandı → 4 sn sonra WhatsApp balonu. Kullanıcı **11 saniye boyunca** üst üste kesintiye uğruyor. | Yüksek |
| 31 | İletişim formunda **mesaj alanı yok** (`textarea` sayısı: 0). Oysa çevirilerde `form-label-message` ve `form-placeholder-message` tanımlı — alan planlanmış ama eklenmemiş. Nitelikli talebin en değerli kısmı toplanmıyor. | Yüksek |
| 32 | Fiyat aralığı, çalışma süreci ve SSS bölümü yok. Premium konumlanmada "ne kadar sürer, nasıl ilerler" sorusu cevapsızsa teklif talebi düşer. | Orta |
| 33 | Portfolyo videoları var ama **vaka çalışması yok** — hangi müşteri, hangi hedef, hangi sonuç? Video prodüksiyon satın alan kişi sonucu satın alıyor. | Orta |
| 34 | Form gönderiminde ayrı bir teşekkür sayfası yok → reklam platformlarında **dönüşüm ölçülemiyor**. Meta/Google Ads yapılacaksa şart. | Orta |
| 35 | Analytics tamamen kapalı (`index.html:50` yorum satırında). Şu an hiçbir veri toplanmıyor — hangi bölümün çalıştığı bilinmiyor. Plausible (çerezsiz, DSGVO uyumlu) doğru seçim. | Orta |

---

## Önerilen Uygulama Sırası

**Aşama 1 — Bu hafta (risk kapatma)**
1. Preloader fail-safe + `<noscript>` kaçış yolu + süreyi 800 ms'ye indirme
2. Sahte referansları kaldırma veya gerçekleriyle değiştirme
3. Vimeo/Unsplash/unpkg'ı rıza öncesi engelleme + banda "Ablehnen" ekleme
4. `<video>` etiketine `playsinline`, ölü `.mov` kaynağını silme

**Aşama 2 — Gelecek hafta (performans, ~2 MB kazanç)**
5. `fix_css.py`'ı geri alma → woff2'ye dönüş (**−1,4 MB**)
6. Videoyu yeniden kodlama, mobilde kapatma (**−32 MB**)
7. `favicon.ico` küçültme (**−440 KB**)
8. Kullanılmayan Montserrat/Cormorant ve tüm `.ttf` dosyalarını silme
9. Gerçek minify + Cloudflare/Netlify'a taşıyıp brotli açma

**Aşama 3 — SEO ve içerik**
10. `<html lang>` + `<title>` + meta dinamikleştirme, `hreflang`, `/tr/` sayfası
11. Kimlik çelişkilerini tekleştirme (e-posta, sosyal hesaplar, domain)
12. HTML/JS hero metnini eşitleme, Almanca sayfadaki Türkçe cümleyi düzeltme
13. `og:image`'ı kendi işinizden bir kareyle değiştirme, schema'yı tamamlama

**Aşama 4 — Erişilebilirlik ve kod**
14. `prefers-reduced-motion`, görünür odak halkaları, `<main>` + skip link
15. Mobil menü ARIA + focus trap + Escape
16. Üç ölü kod bloğunu ya çalıştırma ya silme; tanımsız CSS değişkenlerini tanımlama
17. Sayfa geçiş katmanını kaldırma veya modifier tuşlarına saygı gösterecek şekilde düzeltme

**Aşama 5 — Dönüşüm**
18. Forma mesaj alanı + teşekkür sayfası + Plausible
19. Süreç, fiyat aralığı ve SSS bölümleri
20. Sonuç odaklı 2-3 vaka çalışması

---

## Ölçüm Ekleri

**Mobil (390×844), üçüncü taraflar engelli:**
```
FCP                   180 ms
DOMContentLoaded      427 ms
load                  608 ms
İçerik görünür      5.132 ms   ← preloader
Transfer          2.260 KB     ← video ve üçüncü taraflar hariç
Kaynak sayısı          26
Yatay taşma           yok ✅
```

**Doğrulanan hatalar:**
```
404  /assets/video/hero-bg.mov
video playsinline: false
<h1> sayısı: 2
iframe loading: 4× "auto" (tembel yükleme yok)
skip link: yok
<html lang> TR modunda: "de"
JS kapalı → preloader display:flex, z-index:10000, kalıcı
prefers-reduced-motion: 0 eşleşme
tanımsız CSS değişkeni: 4
```
