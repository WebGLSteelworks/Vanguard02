export const MODEL_CONFIG = {
  name: 'White Prizm B',
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
	  color: [0.1, 0.1, 0.1],   
	  roughness: 0.1,
	  metalness: 0.5,
	  opacity: 0.90,

	  fresnel: {
		enabled: true,
		intensity: 3.1,  
		chromaBoost: 0.0,			
		colorFront: [0.1, 0.1, 0.1],
		colorMid:   [0.0, 0.0, 0.0],
		colorEdge:  [-0.1, -0.1, -0.1]
	  },
	  
	  baseChromaBoost: 1.0, 
		  
	  back: {
		color: [0.2, 0.2, 0.2],
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