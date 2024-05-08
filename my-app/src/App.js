
import './index.css';
import {Suspense, useRef, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group {...props} dispose={null} scale={3} >
      <mesh geometry={nodes.shoe.geometry} material={materials.laces}  material-color={"red"}/>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh}    material-color={props.customColors.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps}    material-color={"blue"} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner}   material-color={"red"}  />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole}    material-color={props.customColors.soul}  />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.customColors.stripes}  />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band}    material-color={"red"}  />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch}   material-color={"red"} />
    </group>
  )
}


function Latern(props) {
  const { nodes, materials } = useGLTF('/Lantern.gltf')
  return (
    <group {...props} dispose={null} scale={3}  >
      <group rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.LanternPole_Body.geometry} material={materials.LanternPost_Mat} position={[-3.823, 13.016, 0]} />
        <mesh geometry={nodes.LanternPole_Chain.geometry} material={materials.LanternPost_Mat} position={[-9.582, 21.038, 0]} />
        <mesh geometry={nodes.LanternPole_Lantern.geometry} material={materials.LanternPost_Mat} position={[-9.582, 18.009, 0]} />
      </group>
    </group>
  )
}






function App() {

  const [mesh,setMesh]=useState("#ffffff")
  const [stripes,setStripes]=useState("#ffffff")
  const [soul,setSoul]=useState("#ffffff")

  const ref = useRef()
  return (
    <div className="App">
          <div className="wrapper">
        <div className="card">
            <div className="product-canvas">
            /* <Canvas>
              <Suspense fallback={null}>
                <ambientLight/>
                <spotLight  intensity={0.9} angle={0.1} penumbra={1} 
                position={[10,15,10]} castShadow />
                <Model customColors={{mesh:mesh, stripes:stripes, soul:soul}}  />

                <OrbitControls 
                enablePan={true} 
                enableZoom={true} 
                enableRotate={true} />
              </Suspense>

                </Canvas> */
            </div>
            <h2>Color chooser</h2>
            <div class='colors'>
                 <div>
                    <input type="color" id="mesh" name="mesh"
                           value={mesh}
                           onChange={(e)=>setMesh(e.target.value)}
                           />
                    <label for="mesh">Main</label>
                  </div>

                <div>
                    <input type="color" id="stripes" name="stripes"
                            value={stripes} 
                            onChange={(e)=>setStripes(e.target.value)}/>
                    <label for="stripes">Stripes</label>
                </div>
                 <div>
                    <input type="color" id="soul" name="soul"
                            value={soul}
                            onChange={(e)=>setSoul(e.target.value)} />
                    <label for="soul">Soul</label>
                </div>
            </div>
        </div>
    </div>
     

{/* <Canvas>
  <mesh ref={ref} >
    <boxGeometry  attach='geometry' args={[2,2,2]}/>

  </mesh>

</Canvas> */}
    </div>
  );
}

export default App;
