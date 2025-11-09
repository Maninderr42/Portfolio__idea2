// Type declarations for three.js
// Fallback declaration file if @types/three is not available
// This ensures TypeScript can resolve the 'three' module
declare module 'three' {
  export class Euler {
    x: number;
    y: number;
    z: number;
    order: string;
    constructor(x?: number, y?: number, z?: number, order?: string);
    set(x: number, y: number, z: number, order?: string): Euler;
  }
  
  export class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    set(x: number, y: number, z: number): Vector3;
  }
  
  export class Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor(x?: number, y?: number, z?: number, w?: number);
  }
  
  export class EventDispatcher {
    addEventListener(type: string, listener: (event: any) => void): void;
    removeEventListener(type: string, listener: (event: any) => void): void;
    dispatchEvent(event: { type: string }): void;
  }
  
  export class Object3D extends EventDispatcher {
    rotation: Euler;
    position: Vector3;
    quaternion: Quaternion;
    scale: Vector3;
    visible: boolean;
    matrix: any;
    matrixWorld: any;
    constructor();
    updateMatrix(): void;
    updateMatrixWorld(force?: boolean): void;
  }
  
  export class BufferGeometry extends EventDispatcher {
    attributes: any;
    index: any;
    constructor();
  }
  
  export class Material extends EventDispatcher {
    transparent: boolean;
    opacity: number;
    visible: boolean;
    constructor();
  }
  
  export class Points extends Object3D {
    constructor(geometry?: BufferGeometry, material?: Material | Material[]);
    geometry: BufferGeometry;
    material: Material | Material[];
    readonly isPoints: true;
    type: string;
  }
}

