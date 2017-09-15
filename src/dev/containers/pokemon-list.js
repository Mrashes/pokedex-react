import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'

class UserList extends Component {
    
    createListItems() {
        return this.props.pokemon.map((pokemon) => {
            return (
                <li 
                    key={pokemon.id} 
                    onClick={() => this.props.selectUser(user)}
                >
                {user.first} {user.last}</li>
            )
        });
    }


    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch)
}

function mapStateToProps(state) {
    return {
      users: state.users
    };
  }
  
export default connect(mapStateToProps, matchDispatchToProps)(UserList);