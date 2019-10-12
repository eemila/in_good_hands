import React from 'react';

import DataNo from './DataNo';

const Data = () => (
    <section className="numbers-sec">
        <div className="ctn-main">
            <div className="numbers-ctn">
                <DataNo number="10" done="ODDANYCH WORKÓW" lorem="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."/>
                <DataNo number="5" done="WSPARTYCH ORGANIZACJI" lorem="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."/>
                <DataNo number="7" done="ZORANIZOWANYCH ZBIÓREK" lorem="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."/>
            </div>
           
        </div>
    </section>
)

export default Data;