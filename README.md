# test-css-slider

> :ledger: Testowa aplikacja slidera w czystym CSS (nie ma linijki JavaScript-u)

## Jak to działa?

W HTMLu mamy zdefiniowaną listę elementów, które są jeden na drugim - warstwa na warstwie (drugi przykrywa pierwszy).

W CSS:

 * `app/styles/scss/anim/common.scss`
    * definiujemy animację `fadeInOut`, która zmienia `opacity` na **1** w połowie animacji (zaczyna i kończy na **0**),
    * definiuje obrazkom kilka reguł, m.in. wszystkie są przezroczyste, oraz mają ustawioną animację (na tą wyżej zdefiniowaną).
 * `app/styles/scss/anim/simple.scss`
 * `app/styles/scss/anim/advanced.scss`
    * definiujemy `czas życia animacji`, wynoszący dwukrotność liczby obrazków,
    * następnie każdemu obrazkowi po kolei ustawiamy `opóźnienie animacji` wynoszący wielokrotność cyfry 2. 

Różnica między `simple.scss` oraz `advanced.scss` jest taka, że w tym drugim nie ma kopiowania podobnego kodu,
tylko jest użyta pętla oraz zmienne (jest to dostępne w SASSie).

UWAGA: przy innej liczbie obrazków niż 5, warto jest zaktualizować definicję animacji `fadeInOut` w pliku `app/styles/scss/anim/common.scss` 

## Zadania projektu

```bash
npm run build   # buduje nowy plik main.css
npm run watch   # śledzi zmiany na plikach *.scss i buduje main.css
npm run deploy  # wrzuca do branch gh-pages i pushuje na serwer
```

## License 

[The MIT License](http://piecioshka.mit-license.org) @ 2016
