export default function  ModalAdd(props) {
    return(
        <div class="alinhamentoModalAdd">
            <div className="filterBlur">
              <div id="modalAdd" style={{display: props.display, height: props.height}}>
                  <div class="inputBuscaCultivo mt-3 mb-3">
                    <div className="relativeInput">
                      <div class="fa-solid fa-magnifying-glass"></div>
                      <input type="input" class="form-control" id="inputCultivo" placeholder="Buscar..."/>
                    </div>
                  </div>
                  <div class="bibliotecaCultivos mt-3">
                      <div class="row gap-4">
                          <div class="col">
                              <div class="left-col">
                                <h4>Tomate</h4>
                                <h4>Fase</h4>
                              </div>
                              <div class="right-col">
                                <div className="img-right-col"></div>
                              </div>
                          </div>
                          <div class="col">
                            <div class="left-col">
                                <h4>Tomate</h4>
                                <h4>Fase</h4>
                            </div>
                            <div class="right-col">
                              <div className="img-right-col"></div>
                            </div>
                          </div>
                          <div class="col">
                            <div class="left-col">
                                <h4>Tomate</h4>
                                <h4>Fase</h4>
                              </div>
                                <div class="right-col">
                                  <div className="img-right-col"></div> 
                                </div>  
                          </div>
                          <div class="col">
                              <div class="left-col">
                                  <h4>Tomate</h4>
                                  <h4>Fase</h4>
                                </div>
                                  <div class="right-col">
                                    <div className="img-right-col"></div>
                                  </div>  
                          </div>
                  </div>
              </div>
          </div>
          </div>
        </div>
    )
}