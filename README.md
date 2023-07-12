# demo-css-carousel

:fish: Testowa aplikacja slidera w czystym CSS

## Preview 🎉

https://piecioshka.github.io/concept-css-carousel/

## Budowa

HTML:

 * mamy zdefiniowaną listę elementów, które są jeden na drugim - warstwa na warstwie (drugi przykrywa pierwszy).

CSS:

 * `app/styles/scss/anim/common.scss`
    * definiujemy animację `fadeInOut`, która zmienia `opacity` na **1** w połowie animacji (zaczyna i kończy na **0**),
    * definiuje obrazkom kilka reguł, m.in. wszystkie są przezroczyste, oraz mają ustawioną animację.
 * `app/styles/scss/anim/simple.scss`
 * `app/styles/scss/anim/advanced.scss`
    * definiujemy `czas życia animacji`, wynoszący dwukrotność liczby obrazków,
    * następnie każdemu obrazkowi po kolei ustawiamy `opóźnienie animacji` wynoszący wielokrotność cyfry 2.

Różnica między `simple.scss` oraz `advanced.scss` jest taka, że w tym drugim nie ma kopiowania podobnego kodu,
tylko jest użyta pętla oraz zmienne (jest to dostępne w Sass-ie).<br/>
Więcej o Sass http://theSassway.com/intermediate/if-for-each-while

**UWAGA: przy innej liczbie obrazków niż 5, warto zaktualizować definicję animacji `fadeInOut` w pliku `common.scss`**

## Zadania projektu

```bash
$ npm run build   # buduje nowy plik main.css
$ npm run watch   # śledzi zmiany na plikach *.scss i buduje main.css
$ npm run deploy  # wrzuca do branch gh-pages
```

## Kontrybucje

Branch `gh-pages` jest automatycznie nadpisywane, gdy zrobimy deploy aplikacji.<br/>
Nie wolno w nim prowadzić prac projektowych!

## Licencja

[The MIT License](http://piecioshka.mit-license.org) @ 2016
