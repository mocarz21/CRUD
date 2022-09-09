


const dateToStr = getData => {

    let strDate = getData.getDate() + ':' + (getData.getMonth()+1) + ':' + getData.getFullYear()

    return( 

        strDate

    )
    
}

export default dateToStr