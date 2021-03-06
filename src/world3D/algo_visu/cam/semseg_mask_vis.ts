import { Scene, Color3, LinesMesh, MeshBuilder } from 'babylonjs'
import { IAlgoVis2D } from '../ivis'
import { IReduxWorld } from '../../../redux/world/types'
import { CameraSensor } from '../../sensors/camera_sensor'


export class SemsegMaskVis extends IAlgoVis2D {
  private lineSys: LinesMesh;

  constructor(private scene: Scene) {
    super();
  }


  public reset() {

  }

  public update(worldData: IReduxWorld, camSensor: CameraSensor) {
    for (let i = 0; i < worldData.camSensors.length; i++) {
      if (camSensor.getKey() == worldData.camSensors[i].key) {
        worldData.camSensors[i].imageData = worldData.camSensors[i].semseg.maskData;
      }
    }
  }
}
