import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import OnePassenger from './OnePassenger'


class AllPassengers extends Component {  
    // constructor() {
    //     super()
    //     this.state = {
    //         data: []
    //     }
    // }  

    // componentDidMount = async () => {
    //         await this.setState({
    //             data: this.props.passengers
    //     })
    // }
    render() {
        return(
            <div>
                <h1>This is All passengers.</h1>
                {this.props.passengers.map((passenger, index) => (
                <OnePassenger 
                deletePassenger={this.props.deletePassenger} 
                passenger={passenger} 
                key={index} 
                id={index} 
                loadData={this.props.loadData}
                editModal={this.props.editModal}
                />))}
                <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={10}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.props.handlePageClicked}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages pagination'}
                  activeClassName={'active'}
                />
            </div>
        )
    }
}


export default AllPassengers