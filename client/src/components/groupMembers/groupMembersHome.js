import React, { Component } from "react";
import User from "./UserCard";

function GroupMembersHome (props) {

    let gmember = props.members || []
   //Console Log gmember will show the below object example being passed in. Must set initial array value as [] or it will not map. 
    // avatar: null
    // email: "my@email.com"
    // firstName: "Joe"
    // id: 1
    // lastName: "Man"
    // password: "password"
    // superlative: "Most Likely to Be Cool"
    // console.log ("this be da membas", gmember)

        return(
     
            <div className="card col">
                <div className="card-header">
                    <h5>Members</h5>
                    <a className="waves-effect waves-light btn modal-trigger" data-target="modal1">edit</a>

                  {/* <!-- Modal Structure --> */}
                  <div id="modal1" className="modal twilio-modal">
                    <div className="modal-content">
                      <h4>Edit Group Members</h4>
                      <form>
                        <input
                          value={this.state.gmember}
                          name="phoneNumber"
                          //the onChange is what tells React to update the DOM
                          onChange={this.handleInputChange}
                          type="text"
                          placeholder="ex: 8008765309"
                        />
                        <div className="modal-footer">
                          <a data-target="modal1" className="modal-close waves-effect waves-green btn-flat modal-submit-button" type="submit" onClick={this.handleInvite}>Submit</a>
                          <a data-target="modal1" className="modal-close waves-effect waves-green btn-flat modal-cancel-btn" type="button">Cancel</a>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>
     {gmember.map(item => (

        <User 
           name= {item.firstName}
           lastName= {item.lastName}
           avatar= {item.avatar == null || item.avatar == "" ? `../Images/avatar-01.png` : `${item.avatar}`}
           superlative={item.superlative}
        />
     ))}

                        
            </div>
            
                //component for user row (photo, name, superlative, divider)
        )       //call the user component as many times as necessary
    
}

export default GroupMembersHome;