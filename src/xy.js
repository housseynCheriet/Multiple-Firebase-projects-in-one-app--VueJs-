   //point=[x,y,width,height];
var point1=[1,3,2,2];
var point2=[3.3,4,3,3];
var point3=[1.5,5,2,4];
var point1=[2,3,7,2];
var point2=[2,4,4,3];
var point3=[5,5,3,4];
var i=0;
function getXY(m_1,m_2,j_1,j_2,bol){
 
    
 var dd,m,m2=m_2, m1=m_1,j1=j_1,j2=j_2;
  if(m_2<m_1){
    m2=m_1;
    m1=m_2;
    j1=j_2;
    j2=j_1;
  }
  var c=(j2+j1)/2;
  var d=m2-m1;
 if((m2-m1)<=(j2+j1)/2){
    if(m2-m1>=Math.abs(j2-j1)){
      m= m1+j1/2-(c-d)/2
      dd=c-d;
//m=m1+j1/2-(m2-m1-(j2-j1))/2
    }else{
      
      if(j1>j2){
          dd=j2
          m=m2;
      }else{
          dd=j1;
          m=m1;
      }
     
    }
     console.log(m,dd);
    if(i==0){
    i++;
   getXY(m,point3[0],dd,point3[2]); 
}else{
    i++;
 if(i==2)   
 getXY(point1[1],point2[1],point1[3],point2[3]);
 else if(i==3)
 getXY(m,point3[1],dd,point3[3]); 
 
}


  }

 
 
 /* var c=(j2+j1)/2;
  var d=m2-m1;
  if(d<c){
      
      
m= m1+j1/2-(c-d)/2
console.log("____ "+m,c-d);
if(i!=1){
    i++;
   getXY(m,point3[0],c-d,point3[2]); 
}
else{
    console.log(m,c-d);
}
  
  }
 */
}
getXY(point1[0],point2[0],point1[2],point2[2]);