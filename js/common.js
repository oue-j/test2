// ページの読み込みを待つ
window.addEventListener('load', init);
 
// canvasのサイズを指定
const width = window.innerWidth; //ブラウザの横の長さ
const height = window.innerHeight; //ブラウザの縦の長さ
 
function init() {
  // シーンを作る
  const scene = new THREE.Scene();
 
  // カメラを作る
  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, 1000); // x,y,z座標でカメラの場所を指定
 
  // レンダラーを作る
  const canvasElement = document.querySelector('#canvas') //HTMLのcanvasのid
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement
  });
  renderer.setSize(width, height);
 
  // ライトを作る
  const light = new THREE.DirectionalLight(0xFFFFFF, 1); //平行光源（色、光の強さ）
  light.position.set( 0, 0, 1000 );
  scene.add(light);
 
  // 3Dオブジェクトを作る
	
  //アニメ―ション
  function start() {
    renderer.render(scene, camera);
  }
  start();
}