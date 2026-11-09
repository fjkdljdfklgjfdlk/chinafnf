// Original, manually specified drawing geometry. Run in Photopea: File > Script.
// No generated image, imported AI picture or remote image is used in this drawing.
var WHICH = "foxen";
var doc=app.documents.add(1536,1024,72,WHICH+"-Photopea",NewDocumentMode.RGB,DocumentFill.TRANSPARENT);
var ox=0,oy=0,mat=[1,0,0,1,0,0],prefix="",ink="191923";
function color(hex){var c=new SolidColor();c.rgb.hexValue=hex;return c;}
function layer(name){var l=doc.artLayers.add();l.name=prefix+name;return l;}
function tr(p){return [ox+mat[0]*p[0]+mat[2]*p[1]+mat[4],oy+mat[1]*p[0]+mat[3]*p[1]+mat[5]];}
function polygon(points,hex,stroke){var p=[];for(var i=0;i<points.length;i++)p.push(tr(points[i]));doc.selection.select(p,SelectionType.REPLACE,0,true);doc.selection.fill(color(hex));if(stroke)doc.selection.stroke(color(ink),stroke,StrokeLocation.INSIDE);doc.selection.deselect();}
function rect(x,y,w,h,c,s){polygon([[x,y],[x+w,y],[x+w,y+h],[x,y+h]],c,s);}
function ellipse(x,y,rx,ry,c,s){var p=[];for(var i=0;i<40;i++){var a=i*Math.PI/20;p.push([x+rx*Math.cos(a),y+ry*Math.sin(a)]);}polygon(p,c,s);}
function line(a,b,w,c){var dx=b[0]-a[0],dy=b[1]-a[1],d=Math.sqrt(dx*dx+dy*dy)||1,nx=-dy/d*w/2,ny=dx/d*w/2;polygon([[a[0]+nx,a[1]+ny],[b[0]+nx,b[1]+ny],[b[0]-nx,b[1]-ny],[a[0]-nx,a[1]-ny]],c,0);}
function path(points,w,c){for(var i=1;i<points.length;i++)line(points[i-1],points[i],w,c);}
function cubic(a,b,c,d,n){var r=[];for(var i=0;i<=n;i++){var t=i/n,u=1-t;r.push([u*u*u*a[0]+3*u*u*t*b[0]+3*u*t*t*c[0]+t*t*t*d[0],u*u*u*a[1]+3*u*u*t*b[1]+3*u*t*t*c[1]+t*t*t*d[1]]);}return r;}
function curve(a,b,c,d,w,col){path(cubic(a,b,c,d,16),w,col);}
function local(cx,cy,deg,dx,dy){var a=deg*Math.PI/180,cs=Math.cos(a),sn=Math.sin(a);mat=[cs,sn,-sn,cs,cx-cs*cx+sn*cy+dx,cy-sn*cx-cs*cy+dy];}
function reset(){mat=[1,0,0,1,0,0];}
function shade(hex,f){var r=parseInt(hex.substr(0,2),16),g=parseInt(hex.substr(2,2),16),b=parseInt(hex.substr(4,2),16);function h(v){v=Math.max(0,Math.min(255,Math.round(v*f)));var s=v.toString(16);return s.length==1?"0"+s:s;}return h(r)+h(g)+h(b);}
function limb(a,b,w,col){var dx=b[0]-a[0],dy=b[1]-a[1],d=Math.sqrt(dx*dx+dy*dy)||1,nx=dy/d*w/2,ny=-dx/d*w/2;
var al=[a[0]-nx,a[1]-ny],ar=[a[0]+nx,a[1]+ny],bl=[b[0]-nx,b[1]-ny],br=[b[0]+nx,b[1]+ny];
polygon([[al[0]+7,al[1]-6],[ar[0]+7,ar[1]-6],[br[0]+7,br[1]-6],br,bl,al],shade(col,.66),3);
polygon([al,ar,br,bl],col,3);polygon([al,[al[0]+7,al[1]-6],[ar[0]+7,ar[1]-6],ar],shade(col,1.18),2);
line([al[0]+3,al[1]+2],[bl[0]+3,bl[1]-2],2.5,shade(col,1.24));}
function mic(hand,cap){layer("Microphone");var dx=cap[0]-hand[0],dy=cap[1]-hand[1],d=Math.sqrt(dx*dx+dy*dy),nx=-dy/d*9,ny=dx/d*9;
polygon([[hand[0]-nx,hand[1]-ny],[hand[0]+nx,hand[1]+ny],[cap[0]+nx,cap[1]+ny],[cap[0]-nx,cap[1]-ny]],"252731",3);
line([hand[0]-nx*.5,hand[1]-ny*.5],[cap[0]-nx*.5,cap[1]-ny*.5],3,"606875");ellipse(cap[0],cap[1],19,22,"343B48",3);ellipse(cap[0]-5,cap[1]-5,10,12,"566170",0);
for(var j=-12;j<=12;j+=6){line([cap[0]-13,cap[1]+j],[cap[0]+13,cap[1]+j+3],1.5,"141824");}for(var j=-10;j<=10;j+=5)line([cap[0]+j,cap[1]-16],[cap[0]+j+3,cap[1]+16],1,"727B87");}
var poses=[
 {name:"idle",dx:0,dy:0,lean:0,head:0,knee:0,la:[[143,190],[139,250],[136,308]],ra:[[369,190],[376,251],[376,307]]},
 {name:"left",dx:-14,dy:5,lean:-5,head:-9,knee:12,la:[[129,195],[112,221],[180,166]],ra:[[355,195],[386,239],[414,279]],hand:[180,166],cap:[207,130]},
 {name:"down",dx:0,dy:30,lean:3,head:7,knee:30,la:[[143,220],[162,269],[212,222]],ra:[[369,220],[389,269],[361,307]],hand:[212,222],cap:[238,189]},
 {name:"up",dx:0,dy:-7,lean:-3,head:-13,knee:0,la:[[143,183],[157,143],[198,113]],ra:[[369,183],[404,151],[408,101]],hand:[198,113],cap:[226,86]},
 {name:"right",dx:16,dy:6,lean:5,head:9,knee:12,la:[[159,196],[133,239],[109,278]],ra:[[385,196],[403,228],[335,166]],hand:[335,166],cap:[309,130]},
 {name:"hey",dx:0,dy:-2,lean:0,head:-4,knee:0,la:[[143,188],[126,226],[187,182]],ra:[[369,188],[402,139],[403,78]],hand:[187,182],cap:[214,149]}
];
function foxLeg(x,foot,knee,col,side){layer(side+" trousers");var top=[x,312],bottom=[foot,454];var middle=[x+(side=="Left"?-knee:knee),378+knee*.35];
limb(top,middle,69,col);limb(middle,bottom,69,col);
// Paint-worn, torn pale fabric at the waist.
polygon([[x-34,311],[x+33,311],[x+32,337],[x+22,331],[x+14,341],[x+3,334],[x-8,341],[x-18,332],[x-28,337]],"E9E4B5",2);
line([x-17,347],[x-9,351],2,"35431E");line([x+15,365],[x+22,362],2,"35431E");line([middle[0]-15,392],[middle[0]-9,395],2,"35431E");line([middle[0]+18,411],[middle[0]+24,405],2,"35431E");
// Repeated arrow/crown doodles on the lower hem, drawn as editable pixels.
for(var k=0;k<3;k++){var xx=foot-25+k*21;curve([xx,459],[xx-2,439],[xx+16,437],[xx+16,459],2,"263523");line([xx+8,449],[xx+8,457],2,"263523");polygon([[xx+4,451],[xx+8,445],[xx+12,451]],"263523",0);}
}
function fox(p){
 var dx=p.dx,dy=p.dy;
 foxLeg(219+dx,207-(p.knee?15:0),p.knee,"F2EF17","Left");foxLeg(291+dx,291+(p.knee?23:0),p.knee,"08E747","Right");
 layer("Left arm - red and yellow");limb(p.la[0],p.la[1],64,"EF1525");limb(p.la[1],p.la[2],63,"F2E51A");
 layer("Right arm - cyan and green");limb(p.ra[0],p.ra[1],64,"04ACDF");limb(p.ra[1],p.ra[2],63,"05AC51");
 layer("Torso - shaded four-color blocks");local(256,235,p.lean,dx,dy);
 polygon([[177,167],[330,167],[346,181],[346,311],[177,311]],"086F55",3);
 polygon([[177,167],[330,167],[317,178],[165,178]],"FA7774",2);
 rect(165,178,83,66,"EF2434",3);rect(248,178,82,66,"00ACD9",3);rect(165,244,83,67,"E8E71B",3);rect(248,244,82,67,"00AD55",3);
 line([172,184],[240,184],3,"FF6672");line([254,184],[324,184],3,"54D7F2");line([172,250],[240,250],3,"FFFF6B");line([254,250],[324,250],3,"47E887");
 polygon([[205,190],[183,231],[227,231]],"FFFEF0",0);polygon([[289,188],[311,211],[289,234],[267,211]],"F9FFFF",0);ellipse(207,277,22,22,"FFFDEB",0);rect(268,256,42,42,"F9FFFC",0);reset();
 layer("Purple head - plastic shading and paint");local(256,112,p.head,dx,dy);
 var head=cubic([202,68],[202,32],[309,30],[310,68],18);head=head.concat([[310,119],[202,119]]);polygon(head,"9713C6",3);
 polygon([[285,42],[304,51],[310,70],[310,120],[293,120],[293,70]],"680A99",0);
 ellipse(254,58,49,21,"AD20D8",0);curve([211,57],[221,40],[276,38],[293,49],3,"CF5BEB");
 // Red and blue paint marks are traced as deliberate irregular splashes.
 polygon([[225,61],[228,54],[235,56],[238,66],[246,66],[250,73],[245,82],[235,84],[232,96],[222,98],[218,92],[224,83],[216,80],[217,71],[225,72]],"F52A1C",0);
 ellipse(244,55,4,6,"F52A1C",0);ellipse(220,101,3,3,"F52A1C",0);
 polygon([[276,87],[279,78],[286,79],[287,86],[299,88],[300,94],[292,99],[295,106],[288,111],[282,106],[272,106],[269,100],[273,95],[266,93],[267,88]],"1687E1",0);
 line([230,68],[239,74],3,"2B1646");line([233,80],[239,70],3,"2B1646");ellipse(260,78,3.5,p.name=="down"?3:8,"191624",0);
 // The black face covering stays on in every pose.
 polygon([[202,112],[310,112],[309,143],[256,181],[202,145]],"161B22",3);polygon([[256,123],[307,115],[306,142],[256,176]],"11151B",0);line([208,118],[251,126],2,"363F4A");line([257,170],[301,141],2,"303944");reset();
 if(p.hand)mic(p.hand,p.cap);
}
// Wavy hair is drawn from custom closed Bezier contours, not from a raster.
function lockShape(cx,cy,s,flip,col){var f=flip?-1:1;function q(x,y){return[cx+f*x*s,cy+y*s];}var pts=cubic(q(0,0),q(-24,28),q(16,38),q(-10,63),12);pts=pts.concat(cubic(q(-10,63),q(20,56),q(35,23),q(12,5),12));polygon(pts,col,2);curve(q(4,9),q(-8,31),q(21,35),q(-3,55),2.5,shade(col,1.5));}
function sulfurLeg(x,foot,knee,side){layer(side+" leg and sneaker");limb([x,325],[foot,428],58,"EFB896");
 // Soft planar skin shading down the outer edge.
 polygon([[x+20,331],[x+29,332],[foot+29,428],[foot+18,428]],"D99175",0);
 var sx=foot-35;polygon([[sx,420],[sx+62,420],[sx+73,445],[sx+71,461],[sx-3,461],[sx-6,445]],"242731",3);
 polygon([[sx+5,422],[sx+53,422],[sx+62,447],[sx,447]],"363A46",0);polygon([[sx-4,449],[sx+72,449],[sx+71,461],[sx-3,461]],"D7D7CC",2);
 line([sx,455],[sx+66,455],2,"6F7780");
 for(var j=0;j<4;j++){var yy=426+j*5;line([sx+12+j*2,yy],[sx+45-j,yy+4],1.8,"DEDACB");line([sx+44-j,yy],[sx+15+j*2,yy+4],1.8,"DEDACB");}
 curve([sx+3,435],[sx+14,430],[sx+18,449],[sx+6,445],1.6,"D6D4C8");curve([sx+52,430],[sx+65,436],[sx+57,448],[sx+48,442],1.6,"D6D4C8");}
function sulfur(p){var dx=p.dx,dy=p.dy;
 sulfurLeg(223+dx,215-(p.knee?24:0),p.knee,"Left");sulfurLeg(290+dx,291+(p.knee?25:0),p.knee,"Right");
 layer("Hair - back silhouette");local(256,150,p.head*.35,dx,dy);
 var back=cubic([255,45],[163,41],[157,146],[163,230],20).concat(cubic([163,230],[145,260],[158,289],[183,309],14),cubic([183,309],[217,290],[293,302],[334,308],14),cubic([334,308],[364,242],[355,145],[339,87],20),cubic([339,87],[319,50],[286,40],[255,45],14));polygon(back,"302325",3);reset();
 layer("Orange shoulder accessory");local(256,150,p.head*.35,dx,dy);
 var tail=cubic([321,164],[337,135],[375,139],[364,189],12).concat(cubic([364,189],[391,209],[343,221],[318,199],12));polygon(tail,"B65328",3);ellipse(349,175,24,25,"CB7132",0);polygon([[357,194],[377,183],[382,201],[367,212],[349,207]],"C5BDB4",2);
 path([[349,144],[370,129],[370,113],[349,102]],6,"954526");line([349,102],[337,97],7,"E6C7BD");ellipse(335,96,5,3,"E6C7BD",0);curve([336,165],[345,145],[361,160],[358,176],3,"E49B4D");reset();
 layer("Left jacket sleeve");limb(p.la[0],p.la[1],64,"333437");limb(p.la[1],[p.la[2][0],p.la[2][1]-8],62,"303235");limb([p.la[2][0],p.la[2][1]-8],p.la[2],57,"EAB394");
 layer("Right jacket sleeve");limb(p.ra[0],p.ra[1],64,"333437");limb(p.ra[1],[p.ra[2][0],p.ra[2][1]-8],62,"303235");limb([p.ra[2][0],p.ra[2][1]-8],p.ra[2],57,"EAB394");
 layer("Jacket, crop top and shorts");local(256,240,p.lean,dx,dy);
 polygon([[191,179],[318,179],[334,294],[319,337],[182,337],[175,294]],"292B33",3);
 polygon([[217,184],[293,184],[287,238],[224,238]],"A5A9AE",2);line([228,191],[281,191],2,"D1D2D2");rect(224,238,63,47,"F0B99B",0);polygon([[278,239],[288,239],[289,285],[279,285]],"CD8D72",0);
 polygon([[182,180],[216,178],[230,240],[215,285],[176,283]],"37383B",3);polygon([[296,179],[325,182],[337,283],[295,284],[282,242]],"303135",3);
 polygon([[213,181],[224,193],[220,246],[209,267],[213,235]],"55565B",0);polygon([[298,181],[287,195],[289,242],[302,266],[296,234]],"515259",0);
 for(var z=0;z<8;z++){line([218,195+z*5],[223,195+z*5],1.7,"D3D3CA");line([286,195+z*5],[291,195+z*5],1.7,"D3D3CA");}
 polygon([[180,286],[329,286],[325,337],[258,337],[255,310],[250,337],[183,337]],"21252D",3);
 polygon([[182,289],[329,289],[328,301],[181,301]],"171C25",0);
 for(var x=188;x<327;x+=13)ellipse(x,295,3.7,2.7,"A3A3A5",0);
 rect(245,287,20,15,"AEB1B2",1);rect(249,291,12,7,"242831",0);line([186,307],[236,311],1.5,"60636B");line([275,311],[321,307],1.5,"60636B");reset();
 layer("Face and dimensional hair crown");local(256,112,p.head,dx,dy);
 var face=cubic([213,93],[209,62],[305,66],[305,98],14).concat([[301,142],[278,166],[239,166],[217,145]]);polygon(face,"F3C3A1",3);polygon([[287,90],[305,97],[301,142],[278,165],[278,155],[291,137]],"DCA17F",0);
 ellipse(215,129,10,14,"E5AB8C",2);ellipse(303,129,10,14,"DDA081",2);
 if(p.name=="idle"||p.name=="hey") {curve([243,145],[250,154],[263,154],[270,143],3,"251D25");curve([252,137],[245,142],[244,148],[254,146],2,"251D25");}
 else {ellipse(259,147,p.name=="down"?12:10,p.name=="up"?13:9,"3D222A",2);ellipse(260,151,6,3,"E2959C",0);}
 // Five hand-shaped overlapping bangs obscure the eyes, as in the supplied photo.
 var cap=cubic([257,40],[211,41],[175,75],[176,124],18).concat([[193,143],[213,130],[233,139],[252,118],[270,136],[294,124],[313,139],[337,124]],cubic([337,124],[336,76],[307,40],[257,40],18));polygon(cap,"3C2928",3);
 var bangs=[[[256,46],[207,56],[217,110],[181,130]],[[259,48],[223,72],[239,113],[211,137]],[[263,49],[249,77],[267,104],[245,130]],[[269,49],[284,81],[277,112],[299,135]],[[279,52],[313,68],[301,111],[333,127]]];
 var shades=["634332","704B36","50352D","6D4833","573B30"];
 for(var k=0;k<bangs.length;k++){var b=bangs[k],pts=cubic(b[0],b[1],b[2],b[3],18);pts=pts.concat(cubic(b[3],[b[3][0]+20,b[3][1]+3],[b[2][0]+16,b[2][1]-2],[b[0][0]+7,b[0][1]],16));polygon(pts,shades[k],2);curve([b[0][0]+2,b[0][1]+8],[b[1][0]+5,b[1][1]],[b[2][0]+5,b[2][1]-7],[b[3][0]+5,b[3][1]-5],2,"9A6E48");}
 // Yellow and red top ornament.
 ellipse(259,35,11,13,"F2DC32",2);ellipse(256,30,6,6,"FFF497",0);polygon([[259,51],[245,43],[251,61],[241,55],[253,70],[262,67],[273,52],[264,54],[264,44]],"B84328",2);
 reset();
 layer("Long front hair - left curls");local(256,150,p.head*.35,dx,dy);
 for(var k=0;k<5;k++)lockShape(193-k*2,127+k*29,.83,false,k%2?"60402F":"4D332B");
 layer("Long front hair - right curls");for(var k=0;k<5;k++)lockShape(316+k*2,126+k*29,.83,true,k%2?"60402F":"4D332B");reset();
 if(p.hand)mic(p.hand,p.cap);
}
for(var i=0;i<poses.length;i++){ox=i%3*512;oy=Math.floor(i/3)*512;prefix=(i+1)+" "+poses[i].name+" / ";if(WHICH=="foxen")fox(poses[i]);else sulfur(poses[i]);}
reset();doc.selection.deselect();app.UI.fitTheArea();
