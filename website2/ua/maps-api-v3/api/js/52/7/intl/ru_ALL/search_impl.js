google.maps.__gjsload__('search_impl', function(_) {
    var feb = function(a) {
            _.F.call(this, a)
        },
        heb = function(a) {
            var b = _.jj.Ma;
            a = a.toArray();
            geb || (geb = {
                M: "sssM",
                O: ["ss"]
            });
            return b.call(_.jj, a, geb)
        },
        ieb = function(a, b) {
            _.D(a.o, 3, b)
        },
        jeb = function(a) {
            _.F.call(this, a)
        },
        keb = function() {
            var a = _.wk,
                b = _.Dj;
            this.j = _.gg;
            this.h = _.ql(_.Mu, a, _.qv + "/maps/api/js/LayersService.GetFeature", b)
        },
        neb = function(a, b, c) {
            var d = _.bF(new keb);
            c.Zh = (0, _.Pa)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.DFa(c, _.bM(b));
            var e = [];
            e.push(_.L(c, "click", (0, _.Pa)(leb, null, a)));
            _.kb(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.L(c, f, (0, _.Pa)(meb, null, a, f)))
            });
            e.push(_.L(a, "clickable_changed", function() {
                a.h.clickable = 0 != a.get("clickable")
            }));
            a.j = e
        },
        leb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.S(e.o, 2) ? new _.pe(_.jm(_.I(e.o, 2, _.Am).o, 1), _.jm(_.I(e.o, 2, _.Am).o, 2)) : null;
                f.fields = {};
                for (var g = _.E(e.o, 3), h = 0; h < g; ++h) {
                    var k = _.Kl(e.o, 3, _.hM, h);
                    f.fields[k.getKey()] = k.Fa()
                }
            }
            _.M(a, "click", b, c, d, f)
        },
        meb = function(a, b, c, d, e, f, g) {
            var h =
                null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.M(a, b, c, d, e, h, g)
        },
        oeb = function() {};
    _.B(feb, _.F);
    feb.prototype.j = function() {
        return _.pd(this.o, 2)
    };
    var geb;
    _.B(jeb, _.F);
    jeb.prototype.getStatus = function() {
        return _.H(this.o, 1, -1)
    };
    keb.prototype.load = function(a, b) {
        function c(g) {
            g = new jeb(g);
            b(g)
        }
        var d = new feb;
        _.D(d.o, 1, a.layerId.split("|")[0]);
        _.D(d.o, 2, a.featureId);
        ieb(d, _.rd(_.xd(this.j)));
        for (var e in a.parameters) {
            var f = _.kd(d.o, 4, _.hM);
            _.D(f.o, 1, e);
            _.D(f.o, 2, a.parameters[e])
        }
        a = heb(d);
        this.h(a, c, c);
        return a
    };
    keb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    oeb.prototype.uw = function(a) {
        if (_.Oi[15]) {
            var b = a.C,
                c = a.C = a.getMap();
            b && a.h && (a.m ? (b = b.__gm.j, b.set(b.get().qf(a.h))) : a.h && _.ZFa(a.h, b) && (_.kb(a.j || [], _.We), a.j = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("travelMapRequest"),
                    p = a.get("searchPipeMetadata"),
                    q = a.get("overlayLayer"),
                    r = a.get("caseExperimentIds"),
                    t = a.get("airQualityPipeMetadata");
                b = new _.nn;
                d = d.split("|");
                b.layerId = d[0];
                for (var u = 1; u < d.length; ++u) {
                    var w = _.A(d[u].split(":")),
                        y = w.next().value;
                    w = _.na(w);
                    b.parameters[y] = w.join(":")
                }
                e && (b.spotlightDescription = new _.Ys(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.rn(g));
                m && (b.travelMapRequest = new _.tu(m));
                h && (b.mapsApiLayer = new _.Jl(h));
                l && (b.mapFeatures = l);
                p && (b.searchPipeMetadata = new _.hp(p));
                q && (b.overlayLayer = new _.Gr(q));
                r && (b.caseExperimentIds = r.slice(0));
                t && (b.airQualityPipeMetadata = new _.vt(t));
                b.darkLaunch = !!k;
                a.h =
                    b;
                a.m = a.get("renderOnBaseMap");
                a.m ? (a = c.__gm.j, a.set(a.get().Id(b))) : neb(a, c, b);
                _.P(c, "Lg");
                _.O(c, 148282)
            }
        }
    };
    _.Pe("search_impl", new oeb);
});