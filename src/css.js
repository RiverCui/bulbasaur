const string = `
/*
 * 大家好，我是River
 * 现在来给你画一个
 * 妙蛙种子！
 */
.skin*{box-sizing: border-box;margin: 0;padding: 0;}
.skin*::before,.skin*::after{box-sizing: border-box;}

.skin{
    background: #7fc9ac;
    min-height: 200vh;
    position: relative;
    z-index: -5;
}
@media (max-width:500px){
    .skin{
        zoom: 50%;
    }
}

/*
 * 画小鼻子
 */
.nose{
    width: 12px;
    height: 3px;
    position: absolute;
    background: #000;
    left: 50%;
    top: 400px;
    margin-left: -6px;
}
.nose.left{
    transform: translateX(-10px) rotate(50deg);
}
.nose.right{
    transform: translateX(10px) rotate(-50deg);
}
/*
 * 画眉毛
 */
.eyebrow{
    border: 3px solid #000;
    width: 90px;
    height: 90px;
    position: absolute;
    left: 50%;
    top: 260px;
    margin-left: -45px;
    border-radius: 500px/1000px;
    z-index: 10;
}
.eyebrow.left{
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-top-color: transparent;
    transform: translateX(-110px) rotate(-15deg);
}
.eyebrow.right{
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    transform: translateX(110px) rotate(15deg);
}
/*
* 画眼睛
*/
.eye{
    width: 130px;
    height: 150px;
    background: #fff;
    border: 3px solid black;
    position: absolute;
    left: 50%;
    top: 210px;
    margin-left: -65px;
}
.eye.left{
    border-radius: 150% 600% 100% 100%;
    transform: translateX(-150px);
    overflow: hidden;
}
.eye.right{
    border-radius: 600% 150% 100% 100%;
    transform: translateX(150px);
    overflow: hidden;
}
/*
* 加一对粉色的眼珠
*/
.left .pupil{
    background: #c03e5a;
    width: 110px;
    height: 200px;
    border-radius: 100% 25% 0 20%;
    position: absolute;
    right: 0;
    top: -10px;
}
.right .pupil{
    background: #c03e5a;
    width: 110px;
    height: 200px;
    border-radius: 25% 100% 20% 0;
    position: absolute;
    left: 0;
    top: -10px;
}
/*
* 双眼无神？
*/
.left .pupil::before{
    content: '';
    display: block;
    background: #fff;
    width: 20px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    right: 25%;
    top: 35px;
}
.right .pupil::before{
    content: '';
    display: block;
    background: #fff;
    width: 20px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    left: 25%;
    top: 35px;
}
/*
* 画上嘴唇
*/
.mouth{
    width: 450px;
    height: 120px;
    position: absolute;
    left: 50%;
    top: 410px;
    margin-left: -225px;
    overflow: hidden;
}
.mouth .up{
    border: 4px solid #000;
    background: #7fc9ac;
    width: 450px;
    height: 300px;
    border-radius: 500px/50px;
    position: absolute;
    top: -280px;
    overflow: hidden;
    z-index: -1;
}
/*
* 加两颗牙齿
*/
.mouth .tooth1{
    width: 30px;
    height: 30px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: -15px;
    margin-left: -15px;
    border-radius: 50% 300%;
    transform: translateX(-120px) translateY(15px) rotate(45deg);
    z-index: -2;
}
.mouth .tooth2{
    width: 30px;
    height: 30px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: -15px;
    margin-left: -15px;
    border-radius: 50% 300%;
    transform: translateX(120px) translateY(15px) rotate(45deg);
    z-index: -2;
}
/*
* 画下嘴唇
*/
.mouth .down{
    border: 4px solid #000;
    width: 450px;
    height: 300px;
    border-radius: 500px/200px;
    position: absolute;
    top: -200px;
    background: #4d3337;
    z-index: -3;
    overflow: hidden;
}
/*
* 再加上舌头
*/
.mouth .down .tongue{
    border: 1px solid hotpink;
    background: #dc7e80;
    width: 400px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 230px;
    margin-left: -200px;
    border-radius: 500% / 500%;
}
/*
* 还有妙蛙种子独特的花纹
*/
.patch1{
    background: #157270;
    width: 130px;
    height: 90px;
    position: absolute;
    left: 50%;
    top: 135px;
    clip-path: polygon(79% 4%, 95% 43%, 56% 91%, 20% 96%, 8% 45%);
}
.patch2{
    background: #157270;
    width: 70px;
    height: 70px;
    position: absolute;
    left: 50%;
    top: 200px;
    margin-left: -75px;
    clip-path: polygon(16% 25%, 53% 37%, 58% 65%, 35% 85%, 3% 40%);
}
.patch3{
    background: #157270;
    width: 70px;
    height: 70px;
    position: absolute;
    left: 50%;
    top: 250px;
    clip-path: polygon(90% 25%, 85% 73%, 50% 100%, 29% 53%);
}
/*
* 现在它害羞了！
*/
.face{
    background: #e98387;
    width: 100px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 370px;
    margin-left: -50px;
}
.face.left{
    transform: translateX(-180px);
}
.face.right{
    transform: translateX(180px);
}
@keyframes move {
    0%,100%{
        width: 100px;
        height: 20px;
    }
    50% {
        width: 120px;
        height: 25px;
    }
}
.face:hover{
    animation: move 500ms infinite linear;
}
/*
* 摸摸它的小脸蛋
*/
`
export default string;