import React, { useEffect, useState } from 'react'

const ModalDeclarate = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }
}

export default ModalDeclarate
