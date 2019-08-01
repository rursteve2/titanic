import React, { Component } from 'react'
// import ReactPaginate from 'react-paginate'
import OnePassenger from './OnePassenger'
import PropTypes from 'prop-types';

// import Pagination from 'react-paginating'
let forwardPage = 10
let backPage = 0


class AllPassengers extends Component {  
    static propTypes = {
        url: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        perPage: PropTypes.number.isRequired,
      };
    constructor() {
        super() 
        this.state = {
            allData: [],
            selectedData: [],
            limit: 10,
            pageCount: 8,
            currentPage: 1
        }
    }
    nextPage = () => {
        if (forwardPage < this.props.passengers.length ) {
        forwardPage += 10
        backPage += 10
        this.setState({
            selectedData: this.props.passengers.slice(backPage, forwardPage)
        })
    }
      };

    backOnePage = () => {
        if (backPage > 0 || forwardPage > 10) {
        forwardPage -= 10
        backPage -= 10
        this.setState({
            selectedData: this.props.passengers.slice(backPage, forwardPage)
        })
    }
    }

    renderPages = () => {
        this.setState({
            allData: this.props.passengers,
            selectedData: this.props.passengers.slice(backPage, forwardPage)
        })
    }

    render() {
        return(
            <div>
                <h1>This is All passengers.</h1>
                <button onClick={this.renderPages}>Load Data</button>
                {this.state.selectedData.map((passenger, index) => (
                <OnePassenger 
                deletePassenger={this.props.deletePassenger} 
                passenger={passenger} 
                key={index} 
                id={index} 
                loadData={this.props.loadData}
                editModal={this.props.editModal}
                />))}
                <div className="pagebuttons">
                    <button onClick={this.backOnePage}>Previous 10</button>
                    <button onClick={this.nextPage}>Next 10</button>
                </div>
            </div>
        )
    }
}


export default AllPassengers