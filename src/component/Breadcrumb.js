import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { FiSliders } from "react-icons/fi";
import { RiArrowUpDownLine } from "react-icons/ri";
import "../Style/Filters.scss"

function Breadcrum() {
  return (
    <div className='container bread'>
      <div class="aem-Grid aem-Grid--12 desk">
        <div class="aem-GridColumn aem-GridColumn--default--3">
          <div><Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="text.primary" href="/">
              Clothing
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/"
            >
              Women’s
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/"
            >
              Outerwear
            </Link>
          </Breadcrumbs></div>
        </div>
        <div class="aem-GridColumn aem-GridColumn--default--9">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--10">
              <h6>38 Results</h6>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--2">
              <select name="Sort by Latest" id="Sort by Latest">
                <option value="Sort by Latest">Sort by Latest</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="cato">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="text.primary" href="/">
              Clothing
            </Link>
            <Link underline="hover" color="text.primary" href="/">
              Women’s
            </Link>
            <Link underline="hover" color="text.primary" href="/">
              Outerwear
            </Link>
          </Breadcrumbs>
        </div>

        <div className="aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--default--6">
            <h5><FiSliders />&nbsp;&nbsp;&nbsp;Filter Results</h5>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--6">
            <h5><RiArrowUpDownLine />&nbsp;&nbsp;&nbsp;Sort by Latest</h5>
          </div>
        </div>

        <h6>38 Results</h6>
      </div>
    </div>
  )
}

export default Breadcrum