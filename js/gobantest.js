YUI({filter: 'debug'}).use( 'querystring-stringify-simple', 'eidogo-player', 'eidogo-toolbar','eidogo-navtree', function(Y)
							{
								var params = {};
								var sgfData ="(;GM[1]FF[4]CA[UTF-8]AP[CGoban:2]ST[2]\nRU[Japanese]SZ[19]KM[0.00]\nGN[The Blood-Vomiting  Game]PW[Honinbo Jowa]PB[Akaboshi Intetsu]WR[9p]BR[7p]DT[1835-07-27]PC[Japan]AN[<a href='http://senseis.xmp.net/?BloodVomitingGame'>http://senseis.xmp.net/?BloodVomitingGame</a>]C[White is <a href='http://senseis.xmp.net/?Jowa'>Honinbo Jowa</A> 9 dan, the <a href='http://senseis.xmp.net/?Meijin'>Meijin</a> <a href='http://senseis.xmp.net/?Godokoro'>Godokoro</a>. Black is <a href='http://senseis.xmp.net/?AkaboshiIntetsu'>Akaboshi Intetsu</a> 7 dan, the pupil of <a href='http://senseis.xmp.net/?GennanInseki'>Gennan Inseki</a> 8-dan.\n\nThere are four moves for which this game is famous: the secret <a href='http://senseis.xmp.net/?Taisha'>taisha</a> variation developed by the <a href='http://senseis.xmp.net/?Inoue'>Inoue</a> house, and the three moves that were supposedly brought to Jowa by ghosts, allowing him to grind Intetsu's lead (and life!) away.]RE[W+Resign]\n;B[cp]\n;W[pq]\n;B[qd]\n;W[ed]\n;B[oc]\n;W[eq]\n;B[qo]\n;W[qk]\n;B[qi]\n;W[op]\n;B[iq]\n;W[dn]\n;B[ep]\n;W[dp]\n;B[do]\n;W[dq]\n;B[co]\n;W[eo]\n;B[fp]\n;W[cq]\n;B[bq]\n;W[br]\n;B[cm]\n;W[gr]\n;B[hp]\n;W[en]\n;B[bp]\n;W[ck]C[Move 28 is an over-extension that is typical of Jowa's violent style.]\n;B[dl]\n;W[dk]\n;B[el]\n;W[gn]\n;B[cr]C[The Inoue school had secretly developed this taisha variation starting with move 33. It allows Black to attack White's floating center group and absorb the two white stones on the left side at the same time.]\n;W[dr]\n;B[bs]\n;W[fq]\n;B[go]\n;W[ar]\n;B[hn]\n;W[gm]\n;B[hm]\n;W[gl]\n;B[ek]C[Intetsu takes the lead.]\n;W[hl]\n;B[di]\n;W[io]\n;B[ho]\n;W[fo]\n;B[ch]\n;W[cd]\n;B[lq]\n;W[pn]\n;B[gc]\n;W[qn]\n;B[dc]\n;W[cc]\n;B[ec]\n;W[cf]\n;B[il]\n;W[gp]\n;B[nq]\n;W[ic]\n;B[fd]\n;W[lc]\n;B[bg]\n;W[bf]\n;B[af]\n;W[bi]\n;B[dj]\n;W[eh]\n;B[fj]LB[af:1][eh:3][bi:2][bm:A]C[Moves 2 and 3 are the first two 'ghost'-moves (Chinese, <i>miaoshou</i>, Japanese, <i>myoshu</i>) found by Jowa's ghost. According to Invincible they allow White to omit a direct answer to 1, because of aji at A.]\n;W[qg]\n;B[oi]\n;W[qe]\n;B[pd]\n;W[nf]\n;B[ok]\n;W[pk]\n;B[ol]\n;W[pj]C[Move 80 is the third ghost move. It is an example of a 'bad shape/good move', and eventually allows Jowa to launch a difficult splitting attack that results in Black's resignation.]\n;B[rn]\n;W[rm]\n;B[qq]\n;W[qr]\n;B[rr]\n;W[qp]\n;B[rq]\n;W[pr]\n;B[rp]\n;W[po]\n;B[pp]\n;W[mp]\n;B[qm]\n;W[pm]\n;B[np]\n;W[mq]\n;B[mo]\n;W[lp]\n;B[lo]\n;W[kp]\n;B[no]\n;W[nr]\n;B[or]\n;W[qp]\n;B[mr]\n;W[ro]\n;B[pi]\n;W[lr]\n;B[ns]\n;W[ip]\n;B[jr]\n;W[hq]\n;B[jn]\n;W[ko]\n;B[kq]\n;W[kn]\n;B[jm]\n;W[km]\n;B[ik]\n;W[mk]\n;B[mm]\n;W[ir]\n;B[jq]\n;W[kk]\n;B[mi]\n;W[nm]\n;B[ml]\n;W[ki]\n;B[lj]\n;W[lk]\n;B[kj]\n;W[jj]\n;B[kl]\n;W[ll]\n;B[lm]\n;W[oj]\n;B[mg]\n;W[jl]\n;B[jk]\n;W[nj]\n;B[ni]\n;W[im]\n;B[in]\n;W[jo]\n;B[kl]\n;W[js]\n;B[ks]\n;W[jl]\n;B[im]\n;W[is]\n;B[kl]\n;W[ei]\n;B[ej]\n;W[jl]\n;B[hr]\n;W[hs]\n;B[kl]\n;W[cn]\n;B[bn]\n;W[jl]\n;B[gs]\n;W[fs]\n;B[kl]\n;W[hi]\n;B[ij]\n;W[jl]\n;B[ls]\n;W[ji]\n;B[hj]\n;W[oe]\n;B[kg]\n;W[jg]\n;B[gi]\n;W[nc]\n;B[jf]\n;W[nb]\n;B[re]\n;W[if]\n;B[je]\n;W[hd]\n;B[fe]\n;W[gf]\n;B[ff]\n;W[fg]\n;B[gg]\n;W[gh]\n;B[hg]\n;W[fi]\n;B[gj]\n;W[ig]\n;B[hh]\n;W[hf]\n;B[ii]\n;W[rf]\n;B[pe]\n;W[pf]\n;B[le]\n;W[kd]\n;B[ad]\n;W[kh]\n;B[qf]\n;W[ef]\n;B[de]\n;W[qe]\n;B[ld]\n;W[lg]\n;B[kc]\n;W[jd]\n;B[qf]\n;W[db]\n;B[eb]\n;W[qe]\n;B[jb]\n;W[od]\n;B[ib]\n;W[mf]\n;B[qf]\n;W[jp]\n;B[kr]\n;W[qe]\n;B[lf]\n;W[kf]\n;B[qf]\n;W[hc]\n;B[qe]\n;W[hb]\n;B[pg]\n;W[og]\n;B[of]\n;W[cg]\n;B[bh]\n;W[pf]\n;B[ph]\n;W[bb]\n;B[da]\n;W[cb]\n;B[fh]\n;W[ac]\n;B[eg]\n;W[bd]\n;B[ob]\n;W[oa]\n;B[of]\n;W[mh]\n;B[rj]\n;W[kl]C[As the stones were being cleared from the board, Akaboshi Intetsu keeled over, coughing up blood. As the four-day long game progressed and Jowa slowly clawed his way into the lead, Akaboshi's health had been steadily declining. Within a few weeks, he was dead.])\n";

								
								//var renderer = new Y.Eidogo.Renderers.CanvasRenderer({})

								window.player = new Y.Eidogo.Player({
									srcNode: '#goban',
									//renderer:       Y.Eidogo.Renderers.CanvasRenderer,
									//progressiveUrl: "http://eidogo.com/backend/kjd_progressive.php"
									//sgf: sgfData
									sgfUrl:          "sgf/oasiny.sgf"
								});
								
								window.player.on('execNode', function (e) 
												 {
													 Y.one('#comments').setHTML('<p><b>Move ' + window.player.moveNumber + ': </b>' + window.player.comments + '</p>');
												 });

								var toolbar = new Y.Eidogo.Toolbar({srcNode: '#toolbar', player: window.player});
								var navtree = new Y.Eidogo.NavTree({srcNode: '#navtree', player: window.player});

								window.player.loadSgf();
							});