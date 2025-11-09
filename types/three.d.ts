// Type declarations for three.js
// Fallback declaration file if @types/three is not available
// This ensures TypeScript can resolve the 'three' module
declare module 'three' {
  export class Points extends Object3D {
    constructor(geometry?: BufferGeometry, material?: Material | Material[]);
    geometry: BufferGeometry;
    material: Material | Material[];
    readonly isPoints: true;
    type: string;
  }
  
  export class Object3D extends EventDispatcher {
    // Minimal implementation for type checking
  }
  
  export class BufferGeometry extends EventDispatcher {
    // Minimal implementation for type checking
  }
  
  export class Material extends EventDispatcher {
    // Minimal implementation for type checking
  }
  
  export class EventDispatcher {
    // Minimal implementation for type checking
  }
}

