//来源：病毒树
//From: The Plague Tree
function slog(x){
	return x.slog(10)
}


function addCommas(s){
	if (s.length <= 3) return s
	let rem = s.length % 3
	if (rem == 0) rem = 3
	return s.slice(0, rem) + "," + addCommas(s.slice(rem))
}

function exponentialFormat(num, precision) {
	let e = num.log10().floor()
	if (player.notation == 'Engineering' || player.notation == 'Mixed Engineering') e = num.log10().div(3).floor().mul(3)
	let m = num.div(Decimal.pow(10, e))
	if (player.notation == 'Engineering' || player.notation == 'Mixed Engineering') {
		if (m.toStringWithDecimalPlaces(precision) == 1000) {
			m = new Decimal(1)
			e = e.add(3)
		}
		if (e.lt(0)) {
			m = m.mul(1e3)
			e = e.sub(3)
		}
	}
	else {
		if (m.toStringWithDecimalPlaces(precision) == 10) {
			m = new Decimal(1)
			e = e.add(1)
		}
		if (e.lt(0)) {
			m = m.mul(10)
			e = e.sub(1)
		}
	}
	let start = ""
	if (e.abs().lt(1e9)) {
		if (player.notation == 'Engineering' || player.notation == 'Mixed Engineering') {
			if (m.toStringWithDecimalPlaces(precision) == 1000) {
				m = new Decimal(1)
				e = e.add(3)
			}
		}
		else {
			if (m.toStringWithDecimalPlaces(precision) == 10) {
				m = new Decimal(1)
				e = e.add(1)
			}
		}
		start = m.toStringWithDecimalPlaces(precision)
	}
	
	let end = e.toStringWithDecimalPlaces(0)
	if (!end.includes("e")) end = addCommas(end.replace(/-/g, ''))
	if (e.lt(0)) end = "-"+end
	return start + "e" + end
}

function commaFormat(num, precision) {
    if (num === null || num === undefined) return "NaN"
    if (num.mag < 0.001) return (0).toFixed(precision)
    let init = num.toStringWithDecimalPlaces(precision)
    let portions = init.split(".")
    portions[0] = portions[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    if (portions.length == 1) return portions[0]
    return portions[0] + "." + portions[1]
}


function regularFormat(num, precision) {
    if (num === null || num === undefined) return "NaN"
    if (num.mag < 0.0001) return (0).toFixed(precision)
    if (num.mag < 0.1 && precision !==0) precision = Math.max(precision, 4)
    return num.toStringWithDecimalPlaces(precision)
}

function fixValue(x, y = 0) {
	return x || new Decimal(y)
}

function sumValues(x) {
	x = Object.values(x)
	if (!x[0]) return new Decimal(0)
	return x.reduce((a, b) => Decimal.add(a, b))
}

function t1format(x,mult=false,y) {
	let ills = ['','M','B','T','Qa','Qt','Sx','Sp','Oc','No']
	let t1ones = ["","U","D","T","Qa","Qt","Sx","Sp","Oc","No"]
	if (mult && y>0 && x<10) t1ones = ["","","D","T","Qa","Qt","Sx","Sp","Oc","No"]
	let t1tens = ["","Dc","Vg","Tg","Qd","Qi","Se","St","Og","Nn"]
	let t1hunds = ["","Ce","Dn","Tc","Qe","Qu","Sc","Si","Oe","Ne"]
	let t1f = ills[x]
	if (mult && y>0) t1f = t1ones[x]
	if (x>=10) t1f = t1ones[x%10]+t1tens[Math.floor(x/10)%10]+t1hunds[Math.floor(x/100)]
	return t1f
}

function t2format(x,mult=false,y) {
	let t2ills = ["","Mi","Mc","Na","Pc","Fm","At","Zp","Yc","Xn"]
	let t2ones = ["","Me","Du","Tr","Te","Pe","He","Hp","Ot","En"]
	if (mult && y>0 && x<10) t2ones = ["","","Mc","Na","Pc","Fm","At","Zp","Yc","Xn"]
	let t2tens = ["","c","Ic","TCn","TeC","PCn","HCn","HpC","OCn","ECn"]
	let t2hunds = ["","Hc","DHe","THt","TeH","PHc","HHe","HpH","OHt","EHc"]
	let t2f = t2ills[x]
	if (mult && y>0) t2f = t2ones[x]
	let t2t = t2tens[Math.floor(x/10)%10]
	if (x%100==10) t2t='Vec'
	if (x>=10) t2f = t2ones[x%10]+t2t+t2hunds[Math.floor(x/100)]
	return t2f
}

function t3format(x,mult=false,y,z) {
	let t3ills = ["","Kl","Mg","Gi","Ter","Pt","Ex","Zt","Yt","Xe"]
	let t3ones = ["","eN","oD","tR","tE","pT","eX","zE","yO","xN"]
	let t3tns = ["Dk","Hn","Dok","TrD","TeD","PeD","ExD","ZeD","YoD","NeD"]
	let t3to = ["k","k","c","c","c","k","k","c","k","c"]
	if (mult && y>0 && x<10) t3ones = ["","","D","Tr","T","P","Ex","Z","Y","N"]
	let t3tens = ["","","I","Tr","Te","P","E","Z","Y","N"]
	let t3hunds = ["","Ho","Do","Tro","To","Po","Exo","Zo","Yo","No"]
	let t3f = t3ills[x]
	if ((mult && y>0) || z>=1e3) t3f = t3ones[x]
	let t3t = t3tens[Math.floor(x/10)%10]
	let t3h = t3hunds[Math.floor(x/100)]
	if (x%100==0) t3h+='T'
	if (x%100<20&&x%100>9) t3t = t3tns[x%10]
	if (x%100>19) t3t += t3to[x%10]+t3ones[x%10]
	if (x>=10) t3f = t3h+t3t
	if (x>=100&&x%100<10) t3f = t3h+t3ones[x%10]
	return t3f
}

function t4format(x,m,mult=false,y) {
	let t4ills = ["","aL","eJ","iJ","AsT","uN","rM","oV","oL","eT","O","aX","uP","rS","lT","ET","eV","yP","OmN","OuT","aRr"]
	if (mult && y>0 && x<10) t4ills = ["","","eJ","iJ","AsT","uN","rM","oV","oL","eT","O","aX","uP","rS","lT","ET","eV","yP","OmN","OuT","aRr"]
    let t4ones = ["","aRraL","aRreJ","aRriJ","aRrAst","aRruN","aRrrM","aRroV","aRroL","aRreT"]
	let t4thirty_ones = ["aRr","aRraL","aRreJ","aRriJ","aRrAst","aRruN","aRrrM","aRroV","aRroL","aRreT"]
    let t4tens = ["","","B","G","A","L","F","J","S","Be"]
	let t4hunds = ["","HuT","Mut","Gut","Aut","Lut","Fut","Jut","Sut","But"]
	let t4m = ["","K","M","G","","L","F","J","S","B","Gl","G","S","V","M","M","X","H","","","B"]
	if (mult && y>0 && x<10) t4m = ["","","M","G","","L","F","J","S","B","Gl","G","S","V","M","M","X","H","","","B"]
	let t4f = t4ills[x]
	if (m<2) t4f = t4m[x]+t4f
    if (x>20&&x<30) t4f = t4tens[Math.floor(x/10)%10]+t4ones[x%10]
	if (x>=30&&x<100) t4f = t4tens[Math.floor(x/10)%10]+t4thirty_ones[x%10]
	if (x>=100&&x<1000&&x%100<=20) t4f = t4hunds[Math.floor(x/100)%10]+t4ills[Math.floor(x%100)]
	if (x>=100&&x<1000&&x%100>20&&x%100<30) t4f = t4hunds[Math.floor(x/100)%10]+t4tens[Math.floor(x/10)%10]+t4ones[x%10]
	if (x>=100&&x<1000&&x%100>30) t4f = t4hunds[Math.floor(x/100)%10]+t4tens[Math.floor(x/10)%10]+t4thirty_ones[x%10]
	return t4f
}

function t5format(x,mult=false,y) {
	let t5ills = ["","Hep","Ott","Neg","Deg","Ung","Ent","Fit","Syt","Brt"]
	if (mult && y>0 && x<10) t5ills = ["","","Ott","Neg","Deg","Ung","Ent","Fit","Syt","Brt"]
	let t5tens = ["","Gep","Ams","Hpr","Kyr","Pij","Sgn","Pct","Nsb","Ztz"]
	let t5tens_comp = ["","Gea'","Ama'","Hpa'","Kya'","Pia'","Sga'","Pra'","Nia'","Zza'"]
	let t5hunds = ["","Alp","Bex","Gmm","Dlt","Tht","Iot","Kap","Lmd","Sgm"]
	let t5hunds_comp = ["","Afa'","Bfa'","Gfa'","Dfa'","Tfa'","Ifa'","Kfa'","Lfa'","Sfa'"]
	let t5f = ""
	if (x<10) t5f = t5ills[x]
	if (x>=10&&x%10==0&&x<100) t5f = t5tens[x/10]
	if (x>=10&&x%10==0==false&&x<100) t5f = t5tens_comp[Math.floor(x/10)] + t5ills[x%10]
	if (x%100==0) t5f = t5hunds[x/100]
	if (x>100&&x%10==0&&x%100==0==false) t5f = t5hunds_comp[Math.floor(x/100)] + t5tens[x%100/10]
	if (x>100&&x%10==0==false&&x%100==0==false) t5f = t5hunds_comp[Math.floor(x/100)] + t5tens_comp[Math.floor(x%100/10)] + t5ills[x%10]
	return t5f
}

function t6format(x,mult=false,y) {
    let t6ills = ["","HPx","DiS","TriS","Te","Pe","He","Hp","Ot","En"]
	let t6teens = ["Dc","HDc","DDc","DcTr","DcTe","DcPe","DcHe","DcHp","DcOt","DcEn"]
	let t6ones = ["","H","D","Tr","Te","Pe","He","Hp","Ot","En"]
	let t6tens = ["","","Ic","TCn","TsS","PeC","HeC","HdC","OgC","EnC"]
	let t6hunds = ["","Hc","DcS","TcS","TeS","PeS","HeS","HpS","OtS","EnS"]
	if (mult && y>0 && x<10) t6ills = ["","","DiS","TriS","Te","Pe","He","Hp","Ot","En"]
	let t6f = ""
	if (x<4) t6f = t6ills[x]
	if (x>=4&&x<10) t6f = t6ills[x] + "Ks"
	if (x>=10&&x<20) t6f = t6teens[x%10] + "Ks"
	if (x>=20&&x<100) t6f = t6tens[Math.floor(x/10)] + t6ones[x%10] + "Ks"
	if (x>=100) t6f = t6hunds[Math.floor(x/100)] + t6tens[Math.floor(x/10)%10] + t6ones[x%10] + "Ks"
	return t6f
}

function t7format(x,m,mult=false,y) {
	let t7ills = ["","Rd","rG","lO","Lm","GrN","CyN","BlU","PrP","MgN"]
	let t7m = ["","","O","Y","","","","","",""]
	let t7tens = ["","PnK","DiK","TiK","TtK","PeK","HeK","HpK","OcK","EnK"]
	let t7hunds = ["","VlT","DlT","TiT","TtT","PeT","HeT","HpT","OcT","EnT"]
	if (mult && y>0 && x<10) t7ills = ["","","rG","lO","Lm","GrN","CyN","BlU","PrP","MgN"]
	let t7f = t7ills[x]
	if (m<2) t7f = t7m[x] + t7f
	if (x>=10) t7f = t7ills[x%10] + t7tens[Math.floor(x/10)]
	if (m<2&&x>=10) t7f = t7m[x%10] + t7ills[x%10] + t7tens[Math.floor(x/10)]
	if (x>=100) t7f = t7ills[x%10] + t7tens[Math.floor(x/10%10)] + t7hunds[Math.floor(x/100)]
	if (m<2&&x>=100) t7f = t7m[x%10] + t7ills[x%10] + t7tens[Math.floor(x/10%10)] + t7hunds[Math.floor(x/100)]
	return t7f
}

function t8format(x,mult=false,y) {
	let t8ills = ["","Hyd","Hel","Lth","Byr","Bor","Crb","Ntr","Oxy","Flr"]
	let t8teens = ["Neo","Sod","Mng","Alm","Slc","Phs","Slf","Chl","Arg","Pts"]
	let t8tens = ["","","Hne","Lne","Byn","Bne","Cne","Nne","Oxn","Fln"]
	let t8hunds = ["","Krp","Hrp","Lrp","Ber","Brp","Crp","Nrp","Oxp","Fyp"]
	let t8f = t8ills[x]
	if (x>=10&&x<20) t8f = t8teens[x%10]
	if (x>=20&&x<100) t8f = t8tens[Math.floor(x/10)] + t8ills[x%10]
	if (x>=100) t8f = t8hunds[Math.floor(x/100)] + t8tens[Math.floor(x/10)%10] + t8ills[x%10]
	if (x>=100&&x%100<20&&x%100>=10) t8f = t8hunds[Math.floor(x/100)] + t8teens[Math.floor(x/10)%10]
	return t8f
}

function standard(decimal, precision){
	decimal = new Decimal(decimal)
	if (decimal.sign < 0) return "-"+standard(decimal.neg(), precision)
	if (decimal.layer > 8 && decimal.mag>=0 || (decimal.mag >= Decimal.log10('3e3000').toNumber() && decimal.layer == 8)) {
		var slog = decimal.slog()
		if (slog.gte(1e9)) return "F" + format(slog.floor())
		if (slog.gte(100)) return Decimal.pow(10, slog.sub(slog.floor())).toStringWithDecimalPlaces(3) + "F" + commaFormat(slog.floor(), 0)
		else return Decimal.pow(10, slog.sub(slog.floor())).toStringWithDecimalPlaces(4) + "F" + commaFormat(slog.floor(), 0)
	}
	let illion = decimal.log10().div(3).floor().sub(1)
	let m = decimal.div(Decimal.pow(1e3,illion.add(1)))
	if (m.toStringWithDecimalPlaces(precision) == 1000) {
		m = new Decimal(1)
		illion = illion.add(1)
	}
	if (decimal.log10().lt(1e9)) m = m.toStringWithDecimalPlaces(precision)+' '
	else m = ''
	let t2illion = illion.max(1).log10().div(3).floor()
	let t3illion = t2illion.max(1).log10().div(3).floor()
	let t4illion = t3illion.max(1).log10().div(3).floor()
	let t5illion = t4illion.max(1).log10().div(3).floor()
	let t6illion = t5illion.max(1).log10().div(3).floor()
	let t7illion = t6illion.max(1).log10().div(3).floor()
	let t8illion = t7illion.max(1).log10().div(3).floor()
	let t1 = illion.div(Decimal.pow(1e3,t2illion.sub(2))).floor().toNumber()
	if (illion.lt(1e3)) t1 = illion.toNumber()
	let t2 = t2illion.div(Decimal.pow(1e3,t3illion.sub(2))).floor().toNumber()
	if (t2illion.lt(1e3)) t2 = t2illion.toNumber()
	let t3 = t3illion.div(Decimal.pow(1e3,t4illion.sub(2))).floor().toNumber()
	if (t3illion.lt(1e3)) t3 = t3illion.toNumber()
	let t4 = t4illion.div(Decimal.pow(1e3,t5illion.sub(2))).floor().toNumber()
    if (t4illion.lt(1e3)) t4 = t4illion.toNumber()
	let t5 = t5illion.div(Decimal.pow(1e3,t6illion.sub(2))).floor().toNumber()
	if (t5illion.lt(1e3)) t5 = t5illion.toNumber()
	let t6 = t6illion.div(Decimal.pow(1e3,t7illion.sub(2))).floor().toNumber()
	if (t6illion.lt(1e3)) t6 = t6illion.toNumber()
	let t7 = t7illion.div(Decimal.pow(1e3,t8illion.sub(2))).floor().toNumber()
	if (t7illion.lt(1e3)) t7 = t7illion.toNumber()
	let t8 = t8illion.toNumber()
	st = t1format(t1)
	if (illion.gte(1e3)) st = t1format(Math.floor(t1/1e6),true,t2)+t2format(t2)+((Math.floor(t1/1e3)%1e3>0)?('-'+t1format(Math.floor(t1/1e3)%1e3,true,t2-1)+t2format(t2-1)):'')
	if (illion.gte(1e6)) st += ((t1%1e3>0)?('-'+t1format(t1%1e3,true,t2-2)+t2format(t2-2)):'')
	if (t2illion.gte(1e3)) st = t2format(Math.floor(t2/1e6),true,t3)+t3format(t3)+((Math.floor(t2/1e3)%1e3>0)?("a'-"+t2format(Math.floor(t2/1e3)%1e3,true,t3-1)+t3format(t3-1)):'')
	if (t2illion.gte(1e6)) st += ((t2%1e3>0)?("a'-"+t2format(t2%1e3,true,t3-2)+t3format(t3-2)):'')
	if (t3illion.gte(1e3)) st = t3format(Math.floor(t3/1e6),true,t4)+t4format(t4,Math.floor(t3/1e6))+((Math.floor(t3/1e3)%1e3>0)?("`-"+t3format(Math.floor(t3/1e3)%1e3,true,t4-1,t3)+t4format(t4-1,Math.floor(t3/1e3)%1e3)):'')
	if (t3illion.gte(1e6)) st += ((t3%1e3>0)?("`-"+t3format(t3%1e3,true,t4-2,t3)+t4format(t4-2,t3%1e3)):'')
	if (t4illion.gte(1e3)) st = t4format(Math.floor(t4/1e6),1,true,t5)+t5format(t5)+((Math.floor(t4/1e3)%1e3>0)?("~"+t4format(Math.floor(t4/1e3)%1e3,1,true,t5-1,t4)+t5format(t5-1)):'')
	if (t4illion.gte(1e6)) st += ((t4%1e3>0)?("~"+t4format(t4%1e3,1,true,t5-2,t4)+t5format(t5-2)):'')
	if (t5illion.gte(1e3)) st = t5format(Math.floor(t5/1e6),true,t6)+t6format(t6)+((Math.floor(t5/1e3)%1e3>0)?("*-"+t5format(Math.floor(t5/1e3)%1e3,true,t6-1)+t6format(t6-1)):'')
	if (t5illion.gte(1e6)) st += ((t5%1e3>0)?("*-"+t5format(t5%1e3,true,t6-2)+t6format(t6-2)):'')
	if (t6illion.gte(1e3)) st = t6format(Math.floor(t6/1e6),true,t7)+t7format(t7,Math.floor(t6/1e6))+((Math.floor(t6/1e3)%1e3>0)?(".-"+t6format(Math.floor(t6/1e3)%1e3,true,t7-1)+t7format(t7-1,(t6/1e3)%1e3)):'')
	if (t6illion.gte(1e6)) st += ((t6%1e3>0)?(".-"+t6format(t6%1e3,true,t7-2)+t7format(t7-2,t6%1e3)):'')
	if (t7illion.gte(1e3)) st = t7format(Math.floor(t7/1e6),1,true,t8)+t8format(t8,Math.floor(t7/1e6))+((Math.floor(t7/1e3)%1e3>0)?(",-"+t7format(Math.floor(t7/1e3)%1e3,1,true,t8-1)+t8format(t8-1,(t7/1e3)%1e3)):'')
	if (t7illion.gte(1e6)) st += ((t7%1e3>0)?(",-"+t7format(t7%1e3,1,true,t8-2)+t8format(t8-2,t7%1e3)):'')
	if (decimal.mag >= 1e9 || (decimal.layer>0 && decimal.mag>=0))return m+st
	if (decimal.mag >= 1e3) return commaFormat(decimal, 0)
	if (decimal.mag >= 0.001) return regularFormat(decimal, precision)
	if (decimal.sign!=0) return '1/'+standard(decimal.recip(),precision)
	return regularFormat(decimal, precision)
}

function hyperEformat(decimal, precision) {
	decimal = new Decimal(decimal)
	let s = Decimal.slog(decimal)
	let mag = s.sub(s.floor()).pow10().pow10()
	let m = commaFormat(mag,precision)
	if (mag.gte(1e6)) m = commaFormat(mag,0)
	let e = commaFormat(s.floor().sub(1),0)
	if (s.gte(1e9)) e = formatWhole(s.floor())
	if (decimal.layer >= 1e10) return hyperEformat(s,precision)+'#2'
	if (decimal.layer >= 1e9) return 'E1#'+e
	if ((decimal.layer > 0 && decimal.mag>0) || decimal.mag >= 1e10) return 'E'+m+'#'+e
	if (decimal.mag >= 1e3) return commaFormat(decimal, 0)
	if (decimal.mag >= 0.001) return regularFormat(decimal, precision)
	if (decimal.mag >= 1/9e15) return '1/'+standard(decimal.recip(),precision)
	if (decimal.sign!=0) return '1/'+hyperEformat(decimal.recip(),precision)
	return regularFormat(decimal,precision)
}

function letter(decimal, precision, str) { //AD NG+++
	decimal = new Decimal(decimal)
	let len = new Decimal(str.length);
	let ret = ''
	let power = decimal.log10().div(3).floor()
	let m = decimal.div(Decimal.pow(1e3,power))
	if (m.toStringWithDecimalPlaces(precision) == 1000) {
		m = new Decimal(1)
		power = power.add(1)
	}
	let skipped = Decimal.floor(Decimal.log10(power.mul(len.sub(1)).add(1)).div(Decimal.log10(len))).sub(7)
	if (skipped.lt(4)) skipped = new Decimal(0)
	// (power - () / (len - 1) * len) = Decimal.floor(power.sub(Decimal.pow(len,skipped).sub(1).div(len.sub(1)).mul(len)).div(Decimal.pow(len,skipped)))
	else power = Decimal.floor(power.sub(Decimal.pow(len,skipped).sub(1).div(len.sub(1)).mul(len)).div(Decimal.pow(len,skipped)))
	while (power.gt(0)) {
		ret = str[(power.sub(1)).toNumber() % len.toNumber()] + ret
		power = Decimal.ceil(power.div(len)).sub(1)
	}
	if (isNaN(skipped.sign)||isNaN(skipped.layer)||isNaN(skipped.mag)) skipped = new Decimal(0)
	skipped = skipped.add(7)
	let lett = Decimal.mul(1e9,Decimal.log10(len))
	let s = Decimal.slog(skipped).sub(slog(lett)).div(2).floor().add(1)
	let sl = Decimal.tetrate(Decimal.slog(skipped).sub(Decimal.slog(skipped).sub(slog(lett)).div(2).floor().mul(2)),10).mul(Decimal.log(10,len))
	if (decimal.layer >= 1e9) return '{'+formatWhole(s)+'}'
	if (decimal.gte(Decimal.tetrate(Decimal.slog(lett).add(8),10))) return format(sl)+'{'+formatWhole(s)+'}'
	if (skipped.gte(1e9)) return "["+letter(skipped, precision, str)+"]"
	if (skipped.gt(7)) ret += "[" + commaFormat(skipped, 0) + "]"
	if (decimal.gte("ee9")) return ret
	if (decimal.gte(1e9)) return m.toStringWithDecimalPlaces(precision)+' '+ret
	if (decimal.mag >= 1e3) return commaFormat(decimal, 0)
	if (decimal.mag >= 0.001) return regularFormat(decimal, precision)
	if (decimal.sign!=0) return '1/'+letter(decimal.recip(),precision,str)
	return regularFormat(decimal,precision)
}

function format(decimal, precision=3) {
	decimal = new Decimal(decimal)
	if (player.notation == 'Standard') {
		return standard(decimal, precision)
	}
	else if (player.notation == 'Hyper-E') {
		return hyperEformat(decimal, precision)
	}
	else if (player.notation == 'Letters') {
		return letter(decimal, precision, 'abcdefghijklmnopqrstuvwxyz')
	}
	else if (player.notation == 'Cancer') {
		return letter(decimal, precision, ['😠', '🎂', '🎄', '💀', '🍆', '🐱', '🌈', '💯', '🍦', '🎃', '💋', '😂', '🌙', '⛔', '🐙', '💩', '❓', '☢', '🙈', '👍', '☂', '✌', '⚠', '❌', '😋', '⚡'])
	}
	else if (player.notation == 'BEAF') {
		return formatBEAF(decimal)
	}
	else return formatSciEng(decimal, precision)
}

function formatSciEng(decimal, precision) {
	decimal = new Decimal(decimal)
	if (isNaN(decimal.sign)||isNaN(decimal.layer)||isNaN(decimal.mag)) {
		player.hasNaN = true;
		console.log(decimal)
		Decimal(0)
		for (i in player){
			if (player[i] == undefined) continue
			if (player[i].points != undefined) {
				if (isNaN(player[i].points.mag)) console.log(i + "'s points are NaN")
			}
		}
		
		return "NaN"
	}
	if (player.notation == 'Mixed Scientific' || player.notation == 'Mixed Engineering'){
		if (decimal.layer < 1 || (Math.abs(decimal.mag) < 63 && decimal.layer == 1)) return standard(decimal,precision)
	}
	if (decimal.sign < 0) return "-"+format(decimal.neg(), precision)
	if (decimal.mag<0) {
		if (decimal.layer > 3 || (decimal.mag < -1e10 && decimal.layer == 3)) return "1/" + format(decimal.recip(), precision)
		else exponentialFormat(decimal, precision)
	}
	if (decimal.mag == Number.POSITIVE_INFINITY) return "Infinity"
	if (decimal.layer > 3 || (decimal.mag >= 1e10 && decimal.layer == 3)) {
		var slog = decimal.slog()
		if (slog.gte(1e9)) return "F" + formatWhole(slog.floor())
		if (slog.gte(100)) return Decimal.pow(10, slog.sub(slog.floor())).toStringWithDecimalPlaces(3) + "F" + commaFormat(slog.floor(), 0)
		else return Decimal.pow(10, slog.sub(slog.floor())).toStringWithDecimalPlaces(4) + "F" + commaFormat(slog.floor(), 0)
	} else if (decimal.layer > 2 || (Math.abs(decimal.mag) > 308 && decimal.layer == 2)) {
		return "e" + format(decimal.log10(), precision)
	} else if (decimal.layer > 1 || (Math.abs(decimal.mag) >= 1e12 && decimal.layer == 1)) {
		return "e" + format(decimal.log10(), 4)
	} else if (decimal.layer > 0 || decimal.mag >= 1e9) {
		return exponentialFormat(decimal, precision)
	} else if (decimal.mag >= 1000) {
		return commaFormat(decimal, 0)
	} else if (decimal.mag>=0.001) {
		return regularFormat(decimal, precision)
	} else if (decimal.sign!=0) {
		return exponentialFormat(decimal, precision)
	} else return regularFormat(decimal, precision)
}

function formatBEAF(decimal) {
	decimal = new Decimal(decimal)
	if (isNaN(decimal.sign)||isNaN(decimal.layer)||isNaN(decimal.mag)) {
		player.hasNaN = true;
		console.log(decimal)
		Decimal(0)
		for (i in player){
			if (player[i] == undefined) continue
			if (player[i].points != undefined) {
				if (isNaN(player[i].points.mag)) console.log(i + "'s points are NaN")
			}
		}
		
		return "NaN"
	}
	if (decimal.mag == Number.POSITIVE_INFINITY) return "Infinity"
	if (decimal.gte(1e-3) && decimal.lte(9e15)) return formatSciEng(decimal, 3)
	if (decimal.gte(9e15) && decimal.lte("ee9")) return "{10, " + commaFormat(decimal.log(10), 4) + "}"
	if (decimal.gte("ee9") && decimal.lte("ee12")) return "{10, " + commaFormat(decimal.log(10), 0) + "}"
	if (decimal.gte("ee12") && decimal.lte("e9e15")) return "{10, " + formatSciEng(decimal.log(10), 3) + "}"
	if (decimal.gte("e9e15") && decimal.lte("eee9")) return "{10, {10, " + commaFormat(decimal.log(10).log(10), 4) + "}}"
	if (decimal.gte("eee9") && decimal.lte("eee12")) return "{10, {10, " + commaFormat(decimal.log(10).log(10), 0) + "}}"
	if (decimal.gte("eee12") && decimal.lte("ee9e15")) return "{10, {10, " + formatSciEng(decimal.log(10).log(10), 3) + "}}"
	if (decimal.gte("ee9e15") && decimal.lte("eeee9")) return "{10, {10, {10, " + commaFormat(decimal.log(10).log(10).log(10), 4) + "}}}"
	if (decimal.gte("eeee9") && decimal.lte("eeee12")) return "{10, {10, {10, " + commaFormat(decimal.log(10).log(10).log(10), 0) + "}}}"
	if (decimal.gte("eeee12") && decimal.lte("eee9e15")) return "{10, {10, {10, " + formatSciEng(decimal.log(10).log(10).log(10), 3) + "}}}"
	if (decimal.gte("eee9e15") && decimal.lte("10^^1e9")) return "{10, " + commaFormat(decimal.slog(10), 4) + ", 2}"
	if (decimal.gte("10^^1e9") && decimal.lte("10^^1e12")) return "{10, " + commaFormat(decimal.slog(10), 0) + ", 2}"
	if (decimal.gte("10^^1e12") && decimal.lte("10^^9e15")) return "{10, " + formatSciEng(decimal.slog(10), 3) + ", 2}"
	if (decimal.gte("10^^9e15") && decimal.lte("10^^1.79769313e308")) return "{10, {10, " + commaFormat(decimal.slog(10).log(10), 4) + "}, 2}"
	if (decimal.abs().lt(1e-3) && decimal.abs().gt(0)) return "1/" + formatBEAF(decimal.recip())
	if (decimal.lt(0)) return "-" + formatBEAF(decimal.neg())
	if (decimal.eq(0)) return formatSciEng(0)
}

function formatWhole(decimal) {
    decimal = new Decimal(decimal)
    if (decimal.gte(1e9)) return format(decimal, 3)
    if (decimal.lte(0.99) && !decimal.eq(0)) return format(decimal, 3)
	if (player.notation == 'BEAF' && decimal.lte(1e9) && decimal.gte(0.99)) return formatSciEng(decimal, 0)
    return format(decimal, 0)
}

function formatPercent(decimal, boost) {
    decimal = new Decimal(decimal)
	if (decimal.gte(10)) return format(decimal)+"x"
    return (boost?"+"+format(decimal.sub(1).mul(100)):format(decimal.mul(100)))+"%"
}

function formatTime(s) {
	if (s < 60) return format(s) + "s"
    else if (s < 3600) return formatWhole(Math.floor(s / 60)) + "m " + format(s % 60) + "s"
    else if (s < 86400) return formatWhole(Math.floor(s / 3600)) + "h " + formatWhole(Math.floor(s / 60) % 60) + "m " + format(s % 60) + "s"
    else if (s < 31536000) return formatWhole(Math.floor(s / 86400) % 365) + "d " + formatWhole(Math.floor(s / 3600) % 24) + "h " + formatWhole(Math.floor(s / 60) % 60) + "m " + format(s % 60) + "s"
    else return formatWhole(Math.floor(s / 31536000)) + "y " + formatWhole(Math.floor(s / 86400) % 365) + "d " + formatWhole(Math.floor(s / 3600) % 24) + "h " + formatWhole(Math.floor(s / 60) % 60) + "m " + format(s % 60) + "s"
}
function verse(x) {
	s = Decimal.slog(new Decimal(x)).sub(Decimal.log10(9))
	let verse1 = [2,3,4,5]
	let verse2 = ["multi","meta","xeno","hyper"]
	let id = 0;
		if (s.gte(verse1[verse1.length - 1])) id = verse1.length - 1;
		else {
			while (s.gte(verse1[id])) id++;
			if (id > 0) id--;
		}
	let mag = Decimal.layeradd(x,-verse1[id]+1).div(1e9)
	return [mag,verse2[id]]
}

function verseShort(x) {
	s = Decimal.slog(new Decimal(x)).sub(Decimal.log10(9))
	let verse1 = [2,3,4,5]
	let verse2 = ["mlt","met","xen","hyp"]
	let id = 0;
		if (s.gte(verse1[verse1.length - 1])) id = verse1.length - 1;
		else {
			while (s.gte(verse1[id])) id++;
			if (id > 0) id--;
		}
	let mag = Decimal.layeradd(x,-verse1[id]+1).div(1e9)
	return [mag,verse2[id]]
}

function formatTimeLong(s) {
	s = new Decimal(s)
	let years = s.div(31556952)
	let mlt = verse(years)
	let arv1 = [1,1e15,1e30,1e45,1e60,1e75,1e90,1e105,1e120,1e135]
	let arv2 = ["","mega","giga","tera","peta","exa","zetta","yotta","ronna","quetta"]
	let id = 0;
		if (mlt[0].gte(arv1[arv1.length - 1])) id = arv1.length - 1;
		else {
			while (mlt[0].gte(arv1[id])) id++;
			if (id > 0) id--;
		}
	let mverse = arv2[id]+(arv2[id]!=""?"-":"")+mlt[1]
	if (mlt[1]=="multi") {
		mverse = arv2[id]
		if (arv2[id]=="") mverse = "multi"
	}
	if (years.gte("6pt9")) return format(Decimal.slog(years).pow10().div(9e6)) + " omniverse ages"
	if (years.gte("eee56") && years.lt("eee69")) return format(years.log10().log10().div(1e56)) + " new big bangs"
	if (years.gte("ee120") && years.lt("ee129")) return format(years.log10().div(1e120)) + " big rips"
	if (years.gte("ee9")) return format(mlt[0].div(arv1[id])) + " " + mverse +"verse ages"
	let scale1 = [5.39121e-44,1e-30,1e-27,1e-24,1e-21,1e-18,1e-15,1e-12,1e-9,1e-6,0.001,1,60,3600,86400,31556952,31556952e3,31556952e6,31556952e9,31556952e12,31556952e15,31556952e18,31556952e21,31556952e24,31556952e27,31556952e30,31556952e40,31556952e100]
	let scale2 = [" Planck Times"," quectoseconds"," rontoseconds"," yoctoseconds"," zeptoseconds"," attoseconds"," femtoseconds"
	," picoseconds"," nanoseconds"," microseconds"," milliseconds"," seconds"," minutes"
	," hours", " days", " years", " millenniums", " megaannums" ," gigaannums" ," teraannums" ," petaannums" ," exaannums" ," zettaannums" ," yottaannums" ," ronnaannums" ," quettaannums" ," degenerate eras", " black hole eras"]
	let id2 = 0;
		if (s.gte(scale1[scale1.length - 1])) id2 = scale1.length - 1;
		else {
			while (s.gte(scale1[id2])) id2++;
			if (id2 > 0) id2--;
		}
	return format(s.div(scale1[id2])) + scale2[id2]
}
function pluralize(n,singular,plural,round=false) {
	n = new Decimal(n)
	if ((n.eq_tolerance(1,0.0005) || (n.round().eq(1) && round==true && n.gte(1)))) return singular
	return plural
}
function formatSize(s) {
	s = new Decimal(s)
	let uni = s.div(8.8e26)
	let mlt = verse(uni)
	let arv1 = [1,1e15,1e30,1e45,1e60,1e75,1e90,1e105,1e120,1e135]
	let arv2 = ["","mega","giga","tera","peta","exa","zetta","yotta","ronna","quetta"]
	let arv = 0;
		if (mlt[0].gte(arv1[arv1.length - 1])) arv = arv1.length - 1;
		else {
			while (mlt[0].gte(arv1[arv])) arv++;
			if (arv > 0) arv--;
		}
	let mverse = arv2[arv]+(arv2[arv]!=""?"-":"")+mlt[1]
	if (mlt[1]=="multi") {
		mverse = arv2[arv]
		if (arv2[arv]=="") mverse = "multi"
	}
	if (uni.gte("6pt9")) return format(slog(uni).pow10().div(9e6)) + " omniverses"
	if (uni.gte("ee9")) return format(mlt[0].div(arv1[arv])) + " " + mverse +"verses"
	let scale1 = [1.616255e-35,1e-30,1e-27,1e-24,1e-21,1e-18,1e-15,1e-12,1e-9,1e-6,0.001,0.01,1,1e3,1e6,1e9,1.495978707e11,9.46e15,8.8e26]
	let scale2 = [" Planck Lengths"," quectometers"," rontometers"," yoctometers"," zeptometers"," attometers"," femtometers"
	," picometers"," nanometers"," micrometers"," millimeters"," centimeters"," meters"," kilometers"
	," megameters", " gigameters", " astronomical units", " light-years", " observable universes"]
	let id = 0;
		if (s.gte(scale1[scale1.length - 1])) id = scale1.length - 1;
		else {
			while (s.gte(scale1[id])) id++;
			if (id > 0) id--;
		}
	return format(s.div(scale1[id])) + scale2[id]
}
function distShort(s) {
	s = new Decimal(s)
	let uni = s.div(8.8e26)
	let mlt = verseShort(uni)
	let arv1 = [1,1e15,1e30,1e45,1e60,1e75,1e90,1e105,1e120,1e135]
	let arv2 = ["","mg","gg","tr","pt","ex","zt","yt","rn","qt"]
	let arv = 0;
		if (mlt[0].gte(arv1[arv1.length - 1])) arv = arv1.length - 1;
		else {
			while (mlt[0].gte(arv1[arv])) arv++;
			if (arv > 0) arv--;
		}
	let mverse = arv2[arv]+(arv2[arv]!=""?"-":"")+mlt[1]
	if (mlt[1]=="mlt") {
		mverse = arv2[arv]+"v"
		if (arv2[arv]=="") mverse = "mlt"
	}
	if (uni.gte("6pt9")) return format(slog(uni).pow10().div(9e6)) + " omni"
	if (uni.gte("ee9")) return format(mlt[0].div(arv1[arv])) + " " + mverse
	let scale1 = [1.616255e-35,1e-30,1e-27,1e-24,1e-21,1e-18,1e-15,1e-12,1e-9,1e-6,0.001,0.01,1,1e3,1e6,1e9,1.495978707e11,9.46e15,8.8e26]
	let scale2 = [" PL"," qm"," rm"," ym"," zm"," am"," fm"
	," pm"," nm"," µm"," mm"," cm"," m"," km"
	," Mm", " Gm", " AU", " ly", " uni"]
	let id = 0;
		if (s.gte(scale1[scale1.length - 1])) id = scale1.length - 1;
		else {
			while (s.gte(scale1[id])) id++;
			if (id > 0) id--;
		}
	return format(s.div(scale1[id])) + scale2[id]
}

function heightComp(s) {
	s = new Decimal(s)
	let scale1 = [1.71,10,93,828,8848,408e3,385e6,1.71*78e8,1.495978707e11,45e11,14e13
		,42e15,2.62062e20,2.4001873e22,2.36518e24]
	let scale2 = [ " you"," a house"," the Statue of Liberty"," Burj Khalifa", " Mount Everest", " the distance to ISS", " the distance to the Moon", " the total human height", " the distance to the Sun", " the distance to Neptune", " the farthest distance from Sedna", " the distance to Proxima Centauri"
	," the distance to the center of the Milky Way"," the distance to Andromeda"," the distance to the Great Attractor"]
	let id = 0;
		if (s.gte(scale1[scale1.length - 1])) id = scale1.length - 1;
		else {
			while (s.gte(scale1[id])) id++;
			if (id > 0) id--;
		}
	return format(s.div(scale1[id])) + " times taller than" + scale2[id]
}

function formatComp(s) { // SARS-CoV-2 radius: 50 nm, Volume = 4/3(πr^3) = 5.23598e-22 m^3, 523,598 nm^3
	s = new Decimal(s)
	let scale1 = [5.23598e-22,9e-17,6.2e-11,3.555e-6,4.73176e-4,0.062,2.5e3,4.1887902e12,1.08e21,1.53e24,1.41e27,1.4017341e37,6.7742e60,4e80,"e10310"]
	let scale2 = [" SARS-CoV-2 viruses."," red blood cells.", " grains of sand.", " teaspoons.", " infectant bottles.", " infected people."," Olympic-sized swimming pools."," Chicxulub asteroids."," Earths."
	," Jupiters."," Suns."," Stephenson 2-18s."," Milky Ways."," observable universes.", " symptom-verses."]
	let id = 0;
		if (s.gte(scale1[scale1.length - 1])) id = scale1.length - 1;
		else {
			while (s.gte(scale1[id])) id++;
			if (id > 0) id--;
		}
	return format(s.div(scale1[id])) + scale2[id]
}

function eventsTime(years) { // From AD NG+++
	s = new Decimal(years)
	let thisYear = new Date().getFullYear()
	let bc = s.sub(thisYear)
	let dates = [5388e5, 2521e5, 2013e5, 145e6, 66e6, 5.332e6, 3.5e6,  2.58e6, 7.81e5, 3.15e5, 
		2.5e5,   1.95e5, 1.6e5,  1.25e5, 7e4, 
		6.7e4,   5e4,   4.5e4,  4e4,   3.5e4, 
		3.3e4,   3.1e4,  2.9e4,  2.8e4,  2e4, 
		1.6e4,   1.5e4,  1.4e4,  11600, 1e4,
		8e3,    6e3,   5e3,   4e3,   3200,
		3000,   2600,  2500,  2300,  1800,
		1400,   1175,  800,   753,   653,
		539,    356,   200,   4,     0]
	let events = ["Cambrian Period","Triassic Period","Jurassic Period","Cretaceous Period","Cretaceous–Paleogene extinction event (Chicxulub impact)","start of Pliocene epoch", "birthdate of Lucy (typical Australopithicus afarensis female)", "Quaternary period", "Calabrian age", "Homo sapiens",
	"Homo neanderthalensis", "emergence of anatomically modern humans", "Homo sapiens idaltu", "peak of Eemian interglacial period", "earliest abstract/symbolic art",
	"Upper Paleolithic", "Late Stone Age", "European early modern humans", "first human settlement", "oldest known figurative art",
	"oldest known domesticated dog", "Last Glacial Maximum", "oldest ovens", "oldest known twisted rope", "oldest human permanent settlement (hamlet considering built of rocks and of mammoth bones)",
	"rise of Kerberan culture", "colonization of North America", "domestication of the pig", "prehistoric warfare", "Holocene",
	"death of other human breeds", "agricultural revolution", "farmers arrived in Europe", "first metal tools", "first horse",
	"Sumerian cuneiform writing system", "union of Egypt", "rise of Maya", "extinction of mammoths", "rise of Akkadian Empire",
	"first alphabetic writing", "rise of Olmec civilization", "end of bronze age", "rise of Greek city-states", "rise of Rome",
	"rise of Persian Empire", "fall of Babylonian Empire", "birth of Alexander the Great", "first paper", "birth of Jesus Christ"]
	let index = 0
	for (var i = 0; i < dates.length; i++){
		if (bc.gt(dates[i])) {
			index = i
			break
		}
	}
	return format(bc) + " BCE (" + format(bc.sub(dates[index])) + " years before the " + events[index] + ').'
}


function toPlaces(x, precision, maxAccepted) {
	x = new Decimal(x)
	let result = x.toStringWithDecimalPlaces(precision)
	if (new Decimal(result).gte(maxAccepted)) {
		result = new Decimal(maxAccepted-Math.pow(0.1, precision)).toStringWithDecimalPlaces(precision)
	}
	return result
}

// Will also display very small numbers
function formatSmall(x, precision=2) { 
    return format(x, precision, true)    
}

function invertOOM(x){
    let e = x.log10().ceil()
    let m = x.div(Decimal.pow(10, e))
    e = e.neg()
    x = new Decimal(10).pow(e).times(m)

    return x
}
