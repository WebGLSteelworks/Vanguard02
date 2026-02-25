export const MODEL_CONFIG = {
  name: 'White Prizm Sapphire',
  glb: './models/Standard_Vanguard.glb',

	frame: {
	  baseColor: [0.02, 0.02, 0.02],
	  
	  upColor:   [0.75, 0.75, 0.75],   
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
	  color: [0.15, 0.4, 0.5],   
	  roughness: 0.05,
	  metalness: 0.5,
	  opacity: 0.9,

	  fresnel: {
		enabled: true,
		intensity: 3.7,
		chromaBoost: 3.0,		
		colorFront: [0.15, 0.4, 0.5],
		colorMid:   [0.00, 0.00, 0.50],
		colorEdge:  [0.25, 0.0, 0.25]
	  },

	  baseChromaBoost: 1.0, 
	  
	  back: {
		color: [0.4, 0.2, 0.4],
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