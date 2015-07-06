/* ==============================================================

   Author: UDX
   Author URL: http://themeforest.net/user/UDX
   Template: Navy - One Page Personal 3D Template
   Template URL: #
   Version: 1.0

   ============================================================== */
   
neuroid = {
    _144_: 0,
    _141_: 0,
    _142_: 0,
    DE4nAIEX: 1200,
    _1B_: 1000,
    _86_: 0,
    _EA_: 4,
    _F4_: 0,
    _F6_: 0,
    _F5_: .2,
    _F1_: false,
    pageIndex: 0,
    _FC_: 0,
    _FF_: false,
    _EC_: false,
    _F8_: 0,
    _FA_: 0,
    _F9_: 0,
    _F3_: 0,
    _F2_: undefined,
    _EE_: undefined,
    _EF_: undefined,
    _F0_: undefined,
    _FE_: 1,
    _FB_: [],
    _71_: false,
    _22_: 0,
    ME: 1,
    SKILL: 2,
    _1AA_: 3,
    DE4NALex: 4,
    _1EC_: 0,
    _1EB_: 0,
    _1EA_: 0,
    _169_: [],
    _11C_: [],
    _60_: [],
    _62_: undefined,
    _63_: 0,
    _61_: false,
    deAN_4l3X: 0,
    deAN_4IEX: 0,
    _37_: 0,
    _6F_: false,
    _39_: null,
    _36_: "",
    D3aNa13X: "",
    _38_: 0,
    D3anaI3X: 0,
    dEAn4I3X: false,
    _16F_: true,
    pA: undefined,
    _105_: undefined,
    _107_: undefined,
    _109_: undefined,
    _D7_: undefined,
    _D5_: undefined,
    _D4_: undefined,
    _D8_: undefined,
    _D9_: undefined,
    _D6_: undefined,
    objPause: undefined,
    _145_: 0,
    init: function() {
        _164_.init();
        if (!_164_.is3d) return this._45_(
            'NO3D');
        this.De4N_4I3X();
        this._67_();
        this._6A_();
        _136_.init();
        this._65_();
        this._66_();
        this.D3AN_413x();
        this._2E_();
        this._2F_();
        this.deaN_AI3x();
        this.DeaNAI3X();
        this.pA = new _1A0_(-500, 0, -250);
        this._100_ = new _1A0_(-482, 0, -232);
        this._105_ = new _1A0_(-500, 0, 250);
        this._106_ = new _1A0_(-482, 0, 232);
        this._107_ = new _1A0_(500, 0, -250);
        this._108_ = new _1A0_(
            482, 0, -232);
        this._109_ = new _1A0_(500, 0, 250);
        this._10C_ = new _1A0_(
            482, 0, 232);
        dEan4l3X.init(0, 0, 400, 1500);
        dEan4l3X._D1_._E0_ =
            14;
        this._24_("grab");
        this.resize();
        window.focus();
        this.D34n_4IEx(
            ['images/page_cover.jpg', 'images/page_about.jpg', 'images/page_skills.jpg', 'images/page_work.jpg',
                'images/text_0.png', 'images/text_0.mob.png', 'images/text_1.png', 'images/text_2.png',
                'images/text_3.png', 'images/text_3.mob.png', 'images/text_4.png', 'images/paused.png',
                'images/empty.png', 'images/tabs/_checkered.jpg', 'images/tabs/skill_text.png',
                'images/tabs/work_logos.png', 'images/tabs/work_text.png', 'images/tabs/work_gallery.jpg',
                'images/tabs/work_closeicon.png', 'images/tabs/me_ship.png', 'images/tabs/me_box.jpg', 'images/tabs/me_box_fwa1.jpg',
                'images/tabs/me_box_fwa2.jpg', 'images/tabs/skill_ruler.png', 'images/tabs/skill_setsquare.png',
                'samples/project1/project1_youtube.png', 'samples/project1/project1_mobile.png',
                'samples/project1/project1_map.png', , 'samples/project1/fwa_adobe_cuttingedgeaward.jpg',
                'samples/project4/project4_title.png', 'samples/project4/project4_cannes_logo.png', 'samples/project4/project4_screen2.png',
                'samples/project4/project4_screen1.jpg', 'samples/project4/project4_channelconnect_onepage.jpg', 'samples/project6/project6_fwa.jpg',
                'samples/project6/project6_zoomout.jpg', 'samples/project6/project6_game.jpg', 'samples/project7/project7_title.png',
                'samples/project7/project7_screen1.jpg', 'samples/project7/project7_stats_map.png', 'samples/project7/project7_stats_countries.png',
                'samples/project5/project5_screen1.jpg', 'samples/project3/project3_tagtree.jpg', 'samples/project3/project3_tagtree2.jpg',
                'samples/project2/ooz_android.png', 'samples/project2/ooz_animate1.png', 'samples/project2/ooz_animate2.png',
                'samples/project2/ooz_mesh.png', 'samples/project2/ooz_texture.png', 'samples/project8/project8_covers.jpg',
                'samples/project8/project8_196_screen1.jpg', 'samples/project8/project8_196_screen2.jpg', 'samples/project8/project8_197_screen1.jpg',
                'samples/project8/project8_199_screen1.jpg'
            ])
    },
    d34N4I3X: function() {
        this._68_()
    },
    De4N_4I3X: function() {
        this._D7_ = document.getElementById('text');
        this._D5_ = document.getElementById(
            'nav');
        this._D8_ = document.getElementById('work');
        this._D9_ = document.getElementById(
            'workcontents');
        this._D4_ = document.getElementById('controls');
        this._D6_ = document.getElementById(
            'social');
        this.objPause = document.getElementById('pause');
        if (_164_._70_) {
            this._D4_.style.display =
                'none';
            this._D5_.id = 'navmob';
            this._D5_.innerHTML = "<div id='navmob_left'></div><div id='navmob_right'></div>";
            _D2_ = document.getElementById('navmob_left');
            _D2_.addEventListener("touchstart",
                function(e) {
                    neuroid._F5_ = .2;
                    neuroid._F6_ = neuroid._F6_ - .9995;
                    neuroid._F1_ =
                        false;
                    neuroid.dEAn4I3X = true;
                    e.preventDefault()
                });
            _D2_.addEventListener("touchend",
                function(e) {
                    neuroid._36_ = neuroid.D3aNa13X = "";
                    neuroid.dEAn4I3X = false;
                    neuroid._6F_ =
                        false;
                    e.preventDefault()
                });
            _D2_ = document.getElementById('navmob_right');
            _D2_.addEventListener("touchstart", function(e) {
                neuroid._F5_ = .2;
                neuroid._F6_ = neuroid._F6_ + .9995;
                neuroid._F1_ = false;
                neuroid.dEAn4I3X = true;
                e.preventDefault()
            });
            _D2_.addEventListener("touchend", function(e) {
                neuroid._36_ =
                    neuroid.D3aNa13X = "";
                neuroid.dEAn4I3X = false;
                neuroid._6F_ = false;
                e.preventDefault()
            })
        } else {
            this._D4_.style.display = 'block'
        };
        $(document).mousemove(
            function(e) {
                if (neuroid._71_) neuroid.unpause();
                neuroid._C3_(e.pageX, e.pageY)
            });
        $(document).mousedown(function(e) {
            if (neuroid._71_) neuroid.unpause();
            var _1A_ = false;
            if (_19C_['pageOpen' + neuroid._1AA_] > .25 && neuroid._1AF_()) _1A_ = true;
            if (!_1A_ && !neuroid.dEAn4I3X) neuroid.de4n_AIex();
            neuroid.dEAn4I3X =
                false
        });
        $(document).mouseup(function(e) {
            if (neuroid._6F_) neuroid.DE4nAI3x();
            neuroid.dEAn4I3X = false
        });
        if (document.addEventListener) {
            document.addEventListener("mousewheel", this._C5_, false);
            document.addEventListener("DOMMouseScroll", this._C5_, false)
        } else {
            document.attachEvent(
                "onmousewheel", this._C5_)
        };
        document.addEventListener("touchstart", function(e) {
            var _177_ =
                e.touches[0];
            neuroid._C3_(_177_.pageX, _177_.pageY);
            var _1A_ = false;
            if (_19C_['pageOpen' +
                    neuroid._1AA_] > .25 && neuroid._1B0_(_177_.pageX, _177_.pageY)) _1A_ = true;
            if (_1A_) return;
            if (!neuroid.dEAn4I3X) neuroid.de4n_AIex();
            neuroid.dEAn4I3X = false;
            e.preventDefault()
        });
        document.addEventListener("touchmove", function(e) {
            var _177_ =
                e.touches[0];
            neuroid._C3_(_177_.pageX, _177_.pageY);
            e.preventDefault()
        });
        document.addEventListener(
            "touchend",
            function(e) {
                var _177_ = e.touches[0];
                neuroid._C3_(_177_.pageX,
                    _177_.pageY);
                neuroid.DE4nAI3x();
                neuroid.dEAn4I3X = false;
                e.preventDefault()
            });
        if (_164_._70_) {
            window.addEventListener('deviceorientation',
                this.D34N4IEX, false);
            window.addEventListener('MozOrientation', this.D34N4IEX,
                false)
        };
        $(document).keydown(function(e) {
            var _74_ = e.keyCode || e.which;
            if (neuroid._1B9_ != -1) return;
            switch (_74_) {
                case 37:
                    neuroid._F5_ =
                        .1;
                    if (neuroid._EC_) neuroid._F4_ += .1;
                    neuroid._F6_ = neuroid._F6_ -
                        1;
                    break;
                case 38:
                    break;
                case 39:
                    neuroid._F5_ = .1;
                    if (
                        neuroid._EC_) neuroid._F4_ += .1;
                    neuroid._F6_ = neuroid._F6_ +
                        1;
                    break;
                case 40:
                    break
            };
            neuroid._F1_ =
                false;
            neuroid._F6_ =
                Math.max(
                    Math.min(neuroid._F6_, neuroid._FB_.length -
                        1), 0) >> 0
        });
        document.onselectstart = function() {
            return false
        };
        window.onfocus = function() {
            if (neuroid._71_) neuroid.unpause()
        };
        window.onblur = function() {
            neuroid.pause()
        };
        this._D5_.addEventListener(
            "mousedown",
            function(e) {
                var w = 113;
                var D34nAIEX = 23;
                var x = _C2_.X - (neuroid._144_ -
                    w >> 1);
                neuroid._F6_ = x / D34nAIEX >> 0;
                neuroid._F5_ = .1;
                neuroid._F1_ =
                    true;
                neuroid.dEAn4I3X = true;
                e.preventDefault()
            });
        $(window).resize(
            function() {
                neuroid.resize()
            })
    },
    _7C_: undefined,
    D34n_4IEx: function(
        urls) {
        this._7C_ = this.De4n_4leX('canvas_imageloader', null, null,
            null, 100, 100);
        var i;
        for (i = 0; i < urls.length; i++) this._7B_(urls[i]);
        this._63_ = new Date();
        this._62_ = window.setInterval('neuroid.loadImagesCheck()',
            1000 * 0.0322581)
    },
    _7B_: function(url) {
        var _64_ = new Image();
        _64_.src =
            url;
        this._60_.push(_64_);
        return _64_
    },
    loadImagesCheck: function() {
        var _170_ = new Date() - this._63_;
        var len = this._60_.length,
            i = len,
            tot = 0;
        while (i--) {
            if (this._60_[i].complete) tot++
        };
        if (
            tot >= len) {
            window.clearInterval(this._62_);
            this._62_ = undefined;
            this._7D_();
            this._162_()
        } else {
            this._1E_(this._7C_);
            var de4n_4l3x =
                this._7C_._D2_;
            var _26_ = this._7C_._26_;
            var _10D_ = 3.14159265359 * 2,
                PI_2 =
                3.14159265359 * .5;
            _26_.lineWidth = 4;
            _26_.beginPath();
            _26_.arc(de4n_4l3x.width >> 1,
                de4n_4l3x.height >> 1, 30, -PI_2, tot / len * _10D_ -
                PI_2, false);
            _26_.strokeStyle = 'rgba(97,205,136,.8)';
            _26_.stroke();
            _26_.beginPath();
            _26_.arc(
                de4n_4l3x.width >> 1, de4n_4l3x.height >> 1, 30, tot /
                len * _10D_ - PI_2, _10D_ - PI_2,
                false);
            _26_.strokeStyle = 'rgba(42,66,53,.6)';
            _26_.stroke()
        }
    },
    _7D_: function() {
        this._7C_._D2_.parentNode.removeChild(
            this._7C_._D2_);
        this._7C_ = undefined;
        this._61_ =
            true;
        this.d34N4I3X()
    },
    _162_: function() {
        this.setPageFromHash();
        if (_164_._70_) {
            window.requestAnimationFrame =
                window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
            (window.animateFrame = function(time) {
                neuroid.loop();
                window.animateTimestamp =
                    time;
                window.requestAnimationFrame(animateFrame)
            })()
        } else {
            window.setInterval(
                'neuroid.loop()', 1000 * 0.0322581)
        }
    },
    resize: function() {
        this._144_ = $(window)
            .width();
        this._141_ = $(window).height();
        var _D3_ = document.getElementById(
            'content');
        _D3_.style.width = this._144_ + 'px';
        _D3_.style.height =
            this._141_ + 'px';
        var Neuro1d_C0_uK = this._141_ > 700 ? 1.8 : 1.5;
        if (
            window.innerWidth / window.innerHeight > Neuro1d_C0_uK) {
            this._142_ = window.innerHeight
        } else {
            this._142_ = window.innerWidth / Neuro1d_C0_uK
        };
        if (this._142_ > 900)
            this._142_ = 900
    },
    _C3_: function(x, y) {
        var w = neuroid._144_,
            h = neuroid._141_;
        _C2_.X = Math.max(Math.min(x, w), 0);
        _C2_.Y = Math.max(Math.min(y, h), 0);
        _C2_._1CE_ = _C2_.X / w;
        _C2_.Ymf = _C2_.Y / h;
        if (!_164_._70_) {
            _C2_.nEUrOlD_co_uk = _C2_._1CE_;
            _C2_.D3an_4l3x = _C2_.Ymf
        }
    },
    _C5_: function(e) {
        var e = window.event || e;
        var _30_ = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        neuroid._F6_ =
            Math.max(Math.min(neuroid._F6_ - _30_ *
                .1, neuroid._EA_), 0);
        return false
    },
    D34N4IEX: function(e) {
        var DE4n4lEX,
            axis2;
        var _133_ = 3.14159265359 * 0.0055556;
        if (!e.gamma && !e.beta) {
            DE4n4lEX = -e.x;
            axis2 = -e.y
        } else {
            DE4n4lEX =
                e.gamma * _133_;
            axis2 = e.beta * _133_
        };
        var _75_ = 0;
        var _52_ = 0;
        switch (
            window.orientation || 0) {
            case 0:
                _75_ = -Math.sin(DE4n4lEX);
                _52_ = Math.sin(axis2 - 1.0);
                break;
            case 180:
                _75_ = Math.sin(DE4n4lEX);
                _52_ = -Math.sin(axis2 + 1.0);
                break;
            case -90:
                _75_ = Math.sin(axis2);
                _52_ = Math.sin(DE4n4lEX - 1.0);
                break;
            case 90:
                _75_ = -Math.sin(
                    axis2);
                _52_ = -Math.sin(DE4n4lEX + 1.0);
                break
        };
        _C2_.nEUrOlD_co_uk =
            _75_ + .5;
        _C2_.D3an_4l3x = _52_ * 10 + .5
    },
    de4n_AIex: function() {
        this.deAN_4l3X =
            _C2_.X;
        this.deAN_4IEX = _C2_.Y;
        this._6F_ = true;
        if (this._36_ == "") {
            this._38_ =
                this._F4_ + 1.1 >> 0;
            this.D3anaI3X = this._F4_ - .1 >> 0
        };
        this._F1_ = false;
        this._F5_ = .2;
        this._24_("grabbing")
    },
    DE4nAI3x: function() {
        this._6F_ =
            false;
        this._39_ = this._36_;
        this._36_ = this.D3aNa13X;
        this._24_("grab")
    },
    loop: function() {
        this._18F_();
        if (this._71_) return;
        this._86_++;
        if (this._6F_) {
            var _42_ = _C2_.X - this.deAN_4l3X;
            switch (this._36_) {
                case "":
                    var d34N4l3x = _164_._70_ ? 4 : 2;
                    this._F6_ += (this.deAN_4l3X -
                        _C2_.X) / this._142_ * d34N4l3x;
                    this._F6_ = Math.max(Math.min(this._F6_,
                        this._EA_), 0);
                    this._F6_ = Math.max(Math.min(this._F6_, this._38_), this.D3anaI3X);
                    this.deAN_4l3X = _C2_.X;
                    this.deAN_4IEX = _C2_.Y;
                    break;
                case "WORKSAMPLE":
                    this._D9_.xTarget -= (this.deAN_4l3X - _C2_.X) * 1.25;
                    this._D9_.xTarget = Math.min(
                        this._D9_.xTarget, 0);
                    this.deAN_4l3X = _C2_.X;
                    break;
                case "ME":
                    break
            }
        } else if (this._39_ !==
            null) {
            var _B2_ = this._F6_ - (this._F6_ >> 0);
            if (_B2_ > .9) this._F6_ =
                this._F6_ + 1 >> 0;
            if (_B2_ < .1) this._F6_ = this._F6_ >> 0
        };
        var _10A_ =
            this._F6_ - this._F4_;
        if (_10A_ > -.001 && _10A_ < .001) {
            this._F4_ = this._F6_;
            this._F1_ = false
        } else {
            if (
                neuroid._F1_) {
                var _10E_ =
                    this._F4_ *
                    (
                        1 -
                        this._F5_) + this._F6_ * this._F5_;
                if (_10E_ > this._F4_) {
                    _10E_ = Math.min(_10E_, this._F4_ + .1)
                } else {
                    _10E_ = Math.max(_10E_, this._F4_ -
                        .1)
                };
                this._F4_ = _10E_
            } else {
                var _10B_ = 2;
                if (
                    _10A_ > _10B_) this._F6_ = this._F4_ + _10B_;
                if (_10A_ < -
                    _10B_) this._F6_ = this._F4_ - _10B_;
                this._F4_ = this._F4_ *
                    (1 - this._F5_) + this._F6_ * this._F5_
            }
        };
        this._F6_ = Math.max(Math.min(this._F6_, this._EA_), 0);
        this._F4_ = Math.max(Math.min(this._F4_, this._EA_), 0);
        this._FA_ = this._F4_ - (this._F4_ >> 0);
        var _A7_ =
            0;
        if (this._F4_ < 1) _A7_ = (1 - this._F4_);
        if (this._F4_ >=
            this._EA_ - 1) _A7_ = (this._EA_ - this._F4_ - 1);
        var _E6_ =
            this._FB_[Math.min(this._F4_ >> 0, this._FB_.length - 1)];
        var _E7_ =
            this._FB_[Math.min(this._F4_ + 1 >> 0, this._FB_.length - 1)];
        var _17_ =
            _E6_._17_ * (1 - this._FA_) + _E7_._17_ * this._FA_;
        var DEan_aIeX =
            _E6_.DEan_aIeX * (1 - this._FA_) + _E7_.DEan_aIeX * this._FA_;
        var N3URo1d_c0_uK =
            _E6_.N3URo1d_c0_uK * (1 - this._FA_) + _E7_.N3URo1d_c0_uK * this._FA_;
        var de4n_Al3X = _E6_.de4n_Al3X * (1 - this._FA_) + _E7_.de4n_Al3X *
            this._FA_;
        var d3an4LeX = _E6_.d3an4LeX * (1 - this._FA_) + _E7_.d3an4LeX *
            this._FA_;
        var _19_ = _E6_._19_ * (1 - this._FA_) + _E7_._19_ *
            this._FA_;
        var _AD_ = (1 - this._1B8_ * .5);
        var _B0_ = Math.cos(
            _A7_ * 1.57079632679 * .9);
        dEan4l3X._DC_.x = this._144_ * (
            .5 + de4n_Al3X);
        dEan4l3X._DC_.y = this._141_ * (.5 + d3an4LeX);
        var _B1_ = this._142_ * 0.0011765 * _19_;
        dEan4l3X.dE4n_4IEX =
            300 * (1 - _B1_) + 1400 * _B1_;
        dEan4l3X._DC_.z = 1500 *
            (1 - _B1_) + 10 * _B1_ + dEan4l3X.dE4n_4IEX;
        var ax =
            _17_ - .8 * Math.abs(_A7_ * .4) + .05 * _C2_.D3an_4l3x;
        var ay = (_C2_.nEUrOlD_co_uk - .5) * .4 * _B0_ * _AD_;
        dEan4l3X._199_(
            ax, ay * 2, N3URo1d_c0_uK);
        dEan4l3X._18E_();
        this._FE_ =
            _E6_.sizeXmult * (1 - this._FA_) + _E7_.sizeXmult * this._FA_;
        this._3E_();
        this._118_();
        this.D3AN4l3x();
        this._113_();
        this.D34n_4lEx();
        this._39_ = null
    },
    pause: function() {
        this._71_ = true;
        this.objPause.style.display = 'block'
    },
    unpause: function() {
        this._71_ = false;
        this.objPause.style.display =
            'none'
    },
    _67_: function() {
        var i, _E5_;
        for (i = 0; i <= this._EA_; i++) {
            _E5_ = new _E4_();
            _E5_._D2_ = document.getElementById(
                'page' + i);
            if (_E5_._D2_) {
                _E5_.objSurface = _E5_._D2_.getElementsByClassName(
                    'surface')[0];
                _E5_._D2_.noBuffer = true
            };
            _E5_.textImg = 'text_' +
                i + '.png';
            this._FB_[i] = _E5_;
            if (_E5_.objSurface) this._7B_(
                _E5_._D2_.innerHTML.split("url('")[1].split("'")[0])
        };
        this._FB_[1]._11C_ = [1150,
            1151, 1152, 1153, 1154, 1155, 1156, 1157
        ];
        this._FB_[1].ptsS = [];
        this._11C_[1150] = new _1A0_(-411, 0, -109);
        this._11C_[1151] =
            new _1A0_(-302, 0, -196);
        this._11C_[1152] = new _1A0_(-298, 0, -173);
        this._11C_[1153] =
            new _1A0_(-166, 0, -127);
        this._11C_[1154] = new _1A0_(379, 0, -217);
        this._11C_[1155] =
            new _1A0_(449, 0, -97);
        this._11C_[1156] = new _1A0_(206, 0, -210);
        this._11C_[1157] =
            new _1A0_(330, 0, -146);
        this._FB_[2]._11C_ = [2000, 2001, 2006, 2007, 2014,
            2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
            2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036,
            2037
        ];
        this._FB_[2].ptsS = [2050, 2051];
        this._11C_[2000] = new _1A0_(-452, 0, 114);
        this._11C_[2001] = new _1A0_(-12, 0, 198);
        this._11C_[2006] = new _1A0_(
            110, 0, 141);
        this._11C_[2007] = new _1A0_(440, 0, 34);
        this._11C_[2014] = new _1A0_(-217, 0, -20);
        this._11C_[2015] = new _1A0_(0, 0, -20);
        this._11C_[2016] = new _1A0_(-378, 0, -70);
        this._11C_[2017] = new _1A0_(-118, 0, -70);
        this._11C_[2018] = new _1A0_(-449, 0, 68);
        this._11C_[2019] = new _1A0_(-276, 0, 68);
        this._11C_[2020] = new _1A0_(
            1, 0, 86);
        this._11C_[2021] = new _1A0_(196, 0, 82);
        this._11C_[2022] = new _1A0_(-163, 0, 116);
        this._11C_[2023] = new _1A0_(-1, 0, 117);
        this._11C_[2024] = new _1A0_(
            2, 0, 7);
        this._11C_[2025] = new _1A0_(305, 0, 7);
        this._11C_[2026] = new _1A0_(5, 0, -122);
        this._11C_[2027] = new _1A0_(315, 0, -121);
        this._11C_[2028] = new _1A0_(222,
            0, -64);
        this._11C_[2029] = new _1A0_(466, 0, -64);
        this._11C_[2030] = new _1A0_(74,
            0, -200);
        this._11C_[2031] = new _1A0_(475, 0, -200);
        this._11C_[2032] = new _1A0_(-438,
            0, -120);
        this._11C_[2033] = new _1A0_(-197, 0, -120);
        this._11C_[2034] = new _1A0_(-
            215, 0, -165);
        this._11C_[2035] = new _1A0_(-5, 0, -165);
        this._11C_[2036] = new _1A0_(-471,
            0, -209);
        this._11C_[2037] = new _1A0_(-90, 0, -209);
        this._11C_[2050] = new _1A0_(-424,
            400, -267);
        this._11C_[2051] = new _1A0_(431, 400, -267);
        this._FB_[3]._11C_ = [];
        this._FB_[3].ptsS = []
    },
    setPageFromHash: function() {
        var u = document.location.href;
        if (u.indexOf('#')) {
            var hash = u.split('#')[1];
            i = this._FB_.length;
            while (i--) {
                _E5_ = this._FB_[i];
                if (_E5_._79_ == hash) {
                    this._F4_ = this._F6_ = i;
                    break
                }
            }
        }
    },
    _3E_: function() {
        var _DB_ = this.pageIndex;
        var _DA_ = this._EC_;
        this.pageIndex = this._F4_ >> 0;
        this._EC_ = this.pageIndex == this._F4_;
        var _E8_ = this.pageIndex,
            pageactive2 = this._EC_ ? -1 : this.pageIndex + 1;
        var p, _E5_;
        for (p = 0; p <= this._EA_; p++) {
            _E5_ = this._FB_[p];
            if (p == _E8_ || p == pageactive2) {
                if (!_E5_.isActive) {
                    switch (p) {
                        case this._22_:
                            this._4_();
                            break;
                        case this.ME:
                            this.DEan_a1EX();
                            break;
                        case this.SKILL:
                            this._5_();
                            break;
                        case this._1AA_:
                            this.nEuRoid_Co_Uk();
                            break;
                        case this.DE4NALex:
                            this._4_();
                            break
                    };
                    _E5_.isActive = true
                }
            } else {
                if (_E5_.isActive) {
                    switch (p) {
                        case this._22_:
                            this._2E_();
                            break;
                        case this.ME:
                            this._2F_();
                            break;
                        case this.SKILL:
                            this.deaN_AI3x();
                            break;
                        case this._1AA_:
                            this.DeaNAI3X();
                            break;
                        case this.DE4NALex:
                            this._2E_();
                            break
                    };
                    var _167_, i = this._169_.length;
                    while (i--) {
                        _167_ =
                            this._169_[i];
                        if (_167_.pageIndex == p && _167_._D2_) this._59_(_167_._D2_)
                    };
                    if (_E5_._D2_) this._59_(_E5_._D2_);
                    _E5_.isActive = false
                }
            }
        };
        var _A7_ = this._FA_;
        this._F8_ = _A7_ * 3.14159265359;
        this.pageRotMaster =
            this._F8_;
        var cos = Math.cos(this.pageRotMaster);
        var sin = Math.sin(this.pageRotMaster);
        var n3ur0Id_C0_Uk = Math.cos(this.pageRotMaster + 3.14159265359);
        var _14C_ =
            Math.sin(this.pageRotMaster + 3.14159265359);
        var _B6_ = this._FE_;
        var _FD_ =
            1200 * _B6_ >> 0;
        var _E9_ = 500 * _B6_ >> 0;
        this._EE_ = dEan4l3X.M;
        this._F9_ = this.pageIndex %
            2 == 0 ? 0 : 1;
        switch (this._F9_) {
            case 0:
                this._EF_ = _8B_._C0_(dEan4l3X.M, new _8D_(
                    new _1A0_(cos, -sin, 0), new _1A0_(sin, cos, 0), new _1A0_(0, 0, 1)));
                this._F0_ = _8B_._C0_(
                    dEan4l3X.M, new _8D_(new _1A0_(n3ur0Id_C0_Uk, -_14C_, 0), new _1A0_(_14C_, n3ur0Id_C0_Uk,
                        0), new _1A0_(0, 0, 1)));
                this.pA._DD_ = -cos * _E9_;
                this.pA._E0_ = -sin *
                    _E9_;
                this.pA._E1_ = -250;
                this._100_._DD_ = -cos * 482;
                this._100_._E0_ = -
                    sin * 482;
                this._100_._E1_ = -232;
                this._105_._DD_ = -cos * _E9_;
                this._105_._E0_ = -sin * _E9_;
                this._105_._E1_ = 250;
                this._106_._DD_ = -cos * 482;
                this._106_._E0_ = -sin * 482;
                this._106_._E1_ = 232;
                this._107_._DD_ = cos * _E9_;
                this._107_._E0_ =
                    sin * _E9_;
                this._107_._E1_ = -250;
                this._108_._DD_ = cos * 482;
                this._108_._E0_ =
                    sin * 482;
                this._108_._E1_ = -232;
                this._109_._DD_ = cos * _E9_;
                this._109_._E0_ =
                    sin * _E9_;
                this._109_._E1_ = 250;
                this._10C_._DD_ = cos * 482;
                this._10C_._E0_ =
                    sin * 482;
                this._10C_._E1_ = 232;
                this._FF_ = false;
                break;
            case 1:
                this._EF_ =
                    _8B_._C0_(dEan4l3X.M, new _8D_(new _1A0_(1, 0, 0), new _1A0_(0, cos, -sin), new _1A0_(
                        0, sin, cos)));
                this._F0_ = _8B_._C0_(dEan4l3X.M, new _8D_(new _1A0_(1, 0,
                    0), new _1A0_(0, n3ur0Id_C0_Uk, -_14C_), new _1A0_(0, _14C_, n3ur0Id_C0_Uk)));
                this.pA._DD_ = -_E9_;
                this.pA._E0_ = sin * 250;
                this.pA._E1_ = -cos * 250;
                this._100_._DD_ = -482;
                this._100_._E0_ = sin * 232;
                this._100_._E1_ = -cos * 232;
                this._105_._DD_ = -_E9_;
                this._105_._E0_ = -sin * 250;
                this._105_._E1_ = cos * 250;
                this._106_._DD_ = -482;
                this._106_._E0_ = -sin * 232;
                this._106_._E1_ = cos * 232;
                this._107_._DD_ =
                    _E9_;
                this._107_._E0_ = sin * 250;
                this._107_._E1_ = -cos * 250;
                this._108_._DD_ =
                    482;
                this._108_._E0_ = sin * 232;
                this._108_._E1_ = -cos * 232;
                this._109_._DD_ = _E9_;
                this._109_._E0_ = -sin * 250;
                this._109_._E1_ = cos * 250;
                this._10C_._DD_ = 482;
                this._10C_._E0_ = -sin * 232;
                this._10C_._E1_ = cos * 232;
                this._FF_ = this.pA._E1_ > this._105_._E1_;
                break
        };
        _136_._135_(dEan4l3X.M, [this.pA, this._105_, this._107_, this._109_,
            this._100_, this._106_, this._108_, this._10C_
        ]);
        this._1EC_ = Math.min(this._105_.z,
            this._109_.z);
        this._1EB_ = Math.max(this.pA.z, this._107_.z);
        this._1EA_ = 100 / (this._1EB_ -
            this._1EC_);
        this._FC_ = _8B_.d3ANAl3X(this.pA.sx, this.pA.sy, this._107_.sx, this._107_.sy,
            this._105_.sx, this._105_.sy) ? 0 : 1;
        var nEurOlD_c0_uK = 1 - Math.abs(_A7_ - .5) * 2;
        nEurOlD_c0_uK *=
            nEurOlD_c0_uK * .4;
        _E6_ = this._FB_[this.pageIndex];
        _E7_ = this._FB_[this.pageIndex + 1];
        if (_E6_ && _E6_.isActive) {
            (this._FF_ && this._FC_ == 1) ? this._25_(_E6_._D2_,
                1000, _FD_, 600, this._109_.sx, this._109_.sy, this._105_.sx, this._105_.sy, this._107_.sx,
                this._107_.sy, this.pA.sx, this.pA.sy, true): this._25_(_E6_._D2_, 1000, _FD_, 600, this.pA.sx,
                this.pA.sy, this._107_.sx, this._107_.sy, this._105_.sx, this._105_.sy, this._109_.sx, this._109_.sy,
                true);
            if (_E6_.objSurface) this.de4N_a1Ex(_E6_.objSurface, -nEurOlD_c0_uK);
            _E6_._D2_.width ==
                _FD_ ? true : _E6_._D2_.style.width = (_E6_._D2_.width = _FD_) + 'px'
        };
        if (_E7_ && _E7_.isActive) {
            this._FF_ ? this._25_(_E7_._D2_, 1000, _FD_, 600, this._105_.sx, this._105_.sy,
                this._109_.sx, this._109_.sy, this.pA.sx, this.pA.sy, this._107_.sx, this._107_.sy, true) : this._25_(_E7_._D2_, 1000, _FD_, 600, this._107_.sx, this._107_.sy, this.pA.sx,
                this.pA.sy, this._109_.sx, this._109_.sy, this._105_.sx, this._105_.sy, true);
            if (_E7_.objSurface)
                this.de4N_a1Ex(_E7_.objSurface, -nEurOlD_c0_uK);
            _E7_._D2_.width == _FD_ ? true : _E7_._D2_.style.width =
                (_E7_._D2_.width = _FD_) + 'px'
        };
        var j, pj, a, as, b, M, pt, mfmf, cs;
        for (j = 0; j <=
            1; j++) {
            pj = this.pageIndex + j;
            _A7_ = 1 - Math.abs(this._F4_ - pj);
            _19C_['pageOpen' +
                pj] = _A7_;
            mfmf = _A7_ * _A7_;
            _19C_['pageOpen' + pj + 'sq'] = mfmf;
            _19C_['pageOpen' +
                pj + 'sqsq'] = mfmf * mfmf;
            cs = Math.cos(_A7_ * 3.14159265359) * -.5 + .5;
            _19C_['pageOpen' +
                pj + 'cs'] = cs;
            _19C_['pageOpen' + pj + 'cscs'] = Math.cos(cs * 3.14159265359) * -.5 + .5;
            _19C_['pageOpen' + pj + 'oi'] = Math.cos((_A7_ * 1.4 - 1) * 3.14159265359) * .5 + .5;
            _E5_ = this._FB_[pj];
            if (!_E5_) continue;
            a = [];
            as = [];
            if (_E5_._11C_.length) {
                i = _E5_._11C_.length;
                while (i--) a.push(this._11C_[_E5_._11C_[i]]);
                var _1CF_ = this._FE_ * this._FE_,
                    ymult = 1,
                    _1E7_ = 1;
                if (_A7_ < .02) {
                    _1CF_ = (
                        _A7_ * 50) * .15 + .85;
                    _1E7_ = _1CF_ * _1CF_
                };
                M = j == 0 ? this._EF_ : this._F0_;
                _136_._138_(
                    M, a, _1CF_, ymult, _1E7_)
            };
            if (_E5_.ptsS.length) {
                i = _E5_.ptsS.length;
                while (i--) as.push(this._11C_[_E5_.ptsS[i]]);
                _136_._138_(this._EE_, as, 1, 1, 1)
            }
        };
        this._F3_ = this._FA_ < .5 ? this.pageIndex : this.pageIndex + 1;
        this._F2_ =
            _19C_['pageOpen' + this._F3_]
    },
    D34n_4lEx: function() {
        var x = (1.5 - this._FA_) * this._144_ %
            this._144_ >> 0;
        if (x != this._D7_.x) {
            this._D7_.x = x;
            this._D7_.style.left = (x - 302) + 'px'
        };
        var y = _164_._70_ ? (Math.max(.1 * this._141_ - 30, 10) - this._145_ >> 0) : (.1 * this._141_ - this._145_ >> 0);
        if (y != this._D7_.y) {
            this._D7_.y = y;
            this._D7_.style.top = y + 'px'
        };
        var _E5_ = this._F4_ + .5 >> 0;
        if (_E5_ != this._D7_._E5_) {
            this._D7_._E5_ =
                _E5_;
            this._D7_.style.backgroundImage = 'url(images/' + this._FB_[_E5_].textImg +
                ')'
        };
        var y = _164_._70_ ? (this._141_ - 90 + this._145_ >> 0) : (10 - this._145_ >> 0);
        if (y != this._D5_.y) {
            this._D5_.y = y;
            this._D5_.style.top = y + 'px'
        };
        if (!_164_._70_) {
            var _F_ = (this._F4_ + .5 >> 0) * 23;
            if (_F_ != this._D5_._F_) this._D5_.style.backgroundPosition =
                (this._D5_._F_ = _F_) + 'px 0px'
        }
    },
    _118_: function() {
        var _E8_ = this.pageIndex,
            pageactive2 = this._EC_ ? -1 : this.pageIndex + 1;
        if (_E8_ == this._22_) {
            this._191_(
                0)
        };
        if (_E8_ == this.DE4NALex || pageactive2 == this.DE4NALex) {
            this._191_(1)
        };
        if (
            _E8_ == this.SKILL || pageactive2 == this.SKILL) {
            this._198_()
        };
        if (_E8_ ==
            this.ME || pageactive2 == this.ME) {
            this._193_();
            this.D34nA1Ex()
        };
        if (_E8_ == this._1AA_ || pageactive2 ==
            this._1AA_) {
            this._19A_();
            this._40_()
        }
    },
    _113_: function() {
        var _E8_ =
            this.pageIndex,
            pageactive2 =
            this._EC_ ?
            -
            1 :
            this.pageIndex +
            1;
        if (
            _E8_ ==
            this.ME || pageactive2 ==
            this.ME) {
            var z =
                this._9E_._D2_.zIndex -
                15;
            var _D2_ =
                this._A2_._D2_;
            _D2_.zIndex ==
                z ?
                true :
                _D2_.style.zIndex =
                _D2_.zIndex =
                z
        }
    },
    DE4n4Iex: [],
    De4n_4leX: function(_id, _parent, _x, _y, _1F7_, _height) {
        var N3ur0ID_Co_UK =
            new D3ANaIex();
        N3ur0ID_Co_UK._D2_ = this.dEAN_4LeX(
            _id, '', '', 'canvas', _parent, _x, _y);
        N3ur0ID_Co_UK._26_ =
            N3ur0ID_Co_UK._D2_.getContext('2d');
        if (_1F7_ === undefined) {
            N3ur0ID_Co_UK.fullScreen =
                true;
            N3ur0ID_Co_UK._D2_.width = N3ur0ID_Co_UK.width =
                Math.min(this._144_, this.DE4nAIEX);
            N3ur0ID_Co_UK._D2_.height =
                N3ur0ID_Co_UK.height = Math.min(this._141_, this._1B_)
        } else {
            N3ur0ID_Co_UK.fullScreen =
                false;
            N3ur0ID_Co_UK._D2_.width = N3ur0ID_Co_UK.width =
                Math.abs(Math.min(_1F7_, this.DE4nAIEX));
            N3ur0ID_Co_UK._D2_.height =
                N3ur0ID_Co_UK.height = Math.abs(Math.min(_height, this._1B_))
        };
        N3ur0ID_Co_UK.centerX =
            _x === null ? .5 : false;
        N3ur0ID_Co_UK.centerY = _y ===
            null ? .5 : false;
        N3ur0ID_Co_UK.x = (N3ur0ID_Co_UK.centerX ?
            (this._144_ - N3ur0ID_Co_UK.width) * N3ur0ID_Co_UK.centerX :
            _x) >> 0;
        N3ur0ID_Co_UK.y = (N3ur0ID_Co_UK.centerY ?
            (this._141_ - N3ur0ID_Co_UK.height) * N3ur0ID_Co_UK.centerY :
            _y) >> 0;
        N3ur0ID_Co_UK._D2_.style.display = 'block';
        N3ur0ID_Co_UK._D2_.style.left =
            N3ur0ID_Co_UK.x + 'px';
        N3ur0ID_Co_UK._D2_.style.top = N3ur0ID_Co_UK.y +
            'px';
        this.DE4n4Iex.push(N3ur0ID_Co_UK);
        return N3ur0ID_Co_UK
    },
    _190_: function(N3ur0ID_Co_UK, x, y, w, h) {
        if (x < N3ur0ID_Co_UK._BD_)
            N3ur0ID_Co_UK._BD_ = x;
        if (x > N3ur0ID_Co_UK._90_) N3ur0ID_Co_UK._90_ = x;
        if (y < N3ur0ID_Co_UK._BF_) N3ur0ID_Co_UK._BF_ = y;
        if (
            y > N3ur0ID_Co_UK._91_) N3ur0ID_Co_UK._91_ = y;
        if (w) {
            x += w;
            y += h;
            if (x < N3ur0ID_Co_UK._BD_)
                N3ur0ID_Co_UK._BD_ = x;
            if (x > N3ur0ID_Co_UK._90_) N3ur0ID_Co_UK._90_ = x;
            if (
                y < N3ur0ID_Co_UK._BF_) N3ur0ID_Co_UK._BF_ = y;
            if (y > N3ur0ID_Co_UK._91_)
                N3ur0ID_Co_UK._91_ = y
        }
    },
    _1E_: function(N3ur0ID_Co_UK) {
        var d34n4LEX = false;
        if (N3ur0ID_Co_UK.fullScreen) {
            var _1A9_ = Math.min(this._144_,
                this.DE4nAIEX);
            var _5A_ = Math.min(this._141_, this._1B_);
            if (N3ur0ID_Co_UK.width !=
                _1A9_) {
                N3ur0ID_Co_UK._D2_.width = N3ur0ID_Co_UK.width = _1A9_;
                d34n4LEX = true
            };
            if (N3ur0ID_Co_UK.height != _5A_) {
                N3ur0ID_Co_UK._D2_.height =
                    N3ur0ID_Co_UK.height = _5A_;
                d34n4LEX = true
            }
        };
        if (!d34n4LEX) {
            if (N3ur0ID_Co_UK._90_ > 0) {
                N3ur0ID_Co_UK._26_.clearRect(N3ur0ID_Co_UK._BD_ - 1,
                    N3ur0ID_Co_UK._BF_ - 1, N3ur0ID_Co_UK._90_ - N3ur0ID_Co_UK._BD_ + 2,
                    N3ur0ID_Co_UK._91_ - N3ur0ID_Co_UK._BF_ + 2)
            } else {
                N3ur0ID_Co_UK._26_.clearRect(
                    0, 0, N3ur0ID_Co_UK.width, N3ur0ID_Co_UK.height)
            }
        };
        if (N3ur0ID_Co_UK.centerX || N3ur0ID_Co_UK.centerY)
            this.DE4N41EX(N3ur0ID_Co_UK);
        N3ur0ID_Co_UK._BD_ = N3ur0ID_Co_UK._BF_ = 5000;
        N3ur0ID_Co_UK._90_ = N3ur0ID_Co_UK._91_ = 0;
        N3ur0ID_Co_UK.needsRefresh = false
    },
    DE4N41EX: function(N3ur0ID_Co_UK) {
        if (N3ur0ID_Co_UK.centerX) {
            var x = (this._144_ -
                N3ur0ID_Co_UK.width) * N3ur0ID_Co_UK.centerX >> 0;
            if (N3ur0ID_Co_UK.x !== x)
                N3ur0ID_Co_UK._D2_.style.left = (N3ur0ID_Co_UK.x = x) + 'px'
        };
        if (N3ur0ID_Co_UK.centerY) {
            var y = (this._141_ - N3ur0ID_Co_UK.height) * N3ur0ID_Co_UK.centerY >> 0;
            if (N3ur0ID_Co_UK.y !== y) N3ur0ID_Co_UK._D2_.style.top = (N3ur0ID_Co_UK.y =
                y) + 'px'
        }
    },
    _23_: [],
    DEaN41eX: [],
    n3Ur0ld_c0_UK: 60,
    dE4n413x: undefined,
    d3AN4IEX: undefined,
    DeaNAl3x: undefined,
    dE4Na13X: undefined,
    _65_: function() {
        this.d3AN4IEX = this.De4n_4leX('canvas_coverback',
            null, null, null, 900, 550);
        this.d3AN4IEX._D2_.style.zIndex = 0;
        this.dE4n413x =
            this.De4n_4leX('canvas_coverfront', null, null, null, 900, 550);
        this.dE4n413x._D2_.style.zIndex =
            2001;
        this.D34n_41eX();
        var _E5_ = this._FB_[this._22_];
        _E5_._7A_ =
            '';
        _E5_._79_ = '';
        _E5_._17_ = 1.9;
        _E5_.DEan_aIeX = 0;
        _E5_.N3URo1d_c0_uK =
            3.14159265359;
        _E5_.de4n_Al3X = 0;
        _E5_.d3an4LeX = -.025;
        _E5_._19_ = .1;
        _E5_.sizeXmult = .5;
        if (_164_._70_) _E5_.textImg = 'text_0.mob.png';
        var _E5_ = this._FB_[this.DE4NALex];
        _E5_._7A_ = 'contact';
        _E5_._79_ = 'contact';
        _E5_._17_ = 1.9;
        _E5_.DEan_aIeX = 0;
        _E5_.N3URo1d_c0_uK =
            3.14159265359;
        _E5_.de4n_Al3X = 0;
        _E5_.d3an4LeX = -.025;
        _E5_._19_ = .1;
        _E5_.sizeXmult = .5
    },
    D34n_41eX: function() {
        var _11C_ = this._23_ = new Array();
        var _17A_ = this.DEaN41eX = new Array();
        var i, p, t;
        var _A7_, _B_, _34_;
        var _DD_, _E0_, _E1_;
        var sin, cos, _13C_;
        var ax,
            ay, dEAN_AlEX, D34nAIEX, by, bz, cx, cy, cz, _42_, _44_, D34N_4L3X;
        var h, d, w;
        var _132_ =
            170;
        p = t = 0;
        if (_164_._70_) {
            this.n3Ur0ld_c0_UK = 50;
            _132_ = 150
        };
        for (i = 0; i < this.n3Ur0ld_c0_UK; i++) {
            _A7_ = i / this.n3Ur0ld_c0_UK;
            _B_ = _A7_ * 6.29 + Math.random() * .05;
            _34_ =
                _132_ + Math.random() * 50;
            _DD_ = Math.sin(_B_) * _34_;
            _E1_ = Math.cos(_B_) * _34_;
            _E0_ =
                Math.random() * 100 - 50;
            d = (Math.random() * 5 >> 0) * 3 + 10;
            w = (Math.random() * 5 >> 0) * 3 +
                10;
            h = (Math.random() * 8 >> 0) * 6 + 10;
            _13C_ = Math.random() * 1.57;
            sin = Math.sin(_13C_);
            cos = Math.cos(_13C_);
            ax = 0;
            dEAN_AlEX = 0;
            D34nAIEX = d * sin;
            bz = d * cos;
            _42_ = w * cos;
            D34N_4L3X = w * -sin;
            cx = D34nAIEX + _42_;
            cz = bz + D34N_4L3X;
            w_2 = w >> 1;
            d_2 = d >> 1;
            ax += _DD_ -
                w_2;
            dEAN_AlEX += _E1_ - d_2;
            D34nAIEX += _DD_ - w_2;
            bz += _E1_ - d_2;
            cx += _DD_ - w_2;
            cz +=
                _E1_ - d_2;
            _42_ += _DD_ - w_2;
            D34N_4L3X += _E1_ - d_2;
            _E0_ -= h >> 1;
            _11C_[p + 0] = new _1A0_(
                ax, _E0_ + 0, dEAN_AlEX);
            _11C_[p + 1] = new _1A0_(D34nAIEX, _E0_ +
                0, bz);
            _11C_[p + 2] = new _1A0_(cx, _E0_ + 0, cz);
            _11C_[p + 3] = new _1A0_(
                _42_, _E0_ + 0, D34N_4L3X);
            _11C_[p + 4] = new _1A0_(ax, _E0_ + h, dEAN_AlEX);
            _11C_[p + 5] = new _1A0_(D34nAIEX, _E0_ + h, bz);
            _11C_[p + 6] = new _1A0_(
                cx, _E0_ + h, cz);
            _11C_[p + 7] = new _1A0_(_42_, _E0_ + h, D34N_4L3X);
            _17A_[t++] = new _179_(p + 4, p + 7, p + 0, 1);
            _17A_[t++] = new _179_(p + 3, p +
                0, p + 7, 1);
            _17A_[t++] = new _179_(p + 7, p + 6, p + 3, 1);
            _17A_[t++] =
                new _179_(p + 2, p + 3, p + 6, 1);
            _17A_[t++] = new _179_(p + 6, p + 5, p + 2, 1);
            _17A_[t++] = new _179_(p + 1, p + 2, p + 5, 1);
            _17A_[t++] = new _179_(
                p + 5, p + 4, p + 1, 1);
            _17A_[t++] = new _179_(p + 0, p + 1, p + 4, 1);
            _17A_[t++] = new _179_(p + 5, p + 6, p + 4, 1);
            _17A_[t++] = new _179_(p + 7, p +
                4, p + 6, 1);
            _17A_[t++] =
                new _179_(
                    p +
                    2,
                    p +
                    1,
                    p +
                    3, 1);
            _17A_[t++] = new _179_(p +
                0, p + 3, p + 1, 1);
            p += 8
        }
    },
    _4_: function() {
        this._D6_.style.opacity = 0;
        this._D6_.style.display = 'block';
        this._148_(this.dE4n413x._D2_);
        this._148_(this.d3AN4IEX._D2_)
    },
    _2E_: function() {
        this._D6_.style.opacity =
            0;
        this._D6_.style.display = 'none';
        this._59_(this.dE4n413x._D2_);
        this._59_(
            this.d3AN4IEX._D2_)
    },
    _191_: function(cover) {
        this._1E_(
            this.dE4n413x);
        this._1E_(this.d3AN4IEX);
        var x =
            (this._144_ - this.dE4n413x.width) >> 1;
        var y = (this._141_ - this.dE4n413x.height) >> 1;
        if (this.dE4n413x.x != x) this.dE4n413x._D2_.style.left =
            (this.dE4n413x.x = x) + 'px';
        if (
            this.dE4n413x.y != y) this.dE4n413x._D2_.style.top =
            (this.dE4n413x.y = y) + 'px';
        var x =
            (this._144_ - this.d3AN4IEX.width) >> 1;
        var y = (this._141_ - this.d3AN4IEX.height) >> 1;
        if (this.d3AN4IEX.x != x) this.d3AN4IEX._D2_.style.left =
            (this.d3AN4IEX.x = x) + 'px';
        if (
            this.d3AN4IEX.y != y) this.d3AN4IEX._D2_.style.top =
            (this.d3AN4IEX.y = y) + 'px';
        var _EB_ =
            cover == 0 ? this._22_ : this.DE4NALex;
        if (cover == 0) {
            this._192_(_EB_);
            this._3A_(_EB_)
        };
        var _AE_ = _19C_['pageOpen' +
            _EB_];
        this._FB_[_EB_].sizeXmult =
            Math.min(.5 + (1 - _AE_) * 1.333333, 1);
        if (
            cover == 1) {
            var _D2_ = this._D6_;
            var opacity =
                ((_AE_ - .5) * 2 * 20 >> 0) * 0.05;
            if (opacity > 0) {
                var x = this._D7_.x;
                var y = this._D7_.y + 100;
                if (_D2_.opacity !=
                    opacity) _D2_.style.opacity = _D2_.opacity =
                    opacity;
                if (_D2_.x != x) _D2_.style.left =
                    (_D2_.x = x) + 'px';
                if (_D2_.y !=
                    y) _D2_.style.top = (_D2_.y = y) + 'px';
                _D2_._1A2_ ? true : _D2_._1A2_ = !!(_D2_.style.display =
                    'block')
            } else {
                _D2_._1A2_ ? _D2_._1A2_ = !(_D2_.style.display = 'none') : true
            }
        }
    },
    _192_: function(_EB_) {
        var _124_ =
            _8B_.Neur0ID_Co_Uk(0, parseFloat(_C2_.X) * .01 + this._86_ *
                .02, parseFloat(_C2_.Y) * .01 + this._86_ *
                .06);
        var Q = _8B_._126_(_124_, dEan4l3X.Q);
        if (!this.DeaNAl3x) this.DeaNAl3x =
            Q;
        this.DeaNAl3x = _8B_._129_(Q, this.DeaNAl3x,
            .8);
        this.dE4Na13X = _8B_._12B_(this.DeaNAl3x);
        var _E5_ = this._FB_[_EB_]
    },
    _3A_: function(_EB_) {
        var _11C_ = this._23_,
            _17A_ = this.DEaN41eX;
        var _AA_ = _19C_['pageOpen' +
            _EB_ + 'sq'];
        var _A9_ = 1;
        var NeUR0ID_C0_Uk =
            500 - 100 * (1 - _AA_);
        var _10_ = 400 +
            100 * _AA_;
        var _18_ = dEan4l3X.O.z;
        var d3aN_aLEX = dEan4l3X.dE4n_4IEX;
        dEan4l3X.O.z =
            NeUR0ID_C0_Uk;
        dEan4l3X.dE4n_4IEX = _10_;
        _136_._13B_(
            this.dE4Na13X, _11C_);
        dEan4l3X.O.z = _18_;
        dEan4l3X.dE4n_4IEX =
            d3aN_aLEX;
        var _1FA_ = _136_._1E6_;
        var _1FB_ = _136_._1E7_;
        var _1F9_ = _136_._1E4_;
        var _1FC_ = _136_._1E9_;
        var _1DE_ = false;
        var _DD_ = -dEan4l3X.O.x + this.dE4n413x.width * .5;
        var _E0_ = -60 - dEan4l3X.O.y +
            this.dE4n413x.height * .5;
        var pt, ptA, ptB, ptC;
        var x, y, z, Ax, Ay, Bx, _13_, de4N_413X,
            _29_;
        var t, NeUR01d_c0_Uk, n3uRolD_co_UK;
        var _A7_, imf, mfdis;
        var _C9_,
            _64_;
        var i = _17A_.length * _AA_ >> 0;
        while (i--) {
            t = _17A_[i];
            ptA =
                _11C_[t.a];
            ptB = _11C_[t.b];
            ptC = _11C_[t.c];
            if (t.winding && _8B_.d3ANAl3X(
                    ptA.sx, ptA.sy, ptB.sx, ptB.sy, ptC.sx, ptC.sy)) continue;
            z = ((ptA.z +
                ptB.z + ptC.z) * .333 - _1FA_) * _1FB_ >> 0;
            while (_1F9_[z] == this._86_)
                z++;
            _1F9_[z] = this._86_;
            _1FC_[z] = i
        };
        var _26_ = this.d3AN4IEX._26_;
        _26_.globalAlpha = _A9_;
        z = _136_._1E4_.length;
        imf = 1 / _136_._1E4_.length;
        while (
            z--) {
            if (_1F9_[z] != this._86_) continue;
            t = _17A_[_1FC_[z]];
            ptA = _11C_[t.a];
            ptB = _11C_[t.b];
            ptC = _11C_[t.c];
            Ax = _DD_ +
                ptA.sx;
            Ay = _E0_ + ptA.sy;
            Bx = _DD_ + ptB.sx;
            _13_ = _E0_ + ptB.sy;
            de4N_413X =
                _DD_ + ptC.sx;
            _29_ = _E0_ + ptC.sy;
            _3_ = ptB.x - ptA.x;
            ABy = ptB.y -
                ptA.y;
            ABz = ptB.z - ptA.z;
            _6_ = ptC.x - ptA.x;
            ACy = ptC.y - ptA.y;
            ACz =
                ptC.z - ptA.z;
            _CE_ = ABy * ACz - ABz * ACy;
            _CF_ = ABz * _6_ - _3_ *
                ACz;
            _D0_ = _3_ * ACy - ABy * _6_;
            if (_CE_ < 0) _CE_ = -_CE_;
            if (_CF_ < 0)
                _CF_ = -_CF_;
            if (_D0_ < 0) _D0_ = -_D0_;
            _A7_ = _D0_ / (_CE_ + _CF_ + _D0_);
            _A7_ *= _A7_;
            mfdis = 1 - z * imf;
            mfdis *= mfdis;
            _A7_ *= mfdis;
            rgb = _A7_ * 255 >> 0;
            NeUR01d_c0_Uk = "rgb(" + (10 + 215 * _A7_ >> 0) + "," + (13 + 250 * _A7_ >> 0) + "," + (12 +
                    240 *
                    _A7_ >> 0) +
                ")";
            _26_.fillStyle =
                NeUR01d_c0_Uk;
            _26_.strokeStyle =
                NeUR01d_c0_Uk;
            _26_.beginPath();
            _26_.moveTo(Ax, Ay);
            _26_.lineTo(
                Bx, _13_);
            _26_.lineTo(de4N_413X, _29_);
            _26_.closePath();
            _26_.stroke();
            _26_.fill();
            if (!_1DE_ && ptA.z < NeUR0ID_C0_Uk) {
                _26_ = this.dE4n413x._26_;
                _26_.globalAlpha = _A9_;
                _1DE_ = true
            }
        }
    },
    _159_: [],
    _153_: undefined,
    _158_: 20,
    _157_: 1,
    _155_: undefined,
    _156_: [],
    _68_: function() {
        var i = this._159_.length,
            _167_;
        while (i--) {
            _167_ = this._159_[i];
            _167_._D2_.style.backgroundImage =
                '';
            _167_._D2_.style.overflow = 'hidden';
            _167_.N3ur0ID_Co_UK = this.De4n_4leX(
                'canvas_skill_' + i, _167_._D2_, 0, 0, -_167_.width * this._158_, _167_.height);
            _167_._1E3_ = true
        };
        this._155_ = this._7B_('images/tabs/skill_text.png');
        this._156_ = [0, 389, 574, 899, 1018, 1125, 1243, 1661, 1900, 2252,
            2541, 2925, 3000, 3377, 3613, 3896, 4205, 4746
        ];
        _167_ = this._153_;
        var N3ur0ID_Co_UK =
            this.De4n_4leX('canvas_skillcloud', _167_._D2_, 0, 0, _167_.width, _167_.height);
        var _26_ = N3ur0ID_Co_UK._26_;
        var i, k = 10;
        var _1F_, cloudy,
            sz, x, y, _56_;
        _26_.globalAlpha = .02;
        while (k--) {
            _1F_ = (Math.random() * .8 + .1) * N3ur0ID_Co_UK.width;
            cloudy = (Math.random() * .6 +
                .2) * N3ur0ID_Co_UK.height;
            for (i = 0; i < 50; i++) {
                sz = Math.random() * 15 + 5;
                x = Math.random() * (Math.random() * 100 - 50) + _1F_;
                y = Math.random() * 10 - 5 + cloudy;
                _56_ = _26_.createRadialGradient(
                    x, y, 4, x, y, sz);
                _56_.addColorStop(
                    0, 'rgba(255,255,255,1)');
                _56_.addColorStop(
                    .65, 'rgba(255,255,255,0.35)');
                _56_.addColorStop(
                    1, 'rgba(255,255,255,0)');
                _26_.beginPath();
                _26_.arc(x, y, sz, 0, 6.29, true);
                _26_.fillStyle = _56_;
                _26_.fill()
            }
        };
        this._69_()
    },
    _69_: function() {
        var _167_, x, w;
        var i = this._159_.length;
        while (i--) {
            _167_ = this._159_[i];
            x =
                w = 20;
            while (x < _167_.width) {
                this._12_(
                    _167_.N3ur0ID_Co_UK._26_, _167_.width, _167_.N3ur0ID_Co_UK.height,
                    x - w * 0.5 >> 0, _167_.N3ur0ID_Co_UK.height * (Math.random() * .7 + .3) >> 0, w);
                w = Math.random() * 35 + 30 >> 0;
                x += w
            }
        };
        var _E5_ =
            this._FB_[this.SKILL];
        _E5_._7A_ = 'skills';
        _E5_._79_ = 'skills';
        _E5_._17_ = 2.7;
        _E5_.DEan_aIeX =
            0;
        _E5_.N3URo1d_c0_uK = 3.14159265359;
        _E5_.de4n_Al3X = 0;
        _E5_.d3an4LeX =
            .18;
        _E5_._19_ = 1
    },
    _5_: function() {},
    deaN_AI3x: function() {},
    _198_: function() {
        var i = this._159_.length,
            _167_, kang;
        while (
            i--) {
            _167_ = this._159_[i];
            kang = (_C2_.nEUrOlD_co_uk * this._158_ >> 0) % this._158_;
            _167_.N3ur0ID_Co_UK._D2_.style.left = '-' + (kang *
                _167_.width) + 'px'
        }
    },
    _12_: function(_26_, width, height, x, ph, pw) {
        var dE4Na1eX = [
            [35, 60, 50],
            [30, 39, 36],
            [44, 68, 60],
            [56, 89, 78],
            [64, 142, 88],
            [35,
                35, 35
            ]
        ];
        var NeUR01d_c0_Uk = dE4Na1eX[Math.random() * dE4Na1eX.length >> 0];
        var _152_ = Math.random() * (this._156_.length - 1) >> 0;
        var _154_ = Math.random() * 2 + 4 >> 0;
        if (pw < 35) _154_ = -1;
        ph = Math.min(height - pw *
            1.25, ph);
        var _B_ = Math.random(),
            dang;
        var i, k = this._158_;
        for (
            i = 0; i < k; i++) {
            dang = (i / k) * (3.14159265359 * 2 * 0.1666667) * this._157_;
            this.deAn_413X(_26_, x + i * width, height,
                pw, ph, {
                    r: NeUR01d_c0_Uk[0],
                    g: NeUR01d_c0_Uk[1],
                    b: NeUR01d_c0_Uk[2]
                }, _B_ + dang,
                _152_, _154_)
        }
    },
    deAn_413X: function(
        _26_, x, y, w, h, NeUR01d_c0_Uk, _B_, _152_,
        _154_) {
        var _56_, rx, ry, rw, rh;
        var tint =
            function(NeUR01d_c0_Uk, _A7_) {
                return 'rgb(' +
                    (NeUR01d_c0_Uk.r * _A7_ >> 0) +
                    ',' + (NeUR01d_c0_Uk.g * _A7_ >> 0) + ',' + (NeUR01d_c0_Uk.b * _A7_ >> 0) + ')'
            };
        var _1D7_ = y - 3;
        _26_.save();
        _26_.beginPath();
        _26_.moveTo(
            x - w * .45, y - h);
        _26_.lineTo(x, y - h - w * 1.25);
        _26_.lineTo(x + w * .45, y - h);
        _26_.lineTo(x + w * .45, _1D7_ - w * .15);
        _26_.quadraticCurveTo(x, _1D7_ + w * .15, x - w * .45, _1D7_ -
            w * .15);
        _26_.closePath();
        _26_.clip();
        var d3AN_AIEX = 'rgb(63,43,33)';
        var de4N_A13X = 'rgb(223,166,122)';
        var d3AN_AIEX = '#333';
        _56_ = _26_.createLinearGradient(
            x - w * .45, y - h, x + w * .45, y - h);
        _56_.addColorStop(0, d3AN_AIEX);
        _56_.addColorStop(.45, de4N_A13X);
        _56_.addColorStop(.55, de4N_A13X);
        _56_.addColorStop(1, d3AN_AIEX);
        _26_.fillStyle = _56_;
        _26_.beginPath();
        _26_.moveTo(x - w * .45, y - h - 1);
        _26_.lineTo(x, y - h -
            w * 1.25);
        _26_.lineTo(x + w * .45, y - h - 1);
        _26_.fill();
        _26_.beginPath();
        rx = x - w * .2;
        ry = y - h - w * 1.25;
        rw = w * .4;
        rh = w * .26;
        _26_.rect(
            rx, ry, rw, rh);
        _56_ = _26_.createLinearGradient(rx, ry, rx + rw, ry);
        _56_.addColorStop(0, tint(NeUR01d_c0_Uk, .15));
        _56_.addColorStop(.5, tint(NeUR01d_c0_Uk,
            1));
        _56_.addColorStop(1, tint(NeUR01d_c0_Uk, .15));
        _26_.fillStyle =
            _56_;
        _26_.fill();
        var a = (_B_ * 360 + 360 + h >> 0) % 360;
        if (a > 90 -
            15 && a < 270 + 15) {
            var _11D_ = Math.sin(a * 3.14159265359 * 0.0055556) * w *
                .175 + x;
            _26_.beginPath();
            _26_.arc(_11D_, ry + rh - w * .07, w * .125,
                0, 6.29);
            _26_.fill()
        };
        var _B6_;
        var i, Ax, Az, Bx, _14_;
        var k = 3.14159265359 *
            2 * 0.1666667;
        for (i = 0; i <= 6; i++) {
            Ax = Math.cos(i * k - _B_);
            Az = -Math.sin(
                i *
                k -
                _B_);
            Bx =
                Math.cos(
                    (
                        i + 1) * k - _B_);
            _14_ = -Math.sin(
                (i + 1) * k - _B_);
            if (Ax < Bx) {
                _26_.beginPath();
                rx = Ax * w * .5 + x;
                ry = y - h - 1;
                rw = (Bx - Ax) * w * .5 + .5;
                rh = h + 1;
                _26_.rect(rx, ry, rw, rh);
                _B6_ = Math.min(
                    rw / (w * .5) + .25, 1);
                _56_ = _26_.createLinearGradient(rx, ry, rx + rw, ry);
                _56_.addColorStop(
                    0, tint(NeUR01d_c0_Uk, .6 * _B6_));
                _56_.addColorStop(.2, tint(NeUR01d_c0_Uk,
                    1 * _B6_));
                _56_.addColorStop(1, tint(NeUR01d_c0_Uk, .85 * _B6_));
                _26_.fillStyle =
                    _56_;
                _26_.fill();
                _26_.beginPath();
                _26_.moveTo(rx, ry + 1);
                _26_.quadraticCurveTo(
                    rx + rw * .5, ry - w * .35, rx + rw, ry + 1);
                _26_.closePath();
                _26_.fill();
                if (_154_ == i) {
                    var _64_ = this._155_;
                    var _15C_ = _64_.height - this._156_[_152_ +
                        1];
                    var _15D_ = _64_.height - this._156_[_152_];
                    var _151_ = _15D_ - _15C_;
                    var _15A_ = _64_.width;
                    var _150_ = _15A_ / _151_;
                    var _33_ = w * .8 * .5 / _150_;
                    if (_33_ < rh * .85) {
                        _26_.globalAlpha = .65;
                        _26_.drawImage(_64_, 0, _15C_,
                            _15A_, _151_, rx + rw * .15, ry + rh * .05, rw * .8, _33_);
                        _26_.globalAlpha =
                            1
                    }
                }
            }
        };
        _26_.restore()
    },
    _A3_: undefined,
    _A2_: undefined,
    _A1_: [],
    _98_: [],
    _9E_: undefined,
    _99_: undefined,
    _A4_: 8,
    _9A_: undefined,
    _9C_: undefined,
    _9D_: 0,
    _A5_: 0,
    _A6_: 0,
    _66_: function() {
        var _167_ = this._9E_;
        this._11C_[_167_.pA] =
            new _1A0_(0, 0, 0);
        this._11C_[_167_._105_] = new _1A0_(0, 0, 0);
        this._11C_[_167_._107_] =
            new _1A0_(0, 0, 0);
        this._11C_[_167_._109_] = new _1A0_(0, 0, 0);
        this._9E_.winding =
            0;
        this._9A_ = new _101_(0, 0, 0);
        this._9C_ = new _1A0_(0, 300,
            0);
        this._A2_ = this.De4n_4leX('canvas_stars_front', null, null,
            null);
        this._A3_ = this.De4n_4leX('canvas_stars_back', null, null,
            null);
        this._A3_._D2_.style.zIndex = 2001;
        var _E5_ = this._FB_[this.ME];
        _E5_._7A_ = 'me';
        _E5_._79_ = 'me';
        _E5_._17_ = 2.7;
        _E5_.DEan_aIeX = 0;
        _E5_.N3URo1d_c0_uK =
            3.14159265359;
        _E5_.de4n_Al3X = 0;
        _E5_.d3an4LeX = .18;
        _E5_._19_ = 1
    },
    DEan_a1EX: function() {
        this._148_(this._A2_._D2_);
        this._148_(this._A3_._D2_);
        this._A5_ = 0;
        var _E5_ = this._FB_[this.ME];
        var de4n4I3X =
            (this._A5_ * this._A4_ + 100) % 1246;
        _E5_.objSurface.style.backgroundPosition =
            '-' + (de4n4I3X) + 'px 0px'
    },
    _2F_: function() {
        this._59_(
            this._A2_._D2_);
        this._59_(this._A3_._D2_)
    },
    _193_: function() {
        var nEurOlD_c0_uK = _19C_['pageOpen' + this.ME + 'sq'];
        this._9D_ = nEurOlD_c0_uK > .9 ?
            1 : 0;
        this._A6_ = (nEurOlD_c0_uK - .9) * 10;
        this._A6_ *=
            this._A6_;
        switch (this._9D_) {
            case 0:
                this._A6_ = 0;
                break;
            case 1:
                this._A5_ += this._A6_;
                var _E5_ = this._FB_[this.ME];
                var de4n4I3X = (this._A5_ * this._A4_ + 100) % 1246;
                _E5_.objSurface.style.backgroundPosition =
                    '-' + (de4n4I3X) + 'px 0px';
                break
        };
        this._197_();
        this._195_();
        this._194_()
    },
    _197_: function() {
        var _161_;
        var i = this._A1_.length;
        while (i--) {
            _161_ = this._A1_[i];
            _161_._DD_ +=
                _161_._1A5_;
            if (_161_._DD_ < -500) this._A1_.splice(
                i, 1)
        };
        var _8F_ = _164_._70_ ? 20 : 100;
        var _1DA_ =
            _164_._70_ ? 300 : 450;
        if (this._9D_ && Math.random() < .15 && this._A1_.length < _8F_) {
            _161_ = new _101_(500 + Math.random() * 10,
                Math.random() * _1DA_, Math.random() * 500 - 250);
            _161_._14D_ =
                (_161_.z * 0.002 + .5) * .9 + .1;
            _161_._1A5_ = -2 -
                _161_._14D_ * 10;
            _161_.type = Math.random() < .2 ? 0 : 1;
            this._A1_.push(
                _161_)
        }
    },
    _194_: function() {
        var _47_;
        var x, y, z;
        var i =
            this._98_.length;
        while (i--) {
            _47_ = this._98_[i];
            x = (_47_.pA.x + _47_._105_.x +
                _47_._107_.x + _47_._109_.x) * .25;
            _47_.pA.x = (_47_.pA.x * .9 +
                x * .1) + _47_._1A5_;
            _47_._105_.x = (_47_._105_.x * .9 +
                x * .1) + _47_._1A5_;
            _47_._107_.x = (_47_._107_.x * .9 +
                x * .1) + _47_._1A5_;
            _47_._109_.x = (_47_._109_.x * .9 + x *
                .1) + _47_._1A5_;
            y = (_47_.pA.y + _47_._105_.y + _47_._107_.y +
                _47_._109_.y) * .25;
            _47_.pA.y = _47_.pA.y * .9 + y * .1;
            _47_._105_.y = _47_._105_.y *
                .9 + y * .1;
            _47_._107_.y = _47_._107_.y * .9 + y * .1;
            _47_._109_.y =
                _47_._109_.y * .9 + y * .1;
            z = (_47_.pA.z + _47_._105_.z + _47_._107_.z + _47_._109_.z) * .25;
            _47_.pA.z = _47_.pA.z * .9 + z * .1;
            _47_._105_.z = _47_._105_.z *
                .9 + z * .1;
            _47_._107_.z = _47_._107_.z * .9 + z * .1;
            _47_._109_.z =
                _47_._109_.z * .9 + z * .1;
            if (x > 480) this._98_.splice(i, 1)
        };
        var _8F_ = _164_._70_ ?
            20 : 100;
        if (this._9D_ && this._A5_ + this._A6_ - (this._A5_ >> 0) > 1 && this._98_.length < _8F_) {
            var _11C_ = this._11C_;
            var pA = _11C_[this._99_.pAout];
            var _105_ =
                _11C_[this._99_.pBout];
            var _107_ = _11C_[this._99_.pCout];
            var _109_ = _11C_[this._99_.pDout];
            if (pA !== undefined && _105_ !== undefined && _107_ !== undefined && _109_ !==
                undefined) {
                _47_ = {
                    pA: _8B_._1A1_(_109_, _107_, _105_, pA, .2 + Math.random() * .12, .25 + Math.random() * .14),
                    _105_: _8B_._1A1_(_109_, _107_,
                        _105_, pA, .8 - Math.random() * .12, .25 + Math.random() * .14),
                    _107_: _8B_._1A1_(
                        _109_, _107_, _105_, pA, .3 + Math.random() * .12, .7 - Math.random() * .14),
                    _109_: _8B_._1A1_(_109_, _107_, _105_, pA, .7 - Math.random() * .12,
                        .7 - Math.random() * .14),
                    _1A5_: 20
                };
                this._98_.push(_47_)
            }
        }
    },
    _195_: function() {
        var pr = this._9C_;
        var pt = this._9A_;
        var _A7_ = _19C_['pageOpen' + this.ME];
        var _B3_ = _19C_['pageOpen' + this.ME + 'sqsq'];
        var _AE_ = this._F4_ - this.ME;
        _19C_['pageOpenShip'] =
            _AE_ < 0 ? _A7_ : 1;
        var _B8_ = 1 - _A7_;
        _B8_ *= _B8_;
        var t = _164_._70_ ? this._A5_ *
            2 : this._A5_;
        var _DD_ = Math.sin(t * 0.030303) * 300 * _B3_;
        var _E0_ =
            Math.sin(t * 0.025) * 100 * _B3_ + 200;
        var _E1_ = Math.sin(t * 0.037037) * 150 * _B3_ +
            50;
        pr.x = _AE_ > 0 ? _DD_ + Math.cos(_A7_ * 1.57) * (this._F9_ == 0 ? -this._144_ *
            .25 : 100) : _DD_ + Math.cos(_A7_ * 1.57) * 200;
        pr.y = _AE_ > 0 ? _E0_ + _B8_ *
            (this._F9_ == 0 ? -300 : -250) : _E0_ +
            _B8_ *
            -
            100;
        pr.z =
            _AE_ > 0 ?
            _E1_ +
            _B8_ *
            (
                this._F9_ ==
                0 ?
                800 :
                800) :
            _E1_ +
            _B8_ *




            100;
        pt.x = pt.x * .1 +
            pr.x * .9;
        pt.y =
            pt.y * .1 + pr.y *
            .9;
        pt.z = pt.z * .1 +
            pr.z * .9
    },
    D34nA1Ex: function() {
        this._3C_();
        this.d34n_4I3x();
        this._3B_()
    },
    _3C_: function() {
        var pr =
            this._9C_;
        var pt = this._9A_;
        var _167_ = this._9E_;
        var _11C_ = this._11C_;
        var A, B, C, D;
        var _A_ = _19C_['pageOpen' +
            this.ME + 'cs'];
        var ax = (pt.z - pr.z) * .2;
        var ay = (pr.z -
            pt.z) * .2;
        var dEAN_AlEX = (pt.y - pr.y) * .25;
        var _9_ = .1 * _A_;
        if (ax > _9_)
            ax = _9_;
        if (ax < -_9_) ax = -_9_;
        if (ay > _9_) ay = _9_;
        if (ay < -_9_) ay = -_9_;
        if (dEAN_AlEX > _9_)
            dEAN_AlEX = _9_;
        if (dEAN_AlEX < -_9_) dEAN_AlEX = -_9_;
        ax += .2;
        dEAN_AlEX += .15 - 3.14159265359 * (
            1 - _19C_['pageOpenShip']);
        var _147_ = _164_._70_ ? this.d34n_aI3x(pt.x, pt.y, pt.z, ax * _A_ * 1.2,
            ay * _A_ * 1.5, dEAN_AlEX * _A_ * 1.2, 80, A, B, C, D) : this.d34n_aI3x(pt.x, pt.y, pt.z, ax * _A_ + _C2_.D3an_4l3x -
            .5, ay * _A_, dEAN_AlEX * _A_ - _C2_.nEUrOlD_co_uk + .5, 75, A, B, C, D);
        A = _147_.A;
        B = _147_.B;
        C = _147_.C;
        D = _147_.D;
        var deAN4lEx, NeuRoid_c0_UK, _2B_, D34nAI3x;
        _11C_[_167_.pA] = deAN4lEx = _8B_._13F_(C.x, C.y, C.z, D.x,
            D.y, D.z, A.x, A.y, A.z, 0, true);
        _11C_[_167_._105_] = NeuRoid_c0_UK = _8B_._13F_(C.x, C.y, C.z, D.x, D.y, D.z,
            B.x, B.y, B.z, 0, true);
        _11C_[_167_._107_] = _2B_ = new _1A0_(C.x, C.y, C.z);
        _11C_[_167_._109_] = D34nAI3x =
            new _1A0_(D.x, D.y, D.z);
        _11C_[_167_.pAout] = deAN4lEx;
        _11C_[_167_.pBout] = NeuRoid_c0_UK;
        _11C_[_167_.pCout] =
            _2B_;
        _11C_[_167_.pDout] = D34nAI3x
    },
    d34n_aI3x: function(_DE_, _DF_, Oz, angX, angY, angZ, _14D_, A, B, C, D) {
        var _132_ =
            _14D_;
        var _149_ = Math.sin(angX);
        var D34n_A1eX = Math.cos(angX);
        var _14A_ = Math.sin(angY);
        var _21_ = Math.cos(
            angY);
        var _14B_ = Math.sin(angZ);
        var n3UR0lD_CO_uk = Math.cos(angZ);
        var m11 = _21_ * n3UR0lD_CO_uk;
        var m12 = n3UR0lD_CO_uk *
            _149_ * _14A_ - D34n_A1eX * _14B_;
        var m13 = D34n_A1eX * n3UR0lD_CO_uk * _14A_ + _149_ * _14B_;
        var m21 = _21_ *
            _14B_;
        var m22 = D34n_A1eX * n3UR0lD_CO_uk + _149_ * _14A_ * _14B_;
        var m23 = D34n_A1eX * _14A_ * _14B_ - n3UR0lD_CO_uk *
            _149_;
        var m31 = -_14A_;
        var m32 = _21_ * _149_;
        var m33 = D34n_A1eX * _21_;
        return {
            A: new _1A0_(-_132_ * m11 - _132_ * m13 +
                _DE_, -_132_ * m21 - _132_ * m23 + _DF_, -_132_ * m31 - _132_ * m33 + Oz),
            B: new _1A0_(_132_ * m11 - _132_ * m13 + _DE_,
                _132_ * m21 - _132_ * m23 + _DF_, _132_ * m31 - _132_ * m33 + Oz),
            C: new _1A0_(-_132_ * m11 + _132_ * m13 + _DE_, -_132_ *
                m21 + _132_ * m23 + _DF_, -_132_ * m31 + _132_ * m33 + Oz),
            D: new _1A0_(_132_ * m11 + _132_ * m13 + _DE_, _132_ * m21 + _132_ *
                m23 + _DF_, _132_ * m31 + _132_ * m33 + Oz)
        }
    },
    d34n_4I3x: function() {
        if (this._A3_.needsRefresh) this._1E_(this._A3_);
        if (this._A2_.needsRefresh)
            this._1E_(this._A2_);
        _136_._135_(this._EE_, this._A1_);
        var _BD_ = 0xffffff,
            _90_ = 0,
            _BF_ = 0xffffff,
            _91_ = 0;
        var _27_ =
            this._A3_._26_;
        var D3AN_a1Ex = this._A2_._26_;
        var _BC_ = this._11C_[this._9E_.pA]._E1_ + this._11C_[this._9E_._109_]._E1_ >> 1;
        D3AN_a1Ex.strokeStyle = _27_.strokeStyle = 'rgba(180,255,230,0.5)';
        D3AN_a1Ex.fillStyle = _27_.fillStyle = 'rgba(180,255,230,' +
            (.15 * this._A6_) + ')';
        var _DD_ = this._A3_.x;
        var _E0_ = this._A3_.y;
        var x, y, _161_, _26_;
        var i =
            this._A1_.length;
        while (i--) {
            _161_ = this._A1_[i];
            _26_ = _161_._E1_ > _BC_ ? _27_ : D3AN_a1Ex;
            x = _161_.sx - _DD_;
            y = _161_.sy - _E0_;
            if (_161_.type == 0) {
                _26_.beginPath();
                _26_.lineWidth =
                    _161_._14D_;
                _26_.moveTo(x, y);
                _26_.lineTo(x + _161_._14D_ * _161_._14D_ * 30,
                    y);
                _26_.stroke();
                _161_._1A5_ *= 1.05
            } else {
                _26_.beginPath();
                _26_.arc(
                    x, y, 2 + _161_._14D_ * 28, 0, 6.29, false);
                _26_.fill()
            };
            _BD_ = Math.min(
                _BD_, x);
            _90_ = Math.max(_90_, x);
            _BF_ = Math.min(_BF_, y);
            _91_ = Math.max(_91_, y)
        };
        if (_90_ > 0) {
            this._190_(this._A3_,
                _BD_ - 30, _BF_ - 30);
            this._190_(this._A3_, _90_ +
                30, _91_ + 30);
            this._190_(this._A2_, _BD_ - 30, _BF_ -
                30);
            this._190_(this._A2_, _90_ + 30, _91_ +
                30);
            this._A3_.needsRefresh = true;
            this._A2_.needsRefresh =
                true
        }
    },
    _3B_: function() {
        var len = this._98_.length;
        var i = len,
            a = [];
        while (i--) a.push(this._98_[i].pA,
            this._98_[i]._105_, this._98_[i]._107_, this._98_[i]._109_);
        _136_._139_(a);
        var _BD_ = 0xffffff,
            _90_ = 0,
            _BF_ = 0xffffff,
            _91_ = 0;
        var _27_ =
            this._A3_._26_;
        var D3AN_a1Ex = this._A2_._26_;
        D3AN_a1Ex.lineJoin = _27_.lineJoin = 'round';
        var _DD_ = this._A3_.x;
        var _E0_ = this._A3_.y;
        var d3AN_Al3x, exhaust1, _26_, _A7_;
        var i =
            len;
        while (i--) {
            d3AN_Al3x = this._98_[i];
            exhaust1 = this._98_[i + 1];
            _26_ = d3AN_Al3x.pA.sx > d3AN_Al3x._105_.sx ?
                D3AN_a1Ex : _27_;
            _A7_ = (i - 1) / (len -
                1);
            if (_A7_ < 0) _A7_ = 0;
            D3AN_a1Ex.lineWidth = _27_.lineWidth =
                5 * _A7_;
            _26_.strokeStyle = 'rgba(255,235,115,' + (Math.sin(
                _A7_ * 3.1415) * .5) + ')';
            if (exhaust1) {
                _26_.beginPath();
                _26_.moveTo(d3AN_Al3x.pA.sx - _DD_,
                    d3AN_Al3x.pA.sy - _E0_);
                _26_.lineTo(exhaust1.pA.sx - _DD_,
                    exhaust1.pA.sy - _E0_);
                _26_.moveTo(d3AN_Al3x._105_.sx - _DD_, d3AN_Al3x._105_.sy -
                    _E0_);
                _26_.lineTo(exhaust1._105_.sx - _DD_, exhaust1._105_.sy - _E0_);
                _26_.moveTo(d3AN_Al3x._107_.sx - _DD_, d3AN_Al3x._107_.sy - _E0_);
                _26_.lineTo(exhaust1._107_.sx - _DD_, exhaust1._107_.sy - _E0_);
                _26_.moveTo(d3AN_Al3x._109_.sx -
                    _DD_, d3AN_Al3x._109_.sy - _E0_);
                _26_.lineTo(exhaust1._109_.sx - _DD_,
                    exhaust1._109_.sy - _E0_);
                _26_.closePath();
                _26_.stroke()
            };
            _BD_ = Math.min(_BD_, d3AN_Al3x.pA.sx -
                _DD_);
            _90_ = Math.max(_90_, d3AN_Al3x.pA.sx - _DD_);
            _BF_ = Math.min(_BF_, d3AN_Al3x.pA.sy -
                _E0_);
            _91_ = Math.max(_91_, d3AN_Al3x.pA.sy - _E0_)
        };
        if (_90_ > 0) {
            this._190_(this._A3_,
                _BD_ - 30, _BF_ - 30);
            this._190_(this._A3_, _90_ + 30, _91_ + 30);
            this._190_(
                this._A2_, _BD_ - 30, _BF_ - 30);
            this._190_(this._A2_, _90_ + 30, _91_ +
                30)
        }
    },
    _1C4_: [],
    _1C3_: [],
    _1AB_: undefined,
    _1B1_: undefined,
    _1B2_: [],
    _1B7_: undefined,
    _1BD_: -1,
    _1BA_: 0,
    _1BB_: 0,
    _1B4_: -1,
    _1B3_: 0,
    _1B5_: 0,
    _1B6_: 0,
    _1B9_: -1,
    _1B8_: 0,
    _1AD_: [],
    _1AE_: -1,
    _1C2_:
        -1,
    _1BE_: [],
    _1BC_: [],
    _1C1_: undefined,
    _1C5_: undefined,
    _1AC_: undefined,
    D3AN_413x: function() {
        this._6D_();
        this._6C_();
        this._6B_();
        var _E5_ =
            this._FB_[this._1AA_];
        _E5_._7A_ = 'work';
        _E5_._79_ = 'work';
        _E5_._17_ =
            2.7;
        _E5_.DEan_aIeX = 0;
        _E5_.N3URo1d_c0_uK = 3.14159265359;
        _E5_.de4n_Al3X =
            0;
        _E5_.d3an4LeX = .18;
        _E5_._19_ = 1;
        if (_164_._70_) _E5_.textImg =
            'text_3.mob.png'
    },
    _6D_: function() {
        var PT =
            this._1C4_ = [new _1A0_(459, 118, 190), new _1A0_(
                    463, 118, 199), new _1A0_(453, 118, 203), new _1A0_(450, 118, 193), new _1A0_(
                    459, 128, 190), new _1A0_(463, 128,
                    199), new _1A0_(453, 128, 203), new _1A0_(
                    450, 128, 193), new _1A0_(449, 93, 177), new _1A0_(471, 93, 189), new _1A0_(
                    459, 93, 211), new _1A0_(437, 93, 199), new _1A0_(449, 118, 177), new _1A0_(
                    471, 118, 189), new _1A0_(459, 118,
                    211), new _1A0_(437, 118,
                    199), new _1A0_(437, 55, 176), new _1A0_(474, 55, 179),
                new _1A0_(471, 55, 217), new _1A0_(
                    433, 55, 213), new _1A0_(
                    437, 93, 176), new _1A0_(474, 93, 179), new _1A0_(471, 93, 217),
                new _1A0_(433, 93, 213),
                new _1A0_(413, 55, 171),
                new _1A0_(426, 55, 166), new _1A0_(
                    430, 55, 179), new _1A0_(418, 55, 183), new _1A0_(413, 68, 171), new _1A0_(426, 68, 166), new _1A0_(
                    430, 68, 179), new _1A0_(418, 68, 183), new _1A0_(417, 0, 170), new _1A0_(472, 0, 166), new _1A0_(476, 0, 221), new _1A0_(421, 0, 225), new _1A0_(417, 55, 170), new _1A0_(472, 55, 166), new _1A0_(476, 55, 221), new _1A0_(421, 55, 225), new _1A0_(-171, 0, 159), new _1A0_(-147, 0, 156), new _1A0_(-144, 0, 180), new _1A0_(-168, 0, 183), new _1A0_(-171, 24, 159), new _1A0_(-147, 24,
                    156), new _1A0_(-144, 24, 180), new _1A0_(-168, 24, 183), new _1A0_(329, 0, 151), new _1A0_(
                    342, 0, 156), new _1A0_(337, 0, 169), new _1A0_(324, 0, 164), new _1A0_(329, 14, 151), new _1A0_(342, 14, 156), new _1A0_(337, 14, 169), new _1A0_(324, 14, 164), new _1A0_(352, 0, 138), new _1A0_(362, 0, 150), new _1A0_(350, 0, 160), new _1A0_(340, 0, 148), new _1A0_(352, 16, 138), new _1A0_(362, 16, 150), new _1A0_(350, 16, 160), new _1A0_(340, 16, 148), new _1A0_(285, 0, 117), new _1A0_(
                    324, 0, 124), new _1A0_(317, 0, 163), new _1A0_(278, 0, 156), new _1A0_(285, 40, 117), new _1A0_(
                    324, 40, 124), new _1A0_(317, 40, 163), new _1A0_(278, 40, 156), new _1A0_(324, 0, 107), new _1A0_(
                    356, 0, 103), new _1A0_(361, 0, 136), new _1A0_(328, 0, 140), new _1A0_(324, 33, 107), new _1A0_(356, 33, 103), new _1A0_(361, 33, 136), new _1A0_(328, 33, 140), new _1A0_(-469, 0, 74), new _1A0_(-447, 0, 84), new _1A0_(-457, 0, 106), new _1A0_(-479, 0, 96), new _1A0_(-469, 24, 74), new _1A0_(-447, 24, 84), new _1A0_(-457, 24, 106), new _1A0_(-479, 24, 96), new _1A0_(-453, 65, 5),
                new _1A0_(-441, 65, 9),
                new _1A0_(-445, 65, 21), new _1A0_(-457, 65, 17), new _1A0_(-453, 78, 5),
                new _1A0_(-441, 78, 9),
                new _1A0_(-445, 78, 21), new _1A0_(-457, 78, 17), new _1A0_(-474, 0, -1), new _1A0_(-412, 0, -20), new _1A0_(-393, 0, 42),
                new _1A0_(-455, 0, 61), new _1A0_(-474, 65, -1), new _1A0_(-412, 65, -20), new _1A0_(-393, 65, 42), new _1A0_(-455, 65, 61), new _1A0_(-386, 0, -38), new _1A0_(-347, 0, -40), new _1A0_(-345, 0, -1), new _1A0_(-384, 0, 1), new _1A0_(-386, 39, -38), new _1A0_(-347, 39, -40), new _1A0_(-345, 39, -
                    1), new _1A0_(-384, 39, 1), new _1A0_(
                    66, 0, -43), new _1A0_(81, 0, -33), new _1A0_(
                    71, 0, -18), new _1A0_(56, 0, -28), new _1A0_(66, 18, -43), new _1A0_(81, 18, -33), new _1A0_(71, 18, -18), new _1A0_(
                    56, 18, -28), new _1A0_(84, 0, -47), new _1A0_(111, 0, -51), new _1A0_(115, 0, -24), new _1A0_(88, 0, -20), new _1A0_(84, 27, -47), new _1A0_(
                    111, 27, -51), new _1A0_(115, 27, -24), new _1A0_(
                    88, 27, -20), new _1A0_(-452, 0, -59),
                new _1A0_(-410, 0, -86), new _1A0_(-383, 0, -44), new _1A0_(-425, 0, -17), new _1A0_(-452, 50, -59), new _1A0_(-410, 50, -86), new _1A0_(-383, 50, -44), new _1A0_(-425, 50, -17), new _1A0_(307,
                    0, -79), new _1A0_(319, 0, -66), new _1A0_(306, 0, -54), new _1A0_(
                    294, 0, -67), new _1A0_(307, 18, -79), new _1A0_(319, 18, -66), new _1A0_(306, 18, -54), new _1A0_(294, 18, -67), new _1A0_(235, 0, -98), new _1A0_(285, 0, -93), new _1A0_(
                    280, 0, -43), new _1A0_(230, 0, -48), new _1A0_(235,
                    50, -98), new _1A0_(285, 50, -93), new _1A0_(
                    280, 50, -43), new _1A0_(230, 50, -
                    48), new _1A0_(




                    -
                    248,
                    55, -
                    142),
                new _1A0_(-
                    224,
                    55, -
                    144), new _1A0_(-221, 55, -120), new _1A0_(-246, 55, -117), new _1A0_(-248, 80, -142), new _1A0_(-224, 80, -144), new _1A0_(-221, 80, -120), new _1A0_(-246,
                    80, -117), new _1A0_(-297, 0, -113), new _1A0_(-281, 0, -114), new _1A0_(-280, 0, -98), new _1A0_(-296, 0, -97), new _1A0_(-297, 16, -113), new _1A0_(-281, 16, -114), new _1A0_(-280, 16, -98), new _1A0_(-296, 16, -97), new _1A0_(151, 0, -169), new _1A0_(233, 0, -144), new _1A0_(
                    209, 0, -62), new _1A0_(126, 0, -86), new _1A0_(151, 86, -169), new _1A0_(
                    233, 86, -144), new _1A0_(209, 86, -62), new _1A0_(126, 86, -86), new _1A0_(-282, 0, -128), new _1A0_(-235, 0, -156), new _1A0_(-207, 0, -109), new _1A0_(-254, 0, -81), new _1A0_(-282, 55, -128), new _1A0_(-235, 55, -156), new _1A0_(-207, 55, -109), new _1A0_(-254, 55, -81), new _1A0_(-316, 0, -145), new _1A0_(-289, 0, -144), new _1A0_(-290, 0, -117), new _1A0_(-317, 0, -118), new _1A0_(-316, 27, -145), new _1A0_(-289, 27, -144), new _1A0_(-290, 27, -117), new _1A0_(-317, 27, -118), new _1A0_(-141, 0, -188), new _1A0_(-106, 0, -183), new _1A0_(-111, 0, -148), new _1A0_(-146, 0, -153), new _1A0_(-141, 35, -188), new _1A0_(-106, 35, -183), new _1A0_(-111, 35, -148), new _1A0_(-146,
                    35, -153), new _1A0_(-92, 0, -189), new _1A0_(-59, 0, -193), new _1A0_(-55, 0, -161), new _1A0_(-87, 0, -156), new _1A0_(-92, 33, -189), new _1A0_(-59, 33, -193), new _1A0_(-55, 33, -161), new _1A0_(-87,
                    33, -156), new _1A0_(-114, 0, -222), new _1A0_(-84, 0, -222), new _1A0_(-84, 0, -192), new _1A0_(-114, 0, -192), new _1A0_(-114,
                    30, -222), new _1A0_(-84, 30, -222), new _1A0_(-84, 30, -192), new _1A0_(-114, 30, -192)
            ];
        var PL = this._1C3_ = [new _112_(
                4, 5, 1, 0, '#141414'), new _112_(5, 6, 2, 1, '#1F231F'), new _112_(
                6, 7, 3, 2, '#161716'), new _112_(7, 6, 5, 4, '#374137'), new _112_(
                13, 14, 10, 9, '#181A18'), new _112_(14, 15, 11, 10, '#1E211E'), new _112_(
                15, 12, 8, 11, '#141414'), new _112_(15, 14, 13, 12, '#374137'), new _112_(
                21, 22, 18, 17, '#141414'), new _112_(22, 23, 19, 18, '#212621'), new _112_(
                23, 20, 16, 19, '#141414'), new _112_(23, 22, 21, 20, '#374137'), new _112_(
                29, 30, 26, 25, '#141414'), new _112_(30, 31, 27, 26, '#1F231F'), new _112_(
                31, 28, 24, 27, '#171917'), new _112_(31, 30, 29, 28, '#374137'), new _112_(
                37, 38, 34, 33, '#141414'), new _112_(38, 39, 35, 34, '#222722'), new _112_(
                39, 36, 32, 35, '#141414'), new _112_(39, 38, 37, 36, '#374137'), new _112_(
                45, 46, 42, 41, '#141414'), new _112_(46, 47, 43, 42, '#212621'), new _112_(
                47, 44, 40, 43, '#151515'), new _112_(47, 46, 45, 44, '#374137'), new _112_(
                53, 54, 50, 49, '#171817'), new _112_(54, 55, 51, 50, '#1F231F'), new _112_(
                55, 52, 48, 51, '#141414'), new _112_(55, 54, 53, 52, '#374137'), new _112_(
                60, 61, 57, 56, '#141414'), new _112_(61, 62, 58, 57, '#1C1F1C'), new _112_(
                62, 63, 59, 58, '#1A1C1A'), new _112_(63, 60, 56, 59, '#141414'), new _112_(
                63, 62, 61, 60, '#374137'), new _112_(69, 70, 66, 65, '#151615'), new _112_(
                70, 71, 67, 66, '#212521'), new _112_(71, 68, 64, 67, '#141414'), new _112_(
                71, 70, 69, 68, '#374137'), new _112_(77, 78, 74, 73, '#141414'), new _112_(
                78, 79, 75, 74, '#212621'), new _112_(79, 76, 72, 75, '#151515'), new _112_(
                79, 78, 77, 76, '#374137'), new _112_(85, 86, 82, 81, '#181918'), new _112_(
                86, 87, 83, 82, '#1E221E'), new _112_(87, 84, 80, 83, '#141414'), new _112_(
                87, 86, 85, 84, '#374137'), new _112_(93, 94, 90, 89, '#171817'), new _112_(
                94, 95, 91, 90, '#1F231F'), new _112_(95, 92, 88, 91, '#141414'), new _112_(
                95, 94, 93, 92, '#374137'), new _112_(101, 102, 98, 97, '#141414'), new _112_(
                102, 103, 99, 98, '#202420'), new _112_(103, 100, 96, 99, '#161716'), new _112_(
                103, 102, 101, 100, '#374137'), new _112_(109, 110, 106, 105, '#141414'), new _112_(110, 111, 107, 106, '#222722'), new _112_(111, 108,
                104, 107, '#141414'), new _112_(111, 110, 109, 108, '#374137'),
            new _112_(116, 117, 113, 112, '#141414'), new _112_(117, 118, 114, 113,
                '#191B19'), new _112_(118, 119, 115, 114, '#1D201D'), new _112_(119, 116,
                112, 115, '#141414'), new _112_(119, 118, 117, 116, '#374137'),
            new _112_(125, 126, 122, 121, '#141414'), new _112_(126, 127, 123, 122, '#212621'), new _112_(127, 124, 120, 123, '#151515'), new _112_(127, 126,
                125, 124, '#374137'), new _112_(132, 133, 129, 128, '#141414'), new _112_(
                133, 134, 130, 129, '#141414'), new _112_(134, 135, 131, 130, '#1D201D'), new _112_(
                135, 132, 128, 131, '#191B19'), new _112_(135, 134, 133, 132, '#374137'), new _112_(
                140, 141, 137, 136, '#141414'), new _112_(141, 142, 138, 137, '#1B1E1B'), new _112_(
                142, 143, 139, 138, '#1B1D1B'), new _112_(143, 140, 136, 139, '#141414'), new _112_(
                143, 142, 141, 140, '#374137'), new _112_(149, 150, 146, 145, '#141514'), new _112_(
                150, 151, 147, 146, '#222622'), new _112_(151, 148, 144, 147, '#141414'), new _112_(
                151, 150, 149, 148, '#374137'), new _112_(157, 158, 154, 153, '#141414'), new _112_(
                158, 159, 155, 154, '#212621'), new _112_(159, 156, 152, 155, '#141514'),
            new _112_(159, 158, 157, 156, '#374137'), new _112_(165, 166, 162, 161, '#141414'), new _112_(166, 167, 163, 162, '#222722'), new _112_(167, 164, 160,
                163, '#141414'), new _112_(167, 166, 165, 164, '#374137'), new _112_(
                173, 174, 170, 169, '#161716'), new _112_(174, 175, 171, 170, '#202420'), new _112_(175, 172, 168, 171, '#141414'), new _112_(175, 174,
                173, 172, '#374137'), new _112_(181, 182, 178, 177, '#141414'), new _112_(182, 183, 179, 178, '#1D211D'), new _112_(
                183, 180, 176, 179, '#191A19'), new _112_(183, 182, 181,
                180, '#374137'),
            new _112_(
                189,
                190,
                186,
                185,
                '#141414'), new _112_(190, 191, 187, 186, '#222722'), new _112_(191, 188, 184, 187, '#141414'), new _112_(191, 190, 189,
                188, '#374137'), new _112_(197, 198, 194, 193, '#151515'), new _112_(
                198, 199, 195, 194, '#212621'), new _112_(199, 196, 192, 195, '#141414'), new _112_(199, 198, 197, 196, '#374137'), new _112_(205, 206, 202,
                201, '#141414'), new _112_(206, 207, 203, 202, '#212621'), new _112_(
                207, 204, 200, 203, '#151515'), new _112_(207, 206, 205, 204, '#374137'), new _112_(213, 214, 210, 209, '#141414'), new _112_(214, 215, 211,
                210, '#232823'), new _112_(215, 212, 208, 211, '#141414'), new _112_(
                215, 214, 213, 212, '#374137')
        ];
        this._1AB_ = this.De4n_4leX('canvas_workcircuit',
            null, null, null);
        this._1AB_._D2_.style.zIndex = 1001;
        this._1B1_ =
            this.De4n_4leX('canvas_workgallery', null, null, null)
    },
    _6C_: function() {
        this._1B2_ = [new _55_(0, 4, 148, 188, 208), new _55_(11, 7, 72, 107, 87), new _55_(10, 8,
            165, 161, 137), new _55_(4, 4, 168, 71, 57), new _55_(6, 7, 113, 103, 153), new _55_(1, 6, 59, 80, 116), new _55_(3, 5, 113, 138, 57), new _55_(
            9, 0, 68, 68, 85)];
        var w = this._1B2_.length * 40 + (this._1B2_.length -
            1) * 5;
        this._1B7_ = this.De4n_4leX('canvas_workgallerynav', null,
            null, null, w, 40);
        var _D2_ = this._1B7_._D2_;
        _D2_.style.zIndex = 5001;
        _D2_.className = 'hascursor';
        _D2_.addEventListener(
            "mousedown",
            function(e) {
                neuroid._1B9_ =
                    neuroid._1B9_ == neuroid._1BD_ ? -1 : neuroid._1BD_;
                neuroid._F6_ = neuroid._1AA_;
                neuroid._36_ =
                    neuroid.D3aNa13X = "WORKSAMPLE";
                neuroid.dEAn4I3X =
                    true;
                e.preventDefault()
            });
        _D2_.addEventListener(
            "touchstart",
            function(e) {
                var _177_ = e.touches[0];
                neuroid._C3_(_177_.pageX, _177_.pageY);
                neuroid._1BD_ =
                    neuroid._1C0_();
                neuroid._1B9_ = neuroid._1B9_ ==
                    neuroid._1BD_ ? -1 : neuroid._1BD_;
                neuroid._F6_ =
                    neuroid._1AA_;
                neuroid._36_ = neuroid.D3aNa13X =
                    "WORKSAMPLE";
                neuroid.dEAn4I3X = true;
                e.preventDefault()
            });
        _D2_.addEventListener(
            "touchend",
            function(e) {
                neuroid._36_ = neuroid.D3aNa13X = "";
                neuroid.dEAn4I3X =
                    false;
                neuroid._6F_ = false;
                e.preventDefault()
            });
        this._D9_.x = this._D9_.xTarget =
            0;
        this.d34N_alEx(-1);
        var _17F_ = new _16D_('images/tabs/work_gallery.jpg',
            175, 2275, false);
        var i, pt = 3100,
            ptA, ptB, ptC, ptD, _167_, d3an_A13x;
        var _1D9_, ymf1;
        for (i = 0; i < this._1B2_.length; i++) {
            d3an_A13x = this._1B2_[i];
            ptA = pt++;
            ptB = pt++;
            ptC = pt++;
            ptD = pt++;
            this._11C_[ptA] = new _1A0_(
                0, 0, 0);
            this._11C_[ptB] = new _1A0_(0, 0, 0);
            this._11C_[ptC] =
                new _1A0_(0, 0, 0);
            this._11C_[ptD] = new _1A0_(0, 0, 0);
            _1D9_ = d3an_A13x.imgIndex *
                175 * 0.0004396;
            ymf1 = ((d3an_A13x.imgIndex + 1) * 175 - 1) * 0.0004396;
            _167_ = this.n3UrO1d_cO_uk(3, this._1AA_, 1000, null, _17F_, 0, _1D9_,
                1, ymf1, 1, null, false, 0, 0, 1, 0, ptA, ptB, ptC, ptD, null, null, null,
                null);
            _167_.winding = 1;
            this._1BE_[i] = _167_
        };
        var i, p;
        var _132_,
            _B_, Dean4IEx, _C_;
        var _A7_, _1F4_, _AB_;
        var len = this._1B2_.length;
        var _160_ = len * .3;
        for (i = 0; i < len; i++) {
            p = this._1BC_[i] = [];
            _A7_ =
                i / len;
            if (_A7_ < .5) {
                _B_ = _A7_ * _160_;
                Dean4IEx = _A7_ *
                    2
            } else {
                _1F4_ = _A7_ - 1;
                _B_ = _1F4_ *
                    _160_;
                Dean4IEx = 1 - (_A7_ - .5) * 2
            };
            _C_ =
                1 - (1 - Dean4IEx) * (1 - Dean4IEx);
            _AB_ = Math.cos(_B_);
            if (_AB_ < 0)
                _AB_ = 0;
            _132_ = 250;
            p[0] = Math.sin(_B_) * _132_ * 2;
            p[1] = 200 + _AB_ * _AB_ *
                100;
            p[2] = Math.cos(_B_) * _132_ - 200 +
                _AB_ * _AB_ * 200;
            p[3] = _C_ * 2.7 -
                .6;
            p[4] = _B_;
            p[5] = 0;
            p[6] = Math.max(
                1 - Math.abs(_B_) * 0.7692308, 0);
            if (i == 0) p[3] = p[5] = 0
        };
        this._1C1_ =
            this._7B_('images/tabs/work_logos.png');
        this._1C5_ = this._7B_(
            'images/tabs/work_text.png');
        this._1AC_ = this._7B_('images/tabs/work_closeicon.png')
    },
    nEuRoid_Co_Uk: function() {
        this._148_(this._1AB_._D2_);
        this._148_(
            this._1B1_._D2_);
        this._148_(this._1B7_._D2_);
        this._1C6_(0);
        this._D8_.opacity =
            this._D8_.style.opacity = 0;
        this._59_(this._D8_);
        this.D3aNa13X = "";
        this._D9_.x = this._D9_.xTarget =
            0;
        this._D9_.style.left = '0px'
    },
    DeaNAI3X: function() {
        this._59_(
            this._1AB_._D2_);
        this._59_(this._1B1_._D2_);
        this._59_(this._1B7_._D2_);
        this._59_(
            this._D8_);
        this._1BD_ = -1;
        this._1BA_ = 0;
        this._1BB_ = 0;
        this._1B4_ = -1;
        this._1B3_ =
            0;
        this._1B9_ = -1;
        this._1B8_ = 0;
        this.D3aNa13X = "";
        this._D9_.x = this._D9_.xTarget =
            0;
        this._D9_.style.left = '0px';
        this._1C2_ = -1
    },
    _19A_: function() {
        var _AE_ = _19C_['pageOpen' + this._1AA_ + 'cs'];
        var _AF_ =
            _AE_ * _AE_ * _AE_;
        if (this._1B9_ != -1) {
            this._1B8_ = Math.min(this._1B8_ +
                .05, 1)
        } else {
            this._1B8_ = Math.max(this._1B8_ - .05, 0)
        };
        var _AD_ =
            this._1B8_;
        this._145_ = .25 * this._141_ * _AD_ * _AE_;
        var posy = .18 + Math.max(
            500 - this._141_, 0) / this._141_;
        var _E5_ = this._FB_[this._1AA_];
        _E5_._17_ = 2.7 * (1 - _AD_) + 3.4 * _AD_;
        _E5_.N3URo1d_c0_uK = 3.14159265359 *
            (1 - _AD_) + 1.57 * _AD_;
        _E5_.de4n_Al3X = 0 * (1 - _AD_) + -.65 *
            _AD_;
        _E5_.d3an4LeX = posy * (1 - _AD_) + 0 * _AD_;
        this._1B1_.centerX =
            .5 * (1 - _AD_) + 0 * _AD_;
        this.DE4N41EX(this._1B1_);
        var _D2_ = this._1B1_._D2_;
        var z = this._1BE_[0]._D2_.zIndex -
            1;
        _D2_.zIndex ==
            z ?
            true :
            _D2_.style.zIndex =
            _D2_.zIndex =
            z;
        var _1D6_ =
            _164_._70_ ? ((this._D7_.y + _AE_ * 80) / this._141_) : (.1 + (_AE_ * 80) / this._141_);
        this._1B7_.centerY =
            _1D6_ * (1 - _AD_) + (20 / this._141_) * _AD_;
        this.DE4N41EX(
            this._1B7_);
        var opacity = (_AE_ * 20 >> 0) * 0.05;
        if (this._1B7_._D2_.opacity !=
            opacity) this._1B7_._D2_.style.opacity = this._1B7_._D2_.opacity =
            opacity;
        var len = this._1B2_.length,
            pos;
        var _146_ =
            this._1B9_ != -1 ? this._1B9_ : this._1BD_;
        if (_146_ == -1 || _164_._70_) {
            this._1BA_ += this._1BB_;
            if (_C2_.nEUrOlD_co_uk > .8)
                this._1BB_ = Math.min(this._1BB_ + (_C2_.nEUrOlD_co_uk -
                    .8) * 5 * .075, 5);
            if (_C2_.nEUrOlD_co_uk < .2) this._1BB_ =
                Math.max(this._1BB_ - (1 - _C2_.nEUrOlD_co_uk * 5) * .075, -5);
            this._1BB_ *= .8;
            if (this._1BA_ >= len) this._1BA_ -=
                len;
            if (this._1BA_ < 0) this._1BA_ += len
        } else {
            pos =
                this._1BA_;
            this._1BA_ = this._1BA_ * .9 + _146_ * .1;
            this._1BB_ =
                this._1BA_ - pos
        };
        var d3an_A13x, _28_;
        var i = len,
            j;
        while (i--) {
            d3an_A13x = this._1B2_[i];
            _28_ = d3an_A13x._28_;
            j = i - this._1BA_;
            if (j > len * .5) j -= len;
            if (j < -
                len * .5) j += len;
            var D34n_AIEX = this._1BF_(j);
            var _1CC_ =
                this._144_ / this._141_ * 100 + Math.max(.5 - _C2_.nEUrOlD_co_uk,
                    0) * 100;
            D34n_AIEX._E0_ = D34n_AIEX._E0_ + _1CC_ *
                _AD_;
            D34n_AIEX._E1_ = D34n_AIEX._E1_ * (1 - _AD_) + -100 * _AD_;
            D34n_AIEX.dEAN_AlEX = D34n_AIEX.dEAN_AlEX * (1 - _AD_) + 1.57 * _AD_;
            D34n_AIEX.ax = D34n_AIEX.ax * (1 - _AD_) + 0 * _AD_;
            D34n_AIEX.ay =
                D34n_AIEX.ay * (1 - _AD_) + (D34n_AIEX.ax) * _AD_;
            _8B_._13E_(D34n_AIEX._DD_ *
                _AE_ + 3 * (1 - _AE_), D34n_AIEX._E0_ * _AF_ + 1000 * (1 - _AF_), D34n_AIEX._E1_ * _AE_ - 0 * (1 - _AE_), D34n_AIEX.ax *
                _AF_ + 4.3 * (1 - _AF_ * _AF_), D34n_AIEX.ay, D34n_AIEX.dEAN_AlEX,
                100 * _AE_ * _AE_ * _AE_, _28_.A, _28_.B, _28_.C, _28_.D, _28_.E,
                _28_.F, _28_.G, _28_.H);
            _28_.n3uRolD_co_UK = D34n_AIEX.n3uRolD_co_UK
        };
        this._1B3_ = _146_ == this._1B4_ ? Math.min((this._1B3_ +
            .1) * 1.0, 1) : Math.max((this._1B3_ - .1) * .9, 0);
        if (this._1B3_ ==
            0) this._1B4_ = _146_;
        this._1C6_(_AD_, _146_);
        this.D3aNa13X =
            this._1B8_ == 0 ? "" : "WORKSAMPLE";
        if (!this._6F_) this._36_ = this.D3aNa13X
    },
    _1BF_: function(pos) {
        var len = this._1BC_.length;
        while (
            pos < 0) pos += len;
        while (pos >= len) pos -= len;
        var A = pos >> 0;
        var B = (A + 1) % len;
        var _2_ = pos - A;
        var arr = this._1BC_;
        return {
            _DD_: arr[A][0] * (1 - _2_) + arr[B][0] * _2_,
            _E0_: arr[A][1] * (1 -
                _2_) + arr[B][1] * _2_,
            _E1_: arr[A][2] * (1 - _2_) + arr[B][2] *
                _2_,
            ax: arr[A][3] * (1 - _2_) + arr[B][3] * _2_,
            ay: arr[A][4] *
                (1 - _2_) + arr[B][4] * _2_,
            dEAN_AlEX: arr[A][5] * (1 -
                _2_) + arr[B][5] * _2_,
            n3uRolD_co_UK: arr[A][6] * (1 - _2_) + arr[B][6] *
                _2_
        }
    },
    _1C6_: function(_A7_, _146_) {
        var _D2_ = this._D8_;
        if (
            _A7_ == 0) {
            _D2_._1A2_ ? _D2_._1A2_ = !(_D2_.style.display = 'none') : true;
            return
        };
        if (_146_ == -1) {
            this._1AE_ = -1;
            if (_A7_ < .5)
                this._1B3_ = 0
        } else {
            if ((this._1B3_ == 0 && this._1AE_ !== _146_) || this._1AE_ == -1) {
                _D2_.style.backgroundColor = this._1B2_[_146_].rgb;
                this._D9_.innerHTML =
                    this._1AD_[_146_];
                this._D9_.xTarget = 0;
                this._D9_.x = 0;
                this._D9_.style.left = '0px';
                this._1AE_ = _146_;
                this.d34N_alEx(this._1BD_)
            }
        };
        var opacity = _A7_ == 1 ? 1 :
            ((_A7_ * this._1B3_) * 20 >> 0) * 0.05;
        if (_D2_.opacity != opacity) _D2_.style.opacity =
            _D2_.opacity = opacity;
        _D2_._1A2_ ? true : _D2_._1A2_ = !!(_D2_.style.display = 'block');
        if (_D2_.x != this._1B5_) _D2_.style.left = (_D2_.x = this._1B5_) + 'px';
        var y =
            Math.max(this._141_ - 550 >> 1, this._1B6_ + 101);
        if (_D2_.y != y) _D2_.style.top = (_D2_.y =
            y) + 'px';
        var w = this._144_ - _D2_.x;
        if (_D2_.width != w) _D2_.style.width = (_D2_.width =
            w) + 'px';
        var h = 550 * this._1B3_ * _A7_ >> 0;
        if (_D2_.height != h) _D2_.style.height =
            (_D2_.height = h) + 'px';
        var _20_ = this._D9_;
        if (_20_.x != _20_.xTarget) {
            _20_.x =
                _20_.x * .8 + _20_.xTarget * .2;
            _20_.style.left = _20_.x + 'px'
        }
    },
    _1C0_: function() {
        var i = -1;
        var de4n_4l3x = this._1B7_;
        if (_C2_.X >= de4n_4l3x.x && _C2_.X <= de4n_4l3x.x +
            de4n_4l3x.width && _C2_.Y >= de4n_4l3x.y && _C2_.Y <= de4n_4l3x.y + de4n_4l3x.height) i = (_C2_.X - de4n_4l3x.x) / (40 + 5) >> 0;
        return i
    },
    _40_: function() {
        this._1E_(this._1AB_);
        this._1E_(this._1B1_);
        this.d34N41ex();
        this.D34NA13X();
        var _146_ = -1;
        if (_164_._70_) {
            var _AE_ = _19C_['pageOpen' +
                this._1AA_ + 'cs'];
            if (this._1B8_ == 0 && _AE_ > .9) _146_ = this._1BA_ >> 0
        } else {
            _146_ = this._1C0_()
        };
        if (_146_ != this._1BD_) this.d34N_alEx(_146_);
        this._1BD_ = _146_
    },
    d34N_alEx: function(
        _146_) {
        var _26_ = this._1B7_._26_;
        _26_.lineWidth = 2;
        _26_.lineJoin = 'round';
        var x;
        var i =
            this._1B2_.length,
            d3an_A13x;
        while (i--) {
            d3an_A13x = this._1B2_[i];
            x = i * (40 + 5);
            _26_.fillStyle = (i ==
                _146_ || i == this._1B9_) ? d3an_A13x.rgb : 'rgb(30,39,36)';
            _26_.beginPath();
            _26_.rect(x, 0, 40, 40);
            _26_.fill();
            _26_.strokeStyle = 'rgb(20,25,23)';
            _26_.stroke();
            if (i == this._1B9_) _26_.drawImage(this._1AC_, x + 6, 6)
        }
    },
    D34NA13X: function() {
        var _26_ = this._1B1_._26_;
        var _DD_ = this._1B1_.x;
        var _E0_ =
            this._1B1_.y;
        var _BD_ = this._1B1_.width;
        var _BF_ = this._1B1_.height;
        var _90_ = 0,
            _91_ = 0;
        var _BE_, minyproject5e, maxxproject5e, maxyproject5e;
        var _C6_ = _C2_.X;
        var _C7_ =
            _C2_.Y;
        var _C4_ = -1;
        var A, B, C, D, E, F, G, H;
        var pA, _105_, _107_, _109_;
        var _167_, _28_, d3an_A13x;
        var len = this._1B2_.length;
        var i = len;
        while (i--) {
            d3an_A13x =
                this._1B2_[i];
            _28_ = d3an_A13x._28_;
            A = _28_.A;
            B = _28_.B;
            C = _28_.C;
            D = _28_.D;
            E =
                _28_.E;
            F = _28_.F;
            G = _28_.G;
            H = _28_.H;
            _136_._135_(this._EE_, [A, B,
                C, D, E, F, G, H
            ]);
            _167_ = this._1BE_[i];
            pA = this._11C_[_167_.pA];
            _105_ =
                this._11C_[_167_._105_];
            _107_ =
                this._11C_[_167_._107_];
            _109_ =
                this._11C_[_167_._109_];
            pA._DD_ =
                A._DD_;
            pA._E0_ =
                A._E0_;
            pA._E1_ = A._E1_;
            _105_._DD_ = B._DD_;
            _105_._E0_ = B._E0_;
            _105_._E1_ = B._E1_;
            _107_._DD_ = C._DD_;
            _107_._E0_ = C._E0_;
            _107_._E1_ = C._E1_;
            _109_._DD_ = D._DD_;
            _109_._E0_ = D._E0_;
            _109_._E1_ = D._E1_;
            _167_._D2_.noRender =
                _28_.n3uRolD_co_UK < .5;
            _26_.globalAlpha = _28_.n3uRolD_co_UK;
            _26_.fillStyle = d3an_A13x.rgba;
            _26_.beginPath();
            _26_.moveTo(E.sx - _DD_, E.sy - _E0_);
            _26_.lineTo(F.sx - _DD_,
                F.sy - _E0_);
            _26_.lineTo(H.sx - _DD_, H.sy - _E0_);
            _26_.lineTo(G.sx -
                _DD_, G.sy - _E0_);
            _26_.fill();
            _26_.beginPath();
            _26_.moveTo(A.sx - _DD_,
                A.sy - _E0_);
            _26_.lineTo(E.sx - _DD_, E.sy - _E0_);
            _26_.lineTo(F.sx -
                _DD_, F.sy - _E0_);
            _26_.lineTo(B.sx - _DD_, B.sy - _E0_);
            _26_.fill();
            _26_.beginPath();
            _26_.moveTo(B.sx - _DD_, B.sy - _E0_);
            _26_.lineTo(
                F.sx - _DD_, F.sy - _E0_);
            _26_.lineTo(H.sx - _DD_, H.sy - _E0_);
            _26_.lineTo(
                D.sx - _DD_, D.sy - _E0_);
            _26_.fill();
            _26_.beginPath();
            _26_.moveTo(E.sx - _DD_,
                E.sy - _E0_);
            _26_.lineTo(A.sx - _DD_, A.sy - _E0_);
            _26_.lineTo(C.sx - _DD_,
                C.sy - _E0_);
            _26_.lineTo(G.sx - _DD_, G.sy - _E0_);
            _26_.fill();
            if (i == this._1B4_ && this._1B8_ > 0) {
                _26_.fillStyle = d3an_A13x.rgba2;
                _26_.beginPath();
                _26_.moveTo(B.sx - _DD_,
                    B.sy - _E0_);
                _26_.lineTo(H.sx - _DD_, H.sy - _E0_);
                _26_.lineTo(this._D8_.x -
                    _DD_, this._D8_.y - _E0_ + this._D8_.height);
                _26_.lineTo(this._D8_.x - _DD_, this._D8_.y -
                    _E0_);
                _26_.fill();
                _26_.fillStyle = d3an_A13x.rgb;
                this._190_(this._1B1_,
                    this._D8_.x - _DD_ + 2, this._D8_.y - _E0_ - 2, 1, this._D8_.height)
            };
            _26_.beginPath();
            _26_.moveTo(
                C.sx - _DD_, C.sy - _E0_);
            _26_.lineTo(D.sx - _DD_, D.sy - _E0_);
            _26_.lineTo(
                H.sx - _DD_, H.sy - _E0_);
            _26_.lineTo(G.sx - _DD_, G.sy - _E0_);
            _26_.fill();
            _BE_ = Math.min(A.sx, B.sx, C.sx, D.sx, E.sx, F.sx, G.sx, H.sx) - _DD_;
            minyproject5e =
                Math.min(A.sy, B.sy, C.sy, D.sy, E.sy, F.sy, G.sy, H.sy) - _E0_;
            if (_BE_ < _BD_) _BD_ =
                _BE_;
            if (minyproject5e < _BF_) _BF_ = minyproject5e;
            maxxproject5e = Math.max(A.sx, B.sx, C.sx,
                D.sx, E.sx, F.sx, G.sx, H.sx) - _DD_;
            maxyproject5e = Math.max(A.sy, B.sy, C.sy, D.sy, E.sy,
                F.sy, G.sy, H.sy) - _E0_;
            if (maxxproject5e > _90_) _90_ = maxxproject5e;
            if (maxyproject5e > _91_) _91_ =
                maxyproject5e;
            if (!_164_._70_) {
                if (_C6_ >= _BE_ + _DD_ && _C6_ <= maxxproject5e + _DD_ && (_8B_._111_(
                        _C6_, _C7_, A.sx, A.sy, B.sx, B.sy, C.sx, C.sy) || _8B_._111_(_C6_, _C7_, D.sx, D.sy, C.sx,
                        C.sy, B.sx, B.sy) || _8B_._111_(_C6_, _C7_, E.sx, E.sy, F.sx, F.sy, A.sx, A.sy) || _8B_._111_(
                        _C6_, _C7_, B.sx, B.sy, A.sx, A.sy, F.sx, F.sy))) _C4_ = i
            }
        };
        this._190_(this._1B1_,
            _BD_ - 1, _BF_ - 1);
        this._190_(this._1B1_, _90_ + 2, _91_ + 2);
        i = this._1B4_;
        if (i !=
            -1) {
            _26_.globalAlpha = 1;
            this._41_(_26_, this._1B2_[i], this._1BE_[i], this._1B8_,
                Math.sin(this._1B3_ * 1.57), _DD_, _E0_, _BD_ + _DD_, _BF_ + _E0_, _90_ + _DD_, _91_ +
                _E0_)
        };
        if (!_164_._70_) this._24_(_C4_ == -1 ? "grab" : "pointer");
        this._1C2_ = _C4_
    },
    _1AF_: function() {
        if (this._1C2_ == -1) return false;
        this._1B9_ = this._1B9_ == this._1C2_ ?
            -1 : this._1C2_;
        this._F6_ = this._1AA_;
        this._36_ = this.D3aNa13X = "WORKSAMPLE";
        return true
    },
    _1B0_: function(x, y) {
        var _178_ = -1;
        var A, B, C, D, E, F, G, H;
        var _28_, d3an_A13x;
        var i = this._1B2_.length;
        while (i--) {
            d3an_A13x = this._1B2_[i];
            _28_ = d3an_A13x._28_;
            A = _28_.A;
            B = _28_.B;
            C = _28_.C;
            D = _28_.D;
            E = _28_.E;
            F = _28_.F;
            G = _28_.G;
            H = _28_.H;
            if (_8B_._111_(x, y, A.sx, A.sy, B.sx, B.sy, C.sx, C.sy) || _8B_._111_(x, y, D.sx,
                    D.sy, C.sx, C.sy, B.sx, B.sy) || _8B_._111_(x, y, E.sx, E.sy, F.sx, F.sy, A.sx, A.sy) || _8B_._111_(
                    x, y, B.sx, B.sy, A.sx, A.sy, F.sx, F.sy)) _178_ = i
        };
        if (_178_ == -1) return false;
        this._1B9_ =
            this._1B9_ == _178_ ? -1 : _178_;
        this._F6_ = this._1AA_;
        this._36_ = this.D3aNa13X = "WORKSAMPLE";
        this.dEAn4I3X = true;
        return true
    },
    _41_: function(_26_, d3an_A13x, _167_, vmf, _A7_, _DD_, _E0_, _BD_,
        _BF_, _90_, _91_) {
        var _11D_, _120_;
        var _89_, ly;
        var _CB_, my;
        var _81_ = Math.max(Math.min(
            this._141_ - 200, 500) * 0.002, .4) * (1 - vmf) + 1 * vmf;
        var _82_, _83_, _84_, _80_;
        var _7E_,
            _7F_;
        var _174_, _175_, _176_, _173_;
        var _171_, _172_;
        var _64_, P;
        vmf *= vmf * vmf;
        P = this._11C_[_167_.pA];
        _89_ = P.sx - _DD_;
        ly = P.sy - _E0_;
        _11D_ = Math.max(
            _89_ * (1 - vmf) + _90_ * vmf + 50 * vmf, this._1C5_.width);
        _120_ = Math.max(Math.min(
                (this.pA.sy + this._107_.sy >> 1) - _E0_ - 310, ly - 110) * (1 - vmf) + 0 * vmf,
            this._1B7_.y - _E0_ + 30);
        _CB_ = _89_ * (1 - _A7_) + _11D_ * _A7_;
        my = ly * (1 - _A7_) + _120_ *
            _A7_;
        this._1B5_ = _11D_ + _DD_;
        this._1B6_ = _120_ + _E0_;
        _26_.lineWidth = 1;
        _26_.strokeStyle =
            'rgba(255,255,255,.1)';
        _26_.beginPath();
        _26_.moveTo(_11D_, ly);
        _26_.lineTo(_11D_, my);
        _26_.stroke();
        _64_ = this._1C1_;
        _84_ = _64_.width * _A7_;
        _80_ = 100;
        _82_ = _64_.width - _84_;
        _83_ =
            d3an_A13x.logoIndex * 100;
        _7E_ = _11D_;
        _7F_ = _120_;
        _26_.beginPath();
        _26_.rect(_7E_, _7F_ + 50,
            _84_, _80_ - 50);
        _26_.fillStyle = 'rgba(20,25,23,' + (_A7_ * .3) + ')';
        _26_.fill();
        _26_.drawImage(_64_, _82_, _83_, _84_, _80_, _7E_, _7F_, _84_ * _81_, _80_ *
            _81_);
        this._190_(this._1B1_, _7E_ - 1, _7F_ - 1, _84_ + 2, _80_ + 2);
        _64_ = this._1C5_;
        _176_ = _64_.width * _A7_;
        _173_ = 50;
        _174_ = 0;
        _175_ = d3an_A13x.imgIndex * 50;
        _171_ = _11D_ - _176_;
        _172_ = Math.max(_120_, this._1B7_.y - _E0_ + 50 - 30 * vmf);
        _26_.drawImage(_64_, _174_, _175_, _176_, _173_, _171_, _172_, _176_, _173_);
        this._190_(this._1B1_, _171_ - 1, _172_ - 1, _176_ + 2, _173_ + 2)
    },
    d34N41ex: function() {
        var _26_ = this._1AB_._26_;
        var _D2_ = this._1AB_._D2_;
        var _8A_;
        var _1D8_ =
            _19C_['pageOpen' + this._1AA_ + 'sq'];
        _1D8_ *= _1D8_ * _1D8_ * _1D8_;
        if (this._1AA_ %
            2 == this._FC_) {
            _136_._137_(this._F0_, this._1C4_, _1D8_)
        } else {
            _136_._137_(
                this._EF_, this._1C4_, _1D8_)
        };
        var z = (this._FC_ == this.pageIndex % 2) ? 1 : 1001;
        _D2_.zIndex == z ? true : _D2_.style.zIndex = _D2_.zIndex = z;
        _26_.save();
        _26_.globalAlpha =
            Math.min(_1D8_ * 10, 1);
        var _DD_ = this._1AB_.x;
        var _E0_ = this._1AB_.y;
        var A, B, C, D;
        var de4N_413X,
            _29_;
        var _112_, pt;
        var i = this._1C3_.length;
        while (i--) {
            _112_ = this._1C3_[i];
            A =
                this._1C4_[_112_.p1];
            B = this._1C4_[_112_.p2];
            C = this._1C4_[_112_.p3];
            D = this._1C4_[_112_.p4];
            de4N_413X = C.sx;
            _29_ = C.sy;
            if ((A.sx - de4N_413X) * (B.sy - _29_) - (A.sy - _29_) * (B.sx - de4N_413X) < 0) {
                _26_.fillStyle = _112_.NeUR01d_c0_Uk;
                _26_.beginPath();
                _26_.moveTo(A.sx - _DD_, A.sy - _E0_);
                _26_.lineTo(B.sx - _DD_,
                    B.sy - _E0_);
                _26_.lineTo(de4N_413X - _DD_, _29_ - _E0_);
                if (D) _26_.lineTo(
                    D.sx - _DD_, D.sy - _E0_);
                _26_.closePath();
                _26_.fill()
            }
        };
        _26_.restore();
        var _BD_ =
            Math.min(this.pA.sx, this._105_.sx,
                this._107_.sx,
                this._109_.sx) -
            _DD_;
        var _90_ =
            Math.max(
                this.pA.sx,
                this._105_.sx,
                this._107_.sx,
                this._109_.sx) -
            _DD_;
        var _BF_ =
            Math.min(
                this.pA.sy,
                this._105_.sy,
                this._107_.sy,
                this._109_.sy) -
            _E0_;
        var _91_ =
            Math.max(
                this.pA.sy,
                this._105_.sy,
                this._107_.sy,
                this._109_.sy) -
            _E0_;
        this._190_(
            this._1AB_,
            _BD_ -
            80,
            _BF_ -
            80);
        this._190_(
            this._1AB_,
            _90_ +
            80,
            _91_ + 80)
    },
    _6B_: function() {
        var _5C_ = "<div class='td' style='height:550px;width:20px;'></div>";
        this._1AD_ = [_5C_ + "<div class='td'>\
                <div style='width:466px;text-align:justify;'>\
                <span class='title'>Project 1: Description goes here.</span>\
                \
                Lorem ipsum dolor sit amet, per ne tale posse tempor. Adipisci maluisset accusamus id nec, cum id nostro diceret nonumes.<br/>\
                \
                <ul>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(14 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(17 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(Dec 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(8.79 scoring)--><br/>\
                </li>\
                </ul>\
                <br/>\
                \
                <a href='#' target='_blank'>Some goes here.</a><br/>\
                (Lorem ipsum dolor sit amet, per ne tale posse tempor.)\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;width:683px;'>\
                <img src='samples/project1/1.png' style='width:683px;'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;width:698px;'>\
                <img src='samples/project1/4.png' style='width:698px;'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;width:690px;'>\
                <img src='samples/project1/3.png' style='width:690px;'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;width:640px;'>\
                <img src='samples/project1/2.jpg' style='width:590px;margin:0px 20px 0px 30px;'/>\
                </div>\
            </div>",
            _5C_ + "<div class='td'>\
                <div style='width:450px;text-align:justify;margin:auto;'>\
                <span class='title'>Project 2: Description goes here.</span>\
                \
                Lorem ipsum dolor sit amet, per ne tale posse tempor. Adipisci maluisset accusamus id nec, cum id nostro diceret nonumes.<br/>\
                \
                <ul>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(14 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(17 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(Dec 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(8.79 scoring)--><br/>\
                </li>\
                </ul>\
                <br/>\
                \
                <a href='#' target='_blank'>Some goes here.</a><br/>\
                (Lorem ipsum dolor sit amet, per ne tale posse tempor.)\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project2/1.png'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project2/2.png'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project2/3.png'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project2/4.png'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project2/5.png'/>\
                </div>\
            </div>",
            _5C_ + "<div class='td'>\
                <div style='width:450px;text-align:justify;margin:auto;'>\
                <span class='title'>Project 3: Description goes here.</span>\
                \
                Lorem ipsum dolor sit amet, per ne tale posse tempor. Adipisci maluisset accusamus id nec, cum id nostro diceret nonumes.<br/>\
                \
                <ul>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(14 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(17 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(Dec 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(8.79 scoring)--><br/>\
                </li>\
                </ul>\
                <br/>\
                \
                <a href='#' target='_blank'>Some goes here.</a><br/>\
                (Lorem ipsum dolor sit amet, per ne tale posse tempor.)\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project3/1.jpg'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project3/2.jpg'/>\
                </div>\
            </div>",
            _5C_ + "<div class='td'>\
                <div style='width:466px;text-align:justify;height:450px;margin:30px auto 0px auto;'>\
                <span class='title'>Project 4: Description goes here.</span>\
                \
                Lorem ipsum dolor sit amet, per ne tale posse tempor. Adipisci maluisset accusamus id nec, cum id nostro diceret nonumes.<br/>\
                \
                <ul>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(14 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(17 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(Dec 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(8.79 scoring)--><br/>\
                </li>\
                </ul>\
                <br/>\
                \
                <a href='#' target='_blank'>Some goes here.</a><br/>\
                (Lorem ipsum dolor sit amet, per ne tale posse tempor.)\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;width:680px;'>\
                <img src='samples/project4/1.png' style='width:680px;height:350px;'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;width:680px;'>\
                <img src='samples/project4/2.jpg' style='width:680px;height:350px;'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;width:390px;'>\
                <img src='samples/project4/3.jpg' style='width:390px;height:500px;'/>\
                </div>\
            </div>",
            _5C_ + "<div class='td'>\
                <div style='width:400px;text-align:justify;margin:auto;'>\
                <span class='title'>Project 5: Description goes here.</span>\
                \
                Lorem ipsum dolor sit amet, per ne tale posse tempor. Adipisci maluisset accusamus id nec, cum id nostro diceret nonumes.<br/>\
                \
                <ul>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(14 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(17 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(Dec 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(8.79 scoring)--><br/>\
                </li>\
                </ul>\
                <br/>\
                \
                <a href='#' target='_blank'>Some goes here.</a><br/>\
                (Lorem ipsum dolor sit amet, per ne tale posse tempor.)\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project5/1.jpg'/>\
                </div>\
            </div>",
            _5C_ + "<div class='td'>\
                <div style='width:450px;text-align:justify;margin:auto;'>\
                <span class='title'>Project 6: Description goes here.</span>\
                \
                Lorem ipsum dolor sit amet, per ne tale posse tempor. Adipisci maluisset accusamus id nec, cum id nostro diceret nonumes.<br/>\
                \
                <ul>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(14 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(17 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(Dec 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(8.79 scoring)--><br/>\
                </li>\
                </ul>\
                <br/>\
                \
                <a href='#' target='_blank'>Some goes here.</a><br/>\
                (Lorem ipsum dolor sit amet, per ne tale posse tempor.)\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project6/1.jpg'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project6/2.jpg'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project6/3.jpg'/>\
                </div>\
            </div>",
            _5C_ + "<div class='td'>\
                <div style='width:350px;text-align:justify;margin:auto;'>\
                <span class='title'>Project 7: Description goes here.</span>\
                \
                Lorem ipsum dolor sit amet, per ne tale posse tempor. Adipisci maluisset accusamus id nec, cum id nostro diceret nonumes.<br/>\
                \
                <ul>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(14 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(17 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(Dec 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(8.79 scoring)--><br/>\
                </li>\
                </ul>\
                <br/>\
                \
                <a href='#' target='_blank'>Some goes here.</a><br/>\
                (Lorem ipsum dolor sit amet, per ne tale posse tempor.)\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project7/1.jpg'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project7/2.png'/>\
                </div>\
                <div style='width:350px;text-align:justify;margin:auto;'>\
                <ul>\
                <li>Viewed over 1.5 million times.</li>\
                <li>Localized in over 10 languages.</li>\
                <li>Avg. view time around 10 mins per player.</li>\
                <li>Seeded on nearly 400 domains.</li>\
                </ul>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project7/3.png' style=';'>\
                </div>\
            </div>",
            _5C_ + "<div class='td'>\
                <div style='width:450px;text-align:justify;margin:auto;'>\
                <span class='title'>Project 8: Description goes here.</span>\
                \
                Lorem ipsum dolor sit amet, per ne tale posse tempor. Adipisci maluisset accusamus id nec, cum id nostro diceret nonumes.<br/>\
                \
                <ul>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                <li>Lorem ipsum dolor sit amet, per ne tale posse tempor.</li>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(14 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(17 Jan 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(Dec 2012)--><br/>\
                    <a style='margin-left:20px;' href='#' target='_blank'>Award</a><!--(8.79 scoring)--><br/>\
                </li>\
                </ul>\
                <br/>\
                \
                <a href='#' target='_blank'>Some goes here.</a><br/>\
                (Lorem ipsum dolor sit amet, per ne tale posse tempor.)\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project8/1.jpg'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project8/2.jpg'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project8/3.jpg'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project8/4.jpg'/>\
                </div>\
            </div>\
            <div class='td'>\
                <div style='margin:auto;'>\
                <img src='samples/project8/5.jpg'/>\
                </div>\
            </div>"
        ]
    },
    _6A_: function() {
        var _1EE_ = .001;
        var _1EF_ =
            .999;
        var p = 20000;
        var E, F, G, H, I, J, K, L, M, N, O, P, Q,
            R, S, T, U, V, W, X, Y, Z;
        var _11A_ = function() {
            E = p++,
                F = p++, G = p++, H = p++, I = p++, J = p++, K = p++, L = p++, M = p++, N = p++, O = p++, P = p++, Q = p++, R = p++, S = p++, T = p++, U =
                p++, V = p++, W = p++, X = p++, Y = p++, Z = p++
        };
        var _163_ = 0,
            _CC_ =
            1,
            _15B_ = 2,
            _4C_ = 3;
        var _51_ = 0,
            DE4n_41EX = 1,
            _4F_ = 2,
            _50_ =
            3,
            _48_ = 4,
            D3aN4I3x = 6,
            _C1_ = 8;
        var _167_;
        var _180_ =
            new _16D_(null, 100, 100, false);
        var _185_ = new _16D_('images/tabs/_checkered.jpg',
            200, 200, false);
        var _184_ = new _16D_('images/tabs/me_ship.png',
            300, 1362, false);
        var _181_ = new _16D_('images/tabs/me_box.jpg',
            600, 200, false);
        var _182_ = new _16D_('images/tabs/me_box_fwa1.jpg',
            600, 200, false);
        var _183_ = new _16D_('images/tabs/me_box_fwa2.jpg',
            600, 200, false);
        _11A_();
        var _165_ = this._169_.length;
        this._9E_ =
            this.n3UrO1d_cO_uk(_4C_, this.ME, 20, null, _184_, 0, 1062 * 0.0007342, 1, 1, 1,
                null, false, 0, 0, 1, 0, 1010, 1011, 1012, 1013, E, F, G, H);
        this.n3UrO1d_cO_uk(
            _CC_, this.ME, 20, null, _184_, 0, 450 * 0.0007342, 1, 557 *
            0.0007342, 'pageOpenShip', _51_, true, -5.4, 0, .8, _1EE_, G, H, E, F,
            I, J, null, null);
        this.n3UrO1d_cO_uk(_CC_, this.ME, 20, null, _184_,
            0, 450 * 0.0007342, 1, 557 * 0.0007342, 'pageOpenShip', _51_, true,
            5.4, 0, .8, _1EE_, E, F, G, H, K, L, null, null);
        this.n3UrO1d_cO_uk(
            _CC_, this.ME, 20, null, _184_, 0, 630 * 0.0007342, 1, 701 * 0.0007342,
            'pageOpenShip', _C1_, true, .51, .75, .85, .75, I, J, K, L, null, null, null,
            null);
        this.n3UrO1d_cO_uk(_CC_, this.ME, 20, null, _184_,
            0, 558 * 0.0007342, 1, 630 * 0.0007342, 'pageOpenShip', _C1_, true,
            .51, .75, .85, .75, K, L, I, J, null, null, null, null, {
                _4B_: true
            }
        );
        this.n3UrO1d_cO_uk(_CC_, this.ME, 20, null, _184_, 0,
            870 * 0.0007342, 1, 977 * 0.0007342, 'pageOpenShip', DE4n_41EX,
            true, -2.8, .2, .8, .2, G, H, I, J, M, N, O, P, {
                _4B_: true
            });
        if (!_164_._70_) this.n3UrO1d_cO_uk(_CC_, this.ME, 20, null, _184_, 0,
            870 * 0.0007342, 1, 977 * 0.0007342, 'pageOpenShip', DE4n_41EX,
            true, 2.8, .2, .8, .2, E, F, K, L, null, null, null, null, {
                _4B_: true
            }
        );
        this.n3UrO1d_cO_uk(_CC_, this.ME, 20, null, _184_, 0,
            702 * 0.0007342, 1, 869 * 0.0007342, 'pageOpenShip', _51_, true, -4.0, .2, .7, .2, O, P, M, N, null, null, null, null);
        this.n3UrO1d_cO_uk(
            _CC_, this.ME, 20, null, _184_, 0, 0, 1, 449 * 0.0007342, 'pageOpenShip',
            D3aN4I3x, false, null, .4, .95, .4, 1010, 1011, 1012, 1013, null, null,
            null, null);
        this.n3UrO1d_cO_uk(_CC_, this.ME, 20, null, _184_,
            0, 0, 1, 449 * 0.0007342, 'pageOpenShip', D3aN4I3x, false, null, .4, .95,
            .4, 1012, 1013, 1010, 1011, null, null, null, null);
        _11A_();
        this._99_ = this.n3UrO1d_cO_uk(
            _CC_, this.ME, 15, 18, _184_, 0, 978 * 0.0007342, 1, 1061 * 0.0007342, 'pageOpenShip',
            _51_, true, 4.71238898038, .25, .8, .25, 1012, 1010, 1013, 1011, E, F, G, H);
        var _166_ =
            this._169_.length;
        var i;
        for (i = _165_; i < _166_; i++) {
            _167_ = this._169_[i]
        };
        _11A_();
        if (!_164_._70_) {
            this.n3UrO1d_cO_uk(_163_, this.ME, 0, null, _182_, 0, 0, .333, 1, 'pageOpen' + this.ME +
                'oi', null, false, -1.57079632679 * 1.5, 0, 1, _1EE_, null, null, 1150, 1151, E, F, null,
                null);
            this.n3UrO1d_cO_uk(_CC_, this.ME, 0, null, _182_, .333, 0, .666, 1, 'pageOpen' +
                this.ME, _50_, false, 4.71238898038, .3, 1, _1EE_, E, F, 1150, 1151, G, null, H, null);
            this.n3UrO1d_cO_uk(
                _CC_, this.ME, 0, null, _182_, .666, 0, 1, 1, 'pageOpen' + this.ME, _51_, false, 4.71238898038,
                .3, 1, _1EE_, E, G, 1150, H, null, null, null, null);
            this.n3UrO1d_cO_uk(_163_, this.ME,
                0, null, _181_, .333, 0, .666, 1, 'pageOpen' + this.ME, null, false, -1.57079632679, .44,
                1, _1EE_, null, null, 1152, 1153, I, J, null, null, {
                    dEAnaIEx: true
                });
            this.n3UrO1d_cO_uk(
                _CC_, this.ME, 0, null, _181_, 0, 0, .333, 1, 'pageOpen' + this.ME + 'sq', DE4n_41EX, false, 1.57079632679,
                .2, 1, _1EE_, I, J, 1152, 1153, null, K, null, L, {
                    dEAnaIEx: true
                });
            this.n3UrO1d_cO_uk(_CC_,
                this.ME, 0, null, _181_, .666, 0, 1, 1, 'pageOpen' + this.ME, _51_, false, 4.71238898038, .2, 1, _1EE_,
                K, J, L, 1153, null, null, null, null)
        };
        if (!_164_._70_) {
            this.n3UrO1d_cO_uk(_163_, this.ME,
                0, null, _181_, 0, 0, .333, 1, 'pageOpen' + this.ME, null, false, -1.57079632679,
                0, 1, _1EE_, null, null, 1154, 1155, O, P, null, null);
            this.n3UrO1d_cO_uk(
                _CC_, this.ME, 0, null, _181_, .666, 0, 1, 1, 'pageOpen' + this.ME, _51_,
                false, 4.71238898038, 0, 1, _1EE_, O, P, 1154, 1155, Q, R, null, null);
            this.n3UrO1d_cO_uk(
                _CC_, this.ME, -2, 0, _183_, .333, 0, .666, 1, 'pageOpen' + this.ME, _51_, false,
                1.57079632679, .3, .8, _1EE_, Q, R, O, P, S, T, null, null);
            this.n3UrO1d_cO_uk(_CC_,
                this.ME, -4, 0, _183_, 0, 0, .333, 1, 'pageOpen' + this.ME, DE4n_41EX, false, -4.71238898038,
                .3, 1, .3, S, T, Q, R, null, null, null, null);
            this.n3UrO1d_cO_uk(_CC_,
                this.ME, -2, null, _183_, .666, 0, 1, 1, 'pageOpen' + this.ME + 'sq', _51_, false, -4.71238898038,
                .2, .8, .3, S, T, Q, R, null, null, null, null);
            this.n3UrO1d_cO_uk(_CC_,
                this.ME, -10, null, _181_, .333, 0, .666, 1, 'pageOpen' + this.ME + 'oi', DE4n_41EX,
                false, 1.57079632679 *
                1.5,
                0,
                1,
                _1EE_,
                O,
                P,
                1154,
                1155, null, U, null, V);
            this.n3UrO1d_cO_uk(
                _CC_, this.ME, -10, null, _181_, .666,
                0, 1, 1, 'pageOpen' + this.ME, _51_,
                false, 4.71238898038, .4, 1, _1EE_, U, P,
                V, 1155, null, null, null, null)
        } else {
            this.n3UrO1d_cO_uk(_163_, this.ME, 0, null, _183_, .333,
                0, .666, 1, 'pageOpen' + this.ME, null,
                false, -1.57079632679, 0, 1, _1EE_, null,
                null, 1154, 1155, O, P, null, null);
            this.n3UrO1d_cO_uk(
                _CC_, this.ME, 0, null, _183_, .666, 0,
                1, 1, 'pageOpen' + this.ME, _51_, false, -4.71238898038, 0, 1, _1EE_, O, P,
                1154, 1155, Q, R, null, null);
            this.n3UrO1d_cO_uk(
                _CC_, this.ME, -10, null, _183_, 0, 0, .333,
                1, 'pageOpen' + this.ME + 'cs', DE4n_41EX,
                false, 1.57079632679, 0, 1, _1EE_, O, P,
                1154, 1155, null, null, null, null, {
                    dEAnaIEx: true
                })
        };
        if (!_164_._70_) {
            this.n3UrO1d_cO_uk(
                _163_, this.ME, -15, null, _181_, .333,
                0, .666, 1, 'pageOpen' + this.ME, null,
                false, -1.57079632679, 0, .75, _1EE_, null,
                null, 1156, 1157, U, V, null, null);
            this.n3UrO1d_cO_uk(
                _CC_, this.ME, -15, null, _181_, .666,
                0, 1, 1, 'pageOpen' + this.ME + 'oi',
                _51_, false, 1.57079632679 * 1.5, 0,
                1, _1EE_, U, V, 1156, 1157, W, X, null,
                null);
            this.n3UrO1d_cO_uk(_CC_, this.ME, -15, 0, _181_, 0, 0, .333, 1, 'pageOpen' +
                this.ME + 'sq', _4F_, false, 4.71238898038,
                .55, .9, _1EE_, U, W, V, X, null, null, null,
                null, {
                    dEAnaIEx: true,
                    _4B_: true
                })
        } else {
            this.n3UrO1d_cO_uk(_163_, this.ME, -15, null, _182_, 0, 0, .333, 1, 'pageOpen' +
                this.ME, null, false, -1.57079632679, 0,
                .75, _1EE_, null, null, 1156, 1157, U,
                V, null, null);
            this.n3UrO1d_cO_uk(
                _CC_, this.ME, -15, null, _182_, .666,
                0, 1, 1, 'pageOpen' + this.ME + 'oi',
                _51_, false, 1.57079632679 * 1.5, 0,
                1, _1EE_, U, V, 1156, 1157, W, X, null,
                null);
            this.n3UrO1d_cO_uk(_CC_, this.ME, -15, 0, _182_, .333, 0, .666, 1, 'pageOpen' +
                this.ME + 'sq', _4F_, false, 4.71238898038,
                .55, .9, _1EE_, U, W, V, X, null, null, null,
                null, {
                    dEAnaIEx: true,
                    _4B_: true
                })
        };
        var _187_ = new _16D_('images/tabs/_checkered.jpg',
            0, 200, false);
        var _186_ = new _16D_(
            'images/tabs/_checkered.jpg', 0, 300, false);
        var _188_ = new _16D_(
            'images/tabs/_checkered.jpg', 0, 500, false);
        var _18A_ = new _16D_(
            'images/tabs/skill_ruler.png', 779, 200, false);
        var _18B_ =
            new _16D_('images/tabs/skill_setsquare.png',
                800, 337, false);
        var _189_ = new _16D_(
            'images/empty.png', 500, 60, false);
        _11A_();
        this.n3UrO1d_cO_uk(
            _163_, this.SKILL, 10, null, _18B_, 0, 0,
            1, 1, 'pageOpen' + this.SKILL + 'cscs', null, false,
            1.57079632679, 0, .7, _1EE_, null, null, 2000, 2001, E, F, null, null, {
                _1E3_: true
            }
        );
        this.n3UrO1d_cO_uk(_163_, this.SKILL, 20, null, _18A_, 0, 0,
            1, 1, 'pageOpen' + this.SKILL + 'cs', null, false, -1.57079632679,
            0, .7, _1EE_, null, null, 2006, 2007, K, L, null, null, {
                dEAnaIEx: true,
                _1E3_: true
            });
        if (!_164_._70_) {
            this._159_ = [this.n3UrO1d_cO_uk(
                _163_, this.SKILL, -20, null, _186_, 0, 0, 1, 1, 'pageOpen' + this.SKILL +
                'cs', D3aN4I3x, false, 1.57079632679, 0, 1, _1EE_, null, null, 2014, 2015,
                null, null, null, null), this.n3UrO1d_cO_uk(_163_, this.SKILL, -20,
                null, _187_, 0, 0, 1, 1, 'pageOpen' + this.SKILL + 'sq', D3aN4I3x, false,
                1.57079632679, 0, 1, _1EE_, null, null, 2016, 2017, null, null, null, null), this.n3UrO1d_cO_uk(
                _163_, this.SKILL, -10, null, _186_, 0, 0, 1, 1, 'pageOpen' + this.SKILL,
                D3aN4I3x, false, 1.57079632679, 0, 1, _1EE_, null, null, 2018, 2019, null,
                null, null, null), this.n3UrO1d_cO_uk(_163_, this.SKILL, -10, null,
                _186_, 0, 0, 1, 1, 'pageOpen' + this.SKILL, D3aN4I3x, false, 1.57079632679,
                .4, 1, _1EE_, null, null, 2020, 2021, null, null, null, null), this.n3UrO1d_cO_uk(
                _163_, this.SKILL, -10, null, _187_, 0, 0, 1, 1, 'pageOpen' + this.SKILL +
                'cs', D3aN4I3x, false, 1.57079632679, 0, 1, _1EE_, null, null, 2022, 2023,
                null, null, null, null), this.n3UrO1d_cO_uk(_163_, this.SKILL, -15,
                null, _186_, 0, 0, 1, 1, 'pageOpen' + this.SKILL + 'sq', D3aN4I3x, false,
                1.57079632679, .4, 1, _1EE_, null, null, 2024, 2025, null, null, null, null), this.n3UrO1d_cO_uk(
                _163_, this.SKILL, -25, null, _188_, 0, 0, 1, 1,
                'pageOpen' +
                this.SKILL,
                D3aN4I3x,
                false,
                1.57079632679,
                .7,
                1,
                _1EE_,
                null, null, 2026, 2027, null, null, null, null), this.n3UrO1d_cO_uk(_163_, this.SKILL, -18, null, _186_, 0, 0, 1,
                1, 'pageOpen' + this.SKILL, D3aN4I3x, false, 1.57079632679, .4, 1,
                _1EE_, null, null, 2028, 2029, null, null, null, null), this.n3UrO1d_cO_uk(
                _163_, this.SKILL, -30, null, _186_, 0, 0, 1, 1, 'pageOpen' + this.SKILL +
                'cs', D3aN4I3x, false, 1.57079632679, .6, 1, _1EE_, null, null, 2030, 2031,
                null, null, null, null), this.n3UrO1d_cO_uk(_163_, this.SKILL, -25,
                null, _186_, 0, 0, 1, 1, 'pageOpen' + this.SKILL + 'sq', D3aN4I3x, false,
                1.57079632679, 0, 1, _1EE_, null, null, 2032, 2033, null, null, null, null), this.n3UrO1d_cO_uk(
                _163_, this.SKILL, -25, null, _188_, 0, 0, 1, 1, 'pageOpen' + this.SKILL,
                D3aN4I3x, false, 1.57079632679, .3, 1, _1EE_, null, null, 2034, 2035, null,
                null, null, null), this.n3UrO1d_cO_uk(_163_, this.SKILL, -30, null,
                _188_, 0, 0, 1, 1, 'pageOpen' + this.SKILL, D3aN4I3x, false, 1.57079632679,
                .5, 1, _1EE_, null, null, 2036, 2037, null, null, null, null)]
        } else {
            this._159_ = [this.n3UrO1d_cO_uk(_163_, this.SKILL, -20, null, _187_, 0,
                0, 1, 1, 'pageOpen' + this.SKILL + 'cs', D3aN4I3x, false, 1.57079632679,
                0, 1, _1EE_, null, null, 2014, 2015, null, null, null, null), this.n3UrO1d_cO_uk(
                _163_, this.SKILL, -10, null, _187_, 0, 0, 1, 1, 'pageOpen' + this.SKILL,
                D3aN4I3x, false, 1.57079632679, 0, 1, _1EE_,
                null, null, 2018, 2019, null, null, null,
                null), this.n3UrO1d_cO_uk(_163_, this.SKILL, -10, null, _187_, 0, 0, 1, 1, 'pageOpen' +
                this.SKILL, D3aN4I3x, false, 1.57079632679,
                .4, 1, _1EE_, null, null, 2020, 2021,
                null, null, null, null), this.n3UrO1d_cO_uk(
                _163_, this.SKILL, -25, null, _186_, 0,
                0, 1, 1, 'pageOpen' + this.SKILL, D3aN4I3x,
                false, 1.57079632679, .7, 1, _1EE_, null,
                null, 2026, 2027, null, null, null, null), this.n3UrO1d_cO_uk(_163_, this.SKILL, -30, null, _186_, 0,
                0, 1, 1, 'pageOpen' + this.SKILL + 'cs', D3aN4I3x, false, 1.57079632679,
                .6, 1, _1EE_, null, null, 2030, 2031, null, null, null, null), this.n3UrO1d_cO_uk(
                _163_, this.SKILL, -25, null, _186_, 0, 0, 1, 1, 'pageOpen' + this.SKILL +
                'sq', D3aN4I3x, false, 1.57079632679, 0, 1, _1EE_, null, null, 2032,
                2033, null, null, null, null), this.n3UrO1d_cO_uk(_163_, this.SKILL, -30, null, _186_, 0, 0, 1, 1, 'pageOpen' + this.SKILL, D3aN4I3x,
                false, 1.57079632679, .5, 1, _1EE_, null, null, 2036, 2037, null, null,
                null, null)]
        };
        this._153_ = this.n3UrO1d_cO_uk(_15B_, this.SKILL, -50, null, _189_, 0, 0, 1, 1, 'pageOpen' + this.SKILL, null, false,
            null, 0, 1, .4, 2050, 2051, null, null, null, null, null, null)
    },
    n3UrO1d_cO_uk: function(_type, _page, _zadjust0, _zadjust1, _txr, _txrX0, _txrY0, _txrX1,
        _txrY1, _variable, _fold, _foldrenormalize, _range, _mf0, _mf1, _mfv,
        _pA, _pB, _pC, _pD, _pAout, _pBout, _pCout, _pDout, _args) {
        var _167_ =
            new _168_();
        var _58_ = !!arguments[24];
        var _1F2_ = _58_ && _args.html;
        var _1F1_ = _58_ && _args._4B_ || false;
        var _1F0_ = _58_ && _args.dEAnaIEx || false;
        var _1F8_ = _58_ && _args._1E3_ || false;
        var _1F5_ = _58_ && _args.opacity || null;
        var id = this._169_.length;
        var _18C_ =
            _txr.width;
        if (_18C_ == 0 || _18C_ === undefined) {
            var _1CD_ = this._11C_[_pD]._DD_ -
                this._11C_[_pC]._DD_;
            var _1E0_ = this._11C_[_pD]._E1_ -
                this._11C_[_pC]._E1_;
            _18C_ = Math.sqrt(_1CD_ * _1CD_ +
                _1E0_ * _1E0_)
        };
        var _1CA_ = _18C_ * _txrX0 >> 0;
        var _1CB_ = _18C_ * _txrX1 >> 0;
        var _1D4_ =
            _txr.height * _txrY0 >> 0;
        var _1D5_ = _txr.height *
            _txrY1 >> 0;
        var width = _1CB_ - _1CA_;
        var height =
            _1D5_ - _1D4_;
        if (_txr.url) {
            var _D2_ = this.dEAN_4LeX('tab_' +
                id, _1F2_ || '', 'tab');
            _D2_.style.backgroundImage = "url('" + _txr.url +
                "')";
            _D2_.style.width = (_167_.width = width) + 'px';
            _D2_.style.height =
                (_167_.height = height) + 'px';
            _D2_.style.backgroundPosition =
                (-_1CA_) + 'px ' + (-_1D4_) + 'px';
            if (_1F5_ !== false) _D2_.style.opacity =
                _1F5_;
            _167_._D2_ = _D2_
        };
        if (_type == 0) {
            _pA = _pC + 10000;
            _pB = _pD + 10000;
            this._FB_[_page]._11C_.push(_pA, _pB);
            var C = this._11C_[_pC];
            var D = this._11C_[_pD];
            var _B_ = Math.atan2(D._E1_ - C._E1_, D._DD_ - C._DD_);
            var sin = Math.sin(
                _B_);
            var cos = Math.cos(_B_);
            var h = Math.sqrt((C._DD_ - D._DD_) *
                    (C._DD_ - D._DD_) + (C._E1_ - D._E1_) * (C._E1_ - D._E1_)) / width *
                height;
            if (_fold === null) {
                _fold = 2;
                if (_range > 0) {
                    this._11C_[_pA] =
                        new _1A0_(C._DD_ + sin * h, 0, C._E1_ - cos * h);
                    this._11C_[_pB] = new _1A0_(
                        D._DD_ + sin * h, 0, D._E1_ - cos * h)
                } else {
                    this._11C_[_pA] = new _1A0_(
                        C._DD_ - sin * h, 0, C._E1_ + cos * h);
                    this._11C_[_pB] = new _1A0_(D._DD_ -
                        sin * h, 0, D._E1_ + cos * h)
                }
            } else if (_fold == 6) {
                this._11C_[_pA] =
                    new _1A0_(C._DD_, -h, C._E1_);
                this._11C_[_pB] = new _1A0_(D._DD_, -h, D._E1_)
            }
        };
        if (_type == 2) {
            _167_.winding = 1;
            _pC = _pA + 10000;
            _pD = _pB + 10000;
            this._FB_[_page].ptsS.push(_pC, _pD);
            var A = this._11C_[_pA];
            var B = this._11C_[_pB];
            var h = Math.sqrt((A._DD_ - B._DD_) * (A._DD_ - B._DD_) + (A._E1_ - B._E1_) * (A._E1_ -
                    B._E1_)) /
                width *
                height;
            this._11C_[_pC] =
                new _1A0_(
                    A._DD_, A._E0_ - h, A._E1_);
            this._11C_[_pD] =
                new _1A0_(B._DD_, B._E0_ - h, B._E1_)
        };
        _167_.pA = _pA;
        _167_._105_ = _pB;
        _167_._107_ =
            _pC;
        _167_._109_ = _pD;
        _167_.pAout = _pAout;
        _167_.pBout = _pBout;
        _167_.pCout =
            _pCout;
        _167_.pDout = _pDout;
        _167_.type = _type;
        _167_.pageIndex = _page;
        _167_.variable =
            _variable;
        _167_.foldType = _fold;
        _167_.foldRenormalize = _foldrenormalize;
        _167_.foldRange =
            _range;
        _167_.mf0 = _mf0;
        _167_.mf1 = _mf1;
        _167_._B5_ = Math.max(_mfv, _mf0);
        _167_.zAdjust0 = parseInt(_zadjust0);
        _167_.zAdjust1 = parseInt(_zadjust1 ===
            null ? _zadjust0 : _zadjust1);
        _167_.texture = _txr;
        _167_.textureX = -_1CA_;
        _167_.textureY = -_1D4_;
        _167_.aspectRatio = width / height;
        _167_._4B_ = _1F1_;
        _167_.dEAnaIEx =
            _1F0_;
        _167_._1E3_ = _1F8_;
        return this._169_[id] = _167_
    },
    D3AN4l3x: function() {
        var _167_;
        var i, len = this._169_.length;
        for (i = 0; i < len; i++) {
            _167_ =
                this._169_[i];
            if (_167_.pageIndex == this.pageIndex || (_167_.pageIndex == this.pageIndex +
                    1 && !this._EC_)) this.D3aN_aI3X(_167_)
        }
    },
    D3aN_aI3X: function(_167_) {
        var A, B, C,
            D;
        var deAN4lEx, NeuRoid_c0_UK, _2B_, D34nAI3x;
        var _A7_ = _19C_[_167_.variable];
        var _15E_ = (_A7_ - _167_.mf0) / (_167_.mf1 - _167_.mf0);
        if (_15E_ < 0) _15E_ =
            0;
        if (_15E_ > 1) _15E_ = 1;
        var _1A2_ = _167_.dEAnaIEx || _A7_ >= _167_._B5_ && _15E_ > 0;
        if (!_1A2_) {
            if (_167_._D2_) this._59_(_167_._D2_)
        } else {
            A = this._11C_[_167_.pA];
            B = this._11C_[_167_._105_];
            C = this._11C_[_167_._107_];
            D = this._11C_[_167_._109_];
            if (A === undefined || B === undefined || C ===
                undefined || D === undefined) {
                return
            };
            switch (_167_.type) {
                case 0:
                case 1:
                    var d34n_A13X = _15E_ * _167_.foldRange;
                    switch (_167_.foldType) {
                        case 0:
                            _2B_ = A;
                            D34nAI3x = B;
                            deAN4lEx = _8B_._13F_(A.x, A.y, A.z, B.x, B.y,
                                B.z, C.x, C.y, C.z, d34n_A13X);
                            NeuRoid_c0_UK = _8B_._13F_(A.x,
                                A.y, A.z, B.x, B.y, B.z, D.x, D.y, D.z, d34n_A13X);
                            if (_167_.foldRenormalize) {
                                var len = _8B_._19F_(_2B_, D34nAI3x) / _167_.aspectRatio;
                                _8B_._1A3_(_2B_, deAN4lEx, len);
                                _8B_._1A3_(D34nAI3x, NeuRoid_c0_UK,
                                    len)
                            };
                            if (_167_.pAout) this._11C_[_167_.pAout] = deAN4lEx;
                            if (_167_.pBout) this._11C_[_167_.pBout] = NeuRoid_c0_UK;
                            if (_167_.pCout) this._11C_[_167_.pCout] = _2B_;
                            if (
                                _167_.pDout) this._11C_[_167_.pDout] = D34nAI3x;
                            break;
                        case 1:
                            deAN4lEx = B;
                            _2B_ = D;
                            NeuRoid_c0_UK = _8B_._13F_(B.x, B.y, B.z,
                                D.x, D.y, D.z, A.x, A.y, A.z, d34n_A13X);
                            D34nAI3x = _8B_._13F_(
                                B.x, B.y, B.z, D.x, D.y, D.z, C.x, C.y, C.z, d34n_A13X);
                            if (_167_.foldRenormalize) {
                                var len = _8B_._19F_(
                                    deAN4lEx, _2B_) * _167_.aspectRatio;
                                _8B_._1A3_(deAN4lEx,
                                    NeuRoid_c0_UK, len);
                                _8B_._1A3_(_2B_, D34nAI3x, len)
                            };
                            if (_167_.pAout) this._11C_[_167_.pAout] =
                                deAN4lEx;
                            if (_167_.pBout) this._11C_[_167_.pBout] =
                                NeuRoid_c0_UK;
                            if (_167_.pCout) this._11C_[_167_.pCout] =
                                _2B_;
                            if (_167_.pDout) this._11C_[_167_.pDout] =
                                D34nAI3x;
                            break;
                        case 2:
                            _2B_ = C;
                            D34nAI3x = D;
                            deAN4lEx =
                                _8B_._13F_(C.x, C.y, C.z, D.x, D.y, D.z, A.x, A.y, A.z, d34n_A13X);
                            NeuRoid_c0_UK = _8B_._13F_(C.x, C.y, C.z, D.x,
                                D.y, D.z, B.x, B.y, B.z, d34n_A13X);
                            if (_167_.foldRenormalize) {
                                var len = _8B_._19F_(_2B_, D34nAI3x) / _167_.aspectRatio;
                                _8B_._1A3_(_2B_, deAN4lEx, len);
                                _8B_._1A3_(D34nAI3x, NeuRoid_c0_UK,
                                    len)
                            };
                            if (_167_.pAout) this._11C_[_167_.pAout] = deAN4lEx;
                            if (_167_.pBout) this._11C_[_167_.pBout] = NeuRoid_c0_UK;
                            if (_167_.pCout) this._11C_[_167_.pCout] = _2B_;
                            if (_167_.pDout)
                                this._11C_[_167_.pDout] = D34nAI3x;
                            break;
                        case 3:
                            NeuRoid_c0_UK = A;
                            D34nAI3x = C;
                            deAN4lEx = _8B_._13F_(A.x, A.y, A.z, C.x, C.y, C.z, B.x, B.y, B.z, d34n_A13X);
                            _2B_ = _8B_._13F_(A.x, A.y, A.z, C.x, C.y, C.z, D.x, D.y, D.z,
                                d34n_A13X);
                            if (_167_.foldRenormalize) {
                                var len = _8B_._19F_(NeuRoid_c0_UK,
                                    D34nAI3x) * _167_.aspectRatio;
                                _8B_._1A3_(NeuRoid_c0_UK, deAN4lEx,
                                    len);
                                _8B_._1A3_(D34nAI3x, _2B_, len)
                            };
                            if (_167_.pAout) this._11C_[_167_.pAout] =
                                deAN4lEx;
                            if (_167_.pBout) this._11C_[_167_.pBout] = NeuRoid_c0_UK;
                            if (
                                _167_.pCout) this._11C_[_167_.pCout] = _2B_;
                            if (_167_.pDout) this._11C_[_167_.pDout] =
                                D34nAI3x;
                            break;
                        case 4:
                            _2B_ = A;
                            D34nAI3x = B;
                            deAN4lEx = new _1A0_(2 * A.x -
                                C.x, 2 * A.y - C.y, 2 * A.z - C.z);
                            NeuRoid_c0_UK = new _1A0_(2 *
                                B.x - D.x, 2 * B.y - D.y, 2 * B.z - D.z);
                            var len = _8B_._19F_(_2B_,
                                D34nAI3x) / _167_.aspectRatio * _15E_;
                            _8B_._1A3_(deAN4lEx, _2B_, len);
                            _8B_._1A3_(NeuRoid_c0_UK, D34nAI3x, len);
                            var th = _167_.width / _167_.aspectRatio *
                                _15E_ + 1 >> 0;
                            _167_.height == th ? true : _167_._D2_.style.height = (_167_.height =
                                th) + 'px';
                            if (_167_.pAout) this._11C_[_167_.pAout] = deAN4lEx;
                            if (_167_.pBout)
                                this._11C_[_167_.pBout] = NeuRoid_c0_UK;
                            if (_167_.pCout) this._11C_[_167_.pCout] = _2B_;
                            if (_167_.pDout) this._11C_[_167_.pDout] = D34nAI3x;
                            break;
                        case 6:
                            _2B_ = C;
                            D34nAI3x =
                                D;
                            deAN4lEx = new _1A0_(2 * C.x - A.x, 2 * C.y - A.y, 2 * C.z - A.z);
                            NeuRoid_c0_UK = new _1A0_(2 * D.x - B.x, 2 * D.y - B.y, 2 * D.z - B.z);
                            var len = _8B_._19F_(_2B_, D34nAI3x) / _167_.aspectRatio * _15E_;
                            _8B_._1A3_(
                                _2B_, deAN4lEx, len);
                            _8B_._1A3_(D34nAI3x, NeuRoid_c0_UK, len);
                            var th = _167_.width /
                                _167_.aspectRatio * _15E_ + 1 >> 0;
                            _167_.height == th ? true : _167_._D2_.style.height =
                                (_167_.height = th) + 'px';
                            if (_167_.pAout) this._11C_[_167_.pAout] = deAN4lEx;
                            if (_167_.pBout) this._11C_[_167_.pBout] = NeuRoid_c0_UK;
                            if (_167_.pCout) this._11C_[_167_.pCout] =
                                _2B_;
                            if (_167_.pDout) this._11C_[_167_.pDout] = D34nAI3x;
                            break;
                        case 8:
                            _2B_ = A;
                            D34nAI3x =
                                B;
                            deAN4lEx = new _1A0_(C.x * d34n_A13X + A.x * (1 - d34n_A13X), C.y * d34n_A13X +
                                A.y * (1 - d34n_A13X), C.z * d34n_A13X +
                                A.z *
                                (
                                    1 -
                                    d34n_A13X)
                            );
                            NeuRoid_c0_UK =
                                new _1A0_(
                                    D.x *
                                    d34n_A13X +
                                    B.x *
                                    (
                                        1 -
                                        d34n_A13X),




                                    D.y *
                                    d34n_A13X + B.y *
                                    (1 - d34n_A13X), D.z * d34n_A13X +
                                    B.z * (1 - d34n_A13X)
                                );
                            if (_167_.pAout) this._11C_[_167_.pAout] =
                                deAN4lEx;
                            if (_167_.pBout) this._11C_[_167_.pBout] =
                                NeuRoid_c0_UK;
                            if (_167_.pCout) this._11C_[_167_.pCout] =
                                _2B_;
                            if (_167_.pDout) this._11C_[_167_.pDout] =
                                D34nAI3x;
                            break
                    };
                    if (_167_.multiplier) {
                        var _CA_ = _19C_[_167_.multiplier];
                        deAN4lEx.x *= _CA_;
                        NeuRoid_c0_UK.x *= _CA_;
                        _2B_.x *=
                            _CA_;
                        D34nAI3x.x *= _CA_;
                        deAN4lEx.y *= _CA_;
                        NeuRoid_c0_UK.y *= _CA_;
                        _2B_.y *=
                            _CA_;
                        D34nAI3x.y *= _CA_
                    };
                    _136_._139_([deAN4lEx, NeuRoid_c0_UK, _2B_, D34nAI3x]);
                    break;
                case 2:
                    var _44_ = 650 * (1 - _15E_);
                    deAN4lEx = new _1A0_(A._DD_, A._E0_ + _44_, A._E1_);
                    NeuRoid_c0_UK = new _1A0_(
                        B._DD_, B._E0_ + _44_, B._E1_);
                    _2B_ = new _1A0_(C._DD_, C._E0_ + _44_, C._E1_);
                    D34nAI3x = new _1A0_(D._DD_,
                        D._E0_ + _44_, D._E1_);
                    _136_._135_(this._EE_, [deAN4lEx, NeuRoid_c0_UK, _2B_, D34nAI3x]);
                    A.y = deAN4lEx.y;
                    B.y = NeuRoid_c0_UK.y;
                    C.y = _2B_.y;
                    D.y = D34nAI3x.y;
                    if (_167_.pAout) this._11C_[_167_.pAout] = deAN4lEx;
                    if (_167_.pBout) this._11C_[_167_.pBout] = NeuRoid_c0_UK;
                    if (_167_.pCout) this._11C_[_167_.pCout] =
                        _2B_;
                    if (_167_.pDout) this._11C_[_167_.pDout] = D34nAI3x;
                    if (_167_._D2_) {
                        var opacity = ((_15E_ < .4 ?
                            0 : _15E_ > .6 ? 1 : (_15E_ - .4) * 5) * 20 >> 0) * 0.05;
                        if (_167_._D2_.opacity != opacity) _167_._D2_.style.opacity =
                            _167_._D2_.opacity = opacity
                    };
                    break;
                case 3:
                    deAN4lEx = A;
                    NeuRoid_c0_UK = B;
                    _2B_ = C;
                    D34nAI3x = D;
                    _136_._135_(this._EE_, [deAN4lEx, NeuRoid_c0_UK, _2B_, D34nAI3x]);
                    break
            };
            if (!_167_._D2_) return;
            var _1DF_, _1E8_, _1E1_, _1E2_, zfinal;
            _1E1_ = (deAN4lEx.z + NeuRoid_c0_UK.z + _2B_.z + D34nAI3x.z) * .25;
            if (this._FF_) {
                _1DF_ = _167_._1E3_ ? ((_167_.zAdjust0 -
                    _167_.zAdjust1) * _15E_ - _167_.zAdjust1 >> 0) : ((_167_.zAdjust1 - _167_.zAdjust0) * _15E_ + _167_.zAdjust1 >> 0);
                _1E8_ = this._FC_ == 1 ? (_167_.pageIndex == this.pageIndex ? 500 : 1500) : ((_167_.pageIndex == this.pageIndex + 1) ?
                    500 : 1500);
                _1E8_ = this._FC_ == 1 ? (_167_.pageIndex == this.pageIndex ? 1500 : 500) : ((_167_.pageIndex == this.pageIndex +
                    1) ? 1500 : 500);
                _1E2_ = _1E8_ + (_1E1_ - this._1EC_) * -this._1EA_ >> 0;
                zfinal = 2000 - Math.max(Math.min(_1E2_ + _1DF_, _1E8_ +
                    499), _1E8_ - 499)
            } else {
                _1DF_ = (_167_.zAdjust1 - _167_.zAdjust0) * _15E_ + _167_.zAdjust1 >> 0;
                _1E8_ = this._FC_ == 0 ? (
                    _167_.pageIndex == this.pageIndex ? 1500 : 500) : ((_167_.pageIndex == this.pageIndex + 1) ? 1500 : 500);
                _1E2_ = _1E8_ + (_1E1_ - this._1EC_) * -this._1EA_ >> 0;
                zfinal = Math.max(Math.min(_1E2_ + _1DF_, _1E8_ + 499), _1E8_ - 499)
            };
            _1E1_ < 700 ? this._59_(_167_._D2_) : _167_._4B_ ? this._25_(_167_._D2_, zfinal, _167_.width, _167_.height, _2B_.sx, _2B_.sy, D34nAI3x.sx, D34nAI3x.sy, deAN4lEx.sx,
                deAN4lEx.sy, NeuRoid_c0_UK.sx, NeuRoid_c0_UK.sy, _167_.winding) : this._25_(_167_._D2_, zfinal, _167_.width,
                _167_.height, deAN4lEx.sx, deAN4lEx.sy, NeuRoid_c0_UK.sx, NeuRoid_c0_UK.sy, _2B_.sx, _2B_.sy, D34nAI3x.sx,
                D34nAI3x.sy, _167_.winding);
            if (_167_.currentState != _167_.changeState || (_167_.texture.hasBackface && _167_.currentWinding !=
                    _8B_.DeaN_A13X)) _167_._D2_.style.backgroundPosition = _8B_.DeaN_A13X == 1 ? ((_167_.textureX -
                _167_.texture.width * _167_.changeState) + 'px ' + _167_.textureY + 'px') : ((_167_.textureX -
                _167_.texture.width * _167_.texture.stateCount) + 'px ' + _167_.textureY + 'px');
            _167_.currentWinding =
                _8B_.DeaN_A13X;
            _167_.currentState = _167_.changeState
        }
    },
    nEUr0ld_C0_uk: [],
    _11_: 500,
    DEAnALEX: 8,
    d3aN_4LeX: 0,
    De4naL3X: 0,
    _148_: function(_D2_) {
        if (_D2_.noBuffer) {
            _D2_._1A2_ ?
                true : _D2_._1A2_ = !!(_D2_.style.display = 'block');
            return
        };
        if (_D2_._1A2_) {
            if (_D2_.bufferIndex !== undefined) {
                this.nEUr0ld_C0_uk[_D2_.bufferIndex] =
                    undefined;
                _D2_.bufferIndex = undefined
            }
        } else {
            if (_D2_.bufferIndex ===
                undefined) {
                this.nEUr0ld_C0_uk[this.d3aN_4LeX] = _D2_;
                _D2_.bufferIndex =
                    this.d3aN_4LeX;
                this.d3aN_4LeX = (this.d3aN_4LeX +
                    1) % this._11_
            }
        }
    },
    _59_: function(_D2_) {
        _D2_._1A2_ = !(_D2_.style.display = 'none');
        if (_D2_.bufferIndex !==
            undefined) {
            this.nEUr0ld_C0_uk[_D2_.bufferIndex] = undefined;
            _D2_.bufferIndex = undefined
        }
    },
    _18F_: function(processall) {
        var d34NAl3x = processall ?
            this._11_ : this.DEAnALEX;
        var _D2_,
            bufferitem;
        while (d34NAl3x-- && this.De4naL3X !=
            this.d3aN_4LeX) {
            _D2_ = this.nEUr0ld_C0_uk[this.De4naL3X];
            if (_D2_) {
                _D2_._1A2_ ? true : _D2_._1A2_ = !!(_D2_.style.display =
                    'block');
                this.nEUr0ld_C0_uk[_D2_.bufferIndex] = undefined;
                _D2_.bufferIndex = undefined
            };
            this.De4naL3X =
                (this.De4naL3X + 1) % this._11_
        }
    },
    dEAN_4LeX: function(_id, _1F2_, _class, _element,
        _DOMparent, _x, _y) {
        var _D2_;
        _D2_ = document.createElement(
            _element || 'div');
        _D2_.id = _id;
        _D2_.innerHTML =
            _1F2_;
        _D2_._1A2_ = false;
        _D2_.style.cssText = 'position:absolute;display:none;' +
            (_x === undefined ? '' : 'left:' + _x + 'px;') + (_y === undefined ? '' : 'top:' + _y + 'px;');
        if (_class)
            _D2_.className = _class;
        _DOMparent ? _DOMparent.appendChild(_D2_) :
            document.getElementById('content').appendChild(_D2_);
        return _D2_
    },
    _24_: function(cursor) {
        switch (cursor) {
            case "grab":
                _164_._1A8_ ?
                    document.body.style.cursor = "-webkit-grab" : document.body.style.cursor = "-moz-grab";
                break;
            case "grabbing":
                _164_._1A8_ ? document.body.style.cursor = "-webkit-grabbing" : document.body.style.cursor =
                    "-moz-grabbing";
                break;
            default:
                document.body.style.cursor = cursor
        }
    },
    de4N_a1Ex: function(
        _D2_, nEurOlD_c0_uK) {
        var b = _164_.webkitChrome ? "brightness( " + (100 + nEurOlD_c0_uK * 100 >> 0) + "% )" : _164_._1A8_ ? "brightness( " + nEurOlD_c0_uK + " )" : "brightness( " + (nEurOlD_c0_uK *
            100 >> 0) + "% )";
        _164_._1A8_ ? (_D2_.brightness == b ? true : _D2_.style.webkitFilter = _D2_.brightness =
            b) : (_D2_.brightness == b ? true : _D2_.style.MozFilter = _D2_.brightness = b)
    },
    _25_: function(_D2_, z, w, h, Ax, Ay, Bx, _13_, de4N_413X, _29_, Dx, Dy, _winding) {
        var d3an41EX = _winding == _8B_.d3ANAl3X(Ax, Ay, Bx, _13_, de4N_413X,
            _29_) || _winding == 0;
        if (z < 0) d3an41EX = false;
        if (Ay < 0 && _13_ < 0 && _29_ < 0 && Dy < 0)
            d3an41EX = false;
        if (_D2_.noRender) _D2_.noRender = d3an41EX = false;
        if (d3an41EX) {
            var M = _8B_._C8_(0, 0, w, h, Ax, Ay, Bx, _13_, de4N_413X, _29_, Dx,
                Dy);
            if (M) {
                this._148_(_D2_);
                _D2_.zIndex == z ? true : _D2_.style.zIndex =
                    _D2_.zIndex = z;
                var _C9_ = "matrix3d( " + M.m11 + ", " + M.m12 +
                    ", " + M.m13 + ", " + M.m14 + ", " + M.m21 + ", " + M.m22 +
                    ", " + M.m23 + ", " + M.m24 + ", " + M.m31 + ", " + M.m32 +
                    ", " + M.m33 + ", " + M.m34 + ", " + M.m41 + ", " + M.m42 +
                    ", " + M.m43 + ", " + M.m44 + "  " + ")";
                _164_._1A8_ ?
                    _D2_.style.webkitTransform = _C9_ : _D2_.style.MozTransform =
                    _C9_
            } else {
                this._59_(_D2_)
            }
        } else {
            this._59_(_D2_)
        }
    },
    _45_: function(
        type) {
        switch (type) {
            case 'NO3D':
                break
        };
        var _D2_ =
            document.getElementById('content');
        _D2_.innerHTML = "";
        _D2_.id = 'error';
        return true
    }
};
_C2_ = {
    X: 0,
    Y: 0,
    _1CE_: .5,
    Ymf: .5,
    nEUrOlD_co_uk:
        .5,
    D3an_4l3x: .5
};
_19C_ = {};
_19C_[0] = 0;
_19C_[1] = 1;
_164_ = {
    is3d: false,
    _70_: false,
    _1A8_: false,
    webkitChrome: false,
    init: function() {
        this._31_();
        this.detect3d();
        this._32_()
    },
    detect3d: function() {
        try {
            var el =
                document.createElement('p'),
                has3d,
                transforms = {
                    'webkitTransform': '-webkit-transform',
                    'OTransform': '-o-transform',
                    'MozTransform': '-moz-transform',
                    'transform': 'transform'
                };
            document.body.insertBefore(el, null);
            for (
                var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] =
                        "translate3d(1px,1px,1px)";
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t])
                }
            };
            document.body.removeChild(el);
            this.is3d = (has3d !== undefined && has3d.length > 0 && has3d !== "none")
        } catch (err) {}
    },
    _31_: function() {
        var _18D_ = navigator.userAgent.toLowerCase();
        if (_18D_.indexOf(
                'android') !== -1 || _18D_.indexOf('webos') !== -1 || _18D_.indexOf('iphone') !== -1 || _18D_.indexOf(
                'ipad') !== -1 || _18D_.indexOf('ipod') !== -1 || _18D_.indexOf('blackberry') !== -1 || _18D_.indexOf('windows phone') !== -1) this._70_ = true
    },
    _32_: function() {
        var _18D_ = navigator.userAgent.toLowerCase();
        this._1A8_ =
            _18D_.indexOf('webkit/') != -1;
        this.webkitChrome = _18D_.indexOf('chrome') != -1
    }
};
D3ANaIex =
    function() {
        this._D2_ = undefined;
        this._26_ = undefined;
        this.x = 0;
        this.y = 0;
        this.width = undefined;
        this.height = undefined;
        this.fullScreen = false;
        this.centerX = false;
        this.centerY = false;
        this.needsRefresh =
            false
    };
_55_ = function(_imgindex, _logoindex, _red, _green, _blue) {
    this.imgIndex = _imgindex;
    this.logoIndex = _logoindex;
    this.red = _red;
    this.green = _green;
    this.blue = _blue;
    this.rgb =
        'rgb(' + _red + ',' + _green + ',' + _blue + ')';
    this.rgba = 'rgba(' + _red + ',' + _green +
        ',' + _blue + ',0.25)';
    this.rgba2 = 'rgba(' + _red + ',' + _green + ',' + _blue +
        ',0.5)';
    this._28_ = {
        A: new _1A0_(0, 0, 0),
        B: new _1A0_(0, 0, 0),
        C: new _1A0_(0, 0, 0),
        D: new _1A0_(0, 0, 0),
        E: new _1A0_(0, 0, 0),
        F: new _1A0_(0, 0, 0),
        G: new _1A0_(0, 0, 0),
        H: new _1A0_(
            0, 0, 0)
    }
};
_E4_ = function() {
    this._D2_ =
        undefined;
    this.objSurface =
        undefined;
    this._7A_ = '';
    this._79_ = '';
    this._11C_ = [];
    this.ptsS = [];
    this.isActive =
        false;
    this._17_ = 0;
    this.DEan_aIeX = 0;
    this.N3URo1d_c0_uK =
        3.14159265359;
    this.de4n_Al3X =
        0;
    this.d3an4LeX = 0;
    this._19_ =
        0;
    this.sizeXmult = 1;
    this.textImg =
        ''
};
_168_ = function() {
    this.type =
        0;
    this.pageIndex = undefined;
    this._D2_ =
        undefined;
    this.width = 100;
    this.height =
        100;
    this.aspectRatio = 1;
    this.pA =
        0;
    this._105_ = 0;
    this._107_ =
        0;
    this._109_ = 0;
    this.pAout =
        0;
    this.pBout = 0;
    this.pCout = 0;
    this.pDout =
        0;
    this.variable = 'pageOpen';
    this.mf0 =
        0;
    this.mf1 = 1;
    this._B5_ = 0;
    this.foldType =
        0;
    this.foldRenormalize = false;
    this.foldRange =
        1.57079632679;
    this.dEAnaIEx = false;
    this.texture =
        undefined;
    this.textureX = 0;
    this.textureY = 0;
    this.zAdjust0 =
        0;
    this.zAdjust1 = 0;
    this.winding = 0;
    this.currentWinding = undefined;
    this.changeState = 0;
    this.currentState = 0;
    this._4B_ = false
};
_16D_ =
    function(_1F6_, _1F7_, _height, _backface, _statecount) {
        this.url = _1F6_;
        this.width = _1F7_ >> 0;
        this.height = _height >> 0;
        this.hasBackface = !!_backface;
        this.stateCount = _statecount || 1
    };
_8B_ = {
    _19F_: function(O, P) {
        var _42_ =
            P.x - O.x;
        var _44_ = P.y - O.y;
        var D34N_4L3X =
            P.z - O.z;
        return Math.sqrt(_42_ * _42_ + _44_ * _44_ +
            D34N_4L3X * D34N_4L3X)
    },
    _1A3_: function(O, P, len) {
        var _42_ =
            P.x - O.x;
        var _44_ = P.y - O.y;
        var D34N_4L3X = P.z - O.z;
        var _34_ = Math.sqrt(_42_ * _42_ + _44_ * _44_ + D34N_4L3X *
            D34N_4L3X);
        var _A7_ = len / _34_;
        P.x = O.x + _42_ * _A7_;
        P.y = O.y + _44_ * _A7_;
        P.z = O.z + D34N_4L3X * _A7_
    },
    _19E_: function(V1, V2) {
        return new _1A0_(V1.y *
            V2.z - V2.y * V1.z, V1.z * V2.x - V2.z *
            V1.x, V1.x * V2.y - V2.x * V1.y)
    },
    _1A4_: function(




        A,
        B,
        C) {
        var _3_ =
            B.x -
            A.x,
            ABy =
            B.y -
            A.y,
            ABz =
            B.z -
            A.z;
        var _6_ = C.x - A.x,
            ACy = C.y - A.y,
            ACz =
            C.z - A.z;
        var _CE_ = ABy * ACz - ACy * ABz,
            _CF_ = ABz *
            _6_ - ACz * _3_,
            _D0_ = _3_ * ACy - _6_ * ABy;
        var D3an_4I3X =
            1 / Math.sqrt(_CE_ * _CE_ + _CF_ * _CF_ + _D0_ * _D0_);
        return new _1A0_(
            _CE_ * D3an_4I3X, _CF_ * D3an_4I3X, _D0_ * D3an_4I3X)
    },
    _C0_: function(
        A, B) {
        return new _8D_(new _1A0_(A.m11 * B.m11 + A.m12 * B.m21 +
            A.m13 * B.m31, A.m11 * B.m12 + A.m12 * B.m22 + A.m13 * B.m32, A.m11 * B.m13 +
            A.m12 * B.m23 + A.m13 * B.m33), new _1A0_(A.m21 * B.m11 + A.m22 * B.m21 +
            A.m23 * B.m31, A.m21 * B.m12 + A.m22 * B.m22 + A.m23 * B.m32, A.m21 * B.m13 +
            A.m22 * B.m23 + A.m23 * B.m33), new _1A0_(A.m31 * B.m11 + A.m32 * B.m21 + A.m33 *
            B.m31, A.m31 * B.m12 + A.m32 * B.m22 + A.m33 * B.m32, A.m31 * B.m13 + A.m32 *
            B.m23 + A.m33 * B.m33))
    },
    _C8_: function(x, y, w, h, Ax, Ay, Bx, _13_, de4N_413X,
        _29_, Dx, Dy) {
        var DEANa1Ex = Bx - Ax;
        var _E_ = _13_ - Ay;
        var _1C_ = de4N_413X -
            Ax;
        var _1D_ = _29_ - Ay;
        var deAN413X = Dx - de4N_413X;
        var D34nALEx = Dy - _29_;
        var N3UROId_c0_uK = Ax - Dx;
        var _8_ = Ay - Dy;
        var DEAN_41Ex = de4N_413X - Bx;
        var d3anALex =
            _29_ - _13_;
        var d3aN413x = Dx - Bx;
        var _2D_ = Dy - _13_;
        var deana13X =
            _1C_ * d3anALex - _1D_ * DEAN_41Ex > 0;
        var NEuR01D_Co_uK = _8_ * d3aN413x -
            N3UROId_c0_uK * _2D_ > 0;
        if (deana13X !== NEuR01D_Co_uK) return;
        var n3uR01d_cO_UK =
            _1D_ * deAN413X - _1C_ * D34nALEx > 0;
        if (deana13X !== n3uR01d_cO_UK)
            return;
        var D3ANa1ex = d3anALex * deAN413X - DEAN_41Ex * D34nALEx > 0;
        if (
            deana13X !== D3ANa1ex) return;
        var _43_ = Dx * _E_;
        var dE4N_aLEx = Bx *
            de4N_413X * _8_;
        var _7_ = Ax * Dx * d3anALex;
        var ma = -h * (dE4N_aLEx + Bx * Dx *
            _1D_ - _7_ + Ax * de4N_413X * _2D_);
        var mb = w * (dE4N_aLEx + de4N_413X *
            _43_ + _7_ + Ax * Bx * D34nALEx);
        var mc = h * x * (dE4N_aLEx + Bx * Dx * _1D_ -
            _7_ + Ax * de4N_413X * _2D_) - h * w * Ax * (Dx * d3anALex - de4N_413X *
            _2D_ + Bx * D34nALEx) - w * y * (dE4N_aLEx + de4N_413X * _43_ + _7_ + Ax * Bx *
            D34nALEx);
        var _92_ = h * (-_43_ * _29_ + Bx * Ay * D34nALEx - Ax * _13_ *
            D34nALEx - de4N_413X * Ay * Dy + de4N_413X * _13_ * Dy);
        var me = w * (Dx * _13_ *
            _1D_ - de4N_413X * Ay * _2D_ - Bx * _1D_ * Dy + Ax * _29_ * _2D_);
        var _A7_ = -(w * (Dx * (y * _13_ * _1D_ + h * Ay * d3anALex) - de4N_413X * (h + y) * Ay * _2D_ + h * Bx * Ay * D34nALEx - Bx * y * _1D_ * Dy + Ax * y * _29_ * _2D_) - h * x * (_43_ * _29_ - Bx * Ay * D34nALEx - de4N_413X * _E_ * Dy + Ax * _13_ *
            D34nALEx));
        var _BA_ = h * (de4N_413X * _E_ - _43_ + DEANa1Ex * D34nALEx);
        var _BB_ =
            w * (-Bx * _1D_ + Dx * _1D_ - _1C_ * _2D_);
        var mi = w * y * (Bx * _1D_ -
            Dx * _1D_ - Ax * _2D_ + de4N_413X * _2D_) + h * (x * (-(de4N_413X * _E_) + _43_ + Ax * D34nALEx - Bx * D34nALEx) + w * (-(de4N_413X * _13_) + Dx *
            _13_ + Bx * _29_ - Dx * _29_ - Bx * Dy + de4N_413X * Dy));
        if (mi == 0) return;
        var _1F3_ = 1 / mi;
        return {
            m11: (ma * _1F3_).toFixed(8),
            m12: (_92_ *
                _1F3_).toFixed(8),
            m13: 0,
            m14: (_BA_ * _1F3_).toFixed(8),
            m21: (mb *
                _1F3_).toFixed(8),
            m22: (me * _1F3_).toFixed(8),
            m23: 0,
            m24: (_BB_ *
                _1F3_).toFixed(8),
            m31: 0,
            m32: 0,
            m33: 1,
            m34: 0,
            m41: (mc * _1F3_).toFixed(
                8),
            m42: (_A7_ * _1F3_).toFixed(8),
            m43: 0,
            m44: 1,
            _93_: .7985312274
        }
    },
    _126_: function(Q1, Q2) {
        return new _12C_(Q1.w * Q2.w - Q1.x * Q2.x -
            Q1.y * Q2.y - Q1.z * Q2.z, Q1.w * Q2.x + Q1.x * Q2.w + Q1.y * Q2.z -
            Q1.z * Q2.y, Q1.w * Q2.y + Q1.y * Q2.w + Q1.z * Q2.x - Q1.x *
            Q2.z, Q1.w * Q2.z + Q1.z * Q2.w + Q1.x * Q2.y - Q1.y * Q2.x)
    },
    _128_: function(Q, m) {
        var im = 1 / m;
        return new _12C_(Q.w *
            im, Q.x * im, Q.y * im, Q.z * im)
    },
    _129_: function(QA, QB, t) {
        var _125_ =
            new _12C_(0, 0, 0, 0);
        var c = QA.w * QB.w + QA.x * QB.x + QA.y * QB.y + QA.z *
            QB.z;
        if (c < 0) {
            QB.w = -QB.w;
            QB.x = -QB.x;
            QB.y = -QB.y;
            QB.z = -QB.z;
            c = -c
        };
        if (c >= 1 || c <= -1) {
            _125_.w = QA.w;
            _125_.x = QA.x;
            _125_.y =
                QA.y;
            _125_.z = QA.z;
            return _125_
        };
        var h = Math.acos(c);
        var s = Math.sqrt(
            1.0 - c * c);
        if (Math.abs(s) < .0001) {
            _125_.w = (QA.w * .5 + QB.w *
                .5);
            _125_.x = (QA.x * .5 + QB.x * .5);
            _125_.y = (QA.y * .5 + QB.y *
                .5);
            _125_.z = (QA.z * .5 + QB.z * .5);
            return _125_
        };
        var a = Math.sin(
            (1 - t) * h) / s;
        var b = Math.sin(t * h) / s;
        _125_.w = (QA.w * a +
            QB.w * b);
        _125_.x = (QA.x * a + QB.x * b);
        _125_.y = (QA.y * a + QB.y *
            b);
        _125_.z = (QA.z * a + QB.z * b);
        return _125_
    },
    Neur0ID_Co_Uk: function(aX, aY, aZ) {
        var _12E_ = new _12C_(Math.cos(aX * 0.5), Math.sin(aX * 0.5), 0, 0);
        var _12F_ = new _12C_(Math.cos(aY * 0.5), 0, Math.sin(aY * 0.5), 0);
        var _131_ =
            new _12C_(Math.cos(aZ * 0.5), 0, 0, Math.sin(aZ * 0.5));
        var _127_ = this._126_(this._126_(
            _12E_, _12F_), _131_);
        return this._128_(_127_, 1)
    },
    _12B_: function(Q) {
        var M =
            new _8C_();
        var _1C7_ = Q.w * Q.x * 2;
        var _1C8_ = Q.w * Q.y * 2;
        var _1C9_ = Q.w *
            Q.z * 2;
        var _1D1_ = Q.x * Q.x * 2;
        var _1D2_ = Q.x * Q.y * 2;
        var _1D3_ = Q.x *
            Q.z * 2;
        var _1DC_ = Q.y * Q.y * 2;
        var _1DD_ = Q.y * Q.z * 2;
        var _1ED_ = Q.z *
            Q.z * 2;
        M.m11 = 1 - _1DC_ - _1ED_;
        M.m12 = _1D2_ - _1C9_;
        M.m13 = _1D3_ + _1C8_;
        M.m21 = _1D2_ + _1C9_;
        M.m22 = 1 - _1D1_ - _1ED_;
        M.m23 = _1DD_ - _1C7_;
        M.m31 =
            _1D3_ - _1C8_;
        M.m32 = _1DD_ + _1C7_;
        M.m33 = 1 - _1D1_ - _1DC_;
        return M
    },
    DeaN_A13X: false,
    d3ANAl3X: function(Ax, Ay, Bx, _13_, de4N_413X,
        _29_) {
        return this.DeaN_A13X = ((Ax - de4N_413X) * (_13_ - _29_) -
            (Ay - _29_) * (Bx - de4N_413X)) > 0
    },
    _111_: function(_11E_,
        _121_, Ax, Ay, Bx, _13_, de4N_413X, _29_) {
        var n3Ur01D_c0_Uk = this.d3ANAl3X;
        if (n3Ur01D_c0_Uk(Ax, Ay, Bx, _13_, _11E_, _121_)) {
            return n3Ur01D_c0_Uk(
                de4N_413X, _29_, Ax, Ay, _11E_, _121_) && n3Ur01D_c0_Uk(Bx, _13_,
                de4N_413X, _29_, _11E_, _121_)
        } else {
            return !n3Ur01D_c0_Uk(
                de4N_413X, _29_,
                Ax,
                Ay,
                _11E_,
                _121_) && !n3Ur01D_c0_Uk(
                Bx,
                _13_,
                de4N_413X, _29_, _11E_, _121_)
        }
    },
    _13F_: function(
        p1x, p1y, p1z, p2x, p2y, p2z, p0x, p0y, p0z, theta) {
        var _11D_ = p0x - p1x;
        var _120_ = p0y - p1y;
        var _123_ = p0z - p1z;
        var qx = 0;
        var qy = 0;
        var qz = 0;
        var _CE_ = p2x - p1x;
        var _CF_ = p2y - p1y;
        var _D0_ = p2z - p1z;
        Nm = 1 / (Math.sqrt(
            _CE_ * _CE_ + _CF_ * _CF_ + _D0_ * _D0_) || 1);
        var nx = _CE_ * Nm;
        var ny =
            _CF_ * Nm;
        var nz = _D0_ * Nm;
        var c = Math.cos(theta);
        var t = 1 - c;
        var s =
            Math.sin(theta);
        X = nx;
        Y = ny;
        Z = nz;
        var _17C_ = t * X;
        var tY = t * Y;
        var m11 = _17C_ *
            X + c;
        var m12 = _17C_ * Y - s * Z;
        var m13 = _17C_ * Z + s * Y;
        var m21 = _17C_ *
            Y + s * Z;
        var m22 = tY * Y + c;
        var m23 = tY * Z - s * X;
        var m31 = _17C_ * Z -
            s * Y;
        var m32 = tY * Z + s * X;
        var m33 = t * Z * Z + c;
        qx = m11 * _11D_ + m12 *
            _120_ + m13 * _123_;
        qy = m21 * _11D_ + m22 * _120_ + m23 * _123_;
        qz =
            m31 * _11D_ + m32 * _120_ + m33 * _123_;
        return new _1A0_(qx + p1x,
            qy + p1y, qz + p1z)
    },
    intersectLines2D: function(_1CB_, _1D5_, x2,
        y2, x3, y3, x4, y4) {
        var i = 1 / ((_1CB_ - x2) * (y3 - y4) - (_1D5_ -
            y2) * (x3 - x4));
        var x = ((x3 - x4) * (_1CB_ * y2 - _1D5_ * x2) -
            (_1CB_ - x2) * (x3 * y4 - y3 * x4)) * i;
        var y = ((y3 - y4) * (_1CB_ *
            y2 - _1D5_ * x2) - (_1D5_ - y2) * (x3 * y4 - y3 * x4)) * i;
        return {
            x: x,
            y: y
        }
    },
    _35_: function(Ax, Ay, Bx, _13_, _11E_, _121_) {
        var DEANa1Ex =
            Bx - Ax;
        var _E_ = _13_ - Ay;
        var _103_ =
            _11E_ - Ax;
        var _104_ = _121_ - Ay;
        var _CD_ =
            _103_ * DEANa1Ex + _104_ * _E_;
        var De4n4L3X =
            DEANa1Ex * DEANa1Ex + _E_ * _E_;
        var de4n_AI3X =
            1 / De4n4L3X;
        var s = (_103_ * _E_ -
            _104_ * DEANa1Ex) * de4n_AI3X;
        var _34_ =
            Math.abs(s) * Math.sqrt(De4n4L3X);
        return _34_
    },
    _D_: function(Ax, Ay, Bx, _13_,
        de4N_413X, _29_, Dx, Dy) {
        return .5 * Math.abs(
            Ax * _13_ - Bx * Ay + Bx * _29_ -
            de4N_413X * _13_ + de4N_413X * Dy - Dx *
            _29_ + Dx * Ay - Ax * Dy)
    },
    NEuRO1d_CO_uk: function(vA, vB, vC,
        vD, xmf, _1D8_) {
        var _19B_ = vA * (1 - xmf) + vB * xmf;
        var _19D_ =
            vC * (1 - xmf) + vD * xmf;
        return _19B_ * (1 - _1D8_) + _19D_ *
            _1D8_
    },
    _1A1_: function(A, B, C, D, xmf, _1D8_) {
        return new _1A0_(
            this.NEuRO1d_CO_uk(A.x, B.x, C.x, D.x, xmf, _1D8_), this.NEuRO1d_CO_uk(A.y, B.y,
                C.y, D.y, xmf, _1D8_), this.NEuRO1d_CO_uk(A.z, B.z, C.z, D.z, xmf,
                _1D8_))
    },
    neUr0lD_cO_Uk: function(ang1, ang2, _A7_) {
        while (ang1 > 6.28318530718)
            ang1 -= 6.28318530718;
        while (ang2 > 6.28318530718) ang2 -= 6.28318530718;
        while (ang1 < 0) ang1 += 6.28318530718;
        while (ang2 < 0) ang2 += 6.28318530718;
        var D3An_41Ex = ang2 - ang1;
        if (D3An_41Ex < 0) {
            if (D3An_41Ex < -3.14159265359)
                ang2 += 6.28318530718
        } else {
            if (D3An_41Ex > 3.14159265359) ang1 +=
                6.28318530718
        };
        return ang1 * (1 - _A7_) + ang2 * _A7_
    },
    _13D_: function(
        _DE_, _DF_, Oz, angX, angY, angZ, _14D_) {
        var _132_ = _14D_ * 0.5;
        var _149_ =
            Math.sin(angX);
        var D34n_A1eX = Math.cos(angX);
        var _14A_ = Math.sin(
            angY);
        var _21_ = Math.cos(angY);
        var _14B_ = Math.sin(angZ);
        var n3UR0lD_CO_uk =
            Math.cos(angZ);
        var m11 = _21_ * n3UR0lD_CO_uk;
        var m12 = n3UR0lD_CO_uk *
            _149_ * _14A_ - D34n_A1eX * _14B_;
        var m13 =
            D34n_A1eX * n3UR0lD_CO_uk * _14A_ + _149_ *
            _14B_;
        var m21 = _21_ * _14B_;
        var m22 =
            D34n_A1eX * n3UR0lD_CO_uk + _149_ * _14A_ *
            _14B_;
        var m23 = D34n_A1eX * _14A_ * _14B_ -
            n3UR0lD_CO_uk * _149_;
        var m31 = -_14A_;
        var m32 =
            _21_ * _149_;
        var m33 = D34n_A1eX * _21_;
        return {
            Ax: -_132_ * m11 + _132_ * m12 +
                _132_ * m13 + _DE_,
            Ay: -_132_ * m21 +
                _132_ * m22 + _132_ * m23 + _DF_,
            Az: -
                _132_ * m31 + _132_ * m32 + _132_ * m33 +
                Oz,
            Bx: _132_ * m11 + _132_ * m12 + _132_ * m13 + _DE_,
            _13_: _132_ *
                m21 + _132_ * m22 + _132_ * m23 + _DF_,
            _14_: _132_ * m31 + _132_ * m32 +
                _132_ * m33 + Oz,
            de4N_413X: -_132_ * m11 - _132_ * m12 + _132_ * m13 +
                _DE_,
            _29_: -_132_ * m21 - _132_ * m22 + _132_ * m23 + _DF_,
            _2A_: -_132_ *
                m31 - _132_ * m32 + _132_ * m33 + Oz,
            Dx: _132_ * m11 - _132_ * m12 +
                _132_ * m13 + _DE_,
            Dy: _132_ * m21 - _132_ * m22 + _132_ * m23 + _DF_,
            Dz: _132_ * m31 - _132_ * m32 + _132_ * m33 + Oz,
            _46_: -_132_ * m11 +
                _132_ * m12 - _132_ * m13 + _DE_,
            _49_: -_132_ * m21 + _132_ * m22 - _132_ *
                m23 + _DF_,
            _4A_: -_132_ * m31 + _132_ * m32 - _132_ * m33 + Oz,
            d34n_al3X: _132_ * m11 + _132_ * m12 - _132_ * m13 + _DE_,
            _53_: _132_ * m21 + _132_ *
                m22 - _132_ * m23 + _DF_,
            _54_: _132_ * m31 + _132_ * m32 - _132_ * m33 +
                Oz,
            d34N413x: -_132_ * m11 - _132_ * m12 - _132_ * m13 + _DE_,
            d34n_413X:
                -_132_ * m21 - _132_ * m22 - _132_ * m23 + _DF_,
            _57_: -_132_ *
                m31 - _132_ * m32 - _132_ * m33 + Oz,
            _5D_: _132_ * m11 - _132_ * m12 -
                _132_ * m13 + _DE_,
            _5E_: _132_ * m21 - _132_ * m22 - _132_ * m23 + _DF_,
            _5F_: _132_ * m31 - _132_ * m32 - _132_ * m33 + Oz
        }
    },
    _13E_: function(
        _DE_, _DF_, Oz, angX, angY, angZ, _14D_, A, B, C, D, E, F, G, H) {
        var _132_ =
            _14D_ * 0.5;
        var _149_ = Math.sin(angX);
        var D34n_A1eX = Math.cos(angX);
        var _14A_ = Math.sin(angY);
        var _21_ = Math.cos(angY);
        var _14B_ =
            Math.sin(angZ);
        var n3UR0lD_CO_uk =
            Math.cos(
                angZ);
        var m11 =
            _21_ *
            n3UR0lD_CO_uk;
        var m12 = n3UR0lD_CO_uk * _149_ * _14A_ - D34n_A1eX *
            _14B_;
        var m13 = D34n_A1eX * n3UR0lD_CO_uk * _14A_ +
            _149_ * _14B_;
        var m21 = _21_ * _14B_;
        var m22 = D34n_A1eX *
            n3UR0lD_CO_uk + _149_ * _14A_ * _14B_;
        var m23 = D34n_A1eX *
            _14A_ * _14B_ - n3UR0lD_CO_uk * _149_;
        var m31 = -_14A_;
        var m32 = _21_ * _149_;
        var m33 = D34n_A1eX *
            _21_;
        A._DD_ = -_132_ * m11 + _132_ * m12 + _132_ * m13 +
            _DE_;
        A._E0_ = -_132_ * m21 + _132_ * m22 + _132_ * m23 +
            _DF_;
        A._E1_ = -_132_ * m31 + _132_ * m32 + _132_ * m33 +
            Oz;
        B._DD_ = _132_ * m11 + _132_ * m12 + _132_ * m13 +
            _DE_;
        B._E0_ = _132_ * m21 + _132_ * m22 + _132_ * m23 +
            _DF_;
        B._E1_ = _132_ * m31 + _132_ * m32 + _132_ * m33 +
            Oz;
        C._DD_ = -_132_ * m11 - _132_ * m12 + _132_ * m13 +
            _DE_;
        C._E0_ = -_132_ * m21 - _132_ * m22 + _132_ * m23 +
            _DF_;
        C._E1_ = -_132_ * m31 - _132_ * m32 + _132_ * m33 +
            Oz;
        D._DD_ = _132_ * m11 - _132_ * m12 + _132_ * m13 + _DE_;
        D._E0_ = _132_ * m21 - _132_ * m22 + _132_ * m23 + _DF_;
        D._E1_ =
            _132_ * m31 - _132_ * m32 + _132_ * m33 + Oz;
        E._DD_ = -_132_ *
            m11 + _132_ * m12 - _132_ * m13 + _DE_;
        E._E0_ = -_132_ * m21 +
            _132_ * m22 - _132_ * m23 + _DF_;
        E._E1_ = -_132_ * m31 + _132_ *
            m32 - _132_ * m33 + Oz;
        F._DD_ = _132_ * m11 + _132_ * m12 -
            _132_ * m13 + _DE_;
        F._E0_ = _132_ * m21 + _132_ * m22 - _132_ *
            m23 + _DF_;
        F._E1_ = _132_ * m31 + _132_ * m32 - _132_ * m33 +
            Oz;
        G._DD_ = -_132_ * m11 - _132_ * m12 - _132_ * m13 + _DE_;
        G._E0_ = -_132_ * m21 - _132_ * m22 - _132_ * m23 + _DF_;
        G._E1_ = -_132_ * m31 - _132_ * m32 - _132_ * m33 + Oz;
        H._DD_ =
            _132_ * m11 - _132_ * m12 - _132_ * m13 + _DE_;
        H._E0_ = _132_ *
            m21 - _132_ * m22 - _132_ * m23 + _DF_;
        H._E1_ = _132_ * m31 -
            _132_ * m32 - _132_ * m33 + Oz
    }
};
dEan4l3X = {
    Q: undefined,
    _12A_: undefined,
    A: undefined,
    M: undefined,
    dE4n_4IEX: undefined,
    _4D_: 0,
    O: undefined,
    _DC_: undefined,
    _D1_: undefined,
    _1A6_: 10000,
    _1A7_: undefined,
    _A8_: .25,
    _AC_: .5,
    init: function(_f, _ox,
        _oy, _oz) {
        this.Q = new _12C_(0, 0, 0, 0);
        this._12A_ = new _12C_(
            0, 0, 0, 0);
        this.M = new _8D_(new _1A0_(0, 0, 0), new _1A0_(
            0, 0, 0), new _1A0_(0, 0, 0));
        this.A = new _1A0_(0, 0, 0);
        this.dE4n_4IEX = _f;
        this.O = new _1A0_(_ox, _oy, _oz);
        this._DC_ = new _1A0_(_ox, _oy, _oz);
        this._D1_ = new _1A0_(0, 0,
            0);
        this._199_(0, 0, 0);
        this._18E_()
    },
    _199_: function(aX, aY,
        aZ) {
        this._12A_ = _8B_.Neur0ID_Co_Uk(aX, aY, aZ)
    },
    _15F_: function() {
        this._DC_.x = this.O.x;
        this._DC_.y = this.O.y;
        this._DC_.z =
            this.O.z
    },
    _18E_: function() {
        var A = this.A;
        var M = this.M;
        var O =
            this.O;
        var _A7_ = this._AC_;
        O.x = O.x * (1 - _A7_) + this._DC_.x *
            _A7_ + this._D1_.x + this._D1_._DD_;
        O.y = O.y * (1 - _A7_) + this._DC_.y *
            _A7_ + this._D1_.y + this._D1_._E0_;
        O.z = O.z * (1 - _A7_) + this._DC_.z *
            _A7_ + this._D1_.z + this._D1_._E1_;
        var Q = this.Q = _8B_._129_(
            this.Q, this._12A_, this._A8_);
        var _1C7_ = Q.w * Q.x * 2;
        var _1C8_ = Q.w *
            Q.y * 2;
        var _1C9_ = Q.w * Q.z * 2;
        var _1D1_ = Q.x * Q.x * 2;
        var _1D2_ = Q.x * Q.y * 2;
        var _1D3_ = Q.x * Q.z * 2;
        var _1DC_ = Q.y *
            Q.y * 2;
        var _1DD_ = Q.y * Q.z * 2;
        var _1ED_ = Q.z * Q.z * 2;
        M.m11 = 1 - _1DC_ -
            _1ED_;
        M.m12 = _1D2_ - _1C9_;
        M.m13 = _1D3_ + _1C8_;
        M.m21 = _1D2_ + _1C9_;
        M.m22 = 1 - _1D1_ -
            _1ED_;
        M.m23 = _1DD_ - _1C7_;
        M.m31 = _1D3_ - _1C8_;
        M.m32 = _1DD_ + _1C7_;
        M.m33 = 1 -
            _1D1_ - _1DC_;
        var t = Q.x * Q.y + Q.z * Q.w;
        if (t > .4999) {
            A.x = 0;
            A.y = 2 * Math.atan2(
                Q.x, Q.w);
            A.z = 3.14159265359 * .5
        } else if (t < -.4999) {
            A.x = 0;
            A.y = -2 * Math.atan2(
                Q.x, Q.w);
            A.z = -3.14159265359 * .5
        } else {
            A.x = Math.atan2(_1C7_ - _1DD_, 1 - _1D1_ -
                _1ED_);
            A.y = Math.atan2(_1C8_ - _1D3_, 1 - _1DC_ - _1ED_);
            A.z = Math.asin(2 * t)
        };
        this._1A7_ = 1 / (this._1A6_ * 1.1)
    }
};
_136_ = {
    _1E4_: new Array(1000),
    _1E9_: new Array(1000),
    _1E6_: 0,
    _1E5_: 0,
    _1E7_: 1,
    init: function() {
        var i = this._1E4_.length;
        while (i--) {
            this._1E4_[i] = 0;
            this._1E9_[i] = 0
        }
    },
    _135_: function(M, _11C_) {
        var _DD_ = dEan4l3X.O.x;
        var _E0_ = dEan4l3X.O.y;
        var _E1_ = dEan4l3X.O.z;
        var f = dEan4l3X.dE4n_4IEX + dEan4l3X._4D_;
        var pt, iz;
        var x, y, z;
        var i = _11C_.length;
        while (i--) {
            pt = _11C_[i];
            x = pt._DD_;
            y = pt._E0_;
            z = pt._E1_;
            pt.x = x * M.m11 + y * M.m12 + z * M.m13;
            pt.y = x * M.m21 + y * M.m22 + z *
                M.m23;
            pt.z = x * M.m31 + y * M.m32 + z * M.m33;
            pt.z += _E1_;
            iz = -f / pt.z;
            pt.sx = iz * pt.x +
                _DD_;
            pt.sy = iz * pt.y + _E0_
        }
    },
    _13A_: function(M, _11C_) {
        var _DD_ = dEan4l3X.O.x;
        var _E0_ =
            dEan4l3X.O.y;
        var _E1_ = dEan4l3X.O.z;
        var f = dEan4l3X.dE4n_4IEX + dEan4l3X._4D_;
        var pt, iz;
        var x,
            y, z;
        var i = _11C_.length;
        var _1DB_;
        while (i--) {
            pt = _11C_[i];
            x = pt._DD_;
            y = pt._E0_;
            z = pt._E1_;
            pt.x = x * M.m11 + y * M.m12 + z * M.m13;
            pt.y = x *
                M.m21 + y * M.m22 + z * M.m23;
            pt.z = x * M.m31 + y * M.m32 + z * M.m33;
            pt.z += _E1_;
            iz = -f / pt.z;
            _1DB_ = pt.y < dEan4l3X._1A6_ ? 1 - pt.y * dEan4l3X._1A7_ : .01;
            pt.sx = iz * pt.x * _1DB_ + _DD_;
            pt.sy = iz * pt.y + _E0_
        }
    },
    _138_: function(
        M, _11C_, _1CF_, ymult, _1E7_) {
        var _E1_ = dEan4l3X.O.z;
        var f = dEan4l3X.dE4n_4IEX +
            dEan4l3X._4D_;
        var pt;
        var x, y, z;
        var i = _11C_.length;
        while (i--) {
            pt = _11C_[i];
            x = pt._DD_ *
                _1CF_;
            y = pt._E0_ * ymult;
            z = pt._E1_ * _1E7_;
            pt.x = x * M.m11 + y * M.m12 +
                z * M.m13;
            pt.y = x * M.m21 + y * M.m22 + z * M.m23;
            pt.z = x * M.m31 + y *
                M.m32 + z * M.m33;
            pt.z += _E1_
        }
    },
    _139_: function(_11C_) {
        var _DD_ = dEan4l3X.O.x;
        var _E0_ = dEan4l3X.O.y;
        var f = dEan4l3X.dE4n_4IEX + dEan4l3X._4D_;
        var pt, iz;
        var i =
            _11C_.length;
        var _1DB_;
        while (
            i--
        ) {
            pt =
                _11C_[i];
            iz = -
                f / pt.z;
            _1DB_ = pt.y < dEan4l3X._1A6_ ? 1 - pt.y * dEan4l3X._1A7_ :
                .01;
            pt.sx = iz * pt.x * _1DB_ + _DD_;
            pt.sy = iz * pt.y + _E0_
        }
    },
    _137_: function(M, _11C_, _1D8_) {
        var _DD_ = dEan4l3X.O.x;
        var _E0_ = dEan4l3X.O.y;
        var _E1_ = dEan4l3X.O.z;
        var f = dEan4l3X.dE4n_4IEX + dEan4l3X._4D_;
        var pt,
            iz;
        var x, y, z;
        var i = _11C_.length;
        var _1D7_;
        while (i--) {
            pt = _11C_[i];
            x = pt._DD_;
            y = pt._E0_;
            z = pt._E1_;
            _1D7_ = _1D8_ * 200;
            if (y > _1D7_) y = _1D7_;
            pt.x = x * M.m11 + y * M.m12 + z * M.m13;
            pt.y = x * M.m21 + y * M.m22 + z *
                M.m23;
            pt.z = x * M.m31 + y * M.m32 + z * M.m33;
            pt.z += _E1_;
            iz = -f / pt.z;
            pt.sx = iz * pt.x + _DD_;
            pt.sy = iz * pt.y + _E0_
        }
    },
    _13B_: function(M, _11C_) {
        var _DD_ = dEan4l3X.O.x;
        var _E0_ = dEan4l3X.O.y;
        var _E1_ = dEan4l3X.O.z;
        var _1E6_ = 0x7fffff;
        var _1E5_ = -0x7fffff;
        var _A7_ = 0;
        var f = dEan4l3X.dE4n_4IEX;
        var pt, iz, _ptz;
        var i = _11C_.length;
        var _11B_;
        while (i--) {
            pt = _11C_[i];
            _11B_ = pt._E0_;
            pt.x = pt._DD_ * M.m11 + _11B_ * M.m12 + pt._E1_ * M.m13;
            pt.y =
                pt._DD_ * M.m21 + _11B_ * M.m22 + pt._E1_ * M.m23;
            pt.z = pt._DD_ * M.m31 + _11B_ *
                M.m32 + pt._E1_ * M.m33;
            pt.z += _E1_;
            _ptz = pt.z;
            iz = -f / _ptz;
            _A7_ = pt.y *
                .004;
            pt.sx = iz * pt.x + _DD_ + _A7_ * _A7_ * 120;
            _A7_ = Math.sin(_ptz * .004);
            pt.sy = iz * pt.y + _E0_ + _A7_ * _A7_ * 80;
            if (_ptz < _1E6_) _1E6_ =
                _ptz;
            if (_ptz > _1E5_) _1E5_ = _ptz
        };
        this._1E6_ = _1E6_;
        this._1E5_ = _1E5_;
        var _134_ = _1E5_ - _1E6_ + 1;
        if (_134_ < 1) _134_ = 1;
        this._1E7_ = (this._1E4_.length - 40) / _134_
    }
};
_8E_ = function() {
    this.m11 = 1;
    this.m12 = 0;
    this.m13 = 0;
    this.m14 =
        0;
    this.m21 = 0;
    this.m22 = 1;
    this.m23 = 0;
    this.m24 = 0;
    this.m31 = 0;
    this.m32 =
        0;
    this.m33 = 1;
    this.m34 = 0;
    this.m41 = 0;
    this.m42 = 0;
    this.m43 = 0;
    this.m44 =
        1
};
_8C_ = function() {
    this.m11 = 1;
    this.m12 = 0;
    this.m13 = 0;
    this.m21 = 0;
    this.m22 =
        1;
    this.m23 = 0;
    this.m31 = 0;
    this.m32 = 0;
    this.m33 = 1
};
_8D_ = function(_V1, _V2,
    _V3) {
    this.m11 = _V1.x;
    this.m12 = _V1.y;
    this.m13 = _V1.z;
    this.m21 = _V2.x;
    this.m22 =
        _V2.y;
    this.m23 = _V2.z;
    this.m31 = _V3.x;
    this.m32 = _V3.y;
    this.m33 = _V3.z
};
_12C_ =
    function(_w, _x, _y, _z) {
        this.w = _w;
        this.x = _x;
        this.y = _y;
        this.z = _z
    };
_1A0_ = function(
    _x, _y, _z) {
    this.x = this._DD_ = _x;
    this.y = this._E0_ = _y;
    this.z = this._E1_ = _z;
    this.sx = this.sy = 0
};
_112_ = function(_p1, _p2, _p3, _p4, _col) {
    this.p1 = _p1;
    this.p2 =
        _p2;
    this.p3 = _p3;
    this.p4 = _p4;
    this.NeUR01d_c0_Uk = _col
};
_101_ = function(_x, _y,
    _z) {
    this.x = this._DD_ = _x;
    this.y = this._E0_ = _y;
    this.z = this._E1_ = _z;
    this._1A5_ =
        this.vy = this.vz = 0;
    this.sx = this.sy = 0
};
_179_ = function(_a, _b, _c, _winding) {
    this.a =
        _a;
    this.b = _b;
    this.c = _c;
    this.winding = _winding
}