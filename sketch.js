let button1, button2, button3, button4;
let sprite1, sprite2;
let img1, img2;
let frame1 = 0, frame2 = 0;
let frameRateValue = 5; // 调整帧速率以使动画变慢
let iframe1, iframe2, iframe3, iframe4;

function preload() {
  img1 = loadImage('動作1全部.png');
  img2 = loadImage('動作2全部.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(frameRateValue); // 设置帧速率
  button1 = createButton('自我介紹');
  button1.position(150, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(showSprite1);
  button1.mouseOut(hideSprites);
  button1.mousePressed(createIframe1);

  button2 = createButton('作品簡介');
  button2.position(280, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(showSprite2);
  button2.mouseOut(hideSprites);
  button2.mousePressed(createIframe2);

  button3 = createButton('筆記說明');
  button3.position(410, 50);
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.mousePressed(createIframe3);

  button4 = createButton('測驗題');
  button4.position(540, 50);
  button4.size(100, 50);
  button4.style('font-size', '20px');
  button4.mousePressed(createIframe4);
}

function draw() {
  background(255, 182, 193); // 设置背景颜色为粉红色
  if (sprite1) {
    image(img1, 50, 50, 81, 52, frame1 * 81, 0, 81, 52);
    frame1 = (frame1 + 1) % 6;
  }
  if (sprite2) {
    image(img2, 50, 50, 53, 42, frame2 * 53, 0, 53, 42);
    frame2 = (frame2 + 1) % 5;
  }
}

function showSprite1() {
  sprite1 = true;
  sprite2 = false;
}

function showSprite2() {
  sprite1 = false;
  sprite2 = true;
}

function hideSprites() {
  sprite1 = false;
  sprite2 = false;
}

function createIframe1() {
  if (!iframe1) {
    iframe1 = createElement('iframe');
    iframe1.attribute('src', 'https://www.et.tku.edu.tw/');
    iframe1.position(50, 150);
    iframe1.size(800, 600);
  }
}

function createIframe2() {
  if (!iframe2) {
    iframe2 = createElement('iframe');
    iframe2.attribute('src', 'https://yenni27.github.io/20250317/');
    iframe2.position(50, 150);
    iframe2.size(800, 600);
  }
}

function createIframe3() {
  if (!iframe3) {
    iframe3 = createElement('iframe');
    iframe3.attribute('src', 'https://yenni27.github.io/20250310/'); // 替换为实际的URL
    iframe3.position(50, 150);
    iframe3.size(800, 600);
  }
}

function createIframe4() {
  if (!iframe4) {
    iframe4 = createElement('iframe');
    iframe4.attribute('src', 'https://yenni27.github.io/20250303/'); // 替换为实际的URL
    iframe4.position(50, 150);
    iframe4.size(800, 600);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}