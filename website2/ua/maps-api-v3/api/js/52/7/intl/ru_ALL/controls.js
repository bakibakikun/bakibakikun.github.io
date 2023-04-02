google.maps.__gjsload__('controls', function(_) {
    var dva, eva, BG, fva, CG, gva, hva, iva, FG, kva, lva, mva, nva, GG, ova, qva, HG, IG, JG, rva, KG, uva, tva, sva, LG, NG, wva, xva, yva, zva, Ava, Bva, vva, OG, RG, Dva, Cva, SG, TG, Fva, Eva, Gva, Hva, Iva, VG, WG, Lva, Jva, Kva, Mva, XG, Pva, Ova, ZG, aH, $G, Uva, Rva, Sva, Tva, bH, Vva, cH, Wva, dH, eH, Yva, Xva, Zva, $va, fH, hH, gH, jH, awa, cwa, kH, dwa, lH, ewa, hwa, fwa, gwa, kwa, jwa, iwa, mwa, mH, nwa, nH, oH, pH, qwa, pwa, owa, qH, rwa, swa, twa, uwa, rH, vwa, wwa, ywa, xwa, sH, zwa, Bwa, Awa, tH, vH, Cwa, Dwa, wH, Ewa, yH, xH, zH, AH, BH, Fwa, CH, DH, Gwa, EH, Hwa, Iwa, Jwa, FH, Kwa, Lwa, Owa, Pwa, Mwa, GH, Rwa, Qwa,
        Swa, IH, HH, Twa, Uwa, Vwa, JH, exa, axa, gxa, mxa, LH, KH, nxa, dxa, fxa, Ywa, $wa, oxa, Zwa, cxa, hxa, Xwa, qxa, rxa, sxa, txa, uxa, MH, Wwa, jxa, lxa, kxa, ixa, NH, bxa, vxa, wxa, pxa, OH, PH, QH, zxa, RH, SH, TH, Axa, Bxa, Cxa, UH, VH, Dxa, Exa, WH, Fxa, Hxa, Gxa, XH, pva;
    dva = function(a, b) {
        switch (_.sx(b)) {
            case 1:
                "ltr" !== a.dir && (a.dir = "ltr");
                break;
            case -1:
                "rtl" !== a.dir && (a.dir = "rtl");
                break;
            default:
                a.removeAttribute("dir")
        }
    };
    eva = function(a, b, c) {
        _.Yp(a, b, "animate", c)
    };
    BG = function(a) {
        a.style.textAlign = _.zv.Ob() ? "right" : "left"
    };
    fva = function(a, b) {
        if (!(b instanceof _.qb || b instanceof _.qb)) {
            b = "object" == typeof b && b.sg ? b.Tc() : String(b);
            b: {
                var c = b;
                if (_.Hea) {
                    try {
                        var d = new URL(c)
                    } catch (e) {
                        c = "https:";
                        break b
                    }
                    c = d.protocol
                } else c: {
                    d = document.createElement("a");
                    try {
                        d.href = c
                    } catch (e) {
                        c = void 0;
                        break c
                    }
                    c = d.protocol;c = ":" === c || "" === c ? "https:" : c
                }
            }
            "javascript:" !== c || (b = "about:invalid#zClosurez");
            b = _.rb(b)
        }
        a.href = _.Lm(b)
    };
    CG = function(a) {
        return a ? "none" !== a.style.display : !1
    };
    gva = function(a, b, c) {
        if (!a || !b || "number" !== typeof c) return null;
        c = Math.pow(2, -c);
        var d = a.fromLatLngToPoint(b);
        return _.ox(a.fromPointToLatLng(new _.Q(d.x + c, d.y)), b)
    };
    hva = function(a, b, c) {
        for (var d = "string" === typeof a ? a.split("") : a, e = a.length - 1; 0 <= e; --e) e in d && b.call(c, d[e], e, a)
    };
    iva = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    _.DG = function(a, b) {
        a.classList ? a.classList.remove(b) : _.sha(a, b) && _.rha(a, Array.prototype.filter.call(a.classList ? a.classList : _.xn(a).match(/\S+/g) || [], function(c) {
            return c != b
        }).join(" "))
    };
    _.EG = function(a) {
        _.DG(a, "gmnoscreen");
        _.yn(a, "gmnoprint")
    };
    _.jva = function(a) {
        _.Qi.Wc ? a.style.styleFloat = "left" : a.style.cssFloat = "left"
    };
    FG = function(a, b) {
        a.style.WebkitBorderRadius = b;
        a.style.borderRadius = b;
        a.style.MozBorderRadius = b
    };
    kva = function(a, b) {
        a.style.WebkitBorderTopLeftRadius = b;
        a.style.WebkitBorderTopRightRadius = b;
        a.style.borderTopLeftRadius = b;
        a.style.borderTopRightRadius = b;
        a.style.MozBorderTopLeftRadius = b;
        a.style.MozBorderTopRightRadius = b
    };
    lva = function(a, b) {
        a.style.WebkitBorderBottomLeftRadius = b;
        a.style.WebkitBorderBottomRightRadius = b;
        a.style.borderBottomLeftRadius = b;
        a.style.borderBottomRightRadius = b;
        a.style.MozBorderBottomLeftRadius = b;
        a.style.MozBorderBottomRightRadius = b
    };
    mva = function(a) {
        var b = _.Zm(2);
        a.style.WebkitBorderBottomLeftRadius = b;
        a.style.WebkitBorderTopLeftRadius = b;
        a.style.borderBottomLeftRadius = b;
        a.style.borderTopLeftRadius = b;
        a.style.MozBorderBottomLeftRadius = b;
        a.style.MozBorderTopLeftRadius = b
    };
    nva = function(a) {
        var b = _.Zm(2);
        a.style.WebkitBorderBottomRightRadius = b;
        a.style.WebkitBorderTopRightRadius = b;
        a.style.borderBottomRightRadius = b;
        a.style.borderTopRightRadius = b;
        a.style.MozBorderBottomRightRadius = b;
        a.style.MozBorderTopRightRadius = b
    };
    GG = function(a, b) {
        b = b || {};
        var c = a.style;
        c.color = "black";
        c.fontFamily = "Roboto,Arial,sans-serif";
        _.Tn(a);
        _.Sn(a);
        b.title && a.setAttribute("title", b.title);
        c = _.Vn() ? 1.38 : 1;
        a = a.style;
        a.fontSize = _.Zm(b.fontSize || 11);
        a.backgroundColor = "#fff";
        for (var d = [], e = 0, f = _.Jd(b.padding); e < f; ++e) d.push(_.Zm(c * b.padding[e]));
        a.padding = d.join(" ");
        b.width && (a.width = _.Zm(c * b.width))
    };
    ova = function() {
        return _.bga.some(function(a) {
            return !!document[a]
        })
    };
    qva = function(a, b) {
        var c = pva[b];
        if (!c) {
            var d = iva(b);
            c = d;
            void 0 === a.style[d] && (d = _.zz() + _.Soa(d), void 0 !== a.style[d] && (c = d));
            pva[b] = c
        }
        return c
    };
    HG = function(a, b, c) {
        if ("string" === typeof b)(b = qva(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = qva(c, d);
                f && (c.style[f] = e)
            }
    };
    IG = function(a, b, c) {
        if (b instanceof _.$m) {
            var d = b.x;
            b = b.y
        } else d = b, b = c;
        a.style.left = _.Az(d, !1);
        a.style.top = _.Az(b, !1)
    };
    JG = function(a) {
        return 40 < a ? a / 2 - 2 : 28 > a ? a - 10 : 18
    };
    rva = function(a, b) {
        _.Wta(a, b);
        b = a.items[b];
        return {
            url: _.zm(a.bd.url, !a.bd.Hk, a.bd.Hk),
            size: a.Bd,
            scaledSize: a.bd.size,
            origin: b.Le,
            anchor: a.anchor
        }
    };
    KG = function(a, b, c, d, e, f, g) {
        this.label = a || "";
        this.alt = b || "";
        this.C = f || null;
        this.jf = c;
        this.h = d;
        this.m = e;
        this.j = g || null
    };
    uva = function(a, b) {
        var c = this;
        this.F = a;
        this.m = {};
        this.C = [];
        this.j = this.D = this.h = null;
        b = b || ["roadmap", "satellite", "hybrid", "terrain"];
        var d = _.mb(b, "terrain") && _.mb(b, "roadmap"),
            e = _.mb(b, "hybrid") && _.mb(b, "satellite");
        _.L(this, "maptypeid_changed", function() {
            var k = c.get("mapTypeId");
            c.j && c.j.set("display", "satellite" === k);
            c.h && c.h.set("display", "roadmap" === k)
        });
        _.L(this, "zoom_changed", function() {
            if (c.h) {
                var k = c.get("zoom");
                c.h.set("enabled", k <= c.D)
            }
        });
        b = _.A(b);
        for (var f = b.next(); !f.done; f = b.next())
            if (f =
                f.value, "hybrid" !== f || !e)
                if ("terrain" !== f || !d) {
                    var g = a.get(f);
                    if (g) {
                        var h = null;
                        "roadmap" === f ? d && (this.h = sva(this, "terrain", "roadmap", "terrain", void 0, "\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0443 \u0440\u0435\u043b\u044c\u0435\u0444\u0430 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u0435 \u043c\u0430\u0441\u0448\u0442\u0430\u0431."),
                            h = [
                                [this.h]
                            ], this.D = a.get("terrain").maxZoom) : "satellite" !== f && "hybrid" !== f || !e || (this.j = tva(this), h = [
                            [this.j]
                        ]);
                        this.C.push(new KG(g.name, g.alt, "mapTypeId", f, null, null, h))
                    }
                }
    };
    tva = function(a) {
        a = sva(a, "hybrid", "satellite", "labels", "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432");
        a.set("enabled", !0);
        return a
    };
    sva = function(a, b, c, d, e, f) {
        var g = a.F.get(b);
        e = new KG(e || g.name, g.alt, d, !0, !1, f);
        a.m[b] = {
            mapTypeId: c,
            Uk: d,
            value: !0
        };
        a.m[c] = {
            mapTypeId: c,
            Uk: d,
            value: !1
        };
        return e
    };
    LG = function(a) {
        this.j = a;
        this.h = null
    };
    NG = function(a) {
        _.AB.call(this, a, MG);
        _.SA(a, MG) || _.RA(a, MG, {
            options: 0
        }, ["div", , 1, 0, [" ", ["img", 8, 1, 1], " ", ["button", , 1, 2, [" ", ["img", 8, 1, 3], " ", ["img", 8, 1, 4], " ", ["img", 8, 1, 5], " "]], " ", ["button", , 1, 6, [" ", ["img", 8, 1, 7], " ", ["img", 8, 1, 8], " ", ["img", 8, 1, 9], " "]], " ", ["button", , 1, 10, [" ", ["img", 8, 1, 11], " ", ["img", 8, 1, 12], " ", ["img", 8, 1, 13], " "]], " <div> ", ["div", , , 14, ["\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c"]], " ", ["div", , , 15], " ", ["div", , , 16], " </div> "]], [], vva())
    };
    wva = function(a) {
        return _.V(a.options, "", -10)
    };
    xva = function(a) {
        return _.V(a.options, "", -7, -3)
    };
    yva = function(a) {
        return _.V(a.options, "", -8, -3)
    };
    zva = function(a) {
        return _.V(a.options, "", -9, -3)
    };
    Ava = function(a) {
        return _.V(a.options, "", -12)
    };
    Bva = function(a) {
        return _.V(a.options, "", -11)
    };
    vva = function() {
        return [
            ["$t", "t-avKK8hDgg9Q", "$a", [7, , , , , "gm-compass"]],
            ["$a", [8, , , , function(a) {
                return _.V(a.options, "", -3, -3)
            }, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "48", "width", , 1]],
            ["$a", [7, , , , , "gm-control-active", , 1], "$a", [7, , , , , "gm-compass-turn", , 1], "$a", [0, , , , wva, "aria-label", , , 1], "$a", [0, , , , wva, "title", , , 1], "$a", [0, , , , "button", "type", , 1], "$a", [22, , , , function() {
                return "compass.counterclockwise"
            }, "jsaction", , 1]],
            ["$a", [8, , , , xva, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , yva, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , zva, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [7, , , , , "gm-control-active", , 1], "$a", [7, , , , , "gm-compass-needle", , 1], "$a", [0, , , , Ava, "aria-label", , , 1], "$a", [5, 5, , , function(a) {
                return a.ub ? _.pA("-webkit-transform", "rotate(" + String(_.V(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.V(a.options, 0, -1)) + "deg)"
            }, "-webkit-transform", , , 1], "$a", [5, 5, , , function(a) {
                return a.ub ? _.pA("-ms-transform", "rotate(" + String(_.V(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.V(a.options, 0, -1)) + "deg)"
            }, "-ms-transform", , , 1], "$a", [5, 5, , , function(a) {
                return a.ub ? _.pA("-moz-transform", "rotate(" + String(_.V(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.V(a.options, 0, -1)) + "deg)"
            }, "-moz-transform", , , 1], "$a", [5, 5, , , function(a) {
                return a.ub ? _.pA("transform", "rotate(" + String(_.V(a.options, 0, -1)) + "deg)") : "rotate(" + String(_.V(a.options, 0, -1)) + "deg)"
            }, "transform", , , 1], "$a", [0, , , , Ava, "title", , , 1], "$a", [0, , , , "button", "type", , 1], "$a", [22, , , , function() {
                return "compass.north"
            }, "jsaction", , 1]],
            ["$a", [8, , , , function(a) {
                return _.V(a.options, "", -4, -3)
            }, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "20", "width", , 1]],
            ["$a", [8, , , , function(a) {
                return _.V(a.options,
                    "", -5, -3)
            }, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "20", "width", , 1]],
            ["$a", [8, , , , function(a) {
                return _.V(a.options, "", -6, -3)
            }, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "20", "width", , 1]],
            ["$a", [7, , , , , "gm-control-active", , 1], "$a", [7, , , , , "gm-compass-turn", , 1], "$a", [7, , , , , "gm-compass-turn-opposite", , 1], "$a", [0, , , , Bva, "aria-label", , , 1], "$a", [0, , , , Bva, "title", , , 1], "$a", [0, , , , "button", "type", , 1], "$a", [22, , , , function() {
                return "compass.clockwise"
            }, "jsaction", , 1]],
            ["$a", [8, , , , xva, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , yva, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [8, , , , zva, "src", , , 1], "$a", [0, , , , "", "alt", , 1], "$a", [0, , , , "false", "draggable", , 1], "$a", [0, , , , "48", "height", , 1], "$a", [0, , , , "14", "width", , 1]],
            ["$a", [7, , , , , "gm-compass-tooltip-text", , 1]],
            ["$a", [7, , , , , "gm-compass-arrow-right", , 1], "$a", [7, , , , , "gm-compass-arrow-right-outer", , 1]],
            ["$a", [7, , , , , "gm-compass-arrow-right", , 1], "$a", [7, , , , , "gm-compass-arrow-right-inner", , 1]]
        ]
    };
    OG = function(a) {
        _.F.call(this, a)
    };
    RG = function(a) {
        a = _.Oa(a);
        delete PG[a];
        _.db(PG) && QG && QG.stop()
    };
    Dva = function() {
        QG || (QG = new _.zi(function() {
            Cva()
        }, 20));
        var a = QG;
        a.isActive() || a.start()
    };
    Cva = function() {
        var a = _.Qa();
        _.rl(PG, function(b) {
            Eva(b, a)
        });
        _.db(PG) || Dva()
    };
    SG = function() {
        _.ti.call(this);
        this.h = 0;
        this.endTime = this.startTime = null
    };
    TG = function(a, b, c, d) {
        SG.call(this);
        if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.m = a;
        this.D = b;
        this.duration = c;
        this.C = d;
        this.coords = [];
        this.progress = 0
    };
    Fva = function(a) {
        if (0 == a.h) a.progress = 0, a.coords = a.m;
        else if (1 == a.h) return;
        RG(a);
        var b = _.Qa();
        a.startTime = b; - 1 == a.h && (a.startTime -= a.duration * a.progress);
        a.endTime = a.startTime + a.duration;
        a.progress || a.j("begin");
        a.j("play"); - 1 == a.h && a.j("resume");
        a.h = 1;
        var c = _.Oa(a);
        c in PG || (PG[c] = a);
        Dva();
        Eva(a, b)
    };
    Eva = function(a, b) {
        b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 < a.progress && (a.progress = 1);
        Gva(a, a.progress);
        1 == a.progress ? (a.h = 0, RG(a), a.j("finish"), a.j("end")) : 1 == a.h && a.j("animate")
    };
    Gva = function(a, b) {
        "function" === typeof a.C && (b = a.C(b));
        a.coords = Array(a.m.length);
        for (var c = 0; c < a.m.length; c++) a.coords[c] = (a.D[c] - a.m[c]) * b + a.m[c]
    };
    Hva = function(a, b) {
        _.Sh.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.progress = b.progress;
        this.state = b.h
    };
    Iva = function(a) {
        return 3 * a * a - 2 * a * a * a
    };
    VG = function(a, b, c) {
        var d = this;
        this.j = a;
        b /= 40;
        a.ra.style.transform = "scale(" + b + ")";
        a.ra.style.transformOrigin = "left";
        a.ra.dataset.controlWidth = String(Math.round(48 * b));
        a.ra.dataset.controlHeight = String(Math.round(48 * b));
        a.addListener("compass.clockwise", "click", function(e) {
            return Jva(d, e, !0)
        });
        a.addListener("compass.counterclockwise", "click", function(e) {
            return Jva(d, e, !1)
        });
        a.addListener("compass.north", "click", function(e) {
            var f = d.get("pov");
            if (f) {
                var g = _.Tm(f.heading, 360);
                Kva(d, g, 180 > g ? 0 : 360, f.pitch,
                    0);
                Lva(e)
            }
        });
        this.h = null;
        this.m = !1;
        _.xm(UG, c)
    };
    WG = function(a) {
        var b = a.get("mapSize"),
            c = a.get("panControl"),
            d = !!a.get("disableDefaultUI");
        a.j.ra.style.visibility = c || void 0 === c && !d && b && 200 <= b.width && 200 <= b.height ? "" : "hidden";
        _.M(a.j.ra, "resize")
    };
    Lva = function(a) {
        var b = _.kz(a) ? "Cmcmi" : "Cmcki";
        _.O(window, _.kz(a) ? 171336 : 171335);
        _.P(window, b)
    };
    Jva = function(a, b, c) {
        var d = a.get("pov");
        if (d) {
            var e = _.Tm(d.heading, 360);
            Kva(a, e, c ? 90 * Math.floor((e + 100) / 90) : 90 * Math.ceil((e - 100) / 90), d.pitch, d.pitch);
            Lva(b)
        }
    };
    Kva = function(a, b, c, d, e) {
        var f = new _.Xp;
        a.h && a.h.stop();
        b = a.h = new TG([b, d], [c, e], 1200, Iva);
        eva(f, b, function(g) {
            return Mva(a, !1, g)
        });
        _.Doa(f, b, "finish", function(g) {
            return Mva(a, !0, g)
        });
        Fva(b)
    };
    Mva = function(a, b, c) {
        a.m = !0;
        var d = a.get("pov");
        d && (a.set("pov", {
            heading: c.coords[0],
            pitch: c.coords[1],
            zoom: d.zoom
        }), a.m = !1, b && (a.h = null))
    };
    XG = function(a, b, c, d) {
        a.innerText = "";
        b = _.A(b ? 1 == c ? [_.dr["fullscreen_exit_normal_dark.svg"], _.dr["fullscreen_exit_hover_dark.svg"], _.dr["fullscreen_exit_active_dark.svg"]] : [_.dr["fullscreen_exit_normal.svg"], _.dr["fullscreen_exit_hover.svg"], _.dr["fullscreen_exit_active.svg"]] : 1 == c ? [_.dr["fullscreen_enter_normal_dark.svg"], _.dr["fullscreen_enter_hover_dark.svg"], _.dr["fullscreen_enter_active_dark.svg"]] : [_.dr["fullscreen_enter_normal.svg"], _.dr["fullscreen_enter_hover.svg"], _.dr["fullscreen_enter_active.svg"]]);
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var e = document.createElement("img");
            e.style.width = e.style.height = _.Zm(JG(d));
            e.src = c;
            e.alt = "";
            a.appendChild(e)
        }
    };
    Pva = function(a, b, c, d) {
        var e = this;
        this.m = a;
        this.C = d;
        this.h = b;
        this.h.style.cursor = "pointer";
        this.h.setAttribute("aria-pressed", !1);
        this.ud = c;
        this.j = ova();
        this.D = [];
        this.F = function() {
            e.ud.set(_.pda(e.m))
        };
        this.refresh = function() {
            var f = e.get("display"),
                g = !!e.get("disableDefaultUI");
            _.ez(e.h, (void 0 === f && !g || !!f) && e.j);
            _.M(e.h, "resize")
        };
        this.j && (_.xm(UG, a), this.h.setAttribute("class", "gm-control-active gm-fullscreen-control"), FG(this.h, _.Zm(_.GB(d))), this.h.style.width = this.h.style.height = _.Zm(d), _.jz(this.h,
            "0 1px 4px -1px rgba(0,0,0,0.3)"), a = this.get("controlStyle") || 0, XG(this.h, this.ud.get(), a, d), this.h.style.overflow = "hidden", _.ef(this.h, "click", function(f) {
            var g = _.kz(f) ? 164676 : 164675;
            _.P(window, _.kz(f) ? "Fscmi" : "Fscki");
            _.O(window, g);
            if (e.ud.get()) {
                f = _.A(_.$fa);
                for (g = f.next(); !g.done; g = f.next())
                    if (g = g.value, g in document) {
                        document[g]();
                        break
                    }
                e.h.setAttribute("aria-pressed", !1)
            } else {
                f = _.A(_.aga);
                for (g = f.next(); !g.done; g = f.next()) e.D.push(_.ef(document, g.value, e.F));
                f = e.m;
                g = _.A(_.cga);
                for (var h = g.next(); !h.done; h =
                    g.next())
                    if (h = h.value, h in f) {
                        f[h]();
                        break
                    }
                e.h.setAttribute("aria-pressed", !0)
            }
        }));
        _.L(this, "disabledefaultui_changed", this.refresh);
        _.L(this, "display_changed", this.refresh);
        _.L(this, "maptypeid_changed", function() {
            var f = "streetview" == e.get("mapTypeId") ? 1 : 0;
            e.set("controlStyle", f);
            e.h.style.margin = _.Zm(e.C >> 2);
            e.refresh()
        });
        _.L(this, "controlstyle_changed", function() {
            var f = e.get("controlStyle");
            null != f && (e.h.style.backgroundColor = Nva[f].backgroundColor, e.j && XG(e.h, e.ud.get(), f, e.C))
        });
        this.ud.addListener(function() {
            _.M(e.m,
                "resize");
            e.ud.get() || Ova(e);
            if (e.j) {
                var f = e.get("controlStyle") || 0;
                XG(e.h, e.ud.get(), f, e.C)
            }
        });
        this.refresh()
    };
    Ova = function(a) {
        for (var b = _.A(a.D), c = b.next(); !c.done; c = b.next()) _.We(c.value);
        a.D.length = 0
    };
    _.YG = function(a, b) {
        b = void 0 === b ? document.head : b;
        _.Tn(a);
        _.Sn(a);
        _.xm(Qva, b);
        _.yn(a, "gm-style-cc");
        a.style.position = "relative";
        b = _.Qn("div", a);
        _.Qn("div", b).style.width = _.Zm(1);
        var c = a.Ur = _.Qn("div", b);
        c.style.backgroundColor = "#f5f5f5";
        c.style.width = "auto";
        c.style.height = "100%";
        c.style.marginLeft = _.Zm(1);
        _.hz(b, .7);
        b.style.width = "100%";
        b.style.height = "100%";
        _.On(b);
        b = a.Pj = _.Qn("div", a);
        b.style.position = "relative";
        b.style.paddingLeft = b.style.paddingRight = _.Zm(6);
        b.style.boxSizing = "border-box";
        b.style.fontFamily =
            "Roboto,Arial,sans-serif";
        b.style.fontSize = _.Zm(10);
        b.style.color = "#000000";
        b.style.whiteSpace = "nowrap";
        b.style.direction = "ltr";
        b.style.textAlign = "right";
        a.style.height = _.Zm(14);
        a.style.lineHeight = _.Zm(14);
        b.style.verticalAlign = "middle";
        b.style.display = "inline-block";
        return b
    };
    ZG = function(a) {
        a.Ur && (a.Ur.style.backgroundColor = "#000", a.Pj.style.color = "#fff")
    };
    aH = function(a, b, c) {
        _.EG(a);
        _.Rn(a, 1000001);
        this.fa = a;
        this.m = c;
        this.j = _.Qn("div", a);
        this.C = _.YG(this.j, b);
        2 === c && ZG(this.j);
        a = _.cr("\u0411\u044b\u0441\u0442\u0440\u044b\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0438");
        this.C.appendChild(a);
        a.textContent = "\u0411\u044b\u0441\u0442\u0440\u044b\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0438";
        a.style.color = 1 === this.m ? "#000000" : "#fff";
        a.style.display = "inline-block";
        a.style.fontFamily = "inherit";
        a.style.lineHeight = "inherit";
        _.cz(a, "click", this);
        this.h =
            a;
        a = new Image;
        a.src = 1 === this.m ? _.dr["keyboard_icon.svg"] : _.dr["keyboard_icon_dark.svg"];
        a.alt = "";
        a.style.height = "10px";
        a.style.width = "16px";
        a.style.verticalAlign = "middle";
        this.D = a;
        $G(this)
    };
    $G = function(a) {
        _.za(function(b) {
            _.M(a.fa, "resize");
            b.h = 0
        })
    };
    Uva = function(a, b) {
        var c = this;
        this.j = a;
        this.m = b;
        this.h = document.activeElement === this.element;
        this.fa = _.Qn("div");
        this.element = Rva(this);
        Sva(this);
        _.ef(this.element, "focus", function() {
            c.h = !0;
            Tva(c)
        });
        _.ef(this.element, "blur", function() {
            c.h = !1;
            Sva(c)
        });
        _.L(this, "update", function() {
            c.h && Tva(c)
        });
        _.jf(a, "update", this)
    };
    Rva = function(a) {
        var b = _.cr("\u0411\u044b\u0441\u0442\u0440\u044b\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0438");
        a.fa.appendChild(b);
        _.Rn(b, 1000002);
        b.style.position = "absolute";
        b.style.backgroundColor = "transparent";
        b.style.border = "none";
        b.style.outlineOffset = "3px";
        _.cz(b, "click", a.j.h);
        return b
    };
    Sva = function(a) {
        a.element.style.right = "0px";
        a.element.style.bottom = "0px";
        a.element.style.transform = "translateX(100%)"
    };
    Tva = function(a) {
        var b = a.j.h.getBoundingClientRect(),
            c = b.height,
            d = b.width,
            e = b.bottom;
        b = b.right;
        var f = a.m.getBoundingClientRect(),
            g = f.bottom;
        f = f.right;
        a.element.style.transform = "";
        a.element.style.height = c + "px";
        a.element.style.width = d + "px";
        a.element.style.bottom = g - e + "px";
        a.element.style.right = f - b + "px"
    };
    bH = function(a, b, c) {
        this.fa = a;
        this.padding = void 0 === c ? 0 : c;
        this.elements = [];
        this.j = (this.h = 3 === b || 12 === b || 6 === b || 9 === b) ? hva.bind(this) : _.kb.bind(this);
        a.dataset.controlWidth = "0";
        a.dataset.controlHeight = "0"
    };
    Vva = function(a, b) {
        var c = {
            element: b,
            height: 0,
            width: 0,
            Np: _.L(b, "resize", function() {
                return void cH(a, c)
            })
        };
        return c
    };
    cH = function(a, b) {
        b.width = _.mx(b.element.dataset.controlWidth);
        b.height = _.mx(b.element.dataset.controlHeight);
        b.width || (b.width = b.element.offsetWidth);
        b.height || (b.height = b.element.offsetHeight);
        var c = 0;
        b = _.A(a.elements);
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = d.value;
            d = e.element;
            e = e.width;
            CG(d) && "hidden" !== d.style.visibility && (c = Math.max(c, e))
        }
        var f = 0,
            g = !1,
            h = a.padding;
        a.j(a.elements, function(k) {
            var l = k.element,
                m = k.height;
            k = k.width;
            CG(l) && "hidden" !== l.style.visibility && (g ? f += h : g = !0, l.style.left =
                _.Zm((c - k) / 2), l.style.top = _.Zm(f), f += m)
        });
        b = c;
        d = f;
        a.fa.dataset.controlWidth = "" + b;
        a.fa.dataset.controlHeight = "" + d;
        _.ez(a.fa, !(!b && !d));
        _.M(a.fa, "resize")
    };
    Wva = function(a, b) {
        var c = "\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f Google Maps JavaScript API. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0439.",
            d = document.createElement("div");
        d.className = "infomsg";
        a.appendChild(d);
        var e = d.style;
        e.background = "#F9EDBE";
        e.border = "1px solid #F0C36D";
        e.borderRadius = "2px";
        e.boxSizing = "border-box";
        e.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
        e.fontFamily = "Roboto,Arial,sans-serif";
        e.fontSize = "12px";
        e.fontWeight = "400";
        e.left = "10%";
        e.h = "2px";
        e.padding = "5px 14px";
        e.position = "absolute";
        e.textAlign = "center";
        e.top = "10px";
        e.webkitBorderRadius = "2px";
        e.width = "80%";
        e.zIndex = 24601;
        d.innerText = c;
        c = document.createElement("a");
        b && (d.appendChild(document.createTextNode(" ")), d.appendChild(c), c.innerText = "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435...", c.href = b, c.target = "_blank");
        b = document.createElement("a");
        d.appendChild(document.createTextNode(" "));
        d.appendChild(b);
        b.innerText = "\u0417\u0430\u043a\u0440\u044b\u0442\u044c";
        b.target = "_blank";
        c.style.paddingLeft = b.style.paddingLeft = "0.8em";
        c.style.boxSizing = b.style.boxSizing = "border-box";
        c.style.color = b.style.color = "black";
        c.style.cursor = b.style.cursor = "pointer";
        c.style.textDecoration = b.style.textDecoration = "underline";
        c.style.whiteSpace = b.style.whiteSpace = "nowrap";
        b.onclick = function() {
            a.removeChild(d)
        }
    };
    dH = function(a) {
        this.h = a.replace("www.google", "maps.google")
    };
    eH = function(a, b, c) {
        var d = this;
        this.D = a;
        this.F = c;
        this.m = _.Qn("div");
        this.m.style.margin = "0 5px";
        this.m.style.zIndex = 1E6;
        this.h = _.Qn("a");
        this.h.style.display = "inline";
        this.h.target = "_blank";
        this.h.rel = "noopener";
        this.h.title = "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u044d\u0442\u0443 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0432 Google \u041a\u0430\u0440\u0442\u0430\u0445 (\u0432 \u043d\u043e\u0432\u043e\u043c \u043e\u043a\u043d\u0435)";
        this.h.setAttribute("aria-label", "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u044d\u0442\u0443 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0432 Google \u041a\u0430\u0440\u0442\u0430\u0445 (\u0432 \u043d\u043e\u0432\u043e\u043c \u043e\u043a\u043d\u0435)");
        _.Vm(this.h, _.iy(b.get("url")));
        this.h.addEventListener("click", function(e) {
            var f = _.kz(e) ? 165230 : 165229;
            _.P(window, _.kz(e) ? "Lcmi" : "Lcki");
            _.O(window, f)
        });
        this.C = _.Qn("div");
        a = new _.Kg(66, 26);
        _.Ri(this.C, a);
        _.Tn(this.C);
        this.j = _.eF(null, this.C, _.hh, a);
        this.j.alt = "Google";
        _.L(b, "url_changed", function() {
            _.Vm(d.h, _.iy(b.get("url")))
        });
        _.L(this.D, "passivelogo_changed", function() {
            return Xva(d)
        });
        Xva(this)
    };
    Yva = function(a, b) {
        _.fF(a.j, b ? _.dr["google_logo_white.svg"] : _.dr["google_logo_color.svg"])
    };
    Xva = function(a) {
        a.F && a.D.get("passiveLogo") ? a.m.contains(a.h) ? a.m.replaceChild(a.C, a.h) : a.m.appendChild(a.C) : (a.h.appendChild(a.C), a.m.appendChild(a.h))
    };
    Zva = function(a, b, c) {
        function d() {
            var g = f.get("hasCustomStyles"),
                h = a.getMapTypeId();
            Yva(e, g || "satellite" === h || "hybrid" === h)
        }
        var e = new eH(a, b, c),
            f = a.__gm;
        _.L(f, "hascustomstyles_changed", d);
        _.L(a, "maptypeid_changed", d);
        d();
        return e
    };
    $va = function(a, b, c, d) {
        function e() {
            0 != f.get("enabled") && (null != d && f.get("active") ? f.set("value", d) : f.set("value", c))
        }
        var f = this;
        _.L(this, "value_changed", function() {
            f.set("active", f.get("value") == c)
        });
        new _.Hi(a, b, e);
        "click" == b && "button" != a.tagName.toLowerCase() && new _.Hi(a, "keydown", function(g) {
            "Enter" != g.key && " " != g.key || e()
        });
        _.L(this, "display_changed", function() {
            _.ez(a, 0 != f.get("display"))
        })
    };
    fH = function(a, b, c, d) {
        return new $va(a, b, c, d)
    };
    hH = function(a, b, c, d, e) {
        var f = this;
        this.h = _.cr(d.title);
        if (this.C = d.nt || !1) this.h.setAttribute("role", "menuitemradio"), this.h.setAttribute("aria-checked", !1);
        _.Ki(this.h);
        a.appendChild(this.h);
        _.Zx(this.h);
        this.j = this.h.style;
        this.j.overflow = "hidden";
        d.ap ? BG(this.h) : this.j.textAlign = "center";
        d.height && (this.j.height = _.Zm(d.height), this.j.display = "table-cell", this.j.verticalAlign = "middle");
        this.j.position = "relative";
        GG(this.h, d);
        d.Qm && mva(this.h);
        d.Pp && nva(this.h);
        this.h.style.webkitBackgroundClip =
            "padding-box";
        this.h.style.backgroundClip = "padding-box";
        this.h.style.MozBackgroundClip = "padding";
        this.D = d.er || !1;
        this.F = d.Qm || !1;
        _.jz(this.h, "0 1px 4px -1px rgba(0,0,0,0.3)");
        d.Fy ? (a = document.createElement("span"), a.style.position = "relative", _.Pn(a, new _.Q(3, 0), !_.zv.Ob(), !0), a.appendChild(b), this.h.appendChild(a), b = _.eF(_.zm("arrow-down"), this.h), _.Pn(b, new _.Q(8, 0), !_.zv.Ob()), b.style.top = "50%", b.style.marginTop = _.Zm(-2), this.set("active", !1), this.h.setAttribute("aria-haspopup", "true"), this.h.setAttribute("aria-expanded",
            "false")) : (this.h.appendChild(b), b = e(this.h, "click", c), b.bindTo("value", this), this.bindTo("active", b), b.bindTo("enabled", this));
        d.ny && this.h.setAttribute("aria-haspopup", "true");
        d.er && (this.j.fontWeight = "500");
        this.m = _.mx(this.j.paddingLeft) || 0;
        d.ap || (this.j.fontWeight = "500", d = this.h.offsetWidth - this.m - (_.mx(this.j.paddingRight) || 0), this.j.fontWeight = "", _.Rd(d) && 0 <= d && (this.j.minWidth = _.Zm(d)));
        new _.Hi(this.h, "click", function(g) {
            !1 !== f.get("enabled") && _.M(f, "click", g)
        });
        new _.Hi(this.h, "keydown",
            function(g) {
                !1 !== f.get("enabled") && _.M(f, "keydown", g)
            });
        new _.Hi(this.h, "blur", function(g) {
            !1 !== f.get("enabled") && _.M(f, "blur", g)
        });
        new _.Hi(this.h, "mouseover", function() {
            return gH(f, !0)
        });
        new _.Hi(this.h, "mouseout", function() {
            return gH(f, !1)
        });
        _.L(this, "enabled_changed", function() {
            return gH(f, !1)
        });
        _.L(this, "active_changed", function() {
            return gH(f, !1)
        })
    };
    gH = function(a, b) {
        var c = !!a.get("active") || a.D;
        0 == a.get("enabled") ? (a.j.color = "gray", b = c = !1) : (a.j.color = c || b ? "#000" : "#565656", a.C && a.h.setAttribute("aria-checked", c));
        a.F || (a.j.borderLeft = "0");
        _.Rd(a.m) && (a.j.paddingLeft = _.Zm(a.m));
        a.j.fontWeight = c ? "500" : "";
        a.j.backgroundColor = b ? "#ebebeb" : "#fff"
    };
    _.iH = function(a, b, c, d) {
        return new hH(a, b, c, d, fH)
    };
    jH = function(a, b, c, d, e) {
        this.h = _.Qn("li", a);
        this.h.tabIndex = -1;
        this.h.setAttribute("role", "menuitemcheckbox");
        this.h.setAttribute("aria-label", b);
        _.Ki(this.h);
        this.j = document.createElement("span");
        this.j.style["mask-image"] = 'url("' + _.dr["checkbox_checked.svg"] + '")';
        this.j.style["-webkit-mask-image"] = 'url("' + _.dr["checkbox_checked.svg"] + '")';
        this.m = document.createElement("span");
        this.m.style["mask-image"] = 'url("' + _.dr["checkbox_empty.svg"] + '")';
        this.m.style["-webkit-mask-image"] = 'url("' + _.dr["checkbox_empty.svg"] +
            '")';
        a = _.Qn("span", this.h);
        a.appendChild(this.j);
        a.appendChild(this.m);
        this.C = _.Qn("label", this.h);
        this.C.textContent = b;
        GG(this.h, e);
        b = _.zv.Ob();
        _.Zx(this.h);
        BG(this.h);
        this.m.style.height = this.j.style.height = "1em";
        this.m.style.width = this.j.style.width = "1em";
        this.m.style.transform = this.j.style.transform = "translateY(0.15em)";
        this.C.style.cursor = "inherit";
        this.h.style.backgroundColor = "#fff";
        this.h.style.whiteSpace = "nowrap";
        this.h.style[b ? "paddingLeft" : "paddingRight"] = _.Zm(8);
        awa(this, c, d);
        _.xm(bwa,
            this.h);
        _.em(this.h, "checkbox-menu-item")
    };
    awa = function(a, b, c) {
        _.dn(a, "active_changed", function() {
            var d = !!a.get("active");
            _.ez(a.j, d);
            _.ez(a.m, !d);
            a.h.setAttribute("aria-checked", d)
        });
        _.ef(a.h, "mouseover", function() {
            cwa(a, !0)
        });
        _.ef(a.h, "mouseout", function() {
            cwa(a, !1)
        });
        b = fH(a.h, "click", b, c);
        b.bindTo("value", a);
        b.bindTo("display", a);
        a.bindTo("active", b)
    };
    cwa = function(a, b) {
        a.h.style.backgroundColor = b ? "#ebebeb" : "#fff"
    };
    kH = function(a, b, c, d) {
        var e = this.h = _.Qn("li", a);
        GG(e, d);
        _.Mn(b, e);
        e.style.backgroundColor = "#fff";
        e.tabIndex = -1;
        e.setAttribute("role", "menuitemradio");
        e.setAttribute("aria-checked", !1);
        _.Ki(e);
        _.gf(this, "active_changed", this, function() {
            var f = this.get("active") || !1;
            e.style.fontWeight = f ? "500" : "";
            e.setAttribute("aria-checked", f)
        });
        _.gf(this, "enabled_changed", this, function() {
            var f = 0 != this.get("enabled");
            e.style.color = f ? "black" : "gray";
            (f = f ? d.title : d.px) && e.setAttribute("title", f)
        });
        a = fH(e, "click", c);
        a.bindTo("value",
            this);
        a.bindTo("display", this);
        a.bindTo("enabled", this);
        this.bindTo("active", a);
        _.cn(e, "mouseover", this, function() {
            0 != this.get("enabled") && (e.style.backgroundColor = "#ebebeb", e.style.color = "#000")
        });
        _.ef(e, "mouseout", function() {
            e.style.backgroundColor = "#fff";
            e.style.color = "#565656"
        })
    };
    dwa = function(a) {
        var b = _.Qn("div", a);
        b.style.margin = "1px 0";
        b.style.borderTop = "1px solid #ebebeb";
        a = this.get("display");
        b && (b.setAttribute("aria-hidden", "true"), b.style.visibility = b.style.visibility || "inherit", b.style.display = a ? "" : "none");
        _.gf(this, "display_changed", this, function() {
            _.ez(b, 0 != this.get("display"))
        })
    };
    lH = function(a, b, c, d, e, f) {
        f = f || {};
        this.G = a;
        this.D = b;
        a = this.h = _.Qn("ul", b);
        a.style.backgroundColor = "white";
        a.style.listStyle = "none";
        a.style.margin = a.style.padding = 0;
        _.Rn(a, -1);
        a.style.padding = _.Zm(2);
        lva(a, _.Zm(_.GB(d)));
        _.jz(a, "0 1px 4px -1px rgba(0,0,0,0.3)");
        f.position ? _.Pn(a, f.position, f.wA) : (a.style.position = "absolute", a.style.top = "100%", a.style.left = "0", a.style.right = "0");
        BG(a);
        _.fz(a);
        this.m = [];
        this.j = null;
        this.C = e;
        e = this.C.id || (this.C.id = _.mk());
        a.setAttribute("role", "menu");
        for (a.setAttribute("aria-labelledby",
                e); _.Jd(c);) {
            e = c.shift();
            f = _.A(e);
            for (b = f.next(); !b.done; b = f.next()) {
                b = b.value;
                var g = void 0,
                    h = {
                        title: b.alt,
                        px: b.C || void 0,
                        fontSize: JG(d),
                        padding: [1 + d >> 3]
                    };
                null != b.m ? g = new jH(a, b.label, b.h, b.m, h) : g = new kH(a, b.label, b.h, h);
                g.bindTo("value", this.G, b.jf);
                g.bindTo("display", b);
                g.bindTo("enabled", b);
                this.m.push(g)
            }
            f = _.v(c, "flat").call(c);
            f.length && (b = new dwa(a), ewa(b, e, f))
        }
    };
    ewa = function(a, b, c) {
        function d() {
            function e(f) {
                f = _.A(f);
                for (var g = f.next(); !g.done; g = f.next())
                    if (0 != g.value.get("display")) return !0;
                return !1
            }
            a.set("display", e(b) && e(c))
        }
        _.kb(b.concat(c), function(e) {
            _.L(e, "display_changed", d)
        })
    };
    hwa = function(a) {
        var b = a.h;
        if (!b.h) {
            var c = a.D;
            b.h = [_.ef(c, "mouseout", function() {
                b.timeout = window.setTimeout(function() {
                    a.set("active", !1)
                }, 1E3)
            }), _.cn(c, "mouseover", a, a.F), _.ef(document.body, "click", function(e) {
                for (e = e.target; e;) {
                    if (e == c) return;
                    e = e.parentNode
                }
                a.set("active", !1)
            }), _.ef(b, "keydown", function(e) {
                return fwa(a, e)
            }), _.ef(b, "blur", function() {
                setTimeout(function() {
                    b.contains(document.activeElement) || a.set("active", !1)
                }, 0)
            }, !0)]
        }
        _.gz(b);
        if (a.D.contains(document.activeElement)) {
            var d = _.v(a.m,
                "find").call(a.m, function(e) {
                return !1 !== e.get("display")
            });
            d && gwa(a, d)
        }
    };
    fwa = function(a, b) {
        if ("Escape" === b.key || "Esc" === b.key) a.set("active", !1);
        else {
            var c = a.m.filter(function(e) {
                    return !1 !== e.get("display")
                }),
                d = a.j ? c.indexOf(a.j) : 0;
            if ("ArrowUp" === b.key) d--;
            else if ("ArrowDown" === b.key) d++;
            else if ("Home" === b.key) d = 0;
            else if ("End" === b.key) d = c.length - 1;
            else return;
            d = (d + c.length) % c.length;
            gwa(a, c[d])
        }
    };
    gwa = function(a, b) {
        a.j = b;
        b.ib().focus()
    };
    kwa = function(a, b, c, d) {
        var e = this;
        this.h = a;
        this.h.setAttribute("role", "menubar");
        this.m = d;
        this.j = [];
        _.L(this, "fontloaded_changed", function() {
            if (e.get("fontLoaded")) {
                for (var h = e.j.length, k = 0, l = 0; l < h; ++l) {
                    var m = _.Si(e.j[l].parentNode),
                        p = l == h - 1;
                    e.j[l].ws && _.Pn(e.j[l].ws.h, new _.Q(p ? 0 : k, m.height), p);
                    k += m.width
                }
                e.j.length = 0
            }
        });
        _.L(this, "mapsize_changed", function() {
            return iwa(e)
        });
        _.L(this, "display_changed", function() {
            return iwa(e)
        });
        d = b.length;
        for (var f = 0, g = 0; g < d; ++g) f = jwa(this, c, b[g], f, 0 == g, g == d - 1);
        _.uz();
        a.style.cursor = "pointer"
    };
    jwa = function(a, b, c, d, e, f) {
        var g = document.createElement("div");
        a.h.appendChild(g);
        _.jva(g);
        _.xm(lwa, a.h);
        _.yn(g, "gm-style-mtc");
        var h = _.Mn(c.label, a.h, !0);
        b = b(g, h, c.h, {
            title: c.alt,
            padding: [0, 17],
            height: a.m,
            fontSize: JG(a.m),
            Qm: e,
            Pp: f,
            nt: !0,
            ny: !0
        });
        g.style.position = "relative";
        e = b.ib();
        new _.Hi(e, "focusin", function() {
            g.style.zIndex = 1
        });
        new _.Hi(e, "focusout", function() {
            g.style.zIndex = 0
        });
        c.jf && b.bindTo("value", a, c.jf);
        e = null;
        h = _.Si(g);
        c.j && (e = new lH(a, g, c.j, a.m, b.ib(), {
            position: new _.Q(f ? 0 : d, h.height),
            wA: f
        }), mwa(g, b, e));
        a.j.push({
            parentNode: g,
            ws: e
        });
        return d += h.width
    };
    iwa = function(a) {
        var b = a.get("mapSize");
        b = !!(a.get("display") || b && 200 <= b.width && 200 <= b.height);
        _.ez(a.h, b);
        _.M(a.h, "resize")
    };
    mwa = function(a, b, c) {
        new _.Hi(a, "click", function() {
            return c.set("active", !0)
        });
        new _.Hi(a, "mouseover", function() {
            b.get("active") && c.set("active", !0)
        });
        _.ef(b, "active_changed", function() {
            b.get("active") || c.set("active", !1)
        });
        _.L(b, "keydown", function(d) {
            "ArrowDown" !== d.key && "ArrowUp" !== d.key || c.set("active", !0)
        });
        _.L(b, "click", function(d) {
            var e = _.kz(d) ? 164753 : 164752;
            _.P(window, _.kz(d) ? "Mtcmi" : "Mtcki");
            _.O(window, e)
        })
    };
    mH = function(a, b, c) {
        var d = this;
        _.uz();
        a.style.cursor = "pointer";
        BG(a);
        a.style.width = _.Zm(120);
        _.xm(lwa, document.head);
        _.yn(a, "gm-style-mtc");
        var e = _.Mn("", a, !0),
            f = _.iH(a, e, null, {
                title: "\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0438\u043f \u043a\u0430\u0440\u0442\u044b",
                Fy: !0,
                ap: !0,
                er: !0,
                padding: [8, 17],
                fontSize: 18,
                Qm: !0,
                Pp: !0
            }),
            g = {},
            h = [b];
        b = _.A(b);
        for (var k = b.next(); !k.done; k = b.next()) k = k.value, "mapTypeId" == k.jf && (g[k.h] = k.label), k.j && h.push.apply(h, _.oa(k.j));
        this.addListener("maptypeid_changed",
            function() {
                var m = g[d.get("mapTypeId")] || "";
                e.textContent = m
            });
        var l = f.ib();
        this.h = new lH(this, a, h, c, l);
        f.addListener("click", function(m) {
            d.h.set("active", !d.h.get("active"));
            var p = _.kz(m) ? 164753 : 164752;
            _.P(window, _.kz(m) ? "Mtcmi" : "Mtcki");
            _.O(window, p)
        });
        f.addListener("keydown", function(m) {
            "ArrowDown" !== m.key && "ArrowUp" !== m.key || d.h.set("active", !0)
        });
        this.h.addListener("active_changed", function() {
            l.setAttribute("aria-expanded", !!d.h.get("active"))
        });
        this.j = a
    };
    nwa = function(a) {
        var b = a.get("mapSize");
        b = !!(a.get("display") || b && 200 <= b.width && 200 <= b.height);
        _.ez(a.j, b);
        _.M(a.j, "resize")
    };
    nH = function(a) {
        this.h = !1;
        this.map = a
    };
    oH = function(a, b, c) {
        a.get(b) !== c && (a.h = !0, a.set(b, c), a.h = !1)
    };
    pH = function(a, b, c) {
        this.j = a;
        this.Pj = _.YG(a, b.getDiv());
        this.F = owa();
        _.fz(a);
        this.h = pwa(this.Pj);
        _.ef(this.h, "click", function(d) {
            _.fn(b, "Rc");
            _.en(161529);
            var e = _.kz(d) ? 165226 : 165225;
            _.P(window, _.kz(d) ? "Rmimi" : "Rmiki");
            _.O(window, e)
        });
        this.m = b;
        this.C = "";
        this.D = c
    };
    qwa = function(a, b) {
        b ? (a.style.fontFamily = "Arial,sans-serif", a.style.fontSize = "85%", a.style.fontWeight = "bold", a.style.bottom = "1px", a.style.padding = "1px 3px") : (a.style.fontFamily = "Roboto,Arial,sans-serif", a.style.fontSize = _.Zm(10));
        a.style.color = "#000000";
        a.style.textDecoration = "none";
        a.style.position = "relative"
    };
    pwa = function(a) {
        var b = _.Qn("a");
        b.target = "_blank";
        b.rel = "noopener";
        b.title = "\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435 \u0438\u043b\u0438 \u0441\u043d\u0438\u043c\u043a\u0435";
        dva(b, "\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435 \u0438\u043b\u0438 \u0441\u043d\u0438\u043c\u043a\u0435");
        b.textContent = "\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435";
        qwa(b);
        a.appendChild(b);
        return b
    };
    owa = function() {
        var a = new Image;
        a.src = _.dr["bug_report_icon.svg"];
        a.alt = "";
        a.style.width = "12px";
        return a
    };
    qH = function(a) {
        var b = a.get("available");
        _.M(a.j, "resize");
        a.set("rmiLinkData", b ? {
            label: "\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435",
            tooltip: "\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435 \u0438\u043b\u0438 \u0441\u043d\u0438\u043c\u043a\u0435",
            url: a.C
        } : void 0)
    };
    rwa = function(a) {
        var b = a.get("available"),
            c = !1 !== a.get("enabled");
        if (void 0 === b) return !1;
        a = a.get("mapTypeId");
        return b && _.Gpa(a) && c && !_.Vn()
    };
    swa = function(a, b, c) {
        a.innerText = "";
        b = _.A(b ? [_.dr["tilt_45_normal.svg"], _.dr["tilt_45_hover.svg"], _.dr["tilt_45_active.svg"]] : [_.dr["tilt_0_normal.svg"], _.dr["tilt_0_hover.svg"], _.dr["tilt_0_active.svg"]]);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            var e = document.createElement("img");
            e.alt = "";
            e.style.width = _.Zm(JG(c));
            e.src = d;
            a.appendChild(e)
        }
    };
    twa = function(a, b, c) {
        for (var d = _.A([_.dr["rotate_right_normal.svg"], _.dr["rotate_right_hover.svg"], _.dr["rotate_right_active.svg"]]), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = document.createElement("img"),
                g = _.Zm(JG(b) + 2);
            f.alt = "";
            f.style.width = g;
            f.style.height = g;
            f.src = e;
            a.style.transform = c ? "scaleX(-1)" : "";
            a.appendChild(f)
        }
    };
    uwa = function(a) {
        var b = _.Qn("div");
        b.style.position = "relative";
        b.style.overflow = "hidden";
        b.style.width = _.Zm(3 * a / 4);
        b.style.height = _.Zm(1);
        b.style.margin = "0 5px";
        b.style.backgroundColor = "rgb(230, 230, 230)";
        return b
    };
    rH = function(a, b, c) {
        var d = this,
            e = _.Oi[43] ? "rgb(34, 34, 34)" : "rgb(255, 255, 255)";
        _.xm(UG, c);
        this.F = b;
        this.J = a;
        this.h = _.Qn("div", a);
        this.h.style.backgroundColor = e;
        _.jz(this.h, "0 1px 4px -1px rgba(0,0,0,0.3)");
        FG(this.h, _.Zm(_.GB(b)));
        this.m = _.cr("\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043a\u0430\u0440\u0442\u0443 \u043f\u043e \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0435\u043b\u043a\u0435");
        this.m.style.left = "0";
        this.m.style.top = "0";
        this.m.style.overflow = "hidden";
        this.m.setAttribute("class", "gm-control-active");
        _.Ri(this.m, new _.Kg(b, b));
        _.Tn(this.m);
        twa(this.m, b, !1);
        this.h.appendChild(this.m);
        this.G = uwa(b);
        this.h.appendChild(this.G);
        this.C = _.cr("\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043a\u0430\u0440\u0442\u0443 \u043f\u0440\u043e\u0442\u0438\u0432 \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0435\u043b\u043a\u0438");
        this.C.style.left = "0";
        this.C.style.top = "0";
        this.C.style.overflow = "hidden";
        this.C.setAttribute("class", "gm-control-active");
        _.Ri(this.C, new _.Kg(b, b));
        _.Tn(this.C);
        twa(this.C, b, !0);
        this.h.appendChild(this.C);
        this.H = uwa(b);
        this.h.appendChild(this.H);
        this.D = _.cr("\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0433\u043e\u043b \u043e\u0431\u0437\u043e\u0440\u0430");
        this.D.style.left = this.D.style.top = "0";
        this.D.style.overflow = "hidden";
        this.D.setAttribute("class", "gm-tilt gm-control-active");
        swa(this.D, !1, b);
        _.Ri(this.D, new _.Kg(b, b));
        _.Tn(this.D);
        this.h.appendChild(this.D);
        this.j = !0;
        this.m.addEventListener("click",
            function(f) {
                var g = +d.get("heading") || 0;
                d.set("heading", (g + 270) % 360);
                vwa(f)
            });
        this.C.addEventListener("click", function(f) {
            var g = +d.get("heading") || 0;
            d.set("heading", (g + 90) % 360);
            vwa(f)
        });
        this.D.addEventListener("click", function(f) {
            d.j = !d.j;
            d.set("tilt", d.j ? 45 : 0);
            var g = _.kz(f) ? 164824 : 164823;
            _.P(window, _.kz(f) ? "Tcmi" : "Tcki");
            _.O(window, g)
        });
        _.L(this, "aerialavailableatzoom_changed", function() {
            return d.refresh()
        });
        _.L(this, "tilt_changed", function() {
            d.j = 0 != d.get("tilt");
            d.refresh()
        });
        _.L(this, "mapsize_changed",
            function() {
                d.refresh()
            });
        _.L(this, "rotatecontrol_changed", function() {
            d.refresh()
        })
    };
    vwa = function(a) {
        var b = _.kz(a) ? 164822 : 164821;
        _.P(window, _.kz(a) ? "Rcmi" : "Rcki");
        _.O(window, b)
    };
    wwa = function(a, b, c) {
        a = new rH(a, b, c);
        a.bindTo("mapSize", this);
        a.bindTo("rotateControl", this);
        a.bindTo("aerialAvailableAtZoom", this);
        a.bindTo("heading", this);
        a.bindTo("tilt", this)
    };
    ywa = function(a, b, c) {
        var d = this;
        this.fa = a;
        this.j = !1;
        this.C = c;
        c = new _.Ee(9 == b.nodeType ? b : b.ownerDocument || b.document);
        this.D = _.Fe(c, "span");
        c.appendChild(b, this.D);
        this.h = _.Fe(c, "div");
        c.appendChild(b, this.h);
        xwa(this, c);
        this.m = !0;
        b = _.mk();
        c = document.createElement("span");
        c.id = b;
        c.textContent = "\u041d\u0430\u0436\u0438\u043c\u0430\u0439\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0438 \u0431\u0440\u0438\u0442\u0430\u043d\u0441\u043a\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c\u0438 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f.";
        c.style.display = "none";
        a.appendChild(c);
        a.setAttribute("aria-describedby", b);
        _.li(a, "click", function(e) {
            d.m = !d.m;
            sH(d);
            _.kz(e) ? (_.P(window, "Scmi"), _.O(window, 165091)) : (_.P(window, "Scki"), _.O(window, 167511))
        });
        _.fm(this.C, function() {
            return sH(d)
        })
    };
    xwa = function(a, b) {
        HG(a.h, "position", "relative");
        HG(a.h, "display", "inline-block");
        a.h.style.height = _.Az(8, !0);
        HG(a.h, "bottom", "-1px");
        var c = _.Fe(b, "div");
        b.appendChild(a.h, c);
        _.Bz(c, "100%", 4);
        HG(c, "position", "absolute");
        IG(c, 0, 0);
        c = _.Fe(b, "div");
        b.appendChild(a.h, c);
        _.Bz(c, 4, 8);
        IG(c, 0, 0);
        HG(c, "backgroundColor", "#fff");
        c = _.Fe(b, "div");
        b.appendChild(a.h, c);
        _.Bz(c, 4, 8);
        HG(c, "position", "absolute");
        HG(c, "backgroundColor", "#fff");
        HG(c, "right", "0px");
        HG(c, "bottom", "0px");
        c = _.Fe(b, "div");
        b.appendChild(a.h,
            c);
        HG(c, "position", "absolute");
        HG(c, "backgroundColor", "#666");
        c.style.height = _.Az(2, !0);
        HG(c, "left", "1px");
        HG(c, "bottom", "1px");
        HG(c, "right", "1px");
        c = _.Fe(b, "div");
        b.appendChild(a.h, c);
        HG(c, "position", "absolute");
        _.Bz(c, 2, 6);
        IG(c, 1, 1);
        HG(c, "backgroundColor", "#666");
        c = _.Fe(b, "div");
        b.appendChild(a.h, c);
        _.Bz(c, 2, 6);
        HG(c, "position", "absolute");
        HG(c, "backgroundColor", "#666");
        HG(c, "bottom", "1px");
        HG(c, "right", "1px")
    };
    sH = function(a) {
        var b = a.C.get();
        b && (b *= 80, b = a.m ? zwa(b / 1E3, b, !0) : zwa(b / 1609.344, 3.28084 * b, !1), a.D.textContent = b.qx + "\u00a0", a.fa.setAttribute("aria-label", b.rt), a.fa.title = b.rt, a.h.style.width = _.Az(b.Xz + 4, !0), _.M(a.fa, "resize"))
    };
    zwa = function(a, b, c) {
        var d = a,
            e = c ? "\u043a\u043c" : "\u043c\u0438\u043b.";
        1 > a && (d = b, e = c ? "\u043c" : "\u0444\u0443\u0442.");
        for (b = 1; d >= 10 * b;) b *= 10;
        d >= 5 * b && (b *= 5);
        d >= 2 * b && (b *= 2);
        d = Math.round(80 * b / d);
        var f = c ? "\u041c\u0430\u0441\u0448\u0442\u0430\u0431 \u043a\u0430\u0440\u0442\u044b: " + b + "\u00a0\u043a\u043c \u043d\u0430 " + d + " \u043f\u043a\u0441" : "\u041c\u0430\u0441\u0448\u0442\u0430\u0431 \u043a\u0430\u0440\u0442\u044b: " + b + "\u00a0\u043c\u0438 \u043d\u0430 " + d + " \u043f\u043a\u0441";
        1 > a && (f = c ? "\u041c\u0430\u0441\u0448\u0442\u0430\u0431 \u043a\u0430\u0440\u0442\u044b: " +
            b + "\u00a0\u043c \u043d\u0430 " + d + " \u043f\u043a\u0441" : "\u041c\u0430\u0441\u0448\u0442\u0430\u0431 \u043a\u0430\u0440\u0442\u044b: " + b + "\u00a0\u0444\u0442 \u043d\u0430 " + d + " \u043f\u043a\u0441");
        return {
            Xz: d,
            qx: b + " " + e,
            rt: f
        }
    };
    Bwa = function(a) {
        var b = this;
        this.h = 0;
        this.fa = document.createElement("div");
        this.fa.style.display = "inline-flex";
        this.j = new _.zi(function() {
            b.update(b.h)
        }, 0);
        this.Rh = a.Rh;
        this.Wl = Awa(this, a.Wl);
        a = _.A(this.Rh);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, c.Sb(), c = c.Md(), this.fa.appendChild(c), _.L(c, "resize", function() {
            _.Ai(b.j)
        })
    };
    Awa = function(a, b) {
        return b ? (b.every(function(c) {
            return _.v(a.Rh, "includes").call(a.Rh, c)
        }), b) : a.Rh
    };
    tH = function(a, b, c, d) {
        a.innerText = "";
        b = _.A(0 === b ? 2 === c ? [_.dr["zoom_in_normal_dark.svg"], _.dr["zoom_in_hover_dark.svg"], _.dr["zoom_in_active_dark.svg"], _.dr["zoom_in_disable_dark.svg"]] : [_.dr["zoom_in_normal.svg"], _.dr["zoom_in_hover.svg"], _.dr["zoom_in_active.svg"], _.dr["zoom_in_disable.svg"]] : 2 === c ? [_.dr["zoom_out_normal_dark.svg"], _.dr["zoom_out_hover_dark.svg"], _.dr["zoom_out_active_dark.svg"], _.dr["zoom_out_disable_dark.svg"]] : [_.dr["zoom_out_normal.svg"], _.dr["zoom_out_hover.svg"], _.dr["zoom_out_active.svg"],
            _.dr["zoom_out_disable.svg"]
        ]);
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var e = document.createElement("img");
            e.style.width = e.style.height = _.Zm(JG(d));
            e.src = c;
            e.alt = "";
            a.appendChild(e)
        }
    };
    vH = function(a, b, c, d) {
        var e = this;
        this.C = a;
        this.j = b;
        this.h = _.Qn("div", a);
        _.Tn(this.h);
        _.Sn(this.h);
        _.jz(this.h, "0 1px 4px -1px rgba(0,0,0,0.3)");
        FG(this.h, _.Zm(_.GB(b)));
        this.h.style.cursor = "pointer";
        _.xm(UG, d);
        _.ef(this.h, "mouseover", function() {
            e.set("mouseover", !0)
        });
        _.ef(this.h, "mouseout", function() {
            e.set("mouseover", !1)
        });
        this.D = Cwa(this, this.h, 0);
        this.m = _.Qn("div", this.h);
        this.m.style.position = "relative";
        this.m.style.overflow = "hidden";
        this.m.style.width = _.Zm(3 * b / 4);
        this.m.style.height = _.Zm(1);
        this.m.style.margin = "0 5px";
        this.F = Cwa(this, this.h, 1);
        _.L(this, "display_changed", function() {
            return Dwa(e)
        });
        _.L(this, "mapsize_changed", function() {
            return Dwa(e)
        });
        _.L(this, "maptypeid_changed", function() {
            var f = e.get("mapTypeId");
            e.set("controlStyle", ("satellite" === f || "hybrid" === f) && _.Oi[43] || "streetview" == f ? 2 : 1)
        });
        _.L(this, "controlstyle_changed", function() {
            var f = e.get("controlStyle");
            if (null != f) {
                var g = uH[f];
                tH(e.D, 0, f, e.j);
                tH(e.F, 1, f, e.j);
                e.h.style.backgroundColor = g.backgroundColor;
                e.m.style.backgroundColor =
                    g.qs
            }
        })
    };
    Cwa = function(a, b, c) {
        var d = _.cr(0 === c ? "\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c" : "\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c");
        b.appendChild(d);
        _.ef(d, "click", function(e) {
            var f = 0 === c ? 1 : -1;
            a.set("zoom", a.get("zoom") + f);
            f = _.kz(e) ? 164935 : 164934;
            _.P(window, _.kz(e) ? "Zcmi" : "Zcki");
            _.O(window, f)
        });
        d.setAttribute("class", "gm-control-active");
        d.style.overflow = "hidden";
        b = a.get("controlStyle");
        tH(d, c, b, a.j);
        return d
    };
    Dwa = function(a) {
        var b = a.get("mapSize");
        if (b && 200 <= b.width && 200 <= b.height || a.get("display")) {
            _.gz(a.C);
            b = a.j;
            var c = 2 * a.j + 1;
            a.h.style.width = _.Zm(b);
            a.h.style.height = _.Zm(c);
            a.C.dataset.controlWidth = String(b);
            a.C.dataset.controlHeight = String(c);
            _.M(a.C, "resize");
            b = a.D.style;
            b.width = _.Zm(a.j);
            b.height = _.Zm(a.j);
            b.left = b.top = "0";
            a.m.style.top = "0";
            b = a.F.style;
            b.width = _.Zm(a.j);
            b.height = _.Zm(a.j);
            b.left = b.top = "0"
        } else _.fz(a.C)
    };
    wH = function(a, b, c, d) {
        a = this.h = _.Qn("div");
        _.EG(a);
        b = new vH(a, b, c, d);
        b.bindTo("mapSize", this);
        b.bindTo("display", this, "display");
        b.bindTo("mapTypeId", this);
        b.bindTo("zoom", this);
        b.bindTo("zoomRange", this);
        this.xl = b
    };
    Ewa = function(a) {
        a.xl && (a.xl.unbindAll(), a.xl = null)
    };
    yH = function(a, b, c) {
        _.EG(a);
        _.Rn(a, 1000001);
        this.h = a;
        a = _.Qn("div", a);
        b = _.YG(a, b);
        this.D = a;
        a = _.cr("\u041a\u0430\u0440\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435");
        b.appendChild(a);
        a.textContent = "\u041a\u0430\u0440\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435";
        a.style.color = "#000000";
        a.style.display = "inline-block";
        a.style.fontFamily = "inherit";
        a.style.lineHeight =
            "inherit";
        _.cz(a, "click", this);
        this.m = a;
        b = _.Qn("span", b);
        b.style.display = "none";
        this.j = b;
        this.C = c;
        xH(this)
    };
    xH = function(a) {
        var b = a.get("attributionText") || "\u042d\u0442\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u043c \u043f\u0440\u0430\u0432\u043e\u043c";
        a.C && (b = b.replace("Map data", "Map Data"));
        _.lz(a.j, b);
        _.M(a.h, "resize")
    };
    zH = function(a) {
        this.m = a.ownerElement;
        this.j = document.createElement("div");
        this.j.style.color = "#222";
        this.j.style.maxWidth = "280px";
        this.h = new _.ir({
            content: this.j,
            de: a.de,
            Vc: a.Vc,
            ownerElement: this.m,
            title: "\u041a\u0430\u0440\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"
        });
        _.em(this.h.element, "copyright-dialog-view")
    };
    AH = function(a) {
        _.DG(a, "gmnoprint");
        _.yn(a, "gmnoscreen");
        this.h = a;
        a = this.j = _.Qn("div", a);
        a.style.fontFamily = "Roboto,Arial,sans-serif";
        a.style.fontSize = _.Zm(11);
        a.style.color = "#000000";
        a.style.direction = "ltr";
        a.style.textAlign = "right";
        a.style.backgroundColor = "#f5f5f5"
    };
    BH = function(a, b) {
        _.EG(a);
        _.Rn(a, 1000001);
        this.h = a;
        this.j = _.YG(a, b);
        this.m = a = _.Qn("a", this.j);
        a.style.textDecoration = "none";
        a.style.cursor = "pointer";
        a.textContent = "\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f";
        fva(a, _.Yka);
        a.target = "_blank";
        a.setAttribute("rel", "noopener");
        a.style.color = "#000000";
        a.addEventListener("click", function(c) {
            var d = _.kz(c) ? 165234 : 165233;
            _.P(window, _.kz(c) ? "Tscmi" : "Tscki");
            _.O(window, d)
        })
    };
    Fwa = function(a, b, c, d) {
        var e = c instanceof _.ch;
        e = new aH(_.Qn("div"), a, e ? 2 : 1);
        e.bindTo("keyboardShortcutsShown", this);
        e.bindTo("fontLoaded", this);
        d = new yH(document.createElement("div"), a, d);
        d.bindTo("attributionText", this);
        d.bindTo("fontLoaded", this);
        d.bindTo("isCustomPanorama", this);
        var f = c.__gm.get("innerContainer"),
            g = new zH({
                Vc: a,
                de: function() {
                    _.Wn(f).catch(function() {})
                },
                ownerElement: b
            });
        g.bindTo("attributionText", this);
        _.L(d, "click", function(h) {
            g.set("visible", !0);
            var k = _.kz(h) ? 165049 : 165048;
            _.P(window,
                _.kz(h) ? "Ccmi" : "Ccki");
            _.O(window, k)
        });
        b = new AH(document.createElement("div"));
        b.bindTo("attributionText", this);
        a = new BH(document.createElement("div"), a);
        a.bindTo("fontLoaded", this);
        a.bindTo("mapTypeId", this);
        d.bindTo("mapTypeId", this);
        c && _.Oi[28] ? (d.bindTo("hidden", c, "hideLegalNotices"), b.bindTo("hidden", c, "hideLegalNotices"), a.bindTo("hidden", c, "hideLegalNotices")) : (d.bindTo("isCustomPanorama", this), b.bindTo("hidden", this, "isCustomPanorama"));
        this.j = d;
        this.m = b;
        this.C = a;
        this.h = e
    };
    CH = function(a) {
        this.h = a
    };
    DH = function(a, b) {
        this.j = b;
        this.h = [];
        _.Tn(a);
        _.Sn(a);
        a.style.fontFamily = "Roboto,Arial,sans-serif";
        a.style.fontSize = _.Zm(Math.round(11 * b / 40));
        a.style.textAlign = "center";
        _.jz(a, "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px");
        a.dataset.controlWidth = String(b);
        a.style.cursor = "pointer";
        this.fa = a
    };
    Gwa = function(a, b, c) {
        _.ef(b, "mouseover", function() {
            b.style.color = "#bbb";
            b.style.fontWeight = "bold"
        });
        _.ef(b, "mouseout", function() {
            b.style.color = "#999";
            b.style.fontWeight = "400"
        });
        _.cn(b, "click", a, function(d) {
            a.set("pano", c);
            var e = _.kz(d) ? 171224 : 171223;
            _.P(window, _.kz(d) ? "Ecmi" : "Ecki");
            _.O(window, e)
        })
    };
    EH = function(a, b) {
        var c = this;
        this.D = a;
        _.yn(a, "gm-svpc");
        a.setAttribute("dir", "ltr");
        a.setAttribute("title", "\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0443, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0435\u0436\u0438\u043c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0443\u043b\u0438\u0446");
        a.style.backgroundColor = "#fff";
        this.j = {
            To: null,
            active: null,
            So: null
        };
        this.h = b;
        this.m = !0;
        Hwa(this);
        this.set("position", _.uG.Lt.offset);
        _.cn(a, "mouseover", this, this.F);
        _.cn(a, "mouseout", this, this.G);
        a = this.C = new _.sF(a);
        a.bindTo("position", this);
        _.jf(a, "dragstart", this);
        _.jf(a, "drag", this);
        _.jf(a, "dragend", this);
        _.L(a, "dragend", function() {
            c.set("position", _.uG.Lt.offset);
            _.P(window, "Pcmi");
            _.O(window, 165115)
        });
        _.L(this, "mode_changed", function() {
            var d = c.get("mode");
            c.C.get("enabled") || c.C.set("enabled", !0);
            Iwa(c, d)
        });
        _.L(this, "display_changed", function() {
            return Jwa(c)
        });
        _.L(this, "mapsize_changed", function() {
            return Jwa(c)
        });
        this.set("mode", 1)
    };
    Hwa = function(a) {
        for (var b in a.j) {
            var c = a.j[b];
            c && c.parentNode && _.Be(c);
            a.j[b] = null
        }
        b = a.D;
        if (a.m) {
            _.gz(b);
            c = new _.Kg(a.h, a.h);
            _.jz(b, "0 1px 4px -1px rgba(0,0,0,0.3)");
            FG(b, _.Zm(40 < a.h ? Math.round(a.h / 20) : 2));
            b.style.width = _.Zm(c.width);
            b.style.height = _.Zm(c.height);
            var d = 32 > a.h ? a.h - 2 : 40 > a.h ? 30 : 10 + a.h / 2,
                e = _.Qn("div", b);
            e.style.position = "absolute";
            e.style.left = "50%";
            e.style.top = "50%";
            var f = _.ze("IMG");
            a.j.To = f;
            f.src = _.dr["pegman_dock_normal.svg"];
            f.style.width = f.style.height = _.Zm(d);
            f.style.position =
                "absolute";
            f.style.transform = "translate(-50%, -50%)";
            f.alt = "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u043a\u043e\u043c \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0443\u043b\u0438\u0446";
            f.style.pointerEvents = "none";
            e.appendChild(f);
            f = _.ze("IMG");
            a.j.active = f;
            f.src = _.dr["pegman_dock_active.svg"];
            f.style.display = "none";
            f.style.width = f.style.height = _.Zm(d);
            f.style.position = "absolute";
            f.style.transform = "translate(-50%, -50%)";
            f.alt = "\u0427\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u043a \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430\u0434 \u043a\u0430\u0440\u0442\u043e\u0439";
            f.style.pointerEvents = "none";
            e.appendChild(f);
            f = _.ze("IMG");
            a.j.So = f;
            f.style.display = "none";
            f.style.width = f.style.height = _.Zm(4 * d / 3);
            f.style.position = "absolute";
            f.style.transform = "translate(-60%, -45%)";
            f.style.pointerEvents = "none";
            f.alt = "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u043a\u043e\u043c \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0443\u043b\u0438\u0446";
            e.appendChild(f);
            f.src = _.dr["pegman_dock_hover.svg"];
            b.dataset.controlWidth = String(c.width);
            b.dataset.controlHeight = String(c.height);
            _.M(b, "resize");
            Iwa(a, a.get("mode"))
        } else _.fz(b), _.M(b, "resize")
    };
    Iwa = function(a, b) {
        a.m && (a = a.j, a.To.style.display = a.So.style.display = a.active.style.display = "none", 1 == b ? a.To.style.display = "" : 2 == b ? a.So.style.display = "" : a.active.style.display = "")
    };
    Jwa = function(a) {
        var b = a.get("mapSize");
        b = !!a.get("display") || !!(b && 200 <= b.width && b && 200 <= b.height);
        a.m != b && (a.m = b, Hwa(a))
    };
    FH = function(a) {
        var b = this;
        this.C = 0;
        this.H = this.F = -1;
        this.m = 0;
        this.D = this.G = null;
        a = {
            clickable: !1,
            crossOnDrag: !1,
            draggable: !0,
            map: a,
            mapOnly: !0,
            pegmanMarker: !0,
            zIndex: 1E6
        };
        this.N = _.uG.Wg;
        this.T = _.uG.xA;
        this.j = _.Tf("mode");
        this.h = _.Uf("mode");
        this.K = Kwa(a);
        var c = new _.dh(a);
        this.fp = c;
        var d = new _.dh(a);
        this.J = d;
        this.h(1);
        this.set("heading", 0);
        c.bindTo("icon", this, "lilypadIcon");
        _.L(this, "position_changed", function() {
            c.set("position", b.get("position"))
        });
        c.bindTo("dragging", this);
        d.set("cursor", _.tka);
        d.set("icon", rva(this.T, 0));
        _.L(this, "dragposition_changed", function() {
            d.set("position", b.get("dragPosition"))
        });
        d.bindTo("dragging", this);
        _.L(this, "dragstart", this.Je);
        _.L(this, "drag", this.Pf);
        _.L(this, "dragend", this.kf);
        Lwa(this)
    };
    Kwa = function(a) {
        return new _.x.Promise(function(b) {
            var c;
            return _.za(function(d) {
                if (1 == d.h) return _.ua(d, _.Oe("marker"), 2);
                c = new _.dh(a);
                c.setDraggable(!0);
                b(c);
                d.h = 0
            })
        })
    };
    Lwa = function(a) {
        var b;
        _.za(function(c) {
            if (1 == c.h) return _.ua(c, a.K, 2);
            b = c.j;
            b.bindTo("icon", a, "pegmanIcon");
            b.bindTo("position", a, "dragPosition");
            b.bindTo("dragging", a);
            _.jf(b, "dragstart", a);
            _.jf(b, "drag", a);
            _.jf(b, "dragend", a);
            c.h = 0
        })
    };
    Owa = function(a) {
        var b, c, d;
        return _.za(function(e) {
            if (1 == e.h) return b = a.j(), c = _.kF(b), _.ua(e, a.K, 2);
            d = e.j;
            d.setVisible(c || 7 === b);
            var f = a.set;
            if (c) {
                var g = a.j() - 3;
                g = rva(a.N, g)
            } else 7 === b ? (g = Mwa(a), a.H !== g && (a.H = g, a.G = {
                url: Nwa[g],
                scaledSize: new _.Kg(49, 52),
                anchor: new _.Q(25, 35)
            }), g = a.G) : g = void 0;
            f.call(a, "pegmanIcon", g);
            e.h = 0
        })
    };
    Pwa = function(a) {
        a.fp.setVisible(!1);
        a.J.setVisible(_.kF(a.j()))
    };
    Mwa = function(a) {
        (a = _.mx(a.get("heading")) % 360) || (a = 0);
        0 > a && (a += 360);
        return Math.round(a / 360 * 16) % 16
    };
    GH = function(a, b, c, d, e, f, g, h, k, l) {
        this.map = a;
        this.config = f;
        this.C = e;
        this.va = g;
        this.controlSize = h;
        this.mg = l || null;
        this.G = d;
        this.m = this.j = !1;
        this.D = null;
        this.En(1);
        Qwa(this, c, b);
        this.overlay = new _.uF(k);
        k || (this.overlay.bindTo("mapHeading", this), this.overlay.bindTo("tilt", this));
        this.overlay.bindTo("client", this);
        this.overlay.bindTo("client", a, "svClient");
        this.h = this.F = null;
        this.offset = _.xF(c, d)
    };
    Rwa = function(a, b) {
        return _.Od(b - (a || 0), 0, 360)
    };
    Qwa = function(a, b, c) {
        var d = a.map.__gm,
            e = new EH(b, a.controlSize);
        e.bindTo("mode", a);
        e.bindTo("mapSize", a);
        e.bindTo("display", a);
        a.marker = new FH(a.map);
        a.marker.bindTo("mode", a);
        a.marker.bindTo("dragPosition", a);
        a.marker.bindTo("position", a);
        var f = new _.jF(["mapHeading", "streetviewHeading"], "heading", Rwa);
        f.bindTo("streetviewHeading", a, "heading");
        f.bindTo("mapHeading", a.map, "heading");
        a.marker.bindTo("heading", f);
        a.bindTo("pegmanDragging", a.marker, "dragging");
        d.bindTo("pegmanDragging", a);
        _.gf(e, "dragstart",
            a,
            function() {
                a.offset = _.xF(b, a.G);
                _.Oe("streetview").then(function(k) {
                    if (!a.F) {
                        var l = (0, _.Pa)(a.C.getUrl, a.C),
                            m = d.get("panes");
                        k = a.F = new k.Pv(m.floatPane, l, a.config);
                        k.bindTo("description", a);
                        k.bindTo("mode", a);
                        k.bindTo("thumbnailPanoId", a, "panoId");
                        k.bindTo("pixelBounds", d);
                        l = new _.iF(function(p) {
                            p = new _.Aq(a.map, a.va, p);
                            a.va.Ab(p);
                            return p
                        });
                        l.bindTo("latLngPosition", a.marker, "dragPosition");
                        k.bindTo("pixelPosition", l)
                    }
                })
            });
        f = {};
        for (var g = _.A(["dragstart", "drag", "dragend"]), h = g.next(); !h.done; f = {
                zl: f.zl
            }, h = g.next()) f.zl = h.value, _.L(e, f.zl, function(k) {
            return function() {
                _.M(a.marker, k.zl, {
                    latLng: a.marker.get("position"),
                    pixel: e.get("position")
                })
            }
        }(f));
        _.L(e, "position_changed", function() {
            var k = e.get("position");
            (k = c({
                clientX: k.x + a.offset.x,
                clientY: k.y + a.offset.y
            })) && a.marker.set("dragPosition", k)
        });
        _.L(a.marker, "dragend", function() {
            Swa(a, !1)
        });
        _.L(a.marker, "hover", function() {
            Swa(a, !0)
        })
    };
    Swa = function(a, b) {
        var c = a.get("dragPosition"),
            d = a.map.getZoom(),
            e = Math.max(50, 35 * Math.pow(2, 16 - d));
        a.set("hover", b);
        a.m = !1;
        _.Oe("streetview").then(function(f) {
            var g = a.mg || void 0;
            a.h || (a.h = new f.Ov(g), a.bindTo("sloTrackingId", a.h, "sloTrackingId", !0), a.bindTo("isHover", a.h, "isHover", !0), a.h.bindTo("result", a, null, !0));
            a.h.getPanoramaByLocation(c, e, g ? void 0 : 100 > e ? "nearest" : "best", b)
        })
    };
    IH = function(a, b) {
        this.fa = a;
        this.h = b;
        HH() ? Twa(a) : (b = a, a = _.YG(a), ZG(b));
        this.anchor = _.Qn("a", a);
        HH() ? qwa(this.anchor, !0) : (this.anchor.style.textDecoration = "none", this.anchor.style.color = "#fff");
        this.anchor.setAttribute("target", "_new");
        a = (HH(), "\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435");
        _.Mn(a, this.anchor);
        this.anchor.setAttribute("title", '\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c Google \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435 \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u0435 "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0443\u043b\u0438\u0446"');
        _.ef(this.anchor, "click", function(c) {
            var d = _.kz(c) ? 171380 : 171379;
            _.P(window, _.kz(c) ? "Tdcmi" : "Tdcki");
            _.O(window, d)
        });
        dva(this.anchor, '\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c Google \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435 \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u0435 "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0443\u043b\u0438\u0446"')
    };
    HH = function() {
        return "CH" === _.sd(_.xd(_.gg))
    };
    Twa = function(a) {
        _.EG(a);
        a.style.fontSize = "10px";
        a.style.height = "17px";
        a.style.backgroundColor = "#f5f5f5";
        a.style.border = "1px solid #dcdcdc";
        a.style.lineHeight = "19px"
    };
    Uwa = function(a) {
        a = {
            content: (new _.AF({
                kg: a.kg,
                lg: a.lg,
                ownerElement: a.ownerElement,
                sl: !0,
                Gi: a.Gi
            })).element,
            de: a.de,
            Vc: a.Vc,
            ownerElement: a.ownerElement,
            title: "\u0411\u044b\u0441\u0442\u0440\u044b\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0438"
        };
        a = new _.ir(a);
        _.em(a.element, "keyboard-shortcuts-dialog-view");
        return a
    };
    Vwa = function() {
        return "@media print {  .gm-style .gmnoprint, .gmnoprint {    display:none  }}@media screen {  .gm-style .gmnoscreen, .gmnoscreen {    display:none  }}"
    };
    JH = function(a) {
        var b = this;
        this.Da = new _.zi(function() {
            b.G[1] && Wwa(b);
            b.G[0] && Xwa(b);
            b.G[3] && Ywa(b);
            b.G = {};
            b.get("disableDefaultUI") && !b.j && (_.P(b.h, "Cdn"), _.O(b.h, 148245))
        }, 0);
        this.H = a.tt || null;
        this.Y = a.yg;
        this.La = a.Xy || null;
        this.C = a.controlSize;
        this.kb = a.Rw || null;
        this.h = a.map || null;
        this.j = a.UA || null;
        this.Sa = this.h || this.j;
        this.pc = a.xu;
        this.Oc = a.TA || null;
        this.Nc = a.va || null;
        this.jb = !!a.Jy;
        this.Ed = !!a.lg;
        this.yc = !!a.kg;
        this.Tb = this.wb = this.Bb = !1;
        this.F = this.xc = this.da = this.ia = null;
        this.K = a.wo;
        this.sb =
            _.cr("\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c");
        this.V = null;
        this.Ac = a.zm;
        this.N = null;
        this.Ya = !1;
        this.Ba = [];
        this.X = null;
        this.dd = {};
        this.G = {};
        this.W = this.ba = this.aa = this.ta = null;
        this.Va = _.Qn("div");
        this.J = null;
        this.Ja = !1;
        _.Tn(this.Va);
        _.Zn(Vwa, this.K);
        var c = this.rb = new dH(_.pd(_.xd(_.gg).o, 15));
        c.bindTo("center", this);
        c.bindTo("zoom", this);
        c.bindTo("mapTypeId", this);
        c.bindTo("pano",
            this);
        c.bindTo("position", this);
        c.bindTo("pov", this);
        c.bindTo("heading", this);
        c.bindTo("tilt", this);
        a.map && _.L(c, "url_changed", function() {
            a.map.set("mapUrl", c.get("url"))
        });
        var d = new CH(_.xd(_.gg));
        d.bindTo("center", this);
        d.bindTo("zoom", this);
        d.bindTo("mapTypeId", this);
        d.bindTo("pano", this);
        d.bindTo("heading", this);
        this.ed = d;
        Zwa(this);
        this.D = $wa(this);
        this.T = null;
        axa(this);
        this.Z = null;
        bxa(this);
        this.m = null;
        a.ou && cxa(this);
        Ywa(this);
        dxa(this, a.ds);
        this.ia = new Uva(this.D.h, this.Y);
        this.Y.insertBefore(this.ia.fa,
            this.Y.children[0]);
        this.Fd = exa(this);
        this.keyboardShortcuts_changed();
        _.Oi[35] && fxa(this);
        gxa(this)
    };
    exa = function(a) {
        if (a.h) {
            var b = [a.D.h, a.D.j, a.D.m, a.Z, a.D.C];
            a.m && b.push(a.m)
        } else b = [a.D.h, a.D.j, a.D.m, a.D.C, a.T];
        b = new Bwa({
            Rh: b
        });
        a.H.addElement(b.fa, 12, !0);
        return b
    };
    axa = function(a) {
        if (a.j) {
            var b = document.createElement("div");
            a.T = new IH(b, a.pc);
            a.T.bindTo("pov", a.j);
            a.T.bindTo("pano", a.j);
            a.T.bindTo("takeDownUrl", a.j);
            a.j.set("rmiWidth", b.offsetWidth);
            _.Oi[17] && (a.T.bindTo("visible", a.j, "reportErrorControl"), a.j.bindTo("rmiLinkData", a.T))
        }
    };
    gxa = function(a) {
        _.Oe("util").then(function(b) {
            b.tf.h(function() {
                a.Ja = !0;
                hxa(a);
                a.J && (a.J.set("display", !1), a.J.unbindAll(), a.J = null)
            })
        })
    };
    mxa = function(a) {
        if (ixa(a) != a.xc || jxa(a) != a.Bb || kxa(a) != a.Tb || KH(a) != a.Ya || lxa(a) != a.wb) a.G[1] = !0;
        a.G[0] = !0;
        _.Ai(a.Da)
    };
    LH = function(a) {
        return a.get("disableDefaultUI")
    };
    KH = function(a) {
        var b = a.get("streetViewControl"),
            c = a.get("disableDefaultUI"),
            d = !!a.get("size");
        if (void 0 !== b || c) _.P(a.h, b ? "Cvy" : "Cvn"), _.O(a.h, b ? 148260 : 148261);
        null == b && (b = !c);
        a = d && !a.j;
        return b && a
    };
    nxa = function(a) {
        return !a.get("disableDefaultUI") && !!a.j
    };
    dxa = function(a, b) {
        var c = a.H;
        _.kb(b, function(d, e) {
            if (d) {
                var f = function(g) {
                    if (g) {
                        var h = g.index;
                        _.Rd(h) || (h = 1E3);
                        h = Math.max(h, -999);
                        _.Rn(g, Math.min(999999, _.mx(g.style.zIndex || 0)));
                        c.addElement(g, e, !1, h)
                    }
                };
                d.forEach(f);
                _.L(d, "insert_at", function(g) {
                    f(d.getAt(g))
                });
                _.L(d, "remove_at", function(g, h) {
                    c.nf(h)
                })
            }
        })
    };
    fxa = function(a) {
        if (a.h) {
            var b = new LG(document.createElement("div"));
            b.bindTo("card", a.h.__gm);
            b = b.getDiv();
            a.H.addElement(b, 1, !0, .1)
        }
    };
    Ywa = function(a) {
        a.V && (a.V.unbindAll(), Ova(a.V), a.V = null, a.H.nf(a.sb));
        var b = _.cr("\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c"),
            c = new Pva(a.K, b, a.Ac, a.C);
        c.bindTo("display", a, "fullscreenControl");
        c.bindTo("disableDefaultUI", a);
        c.bindTo("mapTypeId", a);
        var d = a.get("fullscreenControlOptions") || {};
        a.H.addElement(b, d && d.position || 7, !0, -1007);
        a.V = c;
        a.sb = b
    };
    $wa = function(a) {
        var b = new Fwa(a.Y, a.K, a.Sa, a.jb);
        b.bindTo("size", a);
        b.bindTo("rmiWidth", a);
        b.bindTo("attributionText", a);
        b.bindTo("fontLoaded", a);
        b.bindTo("mapTypeId", a);
        b.bindTo("isCustomPanorama", a);
        b.bindTo("logoWidth", a);
        b.h.addListener("click", function(c) {
            a.da || (a.da = oxa(a));
            a.Sa.__gm.get("developerProvidedDiv").appendChild(a.da.element);
            a.da.show();
            var d = _.kz(c) ? 164970 : 164969;
            _.P(window, _.kz(c) ? "Kscmi" : "Kscki");
            _.O(window, d)
        });
        return b
    };
    oxa = function(a) {
        var b = a.Sa.__gm,
            c = b.get("innerContainer"),
            d = b.get("developerProvidedDiv"),
            e = Uwa({
                kg: a.yc,
                lg: a.Ed,
                de: function() {
                    _.Wn(c).catch(function() {})
                },
                Vc: a.Y,
                ownerElement: d,
                Gi: a.h ? "map" : "street_view"
            });
        e.addListener("hide", function() {
            d.removeChild(e.element)
        });
        return e
    };
    Zwa = function(a) {
        if (!_.Oi[2]) {
            var b = !!_.Oi[21];
            a.h ? b = Zva(a.h, a.rb, b) : (b = new eH(a.j, a.rb, b), Yva(b, !0));
            b = b.getDiv();
            a.H.addElement(b, 10, !0, -1E3);
            a.set("logoWidth", b.offsetWidth)
        }
    };
    cxa = function(a) {
        if (a.h) {
            var b = _.xd(_.gg);
            a.m = new pH(document.createElement("div"), a.h, _.pd(b.o, 15));
            a.m.bindTo("available", a, "rmiAvailable");
            a.m.bindTo("bounds", a);
            _.Oi[17] ? (a.m.bindTo("enabled", a, "reportErrorControl"), a.h.bindTo("rmiLinkData", a.m)) : a.m.set("enabled", !0);
            a.m.bindTo("mapTypeId", a);
            a.m.bindTo("sessionState", a.ed);
            a.bindTo("rmiWidth", a.m, "width");
            _.L(a.m, "rmilinkdata_changed", function() {
                var c = a.m.get("rmiLinkData");
                a.h.set("rmiUrl", c && c.url)
            })
        }
    };
    hxa = function(a) {
        a.la && (a.la.unbindAll && a.la.unbindAll(), a.la = null);
        a.ta && (a.ta.unbindAll(), a.ta = null);
        a.aa && (a.aa.unbindAll(), a.aa = null);
        a.X && (pxa(a, a.X), _.zj(a.X.ra), a.X = null)
    };
    Xwa = function(a) {
        hxa(a);
        if (a.La && !a.Ja) {
            var b = qxa(a);
            if (b) {
                var c = _.Qn("div");
                _.EG(c);
                c.style.margin = _.Zm(a.C >> 2);
                _.ef(c, "mouseover", function() {
                    _.Rn(c, 1E6)
                });
                _.ef(c, "mouseout", function() {
                    _.Rn(c, 0)
                });
                _.Rn(c, 0);
                var d = a.get("mapTypeControlOptions") || {},
                    e = a.aa = new uva(a.La, d.mapTypeIds);
                e.bindTo("aerialAvailableAtZoom", a);
                e.bindTo("zoom", a);
                var f = e.C;
                a.H.addElement(c, d.position || 1, !1, .2);
                d = null;
                2 == b ? (d = new mH(c, f, a.C), e.bindTo("mapTypeId", d)) : d = new kwa(c, f, _.iH, a.C);
                b = a.ta = new nH(e.m);
                b.set("labels", !0);
                d.bindTo("mapTypeId", b, "internalMapTypeId");
                d.bindTo("labels", b);
                d.bindTo("terrain", b);
                d.bindTo("tilt", a, "desiredTilt");
                d.bindTo("fontLoaded", a);
                d.bindTo("mapSize", a, "size");
                d.bindTo("display", a, "mapTypeControl");
                b.bindTo("mapTypeId", a);
                _.M(c, "resize");
                a.X = {
                    ra: c,
                    Em: null
                };
                a.la = d
            }
        }
    };
    qxa = function(a) {
        if (!a.La) return null;
        var b = (a.get("mapTypeControlOptions") || {}).style || 0,
            c = a.get("mapTypeControl"),
            d = LH(a);
        if (void 0 === c && d || void 0 !== c && !c) return _.P(a.h, "Cmn"), _.O(a.h, 148251), null;
        1 == b ? (_.P(a.h, "Cmh"), _.O(a.h, 148253)) : 2 == b && (_.P(a.h, "Cmd"), _.O(a.h, 148252));
        return 2 == b || 1 == b ? b : 1
    };
    rxa = function(a, b) {
        b = a.N = new wH(b, a.C, _.zv.Ob(), a.K);
        b.bindTo("zoomRange", a);
        b.bindTo("display", a, "zoomControl");
        b.bindTo("disableDefaultUI", a);
        b.bindTo("mapSize", a, "size");
        b.bindTo("mapTypeId", a);
        b.bindTo("zoom", a);
        return b.getDiv()
    };
    sxa = function(a) {
        var b = new _.FB(NG, {
                si: _.zv.Ob()
            }),
            c = new VG(b, a.C, a.K);
        c.bindTo("pov", a);
        c.bindTo("disableDefaultUI", a);
        c.bindTo("panControl", a);
        c.bindTo("mapSize", a, "size");
        return b.ra
    };
    txa = function(a) {
        var b = _.Qn("div");
        _.EG(b);
        a.F = new wwa(b, a.C, a.K);
        a.F.bindTo("mapSize", a, "size");
        a.F.bindTo("rotateControl", a);
        a.F.bindTo("heading", a);
        a.F.bindTo("tilt", a);
        a.F.bindTo("aerialAvailableAtZoom", a);
        return b
    };
    uxa = function(a) {
        var b = _.Qn("div"),
            c = a.ba = new DH(b, a.C);
        c.bindTo("pano", a);
        c.bindTo("floors", a);
        c.bindTo("floorId", a);
        return b
    };
    MH = function(a) {
        a.G[1] = !0;
        _.Ai(a.Da)
    };
    Wwa = function(a) {
        function b(m, p) {
            if (!l[m]) {
                var q = a.C >> 2,
                    r = 12 + (a.C >> 1),
                    t = document.createElement("div");
                _.EG(t);
                _.yn(t, "gm-bundled-control");
                10 === m || 11 === m || 12 === m || 6 === m || 9 === m ? _.yn(t, "gm-bundled-control-on-bottom") : _.DG(t, "gm-bundled-control-on-bottom");
                t.style.margin = _.Zm(q);
                _.Sn(t);
                l[m] = new bH(t, m, r);
                a.H.addElement(t, m, !1, .1)
            }
            m = l[m];
            m.add(p);
            a.Ba.push({
                ra: p,
                Em: m
            })
        }

        function c(m) {
            return (a.get(m) || {}).position
        }
        a.N && (Ewa(a.N), a.N.unbindAll(), a.N = null);
        a.F && (a.F.unbindAll(), a.F = null);
        a.ba && (a.ba.unbindAll(),
            a.ba = null);
        for (var d = _.A(a.Ba), e = d.next(); !e.done; e = d.next()) pxa(a, e.value);
        a.Ba = [];
        d = a.Bb = jxa(a);
        var f = a.xc = ixa(a),
            g = a.Ya = KH(a),
            h = a.Tb = kxa(a);
        a.wb = lxa(a);
        e = d && (c("panControlOptions") || 9);
        d = f && (c("zoomControlOptions") || 3 == f && 6 || 9);
        var k = 3 == f || _.Vn();
        g = g && (c("streetViewControlOptions") || 9);
        h = h && (c("rotateControlOptions") || k && 6 || 9);
        var l = a.dd;
        d && (f = rxa(a, f), b(d, f));
        g && (vxa(a), b(g, a.Va));
        e && a.j && _.wn().transform && (f = sxa(a), b(e, f));
        h && (e = txa(a), b(h, e));
        a.W && (a.W.remove(), a.W = null);
        if (e = nxa(a) && 9) f = uxa(a),
            b(e, f);
        a.F && a.N && a.N.xl && h == d && a.F.bindTo("mouseover", a.N.xl);
        d = _.A(a.Ba);
        for (e = d.next(); !e.done; e = d.next()) _.M(e.value.ra, "resize")
    };
    jxa = function(a) {
        var b = a.get("panControl"),
            c = LH(a);
        if (void 0 !== b || c) return a.j || (_.P(a.h, b ? "Cpy" : "Cpn"), _.O(a.h, b ? 148255 : 148254)), !!b;
        b = a.get("size");
        return _.Vn() || !b ? !1 : 400 <= b.width && 370 <= b.height || !!a.j
    };
    lxa = function(a) {
        return a.j ? !1 : LH(a) ? 1 == a.get("myLocationControl") : 0 != a.get("myLocationControl")
    };
    kxa = function(a) {
        var b = a.get("rotateControl"),
            c = LH(a);
        if (void 0 !== b || c) _.P(a.h, b ? "Cry" : "Crn"), _.O(a.h, b ? 148257 : 148256);
        return !a.get("size") || a.j ? !1 : c ? 1 == b : 0 != b
    };
    ixa = function(a) {
        var b = a.get("zoomControl"),
            c = LH(a);
        return 0 == b || c && void 0 === b ? (a.j || (_.P(a.h, "Czn"), _.O(a.h, 148262)), null) : a.get("size") ? 1 : null
    };
    NH = function(a) {
        if (a.Z) {
            var b = a.get("scaleControl");
            void 0 !== b && (_.P(a.h, b ? "Csy" : "Csn"), _.O(a.h, b ? 148259 : 148258));
            b ? (a = a.Z, a.j = !0, sH(a)) : (a = a.Z, a.j = !1, sH(a))
        }
    };
    bxa = function(a) {
        if (a.h) {
            var b = _.cr("Map Scale");
            _.Sn(b);
            _.Tn(b);
            a.Z = new ywa(b, _.YG(b, a.K), new _.Bq([_.Er(a, "projection"), _.Er(a, "bottomRight"), _.Er(a, "zoom")], gva));
            NH(a)
        }
    };
    vxa = function(a) {
        if (!a.J && !a.Ja && a.kb && a.h) {
            var b = a.J = new GH(a.h, a.kb, a.Va, a.K, a.pc, _.gg, a.Nc, a.C, a.jb, a.Oc || void 0);
            b.bindTo("mapHeading", a, "heading");
            b.bindTo("tilt", a);
            b.bindTo("projection", a.h);
            b.bindTo("mapTypeId", a);
            a.bindTo("panoramaVisible", b);
            b.bindTo("mapSize", a, "size");
            b.bindTo("display", a, "streetViewControl");
            b.bindTo("disableDefaultUI", a);
            wxa(a)
        }
    };
    wxa = function(a) {
        var b = a.J;
        if (b) {
            var c = b.D,
                d = a.get("streetView");
            if (d != c) {
                if (c) {
                    var e = c.__gm;
                    e.unbind("result");
                    e.unbind("heading");
                    c.unbind("passiveLogo");
                    c.h.removeListener(a.yu, a);
                    c.h.set(!1)
                }
                d && (c = d.__gm, null != c.get("result") && b.set("result", c.get("result")), c.bindTo("isHover", b), c.bindTo("result", b), null != c.get("heading") && b.set("heading", c.get("heading")), c.bindTo("heading", b), d.bindTo("passiveLogo", a), d.h.addListener(a.yu, a), a.set("panoramaVisible", d.get("visible")), b.bindTo("client", d));
                b.D =
                    d
            }
        }
    };
    pxa = function(a, b) {
        b.Em ? (b.Em.remove(b.ra), delete b.Em) : a.H.nf(b.ra)
    };
    _.yxa = function(a, b) {
        var c = document.createElement("div"),
            d = c.style;
        d.backgroundColor = "white";
        d.fontWeight = "500";
        d.fontFamily = "Roboto, sans-serif";
        d.padding = "15px 25px";
        d.boxSizing = "border-box";
        d.top = "5px";
        d = document.createElement("div");
        var e = document.createElement("img");
        e.alt = "";
        e.src = _.pv + "api-3/images/google_gray.svg";
        e.style.border = e.style.margin = e.style.padding = 0;
        e.style.height = "17px";
        e.style.verticalAlign = "middle";
        e.style.width = "52px";
        _.Sn(e);
        d.appendChild(e);
        c.appendChild(d);
        d = document.createElement("div");
        d.style.lineHeight = "20px";
        d.style.margin = "15px 0";
        e = document.createElement("span");
        e.style.color = "rgba(0,0,0,0.87)";
        e.style.fontSize = "14px";
        e.innerText = "\u041f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 Google\u00a0\u041a\u0430\u0440\u0442 \u043d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430.";
        d.appendChild(e);
        c.appendChild(d);
        d = document.createElement("table");
        d.style.width = "100%";
        e = document.createElement("tr");
        var f = document.createElement("td");
        f.style.lineHeight = "16px";
        f.style.verticalAlign = "middle";
        var g = document.createElement("a");
        fva(g, b);
        g.innerText = "\u0412\u044b \u0432\u043b\u0430\u0434\u0435\u043b\u0435\u0446 \u044d\u0442\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430?";
        g.target = "_blank";
        g.setAttribute("rel", "noopener");
        g.style.color = "rgba(0, 0, 0, 0.54)";
        g.style.fontSize = "12px";
        g.onclick = function() {
            _.P(a, "Dl");
            _.O(a, 148243)
        };
        f.appendChild(g);
        e.appendChild(f);
        _.wm(xxa);
        b = document.createElement("td");
        b.style.textAlign = "right";
        f = document.createElement("button");
        f.className = "dismissButton";
        f.innerText = "\u041e\u041a";
        f.onclick = function() {
            a.removeChild(c);
            _.M(a, "dmd");
            _.P(a, "Dd");
            _.O(a, 148242)
        };
        b.appendChild(f);
        e.appendChild(b);
        d.appendChild(e);
        c.appendChild(d);
        a.appendChild(c);
        _.P(a, "D0");
        _.O(a, 148244);
        return c
    };
    OH = function(a) {
        var b = this;
        this.j = a;
        this.Da = new _.zi(function() {
            return b.m()
        }, 0);
        _.cn(a, "resize", this, this.m);
        this.h = new _.x.Map;
        this.C = new _.x.Map;
        a = _.A([1, 2, 3, 5, 7, 4, 13, 8, 6, 9, 10, 11, 12]);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = document.createElement("div");
            this.j.appendChild(d);
            this.C.set(c, d);
            this.h.set(c, [])
        }
    };
    PH = function(a, b) {
        if (!CG(a)) return 0;
        b = !b && _.mx(a.dataset.controlWidth);
        if (!_.Rd(b) || isNaN(b)) b = a.offsetWidth;
        a = _.vF(a);
        b += _.mx(a.marginLeft) || 0;
        return b += _.mx(a.marginRight) || 0
    };
    QH = function(a, b) {
        if (!CG(a)) return 0;
        b = !b && _.mx(a.dataset.controlHeight);
        if (!_.Rd(b) || isNaN(b)) b = a.offsetHeight;
        a = _.vF(a);
        b += _.mx(a.marginTop) || 0;
        return b += _.mx(a.marginBottom) || 0
    };
    zxa = function(a) {
        for (var b = 0, c = _.A(a), d = c.next(); !d.done; d = c.next()) b = Math.max(d.value.height, b);
        d = c = 0;
        for (var e = a.length; 0 < e; --e) {
            var f = a[e - 1];
            if (b === f.height) {
                f.width > d && f.width > f.height ? d = f.height : c = f.width;
                break
            } else d = Math.max(f.height, d)
        }
        return new _.Kg(c, d)
    };
    RH = function(a, b, c, d) {
        var e = 0,
            f = 0,
            g = [];
        a = _.A(a);
        for (var h = a.next(); !h.done; h = a.next()) {
            var k = h.value;
            h = k.border;
            k = k.element;
            var l = PH(k);
            var m = PH(k, !0),
                p = QH(k),
                q = QH(k, !0);
            k.style[b] = _.Zm("left" === b ? e : e + (l - m));
            k.style[c] = _.Zm("top" === c ? 0 : p - q);
            l = e + l;
            p > f && (f = p, d.push({
                minWidth: e,
                height: f
            }));
            e = l;
            h || g.push(new _.Kg(e, p));
            k.style.visibility = ""
        }
        return zxa(g)
    };
    SH = function(a, b, c, d) {
        var e = 0,
            f = [];
        a = _.A(a);
        for (var g = a.next(); !g.done; g = a.next()) {
            var h = g.value;
            g = h.border;
            h = h.element;
            for (var k = PH(h), l = QH(h), m = PH(h, !0), p = QH(h, !0), q = 0, r = _.A(d), t = r.next(); !t.done; t = r.next()) {
                t = t.value;
                if (t.minWidth > k) break;
                q = t.height
            }
            e = Math.max(q, e);
            h.style[c] = _.Zm("top" === c ? e : e + l - p);
            h.style[b] = _.Zm("left" === b ? 0 : k - m);
            e += l;
            g || f.push(new _.Kg(k, e));
            h.style.visibility = ""
        }
        return zxa(f)
    };
    TH = function(a, b, c, d) {
        for (var e = 0, f = 0, g = _.A(a), h = g.next(); !h.done; h = g.next()) {
            var k = h.value;
            h = k.border;
            k = k.element;
            var l = PH(k),
                m = QH(k),
                p = PH(k, !0);
            "left" === b ? k.style.left = "0" : "right" === b ? k.style.right = _.Zm(l - p) : k.style.left = _.Zm((c - p) / 2);
            e += m;
            h || (f = Math.max(l, f))
        }
        b = (d - e) / 2;
        a = _.A(a);
        for (c = a.next(); !c.done; c = a.next()) c = c.value.element, c.style.top = _.Zm(b), b += QH(c), c.style.visibility = "";
        return f
    };
    Axa = function(a, b, c) {
        for (var d = 0, e = 0, f = _.A(a), g = f.next(); !g.done; g = f.next()) {
            var h = g.value;
            g = h.border;
            h = h.element;
            var k = PH(h),
                l = QH(h),
                m = QH(h, !0);
            h.style[b] = _.Zm("top" === b ? 0 : l - m);
            d += k;
            g || (e = Math.max(l, e))
        }
        b = (c - d) / 2;
        a = _.A(a);
        for (c = a.next(); !c.done; c = a.next()) c = c.value.element, c.style.left = _.Zm(b), b += PH(c), c.style.visibility = "";
        return e
    };
    Bxa = function(a, b, c, d, e, f, g, h, k, l, m, p, q, r, t, u, w) {
        var y = b.get("streetView");
        k = b.__gm;
        if (y && k) {
            p = new _.BF(_.lx(), y.get("client"));
            y = _.mda[y.get("client")];
            var z = new JH({
                    Rw: function(R) {
                        return q.fromContainerPixelToLatLng(new _.Q(R.clientX, R.clientY))
                    },
                    ds: b.controls,
                    wo: l,
                    zm: m,
                    tt: a,
                    map: b,
                    Xy: b.mapTypes,
                    yg: d,
                    ou: !0,
                    va: r,
                    controlSize: b.get("controlSize") || 40,
                    TA: y,
                    xu: p,
                    Jy: t,
                    lg: u,
                    kg: w
                }),
                G = new _.jF(["bounds"], "bottomRight", function(R) {
                    return R && _.cm(R)
                }),
                J, X;
            _.dn(b, "idle", function() {
                var R = b.get("bounds");
                R != J &&
                    (z.set("bounds", R), G.set("bounds", R), J = R);
                R = b.get("center");
                R != X && (z.set("center", R), X = R)
            });
            z.bindTo("bottomRight", G);
            z.bindTo("disableDefaultUI", b);
            z.bindTo("heading", b);
            z.bindTo("projection", b);
            z.bindTo("reportErrorControl", b);
            z.bindTo("passiveLogo", b);
            z.bindTo("zoom", k);
            z.bindTo("mapTypeId", c);
            z.bindTo("attributionText", e);
            z.bindTo("zoomRange", g);
            z.bindTo("aerialAvailableAtZoom", h);
            z.bindTo("tilt", h);
            z.bindTo("desiredTilt", h);
            z.bindTo("keyboardShortcuts", b, "keyboardShortcuts", !0);
            z.bindTo("mapTypeControlOptions",
                b, null, !0);
            z.bindTo("panControlOptions", b, null, !0);
            z.bindTo("rotateControlOptions", b, null, !0);
            z.bindTo("scaleControlOptions", b, null, !0);
            z.bindTo("streetViewControlOptions", b, null, !0);
            z.bindTo("zoomControlOptions", b, null, !0);
            z.bindTo("mapTypeControl", b);
            z.bindTo("myLocationControlOptions", b);
            z.bindTo("fullscreenControlOptions", b, null, !0);
            b.get("fullscreenControlOptions") && z.notify("fullscreenControlOptions");
            z.bindTo("panControl", b);
            z.bindTo("rotateControl", b);
            z.bindTo("motionTrackingControl", b);
            z.bindTo("motionTrackingControlOptions",
                b, null, !0);
            z.bindTo("scaleControl", b);
            z.bindTo("streetViewControl", b);
            z.bindTo("fullscreenControl", b);
            z.bindTo("zoomControl", b);
            z.bindTo("myLocationControl", b);
            z.bindTo("rmiAvailable", f, "available");
            z.bindTo("streetView", b);
            z.bindTo("fontLoaded", k);
            z.bindTo("size", k);
            k.bindTo("renderHeading", z);
            _.jf(z, "panbyfraction", k)
        }
    };
    Cxa = function(a, b, c, d, e, f, g, h) {
        var k = new _.BF(_.lx(), g.get("client")),
            l = new JH({
                ds: f,
                wo: d,
                zm: h,
                tt: e,
                yg: c,
                controlSize: g.get("controlSize") || 40,
                ou: !1,
                UA: g,
                xu: k
            });
        l.set("streetViewControl", !1);
        l.bindTo("attributionText", b, "copyright");
        l.set("mapTypeId", "streetview");
        l.set("tilt", !0);
        l.bindTo("heading", b);
        l.bindTo("zoom", b, "zoomFinal");
        l.bindTo("zoomRange", b);
        l.bindTo("pov", b, "pov");
        l.bindTo("position", g);
        l.bindTo("pano", g);
        l.bindTo("passiveLogo", g);
        l.bindTo("floors", b);
        l.bindTo("floorId", b);
        l.bindTo("rmiWidth",
            g);
        l.bindTo("fullscreenControlOptions", g, null, !0);
        l.bindTo("panControlOptions", g, null, !0);
        l.bindTo("zoomControlOptions", g, null, !0);
        l.bindTo("fullscreenControl", g);
        l.bindTo("panControl", g);
        l.bindTo("zoomControl", g);
        l.bindTo("disableDefaultUI", g);
        l.bindTo("fontLoaded", g.__gm);
        l.bindTo("size", b);
        a.view && a.view.addListener("scene_changed", function() {
            var m = a.view.get("scene");
            l.set("isCustomPanorama", "c" === m)
        });
        l.Da.Fc();
        _.jf(l, "panbyfraction", a)
    };
    UH = function(a, b, c) {
        this.T = a;
        this.N = b;
        this.K = c;
        this.m = this.j = 0;
        this.C = null;
        this.H = this.h = 0;
        this.F = this.J = null;
        _.cn(a, "keydown", this, this.gy);
        _.cn(a, "keypress", this, this.Ow);
        _.cn(a, "keyup", this, this.mA);
        this.D = {};
        this.G = {}
    };
    VH = function(a, b) {
        _.O(window, a);
        _.P(window, b)
    };
    Dxa = function(a) {
        var b = a.get("zoom");
        _.Rd(b) && (a.set("zoom", b + 1), VH(165374, "Zmki"))
    };
    Exa = function(a) {
        var b = a.get("zoom");
        _.Rd(b) && (a.set("zoom", b - 1), VH(165374, "Zmki"))
    };
    WH = function(a, b, c) {
        _.M(a, "panbyfraction", b, c);
        VH(165373, "Pmki")
    };
    Fxa = function(a, b) {
        return !!(b.target !== a.T || b.ctrlKey || b.altKey || b.metaKey || 0 == a.get("enabled"))
    };
    Hxa = function(a, b, c, d, e) {
        var f = new UH(b, d, e);
        f.bindTo("zoom", a);
        f.bindTo("enabled", a, "keyboardShortcuts");
        d && f.bindTo("tilt", a.__gm);
        e && f.bindTo("heading", a);
        (d || e) && _.jf(f, "tiltrotatebynow", a.__gm);
        _.jf(f, "panbyfraction", a.__gm);
        _.jf(f, "panbynow", a.__gm);
        _.jf(f, "panby", a.__gm);
        Gxa(a, b, d, e);
        var g = a.__gm.G,
            h;
        _.dn(a, "streetview_changed", function() {
            var k = a.get("streetView"),
                l = h;
            l && _.We(l);
            h = null;
            k && (h = _.dn(k, "visible_changed", function() {
                k.getVisible() && k === g ? (b.blur(), c.style.visibility = "hidden") : c.style.visibility =
                    ""
            }))
        })
    };
    Gxa = function(a, b, c, d) {
        c = new _.AF({
            kg: d,
            lg: c,
            ownerElement: b,
            sl: !1,
            Gi: "map"
        });
        var e = _.mk();
        c.element.id = e;
        c.element.style.display = "none";
        b.appendChild(c.element);
        _.dn(a, "keyboardshortcuts_changed", function() {
            _.tm(a) ? b.setAttribute("aria-describedby", e) : b.removeAttribute("aria-describedby")
        })
    };
    XH = function() {
        this.Nq = OH;
        this.Uy = Bxa;
        this.Wy = Cxa;
        this.Vy = Hxa
    };
    pva = {};
    _.Sa(KG, _.N);
    _.B(uva, _.N);
    _.B(LG, _.N);
    LG.prototype.card_changed = function() {
        var a = this.get("card");
        this.h && this.j.removeChild(this.h);
        if (a) {
            var b = this.h = _.Qn("div");
            b.style.backgroundColor = "white";
            b.appendChild(a);
            b.style.margin = _.Zm(10);
            b.style.padding = _.Zm(1);
            _.jz(b, "0 1px 4px -1px rgba(0,0,0,0.3)");
            FG(b, _.Zm(2));
            this.j.appendChild(b);
            this.h = b
        } else this.h = null
    };
    LG.prototype.getDiv = function() {
        return this.j
    };
    var UG = _.vl(_.$a(".gm-control-active>img{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:none;left:50%;pointer-events:none;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.gm-control-active>img:nth-child(1){display:block}.gm-control-active:focus>img:nth-child(1),.gm-control-active:hover>img:nth-child(1),.gm-control-active:active>img:nth-child(1),.gm-control-active:disabled>img:nth-child(1){display:none}.gm-control-active:focus>img:nth-child(2),.gm-control-active:hover>img:nth-child(2){display:block}.gm-control-active:active>img:nth-child(3){display:block}.gm-control-active:disabled>img:nth-child(4){display:block}sentinel{}\n"));
    _.Sa(NG, _.DB);
    NG.prototype.fill = function(a) {
        _.BB(this, 0, _.Uz(a))
    };
    var MG = "t-avKK8hDgg9Q";
    _.B(OG, _.F);
    OG.prototype.getHeading = function() {
        return _.wd(this.o, 1)
    };
    OG.prototype.setHeading = function(a) {
        _.D(this.o, 1, a)
    };
    var PG = {},
        QG = null;
    _.Sa(SG, _.ti);
    SG.prototype.j = function(a) {
        this.dispatchEvent(a)
    };
    _.Sa(TG, SG);
    TG.prototype.stop = function(a) {
        RG(this);
        this.h = 0;
        a && (this.progress = 1);
        Gva(this, this.progress);
        this.j("stop");
        this.j("end")
    };
    TG.prototype.zb = function() {
        0 == this.h || this.stop(!1);
        this.j("destroy");
        TG.ve.zb.call(this)
    };
    TG.prototype.j = function(a) {
        this.dispatchEvent(new Hva(a, this))
    };
    _.Sa(Hva, _.Sh);
    _.B(VG, _.N);
    VG.prototype.changed = function() {
        !this.m && this.h && (this.h.stop(), this.h = null);
        var a = this.get("pov");
        if (a) {
            var b = new OG;
            b.setHeading(_.Od(-a.heading, 0, 360));
            _.Il(_.K(b.o, 3, _.Gz), _.Hz(_.rb(_.dr["compass_background.svg"])));
            _.Il(_.K(b.o, 4, _.Gz), _.Hz(_.rb(_.dr["compass_needle_normal.svg"])));
            _.Il(_.K(b.o, 5, _.Gz), _.Hz(_.rb(_.dr["compass_needle_hover.svg"])));
            _.Il(_.K(b.o, 6, _.Gz), _.Hz(_.rb(_.dr["compass_needle_active.svg"])));
            _.Il(_.K(b.o, 7, _.Gz), _.Hz(_.rb(_.dr["compass_rotate_normal.svg"])));
            _.Il(_.K(b.o,
                8, _.Gz), _.Hz(_.rb(_.dr["compass_rotate_hover.svg"])));
            _.Il(_.K(b.o, 9, _.Gz), _.Hz(_.rb(_.dr["compass_rotate_active.svg"])));
            _.D(b.o, 10, "\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u0440\u043e\u0442\u0438\u0432 \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0435\u043b\u043a\u0438");
            _.D(b.o, 11, "\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u043e \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0435\u043b\u043a\u0435");
            _.D(b.o, 12, "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c\u0443 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044e");
            this.j.update([b])
        }
    };
    VG.prototype.mapSize_changed = function() {
        WG(this)
    };
    VG.prototype.disableDefaultUI_changed = function() {
        WG(this)
    };
    VG.prototype.panControl_changed = function() {
        WG(this)
    };
    _.B(Pva, _.N);
    var Nva = [{
        Ix: -52,
        close: -78,
        top: -86,
        backgroundColor: "#fff"
    }, {
        Ix: 0,
        close: -26,
        top: -86,
        backgroundColor: "#222"
    }];
    var Qva = _.vl(_.$a(".gm-style .gm-style-cc a,.gm-style .gm-style-cc button,.gm-style .gm-style-cc span,.gm-style .gm-style-mtc div{font-size:10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.gm-style .gm-style-cc a,.gm-style .gm-style-cc button,.gm-style .gm-style-cc span{outline-offset:3px}sentinel{}\n"));
    _.B(aH, _.N);
    _.n = aH.prototype;
    _.n.fontLoaded_changed = function() {
        var a = this;
        return _.za(function(b) {
            $G(a);
            b.h = 0
        })
    };
    _.n.keyboardShortcutsShown_changed = function() {
        $G(this)
    };
    _.n.th = function() {
        this.get("keyboardShortcutsShown") && (this.fa.style.display = "", this.h.textContent = "", this.h.appendChild(this.D), _.uz(), _.M(this, "update"))
    };
    _.n.sh = function() {
        this.get("keyboardShortcutsShown") && (this.fa.style.display = "", this.h.textContent = "", this.h.textContent = "\u0411\u044b\u0441\u0442\u0440\u044b\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0438", _.uz(), _.M(this, "update"))
    };
    _.n.Sb = function() {
        this.get("keyboardShortcutsShown") || (this.fa.style.display = "none", _.M(this, "update"))
    };
    _.n.Md = function() {
        return this.fa
    };
    _.B(Uva, _.N);
    bH.prototype.add = function(a) {
        a.style.position = "absolute";
        this.h ? this.fa.insertBefore(a, this.fa.firstChild) : this.fa.appendChild(a);
        a = Vva(this, a);
        this.elements.push(a);
        cH(this, a)
    };
    bH.prototype.remove = function(a) {
        var b = this;
        this.fa.removeChild(a);
        hva(this.elements, function(c, d) {
            c.element === a && (b.elements.splice(d, 1), b.onRemove(c))
        })
    };
    bH.prototype.onRemove = function(a) {
        a && (cH(this, a), a.Np && (_.We(a.Np), delete a.Np))
    };
    _.zm("api-3/images/my_location_spinner", !0, !0);
    _.Sa(dH, _.N);
    dH.prototype.changed = function(a) {
        if ("url" != a)
            if (this.get("pano")) {
                a = this.get("pov");
                var b = this.get("position");
                a && b && (a = _.Lta(a, b, this.get("pano"), this.h), this.set("url", a))
            } else {
                a = {};
                if (b = this.get("center")) b = new _.pe(b.lat(), b.lng()), a.ll = b.toUrlValue();
                b = this.get("zoom");
                _.Rd(b) && (a.z = b);
                b = this.get("mapTypeId");
                (b = "terrain" == b ? "p" : "hybrid" == b ? "h" : _.lv[b]) && (a.t = b);
                if (b = this.get("pano")) {
                    a.z = 17;
                    a.layer = "c";
                    var c = this.get("position");
                    c && (a.cbll = c.toUrlValue());
                    a.panoid = b;
                    (b = this.get("pov")) && (a.cbp =
                        "12," + b.heading + ",," + Math.max(b.zoom - 3) + "," + -b.pitch)
                }
                a.hl = _.rd(_.xd(_.gg));
                a.gl = _.sd(_.xd(_.gg));
                a.mapclient = _.Oi[35] ? "embed" : "apiv3";
                var d = [];
                _.Kd(a, function(e, f) {
                    d.push(e + "=" + f)
                });
                this.set("url", this.h + "?" + d.join("&"))
            }
    };
    eH.prototype.getDiv = function() {
        return this.m
    };
    _.B($va, _.N);
    _.B(hH, _.N);
    hH.prototype.ib = function() {
        return this.h
    };
    var bwa = _.vl(_.$a(".ssQIHO-checkbox-menu-item>span>span{background-color:#000;display:inline-block}@media (forced-colors:active),(prefers-contrast:more){.ssQIHO-checkbox-menu-item>span>span{background-color:ButtonText}}\n"));
    _.B(jH, _.N);
    jH.prototype.ib = function() {
        return this.h
    };
    _.B(kH, _.N);
    kH.prototype.ib = function() {
        return this.h
    };
    _.Sa(dwa, _.N);
    _.B(lH, _.N);
    lH.prototype.F = function() {
        var a = this.h;
        a.timeout && (window.clearTimeout(a.timeout), a.timeout = null)
    };
    lH.prototype.active_changed = function() {
        this.F();
        if (this.get("active")) hwa(this);
        else {
            var a = this.h;
            a.h && (_.kb(a.h, _.We), a.h = null);
            a.contains(document.activeElement) && this.C.focus();
            this.j = null;
            _.fz(a)
        }
    };
    var lwa = _.vl(_.$a(".gm-style .gm-style-mtc label,.gm-style .gm-style-mtc div{font-weight:400}.gm-style .gm-style-mtc ul,.gm-style .gm-style-mtc li{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}sentinel{}\n"));
    _.B(kwa, _.N);
    _.B(mH, _.N);
    mH.prototype.mapSize_changed = function() {
        nwa(this)
    };
    mH.prototype.display_changed = function() {
        nwa(this)
    };
    _.B(nH, _.N);
    nH.prototype.changed = function(a) {
        if (!this.h)
            if ("mapTypeId" === a) {
                a = this.get("mapTypeId");
                var b = this.map[a];
                b && b.mapTypeId && (a = b.mapTypeId);
                oH(this, "internalMapTypeId", a);
                b && b.Uk && oH(this, b.Uk, b.value)
            } else {
                a = this.get("internalMapTypeId");
                if (this.map) {
                    b = _.A(_.v(Object, "entries").call(Object, this.map));
                    for (var c = b.next(); !c.done; c = b.next()) {
                        var d = _.A(c.value);
                        c = d.next().value;
                        (d = d.next().value) && d.mapTypeId === a && d.Uk && this.get(d.Uk) == d.value && (a = c)
                    }
                }
                oH(this, "mapTypeId", a)
            }
    };
    _.B(pH, _.N);
    _.n = pH.prototype;
    _.n.sessionState_changed = function() {
        var a = this.get("sessionState");
        if (a) {
            var b = new _.rE;
            _.Il(b, a);
            a = _.K(b.o, 10, _.rC);
            _.D(a.o, 1, 1);
            _.D(b.o, 12, !0);
            b = _.Kta(b, this.D);
            b += "&rapsrc=apiv3";
            _.Vm(this.h, _.iy(b));
            this.C = b;
            this.get("available") && this.set("rmiLinkData", {
                label: "\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435",
                tooltip: "\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435 \u0438\u043b\u0438 \u0441\u043d\u0438\u043c\u043a\u0435",
                url: this.C
            })
        }
    };
    _.n.available_changed = function() {
        qH(this)
    };
    _.n.enabled_changed = function() {
        qH(this)
    };
    _.n.mapTypeId_changed = function() {
        qH(this)
    };
    _.n.th = function() {
        rwa(this) && (_.uz(), _.P(this.m, "Rs"), _.O(this.m, 148263), this.j.style.display = "", this.h.textContent = "", this.h.appendChild(this.F))
    };
    _.n.sh = function() {
        rwa(this) && (_.uz(), _.P(this.m, "Rs"), _.O(this.m, 148263), this.j.style.display = "", this.h.textContent = "\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435")
    };
    _.n.Sb = function() {
        this.j.style.display = "none"
    };
    _.n.Md = function() {
        return this.j
    };
    _.B(rH, _.N);
    rH.prototype.refresh = function() {
        var a = this.get("mapSize"),
            b = !!this.get("aerialAvailableAtZoom");
        a = !!this.get("rotateControl") || a && 200 <= a.width && 200 <= a.height;
        b = b && a;
        a = this.J;
        swa(this.D, this.j, this.F);
        this.m.style.display = this.j ? "block" : "none";
        this.G.style.display = this.j ? "block" : "none";
        this.C.style.display = this.j ? "block" : "none";
        this.H.style.display = this.j ? "block" : "none";
        var c = this.F,
            d = Math.floor(3 * this.F) + 2;
        d = this.j ? d : this.F;
        this.h.style.width = _.Zm(c);
        this.h.style.height = _.Zm(d);
        a.dataset.controlWidth = String(c);
        a.dataset.controlHeight = String(d);
        _.ez(a, b);
        _.M(a, "resize")
    };
    _.B(wwa, _.N);
    _.n = ywa.prototype;
    _.n.show = function() {
        this.j && (this.fa.style.display = "")
    };
    _.n.Sb = function() {
        this.j || (this.fa.style.display = "none")
    };
    _.n.th = function() {
        this.show()
    };
    _.n.sh = function() {
        this.show()
    };
    _.n.Md = function() {
        return this.fa
    };
    Bwa.prototype.update = function(a) {
        this.h = a;
        var b = _.A(this.Rh);
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            d.Sb();
            d.th()
        }
        if (a < this.fa.offsetWidth)
            for (d = _.A(this.Wl), c = d.next(); !c.done; c = d.next())
                if (c = c.value, b = this.fa.offsetWidth, a < b) c.Sb();
                else break;
        else
            for (d = this.Wl.length - 1; 0 <= d; d--) c = this.Wl[d], c.sh(), b = this.fa.offsetWidth, a < b && c.th();
        _.M(this.fa, "resize")
    };
    var uH = {},
        Ixa = uH[1] = {};
    Ixa.backgroundColor = "#fff";
    Ixa.qs = "#e6e6e6";
    var Jxa = uH[2] = {};
    Jxa.backgroundColor = "#222";
    Jxa.qs = "#1a1a1a";
    _.B(vH, _.N);
    vH.prototype.changed = function(a) {
        if ("zoom" === a || "zoomRange" === a) {
            a = this.get("zoom");
            var b = this.get("zoomRange");
            "number" === typeof a && b && (this.D.disabled = a >= b.max, this.D.style.cursor = a >= b.max ? "default" : "pointer", this.F.disabled = a <= b.min, this.F.style.cursor = a <= b.min ? "default" : "pointer")
        }
    };
    _.B(wH, _.N);
    wH.prototype.getDiv = function() {
        return this.h
    };
    _.B(yH, _.N);
    _.n = yH.prototype;
    _.n.fontLoaded_changed = function() {
        xH(this)
    };
    _.n.attributionText_changed = function() {
        xH(this)
    };
    _.n.hidden_changed = function() {
        xH(this)
    };
    _.n.mapTypeId_changed = function() {
        "streetview" === this.get("mapTypeId") && (ZG(this.D), this.m.style.color = "#fff")
    };
    _.n.th = function() {
        this.get("hidden") || (this.h.style.display = "", this.m.style.display = "", this.j.style.display = "none", _.uz())
    };
    _.n.sh = function() {
        this.get("hidden") || (this.h.style.display = "", this.m.style.display = "none", this.j.style.display = "", _.uz())
    };
    _.n.Sb = function() {
        this.get("hidden") && (this.h.style.display = "none")
    };
    _.n.Md = function() {
        return this.h
    };
    _.B(zH, _.N);
    zH.prototype.ib = function() {
        return this.h.element
    };
    zH.prototype.visible_changed = function() {
        this.get("visible") ? (_.uz(), this.m.appendChild(this.h.element), this.h.show()) : this.h.Sb()
    };
    zH.prototype.attributionText_changed = function() {
        var a = this.get("attributionText") || "";
        (this.j.textContent = a) || this.h.Sb()
    };
    _.B(AH, _.N);
    _.n = AH.prototype;
    _.n.attributionText_changed = function() {
        var a = this.get("attributionText") || "";
        this.j.textContent = a
    };
    _.n.hidden_changed = function() {
        var a = !this.get("hidden");
        _.ez(this.h, a);
        a && _.uz()
    };
    _.n.th = function() {};
    _.n.sh = function() {};
    _.n.Sb = function() {};
    _.n.Md = function() {
        return this.h
    };
    _.B(BH, _.N);
    _.n = BH.prototype;
    _.n.hidden_changed = function() {
        _.M(this.h, "resize")
    };
    _.n.mapTypeId_changed = function() {
        "streetview" == this.get("mapTypeId") && (ZG(this.h), this.m.style.color = "#fff")
    };
    _.n.fontLoaded_changed = function() {
        _.M(this.h, "resize")
    };
    _.n.th = function() {
        this.sh()
    };
    _.n.sh = function() {
        this.get("hidden") || (this.h.style.display = "", _.uz())
    };
    _.n.Sb = function() {
        this.get("hidden") && (this.h.style.display = "none")
    };
    _.n.Md = function() {
        return this.h
    };
    _.B(Fwa, _.N);
    _.Sa(CH, _.N);
    CH.prototype.changed = function(a) {
        if ("sessionState" != a) {
            a = new _.rE;
            var b = this.get("zoom"),
                c = this.get("center"),
                d = this.get("pano");
            if (null != b && null != c || null != d) {
                var e = this.h,
                    f = _.K(a.o, 2, _.nC),
                    g = _.rd(e);
                _.D(f.o, 1, g);
                f = _.K(a.o, 2, _.nC);
                e = _.sd(e);
                _.D(f.o, 2, e);
                e = _.sE(a);
                f = this.get("mapTypeId");
                "hybrid" == f || "satellite" == f ? _.D(e.o, 1, 3) : (_.D(e.o, 1, 0), "terrain" == f && (f = _.K(a.o, 5, _.lC), _.Zc(f.o, 1, 4)));
                f = _.K(e.o, 2, _.tC);
                _.D(f.o, 1, 2);
                c && (g = c.lng(), _.D(f.o, 2, g), c = c.lat(), _.D(f.o, 3, c));
                "number" === typeof b && _.D(f.o,
                    6, b);
                f.setHeading(this.get("heading") || 0);
                d && (b = _.K(e.o, 3, _.xC), _.D(b.o, 1, d));
                this.set("sessionState", a)
            } else this.set("sessionState", null)
        }
    };
    _.B(DH, _.N);
    DH.prototype.floors_changed = function() {
        var a = this.get("floorId"),
            b = this.get("floors") || [],
            c = this.fa;
        if (1 < b.length) {
            _.gz(c);
            _.kb(this.h, function(g) {
                _.Yn(g)
            });
            this.h = [];
            for (var d = b.length, e = d - 1; 0 <= e; --e) {
                var f = _.cr(b[e].description || b[e].Wq || "\u042d\u0442\u0430\u0436");
                b[e].so == a ? (f.style.color = "#aaa", f.style.fontWeight = "bold", f.style.backgroundColor = "#333") : (Gwa(this, f, b[e].Wz), f.style.color = "#999", f.style.fontWeight = "400", f.style.backgroundColor = "#222");
                f.style.height = f.style.width = _.Zm(this.j);
                e ==
                    d - 1 ? kva(f, _.Zm(_.GB(this.j))) : 0 == e && lva(f, _.Zm(_.GB(this.j)));
                _.Mn(b[e].Wq, f);
                c.appendChild(f);
                this.h.push(f)
            }
            setTimeout(function() {
                _.M(c, "resize")
            })
        } else _.fz(c)
    };
    _.B(EH, _.N);
    EH.prototype.F = function() {
        1 == this.get("mode") && this.set("mode", 2)
    };
    EH.prototype.G = function() {
        2 == this.get("mode") && this.set("mode", 1)
    };
    var Kxa = [_.dr["lilypad_0.svg"], _.dr["lilypad_1.svg"], _.dr["lilypad_2.svg"], _.dr["lilypad_3.svg"], _.dr["lilypad_4.svg"], _.dr["lilypad_5.svg"], _.dr["lilypad_6.svg"], _.dr["lilypad_7.svg"], _.dr["lilypad_8.svg"], _.dr["lilypad_9.svg"], _.dr["lilypad_10.svg"], _.dr["lilypad_11.svg"], _.dr["lilypad_12.svg"], _.dr["lilypad_13.svg"], _.dr["lilypad_14.svg"], _.dr["lilypad_15.svg"]],
        Nwa = [_.dr["lilypad_pegman_0.svg"], _.dr["lilypad_pegman_1.svg"], _.dr["lilypad_pegman_2.svg"], _.dr["lilypad_pegman_3.svg"], _.dr["lilypad_pegman_4.svg"],
            _.dr["lilypad_pegman_5.svg"], _.dr["lilypad_pegman_6.svg"], _.dr["lilypad_pegman_7.svg"], _.dr["lilypad_pegman_8.svg"], _.dr["lilypad_pegman_9.svg"], _.dr["lilypad_pegman_10.svg"], _.dr["lilypad_pegman_11.svg"], _.dr["lilypad_pegman_12.svg"], _.dr["lilypad_pegman_13.svg"], _.dr["lilypad_pegman_14.svg"], _.dr["lilypad_pegman_15.svg"]
        ];
    _.B(FH, _.N);
    _.n = FH.prototype;
    _.n.mode_changed = function() {
        var a = this;
        return _.za(function(b) {
            if (1 == b.h) return _.ua(b, Owa(a), 2);
            Pwa(a);
            b.h = 0
        })
    };
    _.n.heading_changed = function() {
        7 === this.j() && Owa(this)
    };
    _.n.position_changed = function() {
        var a = this.j();
        if (_.kF(a))
            if (this.get("position")) {
                this.fp.setVisible(!0);
                this.J.setVisible(!1);
                a = this.set;
                var b = Mwa(this);
                this.F !== b && (this.F = b, this.D = {
                    url: Kxa[b],
                    scaledSize: new _.Kg(49, 52),
                    anchor: new _.Q(25, 35)
                });
                a.call(this, "lilypadIcon", this.D)
            } else a = this.j(), 5 === a ? this.h(6) : 3 === a && this.h(4);
        else(b = this.get("position")) && 1 === a && this.h(7), this.set("dragPosition", b)
    };
    _.n.Je = function(a) {
        this.set("dragging", !0);
        this.h(5);
        this.C = a.pixel.x
    };
    _.n.Pf = function(a) {
        var b = this;
        a = a.pixel.x;
        a > this.C + 5 ? (this.h(5), this.C = a) : a < this.C - 5 && (this.h(3), this.C = a);
        Pwa(this);
        window.clearTimeout(this.m);
        this.m = window.setTimeout(function() {
            _.M(b, "hover");
            b.m = 0
        }, 300)
    };
    _.n.kf = function() {
        this.set("dragging", !1);
        this.h(1);
        window.clearTimeout(this.m);
        this.m = 0
    };
    _.Sa(GH, _.N);
    _.n = GH.prototype;
    _.n.zd = function() {
        var a = this.map.overlayMapTypes,
            b = this.overlay;
        a.forEach(function(c, d) {
            c == b && a.removeAt(d)
        });
        this.j = !1
    };
    _.n.kd = function() {
        var a = this.get("projection");
        a && a.j && (this.map.overlayMapTypes.push(this.overlay), this.j = !0)
    };
    _.n.mode_changed = function() {
        var a = _.kF(this.kv());
        a != this.j && (a ? this.kd() : this.zd())
    };
    _.n.tilt_changed = function() {
        this.j && (this.zd(), this.kd())
    };
    _.n.heading_changed = function() {
        this.j && (this.zd(), this.kd())
    };
    _.n.result_changed = function() {
        var a = this.get("result"),
            b = a && a.location;
        this.set("position", b && b.latLng);
        this.set("description", b && b.shortDescription);
        this.set("panoId", b && b.pano);
        this.m ? this.En(1) : this.get("hover") || this.set("panoramaVisible", !!a)
    };
    _.n.panoramaVisible_changed = function() {
        this.m = 0 == this.get("panoramaVisible");
        var a = this.get("panoramaVisible"),
            b = this.get("hover");
        a || b || this.En(1);
        a && this.notify("position")
    };
    _.n.kv = _.Tf("mode");
    _.n.En = _.Uf("mode");
    _.B(IH, _.N);
    _.n = IH.prototype;
    _.n.visible_changed = function() {
        var a = !1 !== this.get("visible");
        _.ez(this.fa, a);
        _.M(this.fa, "resize")
    };
    _.n.takeDownUrl_changed = function() {
        var a = this.get("pov"),
            b = this.get("pano"),
            c = this.get("takeDownUrl");
        a && (c || b) && (a = "1," + Number(Number(a.heading).toFixed(3)).toString() + ",," + Number(Number(Math.max(0, a.zoom - 1 || 0)).toFixed(3)).toString() + "," + Number(Number(-a.pitch).toFixed(3)).toString(), b = c ? c + ("&cbp=" + a + "&hl=" + _.rd(_.xd(_.gg))) : this.h.getUrl("report", ["panoid=" + b, "cbp=" + a, "hl=" + _.rd(_.xd(_.gg))]), _.Vm(this.anchor, _.iy(b)), this.set("rmiLinkData", {
            label: (HH(), "\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435"),
            tooltip: '\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c Google \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435 \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u0435 "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0443\u043b\u0438\u0446"',
            url: b
        }))
    };
    _.n.pov_changed = function() {
        this.takeDownUrl_changed()
    };
    _.n.pano_changed = function() {
        this.takeDownUrl_changed()
    };
    _.n.th = function() {};
    _.n.sh = function() {};
    _.n.Sb = function() {};
    _.n.Md = function() {
        return this.fa
    };
    _.B(JH, _.N);
    _.n = JH.prototype;
    _.n.disableDefaultUI_changed = function() {
        mxa(this)
    };
    _.n.size_changed = function() {
        mxa(this);
        this.get("size") && this.Fd.update(this.get("size").width)
    };
    _.n.mapTypeId_changed = function() {
        KH(this) != this.Ya && (this.G[1] = !0, _.Ai(this.Da));
        this.W && this.W.setMapTypeId(this.get("mapTypeId"))
    };
    _.n.mapTypeControl_changed = function() {
        this.G[0] = !0;
        _.Ai(this.Da)
    };
    _.n.mapTypeControlOptions_changed = function() {
        this.G[0] = !0;
        _.Ai(this.Da)
    };
    _.n.fullscreenControlOptions_changed = function() {
        this.G[3] = !0;
        _.Ai(this.Da)
    };
    _.n.scaleControl_changed = function() {
        NH(this)
    };
    _.n.scaleControlOptions_changed = function() {
        NH(this)
    };
    _.n.keyboardShortcuts_changed = function() {
        var a = !!(this.h && _.tm(this.h) || this.j);
        a ? (this.ia.fa.style.display = "", this.D.set("keyboardShortcutsShown", !0)) : a || (this.ia.fa.style.display = "none", this.D.set("keyboardShortcutsShown", !1))
    };
    _.n.panControl_changed = function() {
        MH(this)
    };
    _.n.panControlOptions_changed = function() {
        MH(this)
    };
    _.n.rotateControl_changed = function() {
        MH(this)
    };
    _.n.rotateControlOptions_changed = function() {
        MH(this)
    };
    _.n.streetViewControl_changed = function() {
        MH(this)
    };
    _.n.streetViewControlOptions_changed = function() {
        MH(this)
    };
    _.n.zoomControl_changed = function() {
        MH(this)
    };
    _.n.zoomControlOptions_changed = function() {
        MH(this)
    };
    _.n.myLocationControl_changed = function() {
        MH(this)
    };
    _.n.myLocationControlOptions_changed = function() {
        MH(this)
    };
    _.n.streetView_changed = function() {
        wxa(this)
    };
    _.n.yu = function(a) {
        this.get("panoramaVisible") != a && this.set("panoramaVisible", a)
    };
    _.n.panoramaVisible_changed = function() {
        var a = this.get("streetView");
        a && (this.J && a.__gm.bindTo("sloTrackingId", this.J), a.h.set(!!this.get("panoramaVisible")))
    };
    var xxa = _.vl(_.$a(".dismissButton{background-color:#fff;border:1px solid #dadce0;color:#1a73e8;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;font-family:Roboto,sans-serif;font-size:14px;height:36px;cursor:pointer;padding:0 24px}.dismissButton:hover{background-color:rgba(66,133,244,.04);border:1px solid #d2e3fc}.dismissButton:focus{background-color:rgba(66,133,244,.12);border:1px solid #d2e3fc;outline:0}.dismissButton:focus:not(:focus-visible){background-color:#fff;border:1px solid #dadce0;outline:none}.dismissButton:focus-visible{background-color:rgba(66,133,244,.12);border:1px solid #d2e3fc;outline:0}.dismissButton:hover:focus{background-color:rgba(66,133,244,.16);border:1px solid #d2e2fd}.dismissButton:hover:focus:not(:focus-visible){background-color:rgba(66,133,244,.04);border:1px solid #d2e3fc}.dismissButton:hover:focus-visible{background-color:rgba(66,133,244,.16);border:1px solid #d2e2fd}.dismissButton:active{background-color:rgba(66,133,244,.16);border:1px solid #d2e2fd;-webkit-box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);-moz-box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15)}.dismissButton:disabled{background-color:#fff;border:1px solid #f1f3f4;color:#3c4043}sentinel{}\n"));
    var Lxa = new _.x.Set([3, 12, 6, 9]);
    _.B(OH, _.N);
    OH.prototype.getSize = function() {
        return _.Si(this.j)
    };
    OH.prototype.addElement = function(a, b, c, d) {
        var e = this;
        c = void 0 === c ? !1 : c;
        var f = this.h.get(b);
        if (f) {
            d = void 0 !== d && _.Rd(d) ? d : f.length;
            var g;
            for (g = 0; g < f.length && !(f[g].index > d); ++g);
            f.splice(g, 0, {
                element: a,
                border: !!c,
                index: d,
                listener: _.L(a, "resize", function() {
                    return _.Ai(e.Da)
                })
            });
            _.On(a);
            a.style.visibility = "hidden";
            c = this.C.get(b);
            b = Lxa.has(b) ? f.length - g - 1 : g;
            c.insertBefore(a, c.children[b]);
            _.Ai(this.Da)
        }
    };
    OH.prototype.nf = function(a) {
        a.parentNode && a.parentNode.removeChild(a);
        for (var b = _.A(_.v(this.h, "values").call(this.h)), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            for (var d = 0; d < c.length; ++d)
                if (c[d].element === a) {
                    var e = a;
                    e.style.top = "auto";
                    e.style.bottom = "auto";
                    e.style.left = "auto";
                    e.style.right = "auto";
                    _.We(c[d].listener);
                    c.splice(d, 1)
                }
        }
        _.Ai(this.Da)
    };
    OH.prototype.m = function() {
        var a = this.getSize(),
            b = a.width;
        a = a.height;
        var c = this.h,
            d = [],
            e = RH(c.get(1), "left", "top", d),
            f = SH(c.get(5), "left", "top", d);
        d = [];
        var g = RH(c.get(10), "left", "bottom", d),
            h = SH(c.get(6), "left", "bottom", d);
        d = [];
        var k = RH(c.get(3), "right", "top", d),
            l = SH(c.get(7), "right", "top", d);
        d = [];
        var m = RH(c.get(12), "right", "bottom", d);
        d = SH(c.get(9), "right", "bottom", d);
        var p = Axa(c.get(11), "bottom", b),
            q = Axa(c.get(2), "top", b),
            r = TH(c.get(4), "left", b, a);
        TH(c.get(13), "center", b, a);
        c = TH(c.get(8), "right",
            b, a);
        this.set("bounds", new _.vh([new _.Q(Math.max(r, e.width, g.width, f.width, h.width) || 0, Math.max(q, e.height, f.height, k.height, l.height) || 0), new _.Q(b - (Math.max(c, k.width, m.width, l.width, d.width) || 0), a - (Math.max(p, g.height, m.height, h.height, d.height) || 0))]))
    };
    var Mxa = [37, 38, 39, 40],
        Nxa = [38, 40],
        Oxa = [37, 39],
        Pxa = {
            38: [0, -1],
            40: [0, 1],
            37: [-1, 0],
            39: [1, 0]
        },
        Qxa = {
            38: [0, 1],
            40: [0, -1],
            37: [-1, 0],
            39: [1, 0]
        };
    var YH = Object.freeze([].concat(_.oa(Nxa), _.oa(Oxa)));
    _.B(UH, _.N);
    _.n = UH.prototype;
    _.n.gy = function(a) {
        if (Fxa(this, a)) return !0;
        var b = !1;
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
                b = a.shiftKey && 0 <= Nxa.indexOf(a.keyCode);
                var c = a.shiftKey && 0 <= Oxa.indexOf(a.keyCode) && this.K && !this.j;
                b && this.N && !this.j || c ? (this.G[a.keyCode] = !0, this.m || (this.H = 0, this.h = 1, this.ss()), VH(b ? 165376 : 165375, b ? "Tmki" : "Rmki")) : this.m || (this.D[a.keyCode] = 1, this.j || (this.C = new _.lF(100), this.rs()), VH(165373, "Pmki"));
                b = !0;
                break;
            case 34:
                WH(this, 0, .75);
                b = !0;
                break;
            case 33:
                WH(this, 0, -.75);
                b = !0;
                break;
            case 36:
                WH(this, -.75, 0);
                b = !0;
                break;
            case 35:
                WH(this, .75, 0);
                b = !0;
                break;
            case 187:
            case 107:
                Dxa(this);
                b = !0;
                break;
            case 189:
            case 109:
                Exa(this), b = !0
        }
        switch (a.which) {
            case 61:
            case 43:
                Dxa(this);
                b = !0;
                break;
            case 45:
            case 95:
            case 173:
                Exa(this), b = !0
        }
        b && (_.Se(a), _.Te(a));
        return !b
    };
    _.n.Ow = function(a) {
        if (Fxa(this, a)) return !0;
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
            case 34:
            case 33:
            case 36:
            case 35:
            case 187:
            case 107:
            case 189:
            case 109:
                return _.Se(a), _.Te(a), !1
        }
        switch (a.which) {
            case 61:
            case 43:
            case 45:
            case 95:
            case 173:
                return _.Se(a), _.Te(a), !1
        }
        return !0
    };
    _.n.mA = function(a) {
        var b = !1;
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
                this.D[a.keyCode] = null, this.G[a.keyCode] = !1, b = !0
        }
        return !b
    };
    _.n.rs = function() {
        for (var a = 0, b = 0, c = !1, d = _.A(Mxa), e = d.next(); !e.done; e = d.next()) e = e.value, this.D[e] && (e = _.A(Pxa[e]), c = e.next().value, e = e.next().value, a += c, b += e, c = !0);
        c ? (c = 1, _.mF(this.C) && (c = this.C.next()), d = Math.round(35 * c * a), c = Math.round(35 * c * b), 0 === d && (d = a), 0 === c && (c = b), _.M(this, "panbynow", d, c, 1), this.j = _.Yy(this, this.rs, 10)) : this.j = 0
    };
    _.n.ss = function() {
        for (var a = 0, b = 0, c = !1, d = 0; d < YH.length; d++) this.G[YH[d]] && (c = Qxa[YH[d]], a += c[0], b += c[1], c = !0);
        c ? (_.M(this, "tiltrotatebynow", this.h * a, this.h * b), this.m = _.Yy(this, this.ss, 10), this.h = Math.min(1.8, this.h + .01), this.H++, this.J = {
            x: a,
            y: b
        }) : (this.m = 0, this.F = new _.lF(Math.min(Math.round(this.H / 2), 35), 1), _.Yy(this, this.us, 10))
    };
    _.n.us = function() {
        if (!this.m && !this.j && _.mF(this.F)) {
            var a = this.J,
                b = a.x;
            a = a.y;
            var c = this.F.next();
            _.M(this, "tiltrotatebynow", this.h * c * b, this.h * c * a);
            _.Yy(this, this.us, 10)
        }
    };
    XH.prototype.nu = function(a, b) {
        a = _.yxa(a, b).style;
        a.border = "1px solid rgba(0,0,0,0.12)";
        a.borderRadius = "5px";
        a.left = "50%";
        a.maxWidth = "375px";
        a.msTransform = "translateX(-50%)";
        a.position = "absolute";
        a.transform = "translateX(-50%)";
        a.width = "calc(100% - 10px)";
        a.zIndex = "1"
    };
    XH.prototype.cq = function(a) {
        if (_.kda() && !a.__gm_bbsp) {
            a.__gm_bbsp = !0;
            var b = new _.En("https://developers.google.com/maps/documentation/javascript/error-messages#unsupported-browsers");
            new Wva(a, b)
        }
    };
    _.Pe("controls", new XH);
});