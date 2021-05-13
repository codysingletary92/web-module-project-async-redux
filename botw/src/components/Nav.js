import React from 'react';
import {connect} from 'react-redux';
import Button from './Button'
import { getData } from '../actions/index'

export function Nav (props) {
    const categories = ['Creatures', 'Equipment', 'Materials', 'Monsters', 'Treasure']

    const fetchData = e => {
        e.preventDefault();
        props.getData();
    }

    return(
        <div className='Nav'>
            {categories.map((item,index) => 
                <button key={index} onClick={fetchData}>{item}</button>
            )}
        </div>
    )
}




export default connect(null, {getData})(Nav)