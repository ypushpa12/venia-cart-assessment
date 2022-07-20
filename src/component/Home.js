import React from 'react'
import Products from './Products';
import Filters from './Filters';
import Hero from './Hero';
import Breadcrumb from './Breadcrumb';

function Home({ category }) {
    return (
        <>
            <Hero />
            <div>
                <Breadcrumb />
            </div>
            <div class="aem-Grid aem-Grid--12 container">
                <div class="aem-GridColumn aem-GridColumn--default--3">
                    <Filters />
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                    <Products category={category} />
                </div>
            </div>
        </>

    )
}

export default Home
