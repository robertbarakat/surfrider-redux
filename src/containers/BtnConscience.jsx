import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pointsConscience } from '../actions';
import imgReputation from '../img/reputation.jpg';

class BtnConscience extends Component {

  render() {
    return (

      <div className="mt-2 ml-5 mr-5">
        <button onClick={() => this.props.pointsConscience(1)}>
          <p>+1 prise de conscience</p>
          <img src={imgReputation} alt='' className='img-fluid rounded-circle' width='45' />
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