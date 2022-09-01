import { Clock } from './Clock.js';

class Loop {
  constructor(camera, scene, renderer, controls) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.controls = controls;
  }

  start() {
    this.renderer.setAnimationLoop(() => {
        this.tick();

        // render a frame
        this.renderer.render(this.scene, this.camera);
      });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    this.controls.update();
  }
}

export { Loop }