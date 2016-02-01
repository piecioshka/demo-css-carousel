# test-css-slider

> :ledger: Testowa aplikacja slidera w czystym CSS (nie ma linijki JavaScript-u)

## Jak to działa?

W HTMLu mamy zdefiniowaną listę elementów, które są jeden na drugim - warstwa na warstwie (drugi przykrywa pierwszy).

W CSS:

 * `app/styles/scss/anim/common.scss`
    * definiujemy animację `fadeInOut`, która zmienia `opacity` na **1** w połowie animacji (zaczyna i kończy na **0**),
    * definiuje obrazkom kilka reguł, m.in. wszystkie są przezroczyste, oraz mają ustawioną animację (na tą wyżej zdefiniowaną),
 * `app/styles/scss/anim/simple.scss`
 * `app/styles/scss/anim/advanced.scss`
    * definiujemy czas życia animacji, wynoszący dwukrotność liczby obrazków,
    * następnie każdemu obrazkowi po kolei ustawiamy delay wynoszący ...

Różnica między `simple.scss` oraz `advanced.scss` jest taka, że w tym drugim nie ma kopiowania podobnego kodu,
tylko jest użyta pętla oraz zmienne (jest to dostępne w SASSie).
