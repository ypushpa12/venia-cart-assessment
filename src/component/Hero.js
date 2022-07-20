import React from 'react'
import "../Style/Hero.scss"
function Hero() {
  return (
    <div>
      <div className='mnb'>
        <div className='container'>
          <div className='herosection'>
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--4">
                <div class="cardone">
                  <div class="card-body">
                    <h5 class="card-title">Women's</h5>
                    <div className='lines'>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--8">
                <div class="card-img">
                  <img src="https://www.zdnet.com/a/img/resize/aae4500dcc80cf4f9c59bd066c4db2fa96c1b02c/2021/04/16/8006dbda-20d3-40fb-9cf4-bc6c30ef0cce/shutterstock-526104310.jpg?width=770&height=578&fit=crop&auto=webp" class="card-img-top" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='awq herosection'>
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
            <div class="card-img">
              <img src="https://www.zdnet.com/a/img/resize/aae4500dcc80cf4f9c59bd066c4db2fa96c1b02c/2021/04/16/8006dbda-20d3-40fb-9cf4-bc6c30ef0cce/shutterstock-526104310.jpg?width=770&height=578&fit=crop&auto=webp" class="card-img-top" alt="" />
            </div>
          </div>

          <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
            <div class="cardone">
              <div class="card-body">
                <h5 class="card-title">women's</h5>
                <div className='lines'>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero