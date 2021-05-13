import React from 'react';
import { connect } from 'react-redux';
 
function Container (props){

    return (
        <div className='Container'>
            {props.state}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        data: state
    }
}

export default connect(mapStateToProps)(Container);