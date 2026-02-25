export const MODEL_CONFIG = {
  name: 'Matte',
  glb: './models/Standard_Vanguard.glb',

	frame: {
	  baseColor: [0.02, 0.02, 0.02],
	  
	  upColor:   [0.02, 0.02, 0.02],   
	  downColor: [0.02, 0.02, 0.02], 	
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
	  color: [0.9, 0.5, 0.2],   
	  roughness: 0.1,
	  metalness: 0.0,
	  opacity: 0.9,

	  fresnel: {
		enabled: true,
		intensity: 2.0,
		chromaBoost: 2.5,
		colorFront: [0.9, 0.5, 0.2],
		colorMid:   [0.6, 0.3, 0.1],
		colorEdge:  [0.2, 0.5, 0.1]
	  },

	  baseChromaBoost: 1.0, 
	  
	  back: {
		color: [1.5, 0.5, 0.1],
		opacity: 1.0
	  },

	},

	fake: {
	  texture: './textures/v_interior_fake.jpg'
	},

	logo: {
	  texture: './textures/prizm_logo_512k.png',
	  emissiveIntensity: 0.1
	},


  startCamera: 'Cam_Front',
  freeCamera: 'Cam_Free'
};