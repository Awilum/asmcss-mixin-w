# asmcss-mixin-w

A mixin for [Assembler CSS](https://github.com/asmcss/assembler) that provides extended functionality to set the width of an element.

### Installation

Install the mixin from npm:

```
npm install asmcss-mixin-w
```

or use the mixin from CDN:

```html
<script src="https://unpkg.com/asmcss-mixin-w@^1/dist/js/asmcss-mixin-w.min.js"></script>
```

### Usage

```html
<div x-style="flex;">
    <div x-style:"^w:6/12;">
        Dustin and Steve become like proud dads to each other in season 3. 
        They argue a lot, but they also praise each other's achievements. 
        For instance, when the Scoops Troop is left to their own devices, 
        it's Steve who has to step up and fight an evil Russian to get to where they need to go.
    </div>
    <div x-style:"^w:6/12;">
        Earlier in the season, Dustin teases Steve about losing fights all the time - first with
        Jonathan, then Billy. Steve realizes this is true, so when he defeats the Russian, Dustin
        jumps for joy, amazed.
    </div>
</div>
```

### Documentation

| value | css properties |
|---|---|
| auto | width: auto; |
| 1/2 | width: 50% |
| 1/3 | width: 33.333333%; |
| 2/3 | width: 66.666667%; |
| 1/4 | width: 25%; |
| 2/4 | width: 50%; |
| w-3/4	| width: 75%; |
| w-1/5	| width: 20%; |
| w-2/5	| width: 40%; |
| w-3/5	| width: 60%; |
| w-4/5	| width: 80%; |
| w-1/6	| width: 16.666667%; |
| w-2/6	| width: 33.333333%; |
| w-3/6	| width: 50%; |
| w-4/6	| width: 66.666667%; |
| w-5/6	| width: 83.333333%; |
| w-1/12 | width: 8.333333%; |
| w-2/12 | width: 16.666667%; |
| w-3/12 | width: 25%; |
| w-4/12 | width: 33.333333%; |
| w-5/12 | width: 41.666667%; |
| w-6/12 | width: 50%; |
| w-7/12 | width: 58.333333%; |
| w-8/12 | width: 66.666667%; |
| w-9/12 | width: 75%; |
| w-10/12 | width: 83.333333%; |
| w-11/12 | width: 91.666667%; |
| w-full | width: 100%; |
| w-screen | width: 100vw; |
| w-min | width: min-content; |
| w-max | width: max-content; |

### License
[The MIT License (MIT)](https://github.com/Awilum/asmcss-mixin-w/blob/master/LICENSE)
Copyright (c) 2021 [Sergey Romanenko](https://github.com/Awilum)

