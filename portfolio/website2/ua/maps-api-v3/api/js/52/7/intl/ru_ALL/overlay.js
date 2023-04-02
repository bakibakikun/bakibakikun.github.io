google.maps.__gjsload__('overlay', function(_) {
    var gx = function(a) {
            this.h = a
        },
        Yna = function() {},
        hx = function(a) {
            a.xp = a.xp || new Yna;
            return a.xp
        },
        Zna = function(a) {
            this.Da = new _.zi(function() {
                var b = a.xp;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Zn && a.onAdd) a.onAdd();
                        b.Zn = !0;
                        a.draw()
                    }
                } else {
                    if (b.Zn)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Zn = !1
                }
            }, 0)
        },
        $na = function(a, b) {
            function c() {
                return _.Ai(e.Da)
            }
            var d = hx(a),
                e = d.Jm;
            e || (e = d.Jm = new Zna(a));
            _.kb(d.Oa || [], _.We);
            var f = d.Za = d.Za || new _.iv,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center",
                g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.Xt = d.Xt || new gx(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Oa = [_.L(a, "panes_changed", c), _.L(g, "zoom_changed", c), _.L(g, "offset_changed", c), _.L(b, "projection_changed", c), _.L(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.qf && (_.P(b, "Ox"), _.O(b, 148440))
        },
        doa = function(a) {
            if (a) {
                var b = a.getMap();
                if (aoa(a) !== b && b && b instanceof _.qf) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new boa(b, a, c.overlayLayer) : c.h.then(function(d) {
                        d = d.va;
                        var e = new ix(b, d);
                        d.Ab(e);
                        c.overlayLayer = e;
                        coa(a);
                        doa(a)
                    })
                }
            }
        },
        coa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.h.unbindAll(), b.h.set("panes", null), b.h.set("projection", null), b.m.zd(b), b.j && (b.j = !1, b.h.onRemove ? b.h.onRemove() : b.h.remove()))
            }
        },
        aoa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        boa = function(a, b, c) {
            this.map = a;
            this.h = b;
            this.m = c;
            this.j = !1;
            _.P(this.map, "Ox");
            _.O(this.map, 148440);
            c.kd(this)
        },
        eoa = function(a, b) {
            a.h.get("projection") != b && (a.h.bindTo("panes", a.map.__gm), a.h.set("projection", b))
        },
        ix = function(a, b) {
            this.C = a;
            this.m = b;
            this.h = null;
            this.j = []
        };
    _.Sa(gx, _.N);
    gx.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Rd(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.h : null))
    };
    var jx = {};
    _.Sa(Zna, _.N);
    jx.kd = function(a) {
        if (a) {
            var b = a.getMap();
            (hx(a).Dt || null) !== b && (b && $na(a, b), hx(a).Dt = b)
        }
    };
    jx.zd = function(a) {
        var b = hx(a),
            c = b.Za;
        c && c.unbindAll();
        (c = b.Xt) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Oa && _.kb(b.Oa, _.We);
        b.Oa = null;
        b.Jm && (b.Jm.Da.Fc(), b.Jm = null);
        delete hx(a).Dt
    };
    var kx = {};
    boa.prototype.draw = function() {
        this.j || (this.j = !0, this.h.onAdd && this.h.onAdd());
        this.h.draw && this.h.draw()
    };
    ix.prototype.dispose = function() {};
    ix.prototype.Gb = function(a, b, c, d, e, f, g, h) {
        var k = this.h = this.h || new _.Aq(this.C, this.m, function() {});
        k.Gb(a, b, c, d, e, f, g, h);
        a = _.A(this.j);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, eoa(b, k), b.draw()
    };
    ix.prototype.kd = function(a) {
        this.j.push(a);
        this.h && eoa(a, this.h);
        this.m.refresh()
    };
    ix.prototype.zd = function(a) {
        _.ob(this.j, a)
    };
    kx.kd = doa;
    kx.zd = coa;
    _.Pe("overlay", {
        Zq: function(a) {
            if (a) {
                (0, jx.zd)(a);
                (0, kx.zd)(a);
                var b = a.getMap();
                b && (b instanceof _.qf ? (0, kx.kd)(a) : (0, jx.kd)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.br(a, {
                Qd: function(b) {
                    _.an(b.event.Ha)
                },
                sc: function(b) {
                    return _.Hq(b)
                },
                kh: function(b) {
                    return _.Iq(b)
                },
                ad: function(b) {
                    return _.Iq(b)
                },
                vc: function(b) {
                    return _.Jq(b)
                }
            }).xi(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.Te);
            a.addEventListener("contextmenu", _.Te);
            a.addEventListener("dblclick", _.Te);
            a.addEventListener("mousedown",
                _.Te);
            a.addEventListener("mousemove", _.Te);
            a.addEventListener("MSPointerDown", _.Te);
            a.addEventListener("pointerdown", _.Te);
            a.addEventListener("touchstart", _.Te);
            a.addEventListener("wheel", _.Te)
        }
    });
});