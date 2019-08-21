import React, { Component } from 'react';
import Superlatives from '../Superlatives/superlatives';
import SuperlativesForm from '../Superlatives/addSuperlativeForm';
import api from '../../../api'


class SuperlativeTab extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            superlatives: [],
        };

        this.updateSuperlatives = this.updateSuperlatives.bind(this)
    }

    componentDidMount() {
        this.fetchAllSuperlatives()
    }

    async fetchAllSuperlatives() {
        const res = await api.superlative.getEventSuperlatives(this.props.eventId)
        if (res.error) {
            console.log(res)
        } else {
            this.setState({
                superlatives: res.data.superlatives
            })
        }
    }

    updateSuperlatives(superlatives) {
        this.setState({
            superlatives: superlatives
        })
    }

    render() {
        return (
            <div>
                <SuperlativesForm
                    eventId={this.props.eventId}
                    userId={this.props.userId}
                    friends={this.props.friends}
                    update={this.updateSuperlatives}
                />
                <Superlatives superlatives={this.state.superlatives} />
            </div>
        );
    }

}
export default SuperlativeTab;