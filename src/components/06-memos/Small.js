import React, {memo} from 'react'

export const Small = memo(({value}) => {
    console.log('me renderice')
    return (
        <small>{value}</small>
    )
})
