import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faDownLeftAndUpRightToCenter, faTemperatureHalf, faDroplet, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

import {useState, useEffect}  from 'react'
import plantationList from '../data/plantationList'

export default function ModalAdd(props) {
  const [textInput, setTextInput] = useState('')
  const [plantation, setPlantation] = useState([])

  const [expand, setExpand] = useState(false)
  const [sizeImage, setSizeImage] = useState('')
  const [backgroundCircleImage, setBackgroundCircleImage] = useState('')

  useEffect(() => {
    setPlantation(plantationList)
  }, [])

  return(
      <div className="alinhamentoModalAdd">
          <div className="filterBlur">
            <div id="modalAdd" style={{display: props.display, height: props.height}}>
                <div className="inputBuscaCultivo mt-3 mb-3">
                  <div className="relativeInput">
                    <div className="fa-solid fa-magnifying-glass"></div>
                    <input type="input" className="form-control" id="inputCultivo" placeholder="Buscar..." onChange={(e)=>{
                      setTextInput(e.target.value)
                      console.log(textInput[0])
                    }}/>
                  </div>
                </div>
                <div className="bibliotecaCultivos mt-3">
                    <div className="row row-add gap-4">
                    {plantation.map((value, indice) => (
                      value.name.includes(textInput !== '' ? (textInput[0].toUpperCase() + textInput.slice(1)) : textInput) ?
                      <div 
                        key = {indice}
                        className="col" 
                        onClick={()=>{
                        }}>
                          <div className="left-col">
                            <h4>{value.name}</h4>
                            {expand === false ?
                              <h4>{value.phase}</h4> : ''
                            }
                            {expand === true ?
                            <>
                              <p>{value.description}</p>
                              <div className="cardsInformation">
                                <div className="card me-3">
                                  <FontAwesomeIcon className="cardFasIcon" icon={faTemperatureHalf} />
                                  {value.temperature}
                                </div>
                                <div className="card">
                                  <FontAwesomeIcon className="cardFasIcon" icon={faDroplet} />
                                  {value.waterByDay}
                                </div>
                                <div className="card ms-3">
                                  <FontAwesomeIcon className="cardFasIcon" icon={faCircleInfo} />
                                  {value.info3s}
                                </div>
                              </div> 
                            </> : ''
                            }
                          </div>
                          <div className="right-col">
                            <div className="circleImage" style={{background: backgroundCircleImage}}>
                              <div className="img-right-col" style={{width: sizeImage, height: sizeImage, backgroundImage: `url(/${value.name}.png)`}}></div>
                            </div>
                            
                            {expand === true ?
                            <>
                              <div className="maturationTime">
                                <h3 className='time'>Tempo de maturação</h3>
                                <h3>{value.maturationTime} <span>DIAS</span></h3>
                              </div>
                              
                              <button className="addPlantation" 
                              onClick={() => {
                                props.setMyPlantation([...props.myPlantation, {name: value.name, phase: value.phase, description: value.description, temperatura: value.temperature, waterByDay: value.waterByDay, info3s: value.info3s, maturationTime: value.maturationTime}])
                              }}>
                                PLANTAR
                              </button>
                            </> : ''
                            }
                          </div>
                          {expand === false ?
                            <div className="buttonsPlantation">
                              <button className='eyeButton fas me-3' 
                              onClick={() => {
                                
                                setPlantation(plantation.filter((e, i) => {
                                  return i == indice
                                }))
                                setExpand(true)
                                setSizeImage('300px')
                                setBackgroundCircleImage('rgba(255, 255, 255, 0.0)')
                              }}>
                                <FontAwesomeIcon icon={faEye} />
                              </button>
                            </div> : ''
                          }
                          {expand === true ?
                              <button className='minimizeButton fas me-3' 
                              onClick={() => {
                                setPlantation(plantationList)
                                setExpand(false)
                                setSizeImage('90px')
                                setBackgroundCircleImage('rgb(236, 115, 115)')
                              }}>
                                <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
                              </button> : ''
                          }
                      </div>
                      : ''
                    ))}
                </div>
            </div>
        </div>
        </div>
      </div>
  )
}