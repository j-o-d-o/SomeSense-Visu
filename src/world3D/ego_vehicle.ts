import { Scene, Mesh, MeshBuilder, StandardMaterial, Vector3, Color4 } from 'babylonjs'
import { EPerspectiveTypes } from '../redux/perspective/reducer'


export class EgoVehicle {
  private mesh: Mesh;

  constructor(private scene: Scene) {}

  public init(){
    var transparentMaterial = new StandardMaterial("transparent_object", this.scene);
    transparentMaterial.alpha = 0.3; // value of 0.3 is applied for transparency

    const length: number = 2.6;
    const height: number = 1.25;
    const width: number = 1.7;
    this.mesh = MeshBuilder.CreateBox("box", {height: height, width: width, depth: length}, this.scene);
    this.mesh.rotation.y = Math.PI*0.5;
    this.mesh.rotation.z = Math.PI*0.5;
    this.mesh.position = new Vector3(-length * 0.5, 0, height * 0.5);
    this.mesh.edgesWidth = 4.0;
    this.mesh.edgesColor = new Color4(1, 1, 1, 1);
    this.mesh.enableEdgesRendering(.9999);
    this.mesh.material  = transparentMaterial;
    this.mesh.renderingGroupId = 2; // this makes sure that it the 2D image does not obscure the object
  }

  public update(perspective: EPerspectiveTypes) {
    // Hide ego vehicle in case of 2D view
    if(perspective == EPerspectiveTypes.IMAGE_2D) {
      this.mesh.setEnabled(false);
    }
    else {
      this.mesh.setEnabled(true);
    }
  }
}