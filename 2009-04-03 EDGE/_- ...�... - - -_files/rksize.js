// Rk resize by Rabimba specially for EDGE and Kaushik da
<!--

function Is() {
agent = navigator.userAgent.toLowerCase();
this.major = parseInt(navigator.appVersion);
this.minor = parseFloat(navigator.appVersion);
this.ns = ((agent.indexOf('mozilla') != -1) && ((agent.indexOf('spoofer')
== -1)
     && (agent.indexOf('compatible') ==  -1)));
this.ns2 = (this.ns && (this.major == 3));
this.ns3 = (this.ns && (this.major == 3));
this.ns4b = (this.ns && (this.major == 4) && (this.minor <= 4.03));
this.ns4 = (this.ns && (this.major == 4));
this.ns6 = (this.ns && (this.major >= 5));
this.ie = (agent.indexOf("msie") != -1);
this.ie3 = (this.ie && (this.major < 4));
this.ie4 = (this.ie && (this.major == 4) && (agent.indexOf("msie 5.0")
 == -1));
this.ie5 = (this.ie && (this.major == 4) && (agent.indexOf("msie 5.0")
 != -1));
this.ie55 = (this.ie && (this.major == 4) && (agent.indexOf("msie 5.5")
 != -1));
this.ie6 = (this.ie && (agent.indexOf("msie 6.0")!=-1) );
this.aol = (agent.indexOf("aol") != -1);
this.aol3 = (this.aol && this.ie3);
this.aol4 = (this.aol && this.ie4);
this.aol5 = (this.aol && this.ie5);
}
var is = new Is();

function winResize() {
if(is.ns4 ||is.ns6||is.ie4||is.ie5||is.ie55||is.ie6) {
history.go(0);
}
}
// -->
