
			import * as THREE from 'three';

			import { GLTFLoader } from './GLTFLoader.js';
			import { OrbitControls } from './OrbitControls.js';
			import { Loop } from './Loop.js';

			let camera, scene, renderer;
			let controls, loop;

			init();

			function init() {
				window.mobileAndTabletCheck = function() {
					let check = false;
					(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
					return check;
				};
				
				const container = document.getElementById( 'computer-animation' );
				let ratio = 0;
				if(window.innerWidth < window.innerHeight)	
				{					
					ratio = (window.innerWidth) / (window.innerHeight/2);
				}else {
					ratio = (window.innerWidth/2) / (window.innerHeight/2);
				}
				camera = new THREE.PerspectiveCamera( 45,ratio, 0.25, 30 );
				camera.position.set( - 1000.8, 0.6, -1000.7 );

				scene = new THREE.Scene();

				const loader = new GLTFLoader().setPath( '../assets/gltf/' );
				loader.load( 'Trophy.gltf', function ( gltf ) {

					gltf.scene.scale.set(0.30,0.30,0.30);
					gltf.scene.position.y-=3.4;
					gltf.scene.position.x+=5.2;
					gltf.scene.rotation.y -= 2.4;
					
					console.log(gltf.scene.position)
					scene.add( gltf.scene );
					render();

				} );

				renderer = new THREE.WebGLRenderer( { antialias: true , alpha:true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				if(window.innerWidth < window.innerHeight)	
				{					
					renderer.setSize( (window.innerWidth), (window.innerHeight/2) );
				}else {
					renderer.setSize( (window.innerWidth/2), (window.innerHeight/2) );
				}				renderer.toneMapping = THREE.ACESFilmicToneMapping;
				renderer.toneMappingExposure = 1;
				renderer.outputEncoding = THREE.sRGBEncoding;
				container.appendChild( renderer.domElement );

				controls = new OrbitControls( camera, renderer.domElement );
				controls.addEventListener( 'change', render ); // use if there is no animation loop
				controls.minDistance = 2;
				controls.maxDistance = 10;
				controls.enableZoom = false;
				controls.enablePan = false;
				controls.target.set( 0, 0, - 5 );
				controls.autoRotate = true;
				controls.enableDamping = true;
				controls.autoRotateSpeed = 3;
				controls.update();
				if(window.mobileAndTabletCheck()){
					controls.enabled = false;
				
				}else{
					const containerWrapper = document.getElementById( 'computer-animation-wrapper' );
					containerWrapper.classList.add('hidden');
				}
				window.addEventListener( 'resize', onWindowResize );

				const ambientLight1 = new THREE.AmbientLight( 0xffffff, 0.1 );
				scene.add( ambientLight1 );
				const ambientLight2 = new THREE.AmbientLight( 0x8128aa, 0.5 );
				scene.add( ambientLight2 );
				const pointLight = new THREE.PointLight( 0xffffff, 0.7 );
				camera.add( pointLight );
				scene.add( camera );


			}

			function onWindowResize() {
				if(window.innerWidth < window.innerHeight)	
				{					
					camera.aspect = (window.innerWidth) / (window.innerHeight/2);
					renderer.setSize( (window.innerWidth), (window.innerHeight/2) );
				}else {
					camera.aspect = (window.innerWidth/2) / (window.innerHeight/2);
					renderer.setSize( (window.innerWidth/2), (window.innerHeight/2) );
				}
				
				camera.updateProjectionMatrix();

				render();

			}

			//

			function render() {
	
				loop = new Loop(camera,scene,renderer,controls);
				loop.start();
			}
