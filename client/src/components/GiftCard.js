import React, { Component } from 'react'
import Terms from './Terms'


class GiftCard extends Component {
    render() {
        return (
            <>
                <div className="form-group form-check mt-5">
                    <Terms />
                </div>



                <button type="submit" className="btn btn-lg btn-block text-white mt-4" style={{ background: "#FF9D5C" }}>Place order ($)</button>
            </>
        )
    }
}

export default GiftCard