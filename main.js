var Rx;

var konami = function () {

                window.onload = function () {
                    var codes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
                       konami = Rx.Observable.fromArray(codes),
                       result = document.getElementById('result');

                    Rx.Observable.fromEvent(document, 'keyup')
                        .select(function (e) { return e.keyCode; })
                        .windowWithCount(10)
                        .selectMany(function (x) { return x.sequenceEqual(konami); })
                        .where(function (equal) { return equal; })
                        .subscribe(function () {
                            result.innerHTML = 'KONAMI!';
                            setTimeout(function () {
                                result.style.opacity = 0;
                            }, 2000);
                        });
                };
            };