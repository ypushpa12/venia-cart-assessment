import React from 'react'
import "../Style/Filters.scss"


function Filter() {
    return (
        <div className='filterone'>
            <div className='filter'>
                <h6>Filters</h6>
            </div>
            <hr />
            <div className='attribute'>
                <h6>Attribute</h6>
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Women</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Men</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Children</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>Accessories</label> <br />
                <div className='showmor'>
                    <a href="#show" class="">
                        show more
                    </a>
                </div>
                <hr />
            </div>
            <div>
                <div>
                    <h6>Color</h6>
                </div>
                <div className='colorfilter'>
                    <div class="red_div"></div><br />
                    <div class="red_div1"></div>
                    <div class="red_div2"></div>
                    <div class="red_div3"></div>
                </div>
                <br />
                <div className='colorfilter'>
                    <div class="red_div4"></div><br />
                    <div class="red_div5"></div>
                    <div class="red_div6"></div>
                    <div class="red_div7"></div>
                </div>
                <br />
            </div>
            <hr />
            <div>
                <h6>Attribute</h6>
                <input type="checkbox" id="option" name="option" value="option" />
                <label>S</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>M</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>L</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>XL</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>XXL</label> <br />
                <input type="checkbox" id="option" name="option" value="option" />
                <label>XXXL</label> <br />

                <hr />
            </div>
        </div>

    )
}

export default Filter