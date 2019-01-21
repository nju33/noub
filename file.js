var Name = (function (redom, browserslistUseragent) {
    'use strict';

    /* @jsx el */
    var Color;
    (function (Color) {
        Color["Usubeni"] = "#e87a90";
        Color["Kurenai"] = "#cb1b45";
    })(Color || (Color = {}));
    var Noub = /** @class */ (function () {
        function Noub() {
            var _this = this;
            this.onMouseenter = function () {
                _this.chromeLink.style.color = Color.Kurenai;
            };
            this.onMouseleave = function () {
                _this.chromeLink.style.color = '#000';
            };
            this.chromeLink = (redom.el("a", { href: "https://www.google.com/intl/ja_ALL/chrome/", target: "_blank", rel: "noopener noreferrer", style: {
                    color: '#000',
                    fontWeight: 'bold',
                    transition: '.2s'
                } }, "Google Chrome"));
            this.el = (redom.el("div", { role: "alert", style: {
                    background: Color.Usubeni,
                    border: "1px solid " + Color.Kurenai,
                    borderRadius: '3px',
                    boxSizing: 'border-box',
                    padding: '0 1em',
                    color: '#292929',
                    marginBottom: '1em'
                } },
                redom.el("p", null,
                    "\u304A\u4F7F\u3044\u306E\u30D6\u30E9\u30A6\u30B6",
                    redom.el("strong", { style: { color: '#000' } },
                        "\u300C",
                        this.getBrowserName(),
                        "\u300D"),
                    "\u306F\u30B5\u30DD\u30FC\u30C8\u5BFE\u8C61\u5916\u3067\u3059\u3002",
                    redom.el("br", null),
                    redom.el("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAH4klEQVRYw62Y/XNU1RnHP8+5d3eTTQIbSDChkhdBBF+mQYgv1BcqlanMWK3KyFi1vlTr1LFjHX/oX9AfOm1tbW1pnarVGZWhL3bqS7W1KAxTLTIwdrRqFAgoIoGEhGRf73me/rC7ye6Shfhy7tw5e+49e8/nPs/3ec65R5hhMZC9994ym6PHOpwEKywqfNUiv8zMejBtKXUbE3GDOLfLBcFmjQrbSQQHex57ZlTAZjKOzKTTx/fc2p4ZPbZeotwV5rUf79tQBTPMKsYp/zYDEQjcYUS2S5h4Idma2tix4YlDnxto8I6bvxZNjD4s+VwXZq5q8BKAVYJM1lbZT4nHB8PmWXd2P/6nf34moN2339At+dx9Vsh9F+8TlQCfHqj007mcxBIbJCEPnPbk84MzBnr79mu6w4n8Y+KjSxw4QWoGq65nDFS8ry4W22KzGr+98PG/7Tsp0Fs3X9lFzv9D8vnFgXM4cQTyRQIVGxKPvUuYXLNwUzWUq2zsXH91T348+0SUzS5WM1QVM8VUqwesFfFnKJbLn2HZ8T/svmZtd12gKHPsfp/PXaTqUTPKUFobTV9UiQqXmOZ+MC3Q8qfvWbO/gTtU1alRBNEiiJrVTSIzBbXpA8JZrnDXB9d9fXWVhlb++f55R7Ljr3/lnSM9N71xgGaEwDkCcQTOEYqUtOSQCm14A52dws2Za8SJ/MSQWubwpGgEqxBpUT8ilJ9hk30SwZ7k8pZVnbe9MBRiyNGnJq6PTLt2drWwYqCBvpEMAogDUVDnAMOhiAgWT8A5fcz6xnU0dPWAiAAxzIhG95B57yl0aDuiGVwAzoETIwgotgWCQAgDCEIQ/BIL0+vN+FXQ13NvKhNEPwRbnIs50omQpXuPEkcIKCZcKmrXs4imm75Dy9pvctDmsmufY+c+4Z0DwidjQtjYSvtpKwlSi9D0AYiGCUJHLC7E4654JoptFwriBJyIc4Lb0/tcmE6kO4D+so/f7GrhjZ4UF+45SoDDoZgD9Ua4cDGp791HNKeDjTuEbQOOiTwUfBE2cJBMwEWLhGuXn0fTuQuQgR/TkB9ApOQuERCrEIwgYiD0E6PDYa7fq7aVgVTgub55HG4MGPdKXkvhH0/Qcs16ojkdPLHN8ff/OkazEGlF0CiMpeH5Nx2PbhNyYSfSdQMSb8SFDgkdhAKlWkKHTLXbfBhb4SLRVeV0ZaXwHm4KeW1hKxFKRpWCGvG+5TScvYy/7BC2DghKdd6bkmmx2vqe8Mc3BJ29jEJLPxIESOAmTxcEiHNV18TpKodqX3UcQOSELUvmcizuUFWyaqSuvp6PxkK2DbjJFDBdxFfe2zog7B8JKZyyDguKlpCwODiBq2pL4HBO+pw36zaKR2U5mgzZdN6XiMRwqRQN3b3sHhIm8lXz6tS/7PicM5GDDw6BJHvwsblIIMUQc0Uxi5OijqT8AO12Zja77Co1xSqO//TOYteps4i1tYMIwxNTArZpYKzGUpHC8Hipb3weIlI660zrZrNdbaYtw5kZXuDFs9oYS4QnXEpWu+qzTDFT/3EmjFrFG9eee9sa+XdjBsxobSq63ipMZDUwle3QQWsTiBnOH2F6O06JTrFRZ2qDlVaptVbOwaaugGMf7uW0diMZn94qVjvfGSTjsHCeYbmPCP2ROjAV15RBJ9jOei4rl+FkyM8GNzM/5bnodD25i0pL6otPVxa0euIjzyCiJ/D35Mpzp0PtlRO5rHw+O/I/Xjv8LteuMC4+vXi1DFMr8DLMdf2GTrxNPPN6Xc3UuGRz0Hz1sjxi6xGSU0sAOS4N5M2zb2KIi085g5W9jRQ8fDImRApaIgoDaG6A1UuVb11opHND+IOPkZKP6ruqPEOYDXknP5KeR29J5USfROSKmcTDl1t7uGfpFZzfdgYfHw14/xCMjBfvtTYVNdOZ8rz24Vu8t+cZ7pr/FskgqgGy4zKrV30+kNgNgiHzf3/j3RYLflG7gqxn5KYwwerOc7hz8eUsau6YWgqY8f7IAX6781m27d7BiysznNqQPikMoLmC/37i/C2/FoCOR9a1Iw2v41zvp1n9OYSOZIr5ja0Y8PHIEAcPH4JCgft64f5F4zOBwXvdncnqBS2XbB2azJenbFi/mkTsOUQSnyaRTQ6lhqQLkMmztEF5/Nw8XY2FupqZNI1qLp22tS2XbvlX1Zr6k7uefhnvNwBaH6IqnipmeYPIY1GEqrJuvtLVGJ0UBtCCt9+UYY776nBZHiDyr04f+NMav5izVLHIY5FyViPcuKBQ8V51YSgU/KsZH/38hB+Kcx66akG8ofklDdySGX1BqKFRBPmIeKbASxcIZzePHzct1JZsIXrXcnJ58tIt++t+lwEM3/3X/fmsX2OR34yZniiDG4aaB68QedZ1Cmc2nRjGTLVQ8Jung6FemA/f/fT+MMutlvcPmrdccZ6a5lDDvGLqaXPKjafmcWLHbUZURFMum7UHJyaiW6eDmdF2zNxfrrtM4sHDxIOe8guUhWxeIR+h+Yjb2pWfnpkG89M9RnN5P5g9Znek1mx9+XNvWM3/yZVthWTj9RYL1prQj5N2M8PyEVaI6HGel1bkaY/lKqWFqg2p2vZsFL2QHnMbO9duHfpCdtBKgpHW362b5dBOiWS5ebtM1fe5fNT70BJtuaptAmBUYG/k/S6vbrPE3A6f42Bq1SujIjPb0vs/J5W6CV+KVj8AAAAASUVORK5CYII=", alt: "Chrome\u30A2\u30A4\u30B3\u30F3", style: {
                            height: '18px',
                            margin: '0 8px 0 3px',
                            position: 'relative',
                            top: '2px'
                        } }),
                    redom.el("a", { href: "https://www.google.com/intl/ja_ALL/chrome/", target: "_blank", rel: "noopener noreferrer", style: {
                            color: '#000',
                            fontWeight: 'bold',
                            transition: '.2s'
                        } }, "Google Chrome"),
                    "\u306A\u3069\u306E\u30E2\u30C0\u30F3\u30D6\u30E9\u30A6\u30B6\u306E\u6700\u65B0\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u3054\u5229\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002")));
        }
        Noub.init = function (elementId, opts) {
            var targetElement = document.getElementById(elementId);
            if (targetElement === null) {
                throw TypeError('対象の要素が存在しません');
            }
            var browserslistOpts = {};
            if (Array.isArray(opts.browsers)) {
                browserslistOpts.browsers = opts.browsers;
            }
            var passed = browserslistUseragent.matchesUA(navigator.userAgent, opts);
            if (passed) {
                return;
            }
            var noub = new Noub();
            redom.mount(targetElement, noub);
            return noub;
        };
        Noub.prototype.getBrowserName = function () {
            var browserVersion = browserslistUseragent.resolveUserAgent(navigator.userAgent);
            return browserVersion.family + "(" + browserVersion.version + ")";
        };
        Noub.prototype.onmount = function () {
            this.chromeLink.addEventListener('mouseenter', this.onMouseenter);
            this.chromeLink.addEventListener('mouseleave', this.onMouseleave);
        };
        Noub.prototype.onunmount = function () {
            this.chromeLink.removeEventListener('mouseenter', this.onMouseenter);
            this.chromeLink.removeEventListener('mouseleave', this.onMouseleave);
        };
        return Noub;
    }());

    return Noub;

}(redom, browserslistUseragent));
