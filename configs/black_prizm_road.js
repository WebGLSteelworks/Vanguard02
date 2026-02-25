export const MODEL_CONFIG = {
  name: 'Black Prizm Road',
  glb: './models/Standard_Vanguard.glb',

	frame: {
	  baseColor: [0.05, 0.05, 0.05],
	  
	  upColor:   [0.05, 0.05, 0.05],   
	  downColor: [0.05, 0.05, 0.05], 	
	  roughness: 0.7,
	  metalness: 0.0,
	  trans: false,          
	  opacity: 0.3, 
	  reflectivity: 1.0 			
	},
	
	armsText: {
		overlay: './textures/Temples_vanguard_2k.png',
		color: [0.1, 0.1, 0.1],
		
		transparent: true,
		opacity: 0.9,
	},

    glass: {
	  color: [0.5, 0.0, 0.3],   
	  roughness: 0.1,
	  metalness: 0.0,
	  opacity: 0.9,

	  fresnel: {
		enabled: true,
		intensity: 2.7,
		chromaBoost: 2.0,		
		colorFront: [0.5, 0.0, 0.3],
		colorMid:   [0.8, 0.0, 0.0],
		colorEdge:  [0.5, 0.5, 0.1]
	  },

	  baseChromaBoost: 1.0, 
	  
	  back: {
		color: [0.4, 0.2, 0.4],
		opacity: 1.0
	  },

	},
	
	fake: {
	  texture: './textures/w_interior_fake.jpg'
	},

	logo: {
	  texture: './textures/prizm_logo_512k.png',
	  emissiveIntensity: 0.6
	},


  startCamera: 'Cam_Front',
  freeCamera: 'Cam_Free'
};
