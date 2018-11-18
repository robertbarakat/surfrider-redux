import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pointsConscience } from '../actions';
import imgReputation from '../img/reputation.jpg';

class BtnConscience extends Component {

    render() {
        return (

            <div className="action mt-4 ml-5 mr-5">
                <p><strong>1 prise de conscience</strong></p>
                <button className='mb-2'>
                    <img src={imgReputation} alt='' onClick={() => this.props.pointsConscience(1)} className='img-fluid rounded-circle' width='45' />
                </button>
            </div>
        );
    }
}

function mstp(state) {
    // pour utiliser une fonction modifiant dechetsJetes je dois importer dechetsJetes 
    return {
        priseConscience: state.priseConscience
    }
}

function mdtp(dispatch) {
    return bindActionCreators({ pointsConscience }, dispatch)
}

export default connect(mstp, mdtp)(BtnConscience);